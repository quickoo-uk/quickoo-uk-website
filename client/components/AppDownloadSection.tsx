import { Link } from "react-router-dom";
import { Apple, Smartphone, Sparkles, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";

const FEATURES = [
  "Online Reservations - Fast & Secure",
  "Flexible Booking Changes",
  "Real-Time Journey Updates & Notifications",
  "24/7 Support",
];

export const AppDownloadSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaff] to-[#f1f5ff] pb-12 pt-8 sm:pb-32 sm:pt-10">
      {/* Background gradients */}
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#487307]/5 blur-[100px]" />
      <div className="absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-[#6aa80b]/10 blur-[120px]" />

      {/* Animated SVG */}
      <motion.svg
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 text-[#487307]/10"
        viewBox="0 0 160 160"
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        <circle
          cx="80"
          cy="80"
          r="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 6"
        />
      </motion.svg>

      <div className="section-container relative">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <SectionChip title="Get the Mobile Experience" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark leading-tight">
              Easy Travel Planning All you need,{" "}
              <span className="bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
                Right at Your Fingertips
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 font-inter max-w-xl leading-relaxed">
              You can book and manage every aspect of luxury chauffeur travel. It covers airport pickups and transportation to special events in a simple manner.
            </p>

            <div className="space-y-4">
              {FEATURES.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#487307]/10">
                    <ArrowRight className="h-3.5 w-3.5 text-[#487307]" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* App Store Button */}
              <a
                href="https://apps.apple.com/gb/app/quickoo/id6777176358"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-black text-white shadow-lg transition-all hover:scale-105 cursor-pointer block"
              >
                <div className="flex items-center gap-3 px-6 py-3">
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <p className="text-[10px] font-medium uppercase opacity-80">
                      Download on the
                    </p>
                    <p className="text-sm font-bold">App Store</p>
                  </div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.quickoo.passenger"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-black text-white shadow-lg transition-all hover:scale-105 cursor-pointer block"
              >
                <div className="flex items-center gap-3 px-6 py-3">
                  <Smartphone className="h-6 w-6" />
                  <div className="text-left">
                    <p className="text-[10px] font-medium uppercase opacity-80">
                      Get it on
                    </p>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </div>
              </a>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-[300px] lg:max-w-none"
          >
            <div className="relative z-10 mx-auto h-[600px] w-[300px] rounded-[3rem] border-[8px] border-dark bg-white shadow-2xl">
              <div className="absolute top-0 left-1/2 h-6 w-40 -translate-x-1/2 rounded-b-xl bg-dark" />
              <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-gray-50">
                <img
                  src="/new_images/mobile_view.png"
                  alt="App Interface"
                  className="h-full w-full object-cover rounded-[2.5rem]"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 top-20 z-0 h-64 w-64 rounded-full bg-[#487307]/20 blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 bottom-20 z-0 h-64 w-64 rounded-full bg-[#6aa80b]/20 blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
