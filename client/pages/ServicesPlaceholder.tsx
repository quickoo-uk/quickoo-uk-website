import { useParams } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Star,
  CheckCircle2,
} from "lucide-react";
import { DarkHeroSection } from "@/components/DarkHeroSection";

export default function ServicesPlaceholder() {
  const { id } = useParams<{ id: string }>();

  const serviceName = id
    ? id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Service";

  // Service-based hero images for realism
  const SERVICE_IMAGES: Record<string, string> = {
    "airport-transfers":
      "https://images.unsplash.com/photo-1542378151504-0361b8ec8f81?auto=format&fit=crop&w=2000&q=80",
    "hourly-hire":
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=2000&q=80",
    "city-to-city":
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=2000&q=80",
    wedding:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=2000&q=80",
    business:
      "https://images.unsplash.com/photo-1533473359331-35acde7260c9?auto=format&fit=crop&w=2000&q=80",
    events:
      "https://images.unsplash.com/photo-1517202383675-eb0a6e27775f?auto=format&fit=crop&w=2000&q=80",
    "private-jet":
      "https://images.unsplash.com/photo-1540949135379-59e5f2d35d34?auto=format&fit=crop&w=2000&q=80",
    "city-tours":
      "https://images.unsplash.com/photo-1455906876003-298dd8c44ec5?auto=format&fit=crop&w=2000&q=80",
  };

  const serviceImage = SERVICE_IMAGES[id ?? ""] ?? SERVICE_IMAGES["business"];

  return (
    <div className="w-full">
      {/* Custom Hero Section with dynamic image */}
      <DarkHeroSection
        title={serviceName}
        subtitle={`Premium ${serviceName.toLowerCase()} service tailored to your needs.`}
        backgroundImage={serviceImage}
      />

      {/* BOOK NOW floating button */}
      <div className="relative -mt-20 mb-14 section-container z-20">
        <button className="px-8 py-3 bg-gold text-dark font-montserrat font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-luxury">
          Book Now
        </button>
      </div>

      {/* MAIN CONTENT */}
      <section className="section-spacing bg-white">
        <div className="section-container max-w-4xl">
          {/* IMAGE + DESCRIPTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start mb-20">
            {/* Service Image */}
            <div className="relative h-96 hidden md:block">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-luxury-lg">
                <img
                  src={serviceImage}
                  alt={serviceName}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-montserrat font-bold text-dark">
                Experience Excellence
              </h2>

              <p className="font-inter text-gray-600 leading-relaxed">
                Our {serviceName.toLowerCase()} service combines premium
                vehicles, professional chauffeurs, and an unwavering commitment
                to luxury. Every ride is personalised to meet your exact needs.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                {[
                  "Professional chauffeur team",
                  "Guaranteed punctuality",
                  "Premium comfort & amenities",
                  "24/7 customer support",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold w-5 h-5" />
                    <span className="font-inter text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BENEFITS SECTION */}
          <div className="mb-20">
            <h3 className="text-3xl font-montserrat font-bold text-dark mb-10">
              Why Choose Our {serviceName} Service?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Always On Time",
                  text: "Punctuality is at the core of our service. No delays, ever.",
                },
                {
                  icon: ShieldCheck,
                  title: "Trusted Professionals",
                  text: "Certified chauffeurs trained for luxury service delivery.",
                },
                {
                  icon: Star,
                  title: "Luxury Guaranteed",
                  text: "Top-tier vehicles with flawless comfort and amenities.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-muted p-8 rounded-2xl hover:shadow-luxury transition-all"
                  >
                    <Icon className="w-10 h-10 text-gold mb-4" />
                    <h4 className="font-montserrat font-bold text-dark text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 font-inter">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PRICING SECTION */}
          <div className="bg-muted rounded-2xl p-10 mb-16">
            <h3 className="text-3xl font-montserrat font-bold text-dark mb-8">
              Pricing
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  label: "Hourly Rate",
                  price: "$75",
                  note: "per hour",
                },
                {
                  label: "Special Events",
                  price: "Custom",
                  note: "Request a quote",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-border hover:border-gold transition-all"
                >
                  <p className="font-montserrat font-semibold text-dark mb-1">
                    {item.label}
                  </p>
                  <p className="text-4xl font-montserrat font-bold text-gold mb-2">
                    {item.price}
                  </p>
                  <p className="text-gray-600 font-inter text-sm">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="bg-gold/10 rounded-2xl p-10 text-center shadow-md">
            <h3 className="text-3xl font-montserrat font-bold text-dark mb-4">
              Ready to Book?
            </h3>
            <p className="font-inter text-gray-700 mb-6">
              Enjoy a seamless luxury experience with our premium chauffeur
              team.
            </p>
            <button className="luxury-button-gold px-10 py-3 text-lg">
              Book Your {serviceName}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
