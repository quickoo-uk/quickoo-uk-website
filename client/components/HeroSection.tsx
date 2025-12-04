import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BookingWidget } from "./BookingWidget";

const AnimatedBlob = () => (
  <motion.svg
    className="absolute top-0 right-0 w-96 h-96 opacity-20"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{
      scale: [0.8, 1.1, 0.9, 1],
      rotate: [0, 45, -10, 0],
      opacity: [0.2, 0.4, 0.3, 0.2],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  >
    <defs>
      <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <path
      d="M200 50C250 50 300 100 300 150C300 200 250 250 200 250C150 250 100 200 100 150C100 100 150 50 200 50Z"
      fill="url(#blobGradient)"
    />
  </motion.svg>
);

export const HeroSection = () => {
  const images = [
    "/home/hero-premium-travel-1.png",
    "/home/hero-premium-travel-2.jpg",
    "/home/hero-premium-travel-3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[75vh] w-full items-center pt-20 sm:pt-24 pb-8 sm:pb-12 ">
      {/* Background with enhanced overlay */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.65 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={images[index]}
              alt="Luxury Chauffeur"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Enhanced gradient overlay - lighter for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/20 to-transparent"></div>
      </div>

      {/* Animated gradient blobs - Enhanced */}
      <motion.div
        className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#487307]/30 via-[#0f1801]/10 to-transparent blur-3xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.4, 0.7],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-20 h-96 w-96 bg-gradient-to-tr from-[#487307]/20 via-[#2a4204]/10 to-transparent blur-3xl opacity-60"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.3, 0.6],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <AnimatedBlob />

      {/* Animated SVG rings */}
      <motion.svg
        className="pointer-events-none absolute -right-6 top-10 h-64 w-64 text-[#b3c4ff]/60"
        viewBox="0 0 200 200"
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 6"
        />
      </motion.svg>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="w-full space-y-5 sm:space-y-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full border-2 border-[#487307]/30 bg-white/90 px-6 py-2.5 backdrop-blur-md shadow-lg shadow-[#487307]/20 hover:shadow-[#487307]/40 transition-all"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#487307] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#487307]"></span>
              </span>
              <span className="text-xs tracking-[0.5em] uppercase text-[#2a4204] font-bold">
                Quickoo Luxury
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold leading-tight text-[#0f1801]"
            >
              Experience the Art of
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                  Luxury Travel
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#0f1801] via-[#487307] to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                ></motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-[#2a4204] font-inter leading-relaxed max-w-xl font-medium tracking-wide"
            >
              Elevate your journey with our elite chauffeur service. Meticulously curated for comfort, style, and punctuality.
            </motion.p>

            {/* CTA Buttons - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(15, 24, 1, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] text-white text-base font-bold shadow-lg shadow-[#2a4204]/40 transition overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.08, borderColor: "#487307", backgroundColor: "#f8faf5" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-[#487307]/40 bg-white hover:border-[#487307] text-[#0f1801] text-base font-bold transition shadow-md hover:shadow-lg"
              >
                Explore Fleet
                <Sparkles className="w-5 h-5" />
              </motion.button>
            </motion.div>

          
          </div>

          {/* Right Column: Booking Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm lg:max-w-md">
              <BookingWidget />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

