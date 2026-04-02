import { useCallback, useLayoutEffect, useRef, useState } from "react";
import {
    getFirstValidTime12hOnLondonDay,
    getLondonWallClockFromUtc,
    getMinimumPickupUtcMs,
    getUtcMillisForLondonWallClock,
    time24To12hString,
} from "@/lib/londonPickupWindow";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const ROW_PX = 40;
const VIEW_H = 200;
const PAD_Y = (VIEW_H - ROW_PX) / 2;

const HOURS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
const MINUTES = Array.from({ length: 60 }, (_, i) => i);
const PERIODS = ["AM", "PM"] as const;

export function parseTime12h(input: string): { h: number; m: number; p: "AM" | "PM" } {
    const m = input.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!m) return { h: 12, m: 0, p: "AM" };
    let h = parseInt(m[1], 10);
    const min = parseInt(m[2], 10);
    const p = m[3].toUpperCase() === "PM" ? "PM" : "AM";
    h = Number.isFinite(h) ? Math.min(12, Math.max(1, h)) : 12;
    const minute = Number.isFinite(min) ? Math.min(59, Math.max(0, min)) : 0;
    return { h, m: minute, p };
}

export function formatTime12h(h: number, m: number, p: "AM" | "PM"): string {
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")} ${p}`;
}

function nowTo12h(): { h: number; m: number; p: "AM" | "PM" } {
    const d = new Date();
    let h24 = d.getHours();
    const p: "AM" | "PM" = h24 >= 12 ? "PM" : "AM";
    let h12 = h24 % 12;
    if (h12 === 0) h12 = 12;
    return { h: h12, m: d.getMinutes(), p };
}

type ScrollColumnProps<T extends string | number> = {
    label: string;
    items: readonly T[];
    value: T;
    onChange: (v: T) => void;
    format?: (v: T) => string;
    mutedClassName?: string;
};

function ScrollColumn<T extends string | number>({
    label,
    items,
    value,
    onChange,
    format = (v) => String(v),
    mutedClassName = "bg-slate-100/80",
}: ScrollColumnProps<T>) {
    const scRef = useRef<HTMLDivElement>(null);
    const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const scrollToIndex = useCallback(
        (index: number, behavior: ScrollBehavior = "auto") => {
            const el = scRef.current;
            if (!el) return;
            const clamped = Math.max(0, Math.min(items.length - 1, index));
            el.scrollTo({ top: clamped * ROW_PX, behavior });
        },
        [items.length],
    );

    useLayoutEffect(() => {
        const el = scRef.current;
        if (!el) return;
        const idx = items.indexOf(value);
        if (idx < 0) return;
        const target = idx * ROW_PX;
        if (Math.abs(el.scrollTop - target) < ROW_PX / 4) return;
        el.scrollTop = target;
    }, [value, items]);

    const onScroll = () => {
        if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
        scrollEndTimer.current = setTimeout(() => {
            const el = scRef.current;
            if (!el) return;
            const raw = el.scrollTop / ROW_PX;
            const idx = Math.round(raw);
            const clamped = Math.max(0, Math.min(items.length - 1, idx));
            scrollToIndex(clamped, "smooth");
            onChange(items[clamped]);
        }, 80);
    };

    return (
        <div className="flex flex-1 flex-col min-w-0">
            <div
                className={cn(
                    "text-center text-[11px] font-semibold uppercase tracking-wide text-slate-500 py-2 border-b border-slate-200",
                    mutedClassName,
                )}
            >
                {label}
            </div>
            <div className={cn("relative", mutedClassName === "bg-white" ? "bg-white" : "")}>
                <div
                    className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 border-y border-slate-300 h-10"
                    aria-hidden
                />
                <div
                    ref={scRef}
                    onScroll={onScroll}
                    className="overflow-y-auto overscroll-contain"
                    style={{
                        height: VIEW_H,
                        scrollSnapType: "y mandatory",
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    <div style={{ height: PAD_Y }} aria-hidden />
                    {items.map((item) => {
                        const selected = item === value;
                        return (
                            <button
                                key={String(item)}
                                type="button"
                                onClick={() => {
                                    const idx = items.indexOf(item);
                                    scrollToIndex(idx, "smooth");
                                    onChange(item);
                                }}
                                className={cn(
                                    "flex h-10 w-full shrink-0 snap-center items-center justify-center text-[15px] font-medium transition-colors",
                                    selected ? "text-slate-900" : "text-slate-400",
                                )}
                            >
                                {format(item)}
                            </button>
                        );
                    })}
                    <div style={{ height: PAD_Y }} aria-hidden />
                </div>
            </div>
        </div>
    );
}

type BookingYmd = { y: number; m0: number; d: number };

type PickupTimePickerDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    value: string;
    onCommit: (time: string) => void;
    /** When set, pickup uses this calendar day in UK (London) with the chosen time. */
    bookingYmdLondon?: BookingYmd;
    /** Return an error message to block commit, or null if OK. */
    getCommitError?: (time12h: string) => string | null;
    /** When dialog opens, replace invalid time with parent-suggested string. */
    sanitizeOnOpen?: (current: string) => string;
};

export function PickupTimePickerDialog({
    open,
    onOpenChange,
    value,
    onCommit,
    bookingYmdLondon,
    getCommitError,
    sanitizeOnOpen,
}: PickupTimePickerDialogProps) {
    const [hour, setHour] = useState(9);
    const [minute, setMinute] = useState(0);
    const [period, setPeriod] = useState<"AM" | "PM">("AM");
    const [commitError, setCommitError] = useState("");

    useLayoutEffect(() => {
        if (!open) return;
        setCommitError("");
        const raw = sanitizeOnOpen ? sanitizeOnOpen(value) : value;
        const p = parseTime12h(raw);
        setHour(p.h);
        setMinute(p.m);
        setPeriod(p.p);
    }, [open, value, sanitizeOnOpen]);

    const preview = formatTime12h(hour, minute, period);

    const applyNow = () => {
        setCommitError("");
        if (bookingYmdLondon) {
            const minMs = getMinimumPickupUtcMs();
            const { y, m0, d } = bookingYmdLondon;
            const londonNow = getLondonWallClockFromUtc(Date.now());
            const sameDay =
                londonNow.y === y && londonNow.m0 === m0 && londonNow.d === d;
            if (sameDay) {
                const utcNowPick = getUtcMillisForLondonWallClock(
                    y,
                    m0,
                    d,
                    londonNow.h24,
                    londonNow.mm,
                );
                if (utcNowPick >= minMs) {
                    const p = parseTime12h(time24To12hString(londonNow.h24, londonNow.mm));
                    setHour(p.h);
                    setMinute(p.m);
                    setPeriod(p.p);
                    return;
                }
            }
            const first = getFirstValidTime12hOnLondonDay(y, m0, d, minMs);
            if (first) {
                const p = parseTime12h(first);
                setHour(p.h);
                setMinute(p.m);
                setPeriod(p.p);
                return;
            }
        }
        const n = nowTo12h();
        setHour(n.h);
        setMinute(n.m);
        setPeriod(n.p);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className={cn(
                    "z-[200] max-w-[340px] gap-0 border border-slate-200 p-0 shadow-2xl sm:rounded-2xl overflow-hidden",
                    "[&>button]:text-slate-500 [&>button]:top-3 [&>button]:right-3",
                )}
            >
                <DialogHeader className="px-4 pt-5 pb-3 border-b border-slate-200 space-y-0 relative">
                    <DialogTitle className="text-center text-base font-semibold text-slate-900 pr-6">
                        Set time
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                        Choose pickup hour, minutes, and AM or PM, then confirm
                    </DialogDescription>
                </DialogHeader>

                <div className="px-4 py-3 flex items-center justify-between border-b border-slate-100">
                    <span className="text-base font-bold text-slate-900 tabular-nums">{preview}</span>
                    <button
                        type="button"
                        onClick={applyNow}
                        className="text-sm font-semibold text-[#487307] hover:text-[#3a5c05] transition-colors"
                    >
                        NOW
                    </button>
                </div>

                <div className="flex divide-x divide-slate-200 border-b border-slate-100 bg-slate-50/50">
                    <ScrollColumn
                        label="Hour"
                        items={HOURS}
                        value={hour}
                        onChange={(v) => setHour(v as number)}
                        mutedClassName="bg-slate-100/80"
                    />
                    <ScrollColumn
                        label="Minute"
                        items={MINUTES}
                        value={minute}
                        onChange={(v) => setMinute(v as number)}
                        format={(m) => (m as number).toString().padStart(2, "0")}
                        mutedClassName="bg-white"
                    />
                    <ScrollColumn<"AM" | "PM">
                        label="AM/PM"
                        items={PERIODS}
                        value={period}
                        onChange={(v) => setPeriod(v)}
                        mutedClassName="bg-white"
                    />
                </div>

                {commitError ? (
                    <p className="px-4 pb-2 text-center text-sm text-red-600">{commitError}</p>
                ) : null}
                <div className="flex gap-3 p-4 bg-white">
                    <button
                        type="button"
                        onClick={() => {
                            setCommitError("");
                            onOpenChange(false);
                        }}
                        className="flex-1 rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            const err = getCommitError?.(preview) ?? null;
                            if (err) {
                                setCommitError(err);
                                return;
                            }
                            setCommitError("");
                            onCommit(preview);
                            onOpenChange(false);
                        }}
                        className="flex-1 rounded-xl bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] py-3 text-sm font-semibold text-white shadow-md shadow-[#487307]/25 hover:opacity-95 transition-opacity"
                    >
                        Set
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
