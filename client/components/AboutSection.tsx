import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    { value: "500+", label: "Vehicles", icon: "🚗" },
    { value: "50K+", label: "Happy Clients", icon: "😊" },
    { value: "24/7", label: "Availability", icon: "⏰" },
    { value: "15+", label: "Years Experience", icon: "⭐" },
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-[#eef4ff] via-white to-[#f9f7ff]">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative hidden md:block">
            <div className="absolute -inset-8 bg-gold/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-gold/20 via-[#b8b1ff]/40 to-transparent rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(94,75,255,0.35)] p-2">
              <img
                src="/about-home.png"
                alt="Premium Service"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-brand-soft text-gold rounded-full text-sm font-semibold mb-4">
                ABOUT QUICKOO
              </span>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-6">
                Redefining Luxury Transportation
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Founded in 2015, Quickoo has reimagined premium chauffeur
                services for the modern traveler. With an unwavering commitment
                to empathy, technology, and elite service, we've served
                thousands of satisfied clients across major cities.
              </p>

              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Our mission is simple yet powerful: deliver unparalleled
                comfort, safety, and professionalism. Every journey with Quickoo
                is more than just transportation—it's an experience blending
                luxury, cutting-edge technology, and genuine human
                touch.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 py-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-transparent hover:border-gold/60 hover:shadow-[0_20px_60px_rgba(94,75,255,0.18)] transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <p className="text-3xl font-montserrat font-bold text-dark">
                    {stat.value}
                  </p>
                  <p className="text-sm font-inter text-gray-600 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-gold to-[#8a7bff] text-white font-semibold shadow-lg shadow-[#5e4bff44] hover:translate-y-0.5 transition-transform"
            >
              Learn Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
