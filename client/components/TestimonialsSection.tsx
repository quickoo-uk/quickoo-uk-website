import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "CEO, Tech Innovations",
    content:
      "Quickoo has been our go-to service for executive transportation. The professionalism and attention to detail is unmatched. Highly recommended.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Michael Chen",
    title: "Frequent Traveler",
    content:
      "I've used many premium services globally, but Quickoo stands out for their reliability and comfort. Highly recommended for business travel.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Emma Williams",
    title: "Wedding Coordinator",
    content:
      "Quickoo provided exceptional service for our bride's transportation. Professional, punctual, and absolutely perfect for the big day.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "David Martinez",
    title: "Corporate Manager",
    content:
      "Outstanding service for our corporate events. The drivers are professional and the vehicles are immaculate. Five stars without question.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoSlideTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isAutoSliding) return;

    autoSlideTimer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => {
      if (autoSlideTimer.current) clearInterval(autoSlideTimer.current);
    };
  }, [isAutoSliding]);

  const pauseAutoSlide = () => {
    setIsAutoSliding(false);
    if (autoSlideTimer.current) clearInterval(autoSlideTimer.current);
  };

  const resumeAutoSlide = () => {
    setIsAutoSliding(true);
  };

  const next = () => {
    pauseAutoSlide();
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    setTimeout(resumeAutoSlide, 3000);
  };

  const prev = () => {
    pauseAutoSlide();
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
    setTimeout(resumeAutoSlide, 3000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
    setIsDragging(true);
    pauseAutoSlide();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragEnd = e.clientX;
    const dragDiff = dragStart - dragEnd;

    if (Math.abs(dragDiff) > 50) {
      if (dragDiff > 0) {
        next();
      } else {
        prev();
      }
    } else {
      resumeAutoSlide();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.touches[0].clientX);
    pauseAutoSlide();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dragEnd = e.changedTouches[0].clientX;
    const dragDiff = dragStart - dragEnd;

    if (Math.abs(dragDiff) > 50) {
      if (dragDiff > 0) {
        next();
      } else {
        prev();
      }
    } else {
      resumeAutoSlide();
    }
  };

  const getVisibleTestimonials = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const count = isMobile ? 1 : 3;
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(TESTIMONIALS[(current + i) % TESTIMONIALS.length]);
    }
    return items;
  };

  return (
    <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#f1f5ff] to-white">
      {/* Background gradients */}
      <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-gold/15 blur-[120px]" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a5c9ff]/20 blur-[140px]" />

      {/* Animated SVG */}
      <svg
        className="pointer-events-none absolute right-10 top-20 h-40 w-40 text-[#b3c4ff]/40 animate-[spin_20s_linear_infinite]"
        viewBox="0 0 160 160"
        aria-hidden
      >
        <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="80" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="rounded-3xl border border-white/60 bg-gradient-to-br from-[#1a1230] via-[#3f1c6e] to-[#806af1] px-8 py-10 text-white shadow-[0_30px_90px_rgba(15,23,42,0.25)]">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur mb-6">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-xs tracking-[0.3em] uppercase font-semibold">
                Testimonials
              </span>
            </div>
            <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold">
              Clients trust Quickoo for sensory calm and bulletproof timing.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/80 font-inter">
              Every review is captured post-journey via our concierge app, and
              shared with chauffeurs to continually elevate every ride.
            </p>
            <div className="mt-10 space-y-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 fill-gold text-gold" />
                <p className="text-sm uppercase tracking-[0.3em]">4.98 / 5</p>
              </div>
              <p className="text-sm text-white/70 font-inter">
                Average rating across 2,400+ enterprise & private itineraries in
                2024.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div
              ref={carouselRef}
              className="relative cursor-grab select-none active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 pointer-events-none">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col rounded-[28px] border border-white/60 bg-white/90 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(116,128,255,0.25)]"
                  >
                    <Quote className="absolute right-6 top-6 h-10 w-10 text-[#7b5dff]/30" />
                    <div className="mb-6 flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-2xl object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-montserrat text-lg font-semibold text-dark">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500 font-inter">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#7b5dff] text-[#7b5dff]" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed font-inter">
                      "{testimonial.content}"
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between pointer-events-auto">
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        pauseAutoSlide();
                        setCurrent(index);
                        setTimeout(resumeAutoSlide, 3000);
                      }}
                      title={`Go to testimonial ${index + 1}`}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        index === current
                          ? "w-10 bg-[#7b5dff]"
                          : "w-4 bg-gray-200 hover:bg-[#7b5dff]/50",
                      )}
                    />
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={prev}
                    title="Previous testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-dark transition hover:border-[#7b5dff] hover:bg-[#7b5dff] hover:text-white shadow-sm"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    title="Next testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-dark transition hover:border-[#7b5dff] hover:bg-[#7b5dff] hover:text-white shadow-sm"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
