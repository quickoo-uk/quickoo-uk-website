import { FileText, Scale, AlertCircle, CheckCircle, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
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

const keyTerms = [
  {
    icon: CheckCircle,
    title: "Booking Confirmation",
    description: "All bookings are confirmed upon payment. You will receive a confirmation email with journey details.",
  },
  {
    icon: Clock,
    title: "Cancellation Policy",
    description: "Cancel 24+ hours before pickup for a full refund. Cancellations within 24 hours are subject to fees.",
  },
  {
    icon: ShieldCheck,
    title: "Service Guarantee",
    description: "We guarantee punctual, professional service. If we fail to meet our standards, we'll make it right.",
  },
  {
    icon: AlertCircle,
    title: "Liability",
    description: "Quickoo maintains comprehensive insurance. Our liability is limited to the value of the journey.",
  },
];

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing and using Quickoo's services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.",
      "These terms apply to all bookings, whether made through our website, mobile app, or concierge service.",
      "We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance.",
    ],
  },
  {
    title: "2. Booking and Payment",
    content: [
      "All bookings require payment at the time of reservation unless prior arrangements have been made for corporate accounts.",
      "Prices are quoted in GBP and include applicable taxes. Additional charges may apply for waiting time, extra stops, or route deviations.",
      "We accept major credit cards, debit cards, and approved corporate payment methods.",
      "Booking confirmations will be sent via email and SMS with journey details and chauffeur contact information.",
    ],
  },
  {
    title: "3. Cancellation and Refunds",
    content: [
      "Cancellations made 24 hours or more before the scheduled pickup time will receive a full refund.",
      "Cancellations made between 12-24 hours before pickup will incur a 50% cancellation fee.",
      "Cancellations made less than 12 hours before pickup or no-shows will not be eligible for a refund.",
      "Refunds will be processed to the original payment method within 5-10 business days.",
      "Corporate accounts may have different cancellation terms as specified in their service agreement.",
    ],
  },
  {
    title: "4. Service Standards",
    content: [
      "We strive to provide punctual, professional service. However, delays may occur due to traffic, weather, or unforeseen circumstances.",
      "Our chauffeurs are professionally licensed and insured. All vehicles are regularly maintained and inspected.",
      "Passengers are responsible for their conduct. We reserve the right to refuse service or terminate a journey if behavior is inappropriate.",
      "Smoking is prohibited in all vehicles. Consumption of alcohol is permitted only in vehicles equipped for such service.",
    ],
  },
  {
    title: "5. Passenger Responsibilities",
    content: [
      "Passengers must provide accurate pickup and destination information at the time of booking.",
      "It is the passenger's responsibility to be ready at the scheduled pickup time. Waiting time charges apply after the grace period.",
      "Passengers are responsible for any damage to vehicles caused by negligence or misconduct.",
      "Children must be properly secured in appropriate child seats, which we can provide upon request.",
    ],
  },
  {
    title: "6. Liability and Insurance",
    content: [
      "Quickoo maintains comprehensive commercial vehicle insurance as required by UK law.",
      "Our liability is limited to the value of the journey booked. We are not liable for indirect or consequential damages.",
      "Passengers are advised to maintain their own travel insurance for personal belongings and trip cancellation coverage.",
      "We are not responsible for delays caused by factors beyond our control, including traffic, weather, or flight delays.",
    ],
  },
  {
    title: "7. Data Protection",
    content: [
      "We collect and process personal data in accordance with our Privacy Policy and GDPR requirements.",
      "By using our services, you consent to the collection and use of your information as described in our Privacy Policy.",
      "We may use your contact information to send booking confirmations, updates, and service-related communications.",
      "You have the right to access, modify, or delete your personal data at any time.",
    ],
  },
  {
    title: "8. Intellectual Property",
    content: [
      "All content on the Quickoo website and mobile app, including logos, text, and images, is protected by copyright.",
      "You may not reproduce, distribute, or create derivative works from our content without written permission.",
      "The Quickoo name and logo are trademarks and may not be used without authorization.",
    ],
  },
  {
    title: "9. Dispute Resolution",
    content: [
      "If you have a complaint about our service, please contact us at care@quickoo.co.uk within 7 days of your journey.",
      "We will investigate all complaints and respond within 14 business days.",
      "If we cannot resolve a dispute, it may be referred to mediation or arbitration in accordance with UK law.",
      "These terms are governed by English law and subject to the exclusive jurisdiction of English courts.",
    ],
  },
  {
    title: "10. Force Majeure",
    content: [
      "We are not liable for failure to perform our obligations due to circumstances beyond our reasonable control.",
      "Such circumstances include natural disasters, pandemics, government actions, strikes, or major traffic incidents.",
      "In such cases, we will make reasonable efforts to provide alternative arrangements or issue appropriate refunds.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-gradient-to-b from-[#f9fafc] via-white to-[#fdf7f0] text-slate-900 overflow-hidden">
      <motion.section
        className="relative overflow-hidden min-h-[70vh] flex items-center bg-gradient-to-br from-white via-[#f1f5ff] to-[#fdf2e9]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
          src="/legal/terms-conditions-hero.jpg"
          alt="Legal terms and conditions"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        <div className="absolute -bottom-20 -right-8 h-72 w-72 bg-gold/30 blur-[140px] opacity-40" />
        <div className="absolute -top-24 -left-10 h-64 w-64 bg-[#8fe00f]/30 blur-[120px] opacity-50" />
        <div className="relative z-10 px-5 sm:px-8 md:px-12 xl:px-24 py-20 w-full">
          <div className="max-w-4xl space-y-8">
            <SectionChip title="Quickoo • Terms & Conditions" icon={Scale} />
            <div className="space-y-6">
              <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
                Clear terms for{" "}
                <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                  transparent service
                </span>
              </h1>
              <p className="text-lg text-slate-600 font-inter max-w-3xl">
                These Terms and Conditions govern your use of Quickoo's chauffeur services. Please read
                them carefully to understand your rights and responsibilities when booking with us.
              </p>

            </div>
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
          <div className="text-center space-y-3">
            <p className="uppercase tracking-[0.4em] text-sm text-slate-500">Key points</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Important terms at a glance
            </h2>
            <p className="text-slate-600 font-inter max-w-2xl mx-auto">
              Here are the essential terms you should know before booking with Quickoo.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {keyTerms.map(({ icon: Icon, title, description }) => (
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
        className="section-spacing bg-[#f4f6fb]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="section-container space-y-12">
          <div className="text-center space-y-3">
            <p className="uppercase tracking-[0.4em] text-sm text-slate-500">Full terms</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Complete terms and conditions
            </h2>
            <p className="text-slate-600 font-inter max-w-2xl mx-auto">
              Please review these terms carefully. By using our services, you agree to be bound by all
              provisions outlined below.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="rounded-full bg-gold/15 p-3 text-gold flex-shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-montserrat font-semibold text-slate-900 mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="text-gold mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-spacing relative overflow-hidden bg-gradient-to-br from-white via-[#f5f5ff] to-[#fff8ef]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="pointer-events-none absolute inset-x-10 -top-24 h-48 rounded-full bg-gold/20 blur-[120px]" />
        <div className="section-container space-y-10">
          <div className="text-center space-y-3">
            <p className="uppercase tracking-[0.4em] text-sm text-slate-500">Cancellation details</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Refund policy
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-green-100 p-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <p className="font-semibold text-slate-900">24+ Hours</p>
              </div>
              <p className="text-sm text-slate-600 mb-3">Full refund</p>
              <p className="text-xs text-slate-500">
                Cancel at least 24 hours before your scheduled pickup time to receive a complete refund.
              </p>
            </motion.div>
            <motion.div
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-yellow-100 p-2 text-yellow-600">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <p className="font-semibold text-slate-900">12-24 Hours</p>
              </div>
              <p className="text-sm text-slate-600 mb-3">50% refund</p>
              <p className="text-xs text-slate-500">
                Cancellations made between 12-24 hours before pickup will receive a 50% refund.
              </p>
            </motion.div>
            <motion.div
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-red-100 p-2 text-red-600">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <p className="font-semibold text-slate-900">Less than 12 Hours</p>
              </div>
              <p className="text-sm text-slate-600 mb-3">No refund</p>
              <p className="text-xs text-slate-500">
                Cancellations made less than 12 hours before pickup or no-shows are not eligible for refunds.
              </p>
            </motion.div>
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
        <div className="section-container space-y-10">
          <div className="text-center space-y-3">
            <p className="uppercase tracking-[0.4em] text-sm text-slate-500">Service guarantee</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Our commitment to you
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="h-6 w-6 text-gold" />
                <p className="text-xl font-semibold text-slate-900">Quality Assurance</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 list-disc list-inside">
                <li>All chauffeurs are professionally licensed and background-checked</li>
                <li>Vehicles undergo regular maintenance and safety inspections</li>
                <li>Comprehensive insurance coverage for all journeys</li>
                <li>24/7 support and monitoring for every booking</li>
                <li>Real-time tracking and journey updates</li>
              </ul>
            </motion.div>
            <motion.div
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-6 w-6 text-gold" />
                <p className="text-xl font-semibold text-slate-900">Customer Satisfaction</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 list-disc list-inside">
                <li>If we fail to meet our service standards, we'll make it right</li>
                <li>Dedicated complaint resolution process</li>
                <li>Regular feedback collection and service improvements</li>
                <li>Transparent pricing with no hidden fees</li>
                <li>Flexible booking options to suit your needs</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-spacing bg-gradient-to-br from-white via-[#f4f6ff] to-[#fff6ee]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="section-container space-y-8">
          <div className="text-center space-y-3">
            <p className="uppercase tracking-[0.4em] text-sm text-slate-500">Legal information</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Governing law and jurisdiction
            </h2>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] max-w-4xl mx-auto">
            <div className="space-y-4 text-slate-600">
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of
                England and Wales. Any disputes arising from these terms or our services will be subject to
                the exclusive jurisdiction of the English courts.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-2">
                    Jurisdiction
                  </p>
                  <p className="font-semibold text-slate-900">England & Wales</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-2">Last Updated</p>
                  <p className="font-semibold text-slate-900">January 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-spacing bg-gradient-to-br from-gold/10 via-[#fff7ec] to-white text-dark"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="section-container grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.4em] text-sm text-dark/70">Need clarification?</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold">
              Questions about our terms?
            </h2>
            <p className="text-gray-700 font-inter">
              If you have any questions about these Terms and Conditions or need clarification on any
              provision, our team is here to help.
            </p>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-dark/10 bg-white/80 px-5 py-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Legal Inquiries</p>
                <p className="text-lg font-semibold text-dark">legal@quickoo.co.uk</p>
              </div>
              <div className="rounded-2xl border border-dark/10 bg-white/80 px-5 py-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">General Support</p>
                <p className="text-lg font-semibold text-dark">care@quickoo.co.uk</p>
              </div>
              <div className="rounded-2xl border border-dark/10 bg-white/80 px-5 py-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Response Time</p>
                <p className="text-lg font-semibold text-dark">Within 2 business days</p>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] border border-dark/5 bg-white/60 p-8 shadow-2xl space-y-6">
            <h3 className="text-2xl font-montserrat font-semibold text-dark">
              Fair and transparent
            </h3>
            <p className="text-gray-600 font-inter">
              We believe in clear, fair terms that protect both our customers and our business. These terms
              are designed to ensure a smooth, reliable service experience while setting appropriate
              expectations for all parties.
            </p>
            <div className="flex gap-4 flex-wrap">
              {["UK Law Governed", "Fair Cancellation", "Full Insurance"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-dark/15 bg-dark/5 px-4 py-2 text-sm font-semibold text-dark"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

