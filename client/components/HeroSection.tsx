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
    "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2000&q=80",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[90vh] w-full items-center  bg-[radial-gradient(circle_at_top,_#ffffff,_#f3f6ff,_#fff6ed)] pt-24 sm:pt-28 pb-12 sm:pb-16">
      {/* Background with light overlay */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
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
      </div>

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute -top-24 right-6 h-72 w-72 rounded-full bg-[#f3d6ff]/40 blur-[150px] opacity-60"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.4, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-36 left-0 h-96 w-96 bg-[#9fd4ff]/25 blur-[180px] opacity-60"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.3, 0.6],
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
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="w-full space-y-6 sm:space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm shadow-[#c9d6ff]/40"
            >
              <Sparkles className="h-4 w-4 text-[#487307]" />
              <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                Quickoo Chauffeur
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-semibold leading-tight text-dark"
            >
              Experience the Art of
              <br />
              <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                Premium Travel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-600 font-inter leading-relaxed max-w-2xl"
            >
              Elevate your journey with our elite chauffeur service. Meticulously curated for comfort, style, and punctuality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] text-white text-base font-semibold shadow-lg shadow-[#2a4204]/35 transition hover:opacity-90"
              >
                Book Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-200 bg-white text-slate-700 text-base font-semibold hover:border-[#3f1c6e] hover:text-[#3f1c6e] transition shadow-sm"
              >
                Explore Fleet
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap gap-6 pt-4 text-sm text-slate-600 font-inter"
            >
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#487307]"></span>
                Private concierge 24/7
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#487307]"></span>
                Curated electric & executive fleet
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#487307]"></span>
                Global availability
              </span>
            </motion.div>
          </div>

          {/* Right Column: Booking Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full flex justify-center lg:justify-end"
          >
            <BookingWidget />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

