import { Link } from "react-router-dom";
import { TrendingUp, Sparkles, ShieldCheck, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";

const STATS = [
  { value: "500+", label: "Chauffeurs On Call" },
  { value: "65", label: "Global Cities" },
  { value: "1.2M", label: "Annual Miles" },
  { value: "97%", label: "5★ Ratings" },
];

const TIMELINE = [
  {
    year: "2020",
    title: "Established in London",
    detail: "Get the curated chauffeur service crafted for executive business professionals.",
  },
  {
    year: "2023",
    title: "Wide Expansion Globally",
    detail: "Get the concierge support in North America & the EU.",
  },
  {
    year: "2025",
    title: "Smart System",
    detail: "Cutting Edge AI Itinerary Summary.",
  },
];

export const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaff] to-[#fff5ec] pb-8 pt-8 sm:pb-10 sm:pt-10">
      {/* Background gradients */}
      <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-gold/15 blur-[120px]" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a5c9ff]/20 blur-[140px]" />

      {/* Animated SVG */}
      <motion.svg
        className="pointer-events-none absolute left-10 top-10 h-32 w-32 text-gold/30"
        viewBox="0 0 160 160"
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="4 4"
        />
        <circle
          cx="80"
          cy="80"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="2 6"
        />
      </motion.svg>

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <SectionChip title="About Quickoo" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark leading-tight">
                An Outstanding <span className="text-[#487307]">Travel Experience</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-inter leading-relaxed">
                The purpose of Quickoo's founding was to create the best possible premium chauffeur service by offering customers luxury, reliability and high levels of service and care.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 rounded-3xl border border-[#487307]/10 bg-white/90 p-6 md:p-8 shadow-[0_20px_70px_rgba(72,115,7,0.08)] backdrop-blur"
            >
              <div className="space-y-5">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-inter font-medium">
                  We offer one of the best chauffeur services in London and throughout the UK to business travellers, families, tourists, VIPs and corporate organisations.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-gray-600 font-inter">
                  Our reputation is based on our professionalism, punctuality, and ability to consistently provide an outstanding travel experience.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 pt-2 border-t border-gray-100">
                <span className="flex items-center gap-1.5 mt-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#487307]"></span> Reliability
                </span>
                <span className="flex items-center gap-1.5 mt-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#487307]"></span> Punctuality
                </span>
                <span className="flex items-center gap-1.5 mt-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#487307]"></span> Professionalism
                </span>
              </div>
            </motion.div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] px-10 py-4 font-semibold text-white shadow-lg shadow-[#2a4204]/35 transition hover:opacity-90"
            >
              Learn Our Full Story
              <TrendingUp className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_90px_rgba(15,23,42,0.15)] border border-white/60">
              <img
                src="/home/about-quickoo-chauffeur-service.jpeg"
                alt="Chauffeur welcoming guests"
                className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
