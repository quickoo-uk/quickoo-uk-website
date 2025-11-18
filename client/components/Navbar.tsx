import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
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
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white shadow-md border-gray-200"
          : "bg-[#000000] bg-opacity-95 border-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8fDA%3D"
              alt="logo"
              className="h-12 object-contain filter invert brightness-0"
            />
          </Link>

          {/* CENTER MENU (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={cn(
                "font-inter text-sm transition-colors",
                isScrolled ? "text-black hover:text-[#d4a853]" : "text-white",
              )}
            >
              Home
            </Link>

            {/* Services */}
            <div className="relative group">
              <button
                className={cn(
                  "font-inter text-sm flex items-center gap-1 transition-colors",
                  isScrolled ? "text-black hover:text-[#d4a853]" : "text-white",
                )}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {SERVICES.map((service) => (
                  <Link
                    key={service}
                    to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-3 text-sm text-black hover:bg-gray-100 hover:text-[#d4a853]"
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
                  isScrolled ? "text-black hover:text-[#d4a853]" : "text-white",
                )}
              >
                Fleet <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {FLEET.map((vehicle) => (
                  <Link
                    key={vehicle}
                    to={`/fleet/${vehicle.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-3 text-sm text-black hover:bg-gray-100 hover:text-[#d4a853]"
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
                isScrolled ? "text-black hover:text-[#d4a853]" : "text-white",
              )}
            >
              Pricing
            </Link>

            <Link
              to="/about"
              className={cn(
                "font-inter text-sm transition-colors",
                isScrolled ? "text-black hover:text-[#d4a853]" : "text-white",
              )}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={cn(
                "font-inter text-sm transition-colors",
                isScrolled ? "text-black hover:text-[#d4a853]" : "text-white",
              )}
            >
              Contact
            </Link>
          </div>

          {/* RIGHT SIDE — Phone Numbers + Book Now */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-white" />
              <span
                className={cn(
                  "text-sm",
                  isScrolled ? "text-black" : "text-white",
                )}
              >
                +1 (302) 526-4133
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-white" />
              <span
                className={cn(
                  "text-sm",
                  isScrolled ? "text-black" : "text-white",
                )}
              >
                +44 207 078 8993
              </span>
            </div>

            {/* BOOK NOW */}
            <button
              className={cn(
                "px-6 py-2 font-inter text-sm rounded-full border transition-all",
                isScrolled
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-white",
              )}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              onClick={handleNavClick}
              className="block px-4 py-2 text-white bg-opacity-10 rounded-lg"
            >
              Home
            </Link>

            {/* Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-white"
              >
                Services
                <ChevronDown
                  className={cn("w-4 h-4", mobileServicesOpen && "rotate-180")}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4">
                  {SERVICES.map((service) => (
                    <Link
                      key={service}
                      to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                      onClick={handleNavClick}
                      className="block px-4 py-2 text-sm text-white bg-opacity-10 rounded-lg"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Fleet */}
            <div>
              <button
                onClick={() => setMobileFleetOpen(!mobileFleetOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-white"
              >
                Fleet
                <ChevronDown
                  className={cn("w-4 h-4", mobileFleetOpen && "rotate-180")}
                />
              </button>
              {mobileFleetOpen && (
                <div className="pl-4">
                  {FLEET.map((vehicle) => (
                    <Link
                      key={vehicle}
                      to={`/fleet/${vehicle.toLowerCase().replace(/ /g, "-")}`}
                      onClick={handleNavClick}
                      className="block px-4 py-2 text-sm text-white bg-opacity-10 rounded-lg"
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
              className="block px-4 py-2 text-white"
            >
              Pricing
            </Link>

            <Link
              to="/about"
              onClick={handleNavClick}
              className="block px-4 py-2 text-white"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              onClick={handleNavClick}
              className="block px-4 py-2 text-white"
            >
              Contact
            </Link>

            {/* Book Now */}
            <button className="w-full mt-4 bg-white text-black py-2 rounded-full">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
