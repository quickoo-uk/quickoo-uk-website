import { Car, Route, Armchair, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";

const PERSONALIZATION_FEATURES = [
    {
        icon: Car,
        title: "A Preferred Car",
        description: "Get your preferred vehicle for your ride so that you can have the best style and comfort.",
        gradient: "from-sky-500/90 via-blue-500/80 to-sky-500/70",
    },
    {
        icon: Route,
        title: "Your Chosen Route",
        description: "You tell us the routes, and our chauffeur will adapt to those routes because we prioritise your choice first.",
        gradient: "from-emerald-500/90 via-green-500/80 to-emerald-500/70",
    },
    {
        icon: Armchair,
        title: "Ultimate Comfort Level",
        description: "Get the best temperature, music, refreshments, and ambience. All is customised to your needs.",
        gradient: "from-amber-500/90 via-orange-500/80 to-amber-500/70",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
};

export const PersonalizationSection = () => {
    return (
        <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaff] to-white">
            {/* Background gradients */}
            <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-[#a5c9ff]/20 blur-[140px]" />
            <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-gold/15 blur-[120px]" />

            {/* Animated SVG */}
            <motion.svg
                className="pointer-events-none absolute left-10 bottom-10 h-36 w-36 text-[#b3c4ff]/30"
                viewBox="0 0 160 160"
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="5 5"
                />
                <circle
                    cx="80"
                    cy="80"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="3 7"
                />
            </motion.svg>

            <div className="section-container relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <SectionChip title="What’s Included in the Service?" icon={Star} />
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark leading-tight">
                                The Trip You Book is{" "}
                                <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                                    Customised As Per Your Preferences
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg font-inter text-gray-600">
                                Our chauffeurs are more than service providers; rather, they must be known as service curators. They make sure that your journey is tailored to your special needs.
                            </p>
                        </div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {PERSONALIZATION_FEATURES.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={feature.title}
                                        variants={item}
                                        whileHover={{ x: 8 }}
                                        transition={{ duration: 0.3 }}
                                        className="group flex gap-6 items-start p-6 rounded-2xl bg-white/90 border border-white/60 shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(72,115,7,0.12)] transition-all duration-500"
                                    >
                                        {/* Icon */}
                                        <div className={`shrink-0 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-montserrat font-bold text-dark mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm font-inter leading-relaxed text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Quote */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="relative rounded-3xl border border-[#487307]/20 bg-gradient-to-br from-white via-[#f0f9eb] to-white p-8 shadow-lg shadow-[#487307]/10"
                        >
                            <div className="absolute -top-4 -left-4 text-6xl text-[#487307]/20 font-serif">"</div>
                            <p className="text-lg font-montserrat font-semibold text-dark italic relative z-10">
                                Because you deserve more than just transportation—you deserve style in motion.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#487307]/20 via-[#a5c9ff]/10 to-transparent blur-3xl" />
                        <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_90px_rgba(15,23,42,0.15)] border border-white/60">
                            <img
                                src="/home/personalized-luxury-chauffeur-2.png"
                                alt="Customised preference chauffeur service"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                loading="lazy"
                                onError={(e) => {
                                    // Fallback to a placeholder if image doesn't exist
                                    e.currentTarget.src = "/home/why-quickoo-chauffeur-service.png";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute -bottom-6 -left-6 rounded-2xl border border-white/60 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.15)] backdrop-blur"
                        >
                            <div className="flex items-center gap-4">
                                <div className="rounded-xl bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-3">
                                    <Sparkles className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">
                                        Tailored
                                    </p>
                                    <p className="text-lg font-montserrat font-bold text-dark">
                                        Just For You
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
