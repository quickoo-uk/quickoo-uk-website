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
  "airport-transfers":
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80",
  "hourly-hire":
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=2000&q=80",
  "city-to-city":
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=2000&q=80",
  wedding:
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=2000&q=80",
  business:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80",
  "corporate-travel":
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80",
  events:
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=80",
  "special-events":
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=80",
  "private-jet":
    "https://images.unsplash.com/photo-1540949135379-59e5f2d35d34?auto=format&fit=crop&w=2000&q=80",
  "city-tours":
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80",
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
      "Chauffeurs trained in luxury etiquette, bilingual support, and curated onboard touches.",
  },
  {
    title: "Transparent pricing",
    description:
      "No hidden fees, upfront rate cards, and custom itineraries sent within 15 minutes.",
  },
];

const servicePillars = [
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

const curatedAddOns = [
  { label: "Event command center", value: "From £280 / hr" },
  { label: "Security liaison", value: "From £350 / day" },
  { label: "Private route curator", value: "Included on multi-city itineraries" },
  { label: "Brand integrations", value: "Custom proposal" },
];

const heroWorkingImage =
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80";

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
                Bespoke {serviceName.toLowerCase()}{" "}
                <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                  without compromise.
                </span>
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
              <button className="rounded-full border border-slate-200 px-8 py-3 text-base font-semibold text-slate-900 hover:border-[#2a4204] hover:text-[#2a4204] transition">
                Download spec sheet
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {trustMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/60 bg-white/85 px-6 py-4 text-center backdrop-blur shadow-[0_25px_70px_rgba(72,115,7,0.18)]"
                >
                  <p className="text-2xl font-montserrat text-[#487307]">{metric.value}</p>
                  <p className="text-xs tracking-[0.3em] uppercase text-slate-500">{metric.label}</p>
                </div>
              ))}
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
                  Dedicated journey designer, real-time driver comms, and curated onboard amenities.
                </p>
                <div className="grid grid-cols-3 gap-3 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
                  <span>Wifi ready</span>
                  <span>Hydration</span>
                  <span>Climate suite</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 hidden sm:block rounded-[28px] border border-white/60 bg-white/90 p-4 shadow-xl">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={heroWorkingImage}
                    alt="Quickoo concierge at work"
                    className="h-28 w-40 object-cover"
                  />
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.4em] text-slate-500">Ops in action</p>
                <p className="text-sm font-semibold text-slate-800">Live itinerary updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfaff] via-[#f1f5ff] to-[#fff5ec]" />
        <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-gold/15 blur-[120px]" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a5c9ff]/20 blur-[140px]" />
        <svg
          className="pointer-events-none absolute left-10 top-10 h-32 w-32 text-gold/30 animate-[spin_24s_linear_infinite]"
          viewBox="0 0 160 160"
          aria-hidden
        >
          <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="80" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </svg>

        <div className="section-container relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.4em] text-xs text-slate-500">Operations studio</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-dark">
              White-glove coordination that feels calm and modern
            </h2>
            <p className="text-slate-600 font-inter">
              Our concierge team works inside a bright, hospitality-inspired studio that mirrors the light
              gradients of this page. Your itinerary is monitored by humans and technology in harmony.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Live ops dashboard & sentiment tracking",
                "Instant escalation routes with regional leads",
                "Calm, white-theme UI that clients can share",
                "Motion cues for status changes & approvals",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[36px] border border-white/60 bg-white/80 shadow-[0_35px_90px_rgba(15,23,42,0.1)] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              alt="Quickoo operations team collaborating"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/80 px-5 py-4 text-sm text-slate-600 font-inter shadow-lg backdrop-blur">
              <p className="uppercase tracking-[0.4em] text-xs text-slate-500">Working live</p>
              <p className="text-lg font-montserrat text-dark">Ops floor monitors {serviceName}</p>
              <p>Synchronized callouts, ETA nudges, and guest updates for every journey.</p>
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
              {servicePillars.map(({ icon: Icon, title, copy }) => (
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

      <section className="section-spacing bg-gradient-to-b from-white via-[#f7f8ff] to-white">
        <div className="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="rounded-[32px] border border-slate-100 bg-gradient-to-b from-white via-white to-[#f8fafc] p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] space-y-6">
            <p className="uppercase tracking-[0.4em] text-sm text-slate-500">
              Tailored add-ons
            </p>
            <h3 className="text-3xl font-montserrat font-semibold text-dark">
              Extend your {serviceName.toLowerCase()} suite
            </h3>
            <p className="text-slate-600 font-inter">
              Layer concierge services that mirror event mobility or corporate programs featured on our About page.
            </p>
            <div className="grid gap-4">
              {curatedAddOns.map((addon) => (
                <div
                  key={addon.label}
                  className="rounded-2xl border border-white/40 bg-white/80 px-5 py-4 flex flex-col"
                >
                  <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    {addon.label}
                  </span>
                  <span className="text-lg font-montserrat text-dark">{addon.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#0a1a02]/10 bg-gradient-to-br from-[#0a1a02] via-[#152905] to-[#2a4204] text-white p-10 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80"
              alt="Quickoo chauffeur"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
              loading="lazy"
            />
            <div className="relative space-y-6">
              <p className="uppercase tracking-[0.4em] text-sm text-white/70">Concierge insights</p>
              <h3 className="text-3xl font-montserrat font-semibold leading-tight">
                “The new {serviceName.toLowerCase()} hub mirrors our About page and gives guests confidence from the first scroll.”
              </h3>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/15 flex items-center justify-center">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <p className="font-montserrat text-lg">Selena Ward</p>
                  <p className="text-sm text-white/70 font-inter">Head of Concierge Experience</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6 space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Insights</p>
                <p className="text-2xl font-montserrat">4.9 ★ average service review</p>
                <p className="text-white/70">
                  Verified guests cite clarity, mood-rich UI, and quick concierge response times as key decision drivers.
                </p>
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
            <div className="rounded-2xl border border-dark/5 bg-dark text-white px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Response time</p>
                <p className="text-2xl font-montserrat">12 min avg</p>
              </div>
              <ArrowRight className="text-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
