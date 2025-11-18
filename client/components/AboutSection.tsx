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
    <section className="section-spacing bg-gradient-to-b from-background to-muted">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative hidden md:block">
            <div className="absolute -inset-8 bg-gold bg-opacity-5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-gold to-gold via-gold bg-opacity-10 rounded-3xl overflow-hidden shadow-luxury-lg p-2">
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
              <span className="inline-block px-4 py-2 bg-gold bg-opacity-10 text-gold rounded-full text-sm font-semibold mb-4">
                ABOUT US
              </span>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-6">
                Redefining Luxury Transportation
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Founded in 2015, XChauffur has revolutionized premium chauffeur
                services for the discerning traveler. With an unwavering
                commitment to excellence and meticulous attention to detail,
                we've served thousands of satisfied clients across major cities.
              </p>

              <p className="text-lg font-inter text-gray-600 leading-relaxed">
                Our mission is simple yet powerful: deliver unparalleled
                comfort, safety, and professionalism. Every journey with
                XChauffur is more than just transportation—it's an experience
                blending luxury, cutting-edge technology, and genuine human
                touch.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 py-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-border hover:border-gold hover:shadow-luxury transition-all duration-300"
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

            <Link to="/about" className="luxury-button-gold inline-block">
              Learn Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
