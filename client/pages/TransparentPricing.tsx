import { DollarSign, CheckCircle2, TrendingUp, Shield, Calculator, CreditCard, ArrowRight, Sparkles, FileText, PoundSterlingIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const pricingFeatures = [
    {
        icon: TrendingUp,
        title: "Smart Routing Technology",
        description: "Our AI-powered algorithms calculate the most efficient route beforehand, ensuring you only pay for the optimal distance.",
    },
    {
        icon: Shield,
        title: "Surge Shielding",
        description: "We protect you from unexpected price hikes. The price you see at booking is the price you pay, regardless of traffic or demand.",
    },
    {
        icon: Calculator,
        title: "All-Inclusive Quotes",
        description: "Tolls, airport fees, and waiting time (up to 60 mins at airports) are automatically included in your upfront quote.",
    },
    {
        icon: CreditCard,
        title: "Secure Payment Processing",
        description: "Bank-grade encryption for all transactions with support for major cards and corporate accounts.",
    },
];

const pricingPrinciples = [
    {
        title: "No Hidden Fees",
        description: "Zero booking fees, credit card surcharges, or unexpected add-ons.",
    },
    {
        title: "Fixed Price Guarantee",
        description: "Your fare is locked in the moment you book.",
    },
    {
        title: "Instant Receipts",
        description: "Automated VAT invoices sent immediately after your journey.",
    },
    {
        title: "Corporate Billing",
        description: "Flexible monthly invoicing options for business accounts.",
    },
];

const financialCompliance = [
    {
        title: "FCA Compliant",
        description: "Payment processes aligned with Financial Conduct Authority guidelines.",
        standard: "FCA Standards",
    },
    {
        title: "PCI DSS Level 1",
        description: "Highest level of payment card industry security standards.",
        standard: "PCI DSS Certified",
    },
    {
        title: "HMRC Compliant",
        description: "Full VAT compliance and transparent tax reporting.",
        standard: "VAT Registered",
    },
    {
        title: "Consumer Rights",
        description: "Terms and conditions fully aligned with UK Consumer Rights Act 2015.",
        standard: "UK Law Compliant",
    },
];

const relatedFeatures = [
    {
        title: "Safety First",
        description: "ISO certified safety protocols",
        link: "/why-choose/safety-first",
        icon: "🛡️",
    },
    {
        title: "Tailored Luxury Fleet",
        description: "Premium vehicles for every occasion",
        link: "/why-choose/luxury-fleet",
        icon: "👑",
    },
    {
        title: "Elite Chauffeurs",
        description: "VIP-trained professional drivers",
        link: "/why-choose/elite-chauffeurs",
        icon: "⭐",
    },
];

export default function TransparentPricingPage() {
    return (
        <div className="bg-gradient-to-b from-[#f9fafc] via-white to-[#f1f5ff] text-slate-900 overflow-hidden">
            {/* Hero Section */}
            <motion.section
                className="relative overflow-hidden min-h-[70vh] flex items-center bg-gradient-to-br from-[#f1f5ff] via-white to-[#e8f5e9]"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(72,115,7,0.08),transparent_50%)]" />
                <div className="absolute -bottom-20 -right-8 h-72 w-72 bg-[#487307]/10 blur-[140px]" />
                <div className="absolute -top-24 -left-10 h-64 w-64 bg-[#6aa80b]/10 blur-[120px]" />

                <div className="relative z-10 section-container py-20 w-full">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 rounded-full border border-[#487307]/20 bg-white/80 px-6 py-2 backdrop-blur shadow-sm">
                                <PoundSterlingIcon className="h-4 w-4 text-[#487307]" />
                                <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                                    Transparent Pricing
                                </span>
                            </div>

                            <div className="space-y-6">
                                <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
                                    Honest quotes with{" "}
                                    <span className="bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
                                        no hidden fees
                                    </span>
                                </h1>
                                <p className="text-lg text-slate-600 font-inter">
                                    Experience complete pricing transparency with fixed-rate journeys. Smart routing technology and surge protection guarantee the price you see is always the price you pay.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/book-now">
                                        <button className="luxury-button-gold px-7 py-3 text-base rounded-full">
                                            Get Instant Quote
                                        </button>
                                    </Link>
                                    <Link to="/contact">
                                        <button className="rounded-full border border-slate-300 px-7 py-3 text-base font-semibold text-slate-900 hover:bg-white transition">
                                            Corporate Rates
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#487307]/20 via-[#6aa80b]/10 to-transparent blur-3xl" />
                            <div className="relative rounded-3xl border border-white/60 bg-white/90 p-4 backdrop-blur-lg shadow-2xl overflow-hidden">
                                <img
                                    src="/images/why-choose/transparent-pricing-hero.jpg"
                                    alt="Transparent Pricing - Fixed rates with no hidden fees"
                                    className="w-full h-auto rounded-2xl object-cover"
                                    style={{ minHeight: '400px', maxHeight: '500px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Pricing Features Section */}
            <motion.section
                className="section-spacing bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <div className="section-container space-y-12">
                    <div className="text-center space-y-4">
                        <p className="uppercase tracking-[0.4em] text-sm text-[#487307] font-semibold">
                            How It Works
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Fair pricing, intelligent technology
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            We use advanced algorithms to calculate fair, fixed quotes instantly, so you can book with complete confidence.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {pricingFeatures.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    className="rounded-2xl border border-[#487307]/10 bg-gradient-to-br from-white to-[#e8f5e9]/30 p-6 shadow-md hover:shadow-lg transition-all duration-300"
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="rounded-2xl bg-gradient-to-br from-[#1a2e03] to-[#487307] p-4 text-white w-fit mb-4">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-montserrat font-bold text-slate-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Pricing Principles Section */}
            <motion.section
                className="section-spacing bg-gradient-to-b from-[#f1f5ff] to-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <div className="section-container space-y-12">
                    <div className="text-center space-y-4">
                        <p className="uppercase tracking-[0.4em] text-sm text-slate-500 font-semibold">
                            Our Principles
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Commitment to transparency
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {pricingPrinciples.map((principle) => (
                            <motion.div
                                key={principle.title}
                                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
                                variants={fadeInUp}
                            >
                                <CheckCircle2 className="h-6 w-6 text-[#487307] shrink-0" />
                                <div>
                                    <h3 className="text-lg font-montserrat font-bold text-slate-900 mb-1">
                                        {principle.title}
                                    </h3>
                                    <p className="text-slate-600">
                                        {principle.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Financial Compliance Section */}
            <motion.section
                className="section-spacing bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <div className="section-container space-y-12">
                    <div className="text-center space-y-4">
                        <p className="uppercase tracking-[0.4em] text-sm text-[#487307] font-semibold">
                            Financial Security
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Secure and compliant transactions
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            We adhere to the strictest financial regulations to ensure your payments and data are always protected.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {financialCompliance.map((item) => (
                            <motion.div
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="space-y-3">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f5e9] px-3 py-1">
                                        <FileText className="h-3 w-3 text-[#487307]" />
                                        <span className="text-xs font-bold text-[#487307] uppercase tracking-wider">
                                            {item.standard}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-montserrat font-bold text-slate-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Related Features Section */}
            <motion.section
                className="section-spacing bg-gradient-to-b from-[#f1f5ff] to-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <div className="section-container space-y-12">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-6 py-2 backdrop-blur shadow-sm">
                            <Sparkles className="h-4 w-4 text-[#487307]" />
                            <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                                Explore More
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Discover what makes us different
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {relatedFeatures.map((feature) => (
                            <Link key={feature.title} to={feature.link}>
                                <motion.div
                                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                                    variants={fadeInUp}
                                    whileHover={{ y: -8 }}
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-montserrat font-bold text-slate-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 mb-4">{feature.description}</p>
                                    <div className="flex items-center gap-2 text-[#487307] font-semibold text-sm group-hover:gap-3 transition-all">
                                        <span>Learn more</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="section-spacing bg-gradient-to-br from-[#1a2e03] via-[#487307] to-[#6aa80b] text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <div className="section-container text-center space-y-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold">
                        Get your guaranteed fixed quote now
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        See exactly what you'll pay before you book. No surprises, just premium service at a fair price.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/book-now">
                            <button className="bg-white text-[#487307] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition shadow-xl">
                                Get Instant Quote
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition">
                                Open Business Account
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
