import { CheckCircle2, Shield, Crown, Users, Clock, Sparkles, Award } from "lucide-react";
import { motion } from "framer-motion";

const WHY_QUICKO_FEATURES = [
    {
        icon: Award,
        title: "Executive Chauffeur Standards",
        description: "Professionally trained drivers who understand VIP protocol and hospitality excellence.",
    },
    {
        icon: Crown,
        title: "Luxury Fleet & Immaculate Interiors",
        description: "Premium vehicles maintained to the highest standards with pristine interiors.",
    },
    {
        icon: Shield,
        title: "Absolute Privacy & Discretion",
        description: "Your confidentiality is paramount. We ensure complete privacy on every journey.",
    },
    {
        icon: Users,
        title: "Concierge Coordination",
        description: "Dedicated support team managing every detail of your travel experience.",
    },
    {
        icon: Clock,
        title: "24/7 Customer Support",
        description: "Round-the-clock assistance whenever you need us, wherever you are.",
    },
    {
        icon: CheckCircle2,
        title: "Trusted by Business Travellers",
        description: "The preferred choice for executives and professionals worldwide.",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export const WhyQuickoSection = () => {
    return (
        <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#f1f5ff] to-white">
            {/* Background gradients */}
            <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-gold/15 blur-[140px]" />
            <div className="absolute -left-16 bottom-20 h-72 w-72 rounded-full bg-[#487307]/10 blur-[130px]" />

            {/* Animated SVG */}
            <motion.svg
                className="pointer-events-none absolute right-10 bottom-10 h-44 w-44 text-[#b3c4ff]/20"
                viewBox="0 0 200 200"
                aria-hidden
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            >
                <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    strokeDasharray="6 6"
                />
                <circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    strokeDasharray="4 4"
                />
            </motion.svg>

            <div className="section-container relative">
                {/* Header */}
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
                            Why Quicko
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark max-w-4xl mx-auto leading-tight">
                        More Than Just Transportation—
                        <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                            {" "}Style in Motion
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
                        Discover what sets Quicko apart as the premier choice for luxury chauffeur services.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                    {WHY_QUICKO_FEATURES.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={item}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="group relative overflow-hidden rounded-3xl bg-white/90 border border-white/60 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_90px_rgba(72,115,7,0.18)] transition-all duration-500"
                            >
                                {/* Gradient glow on hover */}
                                <div className="absolute inset-x-0 -top-20 h-40 rounded-full bg-gradient-to-b from-[#487307]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Checkmark badge */}
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                    <div className="rounded-full bg-[#487307] p-2 shadow-lg shadow-[#487307]/30">
                                        <CheckCircle2 className="h-4 w-4 text-white" />
                                    </div>
                                </div>

                                <div className="relative">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-4 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#487307]/30">
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

                                    {/* Decorative line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#487307]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-[#487307]/20 via-gold/20 to-[#487307]/20 blur-3xl" />
                    <div className="relative rounded-3xl border-2 border-[#487307]/30 bg-gradient-to-br from-white via-[#f0f9eb] to-white p-10 shadow-[0_30px_90px_rgba(72,115,7,0.15)] overflow-hidden">
                        {/* Decorative corner elements */}
                        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#487307]/10 to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-gold/10 to-transparent rounded-full blur-3xl" />

                        <div className="relative text-center max-w-3xl mx-auto space-y-6">
                            {/* Icon divider */}
                            <div className="inline-flex items-center gap-3 mb-4">
                                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#487307]/50" />
                                <div className="rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-3 shadow-lg">
                                    <Sparkles className="h-6 w-6 text-white" />
                                </div>
                                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#487307]/50" />
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-dark">
                                Experience the{" "}
                                <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                                    Quicko Difference
                                </span>
                            </h3>

                            <p className="text-base sm:text-lg font-inter text-gray-600">
                                Join thousands of satisfied clients who trust Quicko for their luxury transportation needs. Every journey is an opportunity to experience excellence.
                            </p>

                            {/* Trust badges */}
                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <div className="inline-flex items-center gap-2 rounded-full border border-[#487307]/30 bg-white px-6 py-3 text-sm font-semibold text-dark shadow-sm hover:shadow-md transition-shadow">
                                    <CheckCircle2 className="h-4 w-4 text-[#487307]" />
                                    Premium Service
                                </div>
                                <div className="inline-flex items-center gap-2 rounded-full border border-[#487307]/30 bg-white px-6 py-3 text-sm font-semibold text-dark shadow-sm hover:shadow-md transition-shadow">
                                    <Shield className="h-4 w-4 text-[#487307]" />
                                    Fully Insured
                                </div>
                                <div className="inline-flex items-center gap-2 rounded-full border border-[#487307]/30 bg-white px-6 py-3 text-sm font-semibold text-dark shadow-sm hover:shadow-md transition-shadow">
                                    <Award className="h-4 w-4 text-[#487307]" />
                                    Award Winning
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
