import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";
import LogistifieBookingWidget from "./LogistifieBookingWidget";

export const BookingSection = () => {
  return (
    <section
      id="home-booking"
      className="relative w-full scroll-mt-24 py-12 sm:py-20 max-sm:pt-0 max-sm:pb-10"
    >
      <div className="section-container relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 space-y-4 max-sm:hidden"
        >
          <SectionChip title="Instant Booking" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
            Book Your{" "}
            <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
              Chauffeur in a Few Clicks
            </span>
          </h2>
          <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
            Choose a one-way transfer, an airport pickup or hourly hire, tell us
            when and where, and get an instant quote for your journey.
          </p>
        </motion.div>

        {/* Booking widget card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto w-full max-w-3xl"
        >
          <div className="hero_booking_engine booking_engine_flat relative w-full">
            <LogistifieBookingWidget />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
