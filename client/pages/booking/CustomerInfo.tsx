import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';
import {
    PhoneWithCountryField,
    DEFAULT_PHONE_COUNTRY,
    formatFullPhone,
    type CountryDialOption,
} from '@/components/PhoneWithCountryField';

export default function CustomerInfo() {
    const navigate = useNavigate();
    const { bookingData, updateBookingData } = useBooking();

    const savedPhone = bookingData.customerInfo?.phone ?? '';
    const [selectedCountry, setSelectedCountry] = useState<CountryDialOption>(DEFAULT_PHONE_COUNTRY);

    const [formData, setFormData] = useState({
        firstName: bookingData.customerInfo?.firstName || '',
        lastName: bookingData.customerInfo?.lastName || '',
        email: bookingData.customerInfo?.email || '',
        phone: savedPhone.trim().startsWith('+') ? '' : savedPhone,
        specialRequests: bookingData.customerInfo?.specialRequests || '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        const localDigits = formData.phone.replace(/\D/g, '');
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (localDigits.length < 5) {
            newErrors.phone = 'Invalid phone number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleContinue = () => {
        if (validateForm()) {
            updateBookingData({
                customerInfo: {
                    ...formData,
                    phone: formatFullPhone(selectedCountry, formData.phone.trim()),
                },
            });
            navigate('/booking/checkout');
        }
    };

    const handleBack = () => {
        navigate('/booking/select-car');
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
            {/* Progress Bar */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-sm font-semibold text-slate-600">Step 2 of 4</h2>
                        <span className="text-sm font-medium text-[#487307]">50% Complete</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                        <motion.div
                            initial={{ width: '25%' }}
                            animate={{ width: '50%' }}
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
                    <h1 className="text-4xl sm:text-5xl font-montserrat font-bold text-slate-900 mb-4">
                        Your{' '}
                        <span className="bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
                            Information
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Please provide your contact details for the booking
                    </p>
                </motion.div>

                {/* Selected Car Summary */}
                {bookingData.selectedCar && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-8"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={bookingData.selectedCar.image}
                                alt={bookingData.selectedCar.name}
                                className="w-24 h-24 object-cover rounded-xl"
                            />
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900">{bookingData.selectedCar.name}</h3>
                                <p className="text-sm text-slate-600 mt-1">
                                    {bookingData.selectedCar.passengers} Passengers • {bookingData.selectedCar.luggage} Luggage
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8"
                >
                    <div className="space-y-6">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* First Name */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    First Name *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        value={formData.firstName}
                                        onChange={(e) => handleChange('firstName', e.target.value)}
                                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${errors.firstName
                                            ? 'border-red-300 focus:border-red-500'
                                            : 'border-slate-200 focus:border-[#487307]'
                                            }`}
                                        placeholder="John"
                                    />
                                </div>
                                {errors.firstName && (
                                    <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                                )}
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Last Name *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        value={formData.lastName}
                                        onChange={(e) => handleChange('lastName', e.target.value)}
                                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${errors.lastName
                                            ? 'border-red-300 focus:border-red-500'
                                            : 'border-slate-200 focus:border-[#487307]'
                                            }`}
                                        placeholder="Doe"
                                    />
                                </div>
                                {errors.lastName && (
                                    <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Email Address *
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:outline-none transition-all ${errors.email
                                        ? 'border-red-300 focus:border-red-500'
                                        : 'border-slate-200 focus:border-[#487307]'
                                        }`}
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                            )}
                        </div>

                        <PhoneWithCountryField
                            localPhone={formData.phone}
                            onLocalPhoneChange={(v) => handleChange('phone', v)}
                            selectedCountry={selectedCountry}
                            onCountryChange={setSelectedCountry}
                            error={errors.phone}
                            initialFullPhone={savedPhone.trim().startsWith('+') ? savedPhone : undefined}
                        />

                        {/* Special Requests */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Special Requests (Optional)
                            </label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                                <textarea
                                    value={formData.specialRequests}
                                    onChange={(e) => handleChange('specialRequests', e.target.value)}
                                    rows={4}
                                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-[#487307] transition-all resize-none"
                                    placeholder="Any special requirements or requests..."
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-8">
                    <button
                        onClick={handleBack}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-300 bg-white text-slate-700 font-bold hover:bg-slate-50 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Car Selection
                    </button>

                    <button
                        onClick={handleContinue}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] text-white font-bold hover:shadow-lg hover:shadow-[#487307]/30 transition-all"
                    >
                        Continue to Checkout
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
