import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=2000&q=80",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-[radial-gradient(circle_at_top,_#ffffff,_#f3f6ff,_#fff6ed)] pt-24 sm:pt-28 pb-12 sm:pb-16">
      {/* Background with light overlay */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out
              ${i === index ? "opacity-20" : "opacity-0"}
            `}
          >
            <img
              src={img}
              alt="Luxury Chauffeur"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
       
      </div>

      {/* Animated gradient blobs */}
      <div className="absolute -top-24 right-6 h-72 w-72 rounded-full bg-[#f3d6ff]/40 blur-[150px] opacity-60 animate-pulse" />
      <div className="absolute -bottom-36 left-0 h-96 w-96 bg-[#9fd4ff]/25 blur-[180px] opacity-60" />

      {/* Animated SVG rings */}
      <svg
        className="pointer-events-none absolute -right-6 top-10 h-64 w-64 text-[#b3c4ff]/60 animate-[spin_28s_linear_infinite]"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl space-y-6 sm:space-y-8 md:w-[60%] lg:w-full text-left">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm shadow-[#c9d6ff]/40">
            <Sparkles className="h-4 w-4 text-[#7b5dff]" />
            <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
              Quickoo Chauffeur
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-semibold leading-tight text-dark">
            Effortless Luxury Rides
            <br />
            <span className="bg-gradient-to-r from-[#1a1431] via-[#40206c] to-[#806af1] bg-clip-text text-transparent">
              Powered by Quickoo
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-inter leading-relaxed max-w-2xl">
            Arrive calm, collected, and right on time. Quickoo pairs elite
            chauffeurs with a connected fleet so every journey feels intuitive,
            safe, and deeply personal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1a1230] via-[#3f1c6e] to-[#806af1] text-white text-base font-semibold shadow-lg shadow-[#3f1c6e]/35 transition hover:opacity-90 hover:scale-[1.02]">
              Book Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-200 bg-white text-slate-700 text-base font-semibold hover:border-[#3f1c6e] hover:text-[#3f1c6e] transition shadow-sm">
              Explore Fleet
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-600 font-inter">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#7b5dff]"></span>
              Private concierge 24/7
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#7b5dff]"></span>
              Curated electric & executive fleet
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#7b5dff]"></span>
              Global availability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
