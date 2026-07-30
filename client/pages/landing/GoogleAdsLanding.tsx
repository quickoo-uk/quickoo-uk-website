import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock,
  CreditCard,
  Luggage,
  MapPin,
  PlaneLanding,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LandingBookingWidget from "@/components/landing/LandingBookingWidget";
import {
  LANDING_PHONE,
  LANDING_PHONE_DISPLAY,
  LANDING_WHATSAPP,
  LandingShell,
} from "@/components/landing/LandingShell";
import { trackAdsEvent } from "@/lib/adsConversion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 } as const;

const TRUST_POINTS = [
  { icon: CreditCard, label: "Fixed price, no surge" },
  { icon: PlaneLanding, label: "Free flight tracking" },
  { icon: Clock, label: "24/7 booking & support" },
  { icon: ShieldCheck, label: "Licensed & fully insured" },
];

const BENEFITS = [
  {
    icon: CreditCard,
    title: "All-inclusive fixed pricing",
    description:
      "The price you see when you book is the price you pay. Meet & greet, parking, tolls and waiting time are included — no surge pricing, ever.",
  },
  {
    icon: PlaneLanding,
    title: "Flights tracked in real time",
    description:
      "We monitor your flight and adjust your pickup automatically. Delayed or early, your chauffeur is already waiting when you land.",
  },
  {
    icon: UserCheck,
    title: "Professional vetted chauffeurs",
    description:
      "Background-checked, licensed and discreet. Suited chauffeurs who know the UK road network and take the most efficient route, every time.",
  },
  {
    icon: Sparkles,
    title: "Immaculate premium fleet",
    description:
      "Mercedes E-Class and S-Class, BMW 5 & 7 Series, Range Rover and V-Class — all kept in pristine, showroom condition.",
  },
];

const FLEET = [
  {
    name: "Executive",
    cars: "Mercedes E-Class · BMW 5 Series · Audi A6",
    seats: "3 passengers · 2 large cases",
    image: "/fleet/Mercedes-benz-e-class.jpg",
  },
  {
    name: "Luxury / VIP",
    cars: "Mercedes S-Class · BMW 7 Series · Audi A8 L",
    seats: "3 passengers · 2 large cases",
    image: "/fleet/Mercedes-benz-s-class.png",
  },
  {
    name: "Premium SUV",
    cars: "Range Rover Autobiography · Range Rover Sport",
    seats: "4 passengers · 3 large cases",
    image: "/fleet/Range Rover Autobiography  Vogue.png",
  },
  {
    name: "Business Van",
    cars: "Mercedes V-Class",
    seats: "7 passengers · 7 large cases",
    image: "/fleet/Mercedes-Benz V-Class.png",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Get your instant price",
    description:
      "Enter your pickup and destination. Your all-inclusive fare appears in seconds — no waiting for a callback.",
  },
  {
    number: "02",
    title: "Choose your vehicle",
    description:
      "Pick the class that suits the journey, add any extras, and confirm securely online in under two minutes.",
  },
  {
    number: "03",
    title: "Your chauffeur arrives",
    description:
      "You receive your chauffeur's details before pickup. They arrive early, track your flight, and meet you on arrival.",
  },
];

const AIRPORTS = [
  "Heathrow (LHR)",
  "Gatwick (LGW)",
  "Stansted (STN)",
  "Luton (LTN)",
  "London City (LCY)",
  "Birmingham (BHX)",
  "Manchester (MAN)",
  "Southampton (SOU)",
];

const SERVICES = [
  {
    icon: PlaneLanding,
    title: "Airport transfers",
    description:
      "Meet & greet at arrivals, flight tracking and 60 minutes of free waiting time at all major UK airports.",
  },
  {
    icon: BadgeCheck,
    title: "Corporate travel",
    description:
      "Account billing, priority dispatch and discreet chauffeurs for client meetings, roadshows and executive travel.",
  },
  {
    icon: Clock,
    title: "Hourly & chauffeur hire",
    description:
      "Keep a car and chauffeur on standby by the hour for meetings, shopping, events or a full day of travel.",
  },
  {
    icon: Luggage,
    title: "Events & special occasions",
    description:
      "Weddings, cruise transfers, private jet transfers and nights out — arranged end to end by our concierge team.",
  },
];

const FAQS = [
  {
    q: "How much does a chauffeur cost?",
    a: "Every journey is quoted as a fixed, all-inclusive fare based on your exact route and vehicle class. Enter your pickup and destination above to see your price instantly — meet & greet, parking, tolls and waiting time are already included.",
  },
  {
    q: "What happens if my flight is delayed?",
    a: "We track your flight in real time and adjust the pickup automatically at no extra cost. You get 60 minutes of free waiting time on airport arrivals, starting after your flight lands.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 12 hours ahead so we can allocate the right vehicle and chauffeur. Same-day and short-notice bookings are usually possible — call us on " +
      LANDING_PHONE_DISPLAY +
      " and we will confirm availability straight away.",
  },
  {
    q: "Will my chauffeur meet me inside the terminal?",
    a: "Yes. Your chauffeur waits in the arrivals hall with a name board, helps with luggage and walks you to the vehicle. You will receive their name and contact details before pickup.",
  },
  {
    q: "Can I book a return or multi-stop journey?",
    a: "Yes. Return trips, additional stops and full-day hourly hire can all be added during booking, or arranged by phone with our 24/7 team.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "All major credit and debit cards are accepted online through our secure checkout. Corporate accounts with monthly invoicing are available on request.",
  },
];

export default function GoogleAdsLanding() {
  return (
    <LandingShell
      title="Luxury Chauffeur Hire London | Fixed Price Airport Transfers | Quickoo"
      description="Book a professional chauffeur in London and across the UK. Fixed all-inclusive prices, free flight tracking, meet & greet and 24/7 support. Get your instant quote."
      quoteAnchor="#quote"
    >
      <Hero />
      <TrustBar />
      <Benefits />
      <Fleet />
      <HowItWorks />
      <Services />
      <Airports />
      <Faq />
      <FinalCta />
    </LandingShell>
  );
}

/* ---------------------------------- Hero --------------------------------- */

const Hero = () => (
  <section id="quote" className="relative w-full overflow-hidden bg-[#0a1a02] scroll-mt-20">
    <div className="absolute inset-0 z-0">
      <img
        src="/home/hero-premium-travel-1.png"
        alt=""
        aria-hidden
        className="h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/70 lg:to-black/50" />
    </div>

    <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:gap-12 lg:px-8 lg:py-20">
      {/* Copy */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a3e635] backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-[#a3e635] text-[#a3e635]" />
          Premium chauffeur service · UK wide
        </span>

        <h1 className="mt-5 font-montserrat text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-5xl">
          Luxury chauffeur hire with{" "}
          <span className="text-[#a3e635]">fixed, all-inclusive prices</span>
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
          Airport transfers, corporate travel and hourly chauffeur hire across London and the UK.
          Professional vetted chauffeurs, immaculate premium vehicles, and a price that never
          changes after you book.
        </p>

        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {[
            "Free flight tracking & meet and greet",
            "60 minutes free airport waiting time",
            "Fixed fares — no surge, no hidden extras",
            "24/7 UK-based booking & support team",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-100">
              <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#a3e635]" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`tel:${LANDING_PHONE}`}
            onClick={() => trackAdsEvent("lp_call_click", { placement: "hero" })}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0a1a02] transition hover:bg-[#a3e635]"
          >
            <Phone className="h-4 w-4" />
            {LANDING_PHONE_DISPLAY}
          </a>
          <a
            href={`https://wa.me/${LANDING_WHATSAPP}?text=${encodeURIComponent(
              "Hi Quickoo, I'd like a quote for a chauffeur booking.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAdsEvent("lp_whatsapp_click", { placement: "hero" })}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            WhatsApp us
          </a>
        </div>
      </motion.div>

      {/* Quote widget */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="w-full"
      >
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-6">
          <div className="mb-4 text-center">
            <h2 className="font-montserrat text-xl font-bold text-[#0a1a02] sm:text-2xl">
              Get your instant price
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Takes under 60 seconds · No account needed
            </p>
          </div>
          <LandingBookingWidget />
        </div>
      </motion.div>
    </div>
  </section>
);

/* -------------------------------- Trust bar ------------------------------- */

const TrustBar = () => (
  <section className="border-b border-slate-200 bg-white py-6">
    <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 sm:px-6 lg:justify-between lg:px-8">
      {TRUST_POINTS.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#487307]/10">
            <Icon className="h-4 w-4 text-[#487307]" />
          </span>
          <span className="text-sm font-semibold text-[#0a1a02]">{label}</span>
        </div>
      ))}
      <img
        src="/images/tfl-logo.png"
        alt="Transport for London licensed private hire operator"
        className="h-9 w-auto object-contain opacity-80"
        loading="lazy"
      />
    </div>
  </section>
);

/* -------------------------------- Benefits -------------------------------- */

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="mx-auto max-w-3xl text-center">
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#487307]">{eyebrow}</span>
    <h2 className="mt-3 font-montserrat text-2xl font-extrabold text-[#0a1a02] sm:text-3xl lg:text-4xl">
      {title}
    </h2>
    {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-600">{subtitle}</p>}
  </div>
);

const Benefits = () => (
  <section className="bg-white py-16 sm:py-20">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why Quickoo"
        title="Everything included. Nothing to worry about."
        subtitle="We built Quickoo for travellers who need the car to simply be there — on time, spotless, and at the price agreed."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_30px_rgba(10,26,2,0.06)] transition hover:-translate-y-1 hover:border-[#487307]/40 hover:shadow-[0_20px_60px_rgba(10,26,2,0.12)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#487307]/10">
              <Icon className="h-6 w-6 text-[#487307]" />
            </span>
            <h3 className="mt-5 font-montserrat text-lg font-bold text-[#0a1a02]">{title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------------------------- Fleet --------------------------------- */

const Fleet = () => (
  <section className="bg-slate-50 py-16 sm:py-20">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="The fleet"
        title="Choose the car that fits the journey"
        subtitle="From executive saloons to seven-seat business vans — every vehicle is late-model, fully insured and professionally valeted."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FLEET.map((vehicle, i) => (
          <motion.div
            key={vehicle.name}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_30px_rgba(10,26,2,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(10,26,2,0.12)]"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img
                src={vehicle.image}
                alt={`${vehicle.name} chauffeur vehicle`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-montserrat text-lg font-bold text-[#0a1a02]">{vehicle.name}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{vehicle.cars}</p>
              <p className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#487307]">
                <Luggage className="h-4 w-4" />
                {vehicle.seats}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#quote"
          onClick={() => trackAdsEvent("lp_quote_start", { placement: "fleet" })}
          className="inline-flex items-center justify-center rounded-full bg-[#487307] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3a5d06]"
        >
          Check prices for my journey
        </a>
      </div>
    </div>
  </section>
);

/* ------------------------------- How it works ----------------------------- */

const HowItWorks = () => (
  <section className="bg-white py-16 sm:py-20">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="How it works" title="Booked in three simple steps" />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-2xl border border-slate-200 bg-slate-50/60 p-7"
          >
            <span className="font-montserrat text-4xl font-extrabold text-[#487307]/25">
              {step.number}
            </span>
            <h3 className="mt-3 font-montserrat text-lg font-bold text-[#0a1a02]">{step.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* -------------------------------- Services -------------------------------- */

const Services = () => (
  <section className="bg-[#0a1a02] py-16 sm:py-20">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a3e635]">
          Our services
        </span>
        <h2 className="mt-3 font-montserrat text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
          One chauffeur service for every occasion
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:border-[#a3e635]/40 hover:bg-white/[0.1]"
          >
            <Icon className="h-7 w-7 text-[#a3e635]" />
            <h3 className="mt-4 font-montserrat text-lg font-bold text-white">{title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* -------------------------------- Airports -------------------------------- */

const Airports = () => (
  <section className="bg-white py-16 sm:py-20">
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Airport transfers"
        title="Covering every major UK airport"
        subtitle="Meet & greet at arrivals, real-time flight tracking and 60 minutes of complimentary waiting time — included as standard."
      />

      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
        {AIRPORTS.map((airport) => (
          <span
            key={airport}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-[#0a1a02]"
          >
            <MapPin className="h-4 w-4 text-[#487307]" />
            {airport}
          </span>
        ))}
      </div>
    </div>
  </section>
);

/* ----------------------------------- FAQ ---------------------------------- */

const Faq = () => (
  <section className="bg-slate-50 py-16 sm:py-20">
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="FAQ" title="Questions before you book" />

      <Accordion type="single" collapsible className="mt-10 w-full space-y-3">
        {FAQS.map((faq, i) => (
          <AccordionItem
            key={faq.q}
            value={`faq-${i}`}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white px-5"
          >
            <AccordionTrigger className="text-left font-montserrat text-base font-semibold text-[#0a1a02] hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-slate-600">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

/* -------------------------------- Final CTA ------------------------------- */

const FinalCta = () => (
  <section className="relative overflow-hidden bg-[#487307] py-16 sm:py-20">
    <div className="absolute inset-0 opacity-20">
      <img
        src="/footer-cta-background.jpg"
        alt=""
        aria-hidden
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>

    <div className="relative z-10 mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
      <h2 className="font-montserrat text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
        Ready to travel in comfort?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base text-white/90">
        Get your fixed, all-inclusive price in under a minute — or speak to our 24/7 team and we
        will arrange everything for you.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#quote"
          onClick={() => trackAdsEvent("lp_quote_start", { placement: "final_cta" })}
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a1a02] transition hover:bg-[#0a1a02] hover:text-white"
        >
          Get my instant price
        </a>
        <a
          href={`tel:${LANDING_PHONE}`}
          onClick={() => trackAdsEvent("lp_call_click", { placement: "final_cta" })}
          className="inline-flex items-center gap-2 rounded-full border border-white/50 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <Phone className="h-4 w-4" />
          {LANDING_PHONE_DISPLAY}
        </a>
      </div>
    </div>
  </section>
);
