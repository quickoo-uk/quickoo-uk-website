import { useState, useRef, useEffect } from "react";
import { SectionChip } from "@/components/SectionChip";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const inputBase =
  "w-full px-4 py-3 border border-slate-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-gold/40";

const contactChannels = [
  {
    icon: Phone,
    title: "Call Concierge",
    content: "020 3576 1617",
    action: "tel:+442035761617",
    description: "Immediate chauffeur support anytime.",
  },
  {
    icon: Mail,
    title: "Email Support",
    content: "support@quickoo.co.uk",
    action: "mailto:support@quickoo.co.uk",
    description: "Response within 2 hours.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    content: "+44 7787 368748",
    action: "https://wa.me/447787368748",
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

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Invalid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface Country {
  name: string;
  code: string;
  iso: string;
}

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceType: "",
    },
  });

  const selectedServiceType = watch("serviceType");

  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: "United Kingdom",
    code: "+44",
    iso: "gb"
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);

  const [newsletterOptIn, setNewsletterOptIn] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch countries from REST Countries API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoadingCountries(true);
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,idd,cca2');
        const data = await response.json();

        const formattedCountries: Country[] = data
          .map((country: any) => ({
            name: country.name.common,
            code: country.idd.root + (country.idd.suffixes?.[0] || ''),
            iso: country.cca2.toLowerCase(),
          }))
          .filter((country: Country) => country.code && country.code !== '+')
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name));

        setCountries(formattedCountries);
        setFilteredCountries(formattedCountries);

        // Set UK as default if available
        const ukCountry = formattedCountries.find(c => c.iso === 'gb');
        if (ukCountry) {
          setSelectedCountry(ukCountry);
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
        // Fallback to a basic list if API fails
        const fallbackCountries: Country[] = [
          { name: "United Kingdom", code: "+44", iso: "gb" },
          { name: "United States", code: "+1", iso: "us" },
          { name: "India", code: "+91", iso: "in" },
        ];
        setCountries(fallbackCountries);
        setFilteredCountries(fallbackCountries);
        setSelectedCountry(fallbackCountries[0]);
      } finally {
        setIsLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  // Filter countries based on search
  useEffect(() => {
    if (countrySearch.trim() === "") {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
        country.code.includes(countrySearch)
      );
      setFilteredCountries(filtered);
    }
  }, [countrySearch, countries]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
        setCountrySearch("");
      }
    }

    if (isCountryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCountryDropdownOpen]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const templateParams = {
        name: data.name,
        phone: `${selectedCountry.code} ${data.phone}`,
        email: data.email,
        subject: data.subject,
        service: data.serviceType,
        message: data.message,
      };

      await emailjs.send(
        "service_sinng3w",
        "template_s10flct",
        templateParams,
        "f2mEVklY9RlV91XcR"
      );

      setShowSuccessModal(true);
      reset();
      setNewsletterOptIn(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
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

              <div className="max-w-2xl rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.07)] backdrop-blur">
                <h2 className="font-montserrat text-xl font-semibold text-slate-900">
                  Concierge support for every journey
                </h2>
                <p className="mt-3 font-inter leading-relaxed text-slate-600">
                  Our Luxury Chauffeur Service team plans each detail around your schedule, preferences and destination with professionalism and discretion.
                </p>
                <ul className="mt-5 grid gap-3 font-inter text-sm text-slate-700">
                  {[
                    "Airport and private aviation coordination",
                    "Corporate and multi-city itinerary planning",
                    "Discreet amendments and special requests",
                  ].map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#487307]" />
                      {service}
                    </li>
                  ))}
                </ul>
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
                      020 3576 1617
                    </a>
                  </div>

                  <p className="text-slate-600 font-inter leading-relaxed">
                    Connect instantly with our flagship desk at Heathrow. We handle multi-city itineraries, VIP arrivals, and urgent amendments with absolute discretion.
                  </p>

                  <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                    <button
                      onClick={() => window.open('https://wa.me/447787368748', '_blank')}
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
              {/* <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white shadow-2xl rounded-full flex items-center justify-center border border-slate-100 z-20">
                <div className="text-center">
                  <p className="text-2xl font-montserrat font-bold text-[#487307]">70%</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Happy Clients</p>
                </div>
              </div> */}
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
              <form onSubmit={handleFormSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter font-semibold text-slate-700 mb-1 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      className={cn(inputBase, errors.name && "border-red-500")}
                      placeholder="Amelia Carter"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="relative">
                    <label className="font-inter font-semibold text-slate-700 mb-1 block">
                      Phone
                    </label>
                    <div className="relative flex">
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          disabled={isLoadingCountries}
                          className="h-full min-w-[85px] flex items-center justify-center gap-1.5 px-2.5 border border-slate-200 border-r-0 rounded-l-2xl bg-slate-50 hover:bg-slate-100 transition-colors whitespace-nowrap disabled:opacity-50"
                        >
                          {isLoadingCountries ? (
                            <span className="text-xs text-slate-500">Loading...</span>
                          ) : (
                            <>
                              <img
                                src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
                                alt={selectedCountry.iso}
                                className="w-6 h-auto rounded-sm shadow-sm"
                              />
                              <span className="text-sm font-bold text-slate-700">{selectedCountry.code}</span>
                            </>
                          )}
                        </button>

                        {isCountryDropdownOpen && (
                          <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden">
                            {/* Search Box */}
                            <div className="p-3 border-b border-slate-200 bg-slate-50">
                              <input
                                type="text"
                                value={countrySearch}
                                onChange={(e) => setCountrySearch(e.target.value)}
                                placeholder="Search country or code..."
                                className="w-full px-4 py-2 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 text-sm"
                                autoFocus
                              />
                            </div>

                            {/* Countries List */}
                            <div className="max-h-64 overflow-y-auto py-2" onWheel={(e) => e.stopPropagation()}>
                              {filteredCountries.length > 0 ? (
                                filteredCountries.map((country) => (
                                  <button
                                    key={country.name + country.code}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountry(country);
                                      setIsCountryDropdownOpen(false);
                                      setCountrySearch("");
                                    }}
                                    className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-50 transition-colors text-left"
                                  >
                                    <img
                                      src={`https://flagcdn.com/w40/${country.iso}.png`}
                                      alt={country.iso}
                                      className="w-6 h-auto rounded-sm shadow-sm"
                                    />
                                    <span className="flex-1 text-sm font-medium text-slate-700">{country.name}</span>
                                    <span className="text-xs font-semibold text-slate-400">{country.code}</span>
                                  </button>
                                ))
                              ) : (
                                <div className="px-4 py-8 text-center text-sm text-slate-500">
                                  No countries found matching "{countrySearch}"
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <input
                        type="tel"
                        {...register("phone")}
                        className={cn(inputBase, "rounded-l-none", errors.phone && "border-red-500")}
                        placeholder="7400 123456"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter font-semibold text-slate-700 mb-1 block">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className={cn(inputBase, errors.email && "border-red-500")}
                      placeholder="you@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="font-inter font-semibold text-slate-700 mb-1 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      {...register("subject")}
                      className={cn(inputBase, errors.subject && "border-red-500")}
                      placeholder="Airport transfer, corporate account..."
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="font-inter font-semibold text-slate-800 mb-4 block text-lg">
                    Service Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {serviceTypes.map((type) => (
                      <label
                        key={type}
                        className={cn(
                          "relative rounded-[24px] border px-6 py-6 text-[15px] font-semibold transition-all cursor-pointer flex items-center min-h-[80px] group",
                          selectedServiceType === type
                            ? "border-[#487307] bg-[#487307]/5 text-[#1a2e03] shadow-[0_10px_25px_rgba(72,115,7,0.12)]"
                            : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50 shadow-sm"
                        )}
                      >
                        <input
                          type="radio"
                          value={type}
                          checked={selectedServiceType === type}
                          onChange={(e) => setValue("serviceType", e.target.value, { shouldValidate: true })}
                          className="sr-only"
                        />
                        <span className="leading-snug pr-4">{type}</span>

                        <div className={cn(
                          "absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                          selectedServiceType === type
                            ? "border-[#487307] bg-[#487307]"
                            : "border-slate-200 bg-white group-hover:border-slate-300"
                        )}>
                          {selectedServiceType === type && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.serviceType && (
                    <p className="text-red-500 text-xs mt-2 ml-1">{errors.serviceType.message}</p>
                  )}
                </div>

                <div>
                  <label className="font-inter font-semibold text-slate-700 mb-1 block">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    {...register("message")}
                    className={cn(inputBase, "resize-none", errors.message && "border-red-500")}
                    placeholder="Tell us about your itinerary, passenger count, or bespoke requests..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
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
                  disabled={isSubmitting}
                  className="luxury-button-gold w-full text-lg py-4 rounded-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing your booking…
                    </>
                  ) : (
                    "Send Message"
                  )}
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
                020 3576 1617
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.703811061033!2d-0.47560220000000003!3d51.48195080000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876718619b70ac9%3A0x323bebac9f3831f6!2sHeathrow%2C%20450%20Bath%20Rd%2C%20Longford%2C%20Harmondsworth%2C%20West%20Drayton%20UB7%200EB%2C%20UK!5e0!3m2!1sen!2sin!4v1775389465641!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md bg-white rounded-[32px] border-none shadow-2xl p-0 overflow-hidden [&>button]:text-white [&>button]:opacity-100 [&>button]:hover:bg-white/10 [&>button]:transition-all">
          <div className="bg-gradient-to-br from-[#1a2e03] to-[#487307] p-8 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
              <CheckCircle2 className="w-10 h-10 text-[#8fe00f]" />
            </div>
            <DialogTitle className="text-2xl font-montserrat font-bold text-white mb-2">
              Message Received
            </DialogTitle>
            <DialogDescription className="text-white/80 font-inter">
              Your inquiry has been sent to our flagship concierge desk.
            </DialogDescription>
          </div>
          <div className="p-8 space-y-6">
            <p className="text-slate-600 text-center leading-relaxed font-inter">
              An elite chauffeur coordinator will review your details and respond within <b>two hours</b>.
              For urgent updates, please reference your name on our priority hotline.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-4 rounded-2xl bg-[#487307] text-white font-bold hover:bg-[#1a2e03] transition-all shadow-lg overflow-hidden relative group"
            >
              <span className="relative z-10">Back to Journey Planning</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Error Modal */}
      <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
        <DialogContent className="sm:max-w-md bg-white rounded-[32px] border-none shadow-2xl p-0 overflow-hidden [&>button]:text-white [&>button]:opacity-100 [&>button]:hover:bg-white/10 [&>button]:transition-all">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
              <AlertCircle className="w-10 h-10 text-red-400" />
            </div>
            <DialogTitle className="text-2xl font-montserrat font-bold text-white mb-2">
              Submission Error
            </DialogTitle>
            <DialogDescription className="text-white/80 font-inter">
              We encountered a technical issue sending your request.
            </DialogDescription>
          </div>
          <div className="p-8 space-y-6">
            <p className="text-slate-600 text-center leading-relaxed font-inter">
              Our servers are currently experiencing high volume. Please try again in 5 minutes
              or contact our 24/7 concierge directly at <b>020 3576 1617</b>.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setShowErrorModal(false)}
                className="py-4 rounded-2xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => (window.location.href = "tel:+442035761617")}
                className="py-4 rounded-2xl bg-red-800 text-white font-bold hover:bg-red-900 transition-all shadow-lg"
              >
                Call Now
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
