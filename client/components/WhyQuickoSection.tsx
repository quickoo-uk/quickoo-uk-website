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
        <section className="relative overflow-hidden bg-white pb-8 pt-6 sm:pb-10 sm:pt-8">
            {/* Minimal Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

            <div className="section-container relative">
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
