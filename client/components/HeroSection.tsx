export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] bg-gradient-to-br from-white via-white to-muted flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold bg-opacity-5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold bg-opacity-5 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-dark leading-tight">
                Premium Chauffeur Services,
                <span className="text-gold"> Reinvented.</span>
              </h1>
              <p className="text-lg md:text-xl font-inter text-gray-600">
                Experience comfort, safety, and luxury with XChauffur. Your journey, perfected.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="luxury-button-gold">
                Book Now
              </button>
              <button className="luxury-button-outline">
                Get Instant Quote
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-3xl font-montserrat font-bold text-dark">500+</p>
                <p className="text-sm font-inter text-gray-600">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-montserrat font-bold text-dark">24/7</p>
                <p className="text-sm font-inter text-gray-600">Available Service</p>
              </div>
              <div>
                <p className="text-3xl font-montserrat font-bold text-dark">15+</p>
                <p className="text-sm font-inter text-gray-600">Premium Vehicles</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold via-gold bg-opacity-10 rounded-3xl overflow-hidden shadow-luxury-lg">
              <img
                src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=600&fit=crop"
                alt="Luxury Car"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
