import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { FLEET_TYPES } from "@shared/fleet";
import { motion } from "framer-motion";

// Get default images for car types
const getCarTypeImage = (carTypeId: string): string => {
  const imageMap: Record<string, string> = {
    "executive-cars":
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
    "luxury-vip":
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
    "premium-suvs":
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
    "business-vans":
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
    "special-vehicles":
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
    "electric-cars":
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
    "vintage-cars-weddings":
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
  };
  return (
    imageMap[carTypeId] ||
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=80"
  );
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
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
        className="pointer-events-none absolute right-10 top-20 h-40 w-40 text-[#b3c4ff]/40"
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
            <Sparkles className="h-4 w-4 text-[#7b5dff]" />
            <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
              Flagship Fleet
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
            Vehicles curated for{" "}
            <span className="bg-gradient-to-r from-[#1a1431] via-[#40206c] to-[#806af1] bg-clip-text text-transparent">
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
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 mb-16"
        >
          {FLEET_TYPES.map((carType) => (
            <motion.div key={carType.id} variants={item}>
              <Link
                to={`/fleet/${carType.id}`}
                className="group flex flex-col overflow-hidden rounded-[28px] bg-white/90 border border-white/60 shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(116,128,255,0.25)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={getCarTypeImage(carType.id)}
                    alt={carType.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-1">
                        {carType.cars.length > 0
                          ? `${carType.cars.length} Vehicle${carType.cars.length > 1 ? "s" : ""}`
                          : "Special Collection"}
                      </p>
                      <h3 className="text-2xl font-montserrat font-bold text-white">
                        {carType.name}
                      </h3>
                    </div>
                    <div className="rounded-full bg-white/20 backdrop-blur px-4 py-2 text-xs font-semibold text-white">
                      Explore
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-6 p-6">
                  <p className="text-sm text-gray-600 font-inter leading-relaxed">
                    {carType.description}
                  </p>

                  {carType.cars.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
                        Available Vehicles
                      </p>
                      <ul className="space-y-1.5">
                        {carType.cars.slice(0, 3).map((car, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-700"
                          >
                            <Sparkles className="h-3.5 w-3.5 text-[#7b5dff] flex-shrink-0" />
                            {car.name}
                          </li>
                        ))}
                        {carType.cars.length > 3 && (
                          <li className="text-xs text-gray-500 pl-5">
                            +{carType.cars.length - 3} more
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                      <Sparkles className="h-4 w-4 text-[#7b5dff]" />
                      Premium fleet selection
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#7b5dff] transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <Link
            to="/fleet/executive-cars"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1a1230] via-[#3f1c6e] to-[#806af1] px-10 py-4 font-semibold text-white shadow-lg shadow-[#3f1c6e]/35 transition hover:opacity-90"
          >
            Explore All Categories
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
