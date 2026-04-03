import {
  Award,
  Users,
  TrendingUp,
  Heart,
  ShieldCheck,
  Leaf,
  Globe,
  Sparkles,
  Star,
  Clock3,
  Zap,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionChip } from "@/components/SectionChip";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.12,
    },
  },
};

const stats = [
  { number: "500+", label: "Chauffeurs & Fleet Partners" },
  { number: "50K+", label: "Premium Journeys" },
  { number: "24/7", label: "Concierge Support" },
  { number: "25", label: "Cities Across the UK" },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We never compromise on quality. Every detail matters, from the cleanliness of our vehicles to the professionalism of our chauffeurs.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Building lasting relationships through transparency, reliability, and consistent delivery of our promises.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "Embracing technology and new ideas to enhance customer experience and stay ahead of industry trends.",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "Treating every customer with genuine care and attention, ensuring comfort and satisfaction in every journey.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Committed to reducing our environmental impact with eco-friendly vehicles and sustainable practices.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Supporting local communities and creating opportunities for growth and development across the UK.",
  },
  {
    icon: Lock,
    title: "Privacy",
    description:
      "Guaranteed discretion and confidentiality. We protect your privacy with strict data protocols and rigorous information security.",
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "Fleet-wide telemetry, quarterly chauffeur wellness checks, and ISO-aligned safety playbooks.",
  },
  {
    icon: Leaf,
    title: "Sustainable Luxury",
    text: "Hybrid and electric flagships, carbon-offset journeys, and regenerative partnerships.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    text: "International protocol training for chauffeurs serving diplomats, executives, and UHNW families.",
  },
  {
    icon: Sparkles,
    title: "Experience Design",
    text: "Signature welcome rituals, personalized playlists, and amenities inspired by boutique hotels.",
  },
];

const milestones = [
  {
    year: "2015",
    title: "A Vision Takes Flight",
    description:
      "Quickoo launches in London with ten impeccably maintained Mercedes sedans and a promise—luxury that never sleeps.",
  },
  {
    year: "2019",
    title: "National Expansion",
    description:
      "Operations scale to Manchester, Birmingham, and Edinburgh with fleet telematics and live concierge routing.",
  },
  {
    year: "2023",
    title: "Sustainability Mandate",
    description:
      "Hybrid and electric vehicles account for 60% of all journeys, supported by intelligent charge scheduling.",
  },
  {
    year: "2025",
    title: "Luxury Reimagined",
    description:
      "New bespoke experiences: runway-to-resort transfers, corporate mobility suites, and tailored city immersions.",
  },
];

const difference = [
  {
    icon: Star,
    title: "Signature Services",
    points: [
      "Professionally trained chauffeurs with service playbooks for VIP, executive, and family travel.",
      "Personalized onboard touches: fragrance, ambient lighting, custom playlists, refreshments.",
    ],
  },
  {
    icon: Clock3,
    title: "Always-On Reliability",
    points: [
      "24/7 dispatch and concierge teams with proactive delay management.",
      "Flight tracking, real-time rerouting, and predictive ETA updates sent to your device.",
    ],
  },
  {
    icon: Zap,
    title: "Technology That Cares",
    points: [
      "Unified booking portal, live fleet visibility, and instant shareable ride links.",
      "Secure payment flows with transparent pricing before wheels roll.",
    ],
  },
];

const programs = [
  {
    title: "Executive Suite",
    description:
      "Board-level travel design with elite chauffeurs, and synced corporate calendars.",
    highlights: ["Dedicated journey curator", "Onboard productivity setups"],
    accent: "#F6C36A",
  },
  {
    title: "Immersive City Escapes",
    description:
      "Runway-to-resort itineraries that blend premium transfers with exclusive dining and culture stops.",
    highlights: ["Concierge route curation", "Private guides on request"],
    accent: "#7DD3FC",
  },

];

const contactHighlights = [
  {
    label: "Flagship Lounge",
    value: "450 Bath Road, Longford, London Heathrow, UB7 0EB",
  },
  { label: "Concierge", value: "+44 20 3576 1617" },
  { label: "Availability", value: "24/7 seamless support" },
];

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#fafbff] to-white text-slate-900 overflow-hidden">
      <motion.section
        className="relative overflow-hidden min-h-[70vh] flex items-center bg-gradient-to-br from-white via-[#f1f5ff] to-[#fdf2e9]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
          src="/about/about-hero-luxury-vehicle.jpg"
          alt="Quickoo luxury chauffeur vehicle"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        <div className="absolute -bottom-20 -right-8 h-72 w-72 bg-gold/30 blur-[140px] opacity-40" />
        <div className="absolute -top-24 -left-10 h-64 w-64 bg-[#90c4ff]/30 blur-[120px] opacity-50" />
        <div className="relative z-10 px-5 sm:px-8 md:px-12 xl:px-24 py-20 w-full">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-8">
              <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-6 py-2 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-slate-600 font-semibold">
                  Our Mission
                </p>
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-slate-600 font-semibold">
                  Our Vision
                </p>
              </div>
              <div className="space-y-6">
                <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
                  Luxury transportation elevated with purpose, precision, and care.
                </h1>
                <p className="text-lg text-slate-600 font-inter">
                  Quickoo is the UK’s trusted premium chauffeur collective—engineered for discerning
                  travelers who expect effortless reliability, transparent pricing, eco-conscious fleets,
                  and concierge-grade experiences from booking to drop-off.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/#home-booking" className="luxury-button-gold px-7 py-3 text-base rounded-full inline-block">
                    Book Now
                  </Link>
                  <Link to="/fleet/business-class" className="rounded-full border border-slate-300 px-7 py-3 text-base font-semibold text-slate-900 hover:bg-white transition inline-block">
                    View Fleet
                  </Link>
                </div>
              </div>

            </div>
            <div className="relative">
              <motion.div
                className="absolute inset-0 -m-6 rounded-[40px] bg-gradient-to-br from-white/60 to-transparent blur-2xl opacity-60"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative rounded-[36px] border border-white/40 bg-gradient-to-b from-white/90 to-white/70 p-8 backdrop-blur-lg shadow-2xl">
                <motion.svg
                  viewBox="0 0 500 500"
                  className="absolute -top-6 -left-6 w-40 h-40 text-gold/60"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                >
                  <defs>
                    <linearGradient id="hero-orbit" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4A853" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="250"
                    cy="250"
                    r="230"
                    fill="none"
                    stroke="url(#hero-orbit)"
                    strokeWidth="1.5"
                    strokeDasharray="12 12"
                  />
                </motion.svg>
                <div className="space-y-4">
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Signature Fleet</p>
                    <p className="text-2xl font-semibold text-slate-900">Mercedes-Maybach</p>
                  </div>
                  <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <motion.img
                      src="/about/about-hero.png"
                      alt="Mercedes S-Class representing Quickoo chauffeur fleet"
                      className="h-full w-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 uppercase tracking-[0.4em]">
                    <span>Hybrid ready</span>
                    <span>WiFi onboard</span>
                    <span>Ambient suite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#fafbff] to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        {/* Background decorative elements */}
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-[#487307]/10 blur-[150px]" />
        <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-gold/15 blur-[130px]" />

        {/* Animated SVG */}
        <motion.svg
          className="pointer-events-none absolute right-10 top-10 h-44 w-44 text-[#487307]/10"
          viewBox="0 0 200 200"
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
            strokeDasharray="8 8"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
            strokeDasharray="4 4"
          />
        </motion.svg>

        <div className="section-container relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-4"
          >
            <SectionChip title="Mission & Vision" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-dark max-w-4xl mx-auto leading-tight">
              Driving Excellence,{" "}
              <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                Defining Elegance
              </span>
            </h2>
            <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl mx-auto">
              Our commitment to redefining luxury travel through precision, care, and unwavering excellence.
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-10 shadow-[0_20px_70px_rgba(15,23,42,0.05)] hover:shadow-[0_30px_90px_rgba(72,115,7,0.1)] transition-all duration-500"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#487307]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] p-4 shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-dark leading-tight">
                    Our Mission
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#487307] to-transparent rounded-full" />
                </div>

                {/* Content */}
                <p className="text-base font-inter text-gray-600 leading-relaxed">
                  To deliver reliable, safe, and memorable luxury journeys 24/7 with transparent pricing. Founded to redefine luxury travel across the United Kingdom, Quickoo delivers concierge-level precision at every touchpoint, pairing meticulously maintained fleets with professional chauffeurs trained for elevated service rituals.
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#487307]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-10 shadow-[0_20px_70px_rgba(15,23,42,0.05)] hover:shadow-[0_30px_90px_rgba(212,175,55,0.1)] transition-all duration-500"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-gold via-[#f5d77e] to-gold p-4 shadow-lg">
                  <Star className="h-8 w-8 text-[#0f1801]" />
                </div>

                {/* Title */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-dark leading-tight">
                    Our Vision
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-gold to-transparent rounded-full" />
                </div>

                {/* Content */}
                <p className="text-base font-inter text-gray-600 leading-relaxed">
                  Our vision is to be regarded as a distinguished name in chauffeur-driven mobility, recognised for redefining travel as an elegant and personalised experience rather than a mere transfer. We aspire to set a lasting benchmark in refined service, where every journey becomes a quiet expression of sophistication, and every detail reflects an ethos of excellence without compromise.
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Quote/Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mt-12"
          >
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-[#487307]/10 via-gold/10 to-[#487307]/10 blur-3xl" />
            <div className="relative rounded-3xl border border-slate-100 bg-white p-10 shadow-[0_30px_90px_rgba(72,115,7,0.08)] text-center overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#487307]/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gold/10 to-transparent rounded-full blur-2xl" />

              <div className="relative max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#487307]/50" />
                  <Sparkles className="h-6 w-6 text-[#487307]" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#487307]/50" />
                </div>

                <p className="text-xl sm:text-2xl font-montserrat font-semibold text-dark italic leading-relaxed">
                  "Excellence in every journey—where precision meets care, and every detail reflects our unwavering commitment to{" "}
                  <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                    luxury without compromise.
                  </span>"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="section-spacing bg-gradient-to-b from-white via-[#f8f9fb] to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="section-container space-y-12">
          <div className="text-center space-y-3">
            <p className="uppercase tracking-[0.4em] text-md text-slate-500">Core values</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Quickoo Promise
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full bg-gold/15 p-3 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-lg font-semibold text-slate-900">{title}</p>
                </div>
                <p className="text-sm text-slate-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-spacing relative overflow-hidden bg-gradient-to-b from-white via-[#fafbff] to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="pointer-events-none absolute inset-x-10 -top-24 h-48 rounded-full bg-gold/20 blur-[120px]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[radial-gradient(circle_at_top,#d9e6ff,transparent_60%)] opacity-60" />
        <div className="section-container relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div className="space-y-8" variants={fadeInUp}>
            <p className="uppercase tracking-[0.4em] text-md text-slate-500">Tailored programs</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Crafted for every journey profile
            </h2>
            <p className="text-slate-600 font-inter">
              Our concierge team designs routes and rituals around the traveler. From board meetings to
              immersive escapes, each program layers service standards with adaptive technology, ensuring
              every transfer feels tailored and intuitive.
            </p>

          </motion.div>
          <div className="space-y-6">
            {programs.map((program) => (
              <motion.div
                key={program.title}
                className="relative rounded-[32px] border p-6 sm:p-7 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                style={{
                  borderColor: program.accent,
                  boxShadow: `0 20px 50px ${program.accent}33`,
                }}
              >
                <div className="flex items-center justify-between gap-6 mb-4">
                  <p className="text-base uppercase tracking-[0.4em] text-slate-500">
                    Concierge Program
                  </p>
                  <span
                    className="rounded-full px-4 py-1 text-xs font-semibold text-slate-900"
                    style={{ backgroundColor: program.accent }}
                  >
                    Signature
                  </span>
                </div>
                <div className="space-y-3">
                  <p className="text-2xl font-montserrat font-semibold text-slate-900">
                    {program.title}
                  </p>
                  <p className="text-sm text-slate-600">{program.description}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {program.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-slate-200 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-500 bg-slate-50"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-spacing bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="section-container space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-7" variants={fadeInUp}>
              <p className="uppercase tracking-[0.4em] text-md text-slate-500">
                Why travelers choose us
              </p>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                Luxury without compromise
              </h2>
              <p className="text-slate-600 font-inter">
                Inspired by Quickoo’s “Excellence in Every Journey” ethos, we obsess over the touchpoints
                that matter—safety, sustainability, and sensorial comfort. Our team orchestrates the
                journey like a five-star hotel stay on wheels.
              </p>
            </motion.div>
            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              variants={fadeInUp}
            >
              {pillars.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 space-y-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                >
                  <Icon className="h-8 w-8 text-gold" />
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="text-sm text-slate-600">{text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-spacing bg-white text-dark"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="section-container space-y-10">
          <div className="text-center space-y-3">
            <p className="uppercase tracking-[0.4em] text-sm text-gold">Journey</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold">
              Milestones that define us
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 h-full w-[2px] bg-gradient-to-b from-gold to-transparent" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  className={`relative sm:w-[48%] ${index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                    }`}
                  variants={fadeInUp}
                >
                  <div className="rounded-3xl bg-muted p-6 shadow-lg">

                    <h3 className="text-xl font-montserrat font-semibold text-dark mt-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 font-inter mt-2">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-spacing bg-gradient-to-b from-white via-[#f8f9fb] to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="section-container space-y-10">
          <div className="text-center space-y-3">
            <p className="uppercase tracking-[0.4em] text-md text-slate-500">The Quickoo difference</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Designed for discerning travelers
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {difference.map(({ icon: Icon, title, points }) => (
              <motion.div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                variants={fadeInUp}
              >
                <Icon className="h-8 w-8 text-gold mb-4" />
                <p className="text-xl font-semibold mb-4 text-slate-900">{title}</p>
                <ul className="space-y-3 text-sm text-slate-600 list-disc list-inside">
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-spacing bg-white text-dark"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="section-container grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.4em] text-md text-gold">Premium Fleet Excellence</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-dark">
              Luxury vehicles, meticulously maintained
            </h2>
            <p className="text-gray-600 font-inter">
              Our premium fleet features the finest luxury vehicles, each undergoing rigorous multi-point
              detailing before every journey. Choose from our selection of hybrid and fully electric
              options, delivering exceptional comfort while minimizing environmental impact.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {["Eco-Friendly", "Premium Comfort", "Latest Models"].map((feature) => (
                <div key={feature} className="rounded-2xl bg-muted p-4 text-center font-semibold">
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[320px] rounded-[32px] overflow-hidden shadow-2xl">
            <img
              src="/about/about-fleet-showcase.jpg"
              alt="Quickoo premium fleet"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-spacing bg-gradient-to-b from-white via-[#fafbff] to-white text-dark"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="section-container grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.4em] text-md text-dark/70">
              Concierge connections
            </p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold">
              Let’s craft your next journey
            </h2>
            <p className="text-gray-700 font-inter">
              Speak with our 24/7 concierge to customize itineraries, corporate travel programs,
              or event mobility suites. We orchestrate everything—from airport fast-track to last-mile
              experiences across the UK and beyond.
            </p>
            <div className="grid gap-4">
              {contactHighlights.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-dark/10 bg-white/80 px-5 py-4 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500">{label}</p>
                  <p className="text-lg font-semibold text-dark">{value}</p>
                </div>
              ))}
            </div>
            <button className="luxury-button-gold px-8 py-4 text-lg w-fit rounded-full">
              Book with Quickoo Concierge
            </button>
          </div>
          <div className="rounded-[32px] border border-dark/5 bg-white/60 p-8 shadow-2xl space-y-6">
            <h3 className="text-2xl font-montserrat font-semibold text-dark">
              Excellence, verified.
            </h3>
            <p className="text-gray-600 font-inter">
              Independent audits for safety, sustainability, and service keep us accountable to the
              standards we set. We continue to pioneer eco-luxury transportation, expanding to every
              major UK city with uncompromised hospitality.
            </p>
            <div className="flex gap-4 flex-wrap">
              {["Luxury Transport Guild", "Five-Star Chauffeur Collective"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-dark/15 bg-dark/5 px-4 py-2 text-sm font-semibold text-dark"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
