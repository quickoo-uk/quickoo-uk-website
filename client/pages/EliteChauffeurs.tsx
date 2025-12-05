import { Users, CheckCircle2, Award, Globe, BookOpen, Heart, ArrowRight, Sparkles, Shield, Star } from "lucide-react";
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

const chauffeurQualities = [
    {
        icon: Award,
        title: "Rigorous Selection Process",
        description: "Only 1% of applicants join our team. Each chauffeur undergoes comprehensive background checks, driving assessments, and hospitality training.",
        highlight: "1% acceptance rate",
    },
    {
        icon: Heart,
        title: "Hospitality-First Mindset",
        description: "Trained in five-star hospitality standards with emphasis on discretion, anticipation of needs, and personalized service.",
        highlight: "5-star service",
    },
];

const trainingPrograms = [
    {
        title: "Advanced Driving Skills",
        description: "Defensive driving, adverse weather handling, and executive protection driving techniques.",
        duration: "40 hours",
        certification: "IAM RoadSmart Advanced",
    },
    {
        title: "Customer Service Excellence",
        description: "Hospitality protocols, cultural sensitivity, conflict resolution, and guest experience management.",
        duration: "24 hours",
        certification: "Institute of Hospitality",
    },
    {
        title: "Safety & First Aid",
        description: "Emergency response, first aid, CPR, and passenger safety procedures.",
        duration: "16 hours",
        certification: "St John Ambulance",
    },
    {
        title: "Local Knowledge",
        description: "Routes, landmarks, restaurants, hotels, and cultural venues across all operating cities.",
        duration: "Ongoing",
        certification: "Knowledge Certified",
    },
];

const chauffeurStats = [
    { value: "1%", label: "Acceptance Rate" },
    { value: "500+", label: "Elite Chauffeurs" },
    { value: "15+", label: "Languages" },
    { value: "4.9/5", label: "Average Rating" },
];

const ukRequirements = [
    {
        title: "Private Hire Driver License",
        description: "All chauffeurs hold valid PHV driver licenses issued by local licensing authorities, meeting UK legal requirements.",
        standard: "PHV Licensed",
    },
    {
        title: "Enhanced DBS Clearance",
        description: "Enhanced Disclosure and Barring Service checks completed for all drivers, updated every 3 years minimum.",
        standard: "Enhanced DBS",
    },
    {
        title: "Medical Fitness",
        description: "DVLA Group 2 medical standards with regular health assessments to ensure fitness to drive professionally.",
        standard: "DVLA Group 2",
    },
    {
        title: "Professional Insurance",
        description: "Comprehensive professional indemnity and public liability insurance for all chauffeurs.",
        standard: "Fully Insured",
    },
];

const serviceStandards = [
    {
        category: "Presentation",
        items: ["Immaculate uniform", "Professional grooming", "Polished vehicles", "Attention to detail"],
    },
    {
        category: "Conduct",
        items: ["Punctuality", "Discretion", "Courtesy", "Professionalism"],
    },
    {
        category: "Knowledge",
        items: ["Route expertise", "Local insights", "Cultural awareness", "Event knowledge"],
    },
    {
        category: "Service",
        items: ["Door service", "Luggage assistance", "Journey updates", "Special requests"],
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
];

export default function EliteChauffeurs() {
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
                                <Users className="h-4 w-4 text-[#487307]" />
                                <span className="text-xs tracking-[0.4em] uppercase text-slate-600 font-semibold">
                                    Elite Chauffeurs
                                </span>
                            </div>

                            <div className="space-y-6">
                                <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
                                    Hospitality-trained drivers{" "}
                                    <span className="bg-gradient-to-r from-[#1a2e03] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
                                        versed in VIP protocol
                                    </span>
                                </h1>
                                <p className="text-lg text-slate-600 font-inter">
                                    Only 1% of applicants join our elite team. Multilingual professionals trained in five-star hospitality and VIP protocol, delivering exceptional executive service on every journey.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/book-now">
                                        <button className="luxury-button-gold px-7 py-3 text-base rounded-full">
                                            Book Elite Service
                                        </button>
                                    </Link>
                                    <Link to="/contact">
                                        <button className="rounded-full border border-slate-300 px-7 py-3 text-base font-semibold text-slate-900 hover:bg-white transition">
                                            Join Our Team
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
                                    src="/images/why-choose/elite-chauffeurs-hero.png"
                                    alt="Elite Chauffeurs - VIP-trained professional drivers"
                                    className="w-full h-auto rounded-2xl object-cover"
                                    style={{ minHeight: '400px', maxHeight: '500px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Chauffeur Qualities Section */}
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
                            What Sets Us Apart
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            The finest chauffeurs in the UK
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Our rigorous selection and training process ensures every chauffeur embodies the highest standards of professionalism and service excellence.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {chauffeurQualities.map((quality) => {
                            const Icon = quality.icon;
                            return (
                                <motion.div
                                    key={quality.title}
                                    className="rounded-3xl border border-[#487307]/10 bg-gradient-to-br from-white to-[#e8f5e9]/30 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="rounded-2xl bg-gradient-to-br from-[#1a2e03] to-[#487307] p-4 text-white shadow-lg">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-montserrat font-bold text-slate-900 mb-2">
                                                {quality.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                {quality.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Training Programs Section */}
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
                            Continuous Development
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Comprehensive training programs
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Every chauffeur completes extensive training before their first journey and participates in ongoing professional development.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {trainingPrograms.map((program) => (
                            <motion.div
                                key={program.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="space-y-3">
                                    <h3 className="text-lg font-montserrat font-bold text-slate-900">
                                        {program.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {program.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Service Standards Section */}
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
                            Service Excellence
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Our commitment to you
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {serviceStandards.map((standard) => (
                            <motion.div
                                key={standard.category}
                                className="rounded-2xl border border-[#487307]/10 bg-gradient-to-br from-white to-[#e8f5e9]/30 p-6"
                                variants={fadeInUp}
                            >
                                <h3 className="text-xl font-montserrat font-bold text-slate-900 mb-4">
                                    {standard.category}
                                </h3>
                                <ul className="space-y-2">
                                    {standard.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                                            <CheckCircle2 className="h-4 w-4 text-[#487307] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* UK Requirements Compliance Section */}
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
                            UK Legal Compliance
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-slate-900">
                            Fully licensed and certified
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            All chauffeurs meet and exceed UK legal requirements for professional driving services.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {ukRequirements.map((requirement) => (
                            <motion.div
                                key={requirement.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="space-y-3">
                                    <h3 className="text-lg font-montserrat font-bold text-slate-900">
                                        {requirement.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {requirement.description}
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
                        Experience the difference elite chauffeurs make
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Book your journey with our VIP-trained, multilingual chauffeurs who deliver five-star hospitality on every trip.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/book-now">
                            <button className="bg-white text-[#487307] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition shadow-xl">
                                Book Elite Service
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition">
                                Join Our Team
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
