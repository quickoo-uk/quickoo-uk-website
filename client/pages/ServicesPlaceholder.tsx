import { useParams, useNavigate } from "react-router-dom";
import { CITY_ATTRACTIONS } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Star,
  CheckCircle2,
  Crown,
  MapPin,
  Sparkles,
  Anchor,
  Ship,
  Compass,
} from "lucide-react";

import { SectionChip } from "@/components/SectionChip";

const SERVICE_IMAGES: Record<string, string> = {
  "airport-transfers": "/services/airport-transfer-hero.png",
  "hourly-hire": "/services/hourly-hire-hero.png",
  "city-to-city": "/services/city-to-city-hero.png",
  wedding: "/services/wedding-hero.jpg",
  business: "/services/business-hero.png",
  "corporate-travel": "/services/business-hero.png",
  events: "/services/special-events-distinct.jpg",
  "special-events": "/services/special-events-distinct.jpg",
  "private-jet": "/services/private-jet-hero.jpg",
  "city-tours": "/services/city-tours-distinct-2_cleanup.png",
  "private-jet-chauffeur": "/services/private-jet-hero-2_cleanup.png",
  "london-cruise-transfer": "/services/city-tours-hero-2_cleanup.png",
};

const SERVICE_TAGLINES: Record<string, { title: string; highlight: string }> = {
  "airport-transfers": {
    title: "Seamless airport transfers,",
    highlight: "redefined for punctuality.",
  },
  "corporate-travel": {
    title: "Executive corporate travel,",
    highlight: "engineered for efficiency.",
  },
  "special-events": {
    title: "Unforgettable special events,",
    highlight: "elevated by luxury.",
  },
  "city-tours": {
    title: "Curated city tours,",
    highlight: "discovering hidden gems.",
  },
  "wedding": {
    title: "Your perfect wedding day,",
    highlight: "arriving in timeless style.",
  },
  "hourly-hire": {
    title: "Flexible hourly hire,",
    highlight: "tailored to your schedule.",
  },
  "city-to-city": {
    title: "City-to-city journeys,",
    highlight: "comfort beyond boundaries.",
  },
  "private-jet": {
    title: "Private jet chauffeur,",
    highlight: "seamless tarmac transfers.",
  },
  "private-jet-chauffeur": {
    title: "Private aviation transfers,",
    highlight: "tarmac-side precision.",
  },
  "london-cruise-transfer": {
    title: "Port of London transfers,",
    highlight: "beginning your voyage in luxury.",
  },
};

const trustMetrics = [
  { label: "Average arrival window", value: "7 min" },
  { label: "Concierge support", value: "24/7" },
  { label: "Journey rating", value: "99.1%" },
];

const coreHighlights = [
  {
    title: "Precision logistics",
    description:
      "Live telemetry, flight monitoring, and proactive rerouting keep every itinerary effortless.",
  },
  {
    title: "Signature hospitality",
    description:
      "Chauffeurs trained in luxury etiquette, bilingual support, and personalized onboard touches.",
  },
  {
    title: "Transparent pricing",
    description:
      "No hidden fees, upfront rate cards, and custom itineraries sent within 15 minutes.",
  },
];

const getServicePillars = (serviceId?: string) => {
  const basePillars = [
    {
      icon: Clock,
      title: "Always On Time",
      copy: "Dynamic dispatch and predictive routing that flex with live conditions.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Professionals",
      copy: "DBS verified, elevated etiquette standards, and regular safety check.",
    },
    {
      icon: Star,
      title: "Luxury Guaranteed",
      copy: "Flagship fleet, ambient atmosphere and refreshments.",
    },
  ];

  // Add airport-specific premium feature as a 4th point
  if (serviceId === "airport-transfers") {
    basePillars.push({
      icon: Sparkles,
      title: "Your Schedule First",
      copy: "Airport one hour complimentary wait time with advanced flight monitoring.",
    });
  }

  return basePillars;
};

const journeySteps = [
  {
    title: "Concierge Briefing",
    detail:
      "Share traveler preferences, luggage details, and timing. Receive an annotated itinerary within 15 minutes.",
  },
  {
    title: "Live Journey Tracking",
    detail:
      "Personalized link with chauffeur profile, vehicle telemetry, and real-time ETA adjustments.",
  },
  {
    title: "Arrival Rituals",
    detail:
      "Coordinated handovers, luggage assistance, and concierge follow-ups to confirm satisfaction.",
  },
];

const premiumAddOns = [
  { label: "Event command center", note: "On-demand event coordination and live comms." },
  { label: "Security liaison", note: "Professional security and close-protection coordination." },
  { label: "Private route curator", note: "Custom route planning for multi-city and VIP transfers." },
  { label: "Brand integrations", note: "Branding, vehicle wraps and guest experience integrations." },
];




const PRIVATE_JET_AIRPORTS = [
  {
    name: "Farnborough Airport",
    description: "The most popular private-jet airport in the UK, dedicated exclusively to business aviation, offering fast handling and premium executive services.",
    icon: Sparkles,
  },
  {
    name: "London Biggin Hill Airport",
    description: "Located close to central London, this airport specializes in VIP and private jet services with a strong focus on discretion and luxury.",
    icon: ShieldCheck,
  },
  {
    name: "London Luton Airport",
    description: "A major private jet hub featuring multiple FBO terminals, ideal for flexible scheduling and high-volume business aviation traffic.",
    icon: Clock,
  },
  {
    name: "London Stansted Airport",
    description: "Offers robust private aviation facilities alongside commercial operations, making it a versatile option for business jet travelers.",
    icon: MapPin,
  },
  {
    name: "RAF Northolt",
    description: "A military airbase that permits limited private and VIP flights, subject to prior clearance and strict operational approval.",
    icon: Star,
  },
  {
    name: "London City Airport",
    description: "Suitable for select business jets with aircraft size restrictions, providing the fastest access to London’s financial district.",
    icon: Crown,
  },
];

const CRUISE_PORTS = [
  {
    name: "Southampton Cruise Port",
    description: "The UK's primary cruise hub. We provide door-to-deck service for all terminals including Queen Elizabeth II and City Cruise Terminal.",
    icon: Anchor,
  },
  {
    name: "Portsmouth Cruise Port",
    description: "Serving the International Port with seamless transfers. Ideal for boutique cruises and ferry connections to the continent.",
    icon: Ship,
  },
  {
    name: "Dover Cruise Port",
    description: "Executive transfers to the White Cliffs. We manage your timing perfectly for departures from the historic Western Docks.",
    icon: Compass,
  },
  {
    name: "Harwich Port",
    description: "Reliable chauffeur service to Harwich International, ensuring a relaxed start to your North Sea or Baltic voyage.",
    icon: MapPin,
  },
];




// Dynamic operations image based on service type
const getOperationsImage = (serviceId: string) => {
  // Fallback to business hero for now as specific operation images are not yet generated
  return "/services/business-hero.png";
};

const getTeamCollaborationImage = (serviceId: string) => {
  // Fallback to business hero for now
  return "/services/business-hero.png";
};

const getChauffeurPortraitImage = (serviceId: string) => {
  // Fallback to business hero for now
  return "/services/business-hero.png";
};

export default function ServicesPlaceholder() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const serviceName = id
    ? id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    : "Service";

  const serviceImage = SERVICE_IMAGES[id ?? ""] ?? SERVICE_IMAGES["business"];

  return (
    <div className="w-full bg-[radial-gradient(circle_at_top,_#ffffff,_#f3f6ff,_#fff6ed)] text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceImage}
            alt={serviceName}
            className="h-full w-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-[#f8f1ff]/60" />
        </div>
        <div className="absolute -top-24 right-6 h-72 w-72 rounded-full bg-[#8fe00f]/40 blur-[150px] opacity-60" />
        <div className="absolute -bottom-36 left-0 h-96 w-96 bg-[#8fe00f]/25 blur-[180px] opacity-60" />

        <svg
          className="pointer-events-none absolute -right-6 top-10 h-64 w-64 text-[#8fe00f]/60 animate-[spin_28s_linear_infinite]"
          viewBox="0 0 200 200"
          aria-hidden
        >
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        <div className="relative z-10 section-container py-24 lg:py-32 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <SectionChip title={`${serviceName} by Quickoo`} />
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-montserrat font-semibold leading-tight">
                {SERVICE_TAGLINES[id ?? ""] ? (
                  <>
                    {SERVICE_TAGLINES[id ?? ""].title}{" "}
                    <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                      {SERVICE_TAGLINES[id ?? ""].highlight}
                    </span>
                  </>
                ) : (
                  <>
                    Bespoke {serviceName.toLowerCase()}{" "}
                    <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                      without compromise.
                    </span>
                  </>
                )}
              </h1>
              <p className="text-lg text-slate-600 font-inter max-w-2xl">
                Concierge-led planning, telemetry-enabled precision, and sensorial hospitality
                converge to deliver the UK’s most trusted {serviceName.toLowerCase()} experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/booking/select-car')}
                className="rounded-full luxury-button-gold px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#0a1a02]/35 transition hover:scale-[1.02]"
              >
                Book {serviceName}
              </button>

            </div>

          </div>

          <div className="relative">
            <div className="absolute inset-0 -m-6 rounded-[40px] bg-gradient-to-br from-white/70 to-transparent blur-2xl opacity-80" />
            <div className="relative rounded-[36px] border border-white/50 bg-white/85 p-6 backdrop-blur-lg shadow-[0_35px_90px_rgba(72,115,7,0.25)]">
              <div className="overflow-hidden rounded-[28px]">
                <img
                  src={serviceImage}
                  alt={`${serviceName} showcase`}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="font-montserrat text-dark text-xl">Concierge preview</p>
                  <Crown className="text-[#487307]" />
                </div>
                <p className="text-sm text-slate-600 font-inter">
                  Dedicated journey designer, real-time chauffeur comms, and tailored onboard amenities.
                </p>
                <div className="grid grid-cols-3 gap-3 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
                  <span>Wifi ready</span>
                  <span>Hydration</span>
                  <span>Climate suite</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* CITY ATTRACTIONS (Specific to city-tours) */}
      {/* ============================== */}
      {id === "city-tours" && (
        <section className="section-spacing bg-white relative overflow-hidden">
          <div className="section-container relative z-10">
            <div className="max-w-4xl mb-20">
              <SectionChip title="Exclusive City Tours" />
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-bold text-slate-900 mt-6 leading-tight">
                Iconic London <br />
                <span className="bg-gradient-to-r from-[#1a2e03] to-[#487307] bg-clip-text text-transparent">
                  Treasures
                </span>
              </h2>
              <p className="text-slate-600 font-inter text-lg md:text-xl mt-6 leading-relaxed">
                Experience the soul of the capital through our curated selection of landmarks,
                serviced with the refined elegance of a private chauffeur.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {CITY_ATTRACTIONS.slice(0, 10).map((attraction, index) => (
                <div
                  key={index}
                  className="group relative rounded-[48px] bg-white border border-slate-100 overflow-hidden transition-all duration-700 hover:shadow-[0_50px_100px_rgba(72,115,7,0.12)] hover:-translate-y-2 flex flex-col"
                >
                  <div className="relative h-[500px] overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                    {/* Floating Premium Badge */}
                    <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-2xl">
                      <Sparkles className="w-4 h-4 text-[#8fe00f] animate-pulse" />
                      <span className="text-white text-[10px] font-bold uppercase tracking-[0.25em]">
                        Signature Experience
                      </span>
                    </div>

                    {/* Map Icon Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(attraction.mapUrl, '_blank');
                      }}
                      className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-2xl flex items-center justify-center text-[#487307] hover:bg-[#487307] hover:text-white transition-all duration-500 group/map z-20"
                      title="View on Google Maps"
                    >
                      <MapPin className="w-6 h-6 group-hover/map:scale-125 transition-transform" />
                    </button>

                    <div className="absolute bottom-10 left-10 right-10">
                      <div className="flex items-center gap-3 mb-4 opacity-80">
                        <div className="h-px w-8 bg-[#8fe00f]" />
                        <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">Landmark {index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-montserrat font-bold text-white transition-colors leading-tight">
                        {attraction.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-12 flex flex-col flex-grow bg-white">
                    <p className="text-slate-600 font-inter text-lg leading-relaxed flex-grow line-clamp-3">
                      {attraction.description}
                    </p>

                    <div className="mt-10 flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-slate-100">
                      <button
                        onClick={() => navigate(`/services/city-tours/${attraction.id}`)}
                        className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-900 hover:text-[#487307] transition-all group/btn"
                      >
                        <span className="relative">
                          Explore Details
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#487307] transition-all group-hover/btn:w-full" />
                        </span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-3 transition-transform" />
                      </button>
                      <button
                        onClick={() => navigate('/booking/select-car')}
                        className="luxury-button-gold px-10 py-4 text-xs font-bold uppercase tracking-widest shadow-xl hover:scale-105 transition-all active:scale-95"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Simplified CTA */}
            <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="text-2xl font-montserrat font-bold text-slate-900">Custom Touring Itineraries</p>
                <p className="text-slate-500 font-inter mt-1">Our concierge can plan a multi-stop journey tailored to your preferences.</p>
              </div>
              <button
                onClick={() => navigate('/booking/select-car')}
                className="luxury-button-gold px-10"
              >
                Plan Custom Route
              </button>
            </div>
          </div>
        </section>
      )}


      {/* ============================== */}
      {/* CRUISE PORT TRANSFERS (Specific to london-cruise-transfer) */}
      {/* ============================== */}
      {
        id === "london-cruise-transfer" && (
          <section className="section-spacing bg-white relative overflow-hidden">
            <div className="section-container relative z-10">
              <div className="text-center mb-20 space-y-6">
                <p className="uppercase tracking-[0.4em] text-sm text-[#487307] font-semibold">
                  Port Connections
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-slate-900 leading-tight">
                  Premium London <br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                    Cruise Transfers
                  </span>
                </h2>
                <p className="max-w-3xl mx-auto text-slate-600 font-inter text-lg md:text-xl">
                  Reliable door-to-dock chauffeur services connecting London and its airports to all major UK cruise terminals.
                </p>
              </div>

              {/* Hero Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[40px] overflow-hidden mb-20 shadow-2xl h-[400px] md:h-[500px]"
              >
                <img
                  src="/services/cruise-port-transfer-hero.png"
                  alt="London Cruise Port Transfers"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="space-y-2">
                    <p className="text-white/80 font-inter uppercase tracking-widest text-sm">Luxury Port Arrivals</p>
                    <h3 className="text-white text-3xl font-montserrat font-bold">Door-to-Deck Excellence</h3>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl flex items-center gap-4 text-white">
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-widest opacity-70">Fleet Standard</p>
                      <p className="text-sm font-bold">Mercedes S-Class New Model</p>
                    </div>
                    <Ship className="w-8 h-8 text-[#8fe00f]" />
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {CRUISE_PORTS.map((port, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    key={index}
                    className="group flex flex-col h-full bg-[#f8fafc] rounded-3xl p-8 hover:bg-white hover:shadow-[0_40px_100px_rgba(72,115,7,0.12)] transition-all duration-500 border border-slate-100"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-[#487307] transition-colors duration-500">
                      <port.icon className="w-7 h-7 text-[#487307] group-hover:text-white transition-colors duration-500" />
                    </div>

                    <h3 className="text-xl font-montserrat font-bold text-slate-900 mb-4 group-hover:text-[#487307] transition-colors">
                      {port.name}
                    </h3>

                    <p className="text-slate-600 font-inter text-sm leading-relaxed flex-grow">
                      {port.description}
                    </p>

                    <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                      <button
                        onClick={() => navigate('/booking/select-car')}
                        className="text-xs font-semibold text-slate-900 uppercase tracking-widest group-hover:text-[#487307] transition-colors flex items-center gap-2"
                      >
                        Book Port <ArrowRight className="w-4 h-4" />
                      </button>
                      <div className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">VIP Concierge</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )
      }


      {/* ============================== */}
      {/* PRIVATE JET AIRPORTS (Specific to private-jet-chauffeur and private-jet) */}
      {/* ============================== */}
      {
        (id === "private-jet-chauffeur" || id === "private-jet") && (
          <section className="section-spacing bg-white relative overflow-hidden">
            <div className="section-container relative z-10">
              <div className="text-center mb-20 space-y-6">
                <p className="uppercase tracking-[0.4em] text-sm text-[#487307] font-semibold">
                  London Terminals
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-slate-900 leading-tight">
                  London’s Leading <br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                    Private Jet Airports
                  </span>
                </h2>
                <p className="max-w-3xl mx-auto text-slate-600 font-inter text-lg md:text-xl">
                  We provide seamless tarmac-side transfers and FBO arrivals across all major business aviation hubs in the capital.
                </p>
              </div>

              {/* Title Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[40px] overflow-hidden mb-20 shadow-2xl h-[400px] md:h-[500px]"
              >
                <img
                  src="/services/private-jet-airports-hero.png"
                  alt="London Private Jet Airports"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="space-y-2">
                    <p className="text-white/80 font-inter uppercase tracking-widest text-sm">Signature Flight Support</p>
                    <h3 className="text-white text-3xl font-montserrat font-bold">Unrivaled VIP Access</h3>
                  </div>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-xl">
                        <img src={`/services/private-jet-chauffeur-portrait.jpg`} alt="Chauffeur" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-[#487307] flex items-center justify-center text-white text-xs font-bold shadow-xl">
                      +15
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRIVATE_JET_AIRPORTS.map((airport, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    key={index}
                    className="group flex flex-col h-full bg-[#f8fafc] rounded-3xl p-10 hover:bg-white hover:shadow-[0_40px_100px_rgba(72,115,7,0.12)] transition-all duration-500 border border-slate-100"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-[#487307] transition-colors duration-500">
                      <airport.icon className="w-8 h-8 text-[#487307] group-hover:text-white transition-colors duration-500" />
                    </div>

                    <h3 className="text-2xl font-montserrat font-bold text-slate-900 mb-4 group-hover:text-[#487307] transition-colors">
                      {airport.name}
                    </h3>

                    <p className="text-slate-600 font-inter leading-relaxed flex-grow">
                      {airport.description}
                    </p>

                    <div className="mt-10 pt-8 border-t border-slate-200 flex items-center justify-between">
                      <button
                        onClick={() => navigate('/booking/select-car')}
                        className="text-sm font-semibold text-slate-900 uppercase tracking-widest group-hover:text-[#487307] transition-colors flex items-center gap-2"
                      >
                        Book Terminal <ArrowRight className="w-4 h-4" />
                      </button>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">24/7 FBO</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )
      }


      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#f1f3ff,_transparent_65%)]" />
        <div className="section-container relative space-y-12">
          <div className="text-center space-y-4">
            <p className="text-lg uppercase tracking-[0.4em] text-slate-500">Concierge essentials</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Everything you need before wheels roll
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 font-inter">
              Inspired by our About experience, this page adapts dynamically to the service selected while
              keeping the design language cohesive across Quickoo.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {coreHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-[28px] border border-slate-100 bg-white/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
              >
                <Sparkles className="h-6 w-6 text-gold mb-4" />
                <p className="text-lg font-semibold text-slate-900">{highlight.title}</p>
                <p className="text-sm text-slate-600 mt-3">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-[#fefeff] via-[#f2f5ff] to-[#fff4ec]">
        <div className="section-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-8">
            <p className="uppercase tracking-[0.4em] text-xl text-slate-500">Experience design</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-dark">
              Tailored {serviceName.toLowerCase()} journeys
            </h2>
            <p className="text-slate-600 font-inter">
              We obsess over sensory details, technology, and human touchpoints. Your service page mirrors
              the About aesthetic so guests feel continuity from storytelling to booking.
            </p>
            <div className="space-y-4">
              {getServicePillars(id).map(({ icon: Icon, title, copy }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm"
                >
                  <Icon className="h-10 w-10 text-gold" />
                  <div>
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p className="text-sm text-slate-600">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[36px] border border-white/60 bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.15)]">
            <div className="grid gap-6">
              {journeySteps.map((step, index) => (
                <div key={step.title} className="relative pl-10">
                  <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-dark text-white font-montserrat">
                    {index + 1}
                  </div>
                  <p className="text-lg font-semibold text-dark">{step.title}</p>
                  <p className="text-sm text-slate-600">{step.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-gold/30 bg-[#fff6e8] p-6 text-sm text-slate-600 font-inter">
              <p className="uppercase tracking-[0.4em] text-xs text-gold mb-2">Quickoo radius</p>
              <p>
                Available across all London airports, major cities, and partner cities, with global dispatch via Quickoo Collective.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white min-h-[600px] md:min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="/fleet/BusinessClass-2.png"
            alt="Premium luxury vehicle"
            className="w-full h-full object-cover object-center opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        </div>

        <div className="relative">
          <div className="section-container grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center py-16 md:py-28">
            <div className="space-y-6">
              <div className="inline-block">
                <p className="uppercase tracking-[0.4em] text-sm font-semibold text-dark/80 bg-dark/5 px-4 py-2 rounded-full">
                  Concierge Insights
                </p>
              </div>
              <h3 className="text-3xl sm:text-4xl font-montserrat font-semibold leading-tight text-dark">
                Premium comfort meets precision planning
              </h3>
              <p className="text-lg text-dark/70 leading-relaxed">
                Experience the perfect balance of luxury and reliability. Our concierge team ensures every detail exceeds expectations, making your journey memorable from start to finish.
              </p>
              {/* <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-dark/10 flex items-center justify-center">
                  <MapPin className="text-dark" size={20} />
                </div>
                <div>
                  <p className="font-montserrat text-lg font-semibold text-dark">Selena Ward</p>
                  <p className="text-sm text-dark/60 font-inter">Head of Concierge Experience</p>
                </div>
              </div> */}


            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-[#fff1e2] via-[#fff8fb] to-white">
        <div className="section-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.4em] text-sm text-dark/70">Ready to begin?</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-dark">
              Let’s plan your next {serviceName.toLowerCase()} journey
            </h2>
            <p className="text-gray-700 font-inter">
              Our concierge team replies within 2 hours with availability, vehicle requirements, and custom amenities.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Instant WhatsApp concierge", "Secure payment links"].map(
                (item) =>
                  item === "Instant WhatsApp concierge" ? (
                    <a
                      key={item}
                      href="https://wa.me/442035761617"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-dark/10 bg-white/80 px-4 py-3 text-sm font-semibold text-dark hover:border-gold hover:text-gold transition-colors cursor-pointer text-center block"
                    >
                      {item}
                    </a>
                  ) : (
                    <div
                      key={item}
                      className="rounded-2xl border border-dark/10 bg-white/80 px-4 py-3 text-sm font-semibold text-dark text-center"
                    >
                      {item}
                    </div>
                  ),
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/booking/select-car')}
                className="luxury-button-gold px-8 py-4 text-lg shadow-lg shadow-gold/30"
              >
                Reserve now
              </button>
              <a
                href="https://wa.me/442035761617"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-dark/20 px-8 py-4 text-lg font-semibold text-dark hover:border-gold hover:text-gold transition inline-flex items-center justify-center"
              >
                Talk to Quickoo
              </a>
            </div>
          </div>
          <div className="rounded-[32px] border border-dark/10 bg-white/80 p-8 shadow-2xl text-dark space-y-5">
            <p className="uppercase tracking-[0.4em] text-xs text-gray-500">Quickoo information</p>
            <div className="space-y-3">
              <p className="text-xl font-semibold flex items-start gap-2">
                <MapPin className="text-gold" />
                450 Bath Road, Longford, London Heathrow, UB70EB
              </p>
              <p className="text-lg font-montserrat">+44 20 3576 1617</p>
              <p className="text-slate-600 font-inter">Direct line to our 24/7 experience Concierge desk.</p>
            </div>

          </div>
        </div>
      </section>
    </div >
  );
}
