import { Apple, Play, Download, Smartphone } from "lucide-react";

export const AppDownloadSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-background to-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-gold bg-opacity-10 text-gold rounded-full text-sm font-semibold mb-4">
                MOBILE APP
              </span>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-6">
                Book Your Ride Anytime, Anywhere
              </h2>
            </div>

            <p className="text-lg font-inter text-gray-600 leading-relaxed">
              Download the XChauffur app for seamless booking, real-time
              tracking, and exclusive app-only offers. Your premium
              transportation experience is just a tap away.
            </p>

            <div className="space-y-4 md:space-y-0 md:flex md:gap-6">
              <a
                href="#"
                className="flex items-center gap-4 px-6 py-4 bg-dark text-white rounded-xl hover:shadow-luxury hover:scale-105 transition-all group border-2 border-dark hover:border-gold"
              >
                <div className="bg-gold bg-opacity-20 p-3 rounded-lg group-hover:bg-opacity-30 transition-all">
                  <Apple className="w-6 h-6" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-xs font-inter font-semibold">
                    Download on
                  </p>
                  <p className="font-montserrat font-bold text-lg">App Store</p>
                </div>
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#"
                className="flex items-center gap-4 px-6 py-4 bg-dark text-white rounded-xl hover:shadow-luxury hover:scale-105 transition-all group border-2 border-dark hover:border-gold"
              >
                <div className="bg-gold bg-opacity-20 p-3 rounded-lg group-hover:bg-opacity-30 transition-all">
                  <Play className="w-6 h-6" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-xs font-inter font-semibold">Get it on</p>
                  <p className="font-montserrat font-bold text-lg">
                    Google Play
                  </p>
                </div>
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Features List */}
            <div className="bg-gold bg-opacity-5 rounded-2xl p-6 border border-gold border-opacity-20">
              <p className="font-semibold text-dark mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-gold" />
                App Features
              </p>
              <div className="space-y-3 text-sm font-inter text-gray-600">
                <p className="flex items-center gap-2">
                  ✓ Real-time GPS tracking
                </p>
                <p className="flex items-center gap-2">
                  ✓ Schedule rides in advance
                </p>
                <p className="flex items-center gap-2">
                  ✓ Multiple payment methods
                </p>
                <p className="flex items-center gap-2">
                  ✓ 24/7 instant support
                </p>
                <p className="flex items-center gap-2">
                  ✓ Exclusive app discounts
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="absolute -inset-8 bg-gold bg-opacity-5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-gold to-gold via-gold bg-opacity-10 rounded-3xl overflow-hidden shadow-luxury-lg p-2">
              <img
                src="/mobile-app.png"
                alt="XChauffur Mobile App"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
