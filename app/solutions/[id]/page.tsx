"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { domains } from "@/lib/domains";
import { 
    AIMLPreview, DataEngPreview, CybersecurityPreview, StartupPreview, EdtechPreview, HealthcarePreview, AgroPreview, BizOpsPreview, EcommercePreview, TextilePreview, MediaPreview, ARVRPreview, ConsultingPreview, WorkforcePreview, GiftsPreview, AdvertisingPreview
} from "@/components/features/SolutionPreviews";

const previewsMap: Record<string, any> = {
    "ai-ml": AIMLPreview,
    "data-eng": DataEngPreview,
    "ar-vr": ARVRPreview,
    "cybersecurity": CybersecurityPreview,
    "startup": StartupPreview,
    "consulting": ConsultingPreview,
    "workforce": WorkforcePreview,
    "edtech": EdtechPreview,
    "healthcare": HealthcarePreview,
    "agro": AgroPreview,
    "biz-ops": BizOpsPreview,
    "e-commerce": EcommercePreview,
    "textile": TextilePreview,
    "media": MediaPreview,
    "gifts": GiftsPreview,
    "advertising": AdvertisingPreview
};

export default function SolutionDetailPage() {
    const params = useParams();
    const id = typeof params.id === "string" ? params.id.toLowerCase() : "";
    const s = domains.find(d => d.id.toLowerCase() === id);

    if (!s) {
        notFound();
    }

    const Icon = s.icon;
    const Preview = previewsMap[id] || AIMLPreview; // fallback to AI/ML just in case

    return (
        <div className="min-h-screen bg-background text-brand-black dark:text-white transition-colors duration-300 selection:bg-brand-yellow selection:text-black">
            {/* Header / Nav spacer */}
            <div className="h-16" />

            {/* Back link */}
            <div className="container mx-auto px-4 md:px-6 py-6">
                <Link href="/#solutions" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-brand-yellow transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Solutions
                </Link>
            </div>

            {/* HERO SECTION */}
            <section className="relative overflow-hidden py-16 md:py-24 border-b border-border-base dark:border-white/[0.04] bg-zinc-50 dark:bg-brand-black">
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[radial-gradient(#F5C800_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6 text-left">
                            {/* Solution Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/30">
                                <Icon className="w-4 h-4 text-brand-yellow" />
                                <span className="text-xs font-black uppercase tracking-widest text-brand-black dark:text-brand-yellow">{s.category}</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-brand-black dark:text-white">
                                {s.title}
                            </h1>

                            <p className="text-lg md:text-xl font-bold text-zinc-600 dark:text-zinc-300 leading-snug">
                                {s.tagline}
                            </p>

                            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
                                {s.overview}
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-yellow text-black font-black uppercase tracking-widest text-xs rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-brand-yellow/15">
                                    Get A Proposal <ArrowRight className="w-4 h-4" />
                                </a>
                                <a href="#capabilities" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border border-border-base dark:border-white/[0.08] hover:border-brand-yellow/30 text-brand-black dark:text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all shadow-sm">
                                    Explore Simulator
                                </a>
                            </div>
                        </div>

                        {/* Interactive Solution Simulator in Hero Right */}
                        <div className="lg:col-span-5 w-full overflow-hidden" id="simulator">
                            <div className="w-full max-w-full overflow-x-hidden">
                                <Preview />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY CAPABILITIES & USE CASES SECTION */}
            <section className="py-24 border-b border-border-base dark:border-white/[0.04] bg-background" id="capabilities">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Features Column */}
                        <div className="lg:col-span-5 space-y-8">
                            <div>
                                <p className="text-[11px] font-black text-brand-yellow uppercase tracking-widest mb-2">Capabilities</p>
                                <h2 className="text-3xl font-black uppercase tracking-tighter text-brand-black dark:text-white">Core Offerings</h2>
                            </div>
                            <div className="space-y-4">
                                {s.features.map((feat, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-white dark:bg-zinc-900/40 border border-border-base dark:border-white/[0.03] p-4 rounded-xl shadow-sm hover:border-brand-yellow/30 transition-all">
                                        <div className="w-5 h-5 rounded-full bg-brand-yellow/15 flex items-center justify-center border border-brand-yellow/30 text-brand-yellow shrink-0 mt-0.5">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <p className="text-zinc-700 dark:text-zinc-200 text-sm font-semibold leading-relaxed">{feat}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Use Cases Column */}
                        <div className="lg:col-span-7 space-y-8">
                            <div>
                                <p className="text-[11px] font-black text-brand-yellow uppercase tracking-widest mb-2">Real-world Application</p>
                                <h2 className="text-3xl font-black uppercase tracking-tighter text-brand-black dark:text-white">Use Cases</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {s.useCases.map((useCase, idx) => (
                                    <div key={idx} className="bg-white dark:bg-zinc-900/40 border border-border-base dark:border-white/[0.03] p-5 rounded-xl flex flex-col justify-between hover:border-brand-yellow/30 hover:shadow-md transition-all">
                                        <h3 className="text-base font-black text-brand-black dark:text-white uppercase tracking-tight mb-2">{useCase.title}</h3>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">{useCase.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPACT STATISTICS SECTION */}
            <section className="py-24 border-b border-border-base dark:border-white/[0.04] bg-zinc-50 dark:bg-brand-black">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                    <p className="text-[11px] font-black text-brand-yellow uppercase tracking-widest mb-3">Metrics & Impact</p>
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-brand-black dark:text-white mb-12">Target Outcomes</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {s.stats.map((stat, idx) => (
                            <div key={idx} className="bg-white dark:bg-zinc-900/40 border border-border-base dark:border-white/[0.03] p-6 rounded-2xl shadow-sm">
                                <h3 className="text-4xl md:text-5xl font-black text-brand-yellow tracking-tighter leading-none mb-3">{stat.value}</h3>
                                <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-snug">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="py-24 bg-background" id="contact">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <div className="text-center mb-12">
                        <p className="text-[11px] font-black text-zinc-500 uppercase tracking-widest mb-2">Get Started</p>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-brand-black dark:text-white">Let&apos;s Build Your Solution</h2>
                        <p className="text-xs text-zinc-400 mt-2 max-w-md mx-auto">
                            Submit your contact details and our team will prepare a structured {s.title} proposal tailored to your team.
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-zinc-900/40 border border-border-base dark:border-white/[0.03] rounded-2xl p-6 md:p-10 shadow-xl">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
