export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-dark flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=900&fit=crop"
          alt="Luxury Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white leading-tight">
                Premium Chauffeur Services,
                <span className="text-gold"> Reinvented.</span>
              </h1>
              <p className="text-lg md:text-xl font-inter text-gray-300">
                Experience comfort, safety, and luxury with XChauffur. Your
                journey, perfected.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gold text-dark font-montserrat font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-luxury">
                Book Now
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-montserrat font-semibold rounded-lg hover:bg-white hover:text-dark transition-all duration-300">
                Get Instant Quote
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-3xl font-montserrat font-bold text-white">
                  500+
                </p>
                <p className="text-sm font-inter text-gray-400">
                  Happy Clients
                </p>
              </div>
              <div>
                <p className="text-3xl font-montserrat font-bold text-white">
                  24/7
                </p>
                <p className="text-sm font-inter text-gray-400">
                  Available Service
                </p>
              </div>
              <div>
                <p className="text-3xl font-montserrat font-bold text-white">
                  15+
                </p>
                <p className="text-sm font-inter text-gray-400">
                  Premium Vehicles
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};
