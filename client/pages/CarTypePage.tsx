import { useParams, Link } from "react-router-dom";
import { ArrowRight, Users, Luggage, Sparkles, Check } from "lucide-react";
import { getCarTypeById } from "@shared/fleet";
import { cn } from "@/lib/utils";

export default function CarTypePage() {
  const { id } = useParams<{ id: string }>();
  const carType = id ? getCarTypeById(id) : null;

  if (!carType) {
    return (
      <div className="section-spacing bg-white">
        <div className="section-container text-center">
          <h1 className="text-4xl font-montserrat font-bold text-dark mb-4">
            Car Type Not Found
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gold hover:underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Default images for different car types
  const getCarImage = (carName: string): string => {
    const imageMap: Record<string, string> = {
      "Mercedes-Benz E-Class":
        "https://images.unsplash.com/photo-1617469767053-adf3ef61e6d1?auto=format&fit=crop&w=2000&q=80",
      "BMW 5 Series":
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2000&q=80",
      "Audi A6":
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0ec6?auto=format&fit=crop&w=2000&q=80",
      "Mercedes-Benz S-Class":
        "https://images.unsplash.com/photo-1617469767053-adf3ef61e6d1?auto=format&fit=crop&w=2000&q=80",
      "BMW 7 Series":
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2000&q=80",
      "Audi A8 L":
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0ec6?auto=format&fit=crop&w=2000&q=80",
      "Range Rover Autobiography / Vogue":
        "https://images.unsplash.com/photo-1617814078590-0e98c024aaa0?auto=format&fit=crop&w=2000&q=80",
      "Range Rover Sport":
        "https://images.unsplash.com/photo-1617814078590-0e98c024aaa0?auto=format&fit=crop&w=2000&q=80",
      "Mercedes-Benz V class":
        "https://images.unsplash.com/photo-1605511876319-7f4ef3221c71?auto=format&fit=crop&w=2000&q=80",
      "Stretch Limousines":
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=80",
      "Rolls Royce":
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=80",
      EQE: "https://images.unsplash.com/photo-1668875515314-8a79808bf6f8?auto=format&fit=crop&w=2000&q=80",
      EQS: "https://images.unsplash.com/photo-1668875515314-8a79808bf6f8?auto=format&fit=crop&w=2000&q=80",
      "BMW I7":
        "https://images.unsplash.com/photo-1668875515314-8a79808bf6f8?auto=format&fit=crop&w=2000&q=80",
    };
    return (
      imageMap[carName] ||
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=80"
    );
  };

  const heroImage = getCarImage(carType.cars[0]?.name || "");

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt={carType.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 section-container text-white max-w-5xl text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm text-gold text-xs font-semibold tracking-[0.3em] mb-6">
            {carType.name.toUpperCase()}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6">
            {carType.name}
          </h1>
          <p className="text-lg md:text-xl font-inter text-gray-200 max-w-2xl mx-auto mb-8">
            {carType.description}
          </p>
          <Link
            to="/book-now"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-semibold rounded-full hover:bg-gold/90 transition-colors shadow-lg"
          >
            Book Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Cars Grid Section */}
      {carType.cars.length > 0 ? (
        <section className="section-spacing bg-gradient-to-b from-white via-gray-50/50 to-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-4">
                Available Vehicles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our curated selection of premium vehicles in this category
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carType.cars.map((car, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={getCarImage(car.name)}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                        {car.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/50 p-4">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-gold" />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                            Passengers
                          </p>
                          <p className="text-lg font-montserrat font-bold text-dark">
                            4-5
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Luggage className="h-5 w-5 text-gold" />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                            Luggage
                          </p>
                          <p className="text-lg font-montserrat font-bold text-dark">
                            3-4
                          </p>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {[
                        "Premium leather interior",
                        "Advanced climate control",
                        "Premium sound system",
                        "Wi-Fi & charging ports",
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-gold flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/book-now"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-dark text-white font-semibold rounded-xl hover:bg-gold hover:text-dark transition-colors"
                    >
                      Book {car.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="section-spacing bg-gradient-to-b from-white via-gray-50/50 to-white">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
                <Sparkles className="w-16 h-16 text-gold mx-auto mb-6" />
                <h2 className="text-3xl font-montserrat font-bold text-dark mb-4">
                  Special Collection
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our vintage car collection for weddings features carefully curated
                  classic vehicles that add timeless elegance to your special day.
                  Contact us to discuss available options and make your wedding
                  transportation truly memorable.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-semibold rounded-full hover:bg-gold/90 transition-colors"
                >
                  Contact Us for Details
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-montserrat font-bold text-dark mb-12 text-center">
              Why Choose {carType.name}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Premium Quality",
                  description:
                    "Every vehicle in our fleet is meticulously maintained and regularly serviced to ensure the highest standards.",
                },
                {
                  title: "Professional Chauffeurs",
                  description:
                    "Our experienced and courteous chauffeurs are trained to provide exceptional service and ensure your comfort.",
                },
                {
                  title: "Flexible Booking",
                  description:
                    "Book by the hour, for airport transfers, or for extended journeys. We accommodate your schedule.",
                },
                {
                  title: "24/7 Availability",
                  description:
                    "Our concierge service is available around the clock to assist with your transportation needs.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-gold transition-colors"
                >
                  <h3 className="text-xl font-montserrat font-bold text-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-inter">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-dark via-[#1a103d] to-dark text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your premium {carType.name.toLowerCase()} today and experience
              the perfect blend of comfort, style, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-now"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark font-semibold rounded-full hover:bg-gold/90 transition-colors"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-gold hover:bg-gold/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

