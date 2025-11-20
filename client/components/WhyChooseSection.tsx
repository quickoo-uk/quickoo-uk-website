import { Shield, DollarSign, Crown, Users, Award, Clock } from "lucide-react";

const AnimatedCircle = () => (
  <svg
    className="absolute -top-10 -right-10 w-40 h-40 opacity-10"
    viewBox="0 0 200 200"
    fill="none"
  >
    <circle
      cx="100"
      cy="100"
      r="80"
      stroke="url(#circleGradient)"
      strokeWidth="2"
      className="animate-spin"
      style={{ animationDuration: "20s" }}
    />
    <defs>
      <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
  </svg>
);

const FEATURES = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Vetted chauffeurs, biometric access controls, and real-time vehicle monitoring.",
    badge: "ISO 39001",
    accent: "from-emerald-500 via-green-400 to-emerald-500",
    bgGradient: "from-emerald-50 to-green-50",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Smart routing + automated surge shielding keep every quote honest and upfront.",
    badge: "Live Quotes",
    accent: "from-sky-500 via-indigo-500 to-sky-500",
    bgGradient: "from-sky-50 to-indigo-50",
  },
  {
    icon: Crown,
    title: "Tailored Luxury Fleet",
    description:
      "From Maybach sedans to V-Class lounges, each ride includes Wi-Fi, refreshments, and concierge extras.",
    badge: "Curated Fleet",
    accent: "from-amber-500 via-orange-500 to-amber-500",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    icon: Users,
    title: "Elite Chauffeurs",
    description:
      "Hospitality-trained drivers fluent in multiple languages and versed in VIP protocol.",
    badge: "1% Hired",
    accent: "from-purple-500 via-fuchsia-500 to-purple-500",
    bgGradient: "from-purple-50 to-fuchsia-50",
  },
];

const METRICS = [
  { label: "Avg. response", value: "42 sec", icon: Clock },
  { label: "Customer NPS", value: "92", icon: Award },
];

export const WhyChooseSection = () => {
  return (
    <section className="section-spacing relative bg-gradient-to-b from-white via-purple-50/20 to-indigo-50/10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100/30 to-blue-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 mb-16">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-xs font-semibold tracking-[0.3em] border border-purple-200/50 shadow-sm">
              WHY QUICKOO
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent">
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
                    className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg shadow-purple-100/50 ring-1 ring-purple-100/50 backdrop-blur-sm"
                  >
                    <div className="rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 p-3 text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-montserrat font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        {metric.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-purple-200/40 via-indigo-200/30 to-transparent blur-3xl animate-pulse" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-purple-200/30 ring-1 ring-purple-100/50">
              <img
                src="https://images.unsplash.com/photo-1472220625704-91e1462799b2?w=1200&h=900&fit=crop"
                alt="Chauffeur opening car door"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-xl border border-purple-100/50">
                <p className="text-xs uppercase tracking-[0.25em] text-purple-600 font-semibold">
                  Concierge Snapshot
                </p>
                <p className="text-gray-900 font-montserrat text-lg font-semibold mt-1">
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
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50/50 p-8 shadow-lg shadow-purple-100/30 ring-1 ring-purple-100/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200/40"
              >
                <AnimatedCircle />
                <div
                  className={`absolute inset-x-10 -top-16 h-32 rounded-full blur-3xl bg-gradient-to-r ${feature.accent} opacity-20 group-hover:opacity-30 transition-opacity`}
                />
                <div className="relative flex items-center gap-4 mb-6">
                  <div
                    className={`rounded-2xl bg-gradient-to-r ${feature.accent} p-4 text-white shadow-lg shadow-black/10 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700 border border-purple-200/50">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
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
