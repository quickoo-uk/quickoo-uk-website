import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { BookingWidget } from "./BookingWidget";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100dvh] w-full items-center pt-28 pb-20 lg:py-0 overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/home/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated SVG decorations */}
      <motion.svg
        className="pointer-events-none absolute left-10 bottom-10 h-48 w-48 text-white/10 z-10 hidden sm:block"
        viewBox="0 0 200 200"
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="8 8"
        />
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="5 5"
        />
        <circle
          cx="100"
          cy="100"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="3 3"
        />
      </motion.svg>

      <motion.svg
        className="pointer-events-none absolute right-20 top-20 h-40 w-40 text-green-400/10 z-10 hidden sm:block"
        viewBox="0 0 160 160"
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="6 6"
        />
        <circle
          cx="80"
          cy="80"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      </motion.svg>

      {/* Content */}
      <div className="relative z-20 mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="w-full space-y-8 text-left pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-green-500/50 bg-white/95 px-4 sm:px-6 py-2 sm:py-2.5 backdrop-blur-md shadow-[0_0_30px_rgba(72,115,7,0.3)]"
            >
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#487307] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-[#487307]"></span>
              </span>
              <span className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#487307] font-bold">
                Travel In Style
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold leading-[1.1] text-white tracking-tight"
            >
              Experience the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-200 to-white">
                Art of Luxury Travel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-200 font-inter leading-relaxed max-w-xl font-light tracking-wide"
            >
              Elevate your journey with our elite chauffeur service. Where sophistication meets comfort, and every ride is a statement of elegance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#487307] hover:bg-gray-50 text-base font-bold shadow-lg shadow-black/10 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 bg-transparent text-white text-base font-bold transition-all duration-300 hover:border-white/60 backdrop-blur-sm"
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
            className="w-full flex justify-center lg:justify-end lg:pt-0 pt-8"
          >
            <div className="w-full max-w-sm lg:max-w-md relative z-30">
              <BookingWidget />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

