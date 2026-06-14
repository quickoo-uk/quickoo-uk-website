import { Shield, Zap, Award, Clock, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";

const PROFESSIONAL_FEATURES = [
    {
        icon: Users,
        title: "Highly Trained Professional Chauffeurs",
        description: "Each chauffeur gets rigorous training in terms of safety, security, VIP protocol, and manners.",
    },
    {
        icon: Zap,
        title: "Real-Time Challenges in Route",
        description: "Our chauffeurs monitor the traffic conditions in real-time. The AI-powered machine provides a real-time weather update.",
    },
    {
        icon: Award,
        title: "Premium Vehicle Quality",
        description: "Get the best and advanced interior of the vehicles and luxury features while travelling.",
    },
    {
        icon: Clock,
        title: "Arrival On-Time",
        description: "We ensure that your arrival will be perfectly on time without any further delays.",
    },
    {
        icon: Shield,
        title: "Premium Hospitality",
        description: "Get discretion and professionalism at every minute since you receive the service.",
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
                    <SectionChip title="Driven by Professionalism" />
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
                        Luxury Airport Transfers{" "}
                        <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                            Powered by Excellence
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
                        Our premium chauffeur services are here to facilitate seamless travel, no matter what time of day you are flying into London or flying out of London.
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
                                key={idx}
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


            </div>
        </section>
    );
};
