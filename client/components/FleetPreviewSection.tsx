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
    <section className="section-spacing relative bg-gradient-to-b from-indigo-50/20 via-white to-purple-50/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-semibold tracking-[0.3em] border border-indigo-200/50 shadow-sm">
            FLAGSHIP FLEET
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
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
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-purple-100/30 ring-1 ring-purple-100/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200/40"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={getCarTypeImage(carType.id)}
                  alt={carType.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/80 font-semibold">
                      {carType.cars.length > 0
                        ? `${carType.cars.length} Vehicle${carType.cars.length > 1 ? "s" : ""}`
                        : "Special Collection"}
                    </p>
                    <h3 className="text-2xl font-montserrat font-bold text-white mt-1">
                      {carType.name}
                    </h3>
                  </div>
                  <div className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white border border-white/30">
                    Explore
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-6 p-6 bg-gradient-to-br from-white to-gray-50/50">
                <p className="text-sm text-gray-600 font-inter leading-relaxed">
                  {carType.description}
                </p>

                {carType.cars.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-purple-600 font-semibold mb-2">
                      Available Vehicles
                    </p>
                    <ul className="space-y-1.5">
                      {carType.cars.slice(0, 3).map((car, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <Sparkles className="h-3.5 w-3.5 text-purple-500 flex-shrink-0" />
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

                <div className="mt-auto flex items-center justify-between border-t border-purple-100 pt-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-purple-600">
                    <Sparkles className="h-4 w-4 text-purple-500" />
                    Premium fleet selection
                  </div>
                  <ArrowRight className="h-5 w-5 text-purple-600 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/fleet/executive-cars"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5"
          >
            Explore All Categories
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
