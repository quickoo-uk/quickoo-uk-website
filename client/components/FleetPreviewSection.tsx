import { useState } from "react";
import { Users, Luggage, Sparkles, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionChip } from "./SectionChip";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Fleet vehicle classes with local images and starting prices
const VEHICLE_CLASSES = [
  {
    id: "business-class",
    name: "Business\u00A0Class",
    subtitle: "journey starting (incl. VAT, fees)",
    priceMain: "From £60 / hr",
    priceNote: "(incl. VAT)",
    image: "/fleet/BusinessClass.png",
    guests: "Up to 4 guests",
    luggage: "2 carry-on bags, or 2 standard bags",
    description: "Mercedes E-Class,or similar premium executive cars.",
    vehicles: ["Mercedes E-Class", "BMW 5 Series", "Or similar"],
    longDescription: (
      <>
        <p>The E-Class isn't just a car — it's a masterpiece of elegance, innovation, and power. Designed to move with confidence and crafted with unmistakable style, it transforms every drive into an extraordinary experience.</p>
        <p>Inside, modern luxury surrounds you. Intelligent technology anticipates your every need, while refined details create an atmosphere of pure comfort.</p>
        <p>On the road, effortless performance meets precision handling, delivering a drive that feels powerful, smooth, and unforgettable.</p>
        <p className="font-semibold text-dark mt-4">The E-Class — where sophistication meets excitement, and every journey becomes something more.</p>
      </>
    ),
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
    description: "Mercedes S-Class, BMW 7 Series, or similar luxury cars.",
    vehicles: ["Mercedes S-Class", "BMW 7 Series", "Or similar luxury sedan"],
    longDescription: (
      <>
        <p>The S-Class is more than a luxury sedan — it is the ultimate expression of prestige and innovation. Every detail is crafted to perfection, from its commanding presence to its serene, handcrafted interior.</p>
        <p>Inside, cutting-edge technology and timeless elegance come together to create an experience unlike any other — intuitive, intelligent, and effortlessly refined.</p>
        <p>On the road, unmatched comfort and powerful performance deliver a drive that is as smooth as it is exhilarating.</p>
        <p className="font-semibold text-dark mt-4">The S-Class — where innovation meets excellence, and luxury reaches its highest form.</p>
      </>
    ),
  },
  {
    id: "business-van",
    name: "Business\u00A0Van",
    subtitle: "Journey starting (incl. VAT, fees)",
    priceMain: "From £70 / hr",
    priceNote: "(incl. VAT)",
    image: "/fleet/BusinessVAN.png",
    guests: "Up to 6 guests",
    luggage: "6 carry-on bags, or 6 standard bags",
    description: "Mercedes V-Class, spacious 7-seater perfect for families and groups.",
    vehicles: ["Mercedes Vito", "Or similar executive van"],
    longDescription: (
      <>
        <p>The V-Class is where space meets true sophistication. Designed for families, professionals, and adventurers alike, it transforms every journey into a first-class experience.</p>
        <p>With generous room, intelligent versatility, and premium comfort, the V-Class adapts effortlessly to your lifestyle. Every detail — from refined materials to advanced technology — reflects the signature luxury of Mercedes-Benz.</p>
        <p>Whether it's business or leisure, daily life or long journeys, the V-Class redefines what travel can be: stylish, seamless, and unforgettable.</p>
        <p className="font-semibold text-dark mt-4">The V-Class — space elevated by luxury.</p>
      </>
    ),
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
  const [selectedVehicle, setSelectedVehicle] = useState<typeof VEHICLE_CLASSES[0] | null>(null);
  const [expandedVehicleId, setExpandedVehicleId] = useState<string | null>(null);

  return (
    <section className="pt-20 pb-6 sm:py-32 relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaff] to-[#fff5ec]">
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
          <SectionChip title="Flagship Fleet" />
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
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {VEHICLE_CLASSES.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-2xl transition-all duration-500"
            >
              {/* Desktop view: Traditional vertical card */}
              <div className="hidden md:flex flex-col h-full bg-white border border-gray-200 shadow-sm hover:shadow-xl">
                {/* Image Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#f8faf5] to-white px-6 pb-6 pt-10 flex items-center justify-center">
                  <motion.img
                    src={vehicle.image}
                    alt={vehicle.name}
                    loading="lazy"
                    className="max-h-40 w-auto object-contain transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div className="pb-4 border-b border-gray-100">
                    <h3 className="text-xl font-montserrat font-bold text-dark leading-tight">
                      {vehicle.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 font-inter leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Specifications */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-[#eaf7e8] p-2 flex items-center justify-center shrink-0">
                        <Users className="h-4 w-4 text-[#487307]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Capacity</p>
                        <p className="text-sm font-semibold text-dark">{vehicle.guests}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-[#eaf7e8] p-2 flex items-center justify-center shrink-0">
                        <Luggage className="h-4 w-4 text-[#487307]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Luggage</p>
                        <p className="text-sm font-semibold text-dark">{vehicle.luggage}</p>
                      </div>
                    </div>
                  </div>

                  {/* Premium Brand Badge & View Details */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <img src="/images/q-icon.png" alt="Q" className="h-4 w-4 object-contain" />
                      <span className="text-gray-700 font-medium whitespace-nowrap">Premium chauffeur Car</span>
                    </div>
                    <button
                      onClick={() => setSelectedVehicle(vehicle)}
                      className="text-xs font-semibold text-[#487307] hover:text-[#2a4204] underline underline-offset-2 transition-colors whitespace-nowrap"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile view: Horizontal card with Accordion */}
              <div 
                className="md:hidden flex flex-col p-4 gap-4 bg-white rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => setExpandedVehicleId(expandedVehicleId === vehicle.id ? null : vehicle.id)}
              >
                <div className="flex items-center gap-4 w-full">
                  {/* Left: Image */}
                  <div className="w-32 sm:w-36 flex-shrink-0">
                    <img src={vehicle.image} alt={vehicle.name} className="w-full h-auto object-contain scale-110" />
                  </div>

                  {/* Center: Info */}
                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{vehicle.name}</h3>
                    <div className="flex items-center gap-4 my-1.5 text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-[#487307]" strokeWidth={2.5} />
                        <span className="text-sm font-bold">{vehicle.id === 'business-van' ? '6' : (vehicle.id === 'first-class' ? '3' : '4')}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Luggage className="w-4 h-4 text-[#487307]" strokeWidth={2.5} />
                        <span className="text-sm font-bold">{vehicle.id === 'business-van' ? '6' : '2'}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {vehicle.name.replace('\u00A0', ' ')} or similar
                    </p>
                  </div>

                  {/* Right: Icon (Chevron down/up) */}
                  <div className="text-right flex-shrink-0 flex flex-col items-end gap-2">
                    <img src="/images/q-icon.png" alt="Q" className="h-5 w-5 object-contain ml-auto" />
                    <motion.div animate={{ rotate: expandedVehicleId === vehicle.id ? 180 : 0 }}>
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedVehicleId === vehicle.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-100 text-sm text-gray-600 font-inter leading-relaxed space-y-3">
                        {vehicle.longDescription}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Desktop Modal */}
      <Dialog open={!!selectedVehicle} onOpenChange={(open) => !open && setSelectedVehicle(null)}>
        <DialogContent className="max-w-2xl bg-white p-0 overflow-hidden border-0 shadow-2xl sm:rounded-2xl gap-0">
          {selectedVehicle && (
            <div className="flex flex-col">
              {/* Image Header */}
              <div className="relative bg-gradient-to-br from-[#f8faf5] to-white p-8 flex items-center justify-center border-b border-gray-100">
                <img src={selectedVehicle.image} alt={selectedVehicle.name} className="max-h-48 w-auto object-contain" />
                <div className="absolute top-4 left-4">
                  <SectionChip title={selectedVehicle.name} />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 bg-white">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-2xl font-montserrat font-bold text-dark">
                    {selectedVehicle.name} Overview
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4 text-gray-600 font-inter leading-relaxed text-sm md:text-base">
                  {selectedVehicle.longDescription}
                </div>

                <div className="mt-8 flex items-center gap-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#eaf7e8] p-2 flex items-center justify-center shrink-0">
                      <Users className="h-5 w-5 text-[#487307]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Capacity</p>
                      <p className="text-sm font-semibold text-dark">{selectedVehicle.guests}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#eaf7e8] p-2 flex items-center justify-center shrink-0">
                      <Luggage className="h-5 w-5 text-[#487307]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Luggage</p>
                      <p className="text-sm font-semibold text-dark">{selectedVehicle.luggage}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
