import { Award, Users, TrendingUp, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* ================================ */}
      {/* HERO SECTION */}
      {/* ================================ */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2000&q=80"
          className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-[0.55]"
          alt="Luxury Chauffeur Car"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white">
            About XChauffur
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-3 sm:mt-4 max-w-2xl mx-auto font-inter">
            Redefining luxury transportation since 2015.
          </p>
        </div>
      </section>

      {/* ================================ */}
      {/* OUR STORY */}
      {/* ================================ */}
      <section className="section-spacing bg-white">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-dark">
              Our Story
            </h2>
            <p className="font-inter text-gray-600 leading-relaxed">
              XChauffur was founded in 2015 with one mission: to redefine luxury
              transportation. We envisioned an elevated travel experience — one
              built on precision, elegance, safety, and unrivaled customer
              service.
            </p>
            <p className="font-inter text-gray-600 leading-relaxed">
              From a modest fleet of 10 vehicles, we have grown into a premium
              transportation network with a fleet of 500+ luxury vehicles,
              operating in multiple major cities.
            </p>
            <p className="font-inter text-gray-600 leading-relaxed">
              Every journey is an experience, every chauffeur a professional,
              and every detail is meticulously crafted to exceed expectations.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1597009534830-9a3a8ceb903c?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </section>

      {/* ================================ */}
      {/* OUR VALUES */}
      {/* ================================ */}
      <section className="section-spacing bg-muted">
        <div className="section-container">
          <h2 className="text-4xl font-montserrat font-bold text-dark text-center mb-16">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Customer First",
                description:
                  "Every decision we make puts our clients at the forefront.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Precision, quality, and elegance in every service we provide.",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description:
                  "Combining luxury with cutting-edge technology and efficiency.",
              },
              {
                icon: Users,
                title: "Integrity",
                description:
                  "Transparency and trust form the foundation of our brand.",
              },
            ].map((val, index) => {
              const Icon = val.icon;
              return (
                <div
                  key={index}
                  className="
                    bg-white rounded-2xl p-8 text-center 
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                    hover:shadow-[0_14px_50px_rgba(212,168,83,0.35)]
                    transition-all duration-300
                  "
                >
                  <Icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-montserrat font-bold text-dark mb-3">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================ */}
      {/* STATS SECTION */}
      {/* ================================ */}
      <section className="section-spacing bg-dark text-white">
        <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 text-center">
          {[
            { number: "500+", label: "Premium Vehicles" },
            { number: "50K+", label: "Happy Customers" },
            { number: "24/7", label: "Service Availability" },
            { number: "15+", label: "Years of Excellence" },
          ].map((stat, idx) => (
            <div key={idx}>
              <p className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-gold mb-1 sm:mb-2">
                {stat.number}
              </p>
              <p className="font-inter text-xs sm:text-sm md:text-base text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================ */}
      {/* TEAM SECTION */}
      {/* ================================ */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-montserrat font-bold text-dark text-center mb-16">
            Meet Our Team
          </h2>

          <p className="text-center font-inter text-gray-600 max-w-2xl mx-auto mb-12">
            A team of passionate professionals committed to delivering the
            finest chauffeur experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=60",
                name: "James Mitchell",
                role: "Founder & CEO",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=60",
                name: "Sarah Chen",
                role: "Head of Operations",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=60",
                name: "Marcus Williams",
                role: "Fleet Manager",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="
                  bg-white rounded-2xl overflow-hidden shadow-md 
                  hover:shadow-xl transition-all duration-500
                "
              >
                <img src={member.image} className="w-full h-72 object-cover" />

                <div className="p-6 bg-muted">
                  <h3 className="text-lg font-montserrat font-bold text-dark">
                    {member.name}
                  </h3>
                  <p className="text-gold font-semibold font-inter">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================ */}
      {/* CTA SECTION */}
      {/* ================================ */}
      <section className="section-spacing bg-gold bg-opacity-10 text-center">
        <div className="section-container">
          <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-dark mb-3 sm:mb-4">
            Experience the XChauffur Standard
          </h3>
          <p className="text-gray-600 font-inter max-w-xl mx-auto mb-4 sm:mb-6 text-sm sm:text-base">
            Luxury, comfort, reliability — redefined. Book your journey today.
          </p>
          <button className="luxury-button-gold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
            Book Your Chauffeur
          </button>
        </div>
      </section>
    </div>
  );
}
