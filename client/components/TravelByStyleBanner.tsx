import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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
                <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 p-10 sm:p-16 text-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]">

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
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50/80 backdrop-blur-sm">
                                <Sparkles className="w-3.5 h-3.5 text-[#487307]" />
                                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-600">
                                    The Quickoo Standard
                                </span>
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-slate-900 leading-[1.2]">
                                Where <span className="text-[#487307]">luxury, comfort,</span> and <span className="text-[#487307]">professional chauffeur service</span> come together to redefine how modern travelers move.
                            </h2>

                            <p className="text-base sm:text-lg text-slate-600 font-inter max-w-2xl mx-auto leading-relaxed">
                                At Quicko Chauffeur Services, we elevate every journey into a refined experience—crafted with precision, reliability, and exceptional personal service.
                            </p>
                        </div>

                        {/* Signature Quote Area */}
                        <div className="pt-6">
                            <div className="relative inline-block px-12 py-8 bg-slate-50/50 rounded-2xl border border-slate-100">
                                {/* Decorative quotes */}
                                <span className="absolute top-4 left-4 text-4xl text-[#487307]/10 font-serif leading-none">"</span>
                                <span className="absolute bottom-2 right-4 text-4xl text-[#487307]/10 font-serif leading-none">"</span>

                                <p className="text-xl sm:text-3xl font-serif italic text-slate-800">
                                    "You don’t just travel with us— <br className="sm:hidden" />
                                    <span className="not-italic font-montserrat font-bold text-[#487307]">you travel in style.</span>"
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
