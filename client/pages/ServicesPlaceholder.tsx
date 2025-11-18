import { useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { DarkHeroSection } from "@/components/DarkHeroSection";

export default function ServicesPlaceholder() {
  const { id } = useParams<{ id: string }>();

  const serviceName = id
    ? id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Service";

  return (
    <div className="w-full">
      <DarkHeroSection
        title={serviceName}
        subtitle={`Premium ${serviceName.toLowerCase()} service tailored to your needs.`}
      />

      {/* Book Now Button Overlay */}
      <div className="relative -mt-20 mb-12 section-container z-20">
        <button className="px-8 py-3 bg-gold text-dark font-montserrat font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-luxury">
          Book Now
        </button>
      </div>

      {/* Content Section */}
      <section className="section-spacing bg-white">
        <div className="section-container max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold via-gold bg-opacity-10 rounded-3xl overflow-hidden shadow-luxury-lg">
                <img
                  src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=600&fit=crop"
                  alt={serviceName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-montserrat font-bold text-dark">
                Experience Excellence
              </h2>
              <p className="font-inter text-gray-600 leading-relaxed">
                Our {serviceName.toLowerCase()} service combines luxury vehicles with professional chauffeurs to deliver an unforgettable experience. Every journey is tailored to your preferences and requirements.
              </p>

              <div className="space-y-3">
                {["Premium Comfort", "Professional Drivers", "24/7 Availability", "Transparent Pricing"].map(
                  (feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="font-inter text-gray-600">{feature}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="bg-muted rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-montserrat font-bold text-dark mb-6">
              Pricing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-border">
                <p className="font-montserrat font-semibold text-dark mb-2">
                  Hourly Rate
                </p>
                <p className="text-3xl font-montserrat font-bold text-gold mb-4">
                  $75
                </p>
                <p className="font-inter text-sm text-gray-600">per hour</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-border">
                <p className="font-montserrat font-semibold text-dark mb-2">
                  Special Events
                </p>
                <p className="text-3xl font-montserrat font-bold text-gold mb-4">
                  Custom
                </p>
                <p className="font-inter text-sm text-gray-600">
                  Request a quote
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gold bg-opacity-10 rounded-2xl p-8">
            <h3 className="text-2xl font-montserrat font-bold text-dark mb-6">
              Ready to Book?
            </h3>
            <p className="font-inter text-gray-600 mb-6">
              Get started with XChauffur today. Our team is ready to provide you with premium service.
            </p>
            <button className="luxury-button-gold">
              Book Your {serviceName}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
