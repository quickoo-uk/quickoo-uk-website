import { ArrowRight, CarFront, Clock3, Crown, MapPin, Plane, ShieldCheck, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { SectionChip } from "./SectionChip";

const PRIVATE_JET_BENEFITS = [
  {
    icon: Plane,
    title: "FBO Coordination",
    description: "Seamless collection from private terminals and business aviation hubs.",
  },
  {
    icon: Clock3,
    title: "Flight-Aware Scheduling",
    description: "Pickup timing is coordinated around your aircraft’s arrival.",
  },
  {
    icon: ShieldCheck,
    title: "Discreet Service",
    description: "Professional chauffeurs provide a calm and confidential arrival.",
  },
  {
    icon: CarFront,
    title: "Luxury Fleet",
    description: "Select an executive saloon, SUV or MPV for the onward journey.",
  },
];

const PRIVATE_JET_AIRPORTS = [
  {
    icon: Sparkles,
    name: "Farnborough Airport",
    description: "Dedicated business aviation facilities with efficient handling and premium executive services.",
  },
  {
    icon: ShieldCheck,
    name: "London Biggin Hill Airport",
    description: "Private jet services close to central London, arranged with discretion and precise coordination.",
  },
  {
    icon: Clock3,
    name: "Signature Aviation LTN",
    description: "Flexible chauffeur collections from a major private aviation hub serving London Luton.",
  },
  {
    icon: MapPin,
    name: "Harrods Aviation",
    description: "Coordinated arrivals and departures for business aviation passengers travelling through London.",
  },
  {
    icon: Star,
    name: "RAF Northolt",
    description: "Professional chauffeur transfers for approved private and VIP aviation movements.",
  },
  {
    icon: Crown,
    name: "London City Airport",
    description: "Direct executive transfers with convenient access to London’s financial and commercial districts.",
  },
  {
    icon: Sparkles,
    name: "The Windsor by Heathrow",
    description: "Discreet chauffeur coordination for VIP passengers using Heathrow’s private terminal experience.",
  },
];

export const PrivateJetChauffeurSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0d1604] py-12 text-white sm:py-20">
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#487307]/25 blur-[140px]" />

      <div className="section-container relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          <div className="space-y-4">
            <SectionChip title="Private Aviation" />
            <h2 className="font-montserrat text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Private Jet Chauffeur Service
            </h2>
            <p className="max-w-xl font-inter text-base leading-relaxed text-white/75 sm:text-lg">
              Continue your journey from aircraft to destination with precise coordination, refined comfort and complete discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {PRIVATE_JET_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex items-start gap-3 border-t border-white/15 pt-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#9bd64a]" aria-hidden />
                  <div>
                    <h3 className="font-montserrat text-sm font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 font-inter text-xs leading-relaxed text-white/65">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/services/private-jet-chauffeur"
              className="inline-flex items-center gap-2 rounded-full bg-[#487307] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5c8d11]"
            >
              Explore private jet transfers
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href="#home-booking"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Book your transfer
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <img
              src="/banner_images/image-6.png"
              alt="Quickoo private jet chauffeur fleet at a private terminal"
              className="aspect-[16/10] h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      <div className="section-container relative mt-16 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center sm:mb-10"
        >
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.35em] text-[#9bd64a]">
            London private aviation
          </p>
          <h3 className="mt-3 font-montserrat text-2xl font-semibold text-white sm:text-3xl">
            Airports &amp; Private Terminals
          </h3>
          <p className="mx-auto mt-3 max-w-2xl font-inter text-sm leading-relaxed text-white/65 sm:text-base">
            Hover, focus or tap a location to view its private chauffeur transfer details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRIVATE_JET_AIRPORTS.map((airport, index) => {
            const Icon = airport.icon;
            return (
              <motion.button
                key={airport.name}
                type="button"
                aria-label={`View chauffeur details for ${airport.name}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group h-56 text-left [perspective:1000px]"
              >
                <span className="relative block h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                  <span className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-white/15 bg-white/[0.07] p-6 text-center [backface-visibility:hidden]">
                    <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#487307] text-white shadow-[0_12px_30px_rgba(72,115,7,0.35)]">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="font-montserrat text-lg font-semibold leading-snug text-white">
                      {airport.name}
                    </span>
                    <span className="mt-3 font-inter text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9bd64a]">
                      View details
                    </span>
                  </span>

                  <span className="absolute inset-0 flex flex-col justify-center rounded-3xl border border-[#9bd64a]/40 bg-[#487307] p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <span className="font-montserrat text-lg font-semibold leading-snug text-white">
                      {airport.name}
                    </span>
                    <span className="mt-3 font-inter text-sm leading-relaxed text-white/80">
                      {airport.description}
                    </span>
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
