import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { FLEET_TYPES } from "@shared/fleet";

// Get default images for car types
const getCarTypeImage = (carTypeId: string): string => {
  const imageMap: Record<string, string> = {
    "executive-cars":
      "https://images.unsplash.com/photo-1617469767053-adf3ef61e6d1?auto=format&fit=crop&w=2000&q=80",
    "luxury-vip":
      "https://images.unsplash.com/photo-1617469767053-adf3ef61e6d1?auto=format&fit=crop&w=2000&q=80",
    "premium-suvs":
      "https://images.unsplash.com/photo-1617814078590-0e98c024aaa0?auto=format&fit=crop&w=2000&q=80",
    "business-vans":
      "https://images.unsplash.com/photo-1605511876319-7f4ef3221c71?auto=format&fit=crop&w=2000&q=80",
    "special-vehicles":
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=80",
    "electric-cars":
      "https://images.unsplash.com/photo-1668875515314-8a79808bf6f8?auto=format&fit=crop&w=2000&q=80",
    "vintage-cars-weddings":
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=80",
  };
  return (
    imageMap[carTypeId] ||
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=80"
  );
};

export const FleetPreviewSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-white via-brand-soft/40 to-white">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark text-white text-xs font-semibold tracking-[0.3em]">
            FLAGSHIP FLEET
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-dark">
            Vehicles curated for boardrooms, red carpets, and runway transfers.
          </h2>
          <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
            Select a category, set your preferences, and we stage the perfect
            vehicle with onboard bar, Wi-Fi, and concierge amenities before you
            arrive.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 mb-16">
          {FLEET_TYPES.map((carType) => (
            <Link
              key={carType.id}
              to={`/fleet/${carType.id}`}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white/80 shadow-xl shadow-black/5 ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-56">
                <img
                  src={getCarTypeImage(carType.id)}
                  alt={carType.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      {carType.cars.length > 0
                        ? `${carType.cars.length} Vehicle${carType.cars.length > 1 ? "s" : ""}`
                        : "Special Collection"}
                    </p>
                    <h3 className="text-2xl font-montserrat font-bold text-white">
                      {carType.name}
                    </h3>
                  </div>
                  <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
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
                          <Sparkles className="h-3.5 w-3.5 text-gold flex-shrink-0" />
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
                    <Sparkles className="h-4 w-4 text-gold" />
                    Premium fleet selection
                  </div>
                  <ArrowRight className="h-5 w-5 text-gold transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/fleet/executive-cars"
            className="inline-flex items-center gap-3 rounded-full bg-dark px-10 py-4 font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-gold hover:text-dark"
          >
            Explore All Categories
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
