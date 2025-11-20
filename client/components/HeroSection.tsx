import { useEffect, useState } from "react";

const AnimatedBlob = () => (
  <svg
    className="absolute top-0 right-0 w-96 h-96 opacity-20 animate-pulse"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <path
      d="M200 50C250 50 300 100 300 150C300 200 250 250 200 250C150 250 100 200 100 150C100 100 150 50 200 50Z"
      fill="url(#blobGradient)"
      className="animate-blob"
    />
  </svg>
);

export const HeroSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=1920&q=80",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[32rem] sm:min-h-[38rem] w-full items-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/20 pt-24 sm:pt-28 pb-12 sm:pb-16 md:h-[95vh] md:pt-0 md:pb-0 max-w-full">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedBlob />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Background Slider with Light Overlay */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out
              ${i === index ? "opacity-30" : "opacity-0"}
            `}
          >
            <img
              src={img}
              alt="Luxury Chauffeur"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl space-y-4 sm:space-y-6 md:w-[60%] lg:w-full text-left">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs border border-purple-200/50 shadow-lg backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
            Quickoo Chauffeur
          </span>
          <h1 className="text-gray-900 font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent">
            Effortless Luxury Rides
            <br /> Powered by Quickoo
          </h1>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-inter leading-relaxed max-w-2xl">
            Arrive calm, collected, and right on time. Quickoo pairs elite
            chauffeurs with a connected fleet so every journey feels intuitive,
            safe, and deeply personal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-9 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white text-sm sm:text-base font-semibold shadow-xl shadow-purple-500/30 transition-all hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-0.5">
              Book Now
              <span className="text-lg sm:text-xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <button className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-9 py-3 sm:py-4 rounded-full border-2 border-purple-200 text-purple-700 text-sm sm:text-base font-semibold bg-white/80 backdrop-blur-sm hover:bg-purple-50 transition-all shadow-lg">
              Explore Fleet
            </button>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4 text-gray-600 text-xs sm:text-sm font-inter">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-500 animate-pulse" />
              Private concierge 24/7
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-indigo-500 animate-pulse delay-300" />
              Curated electric & executive fleet
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-500 animate-pulse delay-500" />
              Global availability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
