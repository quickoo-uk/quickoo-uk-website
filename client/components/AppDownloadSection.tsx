import { Apple, Play, Download, Smartphone, Shield, Bell, Sparkles } from "lucide-react";

const FEATURE_POINTS = [
  "Real-time chauffeur tracking + biometrics",
  "Schedule, edit, and duplicate itineraries",
  "Encrypted wallet & multiple payments",
  "Instant concierge chat 24 / 7",
  "Exclusive upgrades + surprise perks",
];

export const AppDownloadSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaff] to-[#fff5ec]">
      {/* Background gradients */}
      <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-gold/15 blur-[120px]" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a5c9ff]/20 blur-[140px]" />

      {/* Animated SVG */}
      <svg
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 text-gold/20 animate-[spin_26s_linear_infinite]"
        viewBox="0 0 160 160"
        aria-hidden
      >
        <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="80" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm shadow-[#c9d6ff]/40">
                <Sparkles className="h-4 w-4 text-[#7b5dff]" />
                <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                  Mobile HQ
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
                A control tower for{" "}
                <span className="bg-gradient-to-r from-[#1a1431] via-[#40206c] to-[#806af1] bg-clip-text text-transparent">
                  every ride in your pocket.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-inter">
                Manage chauffeurs, share live ETAs, unlock surprise upgrades, and
                stay in sync with your concierge pod—all from the Quickoo app.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex w-full items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#1a1230] via-[#3f1c6e] to-[#806af1] px-6 py-4 text-white shadow-lg shadow-[#3f1c6e]/35 transition hover:opacity-90 hover:scale-[1.02] sm:w-auto sm:justify-start"
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
                className="flex w-full items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-dark shadow-sm transition hover:border-[#7b5dff] hover:text-[#7b5dff] sm:w-auto sm:justify-start"
              >
                <Play className="h-6 w-6 text-[#7b5dff]" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    Get it on
                  </p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
                <Download className="h-5 w-5 text-[#7b5dff]" />
              </a>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur">
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                <Smartphone className="h-4 w-4 text-[#7b5dff]" />
                App Highlights
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {FEATURE_POINTS.map((feature) => (
                  <p key={feature} className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#7b5dff]" />
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-3xl bg-gradient-to-r from-[#f3d6ff]/30 via-[#9fd4ff]/20 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-[#1a1230] via-[#3f1c6e] to-[#806af1] text-white shadow-[0_30px_90px_rgba(15,23,42,0.25)]">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
                alt="Quickoo app preview"
                className="h-full w-full object-cover opacity-30"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-black/10" />
              <div className="relative space-y-6 p-8">
                <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                  <Shield className="h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      Secure wallets
                    </p>
                    <p className="text-sm font-semibold font-montserrat">
                      Face ID + biometric ride approvals.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                  <Bell className="h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      Live alerts
                    </p>
                    <p className="text-sm font-semibold font-montserrat">
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
