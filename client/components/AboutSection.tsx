import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section className="section-spacing bg-muted">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold via-gold bg-opacity-10 rounded-3xl overflow-hidden shadow-luxury-lg">
              <img
                src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=600&fit=crop"
                alt="Premium Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark">
              About XChauffur
            </h2>

            <p className="text-lg font-inter text-gray-600 leading-relaxed">
              Founded in 2015, XChauffur has redefined premium chauffeur
              services for the discerning traveler. With a commitment to
              excellence and attention to detail, we've served thousands of
              clients across major cities.
            </p>

            <p className="text-lg font-inter text-gray-600 leading-relaxed">
              Our mission is simple: provide unparalleled comfort, safety, and
              professionalism. Every journey with XChauffur is an experience—a
              perfect blend of luxury, technology, and human touch.
            </p>

            <div className="grid grid-cols-2 gap-8 py-4">
              <div>
                <p className="text-4xl font-montserrat font-bold text-dark">
                  500+
                </p>
                <p className="text-sm font-inter text-gray-600 mt-1">
                  Vehicles in Fleet
                </p>
              </div>
              <div>
                <p className="text-4xl font-montserrat font-bold text-dark">
                  50K+
                </p>
                <p className="text-sm font-inter text-gray-600 mt-1">
                  Happy Customers
                </p>
              </div>
              <div>
                <p className="text-4xl font-montserrat font-bold text-dark">
                  24/7
                </p>
                <p className="text-sm font-inter text-gray-600 mt-1">
                  Availability
                </p>
              </div>
              <div>
                <p className="text-4xl font-montserrat font-bold text-dark">
                  15+
                </p>
                <p className="text-sm font-inter text-gray-600 mt-1">
                  Years of Excellence
                </p>
              </div>
            </div>

            <Link to="/about" className="luxury-button-gold inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
