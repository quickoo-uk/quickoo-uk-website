import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "CEO, Tech Innovations",
    content:
      "XChauffur has been our go-to service for executive transportation. The professionalism and attention to detail is unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Michael Chen",
    title: "Frequent Traveler",
    content:
      "I've used many premium services globally, but XChauffur stands out for their reliability and comfort. Highly recommended.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Emma Williams",
    title: "Wedding Coordinator",
    content:
      "XChauffur provided exceptional service for our bride's transportation. Professional, punctual, and absolutely perfect.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "David Martinez",
    title: "Corporate Manager",
    content:
      "Outstanding service for our corporate events. The drivers are professional and the vehicles are immaculate. Five stars.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
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
    <section className="section-spacing bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg font-inter text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of satisfied customers worldwide.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="bg-muted rounded-2xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-montserrat font-bold text-dark">
                      {testimonial.name}
                    </h3>
                    <p className="font-inter text-sm text-gray-600">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>

                <p className="font-inter text-gray-600 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-12">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    index === current ? "bg-gold" : "bg-border"
                  )}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border hover:border-gold hover:bg-gold hover:bg-opacity-10 flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-dark" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-border hover:border-gold hover:bg-gold hover:bg-opacity-10 flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-5 h-5 text-dark" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
