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
  ArrowDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";

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
    name: "Airport transfers",
    description: "Get on-time airport pickups and drop-offs with vigilance on flight tracking.",
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
    image: "/new_images/airport.png",
    premium: "Your schedule comes first: 1 hour complimentary wait time with advanced flight monitoring.",
  },
  {
    icon: Navigation2,
    name: "Corporate Roadshows",
    description: "Experience comfortable journeys in executive sedans and SUVs.",
    highlight: "Door-to-Door",
    features: [
      "Bottled water",
      "Power & Wi-Fi",
      "Audio Preference",
    ],
    accent: "from-indigo-500/90 via-blue-500/80 to-indigo-500/70",
    image: "/new_images/corporate.png",
  },

  {
    icon: Sparkles,
    name: "Special Events",
    description: "Get the car for your upcoming special events and celebrations.",
    highlight: "Group Logistics",
    features: [
      "Shuttle coordination",
      "VIP access",
      "On-site lead",
      "Power & Wi-Fi",
      "Audio Preference",
    ],
    accent: "from-fuchsia-500/90 via-purple-500/80 to-fuchsia-500/70",
    image: "/new_images/special-event.png",
  },

  {
    icon: MapPin,
    name: "City Tours",
    description: "Get your guided city tours with the knowledgeable and professional chauffeurs.",
    highlight: "Curated Routes",
    features: [
      "Photo stops",
      "Dining reservations",
      "Power & Wi-Fi",
      "Audio Preference",
    ],
    accent: "from-emerald-500/90 via-green-500/80 to-emerald-500/70",
    image: "/new_images/city-tours.png",
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
          className="text-center mb-8 space-y-4"
        >
          <SectionChip title="Premium Experiences" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
            Executive chauffeur Service {" "}<br />
            <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
              for Business Professionals
            </span>
          </h2>
          <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
            The Executive chauffeur Service provides business professionals with dependable means of transportation to anywhere in the greater London area or the rest of the United Kingdom. Our executive chauffeur service is relied upon by business people (including corporate teams and entrepreneurs) and international visitors alike for dependable transportation around London and across the UK.
          </p>
          <div className="pt-6 pb-0 flex flex-col items-center w-full relative z-10">
            <div className="relative group cursor-default">
              {/* Premium Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#487307]/10 via-[#487307]/20 to-[#487307]/10 blur-xl rounded-2xl transition-all duration-500 group-hover:blur-2xl"></div>
              
              {/* Glassmorphic Badge */}
              <div className="relative flex items-center gap-4 bg-white/80 backdrop-blur-xl border border-white/50 px-8 py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-[#487307]/10 transition-transform duration-300 group-hover:-translate-y-1 z-20">
                {/* Radar Ping Animation */}
                <div className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#487307] opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#487307]"></span>
                </div>
                
                <span className="text-[#2a4204] font-montserrat font-semibold text-sm sm:text-base tracking-wide">
                  We provide all types of executive transportation, including:
                </span>
                
                {/* Elegant Bouncing Arrow */}
                <div className="ml-2 bg-gradient-to-b from-[#f4f9f1] to-white border border-[#487307]/10 rounded-full p-2 shadow-sm">
                  <ArrowDown className="h-4 w-4 text-[#487307] animate-bounce" />
                </div>
              </div>
            </div>

            {/* Elegant Animated Connector */}
            <div className="flex flex-col items-center w-full mt-2 opacity-80">
              <div className="w-[2px] h-20 bg-gradient-to-b from-[#487307]/20 via-[#487307]/10 to-transparent relative overflow-hidden rounded-full">
                {/* Moving light particle */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#487307] to-transparent"
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
              </div>
            </div>
          </div>
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

                <div
                  className="flex flex-col h-full overflow-hidden rounded-2xl cursor-default"
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden p-4 pb-0">
                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
                      <motion.img
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      {/* Subtle bottom gradient only to ensure the icon is visible, leaving the rest of the image HD and bright */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

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
                        <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
                          Reserve
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

