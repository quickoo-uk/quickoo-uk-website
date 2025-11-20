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
      "https://images.unsplash.com/photo-1449960238630-7e720e630019?w=1200&h=900&fit=crop",
  },
  {
    icon: Navigation2,
    name: "City-to-City",
    description:
      "Comfortable long-distance journeys in executive sedans & SUVs.",
    highlight: "Door-to-Door",
    features: ["Bottled water", "Custom playlists", "Power & Wi-Fi"],
    accent: "from-indigo-500/90 via-blue-500/80 to-indigo-500/70",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&h=900&fit=crop",
  },
  {
    icon: Clock,
    name: "Hourly Hire",
    description: "Book a chauffeur by the hour for maximum flexibility.",
    highlight: "On Your Schedule",
    features: ["Flexible routing", "Multi-stop itineraries", "Standby driver"],
    accent: "from-amber-500/90 via-orange-500/80 to-amber-500/70",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&h=900&fit=crop",
  },
  {
    icon: Heart,
    name: "Wedding",
    description: "Make your special day even more memorable with our service.",
    highlight: "White-Glove Care",
    features: ["Decor-ready fleet", "Champagne service", "Red-carpet arrival"],
    accent: "from-rose-500/90 via-pink-500/80 to-rose-500/70",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&h=900&fit=crop",
  },
  {
    icon: Briefcase,
    name: "Business",
    description: "Professional chauffeur service for corporate needs.",
    highlight: "Corporate Accounts",
    features: ["Executive fleet", "Discreet drivers", "Billing portal"],
    accent: "from-slate-900/90 via-slate-800/80 to-slate-700/70",
    image:
      "https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?w=1200&h=900&fit=crop",
  },
  {
    icon: Sparkles,
    name: "Events",
    description:
      "Transportation solutions for all types of events and celebrations.",
    highlight: "Group Logistics",
    features: ["Shuttle coordination", "VIP passes", "On-site lead"],
    accent: "from-fuchsia-500/90 via-purple-500/80 to-fuchsia-500/70",
    image:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&h=900&fit=crop",
  },
  {
    icon: Anchor,
    name: "Seaport",
    description: "Convenient transfers to and from seaport terminals.",
    highlight: "Cruise Ready",
    features: ["Dockside pickup", "Porter service", "Custom signage"],
    accent: "from-cyan-500/90 via-teal-500/80 to-cyan-500/70",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=900&fit=crop",
  },
  {
    icon: Zap,
    name: "Private Jet",
    description: "Coordination with private jet services for seamless travel.",
    highlight: "FBO Coordination",
    features: ["Ramp access", "Flight briefings", "Security cleared"],
    accent: "from-yellow-500/90 via-lime-500/80 to-yellow-500/70",
    image:
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1200&h=900&fit=crop",
  },
  {
    icon: MapPin,
    name: "City Tours",
    description: "Guided city tours with a knowledgeable, professional driver.",
    highlight: "Curated Routes",
    features: ["Certified guides", "Photo stops", "Dining reservations"],
    accent: "from-emerald-500/90 via-green-500/80 to-emerald-500/70",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&h=900&fit=crop",
  },
];

export const ServicesOverviewSection = () => {
  return (
    <section className="section-spacing relative bg-gradient-to-b from-purple-50/20 via-white to-indigo-50/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 font-semibold text-xs tracking-widest border border-purple-200/50 shadow-sm">
            PREMIUM EXPERIENCES
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent">
            Chauffeur Services Crafted For Every Journey
          </h2>
          <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
            Discover curated itineraries, white-glove service, and modern
            vehicles tailored to airport runs, business travel, events, and
            bespoke tours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.name}
                to={`/services/${service.name.toLowerCase().replace(/ /g, "-")}`}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-purple-100/50 bg-gradient-to-br from-white to-gray-50/50 shadow-lg shadow-purple-100/30 ring-1 ring-purple-100/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200/40"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/30 to-transparent" />
                  <div className="absolute inset-x-6 bottom-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`rounded-2xl bg-gradient-to-r ${service.accent} p-3 text-white shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">
                          {service.highlight}
                        </p>
                        <h3 className="text-2xl font-montserrat font-bold text-white mt-1">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                    <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white border border-white/30">
                      Explore
                    </span>
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
                        className="rounded-full border border-purple-200/80 bg-purple-50/80 px-3 py-1 text-xs font-semibold text-purple-700"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">
                        Learn More
                      </p>
                      <p className="text-sm font-montserrat text-gray-900">
                        Tailored concierge planning
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-white shadow-lg shadow-purple-500/30 transition-all group-hover:shadow-xl group-hover:shadow-purple-500/40">
                      Reserve
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
