import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  User,
  Mail,
  Phone,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";
import { displayPriceBreakdownDescription } from "@/lib/priceBreakdownDisplay";

export default function Checkout() {
  const navigate = useNavigate();
  const { bookingData } = useBooking();

  const breakdown = bookingData.selectedCar?.price_breakdown ?? [];
  const total =
    bookingData.selectedCar?.total_price ?? bookingData.selectedCar?.price ?? 0;
  const hasPricedQuote =
    breakdown.length > 0 ||
    (bookingData.selectedCar?.total_price != null && bookingData.selectedCar.total_price > 0);

  const handleBack = () => {
    navigate("/booking/customer-info");
  };

  const handleProceedToPayment = () => {
    navigate("/booking/payment");
  };

  if (!bookingData.selectedCar || !bookingData.customerInfo) {
    navigate("/booking/select-car");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-slate-600">Step 3 of 4</h2>
            <span className="text-sm font-medium text-[#487307]">75% Complete</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <motion.div
              initial={{ width: "50%" }}
              animate={{ width: "75%" }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] h-2 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-900 mb-4">
            Review &{" "}
            <span className="bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
              Confirm
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Check your trip, vehicle, and pricing, then continue to payment
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-[#487307]" />
                Trip Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-400 mt-1" />
                  <div>
                    <p className="text-sm text-slate-500">From</p>
                    <p className="text-base font-semibold text-slate-900">
                      {bookingData.fromLocation || "Not specified"}
                    </p>
                  </div>
                </div>
                {bookingData.bookingType === "oneway" && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-slate-400 mt-1" />
                    <div>
                      <p className="text-sm text-slate-500">To</p>
                      {Array.isArray(bookingData.toLocation) ? (
                        <div className="flex flex-col gap-1">
                          {bookingData.toLocation.filter((loc) => loc.trim() !== "").map((loc, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <span className="text-xs font-bold bg-slate-100 text-slate-500 rounded px-1.5 py-0.5 mt-0.5">
                                {index + 1}
                              </span>
                              <span>{loc}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        bookingData.toLocation || "Not specified"
                      )}
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-slate-400 mt-1" />
                  <div>
                    <p className="text-sm text-slate-500">Date</p>
                    <p className="text-base font-semibold text-slate-900">
                      {bookingData.date.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-400 mt-1" />
                  <div>
                    <p className="text-sm text-slate-500">Pickup Time</p>
                    <p className="text-base font-semibold text-slate-900">{bookingData.time}</p>
                  </div>
                </div>
                {bookingData.flightNumber?.trim() && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-slate-400 mt-1" />
                    <div>
                      <p className="text-sm text-slate-500">Flight Number</p>
                      <p className="text-base font-semibold text-slate-900">{bookingData.flightNumber}</p>
                    </div>
                  </div>
                )}
                {bookingData.bookingType === "hourly" && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-slate-400 mt-1" />
                    <div>
                      <p className="text-sm text-slate-500">Duration</p>
                      <p className="text-base font-semibold text-slate-900">{bookingData.duration}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-6">Selected Vehicle</h2>
              <div className="flex items-center gap-4">
                <img
                  src={bookingData.selectedCar.image}
                  alt={bookingData.selectedCar.name}
                  className="w-32 h-32 object-contain rounded-xl bg-slate-50 border border-slate-100 p-2"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-slate-900">{bookingData.selectedCar.name}</h3>
                  <p className="text-sm text-slate-600 mt-2">
                    {bookingData.selectedCar.passengers} Passengers • {bookingData.selectedCar.luggage} Luggage
                  </p>
                  {hasPricedQuote && (
                    <p className="text-lg font-bold text-[#487307] mt-2">£{total.toFixed(2)} total</p>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-[#487307]" />
                Customer Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-slate-400" />
                  <p className="text-base text-slate-900">
                    {bookingData.customerInfo.firstName} {bookingData.customerInfo.lastName}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <p className="text-base text-slate-900">{bookingData.customerInfo.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-slate-400" />
                  <p className="text-base text-slate-900">{bookingData.customerInfo.phone}</p>
                </div>
                {bookingData.customerInfo.specialRequests && (
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                    <p className="text-sm text-slate-500 mb-1">Special Requests</p>
                    <p className="text-sm text-slate-900">{bookingData.customerInfo.specialRequests}</p>
                  </div>
                )}
              </div>
            </motion.div>

            <div className="lg:hidden">
              <button
                type="button"
                onClick={handleProceedToPayment}
                className="w-full py-4 rounded-full font-bold text-lg bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] text-white shadow-lg flex items-center justify-center gap-2"
              >
                Proceed to payment
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:sticky lg:top-28 bg-white rounded-2xl shadow-lg border border-slate-200 p-6 space-y-4"
            >
              <h2 className="text-lg font-bold text-slate-900">Pricing</h2>
              {breakdown.length > 0 ? (
                <ul className="space-y-3 text-sm border-b border-slate-100 pb-4">
                  {breakdown.map((line, i) => (
                    <li key={i} className="flex justify-between gap-3 text-slate-600">
                      <span className="min-w-0 leading-snug">
                        {displayPriceBreakdownDescription(line.description)}
                      </span>
                      <span className="font-semibold text-slate-900 shrink-0">£{line.amount.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-500 pb-4 border-b border-slate-100">
                  {bookingData.bookingType === "hourly"
                    ? "Hourly journeys use fixed class rates at the next step. Final price will be confirmed by our team."
                    : "No itemised breakdown available for this selection."}
                </p>
              )}
              <div className="flex justify-between items-baseline">
                <span className="text-base font-semibold text-slate-800">Total</span>
                <span className="text-2xl font-bold text-[#487307]">£{total.toFixed(2)}</span>
              </div>
              <button
                type="button"
                onClick={handleProceedToPayment}
                className="hidden lg:flex w-full py-4 rounded-full font-bold text-lg bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] text-white shadow-lg items-center justify-center gap-2 hover:shadow-[#487307]/25 transition-shadow"
              >
                Proceed to payment
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-300 bg-white text-slate-700 font-bold hover:bg-slate-50 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Customer Info
          </button>
        </div>
      </div>
    </div>
  );
}
