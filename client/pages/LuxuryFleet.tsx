import { Crown, Wifi, Coffee, Music, Shield, Smartphone, ArrowRight, Sparkles, Car, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.12,
        },
    },
};

const fleetCategories = [
    {
        title: "Executive Saloons",
        description: "Mercedes-Benz E-Class or similar. Perfect for business travel and airport transfers.",
        features: ["Leather interior", "Climate control", "Wi-Fi", "Bottled water"],
        image: "/fleet/e-class.png", // Placeholder path
    },
    {
        title: "Luxury First Class",
        description: "Mercedes-Benz S-Class or Maybach. The ultimate in comfort and prestige.",
        features: ["Reclining seats", "Massage function", "Rear entertainment", "Privacy glass"],
        image: "/fleet/s-class.png", // Placeholder path
    },
    {
        title: "Executive MPVs",
        description: "Mercedes-Benz V-Class. Spacious luxury for groups and roadshows.",
        features: ["Conference seating", "Table configuration", "Extra luggage space", "Electric doors"],
        image: "/fleet/v-class.png", // Placeholder path
    },
    {
        title: "Electric Luxury",
        description: "Mercedes-Benz EQE/EQS. Sustainable travel without compromising on luxury.",
        features: ["Zero emissions", "Silent cabin", "Advanced tech", "Sustainable materials"],
        image: "/fleet/eqe.png", // Placeholder path
    },
];

const amenities = [
    {
        icon: Wifi,
        title: "High-Speed Wi-Fi",
        description: "Stay connected with complimentary 5G Wi-Fi in every vehicle.",
    },
    {
        icon: Coffee,
        title: "Refreshments",
        description: "Complimentary bottled water, mints, and daily newspapers.",
    },
    {
        icon: Smartphone,
        title: "Device Charging",
        description: "Universal chargers for all devices including laptops and tablets.",
    },
    {
        icon: Music,
        title: "Premium Audio",
        description: "High-fidelity sound systems with Bluetooth connectivity.",
    },
];

const vehicleStandards = [
    {
        title: "Immaculate Condition",
        description: "Vehicles are valeted daily and inspected before every journey.",
        standard: "Daily Valet",
    },
    {
        title: "Under 3 Years Old",
        description: "Our fleet consists only of the latest models, ensuring reliability and modern comfort.",
        standard: "Latest Models",
    },
    {
        title: "Regular Maintenance",
        description: "Strict maintenance schedules adhering to manufacturer specifications.",
        standard: "Manufacturer Serviced",
    },
    {
        title: "Climate Control",
        description: "Advanced multi-zone climate control systems for personalized comfort.",
        standard: "Climate Controlled",
    },
];

const ukCompliance = [
    {
        title: "DVSA Approved",
        description: "All vehicles meet strict Driver and Vehicle Standards Agency safety requirements.",
        standard: "DVSA Certified",
    },
    {
        title: "Euro 6 / ULEZ Compliant",
        description: "Meeting the highest environmental standards for ultra-low emissions.",
        standard: "Eco Friendly",
    },
    {
        title: "Accessibility Standards",
        description: "Compliance with UK accessibility regulations for passenger comfort.",
        standard: "Accessibility Ready",
    },
    {
        title: "PHV Licensing",
        description: "Fully licensed by Transport for London and local authorities.",
        standard: "TfL Licensed",
    },
];

const relatedFeatures = [
    {
        title: "Safety First",
        description: "ISO certified safety protocols",
        link: "/why-choose/safety-first",
        icon: "🛡️",
    },
    {
        title: "Transparent Pricing",
        description: "Honest quotes with no hidden fees",
        link: "/why-choose/transparent-pricing",
        icon: "💰",
    },
    {
        title: "Elite Chauffeurs",
        description: "VIP-trained professional chauffeurs",
        link: "/why-choose/elite-chauffeurs",
        icon: "⭐",
    },
];

export default function LuxuryFleetPage() {
    return (
        <div className="bg-gradient-to-b from-[#f9fafc] via-white to-[#f1f5ff] text-slate-900 overflow-hidden">
            {/* Hero Section */}
            <motion.section
                className="relative overflow-hidden min-h-[70vh] flex items-center bg-gradient-to-br from-[#f1f5ff] via-white to-[#e8f5e9]"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(72,115,7,0.08),transparent_50%)]" />
                <div className="absolute -bottom-20 -right-8 h-72 w-72 bg-[#487307]/10 blur-[140px]" />
                <div className="absolute -top-24 -left-10 h-64 w-64 bg-[#6aa80b]/10 blur-[120px]" />

                <div className="relative z-10 section-container py-20 w-full">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 rounded-full border border-[#487307]/20 bg-white/80 px-6 py-2 backdrop-blur shadow-sm">
                                <Crown className="h-4 w-4 text-[#487307]" />
                                <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                                    Tailored Luxury Fleet
                                </span>
                            </div>

                            <div className="space-y-6">
                                <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
                                    A pristine collection,{" "}
                                    <span className="bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
                                        curated for every occasion.
                                    </span>
                                </h1>
                                <p className="text-lg text-slate-600 font-inter">
                                    From flagship sedans to spacious executive MPVs, our premium fleet collection represents the pinnacle of automotive luxury, maintained to showroom standards.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/book-now">
                                        <button className="luxury-button-gold px-7 py-3 text-base rounded-full">
                                            View Our Fleet
                                        </button>
                                    </Link>
                                    <Link to="/contact">
                                        <button className="rounded-full border border-slate-300 px-7 py-3 text-base font-semibold text-slate-900 hover:bg-white transition">
                                            Special Requests
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#487307]/20 via-[#6aa80b]/10 to-transparent blur-3xl" />
                            <div className="relative rounded-3xl border border-white/60 bg-white/90 p-4 backdrop-blur-lg shadow-2xl overflow-hidden">
                                <img
                                    src="/images/why-choose/luxury-fleet-hero.jpg"
                                    alt="Luxury Fleet - Premium Mercedes-Benz vehicles"
                                    className="w-full h-auto rounded-2xl object-cover"
                                    style={{ minHeight: '400px', maxHeight: '500px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Fleet Categories Section */}
            <motion.section
                className="section-spacing bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <div className="section-container space-y-12">
                    <div className="text-center space-y-4">
                        <p className="uppercase tracking-[0.4em] text-sm text-[#487307] font-semibold">
                            Our Collection
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Vehicles for every requirement
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Choose from our versatile range of premium vehicles, each selected for its comfort, style, and reliability.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {fleetCategories.map((category) => (
                            <motion.div
                                key={category.title}
                                className="group rounded-3xl border border-[#487307]/10 bg-gradient-to-br from-white to-[#e8f5e9]/30 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex flex-col h-full">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-montserrat font-bold text-slate-900 mb-2">
                                            {category.title}
                                        </h3>
                                        <p className="text-slate-600">
                                            {category.description}
                                        </p>
                                    </div>
                                    <div className="mt-auto">
                                        <ul className="grid grid-cols-2 gap-2 mb-6">
                                            {category.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-[#487307]" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="/book-now">
                                            <button className="w-full rounded-xl border border-[#487307]/20 bg-white py-3 text-sm font-semibold text-[#487307] hover:bg-[#487307] hover:text-white transition-colors">
                                                Book {category.title}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Amenities Section */}
            <motion.section
                className="section-spacing bg-gradient-to-b from-[#f1f5ff] to-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <div className="section-container space-y-12">
                    <div className="text-center space-y-4">
                        <p className="uppercase tracking-[0.4em] text-sm text-slate-500 font-semibold">
                            Onboard Experience
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Signature amenities
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {amenities.map((amenity) => {
                            const Icon = amenity.icon;
                            return (
                                <motion.div
                                    key={amenity.title}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300"
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="space-y-3">
                                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[#e8f5e9] text-[#487307]">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-lg font-montserrat font-bold text-slate-900">
                                            {amenity.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {amenity.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Vehicle Standards & Compliance Section */}
            <motion.section
                className="section-spacing bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <div className="section-container space-y-12">
                    <div className="text-center space-y-4">
                        <p className="uppercase tracking-[0.4em] text-sm text-[#487307] font-semibold">
                            Standards & Compliance
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Excellence in every detail
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            We maintain the highest standards of vehicle quality and regulatory compliance.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[...vehicleStandards, ...ukCompliance].slice(0, 8).map((item) => (
                            <motion.div
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
                                variants={fadeInUp}
                            >
                                <div className="space-y-2">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f5e9] px-3 py-1">
                                        <Shield className="h-3 w-3 text-[#487307]" />
                                        <span className="text-xs font-bold text-[#487307] uppercase tracking-wider">
                                            {item.standard}
                                        </span>
                                    </div>
                                    <h3 className="text-base font-montserrat font-bold text-slate-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Related Features Section */}
            <motion.section
                className="section-spacing bg-gradient-to-b from-[#f1f5ff] to-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <div className="section-container space-y-12">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm">
                            <Sparkles className="h-4 w-4 text-[#487307]" />
                            <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                                Explore More
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Discover what makes us different
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {relatedFeatures.map((feature) => (
                            <Link key={feature.title} to={feature.link}>
                                <motion.div
                                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                                    variants={fadeInUp}
                                    whileHover={{ y: -8 }}
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-montserrat font-bold text-slate-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 mb-4">{feature.description}</p>
                                    <div className="flex items-center gap-2 text-[#487307] font-semibold text-sm group-hover:gap-3 transition-all">
                                        <span>Learn more</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="section-spacing bg-gradient-to-br from-[#1a2e03] via-[#487307] to-[#6aa80b] text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <div className="section-container text-center space-y-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold">
                        Travel in exceptional comfort
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Experience the difference of a meticulously maintained luxury fleet. Book your vehicle today.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/book-now">
                            <button className="bg-white text-[#487307] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition shadow-xl">
                                Book Luxury Vehicle
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition">
                                Contact Fleet Team
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
