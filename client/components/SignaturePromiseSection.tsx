import { Shield, CheckCircle2, Clock, Sparkles, Star, Award } from "lucide-react";
import { motion } from "framer-motion";

const PROMISE_FEATURES = [
    {
        icon: Star,
        title: "Premium Comfort",
        description: "Luxury vehicles with immaculate interiors and signature amenities.",
    },
    {
        icon: CheckCircle2,
        title: "Verified Chauffeurs",
        description: "Background-checked, hospitality-trained professionals.",
    },
    {
        icon: Clock,
        title: "Airport Assistance",
        description: "Flight tracking, meet & greet, and luggage handling.",
    },
    {
        icon: Sparkles,
        title: "Sanitized Vehicles",
        description: "Hospital-grade cleaning protocols after every journey.",
    },
    {
        icon: Shield,
        title: "High Security",
        description: "Real-time monitoring and secure payment systems.",
    },
    {
        icon: Award,
        title: "Seamless Experience",
        description: "From booking to arrival, every detail is perfected.",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
};

export const SignaturePromiseSection = () => {
    return (
        <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#f1f5ff] to-white">
            {/* Background gradients */}
            <div className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-[#487307]/10 blur-[140px]" />
            <div className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-gold/15 blur-[120px]" />

            {/* Animated SVG */}
            <motion.svg
                className="pointer-events-none absolute right-10 top-20 h-40 w-40 text-gold/30"
                viewBox="0 0 160 160"
                aria-hidden
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
                <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="4 8"
                />
                <circle
                    cx="80"
                    cy="80"
                    r="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="2 4"
                />
                <circle
                    cx="80"
                    cy="80"
                    r="30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="1 3"
                />
            </motion.svg>

            <div className="section-container relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm shadow-[#c9d6ff]/40">
                        <Award className="h-4 w-4 text-[#487307]" />
                        <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                            Quicko Signature Promise
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
                        When You Choose Quicko,{" "}
                        <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                            You Choose Class
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
                        Our commitment to excellence is reflected in every aspect of your journey. Experience the Quicko difference.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                    {PROMISE_FEATURES.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={item}
                                whileHover={{ y: -8, scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                className="group relative flex flex-col items-center text-center overflow-hidden rounded-3xl bg-white/90 border border-white/60 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_90px_rgba(72,115,7,0.15)] transition-all duration-500"
                            >
                                {/* Gradient glow on hover */}
                                <div className="absolute inset-x-0 -top-20 h-40 rounded-full bg-gradient-to-b from-[#487307]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon */}
                                <div className="relative mb-6">
                                    <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-4 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#487307]/30">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-montserrat font-bold text-dark mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-sm font-inter leading-relaxed text-gray-600">
                                    {feature.description}
                                </p>

                                {/* Checkmark badge */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="rounded-full bg-[#487307] p-1.5">
                                        <CheckCircle2 className="h-4 w-4 text-white" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>


            </div>
        </section>
    );
};
