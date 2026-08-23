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
  Leaf,
  Eye,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getCarTypeById } from "@shared/fleet";
import { cn } from "@/lib/utils";
import { SectionChip } from "@/components/SectionChip";

const CAR_TYPE_TAGLINES: Record<string, { title: string; highlight: string }> = {
  "executive-cars": {
    title: "Executive standards,",
    highlight: "defined by excellence.",
  },
  "luxury-vip": {
    title: "The pinnacle of",
    highlight: "automotive luxury.",
  },
  "business-vans": {
    title: "Spacious comfort,",
    highlight: "for your entire team.",
  },
  "premium-suvs": {
    title: "Commanding presence,",
    highlight: "superior comfort.",
  },
  "electric-cars": {
    title: "Sustainable luxury,",
    highlight: "for a greener future.",
  },
  "vintage-cars-weddings": {
    title: "Timeless elegance,",
    highlight: "for your special day.",
  },
  "special-vehicles": {
    title: "Bespoke solutions,",
    highlight: "for unique requirements.",
  },
};

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
      // By name - using local fleet type hero images
      "Electric Class": "/fleet/Electric Cars.png",
      "Business Vans": "/fleet/Business Vans.png",
      "Premium SUVs": "/fleet/Premium SUVs.png",
      "Vintage Cars for Weddings": "/fleet/Vintage Cars for Weddings.png",
      "Executive Cars": "/fleet/Executive Cars.png",
      "Luxury (VIP Class)": "/fleet/Luxury cars.png",
      "Special Vehicles (On Request)": "/fleet/Special Vehicles.png",
      // By id (fallback)
      "electric-cars": "/fleet/Electric Cars.png",
      "business-vans": "/fleet/Business Vans.png",
      "premium-suvs": "/fleet/Premium SUVs.png",
      "vintage-cars-weddings": "/fleet/Vintage Cars for Weddings.png",
      "executive-cars": "/fleet/Executive Cars.png",
      "luxury-vip": "/fleet/Luxury cars.png",
      "special-vehicles": "/fleet/Special Vehicles.png",
    };
    return (
      typeImageMap[carTypeName] ||
      typeImageMap[carTypeId] ||
      "/fleet/fleet-default-hero.jpg"
    );
  };

  // Updated working images for different car types
  const getCarImage = (carName: string): string => {
    const imageMap: Record<string, string> = {
      // Using local assets - matching exact filenames
      "Mercedes-Benz E-Class": "/fleet/Mercedes-benz-e-class.jpg",
      "BMW 5 Series": "/fleet/BMW 5 Series.png",
      "Audi A6": "/fleet/audi A6.png",
      "Mercedes-Benz S-Class": "/fleet/Mercedes-benz-s-class.png",
      "BMW 7 Series": "/fleet/BMW 7 Series.png",
      "Audi A8 L": "/fleet/Audi A8 L.png",
      "Range Rover Autobiography / Vogue": "/fleet/Range Rover Autobiography  Vogue.png",
      "Range Rover Sport": "/fleet/Range Rover Sport in black.png",
      "Mercedes-Benz V class": "/fleet/Mercedes-Benz V-Class.png",
      "Stretch Limousines": "/fleet/stretch limousine.png",
      "Rolls Royce": "/fleet/Rolls Royce.png",
      EQE: "/fleet/EQE.png",
      EQS: "/fleet/EQS.png",
      "BMW I7": "/fleet/BMW i7.png",
      "Luggage Transfer": "/fleet/luggage-transfer.png",
      "EQV": "/fleet/Mercedes-EQV.png",
    };
    return (
      imageMap[carName] ||
      "/fleet/fleet-default-car.jpg"
    );
  };

  const heroImage = getCarTypeHeroImage(carType.name, carType.id);
  const heroWorkingImage = "/fleet/fleet-operations-card.jpg";

  // Detailed specifications for each vehicle model
  const CAR_CONFIGURATIONS: Record<string, string[]> = {
    "Mercedes-Benz E-Class": [
      "Extended legroom (LWB)",
      "Rear climate control",
      "Ambient lighting (64 colors)",
      "Burmester® surround sound",
    ],
    "BMW 5 Series": [
      "Spacious rear cabin",
      "Four-zone climate control",
      "Harman Kardon audio",
      "Fine-grain leather upholstery",
    ],
    "Audi A6": [
      "Matrix LED lighting",
      " Acoustic glazing for silence",
      "Valcona leather seating",
      "Bang & Olufsen 3D sound",
    ],
    "Mercedes-Benz S-Class": [
      "Executive rear seating",
      "Chauffeur package with footrest",
      "Rear seat massage function",
      "Burmester® 4D surround sound",
    ],
    "BMW 7 Series": [
      "Sky Lounge panoramic roof",
      "Rear-seat theater screen",
      "Executive Lounge seating",
      "Bowers & Wilkins Diamond sound",
    ],
    "Audi A8 L": [
      "Relaxation seat with foot massage",
      "Predictive active suspension",
      "OLED rear lighting",
      "Rear seat remote control",
    ],
    "Range Rover Autobiography / Vogue": [
      "Executive Class rear seating",
      "Deployable center console",
      "Meridian™ Signature Sound",
      "Panoramic sliding roof",
    ],
    "Range Rover Sport": [
      "Meridian™ Sound System",
      "Heated and cooled seats",
      "Electronic air suspension",
      "Premium leather interior",
    ],
    "Mercedes-Benz V class": [
      "Conference style seating",
      "Burmester® surround sound",
      "Electric sliding doors",
      "Nappa leather upholstery",
    ],
    "Mercedes-Benz V-Class": [
      "Conference style seating",
      "Burmester® surround sound",
      "Electric sliding doors",
      "Nappa leather upholstery",
    ],
    "Stretch Limousines": [
      "Privacy partition",
      "Fiber optic mood lighting",
      "Champagne bar",
      "Premium sound system",
    ],
    "Rolls Royce": [
      "Starlight headliner",
      "Bespoke audio system",
      "Lambswool floor mats",
      "Champagne cooler",
    ],
    EQE: [
      "HEPA air filtration",
      "MBUX Hyperscreen",
      "Burmester® 3D sound",
      "Zero-emission luxury",
    ],
    EQS: [
      "Rear seat massage",
      "MBUX High-End Rear Entertainment",
      "Energizing Air Control",
      "Active ambient lighting",
    ],
    "BMW I7": [
      "31-inch Theatre Screen",
      "Executive Lounge seating",
      "Automatic doors",
      "Iconic Glow crystal headlights",
    ],
    EQV: [
      "Electric intelligence",
      "MBUX infotainment",
      "Flexible seating rail system",
      "Pre-entry climate control",
    ],
    "Luggage Transfer": ["Large capacity cargo", "Secure transport", "GPS tracking"],
  };

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
        <div className="absolute -top-24 right-6 h-72 w-72 rounded-full bg-[#8fe00f]/40 blur-[150px] opacity-60" />
        <div className="absolute -bottom-36 left-0 h-96 w-96 bg-[#8fe00f]/25 blur-[180px] opacity-60" />

        <svg
          className="pointer-events-none absolute -right-6 top-10 h-64 w-64 text-[#8fe00f]/60 animate-[spin_28s_linear_infinite]"
          viewBox="0 0 200 200"
          aria-hidden
        >
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        <div className="relative z-10 section-container py-12 lg:py-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <SectionChip title={carType.name.toUpperCase()} icon={Sparkles} />
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-montserrat font-semibold leading-tight">
                {CAR_TYPE_TAGLINES[id ?? ""] ? (
                  <>
                    {CAR_TYPE_TAGLINES[id ?? ""].title}{" "}
                    <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                      {CAR_TYPE_TAGLINES[id ?? ""].highlight}
                    </span>
                  </>
                ) : (
                  <>
                    Premium {carType.name.toLowerCase()}{" "}
                    <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                      collection.
                    </span>
                  </>
                )}
              </h1>
              <p className="text-lg text-slate-600 font-inter max-w-2xl">
                {carType.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/#home-booking"
                className="inline-flex items-center gap-2 rounded-full luxury-button-gold px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#2a4204]/35 transition hover:opacity-90 hover:scale-[1.02]"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-8 py-3 text-base font-semibold text-slate-600 hover:border-[#2a4204] hover:text-[#2a4204] transition"
              >
                View Fleet
              </Link>
            </div>

          </div>

          <div className="relative">
            <div className="absolute inset-0 -m-6 rounded-[40px] bg-gradient-to-br from-white/70 to-transparent blur-2xl opacity-80" />
            <div className="relative rounded-[36px] border border-white/50 bg-white/85 p-6 backdrop-blur-lg shadow-[0_35px_90px_rgba(72,115,7,0.25)]">
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
                  <Crown className="text-[#487307]" />
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
              <p className="text-lg uppercase tracking-[0.4em] text-slate-500">
                Available vehicles
              </p>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                Explore our premium {carType.name.toLowerCase()} fleet
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
                    {
                      carType.id === "special-vehicles" ? null : <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-gradient-to-r from-white via-white to-white/60 p-4">

                        {car.name !== "Luggage Transfer" && (
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-[#487307]" />

                            <div>
                              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-inter">
                                Passengers
                              </p>
                              <p className="text-lg font-montserrat font-bold text-dark flex items-center gap-2">
                                {(() => {
                                  if (carType.id === "business-vans") return "Up to 7";
                                  if (carType.id === "special-vehicles") {
                                    return index === 0 ? "Up to 7" : "Up to 4";
                                  }
                                  return car.name === "EQS" || car.name === "BMW I7" ? "Up to 3" : "Up to 4";
                                })()}
                                <Eye className="w-3 h-3 text-slate-400" />
                              </p>
                            </div>
                          </div>
                        )}

                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                                  <Eye className="h-5 w-5 text-[#487307]" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="bg-white border text-slate-900 border-slate-200">
                                <p className="font-semibold mb-2 text-[#487307]">{car.name} Configuration</p>
                                <ul className="list-disc pl-4 space-y-1 text-xs">
                                  {CAR_CONFIGURATIONS[car.name] ? (
                                    CAR_CONFIGURATIONS[car.name].map((spec, i) => (
                                      <li key={i}>{spec}</li>
                                    ))
                                  ) : (
                                    <li>Premium luxury specification</li>
                                  )}
                                </ul>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>





                        {car.name === "Luggage Transfer" && (
                          <div className="flex items-start gap-3 text-right ml-auto">
                            <div className="text-right">
                              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-inter">
                                Luggage
                              </p>
                              <p className="text-lg font-montserrat font-bold text-dark">
                                {car.name === "Luggage Transfer" && "35"}
                              </p>
                            </div>
                            <Luggage className="h-5 w-5 text-[#487307]" />
                          </div>
                        )}


                      </div>
                    }

                    <ul className="space-y-3">
                      {[
                        "Premium leather interior",
                        "Advanced climate control",
                        "Premium sound system",
                        "Wi-Fi & charging ports",
                        "Complimentary water bottle",
                        "Professional chauffeur attire"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-[#487307] flex-shrink-0" />
                          <span className="font-inter">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/#home-booking"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0a1a02] via-[#2a4204] to-[#487307] text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#2a4204]/30"
                    >
                      Book Now
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
                <Sparkles className="w-16 h-16 text-[#487307] mx-auto mb-6" />
                <h2 className="text-3xl font-montserrat font-bold text-dark mb-4">
                  Special Collection
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-inter">
                  Our vintage car collection for weddings features carefully selected classic vehicles
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
              <p className="text-lg uppercase tracking-[0.4em] text-slate-500">
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
                {
                  icon: Leaf,
                  title: "Eco-Friendly Choice",
                  description:
                    "We are committed to sustainability, offering a range of electric and hybrid vehicles for a greener journey.",
                },
                ...(carType.id === "business-vans"
                  ? [
                    {
                      icon: Luggage,
                      title: "Luggage Transfer",
                      description:
                        "Generous cargo space ideal for airport transfers, equipment transport, and group luggage requirements.",
                    },
                  ]
                  : []),
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-[28px] bg-white/90 border border-slate-100 shadow-[0_20px_70px_rgba(15,23,42,0.08)] hover:border-[#487307]/30 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="rounded-full bg-[#487307]/15 p-3">
                        <Icon className="h-6 w-6 text-[#487307]" />
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
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#8fe00f]/30 blur-[160px]" />
        <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[#8fe00f]/30 blur-[160px]" />
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
            <SectionChip title="Ready to experience luxury" icon={Sparkles} />
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-dark">
              Book your premium {carType.name.toLowerCase()} today
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-inter">
              Experience the perfect blend of comfort, style, and exceptional service with our
              exclusive {carType.name.toLowerCase()} collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#home-booking"
                className="luxury-button-gold px-8 py-4 text-lg inline-flex items-center gap-2 shadow-lg shadow-gold/30"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-slate-200 px-8 py-4 text-lg font-semibold text-slate-900 hover:border-[#2a4204] hover:text-[#2a4204] transition inline-flex items-center gap-2"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { label: "Concierge desk", value: "020 3576 1617" },
                { label: "Response time", value: "Within 2 hours" },
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
