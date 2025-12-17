import type { LucideIcon } from "lucide-react";

interface SectionChipProps {
    title: string;
    icon?: LucideIcon;
    className?: string;
}

export const SectionChip = ({
    title,
    className = ""
}: SectionChipProps) => {
    return (
        <div className={`inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm shadow-[#c9d6ff]/40 ${className}`}>
            <img
                src="/images/q-icon.png"
                alt="Quickoo"
                className="h-4 w-4 object-contain"
            />
            <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                {title}
            </span>
        </div>
    );
};
