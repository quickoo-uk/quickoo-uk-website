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
    <section className="section-spacing bg-gradient-to-b from-white via-brand-soft/30 to-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-dark px-4 py-2 text-xs font-semibold tracking-[0.3em] text-white">
                ABOUT QUICKOO
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark">
                From boutique chauffeurs to a global concierge fleet.
              </h2>
              <p className="text-lg text-gray-600">
                We are a collective of hospitality experts, logisticians, and
                technologists committed to making ground travel feel like a
                five-star ritual—no matter the route.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl bg-white/90 p-6 shadow-xl shadow-black/5 ring-1 ring-black/5"
                >
                  <p className="text-4xl font-montserrat font-bold text-dark">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-6 rounded-3xl bg-white/80 p-6 shadow-inner shadow-black/5">
              <div className="flex items-center gap-3 text-dark">
                <Sparkles className="h-5 w-5 text-gold" />
                <p className="font-montserrat text-lg font-semibold">
                  Built on radical hospitality & real-time intelligence.
                </p>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Each booking activates a concierge pod that syncs vehicle prep,
                chauffeur briefings, city intelligence, and client preferences.
                The result? Doors open exactly when you arrive—never earlier,
                never late.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                <span className="rounded-full bg-dark/5 px-3 py-1 text-dark">
                  Biometrics Cleared
                </span>
                <span className="rounded-full bg-dark/5 px-3 py-1 text-dark">
                  Concierge On-Call
                </span>
                <span className="rounded-full bg-dark/5 px-3 py-1 text-dark">
                  Sustainability Pledge
                </span>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 rounded-full bg-dark px-10 py-4 font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-gold hover:text-dark"
            >
              Learn Our Full Story
              <TrendingUp className="h-5 w-5" />
            </Link>
          </div>

          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/20 ring-1 ring-black/10">
              <img
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&h=900&fit=crop"
                alt="Chauffeur welcoming guests"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-white/95 p-4 shadow-xl">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Concierge Notes
                  </p>
                  <p className="text-sm font-semibold text-dark">
                    Chauffeur briefing sent with venue layout & VIP protocol.
                  </p>
                </div>
                <ShieldCheck className="h-6 w-6 text-gold" />
              </div>
            </div>

            <div className="rounded-3xl bg-white/90 p-6 shadow-xl shadow-black/5 ring-1 ring-black/5">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="h-6 w-6 text-gold" />
                <p className="font-montserrat text-lg font-semibold text-dark">
                  Our journey highlights
                </p>
              </div>
              <div className="space-y-5">
                {TIMELINE.map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="font-montserrat text-sm font-bold text-gold">
                        {item.year}
                      </span>
                      <span className="h-full w-px bg-gradient-to-b from-gold/60 to-transparent" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-dark">
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
