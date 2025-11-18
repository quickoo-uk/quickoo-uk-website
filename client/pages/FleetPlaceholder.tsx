import { useParams } from "react-router-dom";
import { Users, Luggage, Zap, Wind, Music } from "lucide-react";

export default function FleetPlaceholder() {
  const { id } = useParams<{ id: string }>();

  const vehicleName = id
    ? id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Vehicle";

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-white via-white to-muted flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold bg-opacity-5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        </div>

        <div className="section-container relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-dark">
                {vehicleName}
              </h1>
              <p className="text-xl font-inter text-gray-600">
                Experience luxury and comfort in one of our premium{" "}
                {vehicleName.toLowerCase()} vehicles.
              </p>
              <button className="luxury-button-gold">Book Now</button>
            </div>

            <div className="relative h-96 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold via-gold bg-opacity-10 rounded-3xl overflow-hidden shadow-luxury-lg">
                <img
                  src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=600&fit=crop"
                  alt={vehicleName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-montserrat font-bold text-dark mb-12">
            Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            <div className="bg-muted rounded-2xl p-8 text-center">
              <Users className="w-8 h-8 text-gold mx-auto mb-4" />
              <p className="font-montserrat font-semibold text-dark mb-2">
                Passengers
              </p>
              <p className="text-3xl font-montserrat font-bold text-gold">4</p>
            </div>

            <div className="bg-muted rounded-2xl p-8 text-center">
              <Luggage className="w-8 h-8 text-gold mx-auto mb-4" />
              <p className="font-montserrat font-semibold text-dark mb-2">
                Luggage Space
              </p>
              <p className="text-3xl font-montserrat font-bold text-gold">3</p>
            </div>

            <div className="bg-muted rounded-2xl p-8 text-center">
              <Zap className="w-8 h-8 text-gold mx-auto mb-4" />
              <p className="font-montserrat font-semibold text-dark mb-2">
                Engine Power
              </p>
              <p className="text-3xl font-montserrat font-bold text-gold">
                500+
              </p>
            </div>

            <div className="bg-muted rounded-2xl p-8 text-center">
              <Wind className="w-8 h-8 text-gold mx-auto mb-4" />
              <p className="font-montserrat font-semibold text-dark mb-2">
                Air Suspension
              </p>
              <p className="font-montserrat font-bold text-dark">Yes</p>
            </div>

            <div className="bg-muted rounded-2xl p-8 text-center">
              <Music className="w-8 h-8 text-gold mx-auto mb-4" />
              <p className="font-montserrat font-semibold text-dark mb-2">
                Premium Sound
              </p>
              <p className="font-montserrat font-bold text-dark">Surround</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-montserrat font-bold text-dark">
                Premium Features
              </h3>
              <ul className="space-y-3">
                {[
                  "Leather interior seating",
                  "Climate control",
                  "Premium sound system",
                  "USB charging ports",
                  "WiFi connectivity",
                  "Panoramic sunroof",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="font-inter text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-2xl font-montserrat font-bold text-dark mb-6">
                Pricing Options
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="font-inter text-gray-600">Hourly Rate</span>
                  <span className="font-montserrat font-bold text-dark">
                    $85/hr
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="font-inter text-gray-600">
                    Airport Transfer
                  </span>
                  <span className="font-montserrat font-bold text-dark">
                    $120
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-inter text-gray-600">
                    City-to-City (100 km)
                  </span>
                  <span className="font-montserrat font-bold text-dark">
                    $250
                  </span>
                </div>
              </div>

              <button className="w-full luxury-button-gold mt-8">
                Book {vehicleName}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
