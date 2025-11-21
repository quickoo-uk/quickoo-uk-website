import { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Director of Operations, TechFlow",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    content:
      "Quickoo has completely transformed our executive travel. The level of professionalism and attention to detail is unmatched. The chauffeurs are always punctual, and the vehicles are impeccable.",
    rating: 5,
    location: "San Francisco, CA",
    tags: ["Corporate Travel", "Airport Transfer"],
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Event Coordinator, Prestige Events",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content:
      "Managing transportation for high-profile events is stressful, but Quickoo makes it seamless. Their fleet is stunning, and the coordination team is incredibly responsive. Highly recommended!",
    rating: 5,
    location: "London, UK",
    tags: ["Event Logistics", "VIP Service"],
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "CEO, Luxe Travels",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    content:
      "I've used many chauffeur services, but Quickoo stands out. The booking process is effortless, and the drivers are true professionals who know the city inside out. A five-star experience every time.",
    rating: 5,
    location: "New York, NY",
    tags: ["Business Travel", "City Tours"],
  },
  {
    id: 4,
    name: "Michael Chang",
    role: "Managing Partner, Horizon Ventures",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    content:
      "Reliability is key for our business, and Quickoo delivers. Whether it's an early morning airport run or a late-night client dinner, I know I can count on them. The best in the business.",
    rating: 5,
    location: "Singapore",
    tags: ["Executive Transport", "Reliability"],
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const next = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaff] to-[#fff5ec]">
      {/* Background gradients */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#a5c9ff]/10 blur-[100px]" />
      <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />

      {/* Animated SVG */}
      <motion.svg
        className="pointer-events-none absolute right-10 top-10 h-48 w-48 text-[#b3c4ff]/30"
        viewBox="0 0 160 160"
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        <circle
          cx="80"
          cy="80"
          r="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 6"
        />
      </motion.svg>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm shadow-[#c9d6ff]/40">
            <Sparkles className="h-4 w-4 text-[#7b5dff]" />
            <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
              Client Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
            Trusted by global leaders{" "}
            <span className="bg-gradient-to-r from-[#1a1431] via-[#40206c] to-[#806af1] bg-clip-text text-transparent">
              and visionaries.
            </span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="relative min-h-[400px] overflow-hidden rounded-[32px] bg-white/80 shadow-[0_30px_100px_rgba(15,23,42,0.1)] backdrop-blur border border-white/60">
            <div className="absolute right-8 top-8 opacity-10">
              <Quote className="h-24 w-24 text-[#7b5dff]" />
            </div>

            <div className="flex h-full flex-col items-center justify-center p-8 md:p-16">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      next();
                    } else if (swipe > swipeConfidenceThreshold) {
                      prev();
                    }
                  }}
                  className="flex w-full flex-col gap-10 md:flex-row md:items-center md:gap-16 cursor-grab active:cursor-grabbing"
                >
                  <div className="relative shrink-0">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-xl md:h-48 md:w-48">
                      <img
                        src={TESTIMONIALS[activeIndex].image}
                        alt={TESTIMONIALS[activeIndex].name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 rounded-full bg-white p-2 shadow-lg">
                      <div className="flex items-center justify-center rounded-full bg-[#7b5dff] p-2 text-white">
                        <Quote className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-6 flex flex-wrap justify-center gap-2 md:justify-start">
                      {TESTIMONIALS[activeIndex].tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mb-8 text-xl font-medium leading-relaxed text-dark md:text-2xl font-inter">
                      "{TESTIMONIALS[activeIndex].content}"
                    </p>

                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-dark font-montserrat">
                        {TESTIMONIALS[activeIndex].name}
                      </h4>
                      <p className="text-sm text-gray-500 font-inter">
                        {TESTIMONIALS[activeIndex].role}
                      </p>
                      <div className="flex items-center justify-center gap-4 pt-2 md:justify-start">
                        <div className="flex text-gold">
                          {[...Array(TESTIMONIALS[activeIndex].rating)].map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-current"
                              />
                            )
                          )}
                        </div>
                        <span className="text-xs font-semibold text-gray-400">
                          •
                        </span>
                        <div className="flex items-center gap-1 text-xs font-semibold text-gray-400">
                          <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                          Verified Client
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-8 right-8 flex gap-3">
              <button
                onClick={prev}
                className="group flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-slate-200 bg-white text-slate-600 shadow-lg transition-all duration-300 hover:ring-0 hover:bg-gradient-to-r hover:from-[#1c0e38] hover:via-[#4630a8] hover:to-[#8b74ff] hover:text-white hover:scale-110 focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={next}
                className="group flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-slate-200 bg-white text-slate-600 shadow-lg transition-all duration-300 hover:ring-0 hover:bg-gradient-to-r hover:from-[#1c0e38] hover:via-[#4630a8] hover:to-[#8b74ff] hover:text-white hover:scale-110 focus:outline-none"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
