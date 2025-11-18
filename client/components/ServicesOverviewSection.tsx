import { Link } from "react-router-dom";
import { Plane, Navigation2, Clock, Heart, Briefcase, Sparkles, Anchor, Zap, MapPin } from "lucide-react";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Plane,
    name: "Airport Transfers",
    description: "Seamless airport pickups and drop-offs with flight tracking.",
    image: "https://images.unsplash.com/photo-1533473359331-35acde7260c9?w=500&h=300&fit=crop",
  },
  {
    icon: Navigation2,
    name: "City-to-City",
    description: "Comfortable long-distance travel between major cities.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&h=300&fit=crop",
  },
  {
    icon: Clock,
    name: "Hourly Hire",
    description: "Book a chauffeur by the hour for maximum flexibility.",
    image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=300&fit=crop",
  },
  {
    icon: Heart,
    name: "Wedding",
    description: "Make your special day even more memorable with our service.",
    image: "https://images.unsplash.com/photo-1567095761054-7ce5d113600f?w=500&h=300&fit=crop",
  },
  {
    icon: Briefcase,
    name: "Business",
    description: "Professional chauffeur service for corporate needs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
  },
  {
    icon: Sparkles,
    name: "Events",
    description: "Transportation solutions for all types of events and celebrations.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&h=300&fit=crop",
  },
  {
    icon: Anchor,
    name: "Seaport",
    description: "Convenient transfers to and from seaport terminals.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
  },
  {
    icon: Zap,
    name: "Private Jet",
    description: "Coordination with private jet services for seamless travel.",
    image: "https://images.unsplash.com/photo-1540962351272-cd4440d87458?w=500&h=300&fit=crop",
  },
  {
    icon: MapPin,
    name: "City Tours",
    description: "Guided city tours with a knowledgeable, professional driver.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
  },
];

export const ServicesOverviewSection = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg font-inter text-gray-600 max-w-2xl mx-auto">
            Comprehensive chauffeur solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.name}
                to={`/services/${service.name.toLowerCase().replace(/ /g, "-")}`}
                className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-luxury-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                    <Icon className="w-12 h-12 text-gold" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold text-dark mb-2 group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-gold font-semibold font-montserrat">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
