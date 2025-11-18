import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [fleetOpen, setFleetOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileFleetOpen, setMobileFleetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useState(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleNavClick = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileFleetOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-luxury"
          : "bg-transparent"
      )}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center transition-colors", isScrolled ? "bg-dark" : "bg-white bg-opacity-20 backdrop-blur-sm")}>
              <span className="text-gold font-montserrat font-bold text-sm">
                XC
              </span>
            </div>
            <span className={cn("text-xl font-montserrat font-bold hidden sm:inline transition-colors", isScrolled ? "text-dark" : "text-white")}>
              XChauffur
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-0 absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className={cn(
                "px-3 py-2 font-inter text-sm font-medium hover:text-gold transition-colors whitespace-nowrap",
                isScrolled ? "text-dark" : "text-white"
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className={cn(
                "px-3 py-2 font-inter text-sm font-medium hover:text-gold transition-colors flex items-center gap-1 whitespace-nowrap",
                isScrolled ? "text-dark" : "text-white"
              )}>
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-luxury-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {SERVICES.map((service) => (
                  <Link
                    key={service}
                    to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-3 font-inter text-sm text-dark hover:bg-muted hover:text-gold transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            {/* Fleet Dropdown */}
            <div className="relative group">
              <button className={cn(
                "px-3 py-2 font-inter text-sm font-medium hover:text-gold transition-colors flex items-center gap-1 whitespace-nowrap",
                isScrolled ? "text-dark" : "text-white"
              )}>
                Fleet
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-luxury-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {FLEET.map((vehicle) => (
                  <Link
                    key={vehicle}
                    to={`/fleet/${vehicle.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-3 font-inter text-sm text-dark hover:bg-muted hover:text-gold transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {vehicle}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/pricing"
              className={cn(
                "px-3 py-2 font-inter text-sm font-medium hover:text-gold transition-colors whitespace-nowrap",
                isScrolled ? "text-dark" : "text-white"
              )}
            >
              Pricing
            </Link>

            <Link
              to="/about"
              className={cn(
                "px-3 py-2 font-inter text-sm font-medium hover:text-gold transition-colors whitespace-nowrap",
                isScrolled ? "text-dark" : "text-white"
              )}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={cn(
                "px-3 py-2 font-inter text-sm font-medium hover:text-gold transition-colors whitespace-nowrap",
                isScrolled ? "text-dark" : "text-white"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Book Now Button */}
          <button className="luxury-button-gold hidden md:block">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-dark" />
            ) : (
              <Menu className="w-6 h-6 text-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              onClick={handleNavClick}
              className="block px-4 py-2 font-inter text-dark hover:bg-muted rounded-lg transition-colors"
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full text-left px-4 py-2 font-inter text-dark hover:bg-muted rounded-lg transition-colors flex items-center justify-between"
              >
                Services
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    mobileServicesOpen ? "rotate-180" : ""
                  )}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-1">
                  {SERVICES.map((service) => (
                    <Link
                      key={service}
                      to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                      onClick={handleNavClick}
                      className="block px-4 py-2 font-inter text-sm text-dark hover:bg-muted rounded-lg transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Fleet */}
            <div>
              <button
                onClick={() => setMobileFleetOpen(!mobileFleetOpen)}
                className="w-full text-left px-4 py-2 font-inter text-dark hover:bg-muted rounded-lg transition-colors flex items-center justify-between"
              >
                Fleet
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    mobileFleetOpen ? "rotate-180" : ""
                  )}
                />
              </button>
              {mobileFleetOpen && (
                <div className="pl-4 space-y-1">
                  {FLEET.map((vehicle) => (
                    <Link
                      key={vehicle}
                      to={`/fleet/${vehicle.toLowerCase().replace(/ /g, "-")}`}
                      onClick={handleNavClick}
                      className="block px-4 py-2 font-inter text-sm text-dark hover:bg-muted rounded-lg transition-colors"
                    >
                      {vehicle}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              onClick={handleNavClick}
              className="block px-4 py-2 font-inter text-dark hover:bg-muted rounded-lg transition-colors"
            >
              Pricing
            </Link>

            <Link
              to="/about"
              onClick={handleNavClick}
              className="block px-4 py-2 font-inter text-dark hover:bg-muted rounded-lg transition-colors"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              onClick={handleNavClick}
              className="block px-4 py-2 font-inter text-dark hover:bg-muted rounded-lg transition-colors"
            >
              Contact
            </Link>

            <button className="w-full luxury-button-gold mt-2">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
