import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FLEET_VEHICLES = [
  {
    name: "Mercedes S-Class",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop",
    passengers: "4",
    luggage: "3",
  },
  {
    name: "BMW i7",
    image:
      "https://images.unsplash.com/photo-1533473359331-35acde7260c9?w=600&h=400&fit=crop",
    passengers: "4",
    luggage: "3",
  },
  {
    name: "Range Rover",
    image:
      "https://images.unsplash.com/photo-1552819254-0fcb922c2c63?w=600&h=400&fit=crop",
    passengers: "6",
    luggage: "5",
  },
  {
    name: "Mercedes V-Class",
    image:
      "https://images.unsplash.com/photo-1490618645426-1f5c0ec7b649?w=600&h=400&fit=crop",
    passengers: "7",
    luggage: "8",
  },
];

export const FleetPreviewSection = () => {
  return (
    <section className="section-spacing bg-muted">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-lg font-inter text-gray-600 max-w-2xl mx-auto">
            Curated selection of luxury vehicles for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {FLEET_VEHICLES.map((vehicle) => (
            <Link
              key={vehicle.name}
              to={`/fleet/${vehicle.name.toLowerCase().replace(/ /g, "-")}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold text-dark mb-3 group-hover:text-gold transition-colors">
                  {vehicle.name}
                </h3>
                <div className="flex gap-6 mb-4">
                  <div>
                    <p className="text-sm font-inter text-gray-600">
                      Passengers
                    </p>
                    <p className="text-lg font-montserrat font-bold text-dark">
                      {vehicle.passengers}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-inter text-gray-600">Luggage</p>
                    <p className="text-lg font-montserrat font-bold text-dark">
                      {vehicle.luggage}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-gold font-semibold font-montserrat">
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/fleet/all" className="luxury-button-outline">
            View Full Fleet
          </Link>
        </div>
      </div>
    </section>
  );
};
