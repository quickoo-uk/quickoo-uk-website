import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "CEO, Tech Innovations",
    content:
      "XChauffur has been our go-to service for executive transportation. The professionalism and attention to detail is unmatched. Highly recommended.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Chen",
    title: "Frequent Traveler",
    content:
      "I've used many premium services globally, but XChauffur stands out for their reliability and comfort. Highly recommended for business travel.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop",
  },
  {
    name: "Emma Williams",
    title: "Wedding Coordinator",
    content:
      "XChauffur provided exceptional service for our bride's transportation. Professional, punctual, and absolutely perfect for the big day.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=400&h=400&fit=crop",
  },
  {
    name: "David Martinez",
    title: "Corporate Manager",
    content:
      "Outstanding service for our corporate events. The drivers are professional and the vehicles are immaculate. Five stars without question.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoSlideTimer = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoSliding) return;

    autoSlideTimer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000); // Change every 5 seconds

    return () => {
      if (autoSlideTimer.current) clearInterval(autoSlideTimer.current);
    };
  }, [isAutoSliding]);

  // Handle auto-slide pause on user interaction
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
    // Resume auto-slide after 3 seconds
    setTimeout(resumeAutoSlide, 3000);
  };

  const prev = () => {
    pauseAutoSlide();
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
    // Resume auto-slide after 3 seconds
    setTimeout(resumeAutoSlide, 3000);
  };

  // Drag/Swipe handlers
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

    // Threshold for slide change
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

  // Touch handlers for mobile
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
    <section className="section-spacing bg-gradient-to-b from-white via-brand-soft/40 to-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="rounded-3xl bg-dark px-8 py-10 text-white shadow-2xl shadow-black/40">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.3em]">
              TESTIMONIALS
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <h2 className="mt-6 text-4xl font-montserrat font-bold">
              Clients trust Quickoo for sensory calm and bulletproof timing.
            </h2>
            <p className="mt-4 text-base text-white/80">
              Every review is captured post-journey via our concierge app, and
              shared with chauffeurs to continually elevate every ride.
            </p>
            <div className="mt-10 space-y-4 rounded-2xl bg-white/10 p-5">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 fill-gold text-gold" />
                <p className="text-sm uppercase tracking-[0.3em]">4.98 / 5</p>
              </div>
              <p className="text-sm text-white/70">
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
                    className="group relative flex flex-col rounded-3xl bg-white/90 p-8 shadow-xl shadow-black/5 ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/30" />
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
                        <p className="text-sm text-gray-500">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      “{testimonial.content}”
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
                          ? "w-10 bg-dark"
                          : "w-4 bg-gray-200 hover:bg-gold",
                      )}
                    />
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={prev}
                    title="Previous testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-dark transition hover:border-dark hover:bg-dark hover:text-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    title="Next testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-dark transition hover:border-dark hover:bg-dark hover:text-white"
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
