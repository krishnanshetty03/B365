"use client";

import { motion } from "framer-motion";
import { Workflow, MessageSquare, Mic, Glasses, Scale, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ProductModal, ProductDetail } from "@/components/ui/ProductModal";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const products: (Omit<ProductDetail, "icon"> & { icon: React.ComponentType<{ className?: string }> })[] = [
    {
        icon: Workflow,
        title: "Workflows",
        tagline: "Orchestrate your entire business automatically",
        overview: "buziness365 Workflows is a multi-agent AI orchestration engine that chains specialized AI agents together to complete real, complex business tasks from start to finish — without human intervention. Think of it as your business on autopilot.",
        color: "bg-brand-yellow",
        features: [
            "Drag-and-drop workflow builder",
            "100+ native integrations",
            "Multi-agent AI coordination",
            "Real-time monitoring & alerts",
            "Conditional branching logic",
            "Automatic error recovery",
        ],
        useCases: [
            { title: "Sales Automation", desc: "Auto-qualify leads → send proposals → follow up → close deals" },
            { title: "HR & Onboarding", desc: "Automate onboarding → training scheduling → access provisioning" },
            { title: "Finance Operations", desc: "Invoice receipt → approval → payment → reconciliation" },
            { title: "Customer Service", desc: "Ticket creation → routing → resolution → feedback collection" },
        ],
        stats: [
            { label: "Reduction in manual tasks", value: "80%" },
            { label: "Faster execution speed", value: "5×" },
            { label: "Process error rate", value: "~0%" },
        ],
    },
    {
        icon: MessageSquare,
        title: "Chatbot",
        tagline: "Your always-on AI sales and support rep",
        overview: "An intelligent AI chatbot that instantly engages website visitors, qualifies leads, books appointments, and resolves support queries 24/7 — all with a natural, human-like conversational experience tailored to your brand.",
        color: "bg-brand-yellow",
        features: [
            "Multi-language support (40+ languages)",
            "Smart lead capture & qualification",
            "Appointment booking & calendar sync",
            "CRM integration (Salesforce, HubSpot)",
            "Custom personality & brand voice",
            "Live analytics dashboard",
        ],
        useCases: [
            { title: "E-Commerce", desc: "Product recommendations, order tracking, returns assistance" },
            { title: "Healthcare", desc: "Symptom checker, appointment booking, prescription reminders" },
            { title: "Real Estate", desc: "Property info, virtual tour scheduling, lead qualification" },
            { title: "Education", desc: "Course info, enrollment guidance, fee queries" },
        ],
        stats: [
            { label: "More leads captured", value: "3×" },
            { label: "Query resolution rate", value: "90%" },
            { label: "Support cost reduction", value: "65%" },
        ],
    },
    {
        icon: Mic,
        title: "Voice Agent",
        tagline: "AI that calls, convinces, and closes deals",
        overview: "An advanced AI-powered calling system that communicates fluently across 40+ languages, handling outbound sales, appointment reminders, follow-ups, and customer support at massive scale — 24 hours a day, 7 days a week.",
        color: "bg-brand-yellow",
        features: [
            "40+ language support",
            "Natural LLM-powered conversation",
            "Automatic CRM sync post-call",
            "Intelligent call scheduling",
            "Sentiment analysis & escalation",
            "Custom call scripts & personas",
        ],
        useCases: [
            { title: "Hospitals & Clinics", desc: "Appointment reminders, patient follow-ups, prescription alerts" },
            { title: "Real Estate", desc: "Lead qualification calls, property tour confirmations" },
            { title: "Retail & E-Commerce", desc: "Order confirmations, delivery updates, re-engagement" },
            { title: "Education", desc: "Enrollment campaigns, exam reminders, fee collection" },
        ],
        stats: [
            { label: "Call capacity vs human team", value: "10×" },
            { label: "Operational cost reduction", value: "60%" },
            { label: "Successful connection rate", value: "85%" },
        ],
    },
    {
        icon: Glasses,
        title: "AR & VR",
        tagline: "Transform training and experience with immersive tech",
        overview: "Cutting-edge augmented and virtual reality solutions that create fully immersive environments for training, product visualization, customer experiences, and enterprise operations — on any device.",
        color: "bg-brand-yellow",
        features: [
            "Custom VR environment development",
            "AR product visualization & try-on",
            "3D simulation & spatial modeling",
            "Multi-user collaborative spaces",
            "Cross-platform (headset, mobile, web)",
            "Performance analytics & tracking",
        ],
        useCases: [
            { title: "Corporate Training", desc: "Immersive simulations for safety, compliance, and onboarding" },
            { title: "Retail", desc: "Virtual try-on for fashion, furniture, and consumer goods" },
            { title: "Healthcare & Medical", desc: "Surgical simulations, anatomy training, patient therapy" },
            { title: "Architecture & Real Estate", desc: "3D property walkthroughs before construction" },
        ],
        stats: [
            { label: "Better knowledge retention", value: "40%" },
            { label: "Training cost reduction", value: "50%" },
            { label: "Engagement vs traditional", value: "6×" },
        ],
    },
    {
        icon: Scale,
        title: "Law OS",
        tagline: "AI-powered intelligence for modern legal operations",
        overview: "A comprehensive AI-powered platform purpose-built for lawyers and legal teams. Manage cases, automate documentation, collaborate seamlessly, and gain intelligent legal insights — all in one unified system designed for accuracy.",
        color: "bg-brand-yellow",
        features: [
            "Case management & timeline tracking",
            "AI document drafting & review",
            "Legal research assistant (LLM-powered)",
            "Client portal & secure communication",
            "Billing, invoicing & time tracking",
            "Compliance alerts & deadline management",
        ],
        useCases: [
            { title: "Law Firms", desc: "End-to-end case management from intake to resolution" },
            { title: "Corporate Legal Teams", desc: "Contract management, compliance tracking, risk assessment" },
            { title: "IP & Patent Firms", desc: "Patent filing workflows, prior art research, status tracking" },
            { title: "Litigation Teams", desc: "Evidence management, deposition prep, court scheduling" },
        ],
        stats: [
            { label: "Less time on documentation", value: "70%" },
            { label: "Faster legal research", value: "8×" },
            { label: "Billing accuracy", value: "99%" },
        ],
    },
    {
        icon: WhatsAppIcon,
        title: "WhatsApp OS",
        tagline: "Turn every WhatsApp conversation into revenue",
        overview: "A complete WhatsApp business automation platform that converts conversations into customers. Automate replies, run targeted broadcast campaigns, score leads, and close sales — all through the world's most popular messaging app.",
        color: "bg-brand-yellow",
        features: [
            "Automated reply flows & chatbots",
            "Broadcast campaign manager",
            "Smart lead scoring & routing",
            "CRM & e-commerce integration",
            "Team shared inbox & assignment",
            "Rich analytics & ROI dashboard",
        ],
        useCases: [
            { title: "E-Commerce", desc: "Cart abandonment recovery, order updates, re-engagement" },
            { title: "Service Businesses", desc: "Booking confirmations, appointment reminders, feedback" },
            { title: "Healthcare", desc: "Prescription reminders, teleconsultation, health tips" },
            { title: "Education", desc: "Fee alerts, exam prep content, enrollment campaigns" },
        ],
        stats: [
            { label: "Engagement vs email", value: "4×" },
            { label: "Message open rate", value: "98%" },
            { label: "Conversion uplift", value: "35%" },
        ],
    },
];

export function ProductsSection() {
    const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

    return (
        <section id="products" className="py-24 px-4 bg-surface relative overflow-hidden">
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: "radial-gradient(circle, #0A0A0A 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/20 border border-brand-yellow/40 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow block" />
                            <span className="text-xs font-bold text-brand-black dark:text-white uppercase tracking-widest">Our Core Products</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black dark:text-white uppercase tracking-tighter leading-none mb-4">
                            Intelligent <br />
                            <span className="text-brand-yellow" style={{ WebkitTextStroke: "2px #0A0A0A" }}>
                                AI Applications
                            </span>
                        </h2>
                        <p className="text-base text-text-muted font-medium leading-relaxed">
                            A suite of powerful AI-driven products designed to automate, engage, and grow your business — all from one platform.
                        </p>
                    </div>
                    <a
                        href="#pricing"
                        className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-brand-black dark:bg-white text-brand-yellow dark:text-brand-black font-black uppercase tracking-widest text-sm rounded-xl hover:opacity-90 transition-opacity"
                    >
                        Get All Products <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => {
                        const Icon = product.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -4 }}
                                className="group relative bg-white dark:bg-surface-alt rounded-2xl border border-border-base hover:border-brand-yellow/50 hover:shadow-xl hover:shadow-brand-yellow/10 transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                {/* Yellow accent top line on hover */}
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                                {/* Card Body */}
                                <div className="p-6 flex flex-col flex-1">
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-xl ${product.color} flex items-center justify-center mb-5 border border-black/10`}>
                                        <Icon className="w-6 h-6 text-black" />
                                    </div>

                                    <h3 className="text-xl font-black text-brand-black dark:text-white uppercase tracking-tight mb-3">{product.title}</h3>
                                    <p className="text-sm text-text-muted leading-relaxed flex-1">{product.overview.slice(0, 120)}...</p>

                                    {/* Stats preview */}
                                    <div className="flex gap-4 mt-5 pt-5 border-t border-border-base">
                                        {product.stats.slice(0, 2).map(stat => (
                                            <div key={stat.label}>
                                                <p className="text-lg font-black text-brand-black dark:text-white">{stat.value}</p>
                                                <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wide leading-tight mt-0.5">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Learn More CTA */}
                                <Link
                                    href={`/products/${product.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                                    className="flex items-center justify-between gap-2 px-6 py-4 bg-surface dark:bg-brand-black/30 border-t border-border-base text-sm font-black text-brand-black dark:text-white uppercase tracking-wider hover:bg-brand-yellow hover:text-black transition-all duration-200 group/btn"
                                >
                                    <span>Learn More</span>
                                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Learn More Modal */}
            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </section>
    );
}
