import { Link } from "react-router-dom";
import { Apple, Smartphone, Sparkles, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";

const FEATURES = [
  "Real-time chauffeur tracking",
  "Instant booking & modifications",
  "Secure in-app payments",
  "24/7 Concierge chat support",
];

export const AppDownloadSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaff] to-[#f1f5ff]">
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
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <SectionChip title="Mobile Experience" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark leading-tight">
              Your entire journey,{" "}
              <span className="bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
                in your pocket.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 font-inter max-w-xl">
              Book rides, track your chauffeur, and manage your itinerary with
              our award-winning mobile app. Designed for the modern traveler.
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
              <div className="group relative overflow-hidden rounded-xl bg-black text-white shadow-lg transition-all hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-3 px-6 py-3 transition-transform duration-300 group-hover:-translate-y-full">
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <p className="text-[10px] font-medium uppercase opacity-80">
                      Download on the
                    </p>
                    <p className="text-sm font-bold">App Store</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#487307] text-white transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                  <span className="text-sm font-bold">Coming Soon</span>
                </div>
              </div>

              {/* Google Play Button */}
              <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 text-dark shadow-lg transition-all hover:scale-105 cursor-pointer">
                <div className="flex items-center gap-3 px-6 py-3 transition-transform duration-300 group-hover:-translate-y-full">
                  <Smartphone className="h-6 w-6" />
                  <div className="text-left">
                    <p className="text-[10px] font-medium uppercase opacity-60">
                      Get it on
                    </p>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#487307] text-white transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                  <span className="text-sm font-bold">Coming Soon</span>
                </div>
              </div>
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
                  src="/home/appImage.png"
                  alt="App Interface"
                  className="h-full w-full object-cover rounded-[2.5rem] blur-sm"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-[2.5rem]">
                  <div className="rounded-full bg-[#487307]/90 px-6 py-2 backdrop-blur-md shadow-lg border border-white/20">
                    <span className="text-white font-bold tracking-wider uppercase text-sm">Coming Soon</span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-8 left-6 right-6 text-white blur-[2px]">
                  <p className="text-sm font-medium opacity-80">
                    Arriving in 5 mins
                  </p>
                  <p className="text-xl font-bold">Mercedes-Benz S-Class</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Driver"
                        className="h-8 w-8 rounded-full border border-white"
                      />
                      <span className="text-sm font-medium">James D.</span>
                    </div>
                    <div className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur">
                      4.9 ★
                    </div>
                  </div>
                </div>
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
