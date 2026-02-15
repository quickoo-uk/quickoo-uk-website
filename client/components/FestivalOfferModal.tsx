import React, { useState, useEffect, useCallback } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Sparkles, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export const FestivalOfferModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentFestivalIndex, setCurrentFestivalIndex] = useState(0);

    const festivals = [
        {
            name: "Christmas Luxury Ride",
            badge: "Holiday Exclusive",
            headline: "Christmas Magic",
            highlight: "in Every Mile",
            description: "Experience the magic of the season with our elite fleet. Sophisticated comfort for your holiday gatherings.",
            mainImg: "https://images.unsplash.com/photo-1512470876302-972fad2aa9dd?auto=format&fit=crop&q=80&w=1200",
            color: "from-white via-green-100 to-green-50",
            glow: "rgba(72, 115, 7, 0.4)"
        }
    ];

    const currentFestival = festivals[currentFestivalIndex];

    const fireConfetti = useCallback(() => {
        const count = 250;
        const defaults = {
            origin: { y: 0.6 },
            zIndex: 10000,
            colors: ['#487307', '#1a2e03', '#FFFFFF', '#FFD700']
        };

        function fire(particleRatio: number, opts: any) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio),
            });
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
    }, []);

    useEffect(() => {
        const hasShown = sessionStorage.getItem("festival-modal-shown");
        if (!hasShown) {
            const timer = setTimeout(() => {
                setIsOpen(false);
                sessionStorage.setItem("festival-modal-shown", "true");
            }, 2500);
            return () => clearTimeout(timer);
        } else {
            setIsOpen(false);
        }
    }, []);

    // Fire confetti when isOpen becomes true
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(fireConfetti, 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen, fireConfetti]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-[95%] sm:max-w-[650px] p-0 overflow-hidden border-none bg-transparent shadow-none">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative w-full overflow-hidden rounded-[2.5rem] bg-[#0A0520] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]"
                        >
                            {/* Background Visual Layer */}
                            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e03]/60 via-[#0A0520] to-[#0A0520] z-10" />
                                <div
                                    className="absolute -top-[10%] -right-[10%] w-[80%] h-[80%] rounded-full blur-[100px] pointer-events-none opacity-40 transition-colors duration-1000"
                                    style={{ backgroundColor: currentFestival.glow }}
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.35 }}
                                    transition={{ duration: 1 }}
                                    className="absolute inset-0 z-[5]"
                                >
                                    <img
                                        src={currentFestival.mainImg}
                                        className="w-full h-full object-cover"
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0520]/40 to-[#0A0520]" />
                                </motion.div>
                                <motion.div
                                    animate={{ x: ['-200%', '200%'] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 z-[15] pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12"
                                />
                            </div>

                            {/* Content Layer */}
                            <div className="relative z-20 flex flex-col items-center px-8 sm:px-16 pt-14 pb-12 text-center">
                                {/* Badge */}
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#487307]/20 backdrop-blur-xl px-5 py-2 ring-1 ring-white/10 shadow-lg">
                                        <div className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                                        </div>
                                        <span className="text-[10px] tracking-[0.4em] uppercase text-white font-black">
                                            {currentFestival.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Headline & Subtext */}
                                <div className="space-y-6 w-full mb-10">
                                    <h2 className="text-4xl sm:text-6xl font-montserrat font-black text-white leading-[1.05] tracking-tighter">
                                        {currentFestival.headline}
                                        <br />
                                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentFestival.color}`}>
                                            {currentFestival.highlight}
                                        </span>
                                    </h2>
                                    <p className="text-lg sm:text-xl font-inter text-white/80 font-light leading-relaxed tracking-wide max-w-2xl mx-auto">
                                        {currentFestival.description}
                                    </p>
                                </div>

                                {/* Offer Box */}
                                <motion.div
                                    whileHover={{ scale: 1.01, y: -2 }}
                                    className="group relative w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 sm:p-10 mb-10 shadow-2xl backdrop-blur-md transition-all duration-500"
                                >
                                    <div className="absolute inset-0 bg-[#487307]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                                        <div className="flex items-center gap-6 text-left w-full sm:w-auto overflow-hidden">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#487307] to-[#1a2e03] flex items-center justify-center shadow-2xl ring-1 ring-white/10 flex-shrink-0">
                                                <Gift className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="overflow-hidden">
                                                <p className="text-3xl sm:text-4xl font-montserrat font-black text-white leading-none mb-2 tracking-tighter truncate">Up to 20% Off</p>
                                                <p className="text-sm font-bold text-green-400/70 uppercase tracking-[0.2em] truncate">{currentFestival.name}</p>
                                            </div>
                                        </div>
                                        <Sparkles className="w-8 h-8 text-white/10 animate-pulse hidden sm:block" />
                                    </div>
                                </motion.div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-5 w-full">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setIsOpen(false)}
                                        className="flex-[2] px-10 py-6 rounded-2xl bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#1a2e03] text-white font-montserrat font-black text-xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 border-none ring-1 ring-white/20"
                                    >
                                        Reserve Now
                                        <ArrowRight className="w-6 h-6" />
                                    </motion.button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="flex-1 px-8 py-6 text-white/50 hover:text-white font-montserrat font-bold text-sm tracking-[0.3em] transition-all rounded-2xl border border-white/10 bg-white/5"
                                    >
                                        DISMISS
                                    </button>
                                </div>

                                {/* Branding */}
                                <div className="mt-12 flex items-center gap-6 w-full justify-center opacity-30">
                                    <div className="h-[0.5px] flex-grow bg-gradient-to-r from-transparent to-white/50" />
                                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.5em] font-black text-white whitespace-nowrap">
                                        Quickoo &bull; Elite Excellence
                                    </span>
                                    <div className="h-[0.5px] flex-grow bg-gradient-to-l from-transparent to-white/50" />
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#487307] transition-all z-[100]"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </DialogContent>
        </Dialog>
    );
};
