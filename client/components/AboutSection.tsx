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
    title: "Founded in London",
    detail: "Bespoke chauffeur studio crafted for C-suite travel planners.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    detail: "Added concierge-partner network across North America & EU.",
  },
  {
    year: "2025",
    title: "Smart Mobility Suite",
    detail: "Launched predictive dispatch and AI itinerary briefing.",
  },
];

export const AboutSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaff] to-[#fff5ec]">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <SectionChip title="About Quickoo" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
                From personalized chauffeur service to a{" "}
                <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                  world-class executive fleet.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-inter">
                We are a collective of hospitality experts, logisticians, and
                technologists committed to making ground travel feel like a
                five-star ritual—no matter the route.
              </p>
            </div>



            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="flex items-center gap-3 text-dark">
                <Sparkles className="h-5 w-5 text-[#487307]" />
                <p className="font-montserrat text-lg font-semibold">
                  Built on radical hospitality & real-time intelligence.
                </p>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 font-inter">
                Each booking activates a concierge pod that syncs vehicle prep,
                chauffeur briefings, city intelligence, and client preferences.
                The result? Doors open exactly when you arrive—never earlier,
                never late.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                <span className="rounded-full bg-dark/5 px-3 py-1 text-dark">
                  Biometrics Cleared
                </span>
                <span className="rounded-full bg-dark/5 px-3 py-1 text-dark">
                  Concierge On-Call
                </span>
                <span className="rounded-full bg-dark/5 px-3 py-1 text-dark">
                  Sustainability Pledge
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
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

            </div>

            <div className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="h-6 w-6 text-[#487307]" />
                <p className="font-montserrat text-lg font-semibold text-dark">
                  Our journey highlights
                </p>
              </div>
              <div className="space-y-5">
                {TIMELINE.map((item, idx) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <span className="font-montserrat text-sm font-bold text-[#487307]">
                        {item.year}
                      </span>
                      <span className="h-full w-px bg-gradient-to-b from-[#487307]/60 to-transparent" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-dark">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600 font-inter">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
