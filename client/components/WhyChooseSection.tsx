import { Shield, DollarSign, Crown, Users, Award, Clock, Sparkles, PoundSterlingIcon, Map, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionChip } from "./SectionChip";

const FEATURES = [
  {
    icon: Award,
    title: "Professional chauffeurs",
    description: "We have hand-picked our chauffeurs for their professionalism, expertise in safe driving and dedication to the client.",
    accent: "from-emerald-500/90 via-green-400/90 to-emerald-500/80",
    shadowColor: "rgba(16, 185, 129, 0.4)",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "Time is of the essence. We keep a real-time check of traffic, flight schedules and route data. It helps the passengers with the arrival and departure.",
    accent: "from-sky-500/90 via-indigo-500/80 to-sky-500/70",
    shadowColor: "rgba(14, 165, 233, 0.4)",
  },
  {
    icon: Crown,
    title: "Luxurious Fleet",
    description: "Our fleet of vehicles features luxury automobiles that are impeccably maintained and provide you with the latest in luxurious amenities to enhance your travelling experience.",
    accent: "from-amber-500/90 via-orange-500/80 to-amber-500/70",
    shadowColor: "rgba(245, 158, 11, 0.4)",
  },
  {
    icon: PoundSterlingIcon,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise costs; you always know exactly what you are paying for.",
    accent: "from-purple-500/90 via-fuchsia-500/80 to-purple-500/70",
    shadowColor: "rgba(168, 85, 247, 0.4)",
  },
  {
    icon: Shield,
    title: "Safety At All Times",
    description: "Every trip is subject to tight standards of safety based on regular vehicle inspections and extensive professional training for our chauffeurs.",
    accent: "from-rose-500/90 via-red-400/80 to-rose-500/70",
    shadowColor: "rgba(244, 63, 94, 0.4)",
  },
  {
    icon: Users,
    title: "Personalised Service",
    description: "Each booking can be tailored to meet your specific needs, schedule and travel preferences.",
    accent: "from-blue-500/90 via-cyan-400/80 to-blue-500/70",
    shadowColor: "rgba(59, 130, 246, 0.4)",
  },
  {
    icon: Sparkles,
    title: "Vehicle Options",
    description: "You can select from among a large number of luxury executive vehicles in our fleet, which allows you to have a choice in how you want to travel.",
    accent: "from-emerald-500/90 via-teal-400/80 to-emerald-500/70",
    shadowColor: "rgba(16, 185, 129, 0.4)",
  },
  {
    icon: Map,
    title: "Route Options",
    description: "Whether you desire the quickest route or the most scenic, we adapt to your preferences.",
    accent: "from-orange-500/90 via-yellow-400/80 to-orange-500/70",
    shadowColor: "rgba(249, 115, 22, 0.4)",
  },
  {
    icon: Settings,
    title: "Experience Options",
    description: "Every detail about your journey can be customised to your liking, from the climate control to refreshments and music to any other requirements you may have.",
    accent: "from-fuchsia-500/90 via-pink-400/80 to-fuchsia-500/70",
    shadowColor: "rgba(217, 70, 239, 0.4)",
  },
];

const METRICS = [
  { label: "Avg. response", value: "42 sec", icon: Clock },
  { label: "Customer NPS", value: "92", icon: Award },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const WhyChooseSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#f1f5ff] to-white">
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
                src="/home/why-quickoo-chauffeur-service.png"
                alt="Chauffeur opening car door"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex">
                <motion.div
                  variants={item}
                  whileHover={{
                    y: -10,
                    boxShadow: `0 30px 90px ${feature.shadowColor}`
                  }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white/90 border border-white/60 p-6 md:p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] w-full h-full"
                >
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-x-10 -top-16 h-32 rounded-full blur-3xl bg-gradient-to-r ${feature.accent} opacity-70`}
                  />

                  {/* Icon Section */}
                  <div className="relative flex items-center justify-center mb-6">
                    <div
                      className={`rounded-2xl bg-gradient-to-r ${feature.accent} p-4 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Title - Fixed height */}
                  <h3 className="text-2xl font-montserrat font-bold text-dark mb-4 text-center min-h-[64px] flex items-center justify-center">
                    {feature.title}
                  </h3>

                  {/* Description - Fixed min-height for alignment */}
                  <div className="min-h-[96px] flex items-start justify-center">
                    <p className="text-sm font-inter leading-relaxed text-gray-600 text-center">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

