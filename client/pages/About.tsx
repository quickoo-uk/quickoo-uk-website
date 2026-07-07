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
import { Helmet } from "react-helmet";

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

const features = [
  {
    icon: Users,
    title: "Professional Chauffeur",
    description:
      "When selecting a chauffeur, the key is finding strong drivers who act professionally and are committed to providing excellent service for our customers. Our chauffeurs are courteous, discreet, knowledgeable about the road network within the UK, and can take their clients on the most efficient routes and promise to deliver smooth journeys.",
  },
  {
    icon: Star,
    title: "Premium Vehicle Fleet",
    description:
      "Our Luxury Vehicle Fleet can accommodate the needs of individual clients, families, corporate/business groups, and VIP members, including but not limited to executive saloon cars, executive SUVs, MPVs, and luxury car hire. All vehicles in our fleet are kept in pristine condition and maintained to the highest standards.",
  },
  {
    icon: Globe,
    title: "Airport Transfers",
    description:
      "We provide reliable airport transfers to/from all major airports in the UK, including Heathrow, Gatwick, Stansted, Luton, London City Airport, Birmingham, Manchester, Bristol/Southampton as well as many other regional and local airports. We help you by providing professional airport pick-up and tracking service, so that you arrive at your destination without any problems.",
  },
  {
    icon: TrendingUp,
    title: "Corporate Travel Solutions",
    description:
      "Business travel requires absolute precision and reliability; we accommodate all your business needs by providing punctual chauffeur service. In addition, we help support the company's CEOs, executive support staff, and their business associates by providing luxury transportation options that will help the individual focus on their business instead of worrying about their transportation to and from business activities or business meetings.",
  },
  {
    icon: Zap,
    title: "Travel Across the UK",
    description:
      "If your trip includes travelling to another location within the UK, for example, travelling within the London area, or travelling out of London, for example, by travelling to another location in either England, Scotland, Wales or Northern Ireland, Quickoo provides long-distance private chauffeur travel.",
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
      <Helmet>
        <title>About Quickoo | Luxury Chauffeur Service in the UK</title>
        <meta name="description" content="Learn about Quickoo, a trusted luxury chauffeur service in the UK, offering executive travel, airport transfers, corporate transport, and premium private journeys." />
      </Helmet>
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
                  Luxury Chauffeur Services Designed Around Your Journey
                </h1>
                <p className="text-lg text-slate-600 font-inter">
                  Quickoo has a philosophy that goes beyond simply getting from point A to B in style with 'luxury' transport because travelling in style means arriving at your destination comfortably and with confidence - knowing you are getting an excellent standard of service that values your time as much as you do!
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
              As a reputable provider of luxury chauffeur services throughout the UK, Quickoo provides an unparalleled travel experience for business individuals, international visitors, families and private clients who expect only the highest standards.
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="flex flex-col gap-10 max-w-5xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-8 sm:p-12 shadow-[0_20px_70px_rgba(15,23,42,0.05)] hover:shadow-[0_30px_90px_rgba(72,115,7,0.1)] transition-all duration-500"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#487307]/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
                <div className="space-y-6">
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
                </div>

                {/* Content */}
                <div className="space-y-4 text-base font-inter text-gray-600 leading-relaxed">
                  <p>
                    Our purpose is to deliver a luxurious, tranquil, dependable chauffeur experience by providing an outstanding level of customer service. We aim for perfection to provide the best in every booking. We want our clients to have peace of mind and satisfaction when they travel, wherever they are going.
                  </p>
                  <p>
                    We are committed to enhancing our fleet, technology and customer support systems to ensure all of our journeys adhere to the most stringent quality standards. Simply providing a means of transportation for our passengers is not our goal; we want to provide the experience that passengers can always be confident in selecting for their future transportation needs.
                  </p>
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#487307]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-8 sm:p-12 shadow-[0_20px_70px_rgba(15,23,42,0.05)] hover:shadow-[0_30px_90px_rgba(212,175,55,0.1)] transition-all duration-500"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
                <div className="space-y-6">
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
                </div>

                {/* Content */}
                <div className="space-y-4 text-base font-inter text-gray-600 leading-relaxed">
                  <p>
                    Quickoo's vision when it started was very clear: to reinvent the way people travel privately on the ground by pairing luxury vehicles and superior customer support. We saw that customers needed more than just a basic taxi/ride-share for transportation; they want a quality chauffeur experience to reflect the value of their trip.
                  </p>
                  <p>
                    As we have grown from our original London location to multiple locations around the UK, we have continued to offer a personal touch to our service, which has helped us create great relationships with our customers. Whether it’s an individual airport transfer for someone, a corporate travel plan with several legs or a VIP event, we have built strong relationships with customers who appreciate reliability, professionalism and exceptional service levels.
                  </p>
                  <p>
                    Quickoo provides transportation to domestic and international customers today, focusing on creating custom transportation solutions for all of your needs. Quickoo has a dedicated team with experience who ensures that every aspect of a journey is well planned to ensure that the journey is smooth, reliable and stress-free. You may require airport transfer or corporate transport, perhaps event transport, or even a fit for you during the day; you can rest assured that your every journey through Quickoo will be nothing but exceptional!
                  </p>
                </div>

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
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              What Makes Quickoo Different?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-inter">
              You should not have to worry about your travel in Luxury; that is why we design everything (our service) with three pillars: convenience, professionalism, and comfort.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_90px_rgba(212,175,55,0.1)] transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="flex flex-col gap-4 mb-4">
                  <div className="rounded-2xl bg-gold/15 p-4 text-gold w-fit">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-slate-900 leading-tight">{title}</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-inter leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* A Service Built Around You Section */}
      <motion.section
        className="pb-16 lg:pb-24 pt-4 sm:pt-8 bg-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="section-container">
          <div className="rounded-[40px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 sm:p-12 lg:p-16 shadow-[0_20px_80px_rgba(15,23,42,0.06)] relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-4">
                  {/* <div className="w-12 h-1 bg-gold rounded-full"></div> */}
                  {/* <span className="uppercase tracking-[0.3em] text-sm text-[#487307] font-bold">Your Needs First</span> */}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-slate-900 leading-[1.15]">
                  A Service Built Around You
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-8">
                <p className="text-base sm:text-lg text-slate-800 font-inter leading-relaxed font-medium">
                  Every client has individual requirements. We provide affordable chauffeur services to suit your schedule. Every client has different travel requirements, which is why we offer flexible chauffeur solutions that adapt to your schedule. Whether you are travelling for business, attending a wedding, hosting international guests, or planning a sightseeing tour, we work to provide a service that reflects your individual needs.
                </p>
                <div className="rounded-3xl bg-[#487307]/5 border border-[#487307]/15 p-6 sm:p-8">
                  <p className="text-lg sm:text-xl font-semibold text-[#2a4204] italic leading-relaxed">
                    "From the booking to the final drop-off, our team is focused on delivering a comfortable, efficient and worry-free experience."
                  </p>
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
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="pointer-events-none absolute inset-x-10 -top-24 h-48 rounded-full bg-gold/20 blur-[120px]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[radial-gradient(circle_at_top,#d9e6ff,transparent_60%)] opacity-60" />
        <div className="section-container relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div className="space-y-8" variants={fadeInUp}>
            <p className="uppercase tracking-[0.4em] text-md text-slate-500">Service Standards</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Our Commitment to Excellence
            </h2>
            <div className="space-y-4 text-slate-600 font-inter text-base sm:text-lg">
              <p>
                Our company's dedication to quality stems from our experience in transportation. Our clients value more than just transport - they want reliability, professionalism, and peace of mind.
              </p>
              <p>
                To meet these expectations, we focus on:
              </p>
            </div>

            <p className="inline-block rounded-2xl bg-white border border-slate-200 px-6 py-4 text-sm sm:text-base font-medium text-slate-700 shadow-sm mt-8">
              We treat every client the same, whether it is a short city transfer or a full-day chauffeur hire.
            </p>
          </motion.div>
          <div className="space-y-4 mt-4 lg:mt-0">
            {[
              "Experienced & Licensed Chauffeurs",
              "High Standards Of Maintenance On All Vehicles",
              "Prompt Arrival & Dependability In Scheduling",
              "Transparently Priced With No Hidden Fees",
              "Professional Customer Support",
              "Safe & Comfortable Travel",
              "Personalised Travel Partnerships"
            ].map((commitment) => (
              <motion.div
                key={commitment}
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_10px_40px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] hover:border-gold/30 transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="flex-shrink-0 rounded-full bg-gold/10 p-2 text-gold">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-base font-semibold text-slate-800">
                  {commitment}
                </p>
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
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.4em] text-md text-gold">Occasions</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Serving Every Occasion
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-inter">
              Quickoo offers chauffeur services for all different types of travel, including:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mt-8">
            {/* Corporate & Executive */}
            <motion.div variants={fadeInUp} className="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 hover:bg-white hover:shadow-[0_20px_50px_rgba(72,115,7,0.08)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-xl bg-[#487307]/10 p-3 text-[#487307]">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-slate-900">Corporate & V.I.P</h3>
              </div>
              <ul className="space-y-4">
                {["Business (Executive Travel)", "Corp. Events", "V.I.P."].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Travel & Transfers */}
            <motion.div variants={fadeInUp} className="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 hover:bg-white hover:shadow-[0_20px_50px_rgba(72,115,7,0.08)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-xl bg-[#487307]/10 p-3 text-[#487307]">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-slate-900">Transfers</h3>
              </div>
              <ul className="space-y-4">
                {["Airport Transfers", "Hotel Transfers", "Cruise Ports", "Long Distance"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Events & Leisure */}
            <motion.div variants={fadeInUp} className="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 hover:bg-white hover:shadow-[0_20px_50px_rgba(72,115,7,0.08)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-xl bg-[#487307]/10 p-3 text-[#487307]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-slate-900">Events & Leisure</h3>
              </div>
              <ul className="space-y-4">
                {["Weddings", "Private Events", "Sporting Events", "Concerts", "Site Tours", "Family Travel"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 text-center"
          >
            <p className="inline-block rounded-2xl bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] px-6 sm:px-8 py-5 text-sm sm:text-base font-medium text-white shadow-lg">
              Whatever your occasion, our mission is the same: we want to ensure you have a travel experience that showcases the very best in Luxury & Professionalism.
            </p>
          </motion.div>
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
              <p className="uppercase tracking-[0.4em] text-md text-[#487307] font-semibold">
                Why Clients Choose Quickoo?
              </p>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                Luxury without compromise
              </h2>
              <div className="space-y-4 text-slate-600 font-inter leading-relaxed">
                <p>
                  Clients select Quickoo as a remote service because they appreciate the professional approach we take to every customer we work with. The quality of service we offer is paramount to our continued success. If you want to feel secure, confidential and satisfy your client's needs, we take the utmost care and attention to detail in everything we do to ensure that every trip is well taken care of.
                </p>
                <p>
                  Our commitment to exceeding expectations has enabled us to maintain ongoing partnerships with local companies and government agencies, including, but not limited to, airlines, universities, hotels, utility companies and international private travel agencies in the United Kingdom.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              variants={fadeInUp}
            >
              {pillars.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#487307]/10 text-[#487307] group-hover:bg-[#487307] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-montserrat font-semibold text-slate-900 leading-tight">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-600 font-inter leading-relaxed">
                      {text}
                    </p>
                  </div>
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
              Experience Luxury Travel with Quickoo
            </h2>
            <div className="space-y-4 text-gray-600 font-inter leading-relaxed">
              <p>
                Regardless of whether your trip is for business or leisure, we offer high-quality, safe, dependable, and luxurious chauffeur travel experiences that will exceed your expectations. We offer airport transfers, premier executive transportation, special occasion transportation, custom personal transportation and all other transportation arrangements you make with us. We will go above and beyond to make every trip enjoyable, dependable and a pleasant experience.
              </p>
              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#487307]/10 bg-gradient-to-br from-[#487307]/5 to-transparent p-6 transition-all hover:shadow-[0_10px_30px_rgba(72,115,7,0.08)]">
                <div className="flex-shrink-0 rounded-full bg-white p-3 text-gold shadow-sm border border-slate-100">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-montserrat font-bold text-slate-900 text-lg">
                    Book your next trip with Quickoo today!
                  </p>
                  <p className="text-slate-600 font-inter mt-1 leading-relaxed">
                    See the difference a quality luxury chauffeur service can make for you.
                  </p>
                </div>
              </div>
            </div>
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
