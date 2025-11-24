import { Shield, DollarSign, Crown, Users, Award, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Vetted chauffeurs, biometric access controls, and real-time vehicle monitoring.",
    badge: "ISO 39001",
    accent: "from-emerald-500/90 via-green-400/90 to-emerald-500/80",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Smart routing + automated surge shielding keep every quote honest and upfront.",
    badge: "Live Quotes",
    accent: "from-sky-500/90 via-indigo-500/80 to-sky-500/70",
  },
  {
    icon: Crown,
    title: "Tailored Luxury Fleet",
    description:
      "From Maybach sedans to V-Class lounges, each ride includes Wi-Fi, refreshments, and concierge extras.",
    badge: "Curated Fleet",
    accent: "from-amber-500/90 via-orange-500/80 to-amber-500/70",
  },
  {
    icon: Users,
    title: "Elite Chauffeurs",
    description:
      "Hospitality-trained drivers fluent in multiple languages and versed in VIP protocol.",
    badge: "1% Hired",
    accent: "from-purple-500/90 via-fuchsia-500/80 to-purple-500/70",
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
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm shadow-[#c9d6ff]/40">
              <Sparkles className="h-4 w-4 text-[#487307]" />
              <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                Why Quickoo
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
              A concierge-level chauffeur partner{" "}
              <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                obsessed with details.
              </span>
            </h2>
            <p className="text-base sm:text-lg font-inter text-gray-600">
              We blend hospitality, logistics, and technology to deliver journeys
              that feel effortless. Every itinerary is tracked in real time,
              every chauffeur is briefed on your preferences, and every vehicle
              is staged with signature amenities.
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              {METRICS.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="rounded-3xl border border-white/60 bg-white/85 px-6 py-4 backdrop-blur shadow-[0_25px_70px_rgba(72,115,7,0.18)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-3 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                          {metric.label}
                        </p>
                        <p className="text-2xl font-montserrat font-bold bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                          {metric.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
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
                src="/home/why-quickoo-chauffeur-service.jpg"
                alt="Chauffeur opening car door"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
                  Concierge Snapshot
                </p>
                <p className="text-dark font-montserrat text-lg font-semibold">
                  Pre-arrival checks, route notes, and vehicle telemetry sent the
                  moment your chauffeur departs.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[28px] bg-white/90 border border-white/60 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition hover:shadow-[0_30px_90px_rgba(116,128,255,0.25)]"
              >
                <div
                  className={`absolute inset-x-10 -top-16 h-32 rounded-full blur-3xl bg-gradient-to-r ${feature.accent} opacity-70`}
                />
                <div className="relative flex items-center gap-4 mb-6">
                  <div
                    className={`rounded-2xl bg-gradient-to-r ${feature.accent} p-4 text-white shadow-lg`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-dark/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-dark/60">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm font-inter leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

