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
    <section className="section-spacing relative bg-gradient-to-b from-purple-50/20 via-white to-indigo-50/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 px-8 py-10 text-white shadow-2xl shadow-purple-500/30">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-xs font-semibold tracking-[0.3em] border border-white/30">
              TESTIMONIALS
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            </span>
            <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold">
              Clients trust Quickoo for sensory calm and bulletproof timing.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/90">
              Every review is captured post-journey via our concierge app, and
              shared with chauffeurs to continually elevate every ride.
            </p>
            <div className="mt-10 space-y-4 rounded-2xl bg-white/20 backdrop-blur-sm p-5 border border-white/30">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                <p className="text-sm uppercase tracking-[0.3em] font-semibold">4.98 / 5</p>
              </div>
              <p className="text-sm text-white/80">
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
                    className="group relative flex flex-col rounded-3xl bg-gradient-to-br from-white to-gray-50/50 p-8 shadow-lg shadow-purple-100/30 ring-1 ring-purple-100/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200/40"
                  >
                    <Quote className="absolute right-6 top-6 h-10 w-10 text-purple-200" />
                    <div className="mb-6 flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-2xl object-cover ring-2 ring-purple-100"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-montserrat text-lg font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
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
                          ? "w-10 bg-gradient-to-r from-indigo-600 to-purple-600"
                          : "w-4 bg-purple-200 hover:bg-purple-300",
                      )}
                    />
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={prev}
                    title="Previous testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-200 bg-white text-purple-700 shadow-lg shadow-purple-100/30 transition-all hover:border-purple-400 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:shadow-xl hover:shadow-purple-500/40"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    title="Next testimonial"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-200 bg-white text-purple-700 shadow-lg shadow-purple-100/30 transition-all hover:border-purple-400 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white hover:shadow-xl hover:shadow-purple-500/40"
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
