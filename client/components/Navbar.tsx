import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "../public/images/logo-2.png";
const SERVICES = [
  "Airport Transfers",
  "City-to-City",
  "Hourly Hire",
  "Wedding",
  "Business",
  "Events",
  "Seaport",
  "Private Jet",
  "City Tours",
];

const FLEET = [
  "Mercedes S-Class",
  "E-Class",
  "V-Class",
  "BMW i7",
  "Range Rover",
  "Electric Fleet",
  "Minibuses",
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileFleetOpen, setMobileFleetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileFleetOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b backdrop-blur-lg",
        isScrolled
          ? "bg-white/95 shadow-xl border-[#d5cff8]"
          : "bg-gradient-to-r from-[#f8f5ff]/95 via-[#f1edff]/90 to-[#f8f5ff]/95 border-[#efe9ff]/80 shadow-[0_10px_40px_rgba(18,8,40,0.12)]",
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative flex items-center">
              <img
                src={logo}
                alt="Quickoo wordmark"
                className="h-10 w-auto object-contain drop-shadow-[0_8px_24px_rgba(12,4,32,0.4)]"
              />
            </div>
          </Link>

          {/* CENTER MENU (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
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

              <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl ring-1 ring-[#e5defc] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {FLEET.map((vehicle) => (
                  <Link
                    key={vehicle}
                    to={`/fleet/${vehicle.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-3 text-sm text-dark hover:bg-brand-soft hover:text-gold rounded-xl mx-1 my-0.5"
                  >
                    {vehicle}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/pricing"
              className={cn(
                "font-inter text-sm transition-colors",
                isScrolled
                  ? "text-dark hover:text-gold"
                  : "text-[#2a1b4d] hover:text-gold",
              )}
            >
              Pricing
            </Link>

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
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1">
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
                +1 (302) 526-4133
              </span>
            </div>

            <div className="flex items-center gap-1">
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
                +44 207 078 8993
              </span>
            </div>

            {/* BOOK NOW */}
            <Link
              to="/book-now"
              className={cn(
                "px-8 py-3 font-inter text-sm rounded-full border transition-all font-semibold shadow-lg shadow-[#3c2c7d33]",
                isScrolled
                  ? "bg-gradient-to-r from-gold to-[#7c6dff] text-white border-transparent hover:opacity-90"
                  : "bg-gradient-to-r from-[#4e3acf] to-[#7a68ff] text-white border-transparent hover:opacity-90",
              )}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
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
        {/* MOBILE MENU (kept in DOM for smooth transitions) */}
        <div
          id="mobile-menu"
          aria-hidden={!isOpen ? "true" : "false"}
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out rounded-3xl",
            isOpen
              ? "max-h-[1000px] opacity-100 translate-y-0 py-6 space-y-2 bg-gradient-to-b from-brand-ink to-[#130533]"
              : "max-h-0 opacity-0 -translate-y-2 py-0 space-y-0",
          )}
        >
          <Link
            to="/"
            onClick={handleNavClick}
            className={cn(
              "block px-4 text-white rounded-lg",
              isOpen ? "py-2" : "py-0",
            )}
          >
            Home
          </Link>

          {/* Services */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 text-white"
              aria-expanded={mobileServicesOpen ? "true" : "false"}
            >
              <span className={cn(isOpen ? "py-2" : "py-0")}>Services</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  mobileServicesOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "pl-4 overflow-hidden transition-all duration-200 ease-in-out",
                mobileServicesOpen
                  ? "max-h-[600px] opacity-100 translate-y-0 pt-2"
                  : "max-h-0 opacity-0 -translate-y-1 pt-0",
              )}
            >
              {SERVICES.map((service) => (
                <Link
                  key={service}
                  to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                  onClick={handleNavClick}
                  className={cn(
                    "block px-4 text-sm text-white rounded-lg bg-white/5",
                    mobileServicesOpen ? "py-2" : "py-0",
                  )}
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Fleet */}
          <div>
            <button
              onClick={() => setMobileFleetOpen(!mobileFleetOpen)}
              className="w-full flex items-center justify-between px-4 text-white"
              aria-expanded={mobileFleetOpen ? "true" : "false"}
            >
              <span className={cn(isOpen ? "py-2" : "py-0")}>Fleet</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  mobileFleetOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "pl-4 overflow-hidden transition-all duration-200 ease-in-out",
                mobileFleetOpen
                  ? "max-h-[600px] opacity-100 translate-y-0 pt-2"
                  : "max-h-0 opacity-0 -translate-y-1 pt-0",
              )}
            >
              {FLEET.map((vehicle) => (
                <Link
                  key={vehicle}
                  to={`/fleet/${vehicle.toLowerCase().replace(/ /g, "-")}`}
                  onClick={handleNavClick}
                  className={cn(
                    "block px-4 text-sm text-white rounded-lg bg-white/5",
                    mobileFleetOpen ? "py-2" : "py-0",
                  )}
                >
                  {vehicle}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/pricing"
            onClick={handleNavClick}
            className={cn("block px-4 text-white", isOpen ? "py-2" : "py-0")}
          >
            Pricing
          </Link>

          <Link
            to="/about"
            onClick={handleNavClick}
            className={cn("block px-4 text-white", isOpen ? "py-2" : "py-0")}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            onClick={handleNavClick}
            className={cn("block px-4 text-white", isOpen ? "py-2" : "py-0")}
          >
            Contact
          </Link>

          {/* Book Now */}
          <Link
            to="/book-now"
            onClick={handleNavClick}
            className={cn(
              "w-full mt-4 bg-white text-dark px-8 rounded-full font-semibold block text-center shadow-lg shadow-[#5e4bff33]",
              isOpen ? "py-3" : "py-0",
            )}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};
