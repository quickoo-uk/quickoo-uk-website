import { useState, useRef, useEffect, useLayoutEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, Clock, ChevronDown, ChevronLeft, ChevronRight, Plus, Plane, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/contexts/BookingContext";
import { bindPlacesAutocomplete, ensureGoogleMapsPlacesLoaded } from "@/lib/googlePlacesAutocomplete";
import { PickupTimePickerDialog } from "@/components/PickupTimePickerDialog";
import { fetchGetQuotes } from "@/lib/quotesApi";
import {
    getFirstValidTime24hOnLondonDay,
    getLondonYmd,
    getMinimumPickupUtcMs,
    isCalendarDayDisabledForMinPickup,
    isPickupAtLeastTwoHoursAheadLondon,
} from "@/lib/londonPickupWindow";

type DestinationRow = { id: string; value: string };

function newDestinationRow(): DestinationRow {
    return { id: crypto.randomUUID(), value: "" };
}

function getInitialBookingSlot(): { date: Date; time: string } {
    const minMs = getMinimumPickupUtcMs();
    const { y, m0, d } = getLondonYmd(Date.now());
    const date = new Date(y, m0, d);
    const time = getFirstValidTime24hOnLondonDay(y, m0, d, minMs) ?? "12:00";
    return { date, time };
}

export const BookingWidget = () => {
    const navigate = useNavigate();
    const { updateBookingData } = useBooking();
    const initialSlot = useMemo(() => getInitialBookingSlot(), []);
    const [selectedDate, setSelectedDate] = useState(initialSlot.date);
    const [selectedTime, setSelectedTime] = useState(initialSlot.time);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(
        () => new Date(initialSlot.date.getFullYear(), initialSlot.date.getMonth(), 1),
    );
    const [fromLocation, setFromLocation] = useState("");
    const [isFromAirport, setIsFromAirport] = useState(false);
    const [flightNumber, setFlightNumber] = useState("");
    const [destinations, setDestinations] = useState<DestinationRow[]>(() => [newDestinationRow()]);
    const destinationsRef = useRef(destinations);
    destinationsRef.current = destinations;

    const datePickerRef = useRef<HTMLDivElement>(null);
    const timePickerRef = useRef<HTMLDivElement>(null);
    const fromInputRef = useRef<HTMLInputElement>(null);
    const destInputByIdRef = useRef<Map<string, HTMLInputElement | null>>(new Map());
    const fromCoordsRef = useRef<{ latitude: number; longitude: number } | null>(null);
    const destCoordsByIdRef = useRef<Map<string, { latitude: number; longitude: number }>>(new Map());

    const destinationRowIds = destinations.map((r) => r.id).join("|");

    // Close pickers when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
                setShowDatePicker(false);
            }
            if (timePickerRef.current && !timePickerRef.current.contains(event.target as Node)) {
                const el = event.target as HTMLElement | null;
                if (el?.closest?.('[role="dialog"]')) return;
                setShowTimePicker(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleDestinationInputChange = useCallback((id: string, value: string) => {
        destCoordsByIdRef.current.delete(id);
        setDestinations((prev) => prev.map((row) => (row.id === id ? { ...row, value } : row)));
    }, []);

    const [searchError, setSearchError] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const bookingYmdLondon = useMemo(
        () => ({
            y: selectedDate.getFullYear(),
            m0: selectedDate.getMonth(),
            d: selectedDate.getDate(),
        }),
        [selectedDate],
    );

    useEffect(() => {
        const minMs = getMinimumPickupUtcMs();
        const y = selectedDate.getFullYear();
        const m0 = selectedDate.getMonth();
        const d = selectedDate.getDate();
        setSelectedTime((prev) => {
            if (isPickupAtLeastTwoHoursAheadLondon(selectedDate, prev)) return prev;
            return getFirstValidTime24hOnLondonDay(y, m0, d, minMs) ?? prev;
        });
    }, [selectedDate]);

    const sanitizeTimeOnPickerOpen = useCallback(
        (cur: string) => {
            if (isPickupAtLeastTwoHoursAheadLondon(selectedDate, cur)) return cur;
            const minMs = getMinimumPickupUtcMs();
            return (
                getFirstValidTime24hOnLondonDay(
                    bookingYmdLondon.y,
                    bookingYmdLondon.m0,
                    bookingYmdLondon.d,
                    minMs,
                ) ?? cur
            );
        },
        [selectedDate, bookingYmdLondon],
    );

    const getPickupTimeCommitError = useCallback(
        (t: string) =>
            isPickupAtLeastTwoHoursAheadLondon(selectedDate, t)
                ? null
                : "Pickup must be at least 2 hours from now (UK / London time).",
        [selectedDate],
    );

    /** From stays mounted outside tab animation — bind once per widget mount. */
    useLayoutEffect(() => {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
        if (!apiKey?.trim()) return;

        let cancelled = false;
        let rafId = 0;
        const sessionCleanups: (() => void)[] = [];

        const attach = () => {
            sessionCleanups.forEach((fn) => fn());
            sessionCleanups.length = 0;
            const el = fromInputRef.current;
            if (el) {
                sessionCleanups.push(
                    bindPlacesAutocomplete(el, (place) => {
                        fromCoordsRef.current = {
                            latitude: place.latitude,
                            longitude: place.longitude,
                        };
                        setFromLocation(place.formattedAddress);
                        setIsFromAirport(!!place.isAirport);
                    }),
                );
            }
        };

        ensureGoogleMapsPlacesLoaded(apiKey)
            .then(() => {
                if (cancelled) return;
                rafId = requestAnimationFrame(() => {
                    rafId = 0;
                    if (cancelled) return;
                    attach();
                });
            })
            .catch(() => {
                /* invalid key / network */
            });

        return () => {
            cancelled = true;
            if (rafId) cancelAnimationFrame(rafId);
            sessionCleanups.forEach((fn) => fn());
            sessionCleanups.length = 0;
        };
    }, []);

    /** To / stops — rebind only when row ids change, not on every keystroke. */
    useLayoutEffect(() => {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
        if (!apiKey?.trim()) return;

        let cancelled = false;
        let rafId = 0;
        const sessionCleanups: (() => void)[] = [];

        const attach = () => {
            sessionCleanups.forEach((fn) => fn());
            sessionCleanups.length = 0;
            for (const row of destinationsRef.current) {
                const el = destInputByIdRef.current.get(row.id);
                if (el) {
                    sessionCleanups.push(
                        bindPlacesAutocomplete(el, (place) => {
                            destCoordsByIdRef.current.set(row.id, {
                                latitude: place.latitude,
                                longitude: place.longitude,
                            });
                            setDestinations((prev) =>
                                prev.map((r) =>
                                    r.id === row.id ? { ...r, value: place.formattedAddress } : r,
                                ),
                            );
                        }),
                    );
                }
            }
        };

        ensureGoogleMapsPlacesLoaded(apiKey)
            .then(() => {
                if (cancelled) return;
                rafId = requestAnimationFrame(() => {
                    rafId = 0;
                    if (cancelled) return;
                    attach();
                });
            })
            .catch(() => { });

        return () => {
            cancelled = true;
            if (rafId) cancelAnimationFrame(rafId);
            sessionCleanups.forEach((fn) => fn());
            sessionCleanups.length = 0;
        };
    }, [destinationRowIds]);

    // Format date for display
    const formatDate = (date: Date) => {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    };

    // Generate calendar days
    const generateCalendarDays = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const days = [];

        // Add empty cells for days before month starts
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(year, month, day));
        }

        return days;
    };

    const calendarDays = generateCalendarDays();

    const goToPreviousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const isSameDay = (date1: Date, date2: Date) => {
        return date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear();
    };

    const isToday = (date: Date) => {
        const today = new Date();
        return isSameDay(date, today);
    };

    const handleAddDestination = () => {
        setDestinations((prev) => (prev.length < 4 ? [...prev, newDestinationRow()] : prev));
    };

    const handleRemoveDestination = (id: string) => {
        destCoordsByIdRef.current.delete(id);
        setDestinations((prev) => prev.filter((row) => row.id !== id));
    };

    const handleSearch = async () => {
        setSearchError("");

        const firstDestRow = destinations.find((d) => d.value.trim() !== "");
        if (!fromLocation.trim()) {
            setSearchError("Please enter a pickup location.");
            return;
        }
        if (!firstDestRow) {
            setSearchError("Please enter a destination.");
            return;
        }

        const isAirportPickup = isFromAirport || fromLocation.toLowerCase().includes("airport");
        if (isAirportPickup && !flightNumber.trim()) {
            setSearchError("Flight number is compulsory for airport pickups.");
            return;
        }

        if (!isPickupAtLeastTwoHoursAheadLondon(selectedDate, selectedTime)) {
            setSearchError(
                "Pickup date and time must be at least 2 hours from now (UK / London time).",
            );
            return;
        }

        const fromCoords = fromCoordsRef.current;
        const toCoords = destCoordsByIdRef.current.get(firstDestRow.id);
        if (!fromCoords || !toCoords) {
            setSearchError(
                "Please choose From and To from the Google suggestions list so we can calculate the route.",
            );
            return;
        }

        const pickupType = isAirportPickup ? "airport" : "standard";
        setIsSearching(true);
        try {
            const quoteResponse = await fetchGetQuotes({
                from: fromCoords,
                to: toCoords,
                pickup_type: pickupType,
            });
            updateBookingData({
                bookingType: "oneway",
                fromLocation,
                toLocation: destinations.map((d) => d.value),
                flightNumber,
                date: selectedDate,
                time: selectedTime,
                duration: "4 hours",
                quoteResponse,
                quotePickupType: pickupType,
                routePoints: {
                    from: {
                        address: fromLocation.trim(),
                        latitude: fromCoords.latitude,
                        longitude: fromCoords.longitude,
                    },
                    to: {
                        address: firstDestRow.value.trim(),
                        latitude: toCoords.latitude,
                        longitude: toCoords.longitude,
                    },
                    stops: destinations
                        .filter((d) => d.id !== firstDestRow.id && d.value.trim() !== "")
                        .map((d) => {
                            const coords = destCoordsByIdRef.current.get(d.id);
                            return coords
                                ? {
                                    address: d.value.trim(),
                                    latitude: coords.latitude,
                                    longitude: coords.longitude,
                                }
                                : null;
                        })
                        .filter((x): x is { address: string; latitude: number; longitude: number } => x !== null),
                },
                selectedCar: undefined,
            });
            navigate("/booking/select-car");
        } catch (e) {
            setSearchError(e instanceof Error ? e.message : "Could not load prices. Try again.");
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <div className="w-full mx-auto bg-white rounded-xl shadow-2xl overflow-visible font-inter border border-slate-100">
            {/* Content */}
            <div className="p-6 space-y-4 overflow-visible">
                {/* From — outside tab animation so the input/DOM node (and Places Autocomplete) are not torn down on tab change */}
                <div className="relative group">
                    <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#487307] transition-colors">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div className="pl-12 pr-4 py-3 bg-slate-50 rounded-lg border border-transparent group-hover:border-slate-200 focus-within:border-[#487307] focus-within:bg-white transition-all shadow-sm">
                        <label className="block text-xs font-semibold text-slate-500 mb-0.5">
                            From
                        </label>
                        <input
                            ref={fromInputRef}
                            type="text"
                            value={fromLocation}
                            onChange={(e) => {
                                fromCoordsRef.current = null;
                                setFromLocation(e.target.value);
                                setIsFromAirport(e.target.value.toLowerCase().includes("airport"));
                            }}
                            onInput={(e) => {
                                fromCoordsRef.current = null;
                                setFromLocation((e.target as HTMLInputElement).value);
                                setIsFromAirport((e.target as HTMLInputElement).value.toLowerCase().includes("airport"));
                            }}
                            placeholder="Address, airport, hotel, ..."
                            className="w-full bg-transparent border-none p-0 text-slate-900 placeholder-slate-400 focus:ring-0 text-sm font-medium outline-none"
                            autoComplete="off"
                        />
                    </div>
                </div>

                <div className="space-y-4 overflow-visible">
                    <div className="space-y-2">
                        {destinations.map((row, index) => (
                            <div key={row.id} className="relative group">
                                <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#487307] transition-colors z-10">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="pl-12 pr-10 py-3 bg-slate-50 rounded-lg border border-transparent group-hover:border-slate-200 focus-within:border-[#487307] focus-within:bg-white transition-all shadow-sm relative">
                                    <label className="block text-xs font-semibold text-slate-500 mb-0.5">
                                        To {destinations.length > 1 ? `#${index + 1}` : ""}
                                    </label>
                                    <input
                                        ref={(el) => {
                                            if (el) destInputByIdRef.current.set(row.id, el);
                                            else destInputByIdRef.current.delete(row.id);
                                        }}
                                        type="text"
                                        value={row.value}
                                        onChange={(e) =>
                                            handleDestinationInputChange(row.id, e.target.value)
                                        }
                                        onInput={(e) =>
                                            handleDestinationInputChange(
                                                row.id,
                                                (e.target as HTMLInputElement).value,
                                            )
                                        }
                                        placeholder="Address, airport, hotel, ..."
                                        className="w-full bg-transparent border-none p-0 text-slate-900 placeholder-slate-400 focus:ring-0 text-sm font-medium outline-none"
                                        autoComplete="off"
                                    />
                                    {/* Remove Button for extra destinations */}
                                    {destinations.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveDestination(row.id)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-red-500 transition-colors"
                                        >
                                            <div className="w-4 h-4 flex items-center justify-center font-bold">×</div>
                                        </button>
                                    )}
                                </div>

                                {/* Add Destination Button (only after the last input if less than 4) */}
                                {index === destinations.length - 1 && destinations.length < 4 && (
                                    <div className="flex justify-end mt-2">
                                        <button
                                            type="button"
                                            onClick={handleAddDestination}
                                            className="flex items-center gap-1.5 text-sm font-semibold text-[#487307] hover:text-[#3a5c05] transition-colors group/add"
                                        >
                                            <Plus className="w-5 h-5" strokeWidth={2.5} />
                                            <span>Add Stop</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Flight Number */}
                    <div className="relative group">
                        <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#487307] transition-colors z-10">
                            <Plane className="w-5 h-5" />
                        </div>
                        <div className="pl-12 pr-4 py-3 bg-slate-50 rounded-lg border border-transparent group-hover:border-slate-200 focus-within:border-[#487307] focus-within:bg-white transition-all shadow-sm">
                            <label className="block text-xs font-semibold text-slate-500 mb-0.5">
                                Flight Number {(isFromAirport || fromLocation.toLowerCase().includes("airport")) && <span className="text-red-500">(Required)</span>}
                            </label>
                            <input
                                type="text"
                                value={flightNumber}
                                onChange={(e) => setFlightNumber(e.target.value)}
                                placeholder="e.g. BA2490"
                                className="w-full bg-transparent border-none p-0 text-slate-900 placeholder-slate-400 focus:ring-0 text-sm font-medium outline-none"
                            />
                        </div>
                    </div>

                    {/* Date Picker */}
                    <div className="relative group" ref={datePickerRef}>
                        <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#487307] transition-colors z-10">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <div
                            onClick={() => {
                                setShowDatePicker(!showDatePicker);
                                setShowTimePicker(false);
                            }}
                            className={`pl-12 pr-4 py-3 bg-slate-50 rounded-lg border transition-all shadow-sm cursor-pointer ${showDatePicker
                                ? "border-[#487307] bg-white"
                                : "border-transparent group-hover:border-slate-200"
                                }`}
                        >
                            <label className="block text-xs font-semibold text-slate-500 mb-0.5">
                                Date
                            </label>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-900">
                                    {formatDate(selectedDate)}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showDatePicker ? "rotate-180" : ""}`} />
                            </div>
                        </div>

                        {/* Date Picker Dropdown */}
                        <AnimatePresence>
                            {showDatePicker && (
                                <motion.div
                                    data-lenis-prevent
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                                    className="absolute top-full mt-2 left-0 right-0 z-[100] max-h-[min(24rem,calc(100dvh-8rem))] overflow-y-auto overscroll-contain bg-white rounded-2xl shadow-2xl p-4 sm:p-5 border-2 border-green-100"
                                    style={{
                                        boxShadow: "0 25px 70px rgba(72, 115, 7, 0.25), 0 0 0 1px rgba(72, 115, 7, 0.1)"
                                    }}
                                >
                                    {/* Month Navigation */}
                                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-green-100">
                                        <button
                                            onClick={goToPreviousMonth}
                                            className="p-2.5 bg-slate-100 hover:bg-gradient-to-r hover:from-[#1a2e03] hover:via-[#487307] hover:to-[#6aa80b] rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 group border border-slate-200 hover:border-transparent shadow-sm"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-slate-700  transition-colors" />
                                        </button>
                                        <span className="text-base font-bold bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent tracking-wide">
                                            {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                                        </span>
                                        <button
                                            onClick={goToNextMonth}
                                            className="p-2.5 bg-slate-100 hover:bg-gradient-to-r hover:from-[#1a2e03] hover:via-[#487307] hover:to-[#6aa80b] rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 group border border-slate-200 hover:border-transparent shadow-sm"
                                        >
                                            <ChevronRight className="w-5 h-5 text-slate-700  transition-colors" />
                                        </button>
                                    </div>

                                    {/* Day Labels */}
                                    <div className="grid grid-cols-7 gap-1 mb-2">
                                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                                            <div key={day} className="flex h-7 items-center justify-center text-center text-[11px] font-bold uppercase tracking-wide text-green-500">
                                                {day}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Calendar Grid — fixed row height avoids clipping when parent has limited space */}
                                    <div className="grid grid-cols-7 gap-1">
                                        {calendarDays.map((day, index) => (
                                            <div key={index} className="flex items-center justify-center">
                                                {day ? (
                                                    <button
                                                        type="button"
                                                        disabled={isCalendarDayDisabledForMinPickup(
                                                            day,
                                                            getMinimumPickupUtcMs(),
                                                        )}
                                                        onClick={() => {
                                                            if (
                                                                isCalendarDayDisabledForMinPickup(
                                                                    day,
                                                                    getMinimumPickupUtcMs(),
                                                                )
                                                            ) {
                                                                return;
                                                            }
                                                            setSelectedDate(day);
                                                            setShowDatePicker(false);
                                                        }}
                                                        className={`flex h-9 w-full max-w-[2.5rem] items-center justify-center rounded-lg text-sm font-semibold transition-colors relative overflow-hidden disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-slate-400 ${isSameDay(day, selectedDate)
                                                            ? "bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] text-white shadow-md ring-2 ring-green-200/80"
                                                            : isToday(day)
                                                                ? "bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] text-white font-bold ring-2 ring-green-200/80 hover:opacity-95"
                                                                : "text-slate-700 hover:bg-green-50 hover:text-green-700"
                                                            }`}
                                                    >
                                                        {isSameDay(day, selectedDate) && (
                                                            <motion.div
                                                                layoutId="selectedDate"
                                                                className="absolute inset-0 bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b]"
                                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                            />
                                                        )}
                                                        <span className="relative z-10 leading-none">{day.getDate()}</span>
                                                    </button>
                                                ) : (
                                                    <div className="h-9 w-full max-w-[2.5rem]" aria-hidden />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Time Picker */}
                    <div className="relative group" ref={timePickerRef}>
                        <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#487307] transition-colors z-10">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div
                            onClick={() => {
                                setShowTimePicker(!showTimePicker);
                                setShowDatePicker(false);
                            }}
                            className={`pl-12 pr-4 py-3 bg-slate-50 rounded-lg border transition-all shadow-sm cursor-pointer ${showTimePicker
                                ? "border-[#487307] bg-white"
                                : "border-transparent group-hover:border-slate-200"
                                }`}
                        >
                            <label className="block text-xs font-semibold text-slate-500 mb-0.5">
                                Pickup time
                            </label>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-900">
                                    {selectedTime}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showTimePicker ? "rotate-180" : ""}`} />
                            </div>
                        </div>

                        <PickupTimePickerDialog
                            open={showTimePicker}
                            onOpenChange={setShowTimePicker}
                            value={selectedTime}
                            onCommit={setSelectedTime}
                            bookingYmdLondon={bookingYmdLondon}
                            getCommitError={getPickupTimeCommitError}
                            sanitizeOnOpen={sanitizeTimeOnPickerOpen}
                        />
                    </div>



                    {searchError && (
                        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                            {searchError}
                        </p>
                    )}

                    {/* Search Button */}
                    <button
                        type="button"
                        disabled={isSearching}
                        onClick={() => void handleSearch()}
                        className="w-full py-4 rounded-lg bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] text-white font-montserrat font-bold text-lg shadow-lg shadow-[#2a4204]/35 hover:opacity-90 transition-all transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isSearching ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Getting prices…
                            </>
                        ) : (
                            "Search"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
