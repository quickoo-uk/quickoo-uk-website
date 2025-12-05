import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { BookingWidget } from "./BookingWidget";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/home/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="w-full space-y-6 sm:space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md shadow-lg"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-white font-semibold">
                Premium Chauffeur Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold leading-tight text-white"
            >
              Experience the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-200 to-white">
                Art of Travel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-200 font-inter leading-relaxed max-w-xl font-light tracking-wide"
            >
              Elevate your journey with our elite chauffeur service. Meticulously curated for comfort, style, and punctuality.
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
            className="w-full flex justify-center lg:justify-end"
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

