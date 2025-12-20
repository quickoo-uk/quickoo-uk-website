import { useState } from "react";
import { SectionChip } from "@/components/SectionChip";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

const inputBase =
  "w-full px-4 py-3 border border-slate-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-gold/40";

const heroStats = [
  { label: "Response Time", value: "< 2 hrs" },
  { label: "Support Availability", value: "24 / 7" },
  { label: "Average Rating", value: "4.9 / 5" },
  { label: "Locations Covered", value: "25+ UK Cities" },
];

const contactChannels = [
  {
    icon: Phone,
    title: "Call Concierge",
    content: "+44 20 3576 1617",
    action: "tel:+442035761617",
    description: "Immediate chauffeur support anytime.",
  },
  {
    icon: Mail,
    title: "Email Support",
    content: "info@quickoo.co.uk",
    action: "mailto:info@quickoo.co.uk",
    description: "Response within 2 hours.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    content: "+44 20 3576 1617",
    action: "https://wa.me/442035761617",
    description: "Live chat with our concierge.",
  },
];

const serviceTypes = [
  "Airport Transfers",
  "Corporate travel",
  "Special events",
  "City Tours",
  "Private Jet Chauffeur",
  "London Cruise Transfer",
];

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 24 hours ahead for best availability. Airport transfers are best secured at least 48 hours prior.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancel 24 hours before pickup for a full refund. Inside 24 hours, our sliding scale applies as outlined in our terms.",
  },
  {
    question: "Do you provide child seats?",
    answer:
      "Complimentary child seats are available on request. Add the number of seats and ages during booking so we can prepare the right configuration.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We operate across Greater London, every major UK airport, and cities including Manchester, Birmingham, Liverpool, and Edinburgh.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    serviceType: "",
    message: "",
  });

  const [newsletterOptIn, setNewsletterOptIn] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, newsletterOptIn });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      serviceType: "",
      message: "",
    });
    setNewsletterOptIn(true);
  };

  return (
    <div className="bg-white text-slate-900">
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/contact/contact-hero-background.jpeg"
            alt="Quickoo Premium Support"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80 md:via-white/80 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>

        {/* Decorative Mesh Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8fe00f]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#487307]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="section-container relative z-10 w-full pt-32 pb-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <SectionChip title="Direct Concierge Access" />
                <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-slate-900">
                  Refined <br />
                  <span className="bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#8fe00f] bg-clip-text text-transparent">
                    Support
                  </span> <br />
                  Round the Clock.
                </h1>
                <p className="text-lg md:text-xl text-slate-600 font-inter max-w-2xl leading-relaxed">
                  Elite chauffeur coordination, corporate mobility planning, and bespoke event logistics—managed with sub-two-hour response times.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                {heroStats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl font-montserrat font-bold text-slate-900">{stat.value}</span>
                    <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#487307]/20 to-transparent blur-2xl rounded-[48px] opacity-50" />
              <div className="relative rounded-[48px] border border-white/60 bg-white/95 p-10 shadow-[0_50px_100px_rgba(72,115,7,0.15)] backdrop-blur-xl">
                <div className="relative h-64 mb-10 rounded-[32px] overflow-hidden group">
                  <img
                    src="/contact/contact-concierge-new.png"
                    alt="Quickoo Concierge Team"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <p className="text-white font-montserrat font-bold">24/7 Availability</p>
                    <div className="flex gap-1">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-2 h-2 rounded-full bg-[#8fe00f] animate-pulse" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-500 font-bold">Priority Hotline</p>
                    <a
                      href="tel:+442035761617"
                      className="text-3xl md:text-4xl font-montserrat font-bold text-slate-900 block hover:text-[#487307] transition-colors"
                    >
                      +44 20 3576 1617
                    </a>
                  </div>

                  <p className="text-slate-600 font-inter leading-relaxed">
                    Connect instantly with our flagship desk at Heathrow. We handle multi-city itineraries, VIP arrivals, and urgent amendments with absolute discretion.
                  </p>

                  <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                    <button
                      onClick={() => window.open('https://wa.me/442035761617', '_blank')}
                      className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-slate-900 text-white text-sm font-bold hover:bg-[#487307] transition-all"
                    >
                      WhatsApp
                    </button>
                    <button
                      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl border border-slate-200 text-slate-900 text-sm font-bold hover:border-[#487307] hover:text-[#487307] transition-all"
                    >
                      Enquiry
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white shadow-2xl rounded-full flex items-center justify-center border border-slate-100 z-20">
                <div className="text-center">
                  <p className="text-2xl font-montserrat font-bold text-[#487307]">99%</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="section-spacing bg-gradient-to-b from-white via-[#f8fbff] to-[#fff8f0]">
        <div className="section-container space-y-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {contactChannels.map(({ icon: Icon, title, content, action, description }) => (
              <a
                key={title}
                href={action}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{title}</p>
                    <p className="text-xl font-semibold text-slate-900">{content}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">{description}</p>
              </a>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_50px_120px_rgba(15,23,42,0.08)]">
              <div className="space-y-2 mb-8">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  Send us a message
                </p>
                <h2 className="text-3xl font-montserrat font-semibold text-slate-900">
                  Share your journey details
                </h2>
                <p className="text-slate-600">
                  A concierge specialist will reply within two hours during business hours.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter font-semibold text-slate-700 mb-1 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputBase}
                      placeholder="Amelia Carter"
                    />
                  </div>
                  <div>
                    <label className="font-inter font-semibold text-slate-700 mb-1 block">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputBase}
                      placeholder="+44 20 3576 1617"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter font-semibold text-slate-700 mb-1 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputBase}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-inter font-semibold text-slate-700 mb-1 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputBase}
                      placeholder="Airport transfer, corporate account..."
                    />
                  </div>
                </div>

                <div>
                  <label className="font-inter font-semibold text-slate-700 mb-1 block">
                    Service Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {serviceTypes.map((type) => (
                      <label
                        key={type}
                        className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition cursor-pointer ${formData.serviceType === type
                          ? "border-gold bg-gold/10 text-slate-900"
                          : "border-slate-200 text-slate-500 hover:border-slate-300"
                          }`}
                      >
                        <input
                          type="radio"
                          name="serviceType"
                          value={type}
                          checked={formData.serviceType === type}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-inter font-semibold text-slate-700 mb-1 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`${inputBase} resize-none`}
                    placeholder="Tell us about your itinerary, passenger count, or bespoke requests..."
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    name="newsletterOptIn"
                    checked={newsletterOptIn}
                    onChange={() => setNewsletterOptIn((prev) => !prev)}
                    className="mt-1 rounded border-slate-300 text-gold focus:ring-gold"
                  />
                  I'd like to receive exclusive Quickoo offers and journey inspiration via email.
                </label>

                <button
                  type="submit"
                  className="luxury-button-gold w-full text-lg py-4 rounded-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.08)] space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                    <Headphones className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                      Concierge desk
                    </p>
                    <p className="text-2xl font-montserrat font-semibold text-slate-900">
                      info@quickoo.co.uk
                    </p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Expect a personalized response within two hours during business hours and prompt
                  follow-ups for complex itineraries.
                </p>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                  <p>450 bath road, Longford, London,Heathrow, UB70EB</p>
                  <p className="mt-2">24/7 support • Global clientele • Discreet, secure service</p>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-6 space-y-4 shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-500">
                  <Clock className="h-4 w-4 text-gold" />
                  Response promise
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Live chat & phone</p>
                    <p className="text-2xl font-semibold text-slate-900">Always on</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email turnaround</p>
                    <p className="text-2xl font-semibold text-slate-900">Under 2 hrs</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Corporate accounts receive a dedicated journey manager with proactive itinerary
                  monitoring.
                </p>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <ShieldCheck className="h-5 w-5 text-gold" />
                  ISO-aligned safety protocols & NDA-backed chauffeurs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-b from-[#f8fbff] via-white to-[#fff6ef]">
        <div className="section-container space-y-10">
          <div className="text-center space-y-3">
            <p className="text-md uppercase tracking-[0.4em] text-slate-500">FAQs</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Frequently asked questions
            </h2>
            <p className="text-slate-600">
              Inspired by Quickoo’s concierge knowledge base—here are the answers travelers ask most.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)]"
              >
                <p className="text-lg font-semibold text-slate-900">{faq.question}</p>
                <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-white via-[#f4f6ff] to-[#fff6ee]">
        <div className="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="space-y-6">
            <p className="text-md uppercase tracking-[0.4em] text-slate-500">
              Visit our flagship lounge
            </p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Meet us at Heathrow
            </h2>
            <p className="text-slate-600">
              Drop in for itinerary planning, meet your chauffeur, or experience our latest eco-luxury
              fleet. Complimentary refreshments and meeting pods available for account holders.
            </p>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.08)] space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <MapPin className="h-5 w-5 text-gold" />
                450 bath road, Longford, London,Heathrow, UB70EB
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="h-5 w-5 text-gold" />
                +44 20 3576 1617
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="h-5 w-5 text-gold" />
                info@quickoo.co.uk
              </div>
            </div>
          </div>
          <div className="h-[420px] rounded-[32px] overflow-hidden border border-slate-200 shadow-[0_40px_140px_rgba(15,23,42,0.1)]">
            <iframe
              title="Quickoo Heathrow Lounge"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9931.775679568785!2d-0.455213!3d51.471682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487671472a42b5e3%3A0x9d9c8c0d5e94d55a!2sBath%20Rd%2C%20Longford%2C%20Hounslow%20UB7%200EB%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
