import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const INPUT_BASE =
  "w-full px-4 py-3 border border-slate-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-gold/40";

const SERVICE_TYPES = [
  "Airport Transfers",
  "Corporate travel",
  "Special events",
  "City Tours",
  "Private Jet Chauffeur",
  "London Cruise Transfer",
];

const CONTACT_SCHEMA = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Invalid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof CONTACT_SCHEMA>;

type Country = {
  name: string;
  code: string;
  iso: string;
};

type RestCountry = {
  name: {
    common: string;
  };
  idd: {
    root?: string;
    suffixes?: string[];
  };
  cca2: string;
};

const FALLBACK_COUNTRIES: Country[] = [
  { name: "United Kingdom", code: "+44", iso: "gb" },
  { name: "United States", code: "+1", iso: "us" },
  { name: "India", code: "+91", iso: "in" },
];

const formatCountries = (countries: RestCountry[]): Country[] =>
  countries
    .map((country) => ({
      name: country.name.common,
      code: `${country.idd.root ?? ""}${country.idd.suffixes?.[0] ?? ""}`,
      iso: country.cca2.toLowerCase(),
    }))
    .filter((country) => country.code && country.code !== "+")
    .sort((first, second) => first.name.localeCompare(second.name));

export const ContactMessageSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>(FALLBACK_COUNTRIES[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);
  const [newsletterOptIn, setNewsletterOptIn] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(CONTACT_SCHEMA),
    defaultValues: {
      serviceType: "",
    },
  });

  const selectedServiceType = watch("serviceType");
  const normalizedCountrySearch = countrySearch.trim().toLowerCase();
  const filteredCountries = countries.filter(
    (country) =>
      !normalizedCountrySearch ||
      country.name.toLowerCase().includes(normalizedCountrySearch) ||
      country.code.includes(normalizedCountrySearch),
  );

  useEffect(() => {
    const abortController = new AbortController();

    const loadCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,idd,cca2",
          { signal: abortController.signal },
        );
        if (!response.ok) {
          throw new Error(`Country request failed with status ${response.status}`);
        }

        const data: RestCountry[] = await response.json();
        const formattedCountries = formatCountries(data);
        const unitedKingdom = formattedCountries.find((country) => country.iso === "gb");

        setCountries(formattedCountries);
        setSelectedCountry(unitedKingdom ?? FALLBACK_COUNTRIES[0]);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        console.error("Error fetching countries:", error);
        setCountries(FALLBACK_COUNTRIES);
        setSelectedCountry(FALLBACK_COUNTRIES[0]);
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoadingCountries(false);
        }
      }
    };

    void loadCountries();
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    const closeCountryDropdown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
        setCountrySearch("");
      }
    };

    if (isCountryDropdownOpen) {
      document.addEventListener("mousedown", closeCountryDropdown);
    }

    return () => document.removeEventListener("mousedown", closeCountryDropdown);
  }, [isCountryDropdownOpen]);

  const submitMessage = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_sinng3w",
        "template_s10flct",
        {
          name: data.name,
          phone: `${selectedCountry.code} ${data.phone}`,
          email: data.email,
          subject: data.subject,
          service: data.serviceType,
          message: data.message,
        },
        "f2mEVklY9RlV91XcR",
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
    <>
      <div id="contact-form">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_50px_120px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="mb-8 space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Send us a message</p>
            <h2 className="font-montserrat text-3xl font-semibold text-slate-900">
              Share your journey details
            </h2>
            <p className="text-slate-600">
              A concierge specialist will reply within two hours during business hours.
            </p>
          </div>

          <form onSubmit={handleSubmit(submitMessage)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block font-inter font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  {...register("name")}
                  className={cn(INPUT_BASE, errors.name && "border-red-500")}
                  placeholder="Amelia Carter"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>

              <div className="relative">
                <label className="mb-1 block font-inter font-semibold text-slate-700">Phone</label>
                <div className="relative flex">
                  <div ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen((isOpen) => !isOpen)}
                      disabled={isLoadingCountries}
                      className="flex h-full min-w-[85px] items-center justify-center gap-1.5 whitespace-nowrap rounded-l-2xl border border-r-0 border-slate-200 bg-slate-50 px-2.5 transition-colors hover:bg-slate-100 disabled:opacity-50"
                    >
                      {isLoadingCountries ? (
                        <span className="text-xs text-slate-500">Loading...</span>
                      ) : (
                        <>
                          <img
                            src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
                            alt={selectedCountry.name}
                            className="h-auto w-6 rounded-sm shadow-sm"
                          />
                          <span className="text-sm font-bold text-slate-700">{selectedCountry.code}</span>
                        </>
                      )}
                    </button>

                    {isCountryDropdownOpen && (
                      <div className="absolute left-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                        <div className="border-b border-slate-200 bg-slate-50 p-3">
                          <input
                            type="text"
                            value={countrySearch}
                            onChange={(event) => setCountrySearch(event.target.value)}
                            placeholder="Search country or code..."
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                            autoFocus
                          />
                        </div>
                        <div className="max-h-64 overflow-y-auto py-2">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <button
                                key={`${country.name}-${country.code}`}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setIsCountryDropdownOpen(false);
                                  setCountrySearch("");
                                }}
                                className="flex w-full items-center gap-4 px-4 py-3 text-left transition-colors hover:bg-slate-50"
                              >
                                <img
                                  src={`https://flagcdn.com/w40/${country.iso}.png`}
                                  alt={country.name}
                                  className="h-auto w-6 rounded-sm shadow-sm"
                                />
                                <span className="flex-1 text-sm font-medium text-slate-700">
                                  {country.name}
                                </span>
                                <span className="text-xs font-semibold text-slate-400">
                                  {country.code}
                                </span>
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
                    className={cn(INPUT_BASE, "rounded-l-none", errors.phone && "border-red-500")}
                    placeholder="7400 123456"
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block font-inter font-semibold text-slate-700">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className={cn(INPUT_BASE, errors.email && "border-red-500")}
                  placeholder="you@email.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <label className="mb-1 block font-inter font-semibold text-slate-700">Subject</label>
                <input
                  type="text"
                  {...register("subject")}
                  className={cn(INPUT_BASE, errors.subject && "border-red-500")}
                  placeholder="Airport transfer, corporate account..."
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="mb-4 block font-inter text-lg font-semibold text-slate-800">
                Service Type
              </label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICE_TYPES.map((serviceType) => (
                  <label
                    key={serviceType}
                    className={cn(
                      "group relative flex min-h-[80px] cursor-pointer items-center rounded-[24px] border px-6 py-6 text-[15px] font-semibold shadow-sm transition-all",
                      selectedServiceType === serviceType
                        ? "border-[#487307] bg-[#487307]/5 text-[#1a2e03] shadow-[0_10px_25px_rgba(72,115,7,0.12)]"
                        : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50",
                    )}
                  >
                    <input
                      type="radio"
                      value={serviceType}
                      checked={selectedServiceType === serviceType}
                      onChange={(event) =>
                        setValue("serviceType", event.target.value, { shouldValidate: true })
                      }
                      className="sr-only"
                    />
                    <span className="pr-4 leading-snug">{serviceType}</span>
                    <span
                      className={cn(
                        "absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all",
                        selectedServiceType === serviceType
                          ? "border-[#487307] bg-[#487307]"
                          : "border-slate-200 bg-white group-hover:border-slate-300",
                      )}
                    >
                      {selectedServiceType === serviceType && (
                        <span className="h-2 w-2 rounded-full bg-white" />
                      )}
                    </span>
                  </label>
                ))}
              </div>
              {errors.serviceType && (
                <p className="ml-1 mt-2 text-xs text-red-500">{errors.serviceType.message}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block font-inter font-semibold text-slate-700">Message</label>
              <textarea
                rows={5}
                {...register("message")}
                className={cn(INPUT_BASE, "resize-none", errors.message && "border-red-500")}
                placeholder="Tell us about your itinerary, passenger count, or bespoke requests..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            <label className="flex items-start gap-3 text-sm text-slate-600">
              <input
                type="checkbox"
                name="newsletterOptIn"
                checked={newsletterOptIn}
                onChange={() => setNewsletterOptIn((isEnabled) => !isEnabled)}
                className="mt-1 rounded border-slate-300 text-gold focus:ring-gold"
              />
              I'd like to receive exclusive Quickoo offers and journey inspiration via email.
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="contact-message-submit flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-montserrat text-lg font-semibold transition disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Processing your booking…
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

      </div>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="overflow-hidden rounded-[32px] border-none bg-white p-0 shadow-2xl sm:max-w-md [&>button]:text-white [&>button]:opacity-100 [&>button]:transition-all [&>button]:hover:bg-white/10">
          <div className="flex flex-col items-center bg-gradient-to-br from-[#1a2e03] to-[#487307] p-8 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
              <CheckCircle2 className="h-10 w-10 text-[#8fe00f]" />
            </div>
            <DialogTitle className="mb-2 font-montserrat text-2xl font-bold text-white">
              Message Received
            </DialogTitle>
            <DialogDescription className="font-inter text-white/80">
              Your inquiry has been sent to our flagship concierge desk.
            </DialogDescription>
          </div>
          <div className="space-y-6 p-8">
            <p className="text-center font-inter leading-relaxed text-slate-600">
              An elite chauffeur coordinator will review your details and respond within{" "}
              <b>two hours</b>.
            </p>
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="w-full rounded-2xl bg-[#487307] py-4 font-bold text-white transition-all hover:bg-[#1a2e03]"
            >
              Back to Journey Planning
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
        <DialogContent className="overflow-hidden rounded-[32px] border-none bg-white p-0 shadow-2xl sm:max-w-md [&>button]:text-white [&>button]:opacity-100 [&>button]:transition-all [&>button]:hover:bg-white/10">
          <div className="flex flex-col items-center bg-gradient-to-br from-red-900 to-red-800 p-8 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
              <AlertCircle className="h-10 w-10 text-red-400" />
            </div>
            <DialogTitle className="mb-2 font-montserrat text-2xl font-bold text-white">
              Submission Error
            </DialogTitle>
            <DialogDescription className="font-inter text-white/80">
              We encountered a technical issue sending your request.
            </DialogDescription>
          </div>
          <div className="space-y-6 p-8">
            <p className="text-center font-inter leading-relaxed text-slate-600">
              Please try again shortly or contact our 24/7 concierge directly at{" "}
              <b>020 3576 1617</b>.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setShowErrorModal(false)}
                className="rounded-2xl border border-slate-200 py-4 font-bold text-slate-600 transition-all hover:bg-slate-50"
              >
                Close
              </button>
              <a
                href="tel:+442035761617"
                className="rounded-2xl bg-red-800 py-4 text-center font-bold text-white shadow-lg transition-all hover:bg-red-900"
              >
                Call Now
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
