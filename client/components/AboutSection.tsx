import { Link } from "react-router-dom";
import { TrendingUp, Sparkles, ShieldCheck, Compass } from "lucide-react";

const STATS = [
  { value: "500+", label: "Chauffeurs On Call" },
  { value: "65", label: "Global Cities" },
  { value: "1.2M", label: "Annual Miles" },
  { value: "97%", label: "5★ Ratings" },
];

const TIMELINE = [
  {
    year: "2015",
    title: "Founded in London",
    detail: "Bespoke chauffeur studio crafted for C-suite travel planners.",
  },
  {
    year: "2019",
    title: "Global Expansion",
    detail: "Added concierge-partner network across North America & EU.",
  },
  {
    year: "2024",
    title: "Smart Mobility Suite",
    detail: "Launched predictive dispatch and AI itinerary briefing.",
  },
];

export const AboutSection = () => {
  return (
    <section className="section-spacing relative bg-gradient-to-b from-indigo-50/20 via-white to-purple-50/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 text-xs font-semibold tracking-[0.3em] text-indigo-700 border border-indigo-200/50 shadow-sm">
                ABOUT QUICKOO
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
                From boutique chauffeurs to a global concierge fleet.
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                We are a collective of hospitality experts, logisticians, and
                technologists committed to making ground travel feel like a
                five-star ritual—no matter the route.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl bg-white p-6 shadow-lg shadow-purple-100/30 ring-1 ring-purple-100/50 hover:shadow-xl transition-shadow"
                >
                  <p className="text-4xl font-montserrat font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-6 rounded-3xl bg-gradient-to-br from-white to-purple-50/30 p-6 shadow-lg shadow-purple-100/20 ring-1 ring-purple-100/50">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <p className="font-montserrat text-lg font-semibold text-gray-900">
                  Built on radical hospitality & real-time intelligence.
                </p>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Each booking activates a concierge pod that syncs vehicle prep,
                chauffeur briefings, city intelligence, and client preferences.
                The result? Doors open exactly when you arrive—never earlier,
                never late.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em]">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-purple-700 border border-purple-200/50">
                  Biometrics Cleared
                </span>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-700 border border-indigo-200/50">
                  Concierge On-Call
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-purple-700 border border-purple-200/50">
                  Sustainability Pledge
                </span>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5"
            >
              Learn Our Full Story
              <TrendingUp className="h-5 w-5" />
            </Link>
          </div>

          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-purple-200/30 ring-1 ring-purple-100/50">
              <img
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&h=900&fit=crop"
                alt="Chauffeur welcoming guests"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-xl border border-purple-100/50">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-purple-600 font-semibold">
                    Concierge Notes
                  </p>
                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    Chauffeur briefing sent with venue layout & VIP protocol.
                  </p>
                </div>
                <ShieldCheck className="h-6 w-6 text-purple-600" />
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-white to-indigo-50/30 p-6 shadow-lg shadow-purple-100/30 ring-1 ring-purple-100/50">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="h-6 w-6 text-purple-600" />
                <p className="font-montserrat text-lg font-semibold text-gray-900">
                  Our journey highlights
                </p>
              </div>
              <div className="space-y-5">
                {TIMELINE.map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="font-montserrat text-sm font-bold text-purple-600">
                        {item.year}
                      </span>
                      <span className="h-full w-px bg-gradient-to-b from-purple-400/60 to-transparent" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
