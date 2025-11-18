import { Award, Users, TrendingUp, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-white via-white to-muted flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold bg-opacity-5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        </div>

        <div className="section-container relative z-10 w-full">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-dark mb-6">
            About XChauffur
          </h1>
          <p className="text-xl font-inter text-gray-600 max-w-2xl">
            Redefining luxury transportation since 2015.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-montserrat font-bold text-dark">
                Our Story
              </h2>
              <p className="font-inter text-gray-600 leading-relaxed">
                XChauffur was founded in 2015 with a simple vision: to
                revolutionize premium chauffeur services. We noticed a gap in
                the market—clients deserved more than just transportation; they
                deserved an experience.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed">
                Starting with just 10 vehicles and a team of passionate
                professionals, we grew organically by delivering exceptional
                service, one journey at a time. Today, we operate a fleet of
                over 500 premium vehicles across multiple cities.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed">
                Our success is built on trust, transparency, and an unwavering
                commitment to excellence. Every team member shares our values of
                professionalism, safety, and customer satisfaction.
              </p>
            </div>

            <div className="relative h-96 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold via-gold bg-opacity-10 rounded-3xl overflow-hidden shadow-luxury-lg">
                <img
                  src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=600&fit=crop"
                  alt="XChauffur Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-muted">
        <div className="section-container">
          <h2 className="text-4xl font-montserrat font-bold text-dark text-center mb-16">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Customer First",
                description:
                  "Your satisfaction is our priority. We go the extra mile for every client.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We maintain the highest standards in every aspect of our service.",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description:
                  "Continuously improving our technology and service delivery.",
              },
              {
                icon: Users,
                title: "Integrity",
                description: "Transparency and honesty guide everything we do.",
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-8 text-center hover:shadow-luxury transition-all"
                >
                  <Icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="font-montserrat font-bold text-dark text-lg mb-3">
                    {value.title}
                  </h3>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing bg-dark text-white">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Premium Vehicles" },
              { number: "50K+", label: "Happy Customers" },
              { number: "24/7", label: "Service Availability" },
              { number: "15+", label: "Years of Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-montserrat font-bold text-gold mb-2">
                  {stat.number}
                </p>
                <p className="font-inter text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-montserrat font-bold text-dark text-center mb-16">
            Our Team
          </h2>

          <p className="text-center font-inter text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Our diverse team includes experienced chauffeurs, fleet managers,
            customer service professionals, and technology experts. Each team
            member is dedicated to delivering exceptional service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
                name: "James Mitchell",
                role: "Founder & CEO",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
                name: "Sarah Chen",
                role: "Head of Operations",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
                name: "Marcus Williams",
                role: "Fleet Manager",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="text-center rounded-2xl overflow-hidden hover:shadow-luxury transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-muted p-6">
                  <h3 className="font-montserrat font-bold text-dark text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="font-inter text-gold font-semibold">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gold bg-opacity-10">
        <div className="section-container text-center">
          <h3 className="text-3xl font-montserrat font-bold text-dark mb-4">
            Experience the XChauffur Difference
          </h3>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto mb-8">
            Ready to experience premium chauffeur service? Book your first
            journey today.
          </p>
          <button className="luxury-button-gold">Book Now</button>
        </div>
      </section>
    </div>
  );
}
