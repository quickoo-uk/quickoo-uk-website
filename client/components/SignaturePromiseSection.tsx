import { Shield, CheckCircle2, Clock, Sparkles, Star, Award } from "lucide-react";
import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";

const PROMISE_FEATURES = [
    {
        icon: Award,
        title: "Excellence in Every Journey",
        description: "We have an ongoing commitment to excellence through the highest possible standard of luxury, professionalism and customer service.",
    },
    {
        icon: Shield,
        title: "Safety Without Compromise",
        description: "The safety & wellbeing of our clients is our top priority. All of our vehicles are regularly maintained by experienced drivers who work with us.",
    },
    {
        icon: Sparkles,
        title: "Service Tailored Around You",
        description: "Each journey will be personalised for you based on your schedule, destination & expectations of travel.",
    },
    {
        icon: CheckCircle2,
        title: "A Chauffeur Experience You Can Count On",
        description: "We have consistently proven through our history and have had many satisfied customers that we will keep our promises of dependability, comfort and providing a premium chauffeur experience.",
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
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f1f5ff] to-white pb-12 pt-8 sm:pb-20 sm:pt-10">
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
                    <SectionChip title="Quickoo Signature Promise" icon={Award} />
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark leading-tight">
                        Select the Class You Deserve{" "}
                        <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                            with Quickoo
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
                        We believe in providing the excellence that you deserve because you are choosing the class-apart chauffeur service. Our curation is evident in every aspect of the service we offer our customers.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto"
                >
                    {PROMISE_FEATURES.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
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
