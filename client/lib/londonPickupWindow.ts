/** UK pickup rules: wall clock in Europe/London, minimum lead time from "now". */

export const LONDON_TZ = "Europe/London";

const MIN_LEAD_MS = 2 * 60 * 60 * 1000;

export function getMinimumPickupUtcMs(): number {
  return Date.now() + MIN_LEAD_MS;
}

export function getLondonYmd(utcMs: number): { y: number; m0: number; d: number } {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: LONDON_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const p = fmt.formatToParts(new Date(utcMs));
  const g = (t: Intl.DateTimeFormatPartTypes) => Number(p.find((x) => x.type === t)?.value);
  return { y: g("year"), m0: g("month") - 1, d: g("day") };
}

/** UTC instant when London clocks show this calendar date & 24h time. */
export function getUtcMillisForLondonWallClock(
  fullYear: number,
  monthIndex0: number,
  day: number,
  hour24: number,
  minute: number,
): number {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: LONDON_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const read = (ms: number) => {
    const parts = fmt.formatToParts(new Date(ms));
    const g = (t: Intl.DateTimeFormatPartTypes) => Number(parts.find((x) => x.type === t)?.value);
    return {
      y: g("year"),
      m: g("month"),
      d: g("day"),
      h: g("hour"),
      M: g("minute"),
    };
  };
  const target =
    fullYear * 1e12 + (monthIndex0 + 1) * 1e10 + day * 1e8 + hour24 * 1e6 + minute;
  let lo = Date.UTC(fullYear, monthIndex0, day, hour24, minute, 0) - 16 * 3600 * 1000;
  let hi = Date.UTC(fullYear, monthIndex0, day, hour24, minute, 0) + 16 * 3600 * 1000;
  for (let i = 0; i < 56; i++) {
    const mid = Math.floor((lo + hi) / 2);
    const r = read(mid);
    const key = r.y * 1e12 + r.m * 1e10 + r.d * 1e8 + r.h * 1e6 + r.M;
    if (key === target) return mid;
    if (key < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return Math.floor((lo + hi) / 2);
}

function parseTime12hToHour24(time12h: string): { h24: number; mm: number } | null {
  const m = time12h.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return null;
  let hh = Number(m[1]);
  const mm = Number(m[2]);
  const mer = m[3].toUpperCase();
  if (!Number.isFinite(hh) || !Number.isFinite(mm)) return null;
  hh = Math.min(12, Math.max(1, hh));
  const minute = Math.min(59, Math.max(0, mm));
  let h24 = hh % 12;
  if (mer === "PM") h24 += 12;
  return { h24, mm: minute };
}

export function time24To12hString(h24: number, mm: number): string {
  const p: "AM" | "PM" = h24 >= 12 ? "PM" : "AM";
  let h12 = h24 % 12;
  if (h12 === 0) h12 = 12;
  return `${String(h12).padStart(2, "0")}:${String(mm).padStart(2, "0")} ${p}`;
}

/** Calendar date from widget (Y/M/D) + 12h label interpreted as London local time → UTC ms. */
export function getPickupUtcMsFromCalendarDateAndTime12h(calendarDate: Date, time12h: string): number | null {
  const y = calendarDate.getFullYear();
  const m0 = calendarDate.getMonth();
  const d = calendarDate.getDate();
  const parsed = parseTime12hToHour24(time12h);
  if (!parsed) return null;
  return getUtcMillisForLondonWallClock(y, m0, d, parsed.h24, parsed.mm);
}

export function isPickupAtLeastTwoHoursAheadLondon(calendarDate: Date, time12h: string): boolean {
  const pickup = getPickupUtcMsFromCalendarDateAndTime12h(calendarDate, time12h);
  if (pickup == null) return false;
  return pickup >= getMinimumPickupUtcMs();
}

/** First HH:MM (12h string) on that London calendar day that satisfies the min lead-time rule, or null if none left that day. */
export function getFirstValidTime12hOnLondonDay(
  y: number,
  m0: number,
  d: number,
  minUtcMs: number,
): string | null {
  for (let total = 0; total < 24 * 60; total++) {
    const h24 = Math.floor(total / 60);
    const mm = total % 60;
    const utc = getUtcMillisForLondonWallClock(y, m0, d, h24, mm);
    if (utc >= minUtcMs) return time24To12hString(h24, mm);
  }
  return null;
}

/** London calendar day of `calendarDate` is strictly before the London calendar day of `minUtcMs`. */
export function isCalendarDayDisabledForMinPickup(calendarDate: Date, minUtcMs: number): boolean {
  const y = calendarDate.getFullYear();
  const m0 = calendarDate.getMonth();
  const d = calendarDate.getDate();
  const minYmd = getLondonYmd(minUtcMs);
  if (y < minYmd.y) return true;
  if (y > minYmd.y) return false;
  if (m0 < minYmd.m0) return true;
  if (m0 > minYmd.m0) return false;
  return d < minYmd.d;
}

export function getLondonWallClockFromUtc(utcMs: number): {
  y: number;
  m0: number;
  d: number;
  h24: number;
  mm: number;
} {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: LONDON_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const p = fmt.formatToParts(new Date(utcMs));
  const g = (t: Intl.DateTimeFormatPartTypes) => Number(p.find((x) => x.type === t)?.value);
  return {
    y: g("year"),
    m0: g("month") - 1,
    d: g("day"),
    h24: g("hour"),
    mm: g("minute"),
  };
}
