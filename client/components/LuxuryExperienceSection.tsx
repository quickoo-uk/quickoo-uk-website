import { Sparkles, Crown, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export const LuxuryExperienceSection = () => {
    return (
        <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#fcfefb] to-white">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#487307]/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-gold/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="section-container relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    <SectionChip title="Luxury Chauffeur Experience" icon={Crown} />

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark max-w-4xl mx-auto leading-tight">
                        Experience{" "}
                        <span className="text-[#487307]">
                            Privacy, Punctuality, and Sophistication
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
                        Get the service which is professionally driven for airport transfers, business trips, and other occasions.
                    </p>
                </motion.div>

                {/* Three Statement Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    <motion.div
                        variants={item}
                        className="group relative bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(72,115,7,0.1)] transition-all duration-300 border border-slate-100"
                    >
                        <div className="mb-6 inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#f4f7f0] text-[#487307] group-hover:scale-110 transition-transform duration-300">
                            <Sparkles className="h-6 w-6" />
                        </div>

                        <h3 className="text-xl font-montserrat font-bold text-dark mb-4">
                            The Planned Service
                        </h3>

                        <p className="text-sm font-inter text-gray-600 leading-relaxed">
                            The chauffeur service basically organises every part of the journey from booking to your arrival at the destination.
                        </p>

                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#487307] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="group relative bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(72,115,7,0.1)] transition-all duration-300 border border-slate-100"
                    >
                        <div className="mb-6 inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#f4f7f0] text-[#487307] group-hover:scale-110 transition-transform duration-300">
                            <Crown className="h-6 w-6" />
                        </div>

                        <h3 className="text-xl font-montserrat font-bold text-dark mb-4">
                            Moment You Can Create
                        </h3>

                        <p className="text-sm font-inter text-gray-600 leading-relaxed">
                            You can create an amazing moment with premium amenities because our chauffeurs provide the best hospitality service.
                        </p>

                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#487307] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="group relative bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(72,115,7,0.1)] transition-all duration-300 border border-slate-100"
                    >
                        <div className="mb-6 inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#f4f7f0] text-[#487307] group-hover:scale-110 transition-transform duration-300">
                            <Lock className="h-6 w-6" />
                        </div>

                        <h3 className="text-xl font-montserrat font-bold text-dark mb-4">
                            Elegant Experience
                        </h3>

                        <p className="text-sm font-inter text-gray-600 leading-relaxed">
                            Get your travel experience in absolute style with our special luxurious fleets.
                        </p>

                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#487307] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.div>
                </motion.div>

                {/* Bottom Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative text-center max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#487307]/30" />
                        <Sparkles className="h-5 w-5 text-[#487307]" />
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#487307]/30" />
                    </div>

                    <p className="text-2xl md:text-3xl font-montserrat font-medium text-dark leading-relaxed">
                        "More than just a ride, our{" "}
                        <span className="relative inline-block font-bold text-[#487307]">
                            luxury chauffeur service
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#487307] origin-left rounded-full"
                            />
                        </span>
                        {" "}delivers stylish, comfortable, and reliable travel across London and the UK."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
