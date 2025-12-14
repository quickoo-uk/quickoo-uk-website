import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Plane,
  Navigation2,
  Clock,
  Heart,
  Briefcase,
  Sparkles,
  Anchor,
  Zap,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

type Service = {
  icon: LucideIcon;
  name: string;
  description: string;
  image: string;
  highlight: string;
  features: string[];
  accent: string;
  premium?: string;
};

const SERVICES: Service[] = [
  {
    icon: Plane,
    name: "Airport Transfers",
    description:
      "Seamless airport pickups and drop-offs with flight tracking.",
    highlight: "Flight Monitoring",
    features: [
      "VIP meet & greet",
      "One hour complementary wait",
      "Real-time tracking",
      "Luggage care",
      "Power & Wi-Fi",
      "Audio Preference",
    ],
    accent: "from-sky-500/90 via-sky-400/80 to-sky-500/70",
    image: "/home/Airport Transfers-home.png",
    premium:
      "Your schedule comes first: 1 hour complimentary wait time with advanced flight monitoring.",
  },
  {
    icon: Navigation2,
    name: "Corporate Travel",
    description:
      "Comfortable long-distance journeys in executive sedans & SUVs.",
    highlight: "Door-to-Door",
    features: [
      "Bottled water",
      "Power & Wi-Fi",
      "Audio Preference",
    ],
    accent: "from-indigo-500/90 via-blue-500/80 to-indigo-500/70",
    image: "/home/Corporate Travel.png",
  },

  {
    icon: Sparkles,
    name: "Special Events",
    description:
      "Transportation solutions for all types of events and celebrations.",
    highlight: "Group Logistics",
    features: [
      "Shuttle coordination",
      "VIP access",
      "On-site lead",
      "Power & Wi-Fi",
      "Audio Preference",
    ],
    accent: "from-fuchsia-500/90 via-purple-500/80 to-fuchsia-500/70",
    image: "/home/Special Events.jpg",
  },

  {
    icon: MapPin,
    name: "City Tours",
    description: "Guided city tours with a knowledgeable, professional driver.",
    highlight: "Curated Routes",
    features: [
      "Photo stops",
      "Dining reservations",
      "Power & Wi-Fi",
      "Audio Preference",
    ],
    accent: "from-emerald-500/90 via-green-500/80 to-emerald-500/70",
    image: "/home/City Tours new.png",
  },
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

export const ServicesOverviewSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#f1f5ff] to-white">
      {/* Background gradients */}
      <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-gold/15 blur-[120px]" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a5c9ff]/20 blur-[140px]" />

      {/* Animated SVG */}
      <motion.svg
        className="pointer-events-none absolute right-10 top-20 h-40 w-40 text-[#b3c4ff]/40"
        viewBox="0 0 160 160"
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 6"
        />
      </motion.svg>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm shadow-[#c9d6ff]/40">
            <Sparkles className="h-4 w-4 text-[#487307]" />
            <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
              Premium Experiences
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
            Luxury Chauffeurs {" "}<br />
            <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
              Designed Around Your Travel Needs
            </span>
          </h2>
          <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
            Discover curated itineraries, white-glove service, and modern
            vehicles tailored to airport runs, business travel, events, and
            bespoke tours.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-2"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                variants={item}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col overflow-visible rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 h-full"
              >
                {/* Premium Feature - Modern Floating Tooltip */}
                {service.premium && (
                  <div className="absolute -top-16 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-400 transform group-hover:-translate-y-2 translate-y-1 pointer-events-none">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#487307]/30 via-[#487307]/20 to-[#487307]/30 blur-xl rounded-3xl"></div>

                    {/* Main Tooltip */}
                    <div className="relative rounded-2xl border-2 border-[#487307]/60 bg-gradient-to-br from-white via-[#f0f9eb] to-[#eaf7e8] px-6 py-4 shadow-[0_20px_60px_rgba(72,115,7,0.4)] backdrop-blur-md">
                      {/* Pointer Arrow */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-gradient-to-br from-white to-[#eaf7e8] border-r-2 border-b-2 border-[#487307]/60"></div>

                      {/* Content */}
                      <div className="relative flex items-start gap-3">
                        <span className="text-2xl shrink-0 animate-pulse">✨</span>
                        <p className="text-sm font-semibold text-[#1a3d01] leading-relaxed">
                          {service.premium}
                        </p>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_ease-in-out] rounded-2xl"></div>
                    </div>
                  </div>
                )}

                <Link
                  to={`/services/${service.name.toLowerCase().replace(/ /g, "-")}`}
                  className="flex flex-col h-full overflow-hidden rounded-2xl"
                >
                  {/* Badge Section */}
                  <div className="relative bg-gradient-to-br from-[#f8faf5] to-white pt-4 pb-2">
                    <div className="flex justify-center">

                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#f8faf5] to-white px-6 pb-6">
                    <div className="relative h-48 rounded-xl overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />

                      {/* Icon Overlay */}
                      <div className="absolute bottom-4 left-4">
                        <div
                          className={`rounded-2xl bg-gradient-to-r ${service.accent} p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Title */}
                    <div className="pb-3 border-b border-gray-100 mb-4">
                      <h3 className="text-2xl font-montserrat font-bold text-dark leading-tight">
                        {service.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 font-inter leading-relaxed mb-4">
                      {service.description}
                    </p>



                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center rounded-full border border-gray-200/80 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 transition-colors group-hover:border-[#487307]/30 group-hover:bg-[#eaf7e8]/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400 mb-1">
                            Learn More
                          </p>
                          <p className="text-sm font-montserrat font-semibold text-dark">
                            Luxury Travel, Perfectly Managed.
                          </p>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all group-hover:shadow-lg group-hover:scale-105">
                          Reserve
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

