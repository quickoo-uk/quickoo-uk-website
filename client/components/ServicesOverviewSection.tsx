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
};

const SERVICES: Service[] = [
  {
    icon: Plane,
    name: "Airport Transfers",
    description:
      "Seamless airport pickups and drop-offs with flight tracking.",
    highlight: "Flight Monitoring",
    features: ["VIP meet & greet", "Real-time tracking", "Luggage care"],
    accent: "from-sky-500/90 via-sky-400/80 to-sky-500/70",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80",
  },
  {
    icon: Navigation2,
    name: "Corporate Travel",
    description:
      "Comfortable long-distance journeys in executive sedans & SUVs.",
    highlight: "Door-to-Door",
    features: ["Bottled water", "Custom playlists", "Power & Wi-Fi"],
    accent: "from-indigo-500/90 via-blue-500/80 to-indigo-500/70",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=2000&q=80",
  },



  {
    icon: Sparkles,
    name: "Special Events",
    description:
      "Transportation solutions for all types of events and celebrations.",
    highlight: "Group Logistics",
    features: ["Shuttle coordination", "VIP passes", "On-site lead"],
    accent: "from-fuchsia-500/90 via-purple-500/80 to-fuchsia-500/70",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=80",
  },

  {
    icon: MapPin,
    name: "City Tours",
    description: "Guided city tours with a knowledgeable, professional driver.",
    highlight: "Curated Routes",
    features: ["Certified guides", "Photo stops", "Dining reservations"],
    accent: "from-emerald-500/90 via-green-500/80 to-emerald-500/70",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80",
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
            <Sparkles className="h-4 w-4 text-[#7b5dff]" />
            <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
              Premium Experiences
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
            Chauffeur Services{" "}
            <span className="bg-gradient-to-r from-[#1a1431] via-[#40206c] to-[#806af1] bg-clip-text text-transparent">
              Crafted For Every Journey
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
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.name} variants={item}>
                <Link
                  to={`/services/${service.name.toLowerCase().replace(/ /g, "-")}`}
                  className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/60 bg-white/90 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(116,128,255,0.25)]"
                >
                  <div className="relative h-52 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent" />
                    <div className="absolute inset-x-6 bottom-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`rounded-2xl bg-gradient-to-r ${service.accent} p-3 text-white shadow-lg`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                            {service.highlight}
                          </p>
                          <h3 className="text-2xl font-montserrat font-bold text-white">
                            {service.name}
                          </h3>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <p className="font-inter text-base text-gray-600">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-full border border-gray-200/80 bg-white/90 px-3 py-1 text-xs font-semibold text-gray-500"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                          Learn More
                        </p>
                        <p className="text-sm font-montserrat text-dark">
                          Tailored concierge planning
                        </p>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a1230] via-[#3f1c6e] to-[#806af1] px-4 py-2 text-white transition group-hover:opacity-90">
                        Reserve
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

