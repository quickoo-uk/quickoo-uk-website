import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";

export const TravelByStyleBanner = () => {
    return (
        <section className="relative overflow-hidden py-24 bg-white">
            {/* Light Theme Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.4] mix-blend-multiply" />

            {/* Subtle Brand Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#487307]/5 rounded-full blur-[100px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2" />

            <div className="section-container relative z-10">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 p-6 sm:p-10 md:p-16 text-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]">

                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#487307]/20 to-transparent" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto space-y-10"
                    >
                        {/* Upper Badge */}
                        <div className="flex justify-center">
                            <SectionChip title="Book the Perfect Luxury chauffeur Travel" />
                        </div>

                        {/* Heading */}
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-slate-900 leading-[1.2]">
                                When <span className="text-[#487307]">luxury, comfort,</span> and a <span className="text-[#487307]">professional chauffeur service</span> come together under the same roof.
                            </h2>

                            <p className="text-base sm:text-lg text-slate-600 font-inter max-w-3xl mx-auto leading-relaxed">
                                You can experience the premium service at Quickoo. We believe that accuracy and dependability are our priorities. We do not believe in just offering the service. We help you travel with flair.
                            </p>
                        </div>

                        {/* Signature Quote Area */}
                        <div className="pt-6">
                            <div className="relative inline-block px-10 py-8 bg-slate-50/80 rounded-2xl border border-slate-100">
                                {/* Large Quote Marks */}
                                <div className="absolute -top-4 -left-2 text-6xl text-slate-200 font-serif leading-none" aria-hidden="true">&ldquo;</div>
                                <div className="absolute -bottom-8 -right-2 text-6xl text-slate-200 font-serif leading-none" aria-hidden="true">&rdquo;</div>

                                <p className="relative z-10 text-xl sm:text-2xl font-montserrat italic text-slate-700 max-w-3xl mx-auto">
                                    "We do not believe in providing the mere service - rather, <span className="text-[#487307] font-semibold">we help you travel in style.</span>"
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
