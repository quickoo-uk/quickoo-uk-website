import { Users, Luggage, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Fleet vehicle classes with local images and starting prices
const VEHICLE_CLASSES = [
  {
    id: "business-class",
    name: "Business\u00A0Class",
    subtitle: "journey starting (incl. VAT, fees)",
    priceMain: "From £60 / hr",
    priceNote: "(incl. VAT)",
    image: "/fleet/BusinessClass.png",
    guests: "Up to 3 guests",
    luggage: "2 carry-on bags, or 2 standard bags",
    description: "Mercedes E-Class, BMW 5 Series, or similar premium executive vehicles.",
    vehicles: ["Mercedes E-Class", "BMW 5 Series", "Or similar"],
  },
  {
    id: "first-class",
    name: "First\u00A0Class",
    subtitle: "Journey starting (incl. VAT, fees)",
    priceMain: "From £75 / hr",
    priceNote: "(incl. VAT)",
    image: "/fleet/firstClass.png",
    guests: "Up to 3 guests",
    luggage: "2 carry-on bags or 2 standard bags",
    description: "Mercedes S-Class, BMW 7 Series, or similar luxury sedans.",
    vehicles: ["Mercedes S-Class", "BMW 7 Series", "Or similar luxury sedan"],
  },
  {
    id: "business-van",
    name: "Business\u00A0Van",
    subtitle: "Journey starting (incl. VAT, fees)",
    priceMain: "From £70 / hr",
    priceNote: "(incl. VAT)",
    image: "/fleet/BusinessVAN.png",
    guests: "Up to 5 guests",
    luggage: "6 carry-on bags, or 6 standard bags",
    description: "Mercedes V-Class, spacious 7-seater perfect for families and groups.",
    vehicles: ["Mercedes Vito", "Or similar executive van"],
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
            High-end chauffeur services for{" "}
            <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
              corporate travel, luxury events, and runway transfers.
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
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Premium Badge - Top Center */}
        
              <div className="relative bg-gradient-to-br from-[#f8faf5] to-white pt-4 pb-2">
                <div className="flex justify-center">
                 {
                  vehicle.id==="first-class" && ( <div className="rounded-full bg-white/95 backdrop-blur px-4 py-1.5 shadow-sm border border-gray-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#487307]">
                      Premium
                    </p>
                  </div>)
                 }
                </div>
              </div>

              {/* Image Section */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#f8faf5] to-white px-6 pb-6 flex items-center justify-center">
                <motion.img
                  src={vehicle.image}
                  alt={vehicle.name}
                  loading="lazy"
                  className="max-h-40 w-auto object-contain transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col gap-5 p-6">
                {/* Title and Price - Horizontal Layout */}
                <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-gray-100">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-montserrat font-bold text-dark leading-tight">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-inter mt-1">
                      {vehicle.subtitle}
                    </p>
                  </div>

                  {/* <div className="shrink-0 text-right">
                    <span className="inline-block bg-gradient-to-r from-[#2f6b2b] to-[#487307] text-white font-bold px-3 py-1.5 rounded-lg text-sm whitespace-nowrap">
                      {vehicle.priceMain}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{vehicle.priceNote}</p>
                  </div> */}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 font-inter leading-relaxed">
                  {vehicle.description}
                </p>

                {/* Specifications */}
                <div className="space-y-3">
                  {/* Guests */}
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#eaf7e8] p-2 flex items-center justify-center shrink-0">
                      <Users className="h-4 w-4 text-[#487307]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                        Capacity
                      </p>
                      <p className="text-sm font-semibold text-dark">
                        {vehicle.guests}
                      </p>
                    </div>
                  </div>

                  {/* Luggage */}
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#eaf7e8] p-2 flex items-center justify-center shrink-0">
                      <Luggage className="h-4 w-4 text-[#487307]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                        Luggage
                      </p>
                      <p className="text-sm font-semibold text-dark">
                        {vehicle.luggage}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Premium Features Badge */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="h-4 w-4 text-[#487307]" />
                    <span className="text-gray-700 font-medium">Premium chauffeur service</span>
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
