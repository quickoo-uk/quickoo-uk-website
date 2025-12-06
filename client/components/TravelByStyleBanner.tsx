import { Sparkles, ArrowRight, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const TravelByStyleBanner = () => {
    return (
        <section className="section-spacing relative overflow-hidden bg-gradient-to-br from-white via-[#fff6ed] to-[#fdfaff]">
            {/* Background decorative elements */}
            <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#487307]/10 blur-[150px]" />
            <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-[130px]" />

            {/* Animated SVG decorations */}
            <motion.svg
                className="pointer-events-none absolute right-10 top-10 h-40 w-40 text-[#487307]/10"
                viewBox="0 0 160 160"
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 6" />
                <circle cx="80" cy="80" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            </motion.svg>

            <div className="section-container relative">
                {/* Modern Row Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm shadow-[#c9d6ff]/40"
                        >
                            <Star className="h-4 w-4 text-[#487307]" />
                            <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                                Redefining Modern Travel
                            </span>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-dark leading-tight"
                        >
                            Where Luxury, Comfort, and{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                                    Professional Chauffeur Service
                                </span>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#487307]/50 to-transparent origin-left"
                                />
                            </span>
                            {" "}Come Together
                        </motion.h2>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-base sm:text-lg font-inter text-gray-600 leading-relaxed"
                        >
                            At Quicko Chauffeur Services, we elevate every journey into a refined experience—crafted with precision, reliability, and exceptional personal service.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex flex-wrap items-center gap-4 pt-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] px-8 py-4 font-semibold text-white shadow-[0_20px_60px_rgba(72,115,7,0.3)] transition-all hover:shadow-[0_25px_70px_rgba(72,115,7,0.4)]"
                            >
                                Book Your Journey
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-3 rounded-full border-2 border-[#487307]/30 bg-white/80 px-8 py-4 font-semibold text-dark backdrop-blur-md transition-all hover:bg-white hover:border-[#487307]/50"
                            >
                                Explore Fleet
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-8 bg-gradient-to-r from-[#487307]/20 via-gold/20 to-[#487307]/20 blur-3xl" />

                        {/* Main Card */}
                        <div className="relative rounded-3xl border-2 border-[#487307]/20 bg-gradient-to-br from-white via-[#f0f9eb] to-white p-10 shadow-[0_30px_90px_rgba(72,115,7,0.15)] overflow-hidden">
                            {/* Decorative corner elements */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#487307]/10 to-transparent rounded-full blur-2xl" />
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gold/10 to-transparent rounded-full blur-2xl" />

                            <div className="relative space-y-8">
                                {/* Icon divider */}
                                <div className="flex items-center justify-center gap-3">
                                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#487307]/50" />
                                    <div className="rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-3 shadow-lg">
                                        <Sparkles className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#487307]/50" />
                                </div>

                                {/* Tagline */}
                                <div className="text-center space-y-4">
                                    <p className="text-sm sm:text-base text-gray-600 font-inter">
                                        You don't just travel with us—
                                    </p>
                                    <div className="relative inline-block">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6, duration: 0.6 }}
                                            className="absolute -inset-6 bg-gradient-to-r from-[#487307]/10 via-[#487307]/20 to-[#487307]/10 blur-3xl"
                                        />
                                        <h3 className="relative text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                                            You Travel by Style
                                        </h3>
                                    </div>
                                </div>

                                {/* Feature highlights */}
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7, duration: 0.6 }}
                                        className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/80 border border-[#487307]/10 shadow-sm"
                                    >
                                        <div className="rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-2.5 mb-3">
                                            <Zap className="h-5 w-5 text-white" />
                                        </div>
                                        <p className="text-sm font-semibold text-dark">Premium</p>
                                        <p className="text-xs text-gray-600">Comfort</p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8, duration: 0.6 }}
                                        className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/80 border border-[#487307]/10 shadow-sm"
                                    >
                                        <div className="rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-2.5 mb-3">
                                            <Star className="h-5 w-5 text-white" />
                                        </div>
                                        <p className="text-sm font-semibold text-dark">Verified</p>
                                        <p className="text-xs text-gray-600">Chauffeurs</p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.9, duration: 0.6 }}
                                        className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/80 border border-[#487307]/10 shadow-sm"
                                    >
                                        <div className="rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-2.5 mb-3">
                                            <Sparkles className="h-5 w-5 text-white" />
                                        </div>
                                        <p className="text-sm font-semibold text-dark">Seamless</p>
                                        <p className="text-xs text-gray-600">Experience</p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1, duration: 0.6 }}
                                        className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/80 border border-[#487307]/10 shadow-sm"
                                    >
                                        <div className="rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-2.5 mb-3">
                                            <ArrowRight className="h-5 w-5 text-white" />
                                        </div>
                                        <p className="text-sm font-semibold text-dark">24/7</p>
                                        <p className="text-xs text-gray-600">Support</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
