import { Crown, Wifi, Coffee, Music, Shield, Smartphone, ArrowRight, Sparkles, Car, Star, Plane, Briefcase, Check, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionChip } from "@/components/SectionChip";

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
        title: "Mercedes-Benz E-Class",
        description: "The Mercedes-Benz E-Class is an excellent option for business executives conducting business travel and for people needing London Airport Transfers.",
        features: ["Large or extensive corporate transfers", "Airport transfer services to/from the", "Corporate meeting transportation to/from the", "Hotel transfers"],
        image: "/fleet/e-class.png", // Placeholder path
    },
    {
        title: "Mercedes-Benz S-Class",
        description: "The S-Class is the ultimate vehicle for a travelling executive. The S-Class is designed for VIPs such as diplomats and leaders of Fortune 500 companies.",
        features: ["Travelling executives", "VIP transportation", "Corporate function transportation", "Luxury travelling businessmen"],
        image: "/fleet/s-class.png", // Placeholder path
    },
    {
        title: "Mercedes-Benz V-Class",
        description: "Travelling with others does not mean giving up any level of luxury! The Mercedes-Benz V-Class can carry up to 9 passengers comfortably.",
        features: ["Group Airport Transfers", "Family travel", "Corporate Road Show", "Conference transportation"],
        image: "/fleet/v-class.png", // Placeholder path
    },
    {
        title: "Range Rover Autobiography",
        description: "When you want luxury and to be noticed on the road, the Range Rover Autobiography is an excellent option for sophisticated events.",
        features: ["Corporate/business events or functions", "Wedding", "VIP airport transport", "Luxury city transport"],
        image: "/fleet/eqe.png", // Placeholder path
    },
    {
        title: "Luxury MPVs",
        description: "Our executive MPVs offer huge space and comfort for larger groups and have plenty of room for luggage. Our executive MPVs are the perfect solution for conferences, sporting events, family holidays or business travel throughout the UK.",
        features: ["Zero emissions", "Silent Cabin", "Advanced Tech", "Sustainable Materials"],
        image: "/fleet/v-class.png", // Placeholder path
    },
];

const journeyTypes = [
    {
        icon: Plane,
        title: "Airport Transfers",
        description: "Enjoy dependable and on-time London airport transfer services via our professionally trained chauffeur with all the necessary equipment to track your flight.",
    },
    {
        icon: Briefcase,
        title: "Corporate Travel",
        description: "Use our executive corporate transportation solutions for your company's executives and clients to show them the professional image of your company.",
    },
    {
        icon: Crown,
        title: "Luxury Transportation for All Occasions",
        description: "We proudly offer a large variety of luxury transportation for the most important occasions of your life, such as weddings, gala receptions, and other events.",
    },
    {
        icon: Car,
        title: "Private Chauffeur Services",
        description: "If you are in London for shopping, sightseeing, eating out or attending a business meeting, our chauffeurs will provide you with the flexibility, discretion and comfort while you travel.",
    },
];

const luxuryFeatures = [
    { name: "Plush leather seats", icon: Crown },
    { name: "Climate-controlled interiors", icon: Sparkles },
    { name: "Complimentary bottled water", icon: Coffee },
    { name: "USB charging ports", icon: Smartphone },
    { name: "Wi-Fi (applicable to certain vehicles)", icon: Wifi },
    { name: "Spacious luggage capacity", icon: Briefcase },
    { name: "Privacy glass (applicable to certain vehicles)", icon: Shield },
    { name: "Advanced Safety Systems", icon: Star },
    { name: "GPS Navigation", icon: MapPin },
    { name: "Immaculate condition of the interior", icon: Car }
];

const relatedFeatures = [
    {
        title: "Fleet Of Premium Vehicles",
        description: "Our fleet of luxury vehicles contains some of the most sought-after luxury vehicles in the world, so that all of your journeys are elegant, comfortable and unforgettable.",
        icon: Crown,
    },
    {
        title: "Properly Maintained Fleet",
        description: "All of our vehicles go through regular inspections, are detailed professionally, and are serviced to the highest standard, to ensure the safest, cleanest and best-performing vehicles.",
        icon: Shield,
    },
    {
        title: "Experienced Professional Chauffeurs",
        description: "All of our drivers are polite, discreet and highly experienced. They all have extensive local knowledge and provide a smooth, on-time, and hassle-free travel experience.",
        icon: Star,
    },
    {
        title: "Advanced Technology",
        description: "All of our vehicles are equipped with the latest in navigation systems, climate control, luxury interiors, Wi-Fi, charging ports and premium entertainment to give you the greatest comfort.",
        icon: Smartphone,
    },
    {
        title: "Maximising Your Comfort",
        description: "We have selected all of our vehicles to provide you with optimal comfort as a passenger. All of our vehicles have roomy seating and quiet interiors and are refined for maximum comfort when travelling.",
        icon: Sparkles,
    },
    {
        title: "Ideal For All Occasions",
        description: "We have a vehicle in our fleet that is perfect for any occasion, whether it is for an Executive Airport Transfer London, corporate travel, wedding transportation, sightseeing tours or private chauffeur services, we will exceed your expectations.",
        icon: Car,
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
                            <SectionChip title="Tailored Luxury Fleet" icon={Crown} />

                            <div className="space-y-6">
                                <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-5xl font-semibold leading-tight text-slate-900">
                                    Luxury Fleet –{" "}
                                    <span className="block mt-2 bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
                                        Travel with Style, Comfort & Prestige
                                    </span>
                                </h1>
                                <p className="text-base sm:text-lg text-slate-600 font-inter leading-relaxed">
                                    Every trip you take is important, so your vehicle choice is important. Our Luxury Fleet has been hand-picked to create a first-class travel experience for business executives, large groups travelling through airports, VIPs and special occasions. All of our luxury fleet vehicles, including stylish saloons, spacious SUV’s and MPV’s (multipurpose vehicles), offer the highest level of refined comfort, current technology and dependable reliability.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/#home-booking">
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
                                    src="/images/why-choose/luxury-fleet-hero.png"
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
                        <p className="uppercase tracking-[0.4em] text-lg text-[#487307] font-semibold">
                            Our Collection
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Discover Our Premium Luxury Fleet
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            All the vehicles in our hands have top-of-the-line maintenance, advanced vehicle features, and the latest safety equipment to provide you with the best travel experience possible, no matter why you are travelling.
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
                                        <div className="mb-6 bg-white/60 rounded-2xl p-4 sm:p-5 border border-[#487307]/10">
                                            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                <Star className="h-3.5 w-3.5 text-[#487307]" /> Best Suited For:
                                            </h4>
                                            <ul className="flex flex-col space-y-2.5">
                                                {category.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                                                        <div className="mt-0.5 flex-shrink-0 h-4 w-4 rounded-full bg-[#487307]/10 flex items-center justify-center">
                                                            <svg className="h-2.5 w-2.5 text-[#487307]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                        <span className="flex-1">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Link to="/#home-booking">
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

            {/* Journey Types Section */}
            <motion.section
                className="pt-16 md:pt-24 pb-8 md:pb-12 bg-gradient-to-b from-[#f1f5ff] to-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <div className="section-container space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Luxury Travel for Every Journey
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Every trip can be considered an experience that allows us to travel from one destination to another based on our current situation.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {journeyTypes.map((journey) => {
                            const Icon = journey.icon;
                            return (
                                <motion.div
                                    key={journey.title}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300"
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[#e8f5e9] text-[#487307]">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-montserrat font-bold text-slate-900">
                                            {journey.title}
                                        </h3>
                                        <p className="text-base text-slate-600 leading-relaxed">
                                            {journey.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Luxury Features Section */}
            <motion.section
                className="pb-16 md:pb-24 pt-8 md:pt-12 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <div className="section-container space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Luxury Features Included in Every Vehicle
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Every vehicle within our Luxury Fleet offers premium features that will surely make your ride better than it has ever been! You will benefit from the following:
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                            {luxuryFeatures.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        variants={fadeInUp}
                                        className="group relative flex flex-col items-center justify-center p-6 text-center rounded-2xl bg-white border border-[#487307]/10 shadow-sm hover:shadow-xl hover:border-[#487307]/30 transition-all duration-300 overflow-hidden cursor-default"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#487307]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="relative z-10 h-14 w-14 mb-4 rounded-full bg-[#f4f7f0] flex items-center justify-center group-hover:bg-[#487307] transition-all duration-300 shadow-sm group-hover:shadow-md">
                                            <Icon className="h-6 w-6 text-[#487307] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h3 className="relative z-10 text-sm font-semibold text-slate-800 leading-snug group-hover:text-[#487307] transition-colors duration-300">
                                            {feature.name}
                                        </h3>
                                    </motion.div>
                                );
                            })}
                        </div>
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
                        {/* <SectionChip title="Why Choose Us" /> */}
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Why Our Luxury Fleet Stands Apart
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            When selecting a chauffeur company, you are not just choosing a luxury car, but also receiving an outstanding experience from your first contact until the completion of your journey.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {relatedFeatures.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[#e8f5e9] text-[#487307] mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-montserrat font-bold text-slate-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
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
                        Travel in Ultimate Comfort
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Get your ride fixed with our meticulously maintained fleet. Make a reservation for your next journey today.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/#home-booking">
                            <button className="bg-white text-[#487307] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition shadow-xl">
                                Book Now
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
