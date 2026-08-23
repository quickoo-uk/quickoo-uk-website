import { Crown, Users, Award, Clock, PoundSterlingIcon, Map } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CITY_ATTRACTIONS } from "@/lib/constants";
import { SectionChip } from "./SectionChip";

const FEATURES = [
  {
    icon: Award,
    title: "Professional Chauffeurs",
    description: "Our chauffeurs are experienced, courteous, professionally trained and committed to meeting your needs for outstanding service.",
    accent: "from-emerald-500/90 via-green-400/90 to-emerald-500/80",
    shadowColor: "rgba(16, 185, 129, 0.4)",
  },
  {
    icon: Clock,
    title: "Punctuality",
    description: "We respect your time by being prompt and planning our routes to avoid delays whenever possible.",
    accent: "from-sky-500/90 via-indigo-500/80 to-sky-500/70",
    shadowColor: "rgba(14, 165, 233, 0.4)",
  },
  {
    icon: Crown,
    title: "Luxury Fleet",
    description: "Our fleet of modern executive vehicles has been meticulously maintained for maximum safety, comfort and style.",
    accent: "from-amber-500/90 via-orange-500/80 to-amber-500/70",
    shadowColor: "rgba(245, 158, 11, 0.4)",
  },
  {
    icon: PoundSterlingIcon,
    title: "Competitive Pricing",
    description: "You will know exactly how much you will pay for your trip before you travel. There are no hidden charges.",
    accent: "from-purple-500/90 via-fuchsia-500/80 to-purple-500/70",
    shadowColor: "rgba(168, 85, 247, 0.4)",
  },
  {
    icon: Map,
    title: "Nationwide Service",
    description: "Our services cover major UK cities, airports, business districts, and events across the country.",
    accent: "from-rose-500/90 via-red-400/80 to-rose-500/70",
    shadowColor: "rgba(244, 63, 94, 0.4)",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Each reservation will be tailor-made to match your individual travel needs, preferences, and schedules.",
    accent: "from-blue-500/90 via-cyan-400/80 to-blue-500/70",
    shadowColor: "rgba(59, 130, 246, 0.4)",
  }
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f1f5ff] to-white pb-8 pt-10 sm:pb-12 sm:pt-12">
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
          strokeDasharray="2 4"
        />
      </motion.svg>

      <div className="section-container relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <SectionChip title="Why Choose Quickoo?" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
              A Refined Luxury Partner with{" "}
              <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                Precision and Perfection
              </span>
            </h2>
            <p className="text-base sm:text-lg font-inter text-gray-600">
              We are proud to offer you more than just a ride from one place to another, we offer you reliable, comfortable, professional services with peace of mind that every aspect of your trip will be taken care of.
            </p>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#f3d6ff]/30 via-[#9fd4ff]/20 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_90px_rgba(15,23,42,0.15)] border border-white/60">
              <img
                src="/banner_images/image-5.png"
                alt="Luxury chauffeur cabin"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="min-w-0 [perspective:1000px]">
                <motion.button
                  type="button"
                  aria-label={`Show details for ${feature.title}`}
                  variants={item}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-56 w-full rounded-2xl text-left outline-none focus-visible:ring-2 focus-visible:ring-[#487307] focus-visible:ring-offset-2 sm:h-60"
                >
                  <span className="relative block h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                    <span className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white/90 p-4 text-center shadow-[0_14px_45px_rgba(15,23,42,0.08)] [backface-visibility:hidden]">
                      <span
                        className={`absolute inset-x-5 -top-14 h-28 rounded-full bg-gradient-to-r ${feature.accent} opacity-65 blur-3xl`}
                      />
                      <span
                        className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.accent} text-white shadow-lg`}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="relative font-montserrat text-base font-bold leading-snug text-dark">
                        {feature.title}
                      </span>
                    </span>

                    <span
                      className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} p-4 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]`}
                      style={{ boxShadow: `0 18px 55px ${feature.shadowColor}` }}
                    >
                      <span className="font-montserrat text-sm font-bold leading-snug">
                        {feature.title}
                      </span>
                      <span className="mt-3 font-inter text-xs leading-relaxed text-white/95">
                        {feature.description}
                      </span>
                    </span>
                  </span>
                </motion.button>
              </div>
            );
          })}
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[40px] border border-[#487307]/10 bg-gradient-to-b from-[#f8fcf3] to-white p-6 shadow-[0_20px_80px_rgba(72,115,7,0.08)] sm:mt-24 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#487307]/5 blur-[120px]" />

          <div className="relative z-10 mx-auto mb-10 max-w-3xl space-y-4 text-center sm:mb-12">
            <SectionChip title="Exclusive City Tours" />
            <h2 className="font-montserrat text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Discover London in Chauffeured Comfort
            </h2>
            <p className="mx-auto max-w-2xl font-inter text-base leading-relaxed text-gray-600">
              Explore iconic London landmarks with a professional chauffeur and a route arranged around your interests.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {CITY_ATTRACTIONS.slice(0, 6).map((attraction, index) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={`/services/city-tours/${attraction.id}`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#487307] focus-visible:ring-offset-2"
                >
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <span className="absolute inset-x-3 bottom-3 text-center font-montserrat text-sm font-bold leading-snug text-white">
                    {attraction.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

