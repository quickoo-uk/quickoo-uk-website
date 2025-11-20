import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Luggage,
  Sparkles,
  Check,
  Crown,
  ShieldCheck,
  Clock,
  Star,
  MapPin,
} from "lucide-react";
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

  // Get hero image based on car type name or id
  const getCarTypeHeroImage = (carTypeName: string, carTypeId: string): string => {
    const typeImageMap: Record<string, string> = {
      // By name
      "Electric Cars":
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
      "Business Vans":
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
      "Premium SUVs":
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
      "Vintage Cars for Weddings":
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=2000&q=80",
      "Executive Cars":
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
      "Luxury (VIP Class)":
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
      "Special Vehicles (On Request)":
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=80",
      // By id (fallback)
      "electric-cars":
        "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?auto=format&fit=crop&w=2000&q=80",
      "business-vans":
        "https://images.unsplash.com/photo-1605511876319-7f4ef3221c71?auto=format&fit=crop&w=2000&q=80",
      "premium-suvs":
        "https://images.unsplash.com/photo-1617814078590-0e98c024aaa0?auto=format&fit=crop&w=2000&q=80",
      "vintage-cars-weddings":
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=2000&q=80",
      "executive-cars":
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
      "luxury-vip":
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
      "special-vehicles":
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=80",
    };
    return (
      typeImageMap[carTypeName] ||
      typeImageMap[carTypeId] ||
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=80"
    );
  };

  // Updated working images for different car types
  const getCarImage = (carName: string): string => {
    const imageMap: Record<string, string> = {
      "Mercedes-Benz E-Class":
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
      "BMW 5 Series":
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2000&q=80",
      "Audi A6":
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0ec6?auto=format&fit=crop&w=2000&q=80",
      "Mercedes-Benz S-Class":
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
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
      EQE: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?auto=format&fit=crop&w=2000&q=80",
      EQS: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?auto=format&fit=crop&w=2000&q=80",
      "BMW I7":
        "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?auto=format&fit=crop&w=2000&q=80",
    };
    return (
      imageMap[carName] ||
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=80"
    );
  };

  const heroImage = getCarTypeHeroImage(carType.name, carType.id);
  const heroWorkingImage =
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80";

  const trustMetrics = [
    { label: "Fleet size", value: "500+" },
    { label: "Service rating", value: "4.98★" },
    { label: "Availability", value: "24/7" },
  ];

  return (
    <div className="w-full bg-[radial-gradient(circle_at_top,_#ffffff,_#f3f6ff,_#fff6ed)] text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pb-20 md:pb-28">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={carType.name}
            className="h-full w-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-[#f8f1ff]/60" />
        </div>
        <div className="absolute -top-24 right-6 h-72 w-72 rounded-full bg-[#f3d6ff]/40 blur-[150px] opacity-60" />
        <div className="absolute -bottom-36 left-0 h-96 w-96 bg-[#9fd4ff]/25 blur-[180px] opacity-60" />

        <svg
          className="pointer-events-none absolute -right-6 top-10 h-64 w-64 text-[#b3c4ff]/60 animate-[spin_28s_linear_infinite]"
          viewBox="0 0 200 200"
          aria-hidden
        >
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        <div className="relative z-10 section-container py-12 lg:py-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm shadow-[#c9d6ff]/40">
              <Sparkles className="h-4 w-4 text-[#7b5dff]" />
              <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                {carType.name.toUpperCase()}
              </span>
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-montserrat font-semibold leading-tight">
                Premium {carType.name.toLowerCase()}{" "}
                <span className="bg-gradient-to-r from-[#1a1431] via-[#40206c] to-[#806af1] bg-clip-text text-transparent">
                  collection.
                </span>
              </h1>
              <p className="text-lg text-slate-600 font-inter max-w-2xl">
                {carType.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/book-now"
                className="luxury-button-gold px-8 py-3 text-base shadow-lg shadow-gold/30"
              >
                Book Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-slate-200 px-8 py-3 text-base font-semibold text-slate-900 hover:border-[#3f1c6e] hover:text-[#3f1c6e] transition"
              >
                View Fleet
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {trustMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/60 bg-white/85 px-6 py-4 text-center backdrop-blur shadow-[0_25px_70px_rgba(119,132,255,0.18)]"
                >
                  <p className="text-2xl font-montserrat text-[#6a63ff]">{metric.value}</p>
                  <p className="text-xs tracking-[0.3em] uppercase text-slate-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -m-6 rounded-[40px] bg-gradient-to-br from-white/70 to-transparent blur-2xl opacity-80" />
            <div className="relative rounded-[36px] border border-white/50 bg-white/85 p-6 backdrop-blur-lg shadow-[0_35px_90px_rgba(116,128,255,0.25)]">
              <div className="overflow-hidden rounded-[28px]">
                <img
                  src={heroImage}
                  alt={`${carType.name} showcase`}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="font-montserrat text-dark text-xl">Fleet preview</p>
                  <Crown className="text-[#7d6bff]" />
                </div>
                <p className="text-sm text-slate-600 font-inter">
                  Meticulously maintained vehicles with premium amenities and professional chauffeurs.
                </p>
                <div className="grid grid-cols-3 gap-3 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
                  <span>Premium</span>
                  <span>Luxury</span>
                  <span>Comfort</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 hidden sm:block rounded-[28px] border border-white/60 bg-white/90 p-4 shadow-xl">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={heroWorkingImage}
                    alt="Quickoo fleet operations"
                    className="h-28 w-40 object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-xs uppercase tracking-[0.4em] text-slate-500">
                  Fleet operations
                </p>
                <p className="text-sm font-semibold text-slate-800">Live availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Grid Section */}
      {carType.cars.length > 0 ? (
        <section className="section-spacing relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfaff] via-[#f1f5ff] to-[#fff5ec]" />
          <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-gold/15 blur-[120px]" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a5c9ff]/20 blur-[140px]" />
          <svg
            className="pointer-events-none absolute left-10 top-10 h-32 w-32 text-gold/30 animate-[spin_24s_linear_infinite]"
            viewBox="0 0 160 160"
            aria-hidden
          >
            <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <circle cx="80" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="0.6" />
          </svg>

          <div className="section-container relative">
            <div className="text-center mb-12 space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                Available vehicles
              </p>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                Explore our curated {carType.name.toLowerCase()} fleet
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
                Each vehicle is meticulously maintained and equipped with premium amenities for your
                comfort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carType.cars.map((car, index) => (
                <div
                  key={index}
                  className="group relative bg-white/90 rounded-[28px] overflow-hidden shadow-[0_20px_70px_rgba(15,23,42,0.08)] border border-white/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(116,128,255,0.25)]"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={getCarImage(car.name)}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                        {car.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-5">
                    <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-gradient-to-r from-white via-white to-white/60 p-4">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-[#7b5dff]" />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-inter">
                            Passengers
                          </p>
                          <p className="text-lg font-montserrat font-bold text-dark">4-5</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Luggage className="h-5 w-5 text-[#7b5dff]" />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-inter">
                            Luggage
                          </p>
                          <p className="text-lg font-montserrat font-bold text-dark">3-4</p>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {[
                        "Premium leather interior",
                        "Advanced climate control",
                        "Premium sound system",
                        "Wi-Fi & charging ports",
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-[#7b5dff] flex-shrink-0" />
                          <span className="font-inter">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/book-now"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1a1230] via-[#3f1c6e] to-[#806af1] text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#3f1c6e]/30"
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
        <section className="section-spacing relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfaff] via-[#f1f5ff] to-[#fff5ec]" />
          <div className="section-container relative">
            <div className="text-center max-w-3xl mx-auto">
              <div className="bg-white/90 rounded-[32px] p-12 shadow-[0_30px_90px_rgba(15,23,42,0.15)] border border-white/60 backdrop-blur">
                <Sparkles className="w-16 h-16 text-[#7b5dff] mx-auto mb-6" />
                <h2 className="text-3xl font-montserrat font-bold text-dark mb-4">
                  Special Collection
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-inter">
                  Our vintage car collection for weddings features carefully curated classic vehicles
                  that add timeless elegance to your special day. Contact us to discuss available
                  options and make your wedding transportation truly memorable.
                </p>
                <Link
                  to="/contact"
                  className="luxury-button-gold px-8 py-4 text-base inline-flex items-center gap-2"
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
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#f1f3ff,_transparent_65%)]" />
        <div className="section-container relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                Why choose us
              </p>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                Why Choose {carType.name}?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Star,
                  title: "Premium Quality",
                  description:
                    "Every vehicle in our fleet is meticulously maintained and regularly serviced to ensure the highest standards.",
                },
                {
                  icon: ShieldCheck,
                  title: "Professional Chauffeurs",
                  description:
                    "Our experienced and courteous chauffeurs are trained to provide exceptional service and ensure your comfort.",
                },
                {
                  icon: Clock,
                  title: "Flexible Booking",
                  description:
                    "Book by the hour, for airport transfers, or for extended journeys. We accommodate your schedule.",
                },
                {
                  icon: Sparkles,
                  title: "24/7 Availability",
                  description:
                    "Our concierge service is available around the clock to assist with your transportation needs.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-[28px] bg-white/90 border border-slate-100 shadow-[0_20px_70px_rgba(15,23,42,0.08)] hover:border-[#7b5dff]/30 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="rounded-full bg-[#7b5dff]/15 p-3">
                        <Icon className="h-6 w-6 text-[#7b5dff]" />
                      </div>
                      <h3 className="text-xl font-montserrat font-bold text-dark">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 font-inter">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-[#fff1e2] via-[#fff8fb] to-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#f3d6ff]/30 blur-[160px]" />
        <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[#9fd4ff]/30 blur-[160px]" />
        <svg
          className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 text-gold/20 animate-[spin_26s_linear_infinite]"
          viewBox="0 0 160 160"
          aria-hidden
        >
          <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="80" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm mb-6">
              <Sparkles className="h-4 w-4 text-[#7b5dff]" />
              <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                Ready to experience luxury
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-dark">
              Book your premium {carType.name.toLowerCase()} today
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-inter">
              Experience the perfect blend of comfort, style, and exceptional service with our
              curated {carType.name.toLowerCase()} collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-now"
                className="luxury-button-gold px-8 py-4 text-lg inline-flex items-center gap-2 shadow-lg shadow-gold/30"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-slate-200 px-8 py-4 text-lg font-semibold text-slate-900 hover:border-[#3f1c6e] hover:text-[#3f1c6e] transition inline-flex items-center gap-2"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { label: "Concierge desk", value: "+44 20 3576 1617" },
                { label: "Response time", value: "12 min avg" },
                { label: "Availability", value: "24/7 support" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/60 bg-white/80 px-5 py-4 text-center backdrop-blur shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">
                    {item.label}
                  </p>
                  <p className="text-lg font-montserrat font-bold text-dark">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
