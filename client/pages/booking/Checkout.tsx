import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CreditCard,
    Calendar,
    MapPin,
    Clock,
    User,
    Mail,
    Phone,
    Check,
    ArrowRight,
    ArrowLeft
} from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';

export default function Checkout() {
    const navigate = useNavigate();
    const { bookingData, updateBookingData } = useBooking();
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [termsAccepted, setTermsAccepted] = useState(false);

    // Calculate pricing
    const calculateTotal = () => {
        if (!bookingData.selectedCar) {
            return {
                subtotal: 0,
                tax: 0,
                serviceFee: 0,
                total: 0
            };
        }
        const basePrice = bookingData.selectedCar.price;
        const hours = bookingData.bookingType === 'hourly'
            ? parseInt(bookingData.duration)
            : 4; // Default 4 hours for one-way
        const subtotal = basePrice * hours;
        const tax = subtotal * 0.1; // 10% tax
        const serviceFee = 15;
        return {
            subtotal,
            tax,
            serviceFee,
            total: subtotal + tax + serviceFee
        };
    };

    const pricing = calculateTotal();

    const handleConfirmBooking = () => {
        if (termsAccepted) {
            updateBookingData({
                paymentMethod,
                termsAccepted
            });
            navigate('/booking/success');
        }
    };

    const handleBack = () => {
        navigate('/booking/customer-info');
    };

    if (!bookingData.selectedCar || !bookingData.customerInfo) {
        navigate('/booking/select-car');
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
            {/* Progress Bar */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-sm font-semibold text-slate-600">Step 3 of 4</h2>
                        <span className="text-sm font-medium text-[#487307]">75% Complete</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                        <motion.div
                            initial={{ width: '50%' }}
                            animate={{ width: '75%' }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] h-2 rounded-full"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-900 mb-4">
                        Review &{' '}
                        <span className="bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
                            Confirm
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Please review your booking details before confirming
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Booking Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Trip Details */}
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
                                            {bookingData.fromLocation || 'Not specified'}
                                        </p>
                                    </div>
                                </div>
                                {bookingData.bookingType === 'oneway' && (
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-slate-400 mt-1" />
                                        <div>
                                            <p className="text-sm text-slate-500">To</p>
                                            {Array.isArray(bookingData.toLocation) ? (
                                                <div className="flex flex-col gap-1">
                                                    {bookingData.toLocation.filter(loc => loc.trim() !== '').map((loc, index) => (
                                                        <div key={index} className="flex items-start gap-2">
                                                            <span className="text-xs font-bold bg-slate-100 text-slate-500 rounded px-1.5 py-0.5 mt-0.5">
                                                                {index + 1}
                                                            </span>
                                                            <span>{loc}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                bookingData.toLocation || 'Not specified'
                                            )}
                                        </div>
                                    </div>
                                )}
                                <div className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-slate-400 mt-1" />
                                    <div>
                                        <p className="text-sm text-slate-500">Date</p>
                                        <p className="text-base font-semibold text-slate-900">
                                            {bookingData.date.toLocaleDateString('en-US', {
                                                weekday: 'long',
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
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
                                {bookingData.bookingType === 'hourly' && (
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

                        {/* Selected Vehicle */}
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
                                    className="w-32 h-32 object-cover rounded-xl"
                                />
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900">{bookingData.selectedCar.name}</h3>
                                    <p className="text-sm text-slate-600 mt-2">
                                        {bookingData.selectedCar.passengers} Passengers • {bookingData.selectedCar.luggage} Luggage
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {bookingData.selectedCar.features.slice(0, 3).map((feature) => (
                                            <span
                                                key={feature}
                                                className="text-xs px-3 py-1 bg-green-50 text-[#487307] rounded-full font-medium"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Customer Information */}
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

                        {/* Payment Method */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
                        >
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <CreditCard className="w-6 h-6 text-[#487307]" />
                                Payment Method
                            </h2>
                            <div className="space-y-3">
                                <label className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-[#487307] transition-all">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="card"
                                        checked={paymentMethod === 'card'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="w-5 h-5 text-[#487307]"
                                    />
                                    <CreditCard className="w-6 h-6 text-slate-400" />
                                    <span className="font-semibold text-slate-900">Credit / Debit Card</span>
                                </label>
                                <label className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-[#487307] transition-all">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cash"
                                        checked={paymentMethod === 'cash'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="w-5 h-5 text-[#487307]"
                                    />
                                    <span className="w-6 h-6 flex items-center justify-center text-slate-400 font-bold">£</span>
                                    <span className="font-semibold text-slate-900">Pay with Cash</span>
                                </label>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Price Summary */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sticky top-24"
                        >
                            <h2 className="text-xl font-bold text-slate-900 mb-6">Price Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-slate-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">£{pricing.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Service Fee</span>
                                    <span className="font-semibold">£{pricing.serviceFee.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Tax (10%)</span>
                                    <span className="font-semibold">£{pricing.tax.toFixed(2)}</span>
                                </div>
                                <div className="border-t-2 border-slate-200 pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-slate-900">Total</span>
                                        <span className="text-2xl font-bold text-[#487307]">
                                            £{pricing.total.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Terms Checkbox */}
                            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer mb-6">
                                <input
                                    type="checkbox"
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                    className="w-5 h-5 text-[#487307] mt-0.5"
                                />
                                <span className="text-sm text-slate-600">
                                    I agree to the{' '}
                                    <a href="/terms-and-conditions" className="text-[#487307] font-semibold hover:underline">
                                        Terms & Conditions
                                    </a>{' '}
                                    and{' '}
                                    <a href="/privacy-policy" className="text-[#487307] font-semibold hover:underline">
                                        Privacy Policy
                                    </a>
                                </span>
                            </label>

                            <button
                                onClick={handleConfirmBooking}
                                disabled={!termsAccepted}
                                className={`w-full py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 ${termsAccepted
                                    ? 'bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] text-white hover:shadow-lg hover:shadow-[#487307]/30'
                                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                    }`}
                            >
                                <Check className="w-6 h-6" />
                                Confirm Booking
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-8">
                    <button
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
