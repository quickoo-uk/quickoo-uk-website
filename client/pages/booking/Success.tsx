import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    Calendar,
    MapPin,
    Clock,
    User,
    Mail,
    Phone,
    Home,
    Car
} from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';

export default function Success() {
    const navigate = useNavigate();
    const { bookingData, resetBooking } = useBooking();
    const [bookingId] = useState(() =>
        'QCK-' + Math.random().toString(36).substr(2, 9).toUpperCase()
    );

    useEffect(() => {
        // Redirect if no booking data
        if (!bookingData.selectedCar || !bookingData.customerInfo) {
            navigate('/');
        }
    }, [bookingData, navigate]);

    const handleNewBooking = () => {
        resetBooking();
        navigate('/');
    };

    if (!bookingData.selectedCar || !bookingData.customerInfo) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-slate-50">
            {/* Progress Bar - Complete */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-sm font-semibold text-slate-600">Booking complete</h2>
                        <span className="text-sm font-medium text-[#487307]">Thank you</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                        <motion.div
                            initial={{ width: '75%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] h-2 rounded-full"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Success Animation */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.6 }}
                    className="flex justify-center mb-8"
                >
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="absolute inset-0 bg-green-100 rounded-full blur-3xl"
                        />
                        <CheckCircle className="w-32 h-32 text-[#487307] relative" />
                    </div>
                </motion.div>

                {/* Success Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-900 mb-4">
                        Booking{' '}
                        <span className="bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
                            Confirmed!
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-6">
                        Your luxury chauffeur service has been successfully booked
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 rounded-full border-2 border-green-200">
                        <span className="text-sm text-slate-600">Booking ID:</span>
                        <span className="text-lg font-bold text-[#487307]">{bookingId}</span>
                    </div>
                </motion.div>

                {/* Booking Details Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-8"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] p-6">
                        <h2 className="text-2xl font-bold text-white">Reservation Details</h2>
                    </div>

                    <div className="p-6 space-y-6">
                        {/* Vehicle Info */}
                        <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
                            <img
                                src={bookingData.selectedCar.image}
                                alt={bookingData.selectedCar.name}
                                className="w-24 h-24 object-cover rounded-xl"
                            />
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <Car className="w-5 h-5 text-[#487307]" />
                                    <h3 className="text-xl font-bold text-slate-900">{bookingData.selectedCar.name}</h3>
                                </div>
                                <p className="text-sm text-slate-600">
                                    {bookingData.selectedCar.passengers} Passengers • {bookingData.selectedCar.luggage} Luggage
                                </p>
                            </div>
                        </div>

                        {/* Trip Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <Calendar className="w-5 h-5 text-[#487307] mt-1" />
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Date</p>
                                    <p className="text-base font-semibold text-slate-900">
                                        {bookingData.date.toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-[#487307] mt-1" />
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Pickup Time</p>
                                    <p className="text-base font-semibold text-slate-900">{bookingData.time}</p>
                                </div>
                            </div>

                            {bookingData.flightNumber && bookingData.flightNumber.trim() !== '' && (
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-[#487307] mt-1" />
                                    <div>
                                        <p className="text-sm text-slate-500 mb-1">Flight Number</p>
                                        <p className="text-base font-semibold text-slate-900">{bookingData.flightNumber}</p>
                                    </div>
                                </div>
                            )}

                            {bookingData.fromLocation && (
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#487307] mt-1" />
                                    <div>
                                        <p className="text-sm text-slate-500 mb-1">Pickup Location</p>
                                        <p className="text-base font-semibold text-slate-900">{bookingData.fromLocation}</p>
                                    </div>
                                </div>
                            )}

                            {bookingData.bookingType === 'hourly' && (
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-[#487307] mt-1" />
                                    <div>
                                        <p className="text-sm text-slate-500 mb-1">Duration</p>
                                        <p className="text-base font-semibold text-slate-900">{bookingData.duration}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Customer Info */}
                        <div className="pt-6 border-t border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Information</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <User className="w-5 h-5 text-slate-400" />
                                    <p className="text-sm text-slate-900">
                                        {bookingData.customerInfo.firstName} {bookingData.customerInfo.lastName}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-slate-400" />
                                    <p className="text-sm text-slate-900">{bookingData.customerInfo.email}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-slate-400" />
                                    <p className="text-sm text-slate-900">{bookingData.customerInfo.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Next Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-blue-50 rounded-2xl border-2 border-blue-200 p-6 mb-8"
                >
                    <h3 className="text-lg font-bold text-slate-900 mb-4">What's Next?</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#487307] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold">1</span>
                            </div>
                            <p className="text-sm text-slate-700">
                                You'll receive a confirmation email at <strong>{bookingData.customerInfo.email}</strong>
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#487307] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold">2</span>
                            </div>
                            <p className="text-sm text-slate-700">
                                Our team will contact you 24 hours before your scheduled pickup
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#487307] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold">3</span>
                            </div>
                            <p className="text-sm text-slate-700">
                                Your chauffeur will arrive 15 minutes before the scheduled time
                            </p>
                        </li>
                    </ul>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center"
                >
                    <button
                        onClick={handleNewBooking}
                        className="w-full sm:w-auto min-w-[240px] inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] text-white font-bold hover:shadow-lg hover:shadow-[#487307]/30 transition-all"
                    >
                        <Home className="w-5 h-5" />
                        Return to Home
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
