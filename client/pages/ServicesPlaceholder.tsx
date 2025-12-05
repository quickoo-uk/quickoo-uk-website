import { useParams } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Star,
  CheckCircle2,
  Crown,
  MapPin,
  Sparkles,
} from "lucide-react";

const SERVICE_IMAGES: Record<string, string> = {
  "airport-transfers": "/services/airport-transfer-hero.jpg",
  "hourly-hire": "/services/hourly-hire-hero.jpg",
  "city-to-city": "/services/city-to-city-hero.jpg",
  wedding: "/services/wedding-hero.jpg",
  business: "/services/business-hero.jpg",
  "corporate-travel": "/services/business-hero.jpg",
  events: "/services/events-hero.jpg",
  "special-events": "/services/events-hero.jpg",
  "private-jet": "/services/private-jet-hero.jpg",
  "city-tours": "/services/city-tours-hero.jpg",
  "private-jet-chauffeur": "/services/private-jet-hero.jpg",
  "london-cruise-transfer": "/services/london-cruise-transfer-hero.png",
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
      copy: "NDAs on file, elevated etiquette standards, and annual safety certifications.",
    },
    {
      icon: Star,
      title: "Luxury Guaranteed",
      copy: "Flagship fleet, ambient suites, refreshments, and fragrance libraries.",
    },
  ];

  // Add airport-specific premium feature as a 4th point
  if (serviceId === "airport-transfers") {
    basePillars.push({
      icon: Sparkles,
      title: "Your Schedule First",
      copy: "1 hour complimentary wait time with advanced flight monitoring.",
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
      "Personalized link with driver profile, vehicle telemetry, and real-time ETA adjustments.",
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

// Dynamic operations image based on service type
const getOperationsImage = (serviceId: string) => {
  const operationsImages: Record<string, string> = {
    "airport-transfers": "/services/airport-transfer-operations.jpg",
    "hourly-hire": "/services/hourly-hire-operations.jpg",
    "city-to-city": "/services/city-to-city-operations.jpg",
    wedding: "/services/wedding-operations.jpg",
    business: "/services/business-operations.jpg",
    "corporate-travel": "/services/business-operations.jpg",
    events: "/services/events-operations.jpg",
    "special-events": "/services/events-operations.jpg",
    "private-jet": "/services/private-jet-operations.jpg",
    "city-tours": "/services/city-tours-operations.jpg",
    "private-jet-chauffeur": "/services/private-jet-operations.jpg",
    "london-cruise-transfer": "/services/london-cruise-transfer-operations.png",
  };
  return operationsImages[serviceId] ?? "/services/business-operations.jpg";
};

const getTeamCollaborationImage = (serviceId: string) => {
  const teamImages: Record<string, string> = {
    "airport-transfers": "/services/airport-transfer-team-collaboration.jpg",
    "hourly-hire": "/services/hourly-hire-team-collaboration.jpg",
    "city-to-city": "/services/city-to-city-team-collaboration.jpg",
    wedding: "/services/wedding-team-collaboration.jpg",
    business: "/services/business-team-collaboration.jpg",
    "corporate-travel": "/services/business-team-collaboration.jpg",
    events: "/services/events-team-collaboration.jpg",
    "special-events": "/services/events-team-collaboration.jpg",
    "private-jet": "/services/private-jet-team-collaboration.jpg",
    "city-tours": "/services/city-tours-team-collaboration.jpg",
    "private-jet-chauffeur": "/services/private-jet-team-collaboration.jpg",
    "london-cruise-transfer": "/services/london-cruise-transfer-team-collaboration.png",
  };
  return teamImages[serviceId] ?? "/services/business-team-collaboration.jpg";
};

const getChauffeurPortraitImage = (serviceId: string) => {
  const portraitImages: Record<string, string> = {
    "airport-transfers": "/services/airport-transfer-chauffeur-portrait.jpg",
    "hourly-hire": "/services/hourly-hire-chauffeur-portrait.jpg",
    "city-to-city": "/services/city-to-city-chauffeur-portrait.jpg",
    wedding: "/services/wedding-chauffeur-portrait.jpg",
    business: "/services/business-chauffeur-portrait.jpg",
    "corporate-travel": "/services/business-chauffeur-portrait.jpg",
    events: "/services/events-chauffeur-portrait.jpg",
    "special-events": "/services/events-chauffeur-portrait.jpg",
    "private-jet": "/services/private-jet-chauffeur-portrait.jpg",
    "city-tours": "/services/city-tours-chauffeur-portrait.jpg",
    "private-jet-chauffeur": "/services/private-jet-chauffeur-portrait.jpg",
    "london-cruise-transfer": "/services/london-cruise-transfer-chauffeur-portrait.png",
  };
  return portraitImages[serviceId] ?? "/services/business-chauffeur-portrait.jpg";
};

export default function ServicesPlaceholder() {
  const { id } = useParams<{ id: string }>();

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
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm shadow-[#8fe00f]/40">
              <Sparkles className="h-4 w-4 text-[#487307]" />
              <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                {serviceName} by Quickoo
              </span>
            </div>
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
              <button className="rounded-full luxury-button-gold px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#0a1a02]/35 transition hover:scale-[1.02]">
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
                  Dedicated journey designer, real-time driver comms, and tailored onboard amenities.
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


      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#f1f3ff,_transparent_65%)]" />
        <div className="section-container relative space-y-12">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Concierge essentials</p>
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
            <p className="uppercase tracking-[0.4em] text-sm text-slate-500">Experience design</p>
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
              <p className="uppercase tracking-[0.4em] text-xs text-gold mb-2">Service radius</p>
              <p>
                Available across London, Manchester, Edinburgh, Birmingham and partner cities, with global
                dispatch via Quickoo Collective.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white min-h-[600px] md:min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="/fleet/BusinessClass.png"
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
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-dark/10 flex items-center justify-center">
                  <MapPin className="text-dark" size={20} />
                </div>
                <div>
                  <p className="font-montserrat text-lg font-semibold text-dark">Selena Ward</p>
                  <p className="text-sm text-dark/60 font-inter">Head of Concierge Experience</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-[#fff1e2] via-[#fff8fb] to-white">
        <div className="section-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.4em] text-sm text-dark/70">Ready to begin?</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-dark">
              Let’s design your next {serviceName.toLowerCase()} journey
            </h2>
            <p className="text-gray-700 font-inter">
              Our concierge team replies within 15 minutes with availability, vehicle pairings, and custom amenities.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Instant WhatsApp concierge", "Secure payment links", "Bespoke itineraries"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-dark/10 bg-white/80 px-4 py-3 text-sm font-semibold text-dark"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="luxury-button-gold px-8 py-4 text-lg shadow-lg shadow-gold/30">
                Reserve now
              </button>
              <button className="rounded-full border border-dark/20 px-8 py-4 text-lg font-semibold text-dark hover:border-gold hover:text-gold transition">
                Talk to concierge
              </button>
            </div>
          </div>
          <div className="rounded-[32px] border border-dark/10 bg-white/80 p-8 shadow-2xl text-dark space-y-5">
            <p className="uppercase tracking-[0.4em] text-xs text-gray-500">Concierge desk</p>
            <div className="space-y-3">
              <p className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="text-gold" />
                450 Bath Road, Longford, London Heathrow
              </p>
              <p className="text-lg font-montserrat">+44 20 3576 1617</p>
              <p className="text-slate-600 font-inter">Direct line to our 24/7 guest experience desk.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
