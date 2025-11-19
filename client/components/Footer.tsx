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
import logo from "../public/images/logo-2.png";

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
    <footer className="relative overflow-hidden text-white bg-gradient-to-b from-[#140631] via-[#1c0f47] to-[#2e1a66]">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.28),transparent_65%)] pointer-events-none" />
      <div className="absolute -top-24 -left-16 w-[520px] h-[520px] bg-white/20 blur-[130px] opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-[#6f54ff]/30 blur-[120px] opacity-70 pointer-events-none" />
      <div className="section-container section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-start gap-2 mb-4">
              <div className="relative inline-flex items-center justify-center rounded-2xl bg-white/35 px-5 py-3 shadow-[0_20px_45px_rgba(46,15,102,0.5)] backdrop-blur-lg border border-white/40">
                <div className="absolute inset-0 bg-white/60 blur-2xl opacity-60 pointer-events-none" />
                <img
                  src={logo}
                  alt="Quickoo logo"
                  className="relative h-10 w-auto"
                />
              </div>
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
