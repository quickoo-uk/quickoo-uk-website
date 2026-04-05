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

    const festiveData = {
        badge: "Easter Sunday",
        headline: "Happy Easter",
        highlight: "from Quickoo",
        description: "Wishing you and your family a wonderful Easter weekend. May your spring journeys be as bright and peaceful as the season.",
        mainImg: "https://images.unsplash.com/photo-1522336572242-999335f639dd?auto=format&fit=crop&q=80&w=1200",
        glow: "rgba(143, 224, 15, 0.3)"
    };

    const fireConfetti = useCallback(() => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999, colors: ['#487307', '#FFD700', '#FFFFFF', '#8fe00f'] };

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // Since particles fall down, start a bit higher than random
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    }, []);

    useEffect(() => {
        // --- Selection Logic ---
        const MODAL_KEY = "easter_wish_2026_shown";

        // Check if already shown in this session
        const alreadyShown = sessionStorage.getItem(MODAL_KEY);
        
        if (!alreadyShown) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem(MODAL_KEY, "true");
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            const confettiTimer = setTimeout(fireConfetti, 500);

            // Auto close after 10 seconds
            const autoCloseTimer = setTimeout(() => {
                setIsOpen(false);
            }, 8000);

            return () => {
                clearTimeout(confettiTimer);
                clearTimeout(autoCloseTimer);
            };
        }
    }, [isOpen, fireConfetti]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-[95%] sm:max-w-[600px] p-0 overflow-hidden border-none bg-transparent shadow-none">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-[#0d1502] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]"
                        >
                            {/* Background Visual Layer */}
                            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1502]/95 to-[#0d1502] z-10" />
                                <div
                                    className="absolute -top-[20%] -right-[10%] w-[100%] h-[100%] rounded-full blur-[100px] pointer-events-none opacity-30"
                                    style={{ backgroundColor: festiveData.glow }}
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.2 }}
                                    className="absolute inset-0 z-[5]"
                                >
                                    <img
                                        src={festiveData.mainImg}
                                        className="w-full h-full object-cover"
                                        alt="Easter Spring"
                                    />
                                </motion.div>
                            </div>

                            {/* Content Layer */}
                            <div className="relative z-20 flex flex-col items-center px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-14 sm:pb-16 text-center">
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-8 sm:mb-10"
                                >
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#487307]/30 backdrop-blur-xl px-5 py-2 ring-1 ring-white/10 shadow-lg" title="Easter 2026 Greeting">
                                        <Sparkles className="w-4 h-4 text-[#8fe00f]" />
                                        <span className="text-[10px] tracking-[0.4em] uppercase text-white font-black">
                                            {festiveData.badge}
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Headline & Subtext */}
                                <div className="space-y-6 w-full">
                                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-black text-white leading-tight sm:leading-[1.1] tracking-tight">
                                        {festiveData.headline}
                                        <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8fe00f] via-white to-[#8fe00f]">
                                            {festiveData.highlight}
                                        </span>
                                    </h2>
                                    <p className="text-lg sm:text-xl lg:text-2xl font-inter text-white/70 font-light leading-relaxed max-w-xl mx-auto pt-4">
                                        {festiveData.description}
                                    </p>
                                </div>

                                {/* Branding Overlay */}
                                <div className="mt-12 sm:mt-20 flex flex-col items-center gap-6 w-full">
                                    <div className="flex items-center gap-6 w-full opacity-20">
                                        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white" />
                                        <div className="w-2 h-2 rounded-full bg-white rotate-45" />
                                        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-white" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[14px] sm:text-xl uppercase tracking-[0.5em] font-black text-[#8fe00f] drop-shadow-[0_0_10px_rgba(143,224,15,0.5)]">
                                            QUICKOO
                                        </p>
                                        <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.8em] font-bold text-white/40">
                                            Premium Excellence
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#487307] transition-all z-[100]"
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
