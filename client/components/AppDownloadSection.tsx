import { Apple, Play } from "lucide-react";

export const AppDownloadSection = () => {
  return (
    <section className="section-spacing bg-muted">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark">
              Book on the Go
            </h2>

            <p className="text-lg font-inter text-gray-600 leading-relaxed">
              Download the XChauffur app for seamless booking, real-time
              tracking, and exclusive app-only offers.
            </p>

            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-4 bg-dark text-white rounded-xl hover:shadow-luxury transition-all group"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs font-inter">Download on</p>
                  <p className="font-montserrat font-bold">App Store</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-6 py-4 bg-dark text-white rounded-xl hover:shadow-luxury transition-all group"
              >
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs font-inter">Get it on</p>
                  <p className="font-montserrat font-bold">Google Play</p>
                </div>
              </a>
            </div>

            <div className="space-y-3 text-sm font-inter text-gray-600">
              <p className="flex items-center gap-2">✓ Real-time tracking</p>
              <p className="flex items-center gap-2">
                ✓ Schedule rides in advance
              </p>
              <p className="flex items-center gap-2">
                ✓ Multiple payment methods
              </p>
              <p className="flex items-center gap-2">✓ Instant support</p>
            </div>
          </div>

          <div className="relative h-96 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold via-gold bg-opacity-10 rounded-3xl overflow-hidden shadow-luxury-lg flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1512941691920-25bfb67df088?w=300&h=500&fit=crop"
                alt="Mobile App"
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
