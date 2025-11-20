import { Apple, Play, Download, Smartphone, Shield, Bell } from "lucide-react";

const FEATURE_POINTS = [
  "Real-time chauffeur tracking + biometrics",
  "Schedule, edit, and duplicate itineraries",
  "Encrypted wallet & multiple payments",
  "Instant concierge chat 24 / 7",
  "Exclusive upgrades + surprise perks",
];

export const AppDownloadSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-white via-brand-soft/40 to-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-dark px-4 py-2 text-xs font-semibold tracking-[0.3em] text-white">
                MOBILE HQ
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-dark">
                A control tower for every ride in your pocket.
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Manage chauffeurs, share live ETAs, unlock surprise upgrades, and
                stay in sync with your concierge pod—all from the Quickoo app.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex w-full items-center justify-between gap-4 rounded-2xl bg-dark px-6 py-4 text-white shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-gold hover:text-dark sm:w-auto sm:justify-start"
              >
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.3em]">Download on</p>
                  <p className="text-lg font-semibold">App Store</p>
                </div>
                <Download className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex w-full items-center justify-between gap-4 rounded-2xl border border-dark/20 bg-white px-6 py-4 text-dark shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:border-gold sm:w-auto sm:justify-start"
              >
                <Play className="h-6 w-6 text-gold" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    Get it on
                  </p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
                <Download className="h-5 w-5 text-gold" />
              </a>
            </div>

            <div className="rounded-3xl bg-white/90 p-6 shadow-xl shadow-black/5 ring-1 ring-black/5">
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                <Smartphone className="h-4 w-4 text-gold" />
                App Highlights
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {FEATURE_POINTS.map((feature) => (
                  <p key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-3xl bg-gradient-to-r from-gold/30 via-purple-400/20 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl bg-dark text-white shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=900&fit=crop"
                alt="Quickoo app preview"
                className="h-full w-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/20" />
              <div className="relative space-y-6 p-8">
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <Shield className="h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      Secure wallets
                    </p>
                    <p className="text-sm font-semibold">
                      Face ID + biometric ride approvals.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <Bell className="h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      Live alerts
                    </p>
                    <p className="text-sm font-semibold">
                      Flight monitoring and chauffeur proximity pings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
