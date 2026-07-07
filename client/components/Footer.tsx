import { Link, useLocation } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Send,
} from "lucide-react";
const logo = "/images/logo-2.png";
import { FLEET_TYPES } from "@shared/fleet";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
    fill="currentColor"
    stroke="none"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SERVICES = [
  "Airport Transfers",
  "Corporate travel",
  "Special events",
  "City Tours",
  "Private Jet Chauffeur",
  "London Cruise Transfer",
];

const PAGES = [
  // { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export const Footer = () => {
  const location = useLocation();
  const isLuxuryFleetPage = location.pathname.includes('luxury-fleet');

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0a1a02] via-[#152905] to-[#2a4204] text-white w-full max-w-full">
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top,_rgba(72,115,7,0.35),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      <div className="section-container section-spacing relative z-10 space-y-12 sm:space-y-16 pb-8 overflow-x-hidden">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-white/10 p-8 backdrop-blur-xl shadow-[0_30px_80px_rgba(5,20,0,0.5)]">
          <img
            src="/footer-cta-background.jpg"
            alt="Luxury car interior"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            loading="lazy"
          />
          {isLuxuryFleetPage ? (
            <div className="relative flex flex-col xl:flex-row xl:items-center xl:justify-between">
              <div className="w-full">
                <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold">
                  Choose the Perfect Luxury Vehicle
                </h3>
                <div className="mt-4 space-y-4">
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    Whether you're travelling alone, with colleagues, family or VIPs, we have an extensive range of luxury vehicles that can accommodate your travels in any way you need. From executive saloons to luxury SUVs to spacious MPVs, all vehicles are selected based on their superior comfort, style and reliability.
                  </p>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    Book your next trip as an opportunity for you to see how great the difference between a premium luxury chauffeur service in London is. With our exceptional fleet of luxury vehicles, our experienced chauffeurs and a commitment to customer service, every trip that you take with us will be as close to a first-class experience as possible.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
              <div className="w-full xl:max-w-[62%]">
                <p className="text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#d4ff59]">
                  24/7 Concierge Support
                </p>
                <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold">
                  Planning Your Next Journey?
                </h3>
                <div className="mt-4 space-y-3">
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    Leave the details to us. Whether you require an airport transfer, executive chauffeur service, corporate travel, or luxury event transportation, Quickoo delivers a first-class experience across London and the UK.
                  </p>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    Our concierge team is available 24/7 to help you with every detail of your travel plans from the moment you book your reservation to the moment you arrive.
                  </p>
                </div>
                <p className="mt-5 text-sm sm:text-base font-semibold text-[#d4ff59] tracking-wide">
                  Professional. Reliable. Punctual. Luxury Travel, Redefined.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row w-full xl:w-auto shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-dark shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#d4ff59] hover:text-dark whitespace-nowrap"
                >
                  Plan A Journey
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                </Link>
                <a
                  href="tel:+442035761617"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white transition hover:border-[#d4ff59] hover:text-[#d4ff59] whitespace-nowrap"
                >
                  Call Concierge
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4 overflow-x-hidden">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl shadow-black/20">
              <img
                src={logo}
                alt="Quickoo logo"
                className="h-9 w-auto object-contain"
                loading="lazy"
              />
              {/* <span className="text-xs font-semibold uppercase tracking-[0.3em] text-dark">
                Quickoo
              </span> */}
            </div>
            <p className="text-sm text-white/70">
              Precision chauffeur experiences orchestrated across continents with
              hospitality-grade detail.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, XIcon, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-gold hover:bg-white/20"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-xl shadow-black/20">
              <img
                src="/images/tfl-logo.png"
                alt="Transport for London"
                className="h-14 w-auto object-contain"
                style={{ imageRendering: 'auto' }}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.4em] text-gold">
              Services
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {SERVICES.map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                    className="transition hover:text-white"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.4em] text-gold">
              Fleet Highlights
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {FLEET_TYPES.map((carType) => (
                <li key={carType.id}>
                  <Link
                    to={`/fleet/${carType.id}`}
                    className="transition hover:text-white"
                  >
                    {carType.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm uppercase tracking-[0.4em] text-gold">
                Contact
              </h4>
              <ul className="mt-6 space-y-4 text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gold" />
                  <a href="tel:+442035761617" className="transition hover:text-white">
                    +44 20 3576 1617
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold" />
                  <a
                    href="mailto:hello@xchauffur.com"
                    className="transition hover:text-white"
                  >
                    info@quickoo.co.uk
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-gold mt-1" />
                  <span>450 bath road, Longford, London,Heathrow, UB70EB</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur overflow-hidden">
              <p className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/60">
                Insider Drops
              </p>
              <p className="mt-2 text-sm text-white/80">
                Get fleet debuts, runway alerts, and surprise upgrades.
              </p>
              <form className="mt-4 flex flex-col gap-2 rounded-xl border border-white/10 bg-white/10 p-2 sm:flex-row sm:items-center overflow-hidden">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none px-2 sm:px-3 py-2 min-w-0"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-white/20 p-2 sm:p-2.5 text-white transition hover:bg-gold hover:text-dark flex items-center justify-center flex-shrink-0 sm:px-4"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs sm:text-sm text-white/60 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Quickoo PVT LTD. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {PAGES.map((page) => (
              <Link key={page.href} to={page.href} className="transition hover:text-white">
                {page.label}
              </Link>
            ))}
            <Link to="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="transition hover:text-white">
              Terms & Conditions
            </Link>
            <span className="transition hover:text-white cursor-default">
              Company No: 16397074
            </span>
            <span className="transition hover:text-white cursor-default">
              VAT No: 493019386
            </span>
            <span className="transition hover:text-white cursor-default">
              TFL Licence No: 11668
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
