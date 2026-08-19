import { ShieldCheck, Lock, Eye, FileText, Users, Globe, Sparkles, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SectionChip } from "@/components/SectionChip";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const policySections = [
  {
    title: "1. Introduction & Data Controller Information",
    content: [
      "Quickoo PVT LTD (\"we,\" \"our,\" \"us,\" or \"the Company\") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, process, disclose, and safeguard your personal information when you use our premium chauffeur and car hire services operating throughout the United Kingdom.",
      "We comply with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and all applicable UK data protection laws. This policy should be read alongside our Terms and Conditions.",
      "Data Controller: Quickoo PVT LTD",
      "Registered Office: 450 bath road, Longford, London,Heathrow, UB70EB",
      "Data Protection Officer: privacy@quickoo.co.uk",
      "Phone: 020 3576 1617"
    ]
  },
  {
    title: "2. Information We Collect",
    content: [
      "2.1 Personal Information You Provide",
      "We collect personal information that you voluntarily provide when booking our services or communicating with us:",
      "• Identity Data: Full name, title, date of birth (for verification purposes)",
      "• Contact Data: Email address, telephone numbers, postal address",
      "• Booking Data: Pickup/drop-off locations, journey dates and times, passenger numbers, special requirements",
      "• Payment Data: Credit/debit card information, billing address, payment history",
      "• Account Data: Username, password, communication preferences",
      "• Communication Data: Correspondence, feedback, complaints, customer service interactions",
      "• Special Category Data: Health information (only where necessary for accessibility requirements), with explicit consent",
      "",
      "2.2 Information Collected Automatically",
      "When you interact with our digital services, we automatically collect:",
      "• Technical Data: Location, IP address, device type, browser type and version, operating system",
      "• Usage Data: Pages visited, time spent on website, referring URLs, clickstream data",
      "• Location Data: GPS coordinates (with your consent) for pickup/drop-off accuracy and chauffeur dispatch",
      "• Cookie Data: Information stored through cookies and similar tracking technologies",
      "",
      "2.3 Information from Third Parties",
      "We may receive information from:",
      "• Flight tracking services for airport transfer monitoring",
      "• Payment processors and fraud prevention services",
      "• Credit reference agencies (for corporate account applications)",
      "• Social media platforms (if you use social login features)",
      "• Partner companies and referral sources"
    ]
  },
  {
    title: "3. How We Use Your Information",
    content: [
      "We process your personal data for the following purposes:",
      "",
      "3.1 Service Provision (Contract Performance)",
      "• Processing and managing your bookings and reservations",
      "• Coordinating chauffeur dispatch and journey logistics",
      "• Processing payments and managing billing",
      "• Providing customer support and handling inquiries",
      "• Monitoring service quality and chauffeur performance",
      "",
      "3.2 Business Operations (Legitimate Interests)",
      "• Improving our services, vehicles, and customer experience",
      "• Conducting market research and customer satisfaction surveys",
      "• Preventing fraud and ensuring payment security",
      "• Maintaining business records and accounting",
      "• Training staff and monitoring service quality",
      "• Resolving disputes and legal claims",
      "",
      "3.3 Marketing Communications (Consent)",
      "• Sending promotional offers and service updates (with your consent)",
      "• Personalizing marketing content based on your preferences",
      "• Conducting customer retention activities",
      "• Inviting participation in loyalty programs",
      "",
      "3.4 Legal Compliance (Legal Obligation)",
      "• Complying with licensing and regulatory requirements",
      "• Maintaining records for tax and accounting purposes",
      "• Responding to law enforcement requests",
      "• Ensuring health and safety compliance"
    ]
  },
  {
    title: "4. Legal Basis for Processing",
    content: [
      "We process your personal data on the following legal bases:",
      "• Contract Performance: To fulfill our service agreement and booking terms",
      "• Legitimate Interests: To operate our business efficiently, improve services, and ensure security",
      "• Consent: For marketing communications, location tracking, and optional services",
      "• Legal Obligation: To comply with UK laws, regulations, and licensing requirements",
      "• Vital Interests: To protect health and safety in emergency situations"
    ]
  },
  {
    title: "5. Data Sharing & Third Party Disclosure",
    content: [
      "We may share your personal information with the following categories of recipients:",
      "",
      "5.1 Service Providers",
      "• Chauffeurs: Name, contact details, and journey information necessary for service delivery",
      "• Payment Processors: Stripe, PayPal, and banking partners for secure payment processing",
      "• Technology Providers: Web hosting, cloud storage, email services, and mobile app platforms",
      "• Communication Services: SMS and email delivery platforms",
      "",
      "5.2 Business Partners",
      "• Hotels, airlines, and travel agencies (with your explicit consent)",
      "• Corporate clients for business travel coordination",
      "• Event organizers and wedding planners",
      "• Vehicle maintenance and insurance providers",
      "",
      "5.3 Legal & Regulatory Authorities",
      "• Police and law enforcement agencies when legally required",
      "• Licensing authorities for compliance verification",
      "• Courts and legal representatives in dispute resolution",
      "• Tax authorities and regulatory bodies",
      "",
      "Important: We do not sell, rent, or trade your personal information to third parties for their marketing purposes. All data sharing is governed by strict contractual agreements ensuring appropriate protection."
    ]
  },
  {
    title: "6. Data Security Measures",
    content: [
      "We implement comprehensive technical and organizational security measures:",
      "",
      "6.1 Technical Safeguards",
      "• 256-bit SSL encryption for all data transmission",
      "• AES-256 encryption for data storage",
      "• Secure, PCI DSS-compliant payment processing",
      "• Regular security audits and penetration testing",
      "• Intrusion detection and prevention systems",
      "• Automated backup and disaster recovery procedures",
      "",
      "6.2 Organizational Measures",
      "• Role-based access controls and authentication",
      "• Regular staff training on data protection",
      "• Confidentiality agreements for all employees and contractors",
      "• Incident response and breach notification procedures",
      "• Regular review and update of security policies"
    ]
  },
  {
    title: "7. Data Retention Periods",
    content: [
      "We retain personal data for different periods depending on the purpose:",
      "• Booking Records: 7 years (for accounting and legal compliance)",
      "• Payment Information: Until card expiry or account closure plus 1 year",
      "• Customer Communications: 3 years from last interaction",
      "• Marketing Data: Until consent withdrawn or 3 years of inactivity",
      "• CCTV Footage: 30 days (where applicable in vehicles)",
      "• Website Analytics: 26 months (Google Analytics default)",
      "• Complaint Records: 6 years from resolution",
      "• Insurance Claims: 10 years from claim closure",
      "",
      "Data is securely deleted or anonymized when retention periods expire, unless longer retention is required by law."
    ]
  },
  {
    title: "8. Your Rights Under UK GDPR",
    content: [
      "You have the following rights regarding your personal data:",
      "",
      "8.1 Right of Access",
      "Request a copy of your personal data we hold, including information about processing purposes, data categories, recipients, and retention periods.",
      "",
      "8.2 Right to Rectification",
      "Request correction of inaccurate or incomplete personal data. We will notify third parties of corrections where appropriate.",
      "",
      "8.3 Right to Erasure (\"Right to be Forgotten\")",
      "Request deletion of your personal data when:",
      "• Data is no longer necessary for the original purpose",
      "• You withdraw consent and no other legal basis applies",
      "• Data has been unlawfully processed",
      "• Erasure is required for legal compliance",
      "",
      "8.4 Right to Restriction of Processing",
      "Request limitation of processing when:",
      "• You contest the accuracy of personal data",
      "• Processing is unlawful but you prefer restriction to erasure",
      "• We no longer need the data but you need it for legal claims",
      "• You object to processing pending verification of legitimate grounds",
      "",
      "8.5 Right to Data Portability",
      "Receive your personal data in a structured, commonly used, machine-readable format and transmit it to another controller where technically feasible.",
      "",
      "8.6 Right to Object",
      "Object to processing based on legitimate interests or for direct marketing purposes. We will cease processing unless we can demonstrate compelling legitimate grounds.",
      "",
      "8.7 Rights Related to Automated Decision-Making",
      "Not be subject to decisions based solely on automated processing, including profiling, that produce legal or similarly significant effects.",
      "",
      "8.8 Exercising Your Rights",
      "To exercise any of these rights, contact us at privacy@quickoo.co.uk or write to our Data Protection Officer. We will respond within one month and may request additional information to verify your identity."
    ]
  },
  {
    title: "9. Cookies & Tracking Technologies",
    content: [
      "We use cookies and similar technologies to enhance your experience:",
      "",
      "9.1 Types of Cookies",
      "• Essential Cookies: Necessary for website functionality, booking process, and security",
      "• Performance Cookies: Collect anonymous usage statistics to improve our website",
      "• Functionality Cookies: Remember your preferences and personalize your experience",
      "• Marketing Cookies: Track visits across websites to deliver relevant advertisements",
      "",
      "9.2 Third-Party Cookies",
      "We use cookies from trusted third parties:",
      "• Google Analytics: Website traffic analysis and user behavior insights",
      "• Google Maps: Location services and route optimization",
      "• Payment Processors: Secure payment processing and fraud prevention",
      "• Social Media Platforms: Social sharing and login functionality",
      "",
      "9.3 Managing Cookies",
      "You can control cookies through:",
      "• Browser settings (Help menu provides guidance)",
      "• Our cookie consent banner when first visiting our website",
      "• Third-party opt-out tools (e.g., Google Analytics Opt-out)",
      "• Industry preference centers (e.g., aboutcookies.org)"
    ]
  },
  {
    title: "10. International Data Transfers",
    content: [
      "Some of our service providers are located outside the UK. When transferring data internationally, we ensure adequate protection through:",
      "• Adequacy Decisions: Countries deemed adequate by the UK government",
      "• Standard Contractual Clauses: UK ICO-approved contract terms",
      "• Certification Schemes: Privacy frameworks like Privacy Shield successors",
      "• Explicit Consent: Where other safeguards are not available",
      "",
      "We maintain records of all international transfers and review adequacy determinations regularly."
    ]
  },
  {
    title: "11. Children's Privacy",
    content: [
      "Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal data from children under 16 without parental consent. If we become aware of such collection, we will delete the information immediately and may seek parental verification. Parents and guardians can contact us to review, modify, or delete their child's information."
    ]
  },
  {
    title: "12. Location Data & Mobile App Privacy",
    content: [
      "Our mobile application may collect location data with your permission:",
      "",
      "12.1 Location Data Usage",
      "• Accurate pickup and drop-off location identification",
      "• Real-time chauffeur dispatch and tracking",
      "• Route optimization and traffic avoidance",
      "• Service area verification and pricing",
      "",
      "12.2 Location Settings",
      "• Allow All the Time: Continuous location access for optimal service",
      "• Allow While Using App: Location access only when app is active",
      "• Deny: Manual address entry required, limited functionality",
      "",
      "You can modify location permissions in your device settings at any time. Location data is encrypted and stored securely."
    ]
  },
  {
    title: "13. Marketing Communications",
    content: [
      "We may send you marketing communications if you have opted in or where we have legitimate interest:",
      "",
      "13.1 Types of Communications",
      "• Service updates and new feature announcements",
      "• Promotional offers and seasonal discounts",
      "• Customer satisfaction surveys",
      "• Industry news and travel tips",
      "• Loyalty program benefits",
      "",
      "13.2 Opting Out",
      "You can unsubscribe from marketing communications:",
      "• Click \"unsubscribe\" links in emails",
      "• Reply \"STOP\" to SMS messages",
      "• Contact customer service at 020 3576 1617",
      "• Email preferences@quickoo.co.uk",
      "• Update preferences in your online account"
    ]
  },
  {
    title: "14. Data Breach Notification",
    content: [
      "In the unlikely event of a data breach that poses a risk to your rights and freedoms:",
      "• We will notify the ICO within 72 hours of becoming aware",
      "• We will inform affected individuals without undue delay",
      "• Notifications will include the nature of the breach, likely consequences, and remedial measures",
      "• We maintain detailed incident response procedures and forensic capabilities"
    ]
  },
  {
    title: "15. Privacy by Design",
    content: [
      "We implement privacy by design principles:",
      "• Data Minimization: Collect only necessary personal data",
      "• Purpose Limitation: Use data only for specified, legitimate purposes",
      "• Storage Limitation: Retain data only as long as necessary",
      "• Accuracy: Ensure data is accurate and up-to-date",
      "• Security: Implement appropriate technical and organizational measures",
      "• Accountability: Demonstrate compliance with data protection principles"
    ]
  },
  {
    title: "16. Corporate & Business Customers",
    content: [
      "For corporate clients, additional considerations apply:",
      "• Corporate privacy notices may supplement this policy",
      "• Employee travel data is processed on behalf of the corporate client",
      "• Data Processing Agreements (DPAs) available upon request",
      "• Corporate clients remain responsible for their employees' data rights",
      "• Separate retention periods may apply for corporate account data"
    ]
  },
  {
    title: "17. Updates to This Privacy Policy",
    content: [
      "We may update this Privacy Policy periodically to reflect changes in:",
      "• Legal requirements and regulatory guidance",
      "• Our business practices and service offerings",
      "• Technology and security measures",
      "• Industry best practices",
      "",
      "We will notify you of material changes via email and prominent website notice. The \"Last updated\" date reflects the most recent revision. We encourage you to review this policy regularly."
    ]
  },
  {
    title: "18. Contact Information & Data Protection Officer",
    content: [
      "For privacy-related inquiries, to exercise your rights, or to contact our Data Protection Officer:",
      "",
      "Data Protection Officer",
      "Quickoo PVT LTD",
      "450 bath road, Longford",
      "London, Heathrow, UB70EB",
      "",
      "Email: privacy@quickoo.co.uk",
      "Phone: 020 3576 1617",
      "Response Time: Within 1 month",
      "",
      "Customer Service: support@quickoo.co.uk",
      "Website: www.quickoo.co.uk/privacy"
    ]
  },
  {
    title: "20. Accessibility",
    content: [
      "This Privacy Policy is available in alternative formats for individuals with disabilities. We can provide:",
      "• Large print versions",
      "• Audio recordings",
      "• Translations in other languages",
      "• Easy-read versions",
      "",
      "Contact our customer service team to request alternative formats."
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-[#f9fafc] via-white to-[#fdf7f0] text-slate-900 overflow-hidden">
      <motion.section
        className="relative overflow-hidden min-h-[60vh] flex items-center bg-gradient-to-br from-white via-[#f1f5ff] to-[#fdf2e9]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
          src="/legal/privacy-policy-hero.jpg"
          alt="Privacy and security"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        <div className="relative z-10 px-5 sm:px-8 md:px-12 xl:px-24 py-20 w-full">
          <div className="max-w-4xl space-y-8">
            <SectionChip title="Quickoo • Privacy & Security" icon={ShieldCheck} />
            <div className="space-y-6">
              <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
                Your privacy is our{" "}
                <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
                  commitment
                </span>
              </h1>
              <p className="text-lg text-slate-600 font-inter max-w-3xl">
                At Quickoo, we are committed to protecting your personal information and ensuring transparency
                about how we collect, use, and safeguard your data.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {policySections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100"
          >
            <h2 className="text-2xl font-montserrat font-semibold text-slate-900 mb-6">
              {section.title}
            </h2>
            <div className="space-y-4 text-slate-600 font-inter leading-relaxed">
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className={paragraph.startsWith("•") ? "pl-4" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
