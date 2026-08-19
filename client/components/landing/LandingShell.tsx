import { Phone } from "lucide-react";
import { Helmet } from "react-helmet";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { trackAdsEvent } from "@/lib/adsConversion";
import { cn } from "@/lib/utils";

/**
 * Standalone chrome for the Google Ads landing funnel.
 *
 * Deliberately NOT the site `Layout`: no Navbar, no Footer, no menu, no
 * cross-links other than the logo (back to the main website) and the legal
 * pages Google Ads requires. Distraction-free = better Quality Score.
 */

export const LANDING_PHONE = "+447787368748";
export const LANDING_PHONE_DISPLAY = "+44 7787 368748";
export const LANDING_WHATSAPP = "447787368748";
export const MAIN_SITE_URL = "/";

const LOGO = "/images/logo-2.png";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  /** Anchor the header CTA scrolls to. */
  quoteAnchor?: string;
  className?: string;
};

export const LandingShell = ({
  children,
  title,
  description,
  quoteAnchor = "#quote",
  className,
}: Props) => {
  return (
    <div className={cn("flex min-h-screen w-full flex-col overflow-x-hidden bg-white font-inter", className)}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Paid landing page: crawlable for the Ads bot, kept out of the organic index
            so it never competes with the main site. Remove to index it. */}
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <LandingHeader quoteAnchor={quoteAnchor} />

      <main className="flex-grow pt-16 sm:pt-20">{children}</main>

      <LandingFooter />

      <WhatsAppButton
        className="bottom-[5.75rem] sm:bottom-6"
        onClick={() => trackAdsEvent("lp_whatsapp_click", { placement: "float" })}
      />

      {/* Mobile sticky conversion bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-stretch gap-2 border-t border-slate-200 bg-white/95 p-3 backdrop-blur-lg shadow-[0_-8px_30px_rgba(10,26,2,0.12)] sm:hidden">
        <a
          href={`tel:${LANDING_PHONE}`}
          onClick={() => trackAdsEvent("lp_call_click", { placement: "sticky_bar" })}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#487307]/30 bg-white px-4 py-3 text-sm font-semibold text-[#487307]"
        >
          <Phone className="h-4 w-4" />
          Call now
        </a>
        <a
          href={quoteAnchor}
          onClick={() => trackAdsEvent("lp_quote_start", { placement: "sticky_bar" })}
          className="flex flex-[1.3] items-center justify-center rounded-xl bg-[#487307] px-4 py-3 text-sm font-semibold text-white"
        >
          Get instant price
        </a>
      </div>
      <div className="h-[76px] sm:hidden" aria-hidden />
    </div>
  );
};

const LandingHeader = ({ quoteAnchor }: { quoteAnchor: string }) => (
  <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-[#efe9ff]/80 bg-white/95 backdrop-blur-lg shadow-[0_10px_40px_rgba(18,8,40,0.08)]">
    <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
      {/* Logo is the only route back to the main website */}
      <a href={MAIN_SITE_URL} className="flex flex-shrink-0 items-center" aria-label="Go to the Quickoo website">
        <img src={LOGO} alt="Quickoo" className="h-8 w-auto object-contain sm:h-10" />
      </a>

      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href={`tel:${LANDING_PHONE}`}
          onClick={() => trackAdsEvent("lp_call_click", { placement: "header" })}
          className="flex items-center gap-2 rounded-full border border-[#487307]/25 px-3 py-2 text-sm font-semibold text-[#0a1a02] transition hover:border-[#487307] hover:bg-[#487307]/5 sm:px-4"
        >
          <Phone className="h-4 w-4 text-[#487307]" />
          <span className="hidden sm:inline">{LANDING_PHONE_DISPLAY}</span>
          <span className="sm:hidden">Call</span>
        </a>
        <a
          href={quoteAnchor}
          onClick={() => trackAdsEvent("lp_quote_start", { placement: "header" })}
          className="hidden rounded-full bg-[#487307] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3a5d06] sm:inline-flex"
        >
          Get instant price
        </a>
      </div>
    </div>
  </header>
);

const LandingFooter = () => (
  <footer className="border-t border-slate-200 bg-[#0a1a02] py-10 text-slate-300">
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
      <div className="flex flex-col items-center gap-3 lg:items-start">
        <a href={MAIN_SITE_URL} aria-label="Go to the Quickoo website">
          <img src={LOGO} alt="Quickoo" className="h-9 w-auto object-contain brightness-0 invert" />
        </a>
        <p className="max-w-md text-sm text-slate-400">
          Licensed private hire chauffeur service. Airport transfers, corporate travel and
          hourly hire across London and the UK.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 text-sm lg:items-end">
        <a
          href={`tel:${LANDING_PHONE}`}
          onClick={() => trackAdsEvent("lp_call_click", { placement: "footer" })}
          className="text-base font-semibold text-white transition hover:text-[#a3e635]"
        >
          {LANDING_PHONE_DISPLAY}
        </a>
        <a href="mailto:info@quickoo.co.uk" className="text-slate-400 transition hover:text-white">
          info@quickoo.co.uk
        </a>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-slate-400">
          <a href="/privacy-policy" className="transition hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms-and-conditions" className="transition hover:text-white">
            Terms &amp; Conditions
          </a>
          <a href={MAIN_SITE_URL} className="transition hover:text-white">
            Main website
          </a>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Quickoo. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default LandingShell;
