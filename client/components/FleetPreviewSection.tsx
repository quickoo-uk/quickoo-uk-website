import { Users, Luggage, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Fleet vehicle classes with local images
const VEHICLE_CLASSES = [
  {
    id: "first-class",
    name: "First Class",
    subtitle: "Tours starting (incl. VAT, fees)",
    image: "/fleet/firstClass.png",
    guests: "Up to 3 guests",
    luggage: "2 carry-on bags or 2 standard check-in bags",
    description: "Ultimate luxury sedans for executive travel and VIP occasions.",
  },
  {
    id: "business-class",
    name: "Business Class",
    subtitle: "Tours starting (incl. VAT, fees)",
    image: "/fleet/BusinessClass.png",
    guests: "Up to 3 guests",
    luggage: "2 carry-on bags, or 2 standard check-in bags",
    description: "Premium executive vehicles designed for business professionals.",
  },
  {
    id: "business-van",
    name: "Business Van",
    subtitle: "Tours starting (incl. VAT, fees)",
    image: "/fleet/BusinessVAN.png",
    guests: "Up to 5 guests",
    luggage: "8 carry-on bags, or 5 standard check-in bags",
    description: "Spacious and comfortable vans perfect for group travel.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const FleetPreviewSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaff] to-[#fff5ec]">
      {/* Background gradients */}
      <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-gold/15 blur-[120px]" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a5c9ff]/20 blur-[140px]" />

      {/* Animated SVG */}
      <motion.svg
        className="pointer-events-none absolute right-10 top-20 h-40 w-40 text-gold/30"
        viewBox="0 0 160 160"
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        <circle
          cx="80"
          cy="80"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 6"
        />
      </motion.svg>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm shadow-[#c9d6ff]/40">
            <Sparkles className="h-4 w-4 text-[#487307]" />
            <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
              Flagship Fleet
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
            Vehicles curated for{" "}
            <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
              boardrooms, red carpets, and runway transfers.
            </span>
          </h2>
          <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
            Select a category, set your preferences, and we stage the perfect
            vehicle with onboard bar, Wi-Fi, and concierge amenities before you
            arrive.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {VEHICLE_CLASSES.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col overflow-hidden rounded-[28px] bg-white/90 border border-white/60 shadow-[0_20px_70px_rgba(72,115,7,0.12)] hover:shadow-[0_30px_90px_rgba(72,115,7,0.25)] transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#f8faf5] to-white">
                <motion.img
                  src={vehicle.image}
                  alt={vehicle.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-110 p-4"
                />
                <div className="absolute top-4 right-4 rounded-full bg-white/95 backdrop-blur px-4 py-2 shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#487307]">
                    Premium
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col gap-6 p-8">
                {/* Title */}
                <div>
                  <h3 className="text-2xl font-montserrat font-bold text-dark mb-1">
                    {vehicle.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-inter">
                    {vehicle.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 font-inter leading-relaxed">
                  {vehicle.description}
                </p>

                {/* Specifications */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  {/* Guests */}
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-[#487307]/10 p-2.5">
                      <Users className="h-4 w-4 text-[#487307]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-1">
                        Capacity
                      </p>
                      <p className="text-sm font-semibold text-dark">
                        {vehicle.guests}
                      </p>
                    </div>
                  </div>

                  {/* Luggage */}
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-[#487307]/10 p-2.5">
                      <Luggage className="h-4 w-4 text-[#487307]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-1">
                        Luggage
                      </p>
                      <p className="text-sm font-semibold text-dark">
                        {vehicle.luggage}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Premium Features Badge */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                    <Sparkles className="h-4 w-4 text-[#487307]" />
                    Premium chauffeur service
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
