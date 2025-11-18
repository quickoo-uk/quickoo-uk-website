import { useEffect, useState } from "react";

export const HeroSection = () => {
  // Add as many background images as you want
  const images = [
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=1920&q=80",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 second fade cycle
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[95vh] w-full overflow-hidden flex items-center">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out
              ${i === index ? "opacity-100" : "opacity-0"}
            `}
          >
            <img
              src={img}
              alt="Luxury Chauffeur"
              className="w-full h-full object-cover filter grayscale contrast-110"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="w-full md:w-[60%] space-y-6">
          <h1 className="text-white font-montserrat font-bold text-4xl md:text-6xl leading-tight">
            PRIVATE CHAUFFEUR HIRE
            <br /> SERVICES LONDON
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-inter leading-relaxed">
            London's premier chauffeur hire service, delivering you to your
            destination with elegance and style. Our private transfer services
            offer the best prices in town without compromising on quality or
            convenience.
          </p>

          {/* CTA Button (same style as screenshot) */}
          <button className="rectangle-button-white flex items-center gap-2 w-fit">
            Book Now
            <span className="text-xl">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};
