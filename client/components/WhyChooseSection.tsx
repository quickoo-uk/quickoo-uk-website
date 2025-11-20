import { Shield, DollarSign, Crown, Users, Award, Clock } from "lucide-react";

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

export const WhyChooseSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-white via-brand-soft/40 to-white">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 mb-16">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark text-white text-xs font-semibold tracking-[0.3em]">
              WHY QUICKOO
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-dark">
              A concierge-level chauffeur partner obsessed with details.
            </h2>
            <p className="text-base sm:text-lg font-inter text-gray-600">
              We blend hospitality, logistics, and technology to deliver journeys
              that feel effortless. Every itinerary is tracked in real time,
              every chauffeur is briefed on your preferences, and every vehicle
              is staged with signature amenities.
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              {METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-4 shadow-lg shadow-black/5 ring-1 ring-black/5"
                  >
                    <div className="rounded-xl bg-dark/90 p-3 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-montserrat font-bold text-dark">
                        {metric.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-gold/30 via-purple-400/20 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/20 ring-1 ring-black/10">
              <img
                src="https://images.unsplash.com/photo-1472220625704-91e1462799b2?w=1200&h=900&fit=crop"
                alt="Chauffeur opening car door"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 shadow-xl">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  Concierge Snapshot
                </p>
                <p className="text-dark font-montserrat text-lg font-semibold">
                  Pre-arrival checks, route notes, and vehicle telemetry sent the
                  moment your chauffeur departs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl shadow-black/5 ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-x-10 -top-16 h-32 rounded-full blur-3xl bg-gradient-to-r ${feature.accent} opacity-70`}
                />
                <div className="relative flex items-center gap-4 mb-6">
                  <div
                    className={`rounded-2xl bg-gradient-to-r ${feature.accent} p-4 text-white shadow-lg shadow-black/20`}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
