import { Link } from "react-router-dom";
import { ArrowRight, Users, Luggage, Wifi, Sparkles } from "lucide-react";

type Vehicle = {
  name: string;
  category: string;
  image: string;
  passengers: string;
  luggage: string;
  perks: string[];
};

const FLEET_VEHICLES: Vehicle[] = [
  {
    name: "Mercedes-Maybach S 680",
    category: "Executive Sedan",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&h=800&fit=crop&sat=-30",
    passengers: "4",
    luggage: "3",
    perks: ["Reclining seats", "Rear tablet suite", "Fridge & glassware"],
  },
  {
    name: "BMW i7 xDrive60",
    category: "Electric Flagship",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&h=800&fit=crop",
    passengers: "4",
    luggage: "3",
    perks: ["Panoramic theatre screen", "Bowers & Wilkins audio", "Ambient cabin"],
  },
  {
    name: "Range Rover Autobiography",
    category: "Luxury SUV",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&h=800&fit=crop",
    passengers: "5",
    luggage: "5",
    perks: ["All-terrain comfort", "Executive rear seats", "Privacy glass"],
  },
  {
    name: "Mercedes V-Class Lounge",
    category: "Group & Events",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&h=800&fit=crop&sat=-40",
    passengers: "7",
    luggage: "8",
    perks: ["Conference seating", "Starlight headliner", "Onboard refreshments"],
  },
  
];

export const FleetPreviewSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-white via-brand-soft/40 to-white">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark text-white text-xs font-semibold tracking-[0.3em]">
            FLAGSHIP FLEET
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark">
            Vehicles curated for boardrooms, red carpets, and runway transfers.
          </h2>
          <p className="text-lg font-inter text-gray-600 max-w-3xl mx-auto">
            Select a category, set your preferences, and we stage the perfect
            vehicle with onboard bar, Wi-Fi, and concierge amenities before you
            arrive.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 mb-16">
          {FLEET_VEHICLES.map((vehicle) => (
            <Link
              key={vehicle.name}
              to={`/fleet/${vehicle.name.toLowerCase().replace(/ /g, "-")}`}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white/80 shadow-xl shadow-black/5 ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-56">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      {vehicle.category}
                    </p>
                    <h3 className="text-2xl font-montserrat font-bold text-white">
                      {vehicle.name}
                    </h3>
                  </div>
                  <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                    View Specs
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex items-center justify-between rounded-2xl border border-gray-100/80 bg-white/90 p-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                        Passengers
                      </p>
                      <p className="text-xl font-montserrat font-bold text-dark">
                        {vehicle.passengers}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Luggage className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                        Luggage
                      </p>
                      <p className="text-xl font-montserrat font-bold text-dark">
                        {vehicle.luggage}
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-gray-600">
                  {vehicle.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-gold" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                    <Wifi className="h-4 w-4 text-gold" />
                    Always-on Wi-Fi & refreshments included
                  </div>
                  <ArrowRight className="h-5 w-5 text-gold transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/fleet/all"
            className="inline-flex items-center gap-3 rounded-full bg-dark px-10 py-4 font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-gold hover:text-dark"
          >
            Explore Full Fleet
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
