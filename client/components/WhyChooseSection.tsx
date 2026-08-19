import { Shield, DollarSign, Crown, Users, Award, Clock, Sparkles, PoundSterlingIcon, Map, Settings, Briefcase, Calendar, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionChip } from "./SectionChip";

const EXECUTIVE_FEATURES = [
  {
    icon: Briefcase,
    title: "Dedicated Executive Travel",
    description: "We are dedicated to providing executive transportation which is made specifically for formal business meetings, conferences, corporate appointments, etc."
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "We can quickly make changes to your scheduled travel so that your chauffeur service can still meet your changing business needs."
  },
  {
    icon: Shield,
    title: "Respectful of Your Privacy",
    description: "Our chauffeurs respect your privacy and will provide complete discretion on all of your travels."
  },
  {
    icon: Monitor,
    title: "The Perfect Office On The Road",
    description: "The executive interiors of our vehicles were designed as the perfect mobile office, where our executive travellers can make phone calls, answer emails, or prepare for meetings while travelling to and from their destination."
  },
  {
    icon: Award,
    title: "Delivering The Professional Experience",
    description: "The professionalism of our drivers is expected by corporate clients and business professionals on every trip they take."
  }
];

const FEATURES = [
  {
    icon: Award,
    title: "Professional Chauffeurs",
    description: "Our chauffeurs are experienced, courteous, professionally trained and committed to meeting your needs for outstanding service.",
    accent: "from-emerald-500/90 via-green-400/90 to-emerald-500/80",
    shadowColor: "rgba(16, 185, 129, 0.4)",
  },
  {
    icon: Clock,
    title: "Punctuality",
    description: "We respect your time by being prompt and planning our routes to avoid delays whenever possible.",
    accent: "from-sky-500/90 via-indigo-500/80 to-sky-500/70",
    shadowColor: "rgba(14, 165, 233, 0.4)",
  },
  {
    icon: Crown,
    title: "Luxury Fleet",
    description: "Our fleet of modern executive vehicles has been meticulously maintained for maximum safety, comfort and style.",
    accent: "from-amber-500/90 via-orange-500/80 to-amber-500/70",
    shadowColor: "rgba(245, 158, 11, 0.4)",
  },
  {
    icon: PoundSterlingIcon,
    title: "Competitive Pricing",
    description: "You will know exactly how much you will pay for your trip before you travel. There are no hidden charges.",
    accent: "from-purple-500/90 via-fuchsia-500/80 to-purple-500/70",
    shadowColor: "rgba(168, 85, 247, 0.4)",
  },
  {
    icon: Map,
    title: "Nationwide Service",
    description: "Our services cover major UK cities, airports, business districts, and events across the country.",
    accent: "from-rose-500/90 via-red-400/80 to-rose-500/70",
    shadowColor: "rgba(244, 63, 94, 0.4)",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Each reservation will be tailor-made to match your individual travel needs, preferences, and schedules.",
    accent: "from-blue-500/90 via-cyan-400/80 to-blue-500/70",
    shadowColor: "rgba(59, 130, 246, 0.4)",
  }
];

const METRICS = [
  { label: "Avg. response", value: "42 sec", icon: Clock },
  { label: "Customer NPS", value: "92", icon: Award },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const WhyChooseSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#f1f5ff] to-white">
      {/* Background gradients */}
      <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-gold/15 blur-[120px]" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a5c9ff]/20 blur-[140px]" />

      {/* Animated SVG */}
      <motion.svg
        className="pointer-events-none absolute left-10 top-10 h-32 w-32 text-gold/30"
        viewBox="0 0 160 160"
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="4 4"
        />
        <circle
          cx="80"
          cy="80"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="2 4"
        />
      </motion.svg>

      <div className="section-container relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <SectionChip title="Why Choose Quickoo?" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark">
              A Refined Luxury Partner with{" "}
              <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                Precision and Perfection
              </span>
            </h2>
            <p className="text-base sm:text-lg font-inter text-gray-600">
              We are proud to offer you more than just a ride from one place to another, we offer you reliable, comfortable, professional services with peace of mind that every aspect of your trip will be taken care of.
            </p>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#f3d6ff]/30 via-[#9fd4ff]/20 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_90px_rgba(15,23,42,0.15)] border border-white/60">
              <img
                src="/banner_images/image-5.png"
                alt="Luxury chauffeur cabin"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex">
                <motion.div
                  variants={item}
                  whileHover={{
                    y: -10,
                    boxShadow: `0 30px 90px ${feature.shadowColor}`
                  }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white/90 border border-white/60 p-6 md:p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] w-full h-full"
                >
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-x-10 -top-16 h-32 rounded-full blur-3xl bg-gradient-to-r ${feature.accent} opacity-70`}
                  />

                  {/* Icon Section */}
                  <div className="relative flex items-center justify-center mb-6">
                    <div
                      className={`rounded-2xl bg-gradient-to-r ${feature.accent} p-4 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Title - Fixed height */}
                  <h3 className="text-2xl font-montserrat font-bold text-dark mb-4 text-center min-h-[64px] flex items-center justify-center">
                    {feature.title}
                  </h3>

                  {/* Description - Fixed min-height for alignment */}
                  <div className="min-h-[96px] flex items-start justify-center">
                    <p className="text-sm font-inter leading-relaxed text-gray-600 text-center">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Executive Chauffeur Service Section */}
        <div className="mt-32 rounded-[40px] bg-gradient-to-b from-[#f8fcf3] to-white relative overflow-hidden p-8 sm:p-12 lg:p-20 shadow-[0_20px_80px_rgba(72,115,7,0.08)] border border-[#487307]/10">
          {/* Subtle Background Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#487307]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/10 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center mb-20 space-y-6">
            <div className="inline-flex items-center justify-center rounded-full bg-[#487307]/10 px-4 py-1.5 border border-[#487307]/20 mb-2">
              <span className="text-sm font-semibold tracking-wider text-[#487307] uppercase">
                Corporate Standard
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-slate-900 leading-tight">
              Executive Chauffeur Service for <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307]">Business Professionals</span>
            </h2>
            <p className="text-base sm:text-lg font-inter text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The professionals of today have less time in which to conduct business than ever before. Our Executive Chauffeur Service offers total luxury while still being extremely efficient, so you will be able to continue to work as you travel. Each trip will be a professionally managed experience, no matter where you are going.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            {EXECUTIVE_FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-8 rounded-3xl bg-white border border-[#487307]/10 hover:border-[#487307]/30 hover:-translate-y-1 transition-all duration-300 group shadow-[0_10px_40px_rgba(72,115,7,0.04)] hover:shadow-[0_20px_50px_rgba(72,115,7,0.1)]"
                >
                  <div className="bg-[#487307]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#487307]/20 transition-all duration-300">
                    <Icon className="text-[#487307] h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#487307] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

