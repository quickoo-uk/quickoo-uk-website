import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

import { sendContactMessage } from "@/lib/contactApi";
import { trackAdsConversion, trackAdsEvent } from "@/lib/adsConversion";
import { cn } from "@/lib/utils";

const INQUIRY_SCHEMA = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(5, "Please enter a valid phone number."),
  serviceType: z.string().min(1, "Please select a service."),
  message: z.string().trim().min(10, "Please add a few details about your journey."),
  newsletterOptIn: z.boolean(),
});

const SERVICE_TYPES = [
  "Airport transfer",
  "Corporate travel",
  "Hourly chauffeur hire",
  "Event or special occasion",
  "Other",
];

const INPUT_CLASS =
  "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-[#487307] focus:ring-2 focus:ring-[#487307]/20";

type InquiryFormData = z.infer<typeof INQUIRY_SCHEMA>;

export const LandingInquiryForm = () => {
  const navigate = useNavigate();
  const [submissionError, setSubmissionError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(INQUIRY_SCHEMA),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
      newsletterOptIn: false,
    },
  });

  const submitInquiry = async (data: InquiryFormData) => {
    setSubmissionError("");

    try {
      await sendContactMessage({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: `Google Ads inquiry: ${data.serviceType}`,
        serviceType: data.serviceType,
        message: data.message,
        newsletterOptIn: data.newsletterOptIn,
      });
      trackAdsEvent("lp_inquiry_submit");
      trackAdsConversion();
      navigate("/lp/chauffeur/thank-you");
    } catch (error) {
      console.error("Unable to send landing page inquiry:", error);
      setSubmissionError("We could not send your inquiry. Please try again or call 020 3576 1617.");
    }
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-6">
      <div className="mb-5">
        <h2 className="font-montserrat text-xl font-bold text-[#0a1a02] sm:text-2xl">
          Tell us about your journey
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
          Send your details and our concierge team will contact you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit(submitInquiry)} className="space-y-3.5" noValidate>
        <div className="grid gap-3.5 sm:grid-cols-2">
          <FormField label="Full name" error={errors.name?.message}>
            <input
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              className={cn(INPUT_CLASS, errors.name && "border-red-500")}
              {...register("name")}
            />
          </FormField>

          <FormField label="Phone number" error={errors.phone?.message}>
            <input
              type="tel"
              autoComplete="tel"
              placeholder="+44 7400 123456"
              className={cn(INPUT_CLASS, errors.phone && "border-red-500")}
              {...register("phone")}
            />
          </FormField>
        </div>

        <FormField label="Email address" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={cn(INPUT_CLASS, errors.email && "border-red-500")}
            {...register("email")}
          />
        </FormField>

        <FormField label="Service required" error={errors.serviceType?.message}>
          <select
            className={cn(INPUT_CLASS, errors.serviceType && "border-red-500")}
            {...register("serviceType")}
          >
            <option value="">Select a service</option>
            {SERVICE_TYPES.map((serviceType) => (
              <option key={serviceType} value={serviceType}>
                {serviceType}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Journey details" error={errors.message?.message}>
          <textarea
            rows={3}
            placeholder="Pickup, destination, date, time, passengers and any special requests"
            className={cn(INPUT_CLASS, "resize-none", errors.message && "border-red-500")}
            {...register("message")}
          />
        </FormField>

        <label className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#487307] focus:ring-[#487307]"
            {...register("newsletterOptIn")}
          />
          I would like to receive Quickoo offers and journey inspiration by email.
        </label>

        {submissionError && (
          <div
            role="alert"
            className="flex items-start gap-2 rounded-xl bg-red-50 px-3.5 py-3 text-sm text-red-800"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <span>{submissionError}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#487307] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#3a5d06] focus:outline-none focus:ring-2 focus:ring-[#487307] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending inquiry…
            </>
          ) : (
            <>
              Send inquiry
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

type FormFieldProps = {
  children: React.ReactNode;
  label: string;
  error?: string;
};

const FormField = ({ children, label, error }: FormFieldProps) => (
  <label className="block">
    <span className="mb-1.5 block text-xs font-semibold text-slate-700">{label}</span>
    {children}
    {error && <span className="mt-1 block text-xs text-red-700">{error}</span>}
  </label>
);
