import { Shield, CheckCircle2, Eye, Bell, Users, ArrowRight, Sparkles, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const safetyFeatures = [
    {
        icon: Eye,
        title: "Real-Time Monitoring",
        description: "GPS tracking and live journey updates ensure complete visibility of your ride from pickup to destination.",
    },

    {
        icon: Bell,
        title: "24/7 Support",
        description: "Round-the-clock emergency response team ready to assist at any moment during your trip.",
    },
    {
        icon: Users,
        title: "Vetted Chauffeurs",
        description: "Every Chauffeur undergoes comprehensive background checks and continuous safety training.",
    },
];

const ukCompliance = [

    {
        title: "Enhanced DBS Checks",
        description: "All chauffeurs undergo Enhanced Disclosure and Barring Service checks, updated every 3 years.",
        standard: "Enhanced DBS",
    },
    {
        title: "UK GDPR Compliant",
        description: "Full compliance with UK General Data Protection Regulation for passenger data security and privacy.",
        standard: "UK GDPR 2018",
    },
    {
        title: "PHV License Compliance",
        description: "All vehicles and chauffeurs hold valid Private Hire Vehicle licenses from local licensing authorities.",
        standard: "PHV Licensed",
    },
    {
        title: "FCA Regulated Insurance",
        description: "Comprehensive commercial insurance regulated by the Financial Conduct Authority.",
        standard: "FCA Regulated",
    },
    {
        title: "DVSA & MOT Certified",
        description: "Regular vehicle inspections by Chauffeurs and Vehicle Standards Agency with valid MOT certificates.",
        standard: "DVSA Approved",
    },
];

const emergencyProtocols = [
    "Immediate emergency contact activation",
    "Real-time location sharing with authorities",

    "24/7 emergency response coordination",
    "Automated incident reporting",
    "Medical emergency protocols",
];

const relatedFeatures = [
    {
        title: "Transparent Pricing",
        description: "Honest quotes with no hidden fees",
        link: "/why-choose/transparent-pricing",
        icon: "💰",
    },
    {
        title: "Tailored Luxury Fleet",
        description: "Premium vehicles for every occasion",
        link: "/why-choose/luxury-fleet",
        icon: "👑",
    },
    {
        title: "Elite Chauffeurs",
        description: "VIP-trained professional chauffeurs",
        link: "/why-choose/elite-chauffeurs",
        icon: "⭐",
    },
];

export default function SafetyFirstPage() {
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
                            <SectionChip title="Safety First" icon={Shield} />

                            <div className="space-y-6">
                                <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
                                    Your safety is our{" "}
                                    <span className="bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
                                        top priority
                                    </span>
                                </h1>
                                <p className="text-lg text-slate-600 font-inter">
                                    Advanced safety protocols, real-time monitoring, and thoroughly vetted chauffeurs ensure every journey meets the highest security standards.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/#home-booking">
                                        <button className="luxury-button-gold px-7 py-3 text-base rounded-full">
                                            Book Secure Ride
                                        </button>
                                    </Link>
                                    <Link to="/contact">
                                        <button className="rounded-full border border-slate-300 px-7 py-3 text-base font-semibold text-slate-900 hover:bg-white transition">
                                            Learn More
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
                                    src="/images/why-choose/safety-first-hero_cleanup.png"
                                    alt="Safety First - Advanced security features and monitoring"
                                    className="w-full h-auto rounded-2xl object-cover"
                                    style={{ minHeight: '400px', maxHeight: '500px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Safety Features Section */}
            <motion.section
                className="section-spacing bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <div className="section-container space-y-12">
                    <div className="text-center space-y-4">
                        <p className="uppercase tracking-[0.4em] text-lg text-[#487307] font-semibold">
                            Safety Features
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Comprehensive protection at every step
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Our multi-layered safety approach combines technology, training, and protocols to ensure your complete security.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {safetyFeatures.map((feature) => {
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

            {/* UK Compliance Section */}
            <motion.section
                className="section-spacing bg-gradient-to-b from-[#f1f5ff] to-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <div className="section-container space-y-12">
                    <div className="text-center space-y-4">
                        <p className="uppercase tracking-[0.4em] text-lg text-slate-500 font-semibold">
                            UK Regulatory Compliance
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Meeting and exceeding UK safety standards
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Full compliance with UK regulations ensures your safety and peace of mind on every journey.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {ukCompliance.map((item) => (
                            <motion.div
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="space-y-3">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f5e9] px-3 py-1">
                                        <CheckCircle2 className="h-3 w-3 text-[#487307]" />
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

            {/* Emergency Protocols Section */}
            <motion.section
                className="section-spacing bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <div className="section-container">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="space-y-6">
                            <p className="uppercase tracking-[0.4em] text-lg text-[#487307] font-semibold">
                                Emergency Response
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                                Immediate assistance when you need it most
                            </h2>
                            <p className="text-lg text-slate-600">
                                Our comprehensive emergency protocols ensure rapid response and support in any situation.
                            </p>
                            <ul className="space-y-3">
                                {emergencyProtocols.map((protocol) => (
                                    <li key={protocol} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#487307] shrink-0" />
                                        <span className="text-slate-700">{protocol}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl border border-[#487307]/20 bg-gradient-to-br from-[#e8f5e9] to-white p-8 shadow-xl">
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-[#1a2e03] to-[#487307] text-white mx-auto">
                                    <Bell className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-montserrat font-bold text-slate-900">
                                    24/7 Emergency Hotline
                                </h3>
                                <p className="text-slate-600">
                                    Dedicated emergency response team available around the clock
                                </p>
                                <div className="pt-4">
                                    <p className="text-sm text-slate-500 mb-2">Emergency Contact</p>
                                    <p className="text-3xl font-montserrat font-bold text-[#487307]">
                                        Available 24/7
                                    </p>
                                </div>
                            </div>
                        </div>
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
                        <SectionChip title="Explore More" />
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
                        Experience safety-first luxury travel
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Book with confidence knowing every journey is protected by ISO-certified safety protocols and real-time monitoring.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/#home-booking">
                            <button className="bg-white text-[#487307] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition shadow-xl">
                                Book Secure Ride
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition">
                                Contact Safety Team
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
