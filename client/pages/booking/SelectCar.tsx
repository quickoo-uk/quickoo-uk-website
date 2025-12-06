import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Luggage, Check, ArrowRight, ArrowLeft, Sparkles, Info } from 'lucide-react';
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
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
                        {bookingData.bookingType === 'hourly' && (
                            <div>
                                <p className="text-xs text-slate-500 mb-1">Duration</p>
                                <p className="text-sm font-semibold text-slate-900">{bookingData.duration}</p>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Vehicle Class Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {VEHICLE_CLASSES.map((car, index) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            onClick={() => handleSelectCar(car)}
                            className={`group relative bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col ${selectedCarId === car.id
                                ? 'ring-4 ring-[#487307] shadow-2xl shadow-[#487307]/20 scale-[1.02] z-10'
                                : 'shadow-sm hover:shadow-xl hover:-translate-y-1 border border-slate-200'
                                }`}
                        >
                            {/* Selected Badge */}
                            {selectedCarId === car.id && (
                                <div className="absolute top-4 right-4 z-20 bg-[#487307] text-white rounded-full p-2 shadow-lg">
                                    <Check className="w-5 h-5" />
                                </div>
                            )}

                            {/* Premium Label */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-b-xl border-x border-b border-slate-100 shadow-sm">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#487307]">Premium</span>
                            </div>

                            {/* Image Section */}
                            <div className="relative h-56 bg-gradient-to-br from-slate-50 to-slate-100 p-6 flex items-center justify-center overflow-hidden">
                                <motion.img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-montserrat font-bold text-slate-900">{car.name}</h3>
                                        <p className="text-sm text-slate-500 mt-1">or similar</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-500">from</p>
                                        <p className="text-xl font-bold text-[#487307]">£{car.priceMain}<span className="text-xs font-normal text-slate-400">/hr</span></p>
                                    </div>
                                </div>

                                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                                    {car.description}
                                </p>

                                {/* Specs */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
                                        <Users className="w-5 h-5 text-[#487307]" />
                                        <div>
                                            <p className="text-xs text-slate-500 font-semibold uppercase">Guests</p>
                                            <p className="text-sm font-bold text-slate-900">{car.guests}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
                                        <Luggage className="w-5 h-5 text-[#487307]" />
                                        <div>
                                            <p className="text-xs text-slate-500 font-semibold uppercase">Luggage</p>
                                            <p className="text-sm font-bold text-slate-900">{car.luggage}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Examples */}
                                <div className="mb-8">
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Includes</p>
                                    <div className="flex flex-wrap gap-2">
                                        {car.vehicles.map((v, i) => (
                                            <span key={i} className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-lg">
                                                {v}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <button
                                        className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${selectedCarId === car.id
                                            ? 'bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] text-white shadow-lg shadow-[#487307]/30'
                                            : 'bg-transparent border-2 border-[#487307] text-[#487307] hover:bg-[#487307]/5 hover:-translate-y-0.5'
                                            }`}
                                    >
                                        {selectedCarId === car.id ? (
                                            <>
                                                <Check className="w-5 h-5" />
                                                Selected
                                            </>
                                        ) : (
                                            'Select Category'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-slate-200">
                    <button
                        onClick={handleBack}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-300 bg-white text-slate-700 font-bold hover:bg-slate-50 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </button>

                    <button
                        onClick={handleContinue}
                        disabled={!selectedCarId}
                        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold transition-all ${selectedCarId
                            ? 'bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] text-white hover:shadow-xl hover:shadow-[#487307]/30 hover:-translate-y-1'
                            : 'bg-[#0f1801]/10 text-[#0f1801]/40 cursor-not-allowed'
                            }`}
                    >
                        Continue to Customer Info
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
