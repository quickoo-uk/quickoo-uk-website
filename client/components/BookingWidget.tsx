import { useState } from "react";
import { MapPin, Calendar, Clock, Info, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const BookingWidget = () => {
    const [activeTab, setActiveTab] = useState<"oneway" | "hourly">("oneway");

    return (
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden font-inter border border-slate-100">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
                <button
                    onClick={() => setActiveTab("oneway")}
                    className={`flex-1 py-4 text-base font-semibold transition-colors ${activeTab === "oneway"
                            ? "bg-white text-[#4C3CF2] border-b-2 border-[#4C3CF2]"
                            : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                        }`}
                >
                    One way
                </button>
                <button
                    onClick={() => setActiveTab("hourly")}
                    className={`flex-1 py-4 text-base font-semibold transition-colors ${activeTab === "hourly"
                            ? "bg-white text-[#4C3CF2] border-b-2 border-[#4C3CF2]"
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
                            <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#4C3CF2] transition-colors">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div className="pl-12 pr-4 py-3 bg-slate-50 rounded-lg border border-transparent group-hover:border-slate-200 focus-within:border-[#4C3CF2] focus-within:bg-white transition-all shadow-sm">
                                <label className="block text-xs font-semibold text-slate-500 mb-0.5">
                                    From
                                </label>
                                <input
                                    type="text"
                                    placeholder="Address, airport, hotel, ..."
                                    className="w-full bg-transparent border-none p-0 text-slate-900 placeholder-slate-400 focus:ring-0 text-sm font-medium outline-none"
                                />
                            </div>
                        </div>

                        {/* To Location (Only for One Way) */}
                        {activeTab === "oneway" && (
                            <div className="relative group">
                                <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#4C3CF2] transition-colors">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="pl-12 pr-4 py-3 bg-slate-50 rounded-lg border border-transparent group-hover:border-slate-200 focus-within:border-[#4C3CF2] focus-within:bg-white transition-all shadow-sm">
                                    <label className="block text-xs font-semibold text-slate-500 mb-0.5">
                                        To
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Address, airport, hotel, ..."
                                        className="w-full bg-transparent border-none p-0 text-slate-900 placeholder-slate-400 focus:ring-0 text-sm font-medium outline-none"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Duration (Only for Hourly) */}
                        {activeTab === "hourly" && (
                            <div className="relative group">
                                <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#4C3CF2] transition-colors">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div className="pl-12 pr-4 py-3 bg-slate-50 rounded-lg border border-transparent group-hover:border-slate-200 focus-within:border-[#4C3CF2] focus-within:bg-white transition-all cursor-pointer shadow-sm">
                                    <label className="block text-xs font-semibold text-slate-500 mb-0.5">
                                        Duration
                                    </label>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-900">
                                            3 hours
                                        </span>
                                        <ChevronDown className="w-4 h-4 text-slate-400" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Date */}
                        <div className="relative group">
                            <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#4C3CF2] transition-colors">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div className="pl-12 pr-4 py-3 bg-slate-50 rounded-lg border border-transparent group-hover:border-slate-200 focus-within:border-[#4C3CF2] focus-within:bg-white transition-all shadow-sm">
                                <label className="block text-xs font-semibold text-slate-500 mb-0.5">
                                    Date
                                </label>
                                <div className="flex items-center justify-between">
                                    <input
                                        type="text"
                                        value="Sat, Nov 22, 2025"
                                        readOnly
                                        className="w-full bg-transparent border-none p-0 text-slate-900 focus:ring-0 text-sm font-medium cursor-pointer outline-none"
                                    />
                                    <ChevronDown className="w-4 h-4 text-slate-400" />
                                </div>
                            </div>
                        </div>

                        {/* Time */}
                        <div className="relative group">
                            <div className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#4C3CF2] transition-colors">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div className="pl-12 pr-4 py-3 bg-slate-50 rounded-lg border border-transparent group-hover:border-slate-200 focus-within:border-[#4C3CF2] focus-within:bg-white transition-all shadow-sm">
                                <label className="block text-xs font-semibold text-slate-500 mb-0.5">
                                    Pickup time
                                </label>
                                <div className="flex items-center justify-between">
                                    <input
                                        type="text"
                                        value="05:05 PM"
                                        readOnly
                                        className="w-full bg-transparent border-none p-0 text-slate-900 focus:ring-0 text-sm font-medium cursor-pointer outline-none"
                                    />
                                    <ChevronDown className="w-4 h-4 text-slate-400" />
                                </div>
                            </div>
                        </div>

                        {/* Info Text */}
                        {activeTab === "oneway" && (
                            <div className="flex items-start gap-2 text-xs text-slate-500 px-1">
                                <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#4C3CF2]" />
                                <p>Chauffeur will wait 15 minutes free of charge.</p>
                            </div>
                        )}

                        {/* Search Button */}
                        <button className="w-full py-4 rounded-lg bg-gradient-to-r from-[#1a1230] via-[#3f1c6e] to-[#806af1] text-white font-montserrat font-bold text-lg shadow-lg shadow-[#3f1c6e]/35 hover:opacity-90 transition-all transform active:scale-[0.98]">
                            Search
                        </button>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
