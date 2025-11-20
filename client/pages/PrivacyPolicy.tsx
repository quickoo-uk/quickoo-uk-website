import { ShieldCheck, Lock, Eye, FileText, Users, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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

const privacyPrinciples = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "All personal information is encrypted in transit and at rest using industry-standard protocols.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Storage",
    description: "Your data is stored in secure, compliant data centers with regular security audits.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We clearly communicate how your data is collected, used, and protected.",
  },
  {
    icon: Users,
    title: "Your Control",
    description: "You have the right to access, modify, or delete your personal information at any time.",
  },
];

const dataCategories = [
  {
    title: "Personal Information",
    items: [
      "Name, email address, phone number",
      "Billing and payment information",
      "Travel preferences and special requests",
      "Account credentials and profile data",
    ],
  },
  {
    title: "Usage Data",
    items: [
      "Booking history and journey details",
      "Device information and IP addresses",
      "App usage patterns and preferences",
      "Location data (with your consent)",
    ],
  },
  {
    title: "Communication Records",
    items: [
      "Customer service interactions",
      "Feedback and survey responses",
      "Marketing communication preferences",
      "Support ticket history",
    ],
  },
];

const rights = [
  {
    title: "Access Your Data",
    description: "Request a copy of all personal data we hold about you.",
  },
  {
    title: "Rectification",
    description: "Correct any inaccurate or incomplete information.",
  },
  {
    title: "Erasure",
    description: "Request deletion of your personal data under certain circumstances.",
  },
  {
    title: "Data Portability",
    description: "Receive your data in a structured, machine-readable format.",
  },
  {
    title: "Object to Processing",
    description: "Opt out of certain data processing activities, including marketing.",
  },
  {
    title: "Restrict Processing",
    description: "Limit how we use your data while we address your concerns.",
  },
];

export default function PrivacyPolicyPage() {
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
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
          alt="Privacy and security"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        <div className="absolute -bottom-20 -right-8 h-72 w-72 bg-gold/30 blur-[140px] opacity-40" />
        <div className="absolute -top-24 -left-10 h-64 w-64 bg-[#90c4ff]/30 blur-[120px] opacity-50" />
        <div className="relative z-10 px-5 sm:px-8 md:px-12 xl:px-24 py-20 w-full">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-6 py-2 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-[#7b5dff]" />
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-slate-600 font-semibold">
                Quickoo • Privacy & Security
              </p>
            </div>
            <div className="space-y-6">
              <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
                Your privacy is our{" "}
                <span className="bg-gradient-to-r from-[#1a1431] via-[#40206c] to-[#806af1] bg-clip-text text-transparent">
                  commitment
                </span>
              </h1>
              <p className="text-lg text-slate-600 font-inter max-w-3xl">
                At Quickoo, we are committed to protecting your personal information and ensuring transparency
                about how we collect, use, and safeguard your data. This Privacy Policy explains our practices
                and your rights.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 text-center backdrop-blur">
                  <p className="text-2xl sm:text-3xl font-montserrat font-semibold text-gold">GDPR</p>
                  <p className="text-xs sm:text-sm text-slate-500">Compliant</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 text-center backdrop-blur">
                  <p className="text-2xl sm:text-3xl font-montserrat font-semibold text-gold">ISO</p>
                  <p className="text-xs sm:text-sm text-slate-500">27001 Certified</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 text-center backdrop-blur">
                  <p className="text-2xl sm:text-3xl font-montserrat font-semibold text-gold">24/7</p>
                  <p className="text-xs sm:text-sm text-slate-500">Security Monitoring</p>
                </div>
              </div>
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
            <p className="uppercase tracking-[0.4em] text-sm text-slate-500">Our commitment</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Privacy principles we uphold
            </h2>
            <p className="text-slate-600 font-inter max-w-2xl mx-auto">
              We follow industry best practices and regulatory requirements to ensure your data is handled
              with the utmost care and security.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {privacyPrinciples.map(({ icon: Icon, title, description }) => (
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
            <p className="uppercase tracking-[0.4em] text-sm text-slate-500">Information we collect</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Data categories
            </h2>
            <p className="text-slate-600 font-inter max-w-2xl mx-auto">
              We collect only the information necessary to provide you with exceptional service and improve
              your experience.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {dataCategories.map((category) => (
              <motion.div
                key={category.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-gold" />
                  <p className="text-xl font-semibold text-slate-900">{category.title}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 list-disc list-inside">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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
        <div className="section-container space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div className="space-y-7" variants={fadeInUp}>
              <p className="uppercase tracking-[0.4em] text-sm text-slate-500">How we use your data</p>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                Purpose and processing
              </h2>
              <p className="text-slate-600 font-inter">
                We use your personal information solely for the purposes outlined below, always with your
                consent or as necessary to fulfill our contractual obligations.
              </p>
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_30px_70px_rgba(15,23,42,0.08)] space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/15 p-2 text-gold mt-1">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Service Delivery</p>
                      <p className="text-sm text-slate-600">
                        Processing bookings, managing journeys, and providing concierge support.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/15 p-2 text-gold mt-1">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Payment Processing</p>
                      <p className="text-sm text-slate-600">
                        Secure handling of transactions and billing information.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/15 p-2 text-gold mt-1">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Communication</p>
                      <p className="text-sm text-slate-600">
                        Sending booking confirmations, updates, and responding to inquiries.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-gold/15 p-2 text-gold mt-1">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Service Improvement</p>
                      <p className="text-sm text-slate-600">
                        Analyzing usage patterns to enhance our platform and services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_50px_120px_rgba(15,23,42,0.08)]"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-6 w-6 text-gold" />
                <p className="text-lg font-semibold text-slate-900">Data Sharing</p>
              </div>
              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  We do not sell your personal information. We may share data with trusted partners only
                  when necessary for service delivery:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Chauffeur partners for journey fulfillment</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Technology providers for platform operations</li>
                  <li>Legal compliance when required by law</li>
                </ul>
                <div className="rounded-2xl bg-slate-50 p-4 mt-4">
                  <p className="font-semibold text-slate-900 mb-2">Our Promise</p>
                  <p className="text-xs">
                    All partners are bound by strict confidentiality agreements and data protection
                    requirements.
                  </p>
                </div>
              </div>
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
        <div className="section-container space-y-12">
          <div className="text-center space-y-3">
            <p className="uppercase tracking-[0.4em] text-sm text-gold">Your rights</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Control your personal data
            </h2>
            <p className="text-slate-600 font-inter max-w-2xl mx-auto">
              Under GDPR and other data protection laws, you have comprehensive rights regarding your
              personal information.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rights.map((right) => (
              <motion.div
                key={right.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="h-5 w-5 text-gold" />
                  <p className="font-semibold text-slate-900">{right.title}</p>
                </div>
                <p className="text-sm text-slate-600">{right.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-gold/10 via-[#fff7ec] to-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-gold/20 p-3 text-gold">
                <Lock className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <p className="text-lg font-semibold text-slate-900">Exercising Your Rights</p>
                <p className="text-slate-600">
                  To exercise any of these rights, please contact our Data Protection Officer at{" "}
                  <a href="mailto:privacy@quickoo.co.uk" className="text-gold font-semibold hover:underline">
                    privacy@quickoo.co.uk
                  </a>
                  . We will respond to your request within 30 days.
                </p>
              </div>
            </div>
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
        <div className="section-container space-y-10">
          <div className="text-center space-y-3">
            <p className="uppercase tracking-[0.4em] text-sm text-slate-500">Security measures</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              How we protect your data
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-6 w-6 text-gold" />
                <p className="text-xl font-semibold text-slate-900">Technical Safeguards</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 list-disc list-inside">
                <li>End-to-end encryption for all data transmissions</li>
                <li>Secure socket layer (SSL) certificates</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication for staff access</li>
                <li>Automated threat detection and monitoring</li>
              </ul>
            </motion.div>
            <motion.div
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="h-6 w-6 text-gold" />
                <p className="text-xl font-semibold text-slate-900">Organizational Measures</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 list-disc list-inside">
                <li>Staff training on data protection and privacy</li>
                <li>Strict access controls and role-based permissions</li>
                <li>Regular compliance reviews and assessments</li>
                <li>Incident response procedures and protocols</li>
                <li>Data retention and deletion policies</li>
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
            <p className="uppercase tracking-[0.4em] text-sm text-slate-500">Policy updates</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
              Changes to this policy
            </h2>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] max-w-4xl mx-auto">
            <div className="space-y-4 text-slate-600">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or
                legal requirements. We will notify you of any material changes by:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Posting the updated policy on our website</li>
                <li>Sending an email notification to registered users</li>
                <li>Displaying a prominent notice in our app</li>
              </ul>
              <p className="mt-4">
                <strong className="text-slate-900">Last Updated:</strong> January 2025
              </p>
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
            <p className="uppercase tracking-[0.4em] text-sm text-dark/70">Contact us</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold">
              Questions about privacy?
            </h2>
            <p className="text-gray-700 font-inter">
              If you have questions, concerns, or wish to exercise your data protection rights, our Data
              Protection Officer is here to help.
            </p>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-dark/10 bg-white/80 px-5 py-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Data Protection Officer</p>
                <p className="text-lg font-semibold text-dark">privacy@quickoo.co.uk</p>
              </div>
              <div className="rounded-2xl border border-dark/10 bg-white/80 px-5 py-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">General Inquiries</p>
                <p className="text-lg font-semibold text-dark">care@quickoo.co.uk</p>
              </div>
              <div className="rounded-2xl border border-dark/10 bg-white/80 px-5 py-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Response Time</p>
                <p className="text-lg font-semibold text-dark">Within 30 days</p>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] border border-dark/5 bg-white/60 p-8 shadow-2xl space-y-6">
            <h3 className="text-2xl font-montserrat font-semibold text-dark">
              Your privacy matters
            </h3>
            <p className="text-gray-600 font-inter">
              We are committed to maintaining the highest standards of data protection and privacy. Your
              trust is essential to us, and we work continuously to ensure your information is secure and
              handled responsibly.
            </p>
            <div className="flex gap-4 flex-wrap">
              {["GDPR Compliant", "ISO 27001", "SOC 2 Type II"].map((badge) => (
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

