import { Sparkles, Crown, Lock, Clock } from "lucide-react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export const LuxuryExperienceSection = () => {
    return (
        <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaff] to-[#fff6ed]">
            {/* Background gradients */}
            <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-[#487307]/10 blur-[150px]" />
            <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-gold/15 blur-[130px]" />

            {/* Animated SVG */}
            <motion.svg
                className="pointer-events-none absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 text-[#487307]/10"
                viewBox="0 0 200 200"
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
                <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    strokeDasharray="8 8"
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
                <circle
                    cx="100"
                    cy="100"
                    r="30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
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
                        <Crown className="h-4 w-4 text-[#487307]" />
                        <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                            Luxury Chauffeur Experience
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark max-w-4xl mx-auto leading-tight">
                        Designed for Individuals Who Value{" "}
                        <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                            Privacy, Punctuality, and Sophistication
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
                        Quicko provides premium chauffeur-driven travel for airport transfers, business trips, corporate visitors, VIP movements, and high-level executives.
                    </p>
                </motion.div>

                {/* Three Statement Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                    <motion.div
                        variants={item}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#f0f9eb] to-white border border-white/60 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_80px_rgba(72,115,7,0.18)] transition-all duration-500"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#487307]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative">
                            {/* Icon */}
                            <div className="mb-5">
                                <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-3.5 shadow-lg">
                                    <Sparkles className="h-7 w-7 text-white" />
                                </div>
                            </div>

                            {/* Text */}
                            <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-dark mb-3 leading-tight">
                                Every Detail is Planned
                            </h3>
                            <div className="h-1 w-14 bg-gradient-to-r from-[#487307] to-transparent rounded-full mb-3" />
                            <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                From route optimization to vehicle preparation, every aspect of your journey is meticulously organized.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={item}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#f0f9eb] to-white border border-white/60 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_80px_rgba(72,115,7,0.18)] transition-all duration-500"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#487307]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative">
                            {/* Icon */}
                            <div className="mb-5">
                                <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-3.5 shadow-lg">
                                    <Crown className="h-7 w-7 text-white" />
                                </div>
                            </div>

                            {/* Text */}
                            <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-dark mb-3 leading-tight">
                                Every Moment is Refined
                            </h3>
                            <div className="h-1 w-14 bg-gradient-to-r from-[#487307] to-transparent rounded-full mb-3" />
                            <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                Experience luxury at every touchpoint with premium amenities and white-glove service.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={item}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#f0f9eb] to-white border border-white/60 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_80px_rgba(72,115,7,0.18)] transition-all duration-500"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#487307]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative">
                            {/* Icon */}
                            <div className="mb-5">
                                <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-3.5 shadow-lg">
                                    <Lock className="h-7 w-7 text-white" />
                                </div>
                            </div>

                            {/* Text */}
                            <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-dark mb-3 leading-tight">
                                Every Ride Speaks Elegance
                            </h3>
                            <div className="h-1 w-14 bg-gradient-to-r from-[#487307] to-transparent rounded-full mb-3" />
                            <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                Travel in style with our curated fleet of luxury vehicles and professional chauffeurs.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-[#487307]/10 via-gold/10 to-[#487307]/10 blur-3xl" />
                    <div className="relative rounded-3xl border-2 border-[#487307]/20 bg-gradient-to-br from-white via-[#f0f9eb] to-white p-10 shadow-[0_30px_90px_rgba(72,115,7,0.15)] text-center overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#487307]/10 to-transparent rounded-full blur-2xl" />
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gold/10 to-transparent rounded-full blur-2xl" />

                        <div className="relative max-w-2xl mx-auto space-y-6">
                            <div className="inline-flex items-center gap-3 mb-4">
                                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#487307]/50" />
                                <Sparkles className="h-6 w-6 text-[#487307]" />
                                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#487307]/50" />
                            </div>

                            <p className="text-xl sm:text-2xl font-montserrat font-semibold text-dark italic">
                                "Because you deserve more than just transportation—
                                <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                                    {" "}you deserve style in motion.
                                </span>"
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
