import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BookingWidget } from "./BookingWidget";
import LogistifieBookingWidget from "./LogistifieBookingWidget";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home-booking" className="relative flex min-h-[100dvh] w-full items-center pt-24 pb-20 lg:py-0 scroll-mt-24">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10 lg:bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/20 lg:to-transparent z-10" />

        {/* Mobile/Tablet Premium Chauffeur Background - HIGH VISIBILITY VERSION */}
        <div className="lg:hidden absolute inset-0 overflow-hidden bg-black">
          {/* Base Image Overlay - Increased Visibility */}
          <div
            className="absolute inset-0 opacity-30 blur-xl scale-110"
            style={{
              backgroundImage: `url('/brain/586bf587-30e8-4181-b3bb-5c2f8c653507/luxury_chauffeur_mobile_hero_1776447543788.png')`,
              backgroundSize: 'cover',
            }}
          />

          {/* VIBRANT Animated Reflection Gradients */}
          <motion.div
            animate={{
              x: ["-15%", "15%", "-15%"],
              y: ["-8%", "8%", "-8%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 opacity-80"
            style={{
              background: "radial-gradient(circle at 30% 30%, #4ade80 0%, transparent 60%), radial-gradient(circle at 70% 70%, #84cc16 0%, transparent 60%), radial-gradient(circle at 50% 50%, #166534 0%, transparent 80%)",
              filter: "blur(50px)",
            }}
          />

          {/* BRIGHT Floating Luxury Bokeh Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`bokeh-${i}`}
              animate={{
                y: [0, -120, 0],
                x: [0, Math.random() * 60 - 30, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
              className="absolute rounded-full bg-green-400/40 blur-xl"
              style={{
                width: `${30 + i * 15}px`,
                height: `${30 + i * 15}px`,
                left: `${(i * 15) % 100}%`,
                top: `${(i * 25) % 100}%`,
              }}
            />
          ))}

          {/* Luxury Vertical "Glow Columns" */}
          <div className="absolute inset-0 flex justify-around opacity-30">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={`col-${i}`}
                animate={{
                  height: ["10%", "70%", "10%"],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4 + i * 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                className="w-[2px] bg-gradient-to-b from-transparent via-green-400 to-transparent shadow-[0_0_15px_rgba(74,222,128,0.5)]"
              />
            ))}
          </div>

          {/* Horizontal SHARP Speed Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={`line-${i}`}
                initial={{ x: "-150%", y: 250 + i * 140, rotate: -8 }}
                animate={{ x: "150%" }}
                transition={{
                  duration: 5 + i * 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 2,
                }}
                className="absolute h-[3px] w-[350px] bg-gradient-to-r from-transparent via-green-400 to-transparent blur-[1px] shadow-[0_0_10px_rgba(74,222,128,0.4)]"
              />
            ))}
          </div>

          {/* Final Subtle Vignette - NOT covering everything */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />
        </div>

        {/* Desktop Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden lg:block w-full h-full object-fill"
        >
          <source src="/home/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated SVG decorations - Hidden on mobile for cleaner look as requested by "hide krdena" vibe */}
      <motion.svg
        className="pointer-events-none absolute left-10 bottom-10 h-48 w-48 text-white/10 z-10 hidden lg:block"
        viewBox="0 0 200 200"
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
      </motion.svg>

      {/* Content Container */}
      <div className="relative z-20 mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Top on Mobile: Booking Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="w-full max-w-xl sm:max-w-3xl lg:max-w-md relative z-30 mx-auto lg:ml-auto lg:mr-0 hero_booking_engine">
              {/* <BookingWidget /> */}
              <LogistifieBookingWidget />
            </div>
          </motion.div>

          {/* Bottom on Mobile: Text Content */}
          <div className="w-full space-y-8 text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-green-500/50 bg-white/95 px-4 sm:px-6 py-2 sm:py-2.5 backdrop-blur-md shadow-[0_0_30px_rgba(72,115,7,0.3)] mx-auto lg:mx-0"
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
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-montserrat font-bold leading-[1.2] text-white tracking-tight text-center lg:text-left w-full"
            >
              Luxury Chauffeur Service London&nbsp;–
              <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-200 to-white">
                Travel with Comfort, Style, and Confidence
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm sm:text-base text-gray-300 font-inter leading-relaxed max-w-xl lg:max-w-2xl font-light tracking-wide mx-auto lg:mx-0 text-center lg:text-left space-y-3 lg:space-y-4"
            >
              <p>
                Travel in London with a luxury chauffeur service that provides Comfortable, Stylish, AND Safe Services. Quickoo offers a variety of different types of trips, including Airport Transfers, Executive Business Travel, Event Transportation, and Private chauffeur, and tailors each trip to your needs.
              </p>
              <p>
                All of our professional, uniformed chauffeurs use only luxurious vehicles, provide impeccable service, and pay close attention to detail, so we can guarantee a stress-free, on-time trip.
              </p>
              <p>
                Use our website or contact our office today to book your trip.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto items-center lg:items-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/why-choose/luxury-fleet")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 bg-transparent text-white text-base font-bold transition-all duration-300 hover:border-white/60 backdrop-blur-sm w-full sm:w-auto"
              >
                Explore Fleet
                <Sparkles className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

