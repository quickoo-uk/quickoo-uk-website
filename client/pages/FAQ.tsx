import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, HelpCircle, Sparkles } from "lucide-react";
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

const FAQ_CATEGORIES = [
    {
        id: "general",
        title: "Frequently Asked Questions",
        questions: [
            {
                q: "How far in advance should I book?",
                a: "We recommend booking at least 24 hours in advance to ensure vehicle availability. However, we do accept last-minute bookings subject to availability. For airport transfers, we suggest booking 48 hours in advance.",
            },
            {
                q: "What is your cancellation policy?",
                a: "Cancellations made more than 24 hours before your scheduled pickup time receive a full refund. Cancellations within 24 hours are subject to our sliding scale policy detailed in our terms and conditions.",
            },
            {
                q: "Do you provide child seats?",
                a: "Yes, we provide complimentary child seats upon request. Please specify the age and number of children when booking so we can ensure appropriate safety seats are installed in your vehicle.",
            },
            {
                q: "What areas do you cover?",
                a: "We provide services throughout Greater London and offer transfers to all major UK airports. We also service major cities including Manchester, Birmingham, Liverpool, and can arrange long-distance travel across the UK.",
            },
        ],
    },
];

const AccordionItem = ({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <motion.div
            initial={false}
            className={`border-b border-slate-100 last:border-0 ${isOpen ? "bg-slate-50/50" : "bg-white"
                }`}
        >
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50"
            >
                <span
                    className={`font-medium transition-colors ${isOpen ? "text-[#7b5dff]" : "text-slate-700"
                        }`}
                >
                    {question}
                </span>
                <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                        ? "bg-[#7b5dff] text-white rotate-180"
                        : "bg-slate-100 text-slate-400 rotate-0"
                        }`}
                >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed font-inter">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function FAQ() {
    const [openSection, setOpenSection] = useState<string | null>("booking-0");

    const toggleSection = (id: string) => {
        setOpenSection(openSection === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f9fafc] via-white to-[#fdf7f0] overflow-hidden">
            {/* Hero Section */}
            <motion.section
                className="relative overflow-hidden min-h-[50vh] flex items-center bg-gradient-to-br from-white via-[#f1f5ff] to-[#fdf2e9]"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f3f6ff,_transparent_50%)]" />
                <div className="absolute -bottom-20 -right-8 h-72 w-72 bg-gold/20 blur-[140px] opacity-40" />
                <div className="absolute -top-24 -left-10 h-64 w-64 bg-[#90c4ff]/20 blur-[120px] opacity-50" />

                {/* Animated SVG Ring */}
                <motion.svg
                    viewBox="0 0 500 500"
                    className="absolute -top-20 -right-20 w-96 h-96 text-[#7b5dff]/10 pointer-events-none"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    <circle
                        cx="250"
                        cy="250"
                        r="230"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="20 20"
                    />
                    <circle
                        cx="250"
                        cy="250"
                        r="180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="20"
                        strokeOpacity="0.1"
                    />
                </motion.svg>

                <div className="section-container relative z-10 w-full pt-20 pb-10">
                    <div className="mx-auto max-w-3xl text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-1.5 backdrop-blur-md shadow-sm"
                        >
                            <HelpCircle className="h-4 w-4 text-[#7b5dff]" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                                Help Center
                            </span>
                        </motion.div>

                        <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1431] via-[#40206c] to-[#806af1]">help you?</span>
                        </h1>

                        <p className="text-lg text-slate-600 font-inter max-w-2xl mx-auto">
                            Find answers to common questions about our premium chauffeur services, booking process, and fleet standards.
                        </p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative mx-auto max-w-xl"
                        >
                            <div className="relative flex items-center group">
                                <Search className="absolute left-5 h-5 w-5 text-slate-400 group-focus-within:text-[#7b5dff] transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search for answers (e.g. 'cancellation', 'luggage')"
                                    className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-4 text-slate-700 placeholder:text-slate-400 shadow-[0_10px_40px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#7b5dff]/20 focus:border-[#7b5dff]/50 transition-all"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* FAQ Content */}
            <section className="section-container -mt-10 relative z-10 pb-24">
                <div className="mx-auto max-w-4xl space-y-10">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-10"
                    >
                        {FAQ_CATEGORIES.map((category) => (
                            <motion.div
                                key={category.id}
                                variants={fadeInUp}
                                className="rounded-[32px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] overflow-hidden"
                            >
                                <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50/80 to-white px-8 py-6 flex items-center gap-3">
                                    <Sparkles className="h-5 w-5 text-gold" />
                                    <h2 className="text-xl font-bold text-slate-800 font-montserrat">
                                        {category.title}
                                    </h2>
                                </div>
                                <div>
                                    {category.questions.map((q, idx) => (
                                        <AccordionItem
                                            key={idx}
                                            question={q.q}
                                            answer={q.a}
                                            isOpen={openSection === `${category.id}-${idx}`}
                                            onClick={() => toggleSection(`${category.id}-${idx}`)}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Still have questions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 rounded-[32px] luxury-button-gold p-10 md:p-14 text-center text-white shadow-2xl overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-[#7b5dff]/20 blur-[80px]" />
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-gold/10 blur-[80px]" />

                        <div className="relative z-10 space-y-6">
                            <h3 className="text-3xl font-bold font-montserrat">Still need assistance?</h3>
                            <p className="text-slate-300 max-w-xl mx-auto text-lg">
                                Our concierge team is available 24/7 to assist with bespoke requests and complex itineraries.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <Link
                                    to="/contact"
                                    className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-[#1a1431] transition hover:bg-gold hover:text-dark shadow-lg hover:shadow-gold/20"
                                >
                                    Contact Concierge
                                </Link>
                                <a
                                    href="tel:+442070788993"
                                    className="rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 backdrop-blur-sm"
                                >
                                    Call Support
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
