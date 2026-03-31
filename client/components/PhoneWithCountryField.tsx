import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export type CountryDialOption = {
    name: string;
    code: string;
    iso: string;
};

export const DEFAULT_PHONE_COUNTRY: CountryDialOption = {
    name: "United Kingdom",
    code: "+44",
    iso: "gb",
};

function matchCountryFromDialCode(
    countries: CountryDialOption[],
    full: string,
): { country: CountryDialOption; local: string } | null {
    const t = full.trim();
    if (!t || !countries.length) return null;
    const sorted = [...countries].sort((a, b) => b.code.length - a.code.length);
    for (const c of sorted) {
        if (t.startsWith(c.code)) {
            return { country: c, local: t.slice(c.code.length).trim() };
        }
    }
    return null;
}

export function formatFullPhone(country: CountryDialOption, local: string): string {
    return `${country.code} ${local}`.trim();
}

type PhoneWithCountryFieldProps = {
    localPhone: string;
    onLocalPhoneChange: (value: string) => void;
    selectedCountry: CountryDialOption;
    onCountryChange: (country: CountryDialOption) => void;
    error?: string;
    label?: string;
    placeholder?: string;
    /** Full stored number e.g. "+44 7700 900000" — split once when countries load */
    initialFullPhone?: string;
};

export function PhoneWithCountryField({
    localPhone,
    onLocalPhoneChange,
    selectedCountry,
    onCountryChange,
    error,
    label = "Phone Number *",
    placeholder = "7400 123456",
    initialFullPhone,
}: PhoneWithCountryFieldProps) {
    const [countries, setCountries] = useState<CountryDialOption[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<CountryDialOption[]>([]);
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState("");
    const [isLoadingCountries, setIsLoadingCountries] = useState(true);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const hydratedRef = useRef(false);
    const initialPhoneRef = useRef(initialFullPhone);
    initialPhoneRef.current = initialFullPhone;

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setIsLoadingCountries(true);
                const response = await fetch("https://restcountries.com/v3.1/all?fields=name,idd,cca2");
                const data = await response.json();

                const formatted: CountryDialOption[] = data
                    .map(
                        (country: {
                            name: { common: string };
                            idd: { root?: string; suffixes?: string[] };
                            cca2: string;
                        }) => ({
                            name: country.name.common,
                            code: (country.idd.root || "") + (country.idd.suffixes?.[0] || ""),
                            iso: country.cca2.toLowerCase(),
                        }),
                    )
                    .filter((c: CountryDialOption) => c.code && c.code !== "+")
                    .sort((a: CountryDialOption, b: CountryDialOption) => a.name.localeCompare(b.name));

                setCountries(formatted);
                setFilteredCountries(formatted);

                if (!initialPhoneRef.current?.trim()) {
                    const uk = formatted.find((c) => c.iso === "gb");
                    if (uk) onCountryChange(uk);
                }
            } catch {
                const fallback: CountryDialOption[] = [
                    DEFAULT_PHONE_COUNTRY,
                    { name: "United States", code: "+1", iso: "us" },
                    { name: "India", code: "+91", iso: "in" },
                ];
                setCountries(fallback);
                setFilteredCountries(fallback);
                if (!initialPhoneRef.current?.trim()) {
                    onCountryChange(fallback[0]);
                }
            } finally {
                setIsLoadingCountries(false);
            }
        };

        fetchCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps -- load dial list once
    }, []);

    useEffect(() => {
        if (!countries.length || hydratedRef.current) return;
        const full = initialPhoneRef.current?.trim();
        if (!full) return;
        const matched = matchCountryFromDialCode(countries, full);
        if (matched) {
            hydratedRef.current = true;
            onCountryChange(matched.country);
            onLocalPhoneChange(matched.local);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- one-shot hydrate; stabilizing callbacks would need useCallback in parent
    }, [countries]);

    useEffect(() => {
        if (countrySearch.trim() === "") {
            setFilteredCountries(countries);
        } else {
            const q = countrySearch.toLowerCase();
            setFilteredCountries(
                countries.filter(
                    (c) => c.name.toLowerCase().includes(q) || c.code.includes(countrySearch),
                ),
            );
        }
    }, [countrySearch, countries]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsCountryDropdownOpen(false);
                setCountrySearch("");
            }
        }

        if (isCountryDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isCountryDropdownOpen]);

    const inputBase =
        "w-full px-4 py-3 border border-slate-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-[#487307]/30 text-sm sm:text-base min-h-[48px]";

    return (
        <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
            <div className="relative flex">
                <div className="relative shrink-0" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        disabled={isLoadingCountries}
                        className="h-full min-h-[48px] min-w-[85px] flex items-center justify-center gap-1.5 px-2.5 border-2 border-slate-200 border-r-0 rounded-l-xl bg-slate-50 hover:bg-slate-100 transition-colors whitespace-nowrap disabled:opacity-50"
                    >
                        {isLoadingCountries ? (
                            <span className="text-xs text-slate-500">…</span>
                        ) : (
                            <>
                                <img
                                    src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
                                    alt=""
                                    className="w-6 h-auto rounded-sm shadow-sm"
                                />
                                <span className="text-sm font-bold text-slate-700">{selectedCountry.code}</span>
                            </>
                        )}
                    </button>

                    {isCountryDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl z-[60] overflow-hidden">
                            <div className="p-3 border-b border-slate-200 bg-slate-50">
                                <input
                                    type="text"
                                    value={countrySearch}
                                    onChange={(e) => setCountrySearch(e.target.value)}
                                    placeholder="Search country or code..."
                                    className="w-full px-4 py-2 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#487307]/30 text-sm"
                                    autoFocus
                                />
                            </div>
                            <div
                                className="max-h-64 overflow-y-auto py-2 overscroll-contain"
                                onWheel={(e) => e.stopPropagation()}
                                data-lenis-prevent-wheel
                            >
                                {filteredCountries.length > 0 ? (
                                    filteredCountries.map((country) => (
                                        <button
                                            key={country.name + country.code}
                                            type="button"
                                            onClick={() => {
                                                onCountryChange(country);
                                                setIsCountryDropdownOpen(false);
                                                setCountrySearch("");
                                            }}
                                            className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-50 transition-colors text-left"
                                        >
                                            <img
                                                src={`https://flagcdn.com/w40/${country.iso}.png`}
                                                alt=""
                                                className="w-6 h-auto rounded-sm shadow-sm"
                                            />
                                            <span className="flex-1 text-sm font-medium text-slate-700">
                                                {country.name}
                                            </span>
                                            <span className="text-xs font-semibold text-slate-400">{country.code}</span>
                                        </button>
                                    ))
                                ) : (
                                    <div className="px-4 py-8 text-center text-sm text-slate-500">
                                        No countries found matching &quot;{countrySearch}&quot;
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <input
                    type="tel"
                    value={localPhone}
                    onChange={(e) => onLocalPhoneChange(e.target.value)}
                    className={cn(
                        inputBase,
                        "rounded-l-none border-l-0 rounded-r-xl border-2 -ml-px",
                        error ? "border-red-300" : "border-slate-200 focus:border-[#487307]",
                    )}
                    placeholder={placeholder}
                    autoComplete="tel-national"
                />
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}
