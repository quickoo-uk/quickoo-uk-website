import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, Clock, Info, ChevronDown, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/contexts/BookingContext";

export const BookingWidget = () => {
    const navigate = useNavigate();
    const { updateBookingData } = useBooking();
    const [activeTab, setActiveTab] = useState<"oneway" | "hourly">("oneway");
    const [selectedDate, setSelectedDate] = useState(new Date(2025, 10, 22)); // Nov 22, 2025
    const [selectedTime, setSelectedTime] = useState("05:05 PM");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 10, 1)); // November 2025
    const [selectedDuration, setSelectedDuration] = useState("4 hours");
    const [showDurationPicker, setShowDurationPicker] = useState(false);
    const [fromLocation, setFromLocation] = useState("");
    const [destinations, setDestinations] = useState<string[]>([""]);

    const datePickerRef = useRef<HTMLDivElement>(null);
    const timePickerRef = useRef<HTMLDivElement>(null);
    const durationPickerRef = useRef<HTMLDivElement>(null);

    // Close pickers when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
                setShowDatePicker(false);
            }
            if (timePickerRef.current && !timePickerRef.current.contains(event.target as Node)) {
                setShowTimePicker(false);
            }
            if (durationPickerRef.current && !durationPickerRef.current.contains(event.target as Node)) {
                setShowDurationPicker(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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

    // Generate time slots
    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute of [0, 15, 30, 45]) {
                const period = hour >= 12 ? "PM" : "AM";
                const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
                const time = `${displayHour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${period}`;
                slots.push(time);
            }
        }
        return slots;
    };

    const calendarDays = generateCalendarDays();
    const timeSlots = generateTimeSlots();

    const durations = [
        "4 hours", "5 hours", "6 hours", "7 hours",
        "8 hours", "9 hours", "10 hours", "11 hours", "12 hours", "24 hours"
    ];

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
        if (destinations.length < 4) {
            setDestinations([...destinations, ""]);
        }
    };

    const handleRemoveDestination = (index: number) => {
        const newDestinations = destinations.filter((_, i) => i !== index);
        setDestinations(newDestinations);
    };

    const handleDestinationChange = (index: number, value: string) => {
        const newDestinations = [...destinations];
        newDestinations[index] = value;
        setDestinations(newDestinations);
    };

    return (
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-visible font-inter border border-slate-100">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
                <button
                    onClick={() => setActiveTab("oneway")}
                    className={`flex-1 py-4 text-base font-semibold transition-colors ${activeTab === "oneway"
                        ? "bg-white text-[#487307] border-b-2 border-[#487307]"
                        : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                        }`}
                >
                    One way
                </button>
                <button
                    onClick={() => setActiveTab("hourly")}
                    className={`flex-1 py-4 text-base font-semibold transition-colors ${activeTab === "hourly"
                        ? "bg-white text-[#487307] border-b-2 border-[#487307]"
                        : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                        }`}
                >
                    By the hour
                </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                    >
                        {/* From Location */}
                        <div className="relative group">
                            <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#487307] transition-colors">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div className="pl-12 pr-4 py-3 bg-slate-50 rounded-lg border border-transparent group-hover:border-slate-200 focus-within:border-[#487307] focus-within:bg-white transition-all shadow-sm">
                                <label className="block text-xs font-semibold text-slate-500 mb-0.5">
                                    From
                                </label>
                                <input
                                    type="text"
                                    value={fromLocation}
                                    onChange={(e) => setFromLocation(e.target.value)}
                                    placeholder="Address, airport, hotel, ..."
                                    className="w-full bg-transparent border-none p-0 text-slate-900 placeholder-slate-400 focus:ring-0 text-sm font-medium outline-none"
                                />
                            </div>
                        </div>

                        {/* Destinations (One Way) */}
                        {activeTab === "oneway" && (
                            <div className="space-y-2">
                                {destinations.map((destination, index) => (
                                    <div key={index} className="relative group">
                                        <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#487307] transition-colors z-10">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div className="pl-12 pr-10 py-3 bg-slate-50 rounded-lg border border-transparent group-hover:border-slate-200 focus-within:border-[#487307] focus-within:bg-white transition-all shadow-sm relative">
                                            <label className="block text-xs font-semibold text-slate-500 mb-0.5">
                                                To {destinations.length > 1 ? `#${index + 1}` : ""}
                                            </label>
                                            <input
                                                type="text"
                                                value={destination}
                                                onChange={(e) => handleDestinationChange(index, e.target.value)}
                                                placeholder="Address, airport, hotel, ..."
                                                className="w-full bg-transparent border-none p-0 text-slate-900 placeholder-slate-400 focus:ring-0 text-sm font-medium outline-none"
                                            />
                                            {/* Remove Button for extra destinations */}
                                            {destinations.length > 1 && (
                                                <button
                                                    onClick={() => handleRemoveDestination(index)}
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
                        )}



                        {/* Duration (Only for Hourly) */}
                        {activeTab === "hourly" && (
                            <div className="relative group" ref={durationPickerRef}>
                                <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#487307] transition-colors z-10">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div
                                    onClick={() => {
                                        setShowDurationPicker(!showDurationPicker);
                                        setShowDatePicker(false);
                                        setShowTimePicker(false);
                                    }}
                                    className={`pl-12 pr-4 py-3 bg-slate-50 rounded-lg border transition-all shadow-sm cursor-pointer ${showDurationPicker
                                        ? "border-[#487307] bg-white"
                                        : "border-transparent group-hover:border-slate-200"
                                        }`}
                                >
                                    <label className="block text-xs font-semibold text-slate-500 mb-0.5">
                                        Duration
                                    </label>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-900">
                                            {selectedDuration}
                                        </span>
                                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showDurationPicker ? "rotate-180" : ""}`} />
                                    </div>
                                </div>

                                {/* Duration Picker Dropdown */}
                                <AnimatePresence>
                                    {showDurationPicker && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                            className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-2xl p-4 z-50 max-h-72 overflow-y-auto border-2 border-green-100"
                                            style={{
                                                boxShadow: "0 25px 70px rgba(72, 115, 7, 0.25), 0 0 0 1px rgba(72, 115, 7, 0.1)"
                                            }}
                                        >
                                            <div className="grid grid-cols-3 gap-2">
                                                {durations.map((duration) => (
                                                    <button
                                                        key={duration}
                                                        onClick={() => {
                                                            setSelectedDuration(duration);
                                                            setShowDurationPicker(false);
                                                        }}
                                                        className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 relative overflow-hidden ${duration === selectedDuration
                                                            ? "bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] text-white shadow-lg shadow-[#487307]/50 scale-105 ring-2 ring-green-200"
                                                            : "text-slate-700 hover:bg-green-50 border border-green-100 hover:border-green-300 hover:scale-105 hover:text-green-600 hover:shadow-md"
                                                            }`}
                                                    >
                                                        {duration === selectedDuration && (
                                                            <motion.div
                                                                layoutId="selectedDuration"
                                                                className="absolute inset-0 bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b]"
                                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                            />
                                                        )}
                                                        <span className="relative z-10">{duration}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}

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
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                        className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-2xl p-5 z-50 border-2 border-green-100"
                                        style={{
                                            boxShadow: "0 25px 70px rgba(72, 115, 7, 0.25), 0 0 0 1px rgba(72, 115, 7, 0.1)"
                                        }}
                                    >
                                        {/* Month Navigation */}
                                        <div className="flex items-center justify-between mb-5 pb-4 border-b border-green-100">
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
                                        <div className="grid grid-cols-7 gap-1.5 mb-3">
                                            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                                                <div key={day} className="text-center text-xs font-bold text-green-400 py-2">
                                                    {day}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Calendar Grid */}
                                        <div className="grid grid-cols-7 gap-1.5">
                                            {calendarDays.map((day, index) => (
                                                <div key={index}>
                                                    {day ? (
                                                        <button
                                                            onClick={() => {
                                                                setSelectedDate(day);
                                                                setShowDatePicker(false);
                                                            }}
                                                            className={`w-full aspect-square rounded-xl text-sm font-bold transition-all duration-200 relative overflow-hidden ${isSameDay(day, selectedDate)
                                                                ? "bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] text-white shadow-lg shadow-[#487307]/50 scale-110 ring-2 ring-green-200"
                                                                : isToday(day)
                                                                    ? "bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] text-white font-extrabold ring-2 ring-green-200 hover:scale-105 hover:shadow-lg"
                                                                    : "text-slate-700 hover:bg-green-50 hover:scale-105 hover:text-green-600 hover:shadow-md"
                                                                }`}
                                                        >
                                                            {isSameDay(day, selectedDate) && (
                                                                <motion.div
                                                                    layoutId="selectedDate"
                                                                    className="absolute inset-0 bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b]"
                                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                                />
                                                            )}
                                                            <span className="relative z-10">{day.getDate()}</span>
                                                        </button>
                                                    ) : (
                                                        <div className="w-full aspect-square" />
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

                            {/* Time Picker Dropdown */}
                            <AnimatePresence>
                                {showTimePicker && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                        className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-2xl p-4 z-50 max-h-72 overflow-y-auto border-2 border-green-100"
                                        style={{
                                            boxShadow: "0 25px 70px rgba(72, 115, 7, 0.25), 0 0 0 1px rgba(72, 115, 7, 0.1)"
                                        }}
                                    >
                                        <div className="grid grid-cols-4 gap-2">
                                            {timeSlots.map((time) => (
                                                <button
                                                    key={time}
                                                    onClick={() => {
                                                        setSelectedTime(time);
                                                        setShowTimePicker(false);
                                                    }}
                                                    className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 relative overflow-hidden ${time === selectedTime
                                                        ? "bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] text-white shadow-lg shadow-[#487307]/50 scale-105 ring-2 ring-green-200"
                                                        : "text-slate-700 hover:bg-green-50 border border-green-100 hover:border-green-300 hover:scale-105 hover:text-green-600 hover:shadow-md"
                                                        }`}
                                                >
                                                    {time === selectedTime && (
                                                        <motion.div
                                                            layoutId="selectedTime"
                                                            className="absolute inset-0 bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b]"
                                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                        />
                                                    )}
                                                    <span className="relative z-10">{time}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>



                        {/* Search Button */}
                        <button
                            onClick={() => {
                                updateBookingData({
                                    bookingType: activeTab,
                                    fromLocation,
                                    toLocation: destinations,
                                    date: selectedDate,
                                    time: selectedTime,
                                    duration: selectedDuration,
                                });
                                navigate('/booking/select-car');
                            }}
                            className="w-full py-4 rounded-lg bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] text-white font-montserrat font-bold text-lg shadow-lg shadow-[#2a4204]/35 hover:opacity-90 transition-all transform active:scale-[0.98]"
                        >
                            Search
                        </button>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
