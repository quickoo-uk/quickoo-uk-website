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
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Michael Chen",
    title: "Frequent Traveler",
    content:
      "I've used many premium services globally, but XChauffur stands out for their reliability and comfort. Highly recommended for business travel.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Emma Williams",
    title: "Wedding Coordinator",
    content:
      "XChauffur provided exceptional service for our bride's transportation. Professional, punctual, and absolutely perfect for the big day.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "David Martinez",
    title: "Corporate Manager",
    content:
      "Outstanding service for our corporate events. The drivers are professional and the vehicles are immaculate. Five stars without question.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
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
    <section className="section-spacing bg-gradient-to-b from-background via-white to-muted">
      <div className="section-container">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gold bg-opacity-10 text-gold rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg font-inter text-gray-600 max-w-3xl mx-auto">
            Hear from thousands of satisfied customers who trust XChauffur for
            their premium transportation needs.
          </p>
        </div>

        <div
          ref={carouselRef}
          className="relative cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 pointer-events-none">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 border border-border hover:border-gold"
              >
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-8 h-8 text-gold" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-gold ring-opacity-20"
                  />
                  <div>
                    <h3 className="font-montserrat font-bold text-dark group-hover:text-gold transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="font-inter text-sm text-gray-600">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="font-inter text-gray-600 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-16 pointer-events-auto">
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
                    "transition-all duration-300 rounded-full",
                    index === current
                      ? "bg-gold w-8 h-2"
                      : "bg-border w-3 h-3 hover:bg-gold hover:w-4",
                  )}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prev}
                title="Previous testimonial"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-gold bg-white hover:bg-gold hover:bg-opacity-10 flex items-center justify-center transition-all group"
              >
                <ChevronLeft className="w-5 h-5 text-dark group-hover:text-gold transition-colors" />
              </button>
              <button
                onClick={next}
                title="Next testimonial"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-gold bg-white hover:bg-gold hover:bg-opacity-10 flex items-center justify-center transition-all group"
              >
                <ChevronRight className="w-5 h-5 text-dark group-hover:text-gold transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
