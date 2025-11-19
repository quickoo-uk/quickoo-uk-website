import { Link } from "react-router-dom";
import { ArrowRight, Users, Luggage } from "lucide-react";

const FLEET_VEHICLES = [
  {
    name: "Mercedes S-Class",
    image: "/fleet/Mercedes-S-Class.png",
    passengers: "4",
    luggage: "3",
  },
  {
    name: "BMW i7",
    image: "/fleet/BMW-i7.png",
    passengers: "4",
    luggage: "3",
  },
  {
    name: "Range Rover",
    image: "/fleet/Range-Rover.png",
    passengers: "6",
    luggage: "5",
  },
  {
    name: "Mercedes V-Class",
    image: "/fleet/Mercedes-V-Class.png",
    passengers: "7",
    luggage: "8",
  },
];

export const FleetPreviewSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-white via-[#f6f4ff] to-[#eef6ff]">
      <div className="section-container">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-brand-soft text-gold rounded-full text-sm font-semibold mb-4">
            OUR FLEET
          </span>

          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-6">
            Premium Vehicles for Every Journey
          </h2>

          <p className="text-lg font-inter text-gray-600 max-w-3xl mx-auto">
            Experience unmatched elegance, comfort, and safety with our premium
            selection of chauffeur-driven luxury vehicles.
          </p>
        </div>

        {/* FLEET GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {FLEET_VEHICLES.map((vehicle) => (
            <Link
              key={vehicle.name}
              to={`/fleet/${vehicle.name.toLowerCase().replace(/ /g, "-")}`}
              className="
                group bg-white rounded-2xl overflow-hidden 
                shadow-[0_12px_50px_rgba(10,5,32,0.08)]
                hover:shadow-[0_25px_80px_rgba(94,75,255,0.25)]
                transition-all duration-500 border border-transparent
                hover:border-gold/60
              "
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="
                    w-full h-full object-cover 
                    group-hover:scale-110
                    transition-transform duration-700
                  "
                />

                {/* GOLD GRADIENT OVERLAY */}
                <div
                  className="
                    absolute inset-0 bg-gradient-to-t 
                    from-black/70 via-black/20 to-transparent 
                    opacity-50 group-hover:opacity-80 
                    transition-opacity duration-500
                  "
                />
              </div>

              {/* BODY */}
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold text-dark mb-4 group-hover:text-gold transition-colors">
                  {vehicle.name}
                </h3>

                {/* SPECS */}
                <div className="flex gap-6 mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gold" />
                    <div>
                      <p className="text-xs font-inter text-gray-600">
                        Passengers
                      </p>
                      <p className="font-montserrat font-bold text-dark">
                        {vehicle.passengers}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Luggage className="w-4 h-4 text-gold" />
                    <div>
                      <p className="text-xs font-inter text-gray-600">
                        Luggage
                      </p>
                      <p className="font-montserrat font-bold text-dark">
                        {vehicle.luggage}
                      </p>
                    </div>
                  </div>
                </div>

                {/* LEARN MORE */}
                <div className="flex items-center text-gold font-semibold font-montserrat group-hover:text-dark transition-colors">
                  Learn More
                  <ArrowRight
                    className="
                      w-4 h-4 ml-2 
                      group-hover:translate-x-1 
                      transition-transform
                    "
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/fleet/all"
            className="luxury-button-gold inline-block text-lg"
          >
            Explore Full Fleet
          </Link>
        </div>
      </div>
    </section>
  );
};
