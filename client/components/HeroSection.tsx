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
            <div className="absolute inset-0 bg-gradient-to-br from-[#110624]/95 via-[#1b0f3a]/85 to-[#2f1b66]/80 mix-blend-multiply"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="w-full md:w-[60%] space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 uppercase tracking-[0.3em] text-xs border border-white/20">
            Quickoo Chauffeur
          </span>
          <h1 className="text-white font-montserrat font-bold text-4xl md:text-6xl leading-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.35)]">
            Effortless Luxury Rides
            <br /> Powered by Quickoo
          </h1>

          <p className="text-white/80 text-lg md:text-xl font-inter leading-relaxed">
            Arrive calm, collected, and right on time. Quickoo pairs elite
            chauffeurs with a connected fleet so every journey feels intuitive,
            safe, and deeply personal.
          </p>

          {/* CTA Button (same style as screenshot) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#4e3acf] to-[#7a68ff] text-white font-semibold shadow-[0_18px_45px_rgba(75,58,207,0.4)] transition-all hover:translate-y-0.5">
              Book Now
              <span className="text-xl">↗</span>
            </button>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold backdrop-blur hover:bg-white/10 transition-all">
              Explore Fleet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
