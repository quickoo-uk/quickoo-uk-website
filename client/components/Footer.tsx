import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const SERVICES = [
  "Airport Transfers",
  "City-to-City",
  "Hourly Hire",
  "Wedding",
  "Business",
];

const FLEET = ["Mercedes S-Class", "BMW i7", "Range Rover", "Electric Fleet"];

const PAGES = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#080215] text-white">
      <div className="section-container section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#1c0e38] via-[#4630a8] to-[#8b74ff] shadow-[0_15px_35px_rgba(18,2,42,0.4)]">
                <span className="text-white font-montserrat font-bold text-sm">
                  QK
                </span>
              </div>
              <span className="text-lg font-montserrat font-bold">
                Quickoo
              </span>
            </div>
            <p className="font-inter text-sm text-gray-300 mb-6">
              Premium chauffeur services for those who demand excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all border border-white/10"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all border border-white/10"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all border border-white/10"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all border border-white/10"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-gold">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                    className="font-inter text-sm text-gray-300 hover:text-gold transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-gold">
              Fleet
            </h3>
            <ul className="space-y-3">
              {FLEET.map((vehicle) => (
                <li key={vehicle}>
                  <Link
                    to={`/fleet/${vehicle.toLowerCase().replace(/ /g, "-")}`}
                    className="font-inter text-sm text-gray-300 hover:text-gold transition-colors"
                  >
                    {vehicle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-gold">
              Company
            </h3>
            <ul className="space-y-3">
              {PAGES.map((page) => (
                <li key={page.href}>
                  <Link
                    to={page.href}
                    className="font-inter text-sm text-gray-300 hover:text-gold transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 text-gold">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+1234567890"
                  className="font-inter text-sm text-gray-300 hover:text-gold transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@xchauffur.com"
                  className="font-inter text-sm text-gray-300 hover:text-gold transition-colors"
                >
                  hello@xchauffur.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-inter text-sm text-gray-300">
                  123 Luxury Lane
                  <br />
                  Premium City, PC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-inter text-sm text-gray-400">
              © 2024 XChauffur. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="font-inter text-sm text-gray-300 hover:text-gold transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="font-inter text-sm text-gray-300 hover:text-gold transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
