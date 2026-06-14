import { CheckCircle2, Shield, Crown, Users, Clock, Sparkles, Award } from "lucide-react";
import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";

const WHY_QUICKO_FEATURES = [
    {
        icon: Award,
        title: "Professional chauffeurs",
        description: "Our team of highly professional chauffeurs have experience in executive travel, knowledge of VIP protocol and a commitment to providing discreet service to our customers.",
    },
    {
        icon: Crown,
        title: "Luxurious Fleet and Impeccable Interiors",
        description: "We use premium Mercedes vehicles that are well maintained, clean and offer you a comfortable and refined environment for your journey.",
    },
    {
        icon: Shield,
        title: "Total Confidentiality and Discretion",
        description: "You can be assured that your privacy is our main priority. All journeys are conducted with professionalism and respect for your confidentiality.",
    },
    {
        icon: Users,
        title: "Concierge Level Coordination",
        description: "Our support staff will coordinate your travel, including schedules, airport pick-ups, waiting times and any special requests to ensure your travels are seamless.",
    },
    {
        icon: Clock,
        title: "24/7 Customer Service",
        description: "You can reach us anytime, 24/7, whether you are booking a trip, making changes to your itinerary or need immediate assistance while you are travelling.",
    },
    {
        icon: CheckCircle2,
        title: "Trusted by Business Travellers",
        description: "Executives, corporate teams and international travellers all choose us because we deliver on time, offer comfortable vehicles, and provide reliable service.",
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export const WhyQuickoSection = () => {
    return (
        <section className="section-spacing relative overflow-hidden bg-white">
            {/* Minimal Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

            <div className="section-container relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    <SectionChip title="What Sets Us Apart?" />

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark max-w-4xl mx-auto leading-tight">
                        More than Just Transportation—
                        <span className="text-[#487307]"> Experience Your Travel in Style</span>
                    </h2>

                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
                        We provide a seamless luxury chauffeur service perfect for your travel needs for airport transfers to any of your special events.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                    {WHY_QUICKO_FEATURES.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={item}
                                className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="mb-6 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-slate-50 text-[#487307] group-hover:bg-[#487307] group-hover:text-white transition-colors duration-300">
                                    <Icon className="h-7 w-7" />
                                </div>

                                <h3 className="text-xl font-montserrat font-bold text-dark mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative rounded-3xl bg-white border border-slate-200 p-10 shadow-lg shadow-slate-200/40 overflow-hidden"
                >
                    {/* Very subtle decorative background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -ml-16 -mb-16 opacity-50" />

                    <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-dark">
                                Experience the <span className="text-[#487307]">Quickoo Difference</span>
                            </h3>
                            <p className="text-base sm:text-lg font-inter text-gray-700 font-medium">
                                We are a full-service luxury chauffeur company that prides itself on providing comfort, reliability, and professionalism.
                            </p>
                            <p className="text-sm sm:text-base font-inter text-gray-600">
                                Join thousands of satisfied clients from all over the world who use Quickoo for all of their executive travel needs, airport transfers, corporate transportation, and special events. Every trip with Quickoo is designed to provide you with a smooth, stylish and dependable chauffeur experience.
                            </p>
                        </div>


                    </div>
                </motion.div>
            </div>
        </section>
    );
};
