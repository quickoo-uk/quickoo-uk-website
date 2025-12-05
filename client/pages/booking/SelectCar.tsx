import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Briefcase, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';

const luxuryCars = [
    {
        id: 'mercedes-s-class',
        name: 'Mercedes S-Class',
        image: '/home/hero-premium-travel-1.png',
        price: 75,
        passengers: 3,
        luggage: 2,
        features: ['Premium Leather', 'Climate Control', 'WiFi', 'Refreshments'],
        description: 'Ultimate luxury and comfort for executive travel'
    },
    {
        id: 'bmw-7-series',
        name: 'BMW 7 Series',
        image: '/home/hero-premium-travel-2.jpg',
        price: 75,
        passengers: 3,
        luggage: 2,
        features: ['Massage Seats', 'Premium Sound', 'WiFi', 'Privacy Glass'],
        description: 'Sophisticated elegance meets cutting-edge technology'
    },
    {
        id: 'audi-a8',
        name: 'Audi A8',
        image: '/home/hero-premium-travel-3.jpg',
        price: 70,
        passengers: 3,
        luggage: 2,
        features: ['Matrix LED', 'Virtual Cockpit', 'WiFi', 'Premium Audio'],
        description: 'German engineering at its finest'
    },
    {
        id: 'mercedes-v-class',
        name: 'Mercedes V-Class',
        image: '/home/hero-premium-travel-1.png',
        price: 70,
        passengers: 6,
        luggage: 6,
        features: ['Spacious Interior', 'Captain Seats', 'WiFi', 'Entertainment System'],
        description: 'Perfect for group travel with maximum comfort'
    },
    {
        id: 'range-rover',
        name: 'Range Rover',
        image: '/home/hero-premium-travel-2.jpg',
        price: 80,
        passengers: 4,
        luggage: 4,
        features: ['All-Terrain', 'Panoramic Roof', 'WiFi', 'Premium Leather'],
        description: 'Luxury SUV for any journey'
    },
    {
        id: 'mercedes-e-class',
        name: 'Mercedes E-Class',
        image: '/home/hero-premium-travel-3.jpg',
        price: 60,
        passengers: 3,
        luggage: 2,
        features: ['Executive Comfort', 'Premium Sound', 'WiFi', 'Climate Control'],
        description: 'Premium executive sedan for business travel'
    }
];

export default function SelectCar() {
    const navigate = useNavigate();
    const { bookingData, updateBookingData } = useBooking();
    const [selectedCarId, setSelectedCarId] = useState<string | null>(
        bookingData.selectedCar?.id || null
    );

    const handleSelectCar = (car: typeof luxuryCars[0]) => {
        setSelectedCarId(car.id);
        updateBookingData({ selectedCar: car });
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
                    <h1 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-900 mb-4">
                        Select Your{' '}
                        <span className="bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
                            Luxury Vehicle
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Choose from our premium fleet of meticulously maintained vehicles
                    </p>
                </motion.div>

                {/* Booking Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-8"
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

                {/* Car Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {luxuryCars.map((car, index) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            onClick={() => handleSelectCar(car)}
                            className={`relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${selectedCarId === car.id
                                ? 'ring-4 ring-[#487307] shadow-2xl shadow-[#487307]/20 scale-[1.02]'
                                : 'shadow-lg hover:shadow-xl hover:scale-[1.01] border border-slate-200'
                                }`}
                        >
                            {/* Selected Badge */}
                            {selectedCarId === car.id && (
                                <div className="absolute top-4 right-4 z-10 bg-[#487307] text-white rounded-full p-2 shadow-lg">
                                    <Check className="w-5 h-5" />
                                </div>
                            )}

                            {/* Car Image */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold text-white mb-1">{car.name}</h3>
                                    <p className="text-sm text-white/90">{car.description}</p>
                                </div>
                            </div>

                            {/* Car Details */}
                            <div className="p-6">
                                {/* Capacity */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Users className="w-5 h-5 text-[#487307]" />
                                        <span className="text-sm font-semibold text-slate-700">{car.passengers} Passengers</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-[#487307]" />
                                        <span className="text-sm font-semibold text-slate-700">{car.luggage} Luggage</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {car.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="text-xs px-3 py-1 bg-green-50 text-[#487307] rounded-full font-medium"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                                    <div>
                                        <p className="text-xs text-slate-500">Starting from</p>
                                        <p className="text-2xl font-bold text-slate-900">
                                            £{car.price}
                                            <span className="text-sm font-normal text-slate-500">/hour</span>
                                        </p>
                                    </div>
                                    <button
                                        className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCarId === car.id
                                            ? 'bg-[#487307] text-white'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                            }`}
                                    >
                                        {selectedCarId === car.id ? 'Selected' : 'Select'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
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
                        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all ${selectedCarId
                            ? 'bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] text-white hover:shadow-lg hover:shadow-[#487307]/30'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
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
