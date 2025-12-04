import { Check, Crown, Shield, Sparkles } from "lucide-react";

const hourlyPackages = [
  {
    label: "City Executive",
    rate: "$55",
    badge: "Best Value",
    description: "Perfect for business meetings and inner-city hops.",
    items: ["Mercedes E-Class", "Complimentary water", "4 passengers"],
  },
  {
    label: "Premium Hourly",
    rate: "$90",
    description: "For VIP guests who expect silence and service.",
    items: ["BMW 7 Series", "Priority driver", "Aromatherapy cabin"],
  },
  {
    label: "Elite Signature",
    rate: "$145",
    description: "Ultra-luxury vehicles and concierge-level care.",
    items: [
      "Mercedes-Maybach",
      "Dedicated concierge",
      "On-board refreshments",
    ],
  },
];

const transferMatrix = [
  { label: "City Airport", sedan: "$65", suv: "$95", van: "$120" },
  { label: "International Hub", sedan: "$95", suv: "$135", van: "$170" },
  { label: "Regional Airport", sedan: "$55", suv: "$80", van: "$110" },
];

const cityRoutes = [
  {
    route: "City Center → Downtown",
    distance: "25 km",
    price: "$85",
    duration: "45 min",
  },
  {
    route: "Financial District → Tech Valley",
    distance: "65 km",
    price: "$195",
    duration: "70 min",
  },
  {
    route: "City → Seaside Retreat",
    distance: "120 km",
    price: "$340",
    duration: "2 hrs",
  },
  {
    route: "Cross-Border Charter",
    distance: "240 km",
    price: "$640",
    duration: "4 hrs",
  },
];

export default function PricingPage() {
  return (
    <div className="w-full bg-[radial-gradient(circle_at_top,_#fefbf4,_#f4f6fb)]">
      <section className="relative overflow-hidden pt-24 pb-16 sm:pb-20 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fef5df] via-transparent to-white" />

        <svg
          className="pointer-events-none absolute -top-16 -right-10 w-64 opacity-40 animate-[spin_20s_linear_infinite]"
          viewBox="0 0 200 200"
          aria-hidden
        >
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9D976" />
              <stop offset="100%" stopColor="#F39F86" />
            </linearGradient>
          </defs>
          <path
            d="M55,-61.3C69.4,-48.8,78.8,-30.5,79.4,-11.5C79.9,7.5,71.6,27.1,59.2,42.4C46.9,57.8,30.4,68.9,10.6,76.3C-9.2,83.7,-32.4,87.4,-50.2,78C-67.9,68.6,-80.2,46.1,-83.3,23.2C-86.3,0.4,-80.3,-23.1,-67.4,-39.4C-54.6,-55.7,-34.9,-64.9,-15,-70.3C4.9,-75.7,24.8,-77.8,40.4,-70.4C56,-63,67.3,-46.7,55,-61.3Z"
            fill="url(#heroGradient)"
          />
        </svg>

        <div className="section-container relative z-10 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-dark">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/80 px-4 py-2 font-inter text-xs uppercase tracking-[0.2em] text-gold shadow-sm shadow-gold/30">
              <Sparkles className="h-4 w-4 text-gold" />
              Transparent luxury pricing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold leading-[1.05] text-dark">
              Bespoke chauffeur pricing,
              <span className="bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
                {" "}
                reimagined for 2025.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground font-inter max-w-2xl">
              Crafted for discerning travelers who value elegance, predictability, and curated service.
              Every kilometer is accounted for with effortless clarity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="luxury-button-gold px-10 py-3 text-base sm:text-lg shadow-lg shadow-gold/40">
                Explore Packages
              </button>
            
            </div>
           
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white via-white/60 to-white/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="/pricing/pricing-hero-chauffeur.jpg"
                  alt="Chauffeur preparing luxury vehicle"
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="font-montserrat text-lg text-dark">Concierge Ready</p>
                  <Shield className="text-gold" />
                </div>
                <div className="rounded-2xl border border-gold/30 bg-[#fff9ef] px-5 py-4 font-inter">
                  <p className="text-sm text-gray-500 uppercase tracking-[0.3em]">
                    live availability
                  </p>
                  <p className="text-2xl font-montserrat text-dark">
                    22 chauffeurs on standby
                  </p>
                </div>
                <p className="text-sm text-gray-500 font-inter">
                  Real-time fleet telemetry updates every 30 seconds.
                </p>
              </div>
            </div>

            <svg
              className="absolute -bottom-6 -left-8 h-32 w-32 text-gold/40 animate-[spin_14s_linear_infinite]"
              viewBox="0 0 100 100"
              aria-hidden
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="6 6"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 sm:py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#eef3ff,_transparent_60%)]" />
        <div className="section-container relative space-y-12">
          <div className="flex flex-col gap-4 text-center">
            <p className="font-inter uppercase tracking-[0.35em] text-xs text-gray-500">
              hourly elegance
            </p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-dark">
              Choose the cadence that matches your itinerary
            </h2>
            <p className="mx-auto max-w-2xl font-inter text-gray-600">
              Unlimited mileage within the booked window, premium service inclusions,
              and carbon-neutral rides.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {hourlyPackages.map((pkg, idx) => (
              <div
                key={pkg.label}
                className={`relative rounded-[1.75rem] border bg-white/90 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 ${idx === 1 ? "border-gold/60" : "border-slate-100"
                  }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-dark px-4 py-1 text-xs font-montserrat uppercase tracking-[0.3em] text-white shadow-lg">
                    {pkg.badge}
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-inter">
                      {pkg.label}
                    </p>
                    <p className="mt-3 text-4xl font-montserrat text-dark">
                      {pkg.rate}
                      <span className="text-base text-gray-500 font-inter">/hr</span>
                    </p>
                  </div>
                  <Crown className="h-8 w-8 text-gold" />
                </div>
                <p className="mt-4 text-sm text-gray-500 font-inter">{pkg.description}</p>
                <div className="mt-6 space-y-3">
                  {pkg.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-gray-700">
                      <Check className="h-4 w-4 text-gold" />
                      <span className="font-inter text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 w-full rounded-full border border-dark/10 py-3 font-montserrat text-sm uppercase tracking-[0.2em] text-dark hover:border-gold hover:text-gold transition">
                  Reserve slot
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-white via-[#f9fbff] to-[#fdf6ee]">
        <div className="section-container grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="font-inter uppercase tracking-[0.35em] text-xs text-gray-500">
              airport transfer suite
            </p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-dark">
              Guaranteed pickup windows & live flight monitoring
            </h2>
            <p className="font-inter text-gray-600">
              All transfer quotes include luggage handling, smart flight delay adjustments,
              and real-time driver tracking links sent to passengers.
            </p>
          
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/90 shadow-[0_30px_80px_rgba(15,23,42,0.1)] p-8">
            <div className="grid gap-6">
              {transferMatrix.map((route) => (
                <div
                  key={route.label}
                  className="rounded-2xl border border-slate-100 bg-gradient-to-r from-white via-white to-white/60 p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-montserrat text-dark text-lg">{route.label}</p>
                    <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-inter">
                      flat fare
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center font-montserrat">
                    <div>
                      <p className="text-sm text-gray-500">Sedan</p>
                      <p className="text-2xl text-dark">{route.sedan}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">SUV</p>
                      <p className="text-2xl text-dark">{route.suv}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Van</p>
                      <p className="text-2xl text-dark">{route.van}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28">
        <div className="section-container space-y-10">
          <div className="flex flex-col items-center text-center gap-4">
            <p className="font-inter uppercase tracking-[0.35em] text-xs text-gray-500">
              city-to-city clarity
            </p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-dark">
              Transparent distance-based pricing
            </h2>
            <p className="max-w-2xl font-inter text-gray-600">
              Each charter includes professional driver etiquette training,
              luxury hydration program, and adaptive climate controls.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <table className="min-w-full divide-y divide-slate-100">
              <thead className="bg-gradient-to-r from-dark to-slate-900 text-white">
                <tr>
                  {["Route", "Distance", "Duration", "Flat Price"].map((col) => (
                    <th
                      key={col}
                      className="px-6 py-4 text-left font-montserrat text-sm uppercase tracking-[0.35em]"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {cityRoutes.map((row, idx) => (
                  <tr
                    key={row.route}
                    className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                  >
                    <td className="px-6 py-4 font-inter text-dark">{row.route}</td>
                    <td className="px-6 py-4 font-inter text-gray-600">
                      {row.distance}
                    </td>
                    <td className="px-6 py-4 font-inter text-gray-600">
                      {row.duration}
                    </td>
                    <td className="px-6 py-4 font-montserrat text-xl text-gold">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pb-24">
        <div className="section-container relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-gold/30 bg-gradient-to-br from-[#fff2d8] via-white to-white p-10 shadow-xl">
            <h3 className="text-3xl font-montserrat font-bold text-dark">
              Need a custom itinerary?
            </h3>
            <p className="mt-3 text-gray-600 font-inter">
              Layer on bilingual chauffeurs, private security, multi-day convoys, yacht & jet transfers,
              or personal lifestyle management. Replies within 15 minutes.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                { label: "Security detail", value: "From $320 / day" },
                { label: "Event standby", value: "From $180 / hr" },
                { label: "Multi-city support", value: "By itinerary" },
                { label: "Fleet branding", value: "Custom quote" },
              ].map((addon) => (
                <div
                  key={addon.label}
                  className="rounded-2xl border border-white/40 bg-white/70 px-5 py-4 shadow-sm"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-inter">
                    {addon.label}
                  </p>
                  <p className="mt-2 font-montserrat text-lg text-dark">{addon.value}</p>
                </div>
              ))}
            </div>
            <button className="mt-10 w-full rounded-full bg-dark px-8 py-4 font-montserrat text-white shadow-lg shadow-dark/30 hover:bg-black transition">
              Design your experience
            </button>
          </div>

          <div className="relative rounded-[2rem] border border-white/20 bg-dark text-white overflow-hidden">
            <img
              src="/pricing/pricing-concierge-service.jpg"
              alt="Driver opening car door"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
              loading="lazy"
            />
            <div className="relative z-10 p-10 space-y-6">
              <p className="font-inter uppercase tracking-[0.35em] text-xs text-white/70">
                concierge insights
              </p>
              <h3 className="text-3xl font-montserrat font-bold leading-tight">
                “Every detail is visible before clients even ask.
                True hospitality starts with clarity.”
              </h3>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <Shield className="text-white" />
                </div>
                <div>
                  <p className="font-montserrat text-lg">Amelia Hart</p>
                  <p className="text-sm text-white/70 font-inter">
                    Director of Guest Experience
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6 font-inter">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  service pulse
                </p>
                <p className="mt-3 text-2xl font-montserrat">98.7% on-time arrivals</p>
                <p className="text-white/70">
                  Monitored in real-time with proactive rerouting and concierge SMS updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <svg
          className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 text-gold/20 animate-[spin_26s_linear_infinite]"
          viewBox="0 0 160 160"
          aria-hidden
        >
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="80"
            cy="80"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </section>
    </div>
  );
}
