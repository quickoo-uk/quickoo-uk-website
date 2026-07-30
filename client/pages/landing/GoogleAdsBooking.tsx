import { useEffect } from "react";
import { ArrowLeft, CreditCard, Headphones, ShieldCheck } from "lucide-react";
import BookingWidgetLoader from "@/components/BookingWidgetLoader";
import { LandingShell } from "@/components/landing/LandingShell";
import { trackAdsEvent } from "@/lib/adsConversion";

/** Full booking flow widget — continues the quote started on the landing page. */
const SCRIPT_URL = "https://lf-grafana.logistifie.com/js/bundle_booking.js";

const REASSURANCE = [
  { icon: ShieldCheck, label: "Secure encrypted checkout" },
  { icon: CreditCard, label: "Fixed price — no hidden extras" },
  { icon: Headphones, label: "24/7 support before you travel" },
];

export default function GoogleAdsBooking() {
  useEffect(() => {
    trackAdsEvent("lp_booking_page_view");
  }, []);

  return (
    <LandingShell
      title="Complete Your Chauffeur Booking | Quickoo"
      description="Confirm your chauffeur booking with Quickoo. Fixed all-inclusive pricing, secure checkout and 24/7 support."
      quoteAnchor="/lp/chauffeur#quote"
    >
      <section className="border-b border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <a
            href="/lp/chauffeur"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-[#487307]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </a>
          <h1 className="mt-4 font-montserrat text-2xl font-extrabold text-[#0a1a02] sm:text-3xl">
            Complete your booking
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            Choose your vehicle, add your details and confirm. Your fare is fixed and includes
            meet &amp; greet, parking, tolls and waiting time.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            {REASSURANCE.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 text-sm font-medium text-[#0a1a02]">
                <Icon className="h-4 w-4 text-[#487307]" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
          <BookingWidgetLoader scriptUrl={SCRIPT_URL}>
            <booking-widget
              primarycolor="black"
              useractivestate="2"
              masteraccountid="7236263"
            />
          </BookingWidgetLoader>
        </div>
      </section>
    </LandingShell>
  );
}
