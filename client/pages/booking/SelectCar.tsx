import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Luggage, Check, ArrowRight, ArrowLeft, Sparkles, Info, ChevronDown } from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';

// Fleet vehicle classes matching FleetPreviewSection
const VEHICLE_CLASSES = [
    {
        id: "business-class",
        name: "Business Class",
        priceMain: 60,
        image: "/fleet/BusinessClass.png",
        guests: 3,
        luggage: 2,
        description: "Mercedes E-Class, BMW 5 Series, or similar premium executive vehicles.",
        longDescription: "Perfect for business meetings and airport transfers. Enjoy a smooth ride in our premium executive sedans.",
        vehicles: ["Mercedes E-Class", "BMW 5 Series", "Or similar"]
    },
    {
        id: "first-class",
        name: "First Class",
        priceMain: 75,
        image: "/fleet/firstClass.png",
        guests: 3,
        luggage: 2,
        description: "Mercedes S-Class, BMW 7 Series, or similar luxury sedans.",
        longDescription: "The ultimate in luxury and comfort. Ideal for VIPs and special occasions.",
        vehicles: ["Mercedes S-Class", "BMW 7 Series", "Or similar luxury sedan"]
    },
    {
        id: "business-van",
        name: "Business Van",
        priceMain: 70,
        image: "/fleet/BusinessVAN.png",
        guests: 6,
        luggage: 6,
        description: "Mercedes Vito or similar executive vans for group travel.",
        longDescription: "Spacious and comfortable for groups or families with extra luggage.",
        vehicles: ["Mercedes Vito", "Or similar executive van"]
    },
];

export default function SelectCar() {
    const navigate = useNavigate();
    const { bookingData, updateBookingData } = useBooking();
    const [selectedCarId, setSelectedCarId] = useState<string | null>(
        bookingData.selectedCar?.id || null
    );

    const handleSelectCar = (car: typeof VEHICLE_CLASSES[0]) => {
        if (selectedCarId === car.id) {
            // Deselect logic
            setSelectedCarId(null);
            updateBookingData({ selectedCar: undefined });
        } else {
            // Select logic
            setSelectedCarId(car.id);
            updateBookingData({
                selectedCar: {
                    id: car.id,
                    name: car.name,
                    image: car.image,
                    price: car.priceMain, // Using the base price
                    passengers: car.guests,
                    luggage: car.luggage,
                    features: car.vehicles,
                    description: car.description
                }
            });
        }
    };

    const handleContinue = () => {
        if (selectedCarId) {
            navigate('/booking/customer-info');
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
            {/* Progress Bar */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-sm font-semibold text-slate-600">Step 1 of 4</h2>
                        <span className="text-sm font-medium text-[#487307]">25% Complete</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '25%' }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] h-2 rounded-full"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-slate-900 mb-4">
                        Select Your{' '}
                        <span className="bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
                            Vehicle Class
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Choose the perfect vehicle category for your journey
                    </p>
                </motion.div>

                {/* Booking Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-12"
                >
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Your Booking Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <p className="text-xs text-slate-500 mb-1">Type</p>
                            <p className="text-sm font-semibold text-slate-900 capitalize">{bookingData.bookingType}</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 mb-1">Date</p>
                            <p className="text-sm font-semibold text-slate-900">
                                {bookingData.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 mb-1">Time</p>
                            <p className="text-sm font-semibold text-slate-900">{bookingData.time}</p>
                        </div>
                        {bookingData.flightNumber?.trim() && (
                            <div>
                                <p className="text-xs text-slate-500 mb-1">Flight Number</p>
                                <p className="text-sm font-semibold text-slate-900">{bookingData.flightNumber}</p>
                            </div>
                        )}
                        {bookingData.bookingType === 'hourly' && (
                            <div>
                                <p className="text-xs text-slate-500 mb-1">Duration</p>
                                <p className="text-sm font-semibold text-slate-900">{bookingData.duration}</p>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Vehicle Class List */}
                <div className="flex flex-col gap-4 mb-12 max-w-4xl mx-auto">
                    {VEHICLE_CLASSES.map((car, index) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            onClick={() => handleSelectCar(car)}
                            className={`relative rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden ${selectedCarId === car.id
                                ? 'bg-[#ecf3e6] border-2 border-[#487307] shadow-sm'
                                : 'bg-white border-slate-200 hover:border-slate-300'
                                }`}
                        >
                            <div className="flex items-center p-3 sm:p-6 gap-3 sm:gap-6">
                                {/* Image Section */}
                                <div className="w-20 sm:w-36 flex-shrink-0">
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="flex-grow min-w-0">
                                    <div className="flex justify-between items-start gap-2 sm:gap-4">
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">{car.name}</h3>
                                            </div>

                                            {/* Specs */}
                                            <div className="flex items-center gap-3 my-1 sm:my-2 text-slate-700">
                                                <div className="flex items-center gap-1" title="Passengers">
                                                    <Users className="w-3.5 h-3.5 text-[#487307]" />
                                                    <span className="text-xs font-bold">{car.guests}</span>
                                                </div>
                                                <div className="flex items-center gap-1" title="Luggage">
                                                    <Luggage className="w-3.5 h-3.5 text-[#487307]" />
                                                    <span className="text-xs font-bold">{car.luggage}</span>
                                                </div>
                                            </div>

                                            <p className="text-[10px] sm:text-xs text-slate-500 block leading-tight">
                                                {car.vehicles[0]} or similar
                                            </p>
                                        </div>

                                        <div className="flex items-center flex-shrink-0 self-center">
                                            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-transform duration-300 ${selectedCarId === car.id ? 'rotate-180 text-[#487307]' : ''}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Details (visible only when selected) */}
                            {selectedCarId === car.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="px-6 pb-6 pt-0"
                                >
                                    <div className="mt-6 text-sm text-slate-500">
                                        <p className="italic">{car.longDescription}</p>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* 4. INFO SECTION */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 mb-12">
                    <p className="text-sm font-semibold text-[#487307] mb-4 flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        All classes include:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 mb-6">
                        {[
                            "Free cancellation up until 1 hour before pickup",
                            "Free 15 minutes of wait time",
                            "Meet & Greet service",
                            "Complimentary bottle of water"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                <Check className="w-4 h-4 text-[#487307] mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-4 border-t border-slate-100">
                        <p className="text-xs text-slate-500 mb-2 font-semibold">Please note:</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-xs text-slate-500">
                                <span className="bg-slate-200 rounded-full p-0.5 mt-0.5 flex-shrink-0"><div className="w-1 h-1 bg-slate-500 rounded-full" /></span>
                                Guest/luggage capacities must be abided by for safety reasons. If you are unsure, select a larger class.
                            </li>
                            <li className="flex items-start gap-2 text-xs text-slate-500">
                                <span className="bg-slate-200 rounded-full p-0.5 mt-0.5 flex-shrink-0"><div className="w-1 h-1 bg-slate-500 rounded-full" /></span>
                                The vehicle images above are examples. You may get a different vehicle of similar quality.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 5. NAVIGATION FOOTER */}
                <div className="flex flex-col sm:flex-row gap-6 justify-between items-center pt-6 border-t border-slate-200">
                    <button
                        onClick={handleBack}
                        className="w-full sm:w-auto px-8 py-3 rounded-full border border-slate-300 text-slate-600 font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </button>

                    <button
                        onClick={handleContinue}
                        disabled={!selectedCarId}
                        className={`w-full sm:w-auto px-10 py-3 rounded-full font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 ${selectedCarId
                            ? 'bg-[#487307] hover:bg-[#3a5c06] shadow-[#487307]/20 transform hover:-translate-y-0.5'
                            : 'bg-slate-300 cursor-not-allowed'
                            }`}
                    >
                        Continue to Customer Info
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
