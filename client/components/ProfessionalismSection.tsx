import { Shield, Zap, Award, Clock, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const PROFESSIONAL_FEATURES = [
    {
        icon: Users,
        title: "Highly Trained Professional Chauffeurs",
        description: "Every driver undergoes rigorous training in hospitality, safety, and VIP protocol.",
    },
    {
        icon: Zap,
        title: "Real-Time Route Intelligence",
        description: "AI-powered navigation adapts to traffic, weather, and your schedule in real-time.",
    },
    {
        icon: Award,
        title: "Premium Vehicle Quality",
        description: "Immaculate interiors, latest models, and luxury amenities in every ride.",
    },
    {
        icon: Clock,
        title: "Zero-Delay Arrival Commitment",
        description: "We guarantee punctuality with advanced scheduling and flight tracking.",
    },
    {
        icon: Shield,
        title: "Corporate-Grade Hospitality",
        description: "Discretion, professionalism, and white-glove service at every touchpoint.",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export const ProfessionalismSection = () => {
    return (
        <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#fff6ed] to-white">
            {/* Background gradients */}
            <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#487307]/10 blur-[140px]" />
            <div className="absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-gold/15 blur-[120px]" />

            {/* Animated SVG */}
            <motion.svg
                className="pointer-events-none absolute right-10 bottom-20 h-40 w-40 text-[#487307]/20"
                viewBox="0 0 160 160"
                aria-hidden
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="6 6"
                />
                <circle
                    cx="80"
                    cy="80"
                    r="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="3 3"
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
                        <Sparkles className="h-4 w-4 text-[#487307]" />
                        <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                            Driven by Professionalism
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
                        Your Journey is Powered by{" "}
                        <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                            Excellence Without Compromise
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
                        From door to destination, we deliver a seamless experience backed by cutting-edge technology and unmatched expertise.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {PROFESSIONAL_FEATURES.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={item}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/90 border border-white/60 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_90px_rgba(72,115,7,0.15)] transition-all duration-500"
                            >
                                {/* Gradient accent on hover */}
                                <div className="absolute inset-x-0 -top-20 h-40 rounded-full bg-gradient-to-b from-[#487307]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon */}
                                <div className="relative mb-6">
                                    <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-4 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-montserrat font-bold text-dark mb-3 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-sm font-inter leading-relaxed text-gray-600">
                                    {feature.description}
                                </p>

                                {/* Decorative element */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#487307]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 rounded-full border border-[#487307]/30 bg-gradient-to-r from-white via-[#f0f9eb] to-white px-8 py-4 shadow-lg shadow-[#487307]/10">
                        <Sparkles className="h-5 w-5 text-[#487307]" />
                        <p className="text-lg font-montserrat font-semibold bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                            Excellence Without Compromise
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
