import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    MapPin,
    Clock,
    ShieldCheck,
    Star,
    Crown,
    CheckCircle2,
    Sparkles,
    ArrowRight
} from "lucide-react";
import { CITY_ATTRACTIONS } from "@/lib/constants";
import { SectionChip } from "@/components/SectionChip";

export default function CityTourDetail() {
    const { attractionId } = useParams<{ attractionId: string }>();
    const navigate = useNavigate();

    const attraction = CITY_ATTRACTIONS.find(a => a.id === attractionId);

    if (!attraction) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-montserrat font-bold">Attraction Not Found</h1>
                    <button
                        onClick={() => navigate('/services/city-tours')}
                        className="flex items-center gap-2 text-[#487307] font-semibold mx-auto"
                    >
                        <ArrowLeft size={20} /> Back to City Tours
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full bg-[#fcfdff] text-slate-900">
            {/* Immersive Hero Section */}
            <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-slate-900">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover opacity-60 scale-105 animate-[zoom-slow_20s_ease-in-out_infinite]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40 z-10" />
                </div>

                {/* Animated SVGs from Home Hero for brand consistency */}
                <motion.svg
                    className="pointer-events-none absolute right-[-5%] top-10 h-96 w-96 text-white/5 z-10 hidden lg:block"
                    viewBox="0 0 200 200"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                    <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="12 12" />
                    <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
                </motion.svg>

                <div className="relative z-20 section-container w-full py-20">
                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Back & Category Tags */}
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    onClick={() => navigate('/services/city-tours')}
                                    className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
                                >
                                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                                    <span className="text-xs font-bold uppercase tracking-[0.2em]">Back to Tours</span>
                                </button>
                                <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#487307]/20 backdrop-blur-md border border-[#487307]/30 text-[#8fe00f]">
                                    <Sparkles size={14} className="animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-[0.2em]">London Landmark</span>
                                </div>
                            </div>

                            {/* Title & Description */}
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-bold text-white leading-[1.05] tracking-tight">
                                    {attraction.name.split(' ').map((word, i) => (
                                        <span key={i} className={i === 0 ? "block" : "text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-100 to-white"}>
                                            {word}{' '}
                                        </span>
                                    ))}
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-200 font-inter font-light leading-relaxed max-w-2xl">
                                    {attraction.description}
                                </p>
                            </div>

                            {/* Trust Badge / Info Pills */}
                            <div className="flex flex-wrap gap-8 pt-4">


                                <div className="flex items-center gap-4 text-white/80">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                        <Crown className="text-[#8fe00f]" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest opacity-60">Experience</p>
                                        <p className="text-sm font-bold uppercase">VIP Chauffeur</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature Image Card - Ensuring the image is "set properly" */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="aspect-[4/5] rounded-[60px] overflow-hidden border-[12px] border-white/5 shadow-2xl relative group">
                                <img
                                    src={attraction.image}
                                    alt={attraction.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                                <div className="absolute bottom-10 left-10">
                                    <p className="text-white text-4xl font-montserrat font-bold">Iconic <br /> Perspective</p>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#487307]/20 blur-3xl rounded-full" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#8fe00f]/10 blur-3xl rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-spacing relative bg-[#fcfdff]">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent" />

                <div className="section-container grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <h2 className="text-3xl font-montserrat font-bold text-slate-900">Experience Overview</h2>
                            <p className="text-lg text-slate-600 font-inter leading-relaxed">
                                {attraction.longDescription}
                            </p>
                        </div>



                        <div className="space-y-8 pt-8">
                            <h2 className="text-3xl font-montserrat font-bold text-slate-900">The Quickoo Standard</h2>
                            <div className="grid gap-4">
                                {[
                                    { icon: Clock, title: "Punctuality", desc: "Our chauffeurs arrive 15 minutes early." },
                                    { icon: ShieldCheck, title: "Safety First", desc: "Rigorous vehicle checks and DBS-verified drivers." },
                                    { icon: Star, title: "Excellence", desc: "Tailored routes to avoid congestion and maximize views." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-slate-50 transition-all hover:border-[#8fe00f]/30 hover:shadow-md">
                                        <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                            <item.icon size={24} className="text-[#487307]" />
                                        </div>
                                        <div>
                                            <h4 className="font-montserrat font-bold text-lg">{item.title}</h4>
                                            <p className="text-slate-500 font-inter">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Booking Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="sticky top-32"
                    >
                        <div className="p-10 rounded-[40px] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Crown size={120} />
                            </div>

                            <div className="relative space-y-8">
                                <div className="space-y-2">
                                    <p className="text-[#8fe00f] uppercase tracking-widest text-sm font-bold">Bespoke Experience</p>
                                    <h3 className="text-3xl font-montserrat font-bold">Reserve Your Private Tour</h3>
                                </div>

                                <p className="text-white/70 font-inter">
                                    Book your luxury chauffeur-driven tour of the {attraction.name} and other iconic London landmarks.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="flex items-center gap-4">
                                            <MapPin className="text-[#8fe00f]" size={20} />
                                            <div>
                                                <p className="text-xs text-white/50 uppercase tracking-widest">Selected Landmark</p>
                                                <p className="font-semibold">{attraction.name}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => window.open(attraction.mapUrl, '_blank')}
                                            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/10 flex items-center gap-2 text-xs font-semibold"
                                            title="View on Google Maps"
                                        >
                                            Map
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-4 space-y-4">
                                    <button
                                        onClick={() => navigate('/#home-booking')}
                                        className="w-full luxury-button-gold py-5 text-lg font-bold flex items-center justify-center gap-3 group"
                                    >
                                        Book Now
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <p className="text-center text-xs text-white/40 uppercase tracking-[0.2em]">
                                        Flexible scheduling & 24/7 support
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-white/10 mt-8">
                                    <p className="text-sm text-white/60 text-center italic">
                                        "The most refined way to experience London's majestic history."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-8 rounded-[32px] border border-slate-100 bg-white shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Talk to Concierge</p>
                                <p className="font-montserrat font-bold">+44 20 3576 1617</p>
                            </div>
                            <a
                                href="https://wa.me/442035761617"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                            >
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
