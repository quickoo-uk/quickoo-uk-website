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
    <section className="section-spacing relative bg-gradient-to-b from-indigo-50/20 via-white to-purple-50/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 text-xs font-semibold tracking-[0.3em] text-indigo-700 border border-indigo-200/50 shadow-sm">
                MOBILE HQ
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
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
                className="flex w-full items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 text-white shadow-xl shadow-purple-500/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-purple-500/40 sm:w-auto sm:justify-start"
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
                className="flex w-full items-center justify-between gap-4 rounded-2xl border-2 border-purple-200 bg-white px-6 py-4 text-purple-700 shadow-lg shadow-purple-100/30 transition-all hover:-translate-y-0.5 hover:border-purple-400 hover:bg-purple-50 sm:w-auto sm:justify-start"
              >
                <Play className="h-6 w-6 text-purple-600" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    Get it on
                  </p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
                <Download className="h-5 w-5 text-purple-600" />
              </a>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-white to-indigo-50/30 p-6 shadow-lg shadow-purple-100/30 ring-1 ring-purple-100/50">
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-purple-600">
                <Smartphone className="h-4 w-4 text-purple-600" />
                App Highlights
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {FEATURE_POINTS.map((feature) => (
                  <p key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-3xl bg-gradient-to-r from-purple-200/40 via-indigo-200/30 to-transparent blur-3xl animate-pulse" />
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white shadow-2xl shadow-purple-500/30 ring-1 ring-purple-200/50">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=900&fit=crop"
                alt="Quickoo app preview"
                className="h-full w-full object-cover opacity-40"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 via-purple-600/60 to-indigo-700/40" />
              <div className="relative space-y-6 p-8">
                <div className="flex items-center gap-3 rounded-2xl bg-white/20 backdrop-blur-sm p-4 border border-white/30">
                  <Shield className="h-5 w-5 text-yellow-300" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                      Secure wallets
                    </p>
                    <p className="text-sm font-semibold">
                      Face ID + biometric ride approvals.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/20 backdrop-blur-sm p-4 border border-white/30">
                  <Bell className="h-5 w-5 text-yellow-300" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/80">
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
