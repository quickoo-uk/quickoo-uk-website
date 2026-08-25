import { ArrowLeft, CheckCircle2, Clock3, Mail, Phone } from "lucide-react";

import {
  LANDING_PHONE,
  LANDING_PHONE_DISPLAY,
  LandingShell,
} from "@/components/landing/LandingShell";
import { trackAdsEvent } from "@/lib/adsConversion";

export default function GoogleAdsThankYou() {
  return (
    <LandingShell
      title="Thank You for Your Inquiry | Quickoo"
      description="Your chauffeur inquiry has been received by the Quickoo concierge team."
      showPrimaryActions={false}
    >
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#0a1a02] px-4 py-16 sm:px-6 sm:py-24">
        <img
          src="/home/hero-premium-travel-1.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a02]/75 to-[#0a1a02]" />

        <div className="relative mx-auto w-full max-w-2xl rounded-3xl border border-white/15 bg-white p-7 text-center shadow-[0_35px_100px_rgba(0,0,0,0.45)] sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#487307]/10 sm:h-20 sm:w-20">
            <CheckCircle2 className="h-9 w-9 text-[#487307] sm:h-11 sm:w-11" />
          </div>

          <h1 className="mt-6 font-montserrat text-3xl font-extrabold text-[#0a1a02] sm:text-4xl">
            Thank you. Your inquiry is with our team.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            A Quickoo concierge specialist will review your journey details and contact you
            shortly.
          </p>

          <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
              <Clock3 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#487307]" />
              <div>
                <p className="text-sm font-bold text-slate-900">What happens next</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  We will confirm availability and discuss the arrangements with you.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
              <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#487307]" />
              <div>
                <p className="text-sm font-bold text-slate-900">Need to add details?</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Email us at info@quickoo.co.uk and mention your name.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/lp/chauffeur"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-[#487307] hover:text-[#487307]"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to landing page
            </a>
            <a
              href={`tel:${LANDING_PHONE}`}
              onClick={() => trackAdsEvent("lp_call_click", { placement: "thank_you" })}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#487307] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3a5d06]"
            >
              <Phone className="h-4 w-4" />
              Call {LANDING_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </LandingShell>
  );
}
