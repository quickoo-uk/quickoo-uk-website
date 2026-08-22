import { Headset, Map, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";
import LogistifieBookingWidget from "./LogistifieBookingWidget";

const BOOKING_SERVICE_FEATURES = [
  {
    icon: Map,
    title: "Personal Journey Planning",
    description:
      "Every booking is arranged around your schedule and preferences, including cabin temperature, music or radio selection, and device connectivity.",
  },
  {
    icon: Star,
    title: "Premium Executive Vehicles",
    description: "Travel in a spotless luxury vehicle prepared for comfort and relaxation.",
  },
  {
    icon: Headset,
    title: "Professional Customer Support",
    description: "Our team can assist with bookings, itinerary changes and special requests.",
  },
];

export const BookingSection = () => {
  return (
    <section
      id="home-booking"
      className="relative z-0 isolate w-full scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-[#f7faf3] to-white pb-8 pt-12 sm:pb-12 sm:pt-20 max-sm:pt-0"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#a5c9ff]/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-gold/15 blur-[120px]" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 space-y-4 text-center sm:mb-12"
        >
          <SectionChip title="Instant Booking" />
          <h2 className="font-montserrat text-3xl font-semibold text-dark sm:text-4xl md:text-5xl">
            Book Your <span className="text-[#487307]">Chauffeur Today</span>
          </h2>
          <p className="mx-auto max-w-2xl font-inter text-base leading-relaxed text-gray-600 sm:text-lg">
            Choose your journey and receive an instant quote, with every detail tailored to your preferences.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
            {BOOKING_SERVICE_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-start gap-4 py-5">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#487307] text-white shadow-[0_8px_24px_rgba(72,115,7,0.18)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-base font-semibold text-dark sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-1 font-inter text-sm leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="order-1 min-w-0 lg:order-2"
        >
          <div className="hero_booking_engine booking_engine_flat relative z-0 isolate w-full">
            <LogistifieBookingWidget />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};
