import { useParams } from "react-router-dom";
import { Users, Luggage, Zap, Wind, Music } from "lucide-react";

export default function FleetPlaceholder() {
  const { id } = useParams<{ id: string }>();

  const vehicleName = id
    ? id
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
    : "Vehicle";

  // Luxury chauffeur-style real images
  const IMAGES: Record<string, string> = {
    "mercedes-s-class": "/fleet/Mercedes-benz-s-class.png",
    "bmw-i7": "/fleet/BMW i7.png",
    "range-rover": "/fleet/Range Rover Autobiography  Vogue.png",
    "mercedes-v-class": "/fleet/Mercedes-Benz V-Class.png",
  };

  const heroImage = IMAGES[id ?? ""] ?? IMAGES["mercedes-s-class"];

  return (
    <div className="w-full">
      {/* ============================== */}
      {/* HERO SECTION */}
      {/* ============================== */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt={vehicleName}
          className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-[0.55]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

        <div className="relative z-10 section-container text-white max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-4">
            {vehicleName}
          </h1>
          <p className="text-lg md:text-xl font-inter text-gray-200 mb-6">
            Luxury, comfort, and class — experience a world-class ride with our{" "}
            {vehicleName}.
          </p>
          <button className="luxury-button-gold">Book {vehicleName}</button>
        </div>
      </section>

      {/* ============================== */}
      {/* SPECIFICATIONS */}
      {/* ============================== */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          {/* SECTION TITLE */}
          <h2 className="text-4xl font-montserrat font-bold text-dark mb-16">
            Specifications
          </h2>

          {/* SPECS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
            {[
              { icon: Users, label: "Passengers", value: "4" },
              { icon: Luggage, label: "Luggage", value: "3" },
              { icon: Zap, label: "Power", value: "500+ HP" },
              { icon: Wind, label: "Air Suspension", value: "Yes" },
              { icon: Music, label: "Sound System", value: "Premium Surround" },
            ].map((spec, idx) => {
              const Icon = spec.icon;
              return (
                <div
                  key={idx}
                  className="
                    group bg-muted rounded-2xl p-10 text-center
                    border border-transparent
                    hover:border-gold hover:shadow-[0_12px_40px_rgba(72,115,7,0.25)]
                    transition-all duration-300
                  "
                >
                  <Icon className="w-10 h-10 text-gold mx-auto mb-4" />
                  <p className="font-montserrat font-semibold text-dark mb-1">
                    {spec.label}
                  </p>
                  <p className="text-2xl font-montserrat font-bold text-gold">
                    {spec.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ============================== */}
          {/* PREMIUM FEATURES + PRICING */}
          {/* ============================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* FEATURES */}
            <div>
              <h3 className="text-3xl font-montserrat font-bold text-dark mb-6">
                Premium Features
              </h3>

              <ul className="space-y-4">
                {[
                  "Hand-stitched leather interior",
                  "Advanced climate control system",
                  "Executive seating configuration",
                  "Premium surround-sound audio",
                  "Onboard WiFi + USB-C charging",
                  "Ambient LED lighting",
                  "Panoramic sunroof",
                  "Silent cabin insulation",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    <span className="font-inter text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PRICING CARD */}
            <div className="bg-gradient-to-br from-white to-muted p-10 rounded-3xl border border-gold/20 shadow-lg">
              <h3 className="text-3xl font-montserrat font-bold text-dark mb-8">
                Pricing Options
              </h3>

              <div className="space-y-5">
                {[
                  { label: "Hourly Rate", price: "$85/hr" },
                  { label: "Airport Transfer", price: "$120" },
                  { label: "City-to-City (100 km)", price: "$250" },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between pb-4 border-b border-border"
                  >
                    <span className="text-gray-600 font-inter">
                      {row.label}
                    </span>
                    <span className="text-dark font-montserrat font-bold">
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>

              <button className="luxury-button-gold w-full mt-8 text-lg py-4">
                Book {vehicleName}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM SPACING */}
      <div className="h-10"></div>
    </div>
  );
}
