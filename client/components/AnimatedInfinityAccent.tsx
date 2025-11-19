export const AnimatedInfinityAccent = () => {
  return (
    <section className="pb-20">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-[32px] border border-[#e5defc] bg-white/90 backdrop-blur shadow-[0_25px_80px_rgba(94,75,255,0.15)] px-8 py-12 text-center">
          <div className="absolute -top-20 -left-10 w-40 h-40 bg-gold/20 blur-3xl opacity-70 pointer-events-none" />
          <div className="absolute -bottom-16 -right-8 w-40 h-40 bg-[#b1a7ff]/40 blur-3xl opacity-70 pointer-events-none" />

          <p className="text-sm uppercase tracking-[0.4em] text-gold font-semibold mb-6">
            Signature loop
          </p>
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
            Movement that mirrors the Quickoo logo
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            An infinite loop represents how we connect chauffeurs, vehicles, and
            guests in one seamless flow. This animated SVG mirrors the
            Quickoo logomark and plays nicely with the refreshed palette.
          </p>

          <div className="flex justify-center">
            <svg
              className="w-full max-w-xl"
              viewBox="0 0 500 200"
              role="img"
              aria-label="Animated infinity stroke"
            >
              <path
                d="M50 100 C 110 10, 190 10, 250 100 C 310 190, 390 190, 450 100 C 390 10, 310 10, 250 100 C 190 190, 110 190, 50 100 Z"
                fill="none"
                stroke="#5E4BFF"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray="560"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-1120"
                  dur="7s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke"
                  values="#5E4BFF;#8A7BFF;#5E4BFF"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

