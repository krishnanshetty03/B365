"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Code, MessageSquare, Mic, Glasses, Scale, Smartphone } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { 
    WorkflowsPreview, ChatbotPreview, VoiceAgentPreview, ARVRPreview, LawOSPreview, WhatsAppOSPreview 
} from "@/components/features/ProductPreviews";

const productData: Record<string, {
    title: string;
    tagline: string;
    overview: string;
    icon: any;
    features: string[];
    useCases: { title: string; desc: string }[];
    stats: { label: string; value: string }[];
    previewComponent: any;
}> = {
    "workflows": {
        title: "Workflows",
        tagline: "Orchestrate your entire business automatically",
        overview: "buziness365 Workflows is a multi-agent AI orchestration engine that chains specialized AI agents together to complete real, complex business tasks from start to finish — without human intervention. Think of it as your business on autopilot.",
        icon: Code,
        features: [
            "Drag-and-drop workflow builder",
            "100+ native integrations",
            "Multi-agent AI coordination",
            "Real-time monitoring & alerts",
            "Conditional branching logic",
            "Automatic error recovery"
        ],
        useCases: [
            { title: "Sales Automation", desc: "Auto-qualify leads → send proposals → follow up → close deals" },
            { title: "HR & Onboarding", desc: "Automate onboarding → training scheduling → access provisioning" },
            { title: "Finance Operations", desc: "Invoice receipt → approval → payment → reconciliation" },
            { title: "Customer Service", desc: "Ticket creation → routing → resolution → feedback collection" }
        ],
        stats: [
            { label: "Reduction in manual tasks", value: "80%" },
            { label: "Faster execution speed", value: "5×" },
            { label: "Process error rate", value: "~0%" }
        ],
        previewComponent: WorkflowsPreview
    },
    "chatbot": {
        title: "Chatbot",
        tagline: "Your always-on AI sales and support rep",
        overview: "An intelligent AI chatbot that instantly engages website visitors, qualifies leads, books appointments, and resolves support queries 24/7 — all with a natural, human-like conversational experience tailored to your brand.",
        icon: MessageSquare,
        features: [
            "Multi-language support (40+ languages)",
            "Smart lead capture & qualification",
            "Appointment booking & calendar sync",
            "CRM integration (Salesforce, HubSpot)",
            "Custom personality & brand voice",
            "Live analytics dashboard"
        ],
        useCases: [
            { title: "E-Commerce", desc: "Product recommendations, order tracking, returns assistance" },
            { title: "Healthcare", desc: "Symptom checker, appointment booking, prescription reminders" },
            { title: "Real Estate", desc: "Property info, virtual tour scheduling, lead qualification" },
            { title: "Education", desc: "Course info, enrollment guidance, fee queries" }
        ],
        stats: [
            { label: "More leads captured", value: "3×" },
            { label: "Query resolution rate", value: "90%" },
            { label: "Support cost reduction", value: "65%" }
        ],
        previewComponent: ChatbotPreview
    },
    "voice-agent": {
        title: "Voice Agent",
        tagline: "AI that calls, convinces, and closes deals",
        overview: "An advanced AI-powered calling system that communicates fluently across 40+ languages, handling outbound sales, appointment reminders, follow-ups, and customer support at massive scale — 24 hours a day, 7 days a week.",
        icon: Mic,
        features: [
            "40+ language support",
            "Natural LLM-powered conversation",
            "Automatic CRM sync post-call",
            "Intelligent call scheduling",
            "Sentiment analysis & escalation",
            "Custom call scripts & personas"
        ],
        useCases: [
            { title: "Hospitals & Clinics", desc: "Appointment reminders, patient follow-ups, prescription alerts" },
            { title: "Real Estate", desc: "Lead qualification calls, property tour confirmations" },
            { title: "Retail & E-Commerce", desc: "Order confirmations, delivery updates, re-engagement" },
            { title: "Education", desc: "Enrollment campaigns, exam reminders, fee collection" }
        ],
        stats: [
            { label: "Call capacity vs human team", value: "10×" },
            { label: "Operational cost reduction", value: "60%" },
            { label: "Successful connection rate", value: "85%" }
        ],
        previewComponent: VoiceAgentPreview
    },
    "ar-vr": {
        title: "XR - MR/VR/AR",
        tagline: "Immersive Mixed Reality experiences powered by AI Assistance",
        overview: "Cutting-edge augmented and virtual reality solutions that create fully immersive environments for training, product visualization, customer experiences, and enterprise operations — on any device.",
        icon: Glasses,
        features: [
            "Custom VR environment development",
            "AR product visualization & try-on",
            "3D simulation & spatial modeling",
            "Multi-user collaborative spaces",
            "Cross-platform (headset, mobile, web)",
            "Performance analytics & tracking"
        ],
        useCases: [
            { title: "Corporate Training", desc: "Immersive simulations for safety, compliance, and onboarding" },
            { title: "Retail", desc: "Virtual try-on for fashion, furniture, and consumer goods" },
            { title: "Healthcare & Medical", desc: "Surgical simulations, anatomy training, patient therapy" },
            { title: "Architecture & Real Estate", desc: "3D property walkthroughs before construction" }
        ],
        stats: [
            { label: "Better knowledge retention", value: "40%" },
            { label: "Training cost reduction", value: "50%" },
            { label: "Engagement vs traditional", value: "6×" }
        ],
        previewComponent: ARVRPreview
    },
    "law-os": {
        title: "Law OS",
        tagline: "AI-powered intelligence for modern legal operations",
        overview: "A comprehensive AI-powered platform purpose-built for lawyers and legal teams. Manage cases, automate documentation, collaborate seamlessly, and gain intelligent legal insights — all in one unified system designed for accuracy.",
        icon: Scale,
        features: [
            "Case management & timeline tracking",
            "AI document drafting & review",
            "Legal research assistant (LLM-powered)",
            "Client portal & secure communication",
            "Billing, invoicing & time tracking",
            "Compliance alerts & deadline management"
        ],
        useCases: [
            { title: "Law Firms", desc: "End-to-end case management from intake to resolution" },
            { title: "Corporate Legal Teams", desc: "Contract management, compliance tracking, risk assessment" },
            { title: "IP & Patent Firms", desc: "Patent filing workflows, prior art research, status tracking" },
            { title: "Litigation Teams", desc: "Evidence management, deposition prep, court scheduling" }
        ],
        stats: [
            { label: "Less time on documentation", value: "70%" },
            { label: "Faster legal research", value: "8×" },
            { label: "Billing accuracy", value: "99%" }
        ],
        previewComponent: LawOSPreview
    },
    "whatsapp-os": {
        title: "WhatsApp OS",
        tagline: "Turn every WhatsApp conversation into revenue",
        overview: "A complete WhatsApp business automation platform that converts conversations into customers. Automate replies, run targeted broadcast campaigns, score leads, and close sales — all through the world's most popular messaging app.",
        icon: Smartphone,
        features: [
            "Automated reply flows & chatbots",
            "Broadcast campaign manager",
            "Smart lead scoring & routing",
            "CRM & e-commerce integration",
            "Team shared inbox & assignment",
            "Rich analytics & ROI dashboard"
        ],
        useCases: [
            { title: "E-Commerce", desc: "Cart abandonment recovery, order updates, re-engagement" },
            { title: "Service Businesses", desc: "Booking confirmations, appointment reminders, feedback" },
            { title: "Healthcare", desc: "Prescription reminders, teleconsultation, health tips" },
            { title: "Education", desc: "Fee alerts, exam prep content, enrollment campaigns" }
        ],
        stats: [
            { label: "Engagement vs email", value: "4×" },
            { label: "Message open rate", value: "98%" },
            { label: "Conversion uplift", value: "35%" }
        ],
        previewComponent: WhatsAppOSPreview
    }
};

export default function ProductDetailPage() {
    const params = useParams();
    const id = typeof params.id === "string" ? params.id.toLowerCase() : "";
    const p = productData[id];

    if (!p) {
        notFound();
    }

    const Icon = p.icon;
    const Preview = p.previewComponent;

    return (
        <div className="min-h-screen bg-background text-brand-black dark:text-white transition-colors duration-300 selection:bg-brand-yellow selection:text-black">
            {/* Header / Nav spacer */}
            <div className="h-16" />

            {/* Back link */}
            <div className="container mx-auto px-4 md:px-6 py-8">
                <Link href="/#products" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-brand-yellow transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Products
                </Link>
            </div>

            {/* HERO SECTION */}
            <section className="relative overflow-hidden py-16 md:py-24 border-b border-border-base dark:border-white/[0.04] bg-zinc-50 dark:bg-brand-black">
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[radial-gradient(#F5C800_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            {/* Product Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/30">
                                <Icon className="w-4 h-4 text-brand-yellow" />
                                <span className="text-xs font-black uppercase tracking-widest text-brand-black dark:text-brand-yellow">Product Spec Sheet</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-brand-black dark:text-white">
                                buziness365 <br />
                                <span className="text-brand-yellow">{p.title}</span>
                            </h1>

                            <p className="text-lg md:text-xl font-bold text-zinc-600 dark:text-zinc-300 leading-snug">
                                {p.tagline}
                            </p>

                            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
                                {p.overview}
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-yellow text-black font-black uppercase tracking-widest text-xs rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-brand-yellow/15">
                                    Request Proposal <ArrowRight className="w-4 h-4" />
                                </a>
                                <a href="#simulator" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border border-border-base dark:border-white/[0.08] hover:border-brand-yellow/30 text-brand-black dark:text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all shadow-sm">
                                    Launch Simulator
                                </a>
                            </div>
                        </div>

                        {/* Interactive Simulator */}
                        <div className="lg:col-span-5 w-full overflow-hidden" id="simulator">
                            <div className="w-full max-w-full overflow-x-hidden">
                                <Preview />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY CAPABILITIES & USE CASES SECTION */}
            <section className="py-24 border-b border-border-base dark:border-white/[0.04] bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Features Column */}
                        <div className="lg:col-span-5 space-y-8">
                            <div>
                                <p className="text-[11px] font-black text-brand-yellow uppercase tracking-widest mb-2">Capabilities</p>
                                <h2 className="text-3xl font-black uppercase tracking-tighter text-brand-black dark:text-white">Core Features</h2>
                            </div>
                            <div className="space-y-4">
                                {p.features.map((feat, idx) => (
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
                                {p.useCases.map((useCase, idx) => (
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
                    <p className="text-[11px] font-black text-brand-yellow uppercase tracking-widest mb-3">Metrics & Performance</p>
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-brand-black dark:text-white mb-12">Proven Business Impact</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {p.stats.map((stat, idx) => (
                            <div key={idx} className="bg-white dark:bg-zinc-900/40 border border-border-base dark:border-white/[0.03] p-6 rounded-2xl shadow-sm">
                                <h3 className="text-4xl md:text-5xl font-black text-brand-yellow tracking-tighter leading-none mb-3">{stat.value}</h3>
                                <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-snug">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DETAILED REQUEST PROPOSAL FORM */}
            <section className="py-24 bg-background" id="contact">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <div className="text-center mb-12">
                        <p className="text-[11px] font-black text-zinc-500 uppercase tracking-widest mb-2">Request Proposal</p>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-brand-black dark:text-white">Get a Custom Deployment Plan</h2>
                        <p className="text-xs text-zinc-400 mt-2 max-w-md mx-auto">
                            Submit your requirements below and our engineering team will build a tailored {p.title} proposal for your business.
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
