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
    <section className="relative flex min-h-[38rem] w-full items-center overflow-hidden bg-gradient-to-b from-brand-soft via-white to-white pt-28 pb-16 md:h-[95vh] md:pt-0 md:pb-0">
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
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#080215]/95 via-[#160a2b]/88 to-[#291550]/82 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),transparent_55%)] mix-blend-screen opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 mix-blend-screen"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="w-full max-w-4xl space-y-6 md:w-[60%] lg:w-full">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/85 uppercase tracking-[0.3em] text-xs border border-white/20 shadow-[0_10px_25px_rgba(255,255,255,0.18)]">
            Quickoo Chauffeur
          </span>
          <h1 className="text-white font-montserrat font-bold text-4xl md:text-6xl leading-tight drop-shadow-[0_8px_45px_rgba(0,0,0,0.45)]">
            Effortless Luxury Rides
            <br /> Powered by Quickoo
          </h1>

          <p className="text-white/85 text-lg md:text-xl font-inter leading-relaxed">
            Arrive calm, collected, and right on time. Quickoo pairs elite
            chauffeurs with a connected fleet so every journey feels intuitive,
            safe, and deeply personal.
          </p>

          {/* CTA Button (same style as screenshot) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#1c0e38] via-[#4630a8] to-[#8b74ff] text-white font-semibold border border-white/15 shadow-[0_25px_60px_rgba(15,6,30,0.55)] transition-all hover:translate-y-0.5">
              Book Now
              <span className="text-xl transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </button>
            <button className="flex items-center gap-3 px-9 py-4 rounded-full border border-white/35 text-white/90 font-semibold backdrop-blur bg-white/5 hover:bg-white/10 transition-all shadow-[0_18px_50px_rgba(10,5,32,0.45)]">
              Explore Fleet
            </button>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-white/75 text-sm font-inter">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/80"></span>
              Private concierge 24/7
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/80"></span>
              Curated electric & executive fleet
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/80"></span>
              Global availability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
