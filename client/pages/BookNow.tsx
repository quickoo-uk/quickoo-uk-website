import { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  RefreshCcw,
  Info,
  Plane,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { GoogleMap } from "@/components/GoogleMap";
import { motion, AnimatePresence } from "framer-motion";

type RideType = "one-way" | "airport-pickup" | "hourly";

export default function BookNow() {
  const [rideType, setRideType] = useState<RideType>("one-way");
  const [formData, setFormData] = useState({
    pickupAddress: "",
    dropoffAddress: "",
    pickupTime: "Now",
    date: "",
    time: "",
    flightNumber: "",
    duration: "1 hour",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const swapLocations = () => {
    setFormData((p) => ({
      ...p,
      pickupAddress: p.dropoffAddress,
      dropoffAddress: p.pickupAddress,
    }));
  };

  const isFormValid = () => {
    if (rideType === "airport-pickup") {
      return formData.pickupAddress && formData.dropoffAddress && formData.date && formData.time && formData.flightNumber;
    }
    if (rideType === "hourly") {
      return formData.pickupAddress && formData.duration;
    }
    return formData.pickupAddress && formData.dropoffAddress;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#f8f7fc] via-[#fdfcff] to-[#f4f2fb]">
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
        {/* LEFT PANEL */}
        <div className="bg-gradient-to-br from-[#faf9fd] to-[#f0eef8] p-4 sm:p-6 lg:p-8 flex justify-center overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#0a1a02] via-[#2a4204] to-[#487307] bg-clip-text text-transparent mb-2">
                Book Your Ride
              </h1>
              <p className="text-slate-600 text-sm">Premium chauffeur service at your fingertips</p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl w-full rounded-3xl shadow-[0_20px_60px_rgba(72,115,7,0.15)] border border-green-100/50 p-6 sm:p-8">
              {/* TABS */}
              <div className="flex gap-2 mb-6 bg-slate-50/80 p-1.5 rounded-2xl">
                {[
                  { id: "one-way", label: "One Way" },
                  { id: "airport-pickup", label: "Airport" },
                  { id: "hourly", label: "Hourly" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setRideType(tab.id as RideType)}
                    className={`flex-1 py-3 px-4 font-semibold text-xs sm:text-sm whitespace-nowrap rounded-xl transition-all duration-300 ${rideType === tab.id
                      ? "bg-gradient-to-r from-[#0a1a02] via-[#2a4204] to-[#487307] text-white shadow-lg shadow-[#2a4204]/30 scale-105"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* FORM */}
              <form className="space-y-4">
                <AnimatePresence mode="wait">
                  {/* AIRPORT PICKUP → FLIGHT NUMBER */}
                  {rideType === "airport-pickup" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      <div className="border-2 border-purple-100 hover:border-green-300 rounded-2xl p-4 flex items-center gap-4 bg-white transition-all duration-300 hover:shadow-lg hover:shadow-green-100/50">
                        <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                          <Plane className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="w-full">
                          <label className="text-xs font-bold block text-slate-500 mb-1">
                            Flight Number *
                          </label>
                          <input
                            name="flightNumber"
                            placeholder="e.g., BA123"
                            value={formData.flightNumber}
                            onChange={handleInputChange}
                            className="w-full border-none focus:ring-0 text-slate-900 font-medium placeholder:text-slate-400 p-0"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* PICKUP */}
                  <div className="relative group">
                    <div className="border-2 border-purple-100 hover:border-green-300 rounded-2xl p-4 flex items-center gap-4 bg-white transition-all duration-300 hover:shadow-lg hover:shadow-green-100/50">
                      <div className="p-3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <label className="text-xs font-bold block text-slate-500 mb-1">
                          Pickup Location
                        </label>
                        <input
                          name="pickupAddress"
                          placeholder="Enter pickup address"
                          value={formData.pickupAddress}
                          onChange={handleInputChange}
                          className="w-full border-none focus:ring-0 text-slate-900 font-medium placeholder:text-slate-400 p-0"
                        />
                      </div>

                      {rideType !== "one-way" && (
                        <button
                          type="button"
                          className="p-2.5 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-[#1c0e38] hover:via-[#4630a8] hover:to-[#8b74ff] text-slate-600 hover:text-white transition-all duration-300 hover:scale-110"
                        >
                          <span className="text-lg font-bold">+</span>
                        </button>
                      )}

                      <button
                        onClick={swapLocations}
                        type="button"
                        className="p-2.5 bg-slate-50 hover:bg-gradient-to-r hover:from-[#1c0e38] hover:via-[#4630a8] hover:to-[#8b74ff] rounded-xl transition-all duration-300 hover:scale-110 group/swap"
                      >
                        <RefreshCcw className="w-4 h-4 text-slate-600 group-hover/swap:text-white transition-colors" />
                      </button>
                    </div>
                  </div>

                  {/* DROPOFF */}
                  {rideType !== "hourly" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="relative group"
                    >
                      <div className="border-2 border-purple-100 hover:border-green-300 rounded-2xl p-4 flex items-center gap-4 bg-white transition-all duration-300 hover:shadow-lg hover:shadow-green-100/50">
                        <div className="p-3 bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl">
                          <MapPin className="w-5 h-5 text-rose-600" />
                        </div>
                        <div className="w-full">
                          <label className="text-xs font-bold block text-slate-500 mb-1">
                            Dropoff Location
                          </label>
                          <input
                            name="dropoffAddress"
                            placeholder="Enter dropoff address"
                            value={formData.dropoffAddress}
                            onChange={handleInputChange}
                            className="w-full border-none focus:ring-0 text-slate-900 font-medium placeholder:text-slate-400 p-0"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* HOURLY → AS DIRECTED + DURATION */}
                  {rideType === "hourly" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      {/* AS DIRECTED BOX */}
                      <div className="rounded-2xl p-4 bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200/50 flex gap-3 items-start shadow-sm">
                        <div className="p-2 bg-amber-100 rounded-lg">
                          <Info className="w-4 h-4 text-amber-700" />
                        </div>
                        <p className="text-sm text-slate-700 font-medium">
                          Booking will be marked <span className="font-bold text-amber-900">'As Directed'</span>
                        </p>
                      </div>

                      {/* DURATION */}
                      <div className="border-2 border-purple-100 hover:border-green-300 rounded-2xl p-4 bg-white transition-all duration-300 hover:shadow-lg hover:shadow-green-100/50">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                            <Clock className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="w-full">
                            <label className="text-xs font-bold block text-slate-500 mb-1">
                              Duration
                            </label>
                            <select
                              name="duration"
                              value={formData.duration}
                              onChange={handleInputChange}
                              className="w-full border-none focus:ring-0 text-slate-900 font-medium p-0 bg-transparent"
                            >
                              {["1 hour", "2 hours", "3 hours", "4 hours", "5 hours"].map((d) => (
                                <option key={d}>{d}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* AIRPORT → DATE + TIME */}
                  {rideType === "airport-pickup" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      {/* DATE */}
                      <div className="border-2 border-purple-100 hover:border-green-300 rounded-2xl p-4 bg-white transition-all duration-300 hover:shadow-lg hover:shadow-green-100/50">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl">
                            <Calendar className="w-5 h-5 text-violet-600" />
                          </div>
                          <div className="w-full">
                            <label className="text-xs font-bold block text-slate-500 mb-1">
                              Pickup Date *
                            </label>
                            <input
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleInputChange}
                              className="w-full border-none focus:ring-0 text-slate-900 font-medium p-0"
                            />
                          </div>
                        </div>
                      </div>

                      {/* TIME */}
                      <div className="border-2 border-purple-100 hover:border-green-300 rounded-2xl p-4 bg-white transition-all duration-300 hover:shadow-lg hover:shadow-green-100/50">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl">
                            <Clock className="w-5 h-5 text-indigo-600" />
                          </div>
                          <div className="w-full">
                            <label className="text-xs font-bold block text-slate-500 mb-1">
                              Pickup Time *
                            </label>
                            <input
                              type="time"
                              name="time"
                              value={formData.time}
                              onChange={handleInputChange}
                              className="w-full border-none focus:ring-0 text-slate-900 font-medium p-0"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ONE WAY → TIME SELECT */}
                  {rideType === "one-way" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-2 border-purple-100 rounded-2xl p-5 bg-white"
                    >
                      <label className="text-sm font-bold text-slate-700 mb-3 block">
                        Choose Pickup Time
                      </label>

                      <button
                        type="button"
                        onClick={() =>
                          setFormData((p) => ({
                            ...p,
                            pickupTime: p.pickupTime === "Now" ? "Later" : "Now",
                          }))
                        }
                        className="px-5 py-2.5 flex items-center gap-2 bg-gradient-to-r from-[#0a1a02] via-[#2a4204] to-[#487307] text-white rounded-xl font-semibold shadow-lg shadow-[#2a4204]/30 hover:shadow-xl hover:shadow-[#2a4204]/40 transition-all duration-300 hover:scale-105"
                      >
                        <Calendar className="w-4 h-4" />
                        {formData.pickupTime === "Now" ? "Schedule for Later" : "Book Now"}
                      </button>

                      {formData.pickupTime === "Later" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-4 space-y-3"
                        >
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full border-2 border-purple-100 rounded-xl px-4 py-3 focus:border-green-300 focus:ring-0 transition-colors"
                          />
                          <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full border-2 border-purple-100 rounded-xl px-4 py-3 focus:border-green-300 focus:ring-0 transition-colors"
                          />
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* TIMEZONE FOOTER */}
                <div className="pt-4 pb-2 text-xs flex flex-col sm:flex-row sm:justify-between gap-2 text-slate-500 border-t border-green-100/50">
                  <span className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    Timezone: Europe/London
                  </span>
                  <span className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    Local: {new Date().toLocaleTimeString()}
                  </span>
                </div>

                {/* CONTINUE BUTTON */}
                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`w-full py-4 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 group ${isFormValid()
                    ? "bg-gradient-to-r from-[#0a1a02] via-[#2a4204] to-[#487307] text-white shadow-xl shadow-[#2a4204]/40 hover:shadow-2xl hover:shadow-[#2a4204]/50 hover:scale-[1.02] active:scale-[0.98]"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                    }`}
                >
                  Continue to Vehicle Selection
                  {isFormValid() && (
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* RIGHT PANEL — MAP */}
        <div className="lg:col-span-2 relative h-[50vh] lg:h-auto">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}
