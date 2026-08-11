import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToBooking = () => {
    document
      .getElementById("home-booking")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ================= Banner ================= */}
      <section className="relative w-full overflow-hidden bg-black max-sm:flex max-sm:min-h-[58vh] max-sm:items-center">
        {/* Mobile only: full-bleed background photo behind the compact hero */}
        <div className="absolute inset-0 sm:hidden">
          <img
            src="/home/s-class-2026-hero-right.png"
            alt="Mercedes-Benz S-Class chauffeur car"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/85" />
        </div>

        {/* Desktop: car visual anchored to the right */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block w-[62%]">
          <img
            src="/home/s-class-2026-hero-right.png"
            alt="Mercedes-Benz S-Class chauffeur car"
            className="h-full w-full object-cover object-left"
          />
          {/* Blend the image into the black panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 pt-28 pb-14 lg:grid-cols-2 lg:gap-16 lg:pt-36 lg:pb-32 lg:min-h-[42rem] max-sm:gap-5 max-sm:pt-20 max-sm:pb-4">
            {/* Text content */}
            <div className="flex w-full flex-col items-center space-y-7 text-center lg:items-start lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
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
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-[1.15] tracking-tight text-white lg:max-w-[15ch]"
              >
                Luxury Chauffeur Service
                <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-200 to-white text-2xl sm:text-3xl lg:text-4xl leading-tight font-semibold lg:max-w-[20ch]">
                  Travel in Comfort. Arrive with Confidence.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="max-w-xl text-sm sm:text-base font-inter font-light leading-relaxed tracking-wide text-gray-300 max-sm:line-clamp-3"
              >
                Quickoo delivers premium chauffeur-driven travel for
                corporate clients, airport transfers and special occasions. Every
                journey is handled with professionalism, punctuality and attention
                to detail.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75 }}
                className="flex w-full flex-col items-center gap-4 pt-2 sm:w-auto sm:flex-row lg:items-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToBooking}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-all duration-300 hover:bg-white/90 sm:w-auto"
                >
                  Book Now
                  <ArrowUpRight className="h-5 w-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/why-choose/luxury-fleet")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 sm:w-auto max-sm:hidden"
                >
                  Explore Fleet
                  <Sparkles className="h-5 w-5" />
                </motion.button>
              </motion.div>
            </div>

            {/* Mobile / tablet: car visual below the copy */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative hidden w-full sm:block lg:hidden"
            >
              <img
                src="/home/s-class-2026-hero-right.png"
                alt="Mercedes-Benz S-Class chauffeur car"
                className="h-56 w-full rounded-2xl object-cover object-center sm:h-72"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
};
