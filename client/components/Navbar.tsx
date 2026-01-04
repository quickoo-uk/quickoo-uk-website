import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
const logo = "/images/logo-2.png";
import { FLEET_TYPES } from "@shared/fleet";

const SERVICES = [
  "Airport Transfers",
  "Corporate travel",
  "Special events",
  "City Tours",
  "Private Jet Chauffeur",
  "London Cruise Transfer",
];

const WHY_CHOOSE_LINKS = [
  { name: "Safety First", path: "/why-choose/safety-first" },
  { name: "Transparent Pricing", path: "/why-choose/transparent-pricing" },
  { name: "Tailored Luxury Fleet", path: "/why-choose/luxury-fleet" },
  { name: "Elite Chauffeurs", path: "/why-choose/elite-chauffeurs" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileFleetOpen, setMobileFleetOpen] = useState(false);
  const [mobileWhyChooseOpen, setMobileWhyChooseOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileFleetOpen(false);
    setMobileWhyChooseOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b backdrop-blur-lg",
          isScrolled
            ? "bg-white/95 shadow-xl border-[#d5cff8]"
            : "bg-white/95 border-[#efe9ff]/80 shadow-[0_10px_40px_rgba(18,8,40,0.12)]",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-visiable">
          <div className="flex h-16 sm:h-20 w-full items-center justify-between min-w-0">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative flex items-center">
                <img
                  src={logo}
                  alt="Quickoo wordmark"
                  className="h-8 sm:h-10 w-auto object-contain drop-shadow-[0_8px_24px_rgba(12,4,32,0.4)]"
                />
              </div>
            </Link>

            {/* CENTER MENU (Desktop) */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <Link
                to="/"
                className={cn(
                  "font-inter text-sm transition-colors",
                  isScrolled
                    ? "text-dark hover:text-gold"
                    : "text-[#2a1b4d] hover:text-gold",
                )}
              >
                Home
              </Link>

              {/* Services */}
              <div className="relative group">
                <button
                  className={cn(
                    "font-inter text-sm flex items-center gap-1 transition-colors",
                    isScrolled
                      ? "text-dark hover:text-gold"
                      : "text-[#2a1b4d] hover:text-gold",
                  )}
                >
                  Services <ChevronDown className="w-4 h-4" />
                </button>

                <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl ring-1 ring-[#e5defc] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {SERVICES.map((service) => (
                    <Link
                      key={service}
                      to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                      className="block px-4 py-3 text-sm text-dark hover:bg-brand-soft hover:text-gold rounded-xl mx-1 my-0.5"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Fleet */}
              <div className="relative group">
                <button
                  className={cn(
                    "font-inter text-sm flex items-center gap-1 transition-colors",
                    isScrolled
                      ? "text-dark hover:text-gold"
                      : "text-[#2a1b4d] hover:text-gold",
                  )}
                >
                  Fleet <ChevronDown className="w-4 h-4" />
                </button>

                <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl ring-1 ring-[#e5defc] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {FLEET_TYPES.map((carType) => (
                    <Link
                      key={carType.id}
                      to={`/fleet/${carType.id}`}
                      className="block px-4 py-3 text-sm text-dark hover:bg-brand-soft hover:text-gold rounded-xl mx-1 my-0.5"
                    >
                      {carType.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="relative group">
                <button
                  className={cn(
                    "font-inter text-sm flex items-center gap-1 transition-colors",
                    isScrolled
                      ? "text-dark hover:text-gold"
                      : "text-[#2a1b4d] hover:text-gold",
                  )}
                >
                  Why Choose Us <ChevronDown className="w-4 h-4" />
                </button>

                <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl ring-1 ring-[#e5defc] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {WHY_CHOOSE_LINKS.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-3 text-sm text-dark hover:bg-brand-soft hover:text-gold rounded-xl mx-1 my-0.5"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                className={cn(
                  "font-inter text-sm transition-colors",
                  isScrolled
                    ? "text-dark hover:text-gold"
                    : "text-[#2a1b4d] hover:text-gold",
                )}
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className={cn(
                  "font-inter text-sm transition-colors",
                  isScrolled
                    ? "text-dark hover:text-gold"
                    : "text-[#2a1b4d] hover:text-gold",
                )}
              >
                Contact
              </Link>
            </div>

            {/* RIGHT SIDE — Phone Numbers + Book Now */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <div className="hidden xl:flex items-center gap-1">
                <Phone
                  className={cn(
                    "w-4 h-4",
                    isScrolled ? "text-gold" : "text-[#6d5ab8]",
                  )}
                />
                <span
                  className={cn(
                    "text-sm",
                    isScrolled ? "text-dark" : "text-[#2a1b4d]",
                  )}
                >
                  +44 20 3576 1617
                </span>
              </div>
              {/* BOOK NOW */}
              <Link
                to="/book-now"
                className={cn(
                  "px-6 xl:px-8 py-2.5 xl:py-3 font-inter text-xs xl:text-sm rounded-full transition-all font-semibold shadow-lg shadow-[#3c2c7d33] whitespace-nowrap",
                  isScrolled
                    ? "luxury-button-gold text-white hover:opacity-90"
                    : "luxury-button-gold text-white hover:opacity-90",
                )}
              >
                Book Now
              </Link>
            </div>



            {/* BOOK NOW */}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 flex-shrink-0 ml-2"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
          >
            {isOpen ? (
              <X
                className={cn(
                  "w-6 h-6 transition-colors",
                  isScrolled ? "text-dark" : "text-[#2a1b4d]",
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "w-6 h-6 transition-colors",
                  isScrolled ? "text-dark" : "text-[#2a1b4d]",
                )}
              />
            )}
          </button>
        </div>

      </nav>

      {/* MOBILE MENU OVERLAY - Full Screen */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={handleNavClick}
          aria-hidden="true"
        />
      )}

      {/* MOBILE MENU - Full Width Dropdown */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen ? "true" : "false"}
        className={cn(
          "fixed top-16 sm:top-20 left-0 right-0 w-full max-w-full lg:hidden z-50 overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 pointer-events-none",
        )}
        style={{ maxHeight: isOpen ? "calc(100vh - 4rem)" : "0" }}
      >
        <div className="relative bg-gradient-to-br from-[#0f1801] via-[#1a2e03] to-[#2a4204] shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#487307]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#6aa80b]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative px-4 py-6 space-y-2">
            <Link
              to="/"
              onClick={handleNavClick}
              className="block px-5 py-3.5 text-white font-medium rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-[#487307]/30"
            >
              Home
            </Link>

            {/* Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-5 py-3.5 text-white font-medium rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-[#487307]/30"
                aria-expanded={mobileServicesOpen ? "true" : "false"}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    mobileServicesOpen && "rotate-180 text-[#6aa80b]",
                  )}
                />
              </button>
              <div
                className={cn(
                  "pl-3 overflow-hidden transition-all duration-300 ease-in-out",
                  mobileServicesOpen
                    ? "max-h-[600px] opacity-100 translate-y-0 pt-2"
                    : "max-h-0 opacity-0 -translate-y-1",
                )}
              >
                <div className="space-y-1 border-l-2 border-[#487307]/30 ml-2 pl-3">
                  {SERVICES.map((service) => (
                    <Link
                      key={service}
                      to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                      onClick={handleNavClick}
                      className="block px-4 py-2.5 text-sm text-white/80 rounded-lg hover:bg-[#487307]/20 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Fleet */}
            <div>
              <button
                onClick={() => setMobileFleetOpen(!mobileFleetOpen)}
                className="w-full flex items-center justify-between px-5 py-3.5 text-white font-medium rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-[#487307]/30"
                aria-expanded={mobileFleetOpen ? "true" : "false"}
              >
                <span>Fleet</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    mobileFleetOpen && "rotate-180 text-[#6aa80b]",
                  )}
                />
              </button>
              <div
                className={cn(
                  "pl-3 overflow-hidden transition-all duration-300 ease-in-out",
                  mobileFleetOpen
                    ? "max-h-[600px] opacity-100 translate-y-0 pt-2"
                    : "max-h-0 opacity-0 -translate-y-1",
                )}
              >
                <div className="space-y-1 border-l-2 border-[#487307]/30 ml-2 pl-3">
                  {FLEET_TYPES.map((carType) => (
                    <Link
                      key={carType.id}
                      to={`/fleet/${carType.id}`}
                      onClick={handleNavClick}
                      className="block px-4 py-2.5 text-sm text-white/80 rounded-lg hover:bg-[#487307]/20 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      {carType.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <button
                onClick={() => setMobileWhyChooseOpen(!mobileWhyChooseOpen)}
                className="w-full flex items-center justify-between px-5 py-3.5 text-white font-medium rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-[#487307]/30"
                aria-expanded={mobileWhyChooseOpen ? "true" : "false"}
              >
                <span>Why Choose Us</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    mobileWhyChooseOpen && "rotate-180 text-[#6aa80b]",
                  )}
                />
              </button>
              <div
                className={cn(
                  "pl-3 overflow-hidden transition-all duration-300 ease-in-out",
                  mobileWhyChooseOpen
                    ? "max-h-[600px] opacity-100 translate-y-0 pt-2"
                    : "max-h-0 opacity-0 -translate-y-1",
                )}
              >
                <div className="space-y-1 border-l-2 border-[#487307]/30 ml-2 pl-3">
                  {WHY_CHOOSE_LINKS.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={handleNavClick}
                      className="block px-4 py-2.5 text-sm text-white/80 rounded-lg hover:bg-[#487307]/20 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              onClick={handleNavClick}
              className="block px-5 py-3.5 text-white font-medium rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-[#487307]/30"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              onClick={handleNavClick}
              className="block px-5 py-3.5 text-white font-medium rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-[#487307]/30"
            >
              Contact
            </Link>

            {/* Phone Numbers in Mobile Menu */}
            <div className="px-2 pt-4 mt-3 space-y-3 border-t border-[#487307]/20">
              <a
                href="tel:+442035761617"
                onClick={handleNavClick}
                className="flex items-center gap-3 px-4 py-3 text-white/90 hover:text-white rounded-xl hover:bg-[#487307]/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#487307] to-[#6aa80b] flex items-center justify-center shadow-lg">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/60 uppercase tracking-wider font-semibold">Call Us</span>
                  <span className="text-sm font-semibold">+44 20 3576 1617</span>
                </div>
              </a>
            </div>

            {/* Book Now */}
            <div className="px-2 pt-4 pb-2">
              <Link
                to="/book-now"
                onClick={handleNavClick}
                className="w-full bg-gradient-to-r from-[#487307] to-[#6aa80b] text-white px-8 py-4 rounded-full font-bold text-center shadow-xl shadow-[#487307]/30 hover:shadow-2xl hover:shadow-[#487307]/40 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Book Now</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
