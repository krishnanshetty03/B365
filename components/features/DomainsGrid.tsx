"use client";

import { motion } from "framer-motion";
import {
    Bot, Rocket, Database, Glasses, Sprout, Briefcase,
    Film, Users, Shirt, Megaphone, Gift, GraduationCap, Mic
} from "lucide-react";

const domains = [
    {
        icon: Rocket,
        title: "Startup Incubation",
        description: "Accelerate from idea to market with mentorship, funding support, and strategic guidance.",
        services: ["Business Strategy", "Funding Support", "Mentorship", "Market Research"],
    },
    {
        icon: Bot,
        title: "AI / ML",
        description: "Transform your business with intelligent automation and machine learning solutions.",
        services: ["Predictive Analytics", "NLP", "Computer Vision", "AI Consulting"],
    },
    {
        icon: Mic,
        title: "Voice Agents",
        description: "Multi-language voice agents for hospitals, manufacturing, real estate, and more.",
        services: ["Multilingual Calls", "Lead Qualify", "Appointment Booking", "Support"],
    },
    {
        icon: Database,
        title: "Data Engineering",
        description: "Build scalable data infrastructure and pipelines for enterprise performance.",
        services: ["Data Warehousing", "ETL Pipelines", "Big Data", "Analytics"],
    },
    {
        icon: Glasses,
        title: "AR / VR / MR",
        description: "Create immersive experiences with cutting-edge augmented and virtual reality.",
        services: ["VR Apps", "Augmented Reality", "3D Visualization", "Training"],
    },
    {
        icon: Sprout,
        title: "Agro-Tech",
        description: "Smart farming solutions with IoT and AI for sustainable agriculture.",
        services: ["Smart Farming", "IoT Sensors", "Crop Monitoring", "Analytics"],
    },
    {
        icon: Briefcase,
        title: "Business Consulting",
        description: "Strategic guidance for growth, operations, and digital transformation.",
        services: ["Strategy Planning", "Process Optimization", "Growth", "Change"],
    },
    {
        icon: Film,
        title: "Media & Production",
        description: "Professional video, photography, and creative content production services.",
        services: ["Video Production", "Photography", "Animation", "Branding"],
    },
    {
        icon: Users,
        title: "Workforce Support",
        description: "Complete HR solutions from recruitment to performance management.",
        services: ["Recruitment", "Training", "HR Management", "Analytics"],
    },
    {
        icon: Shirt,
        title: "Textile",
        description: "Quality textile manufacturing with sustainable practices and custom designs.",
        services: ["Manufacturing", "Design", "Quality Control", "Sustainability"],
    },
    {
        icon: Megaphone,
        title: "Advertising & Branding",
        description: "Build powerful brands with creative strategies and digital marketing.",
        services: ["Brand Strategy", "Digital Marketing", "Creative", "Campaigns"],
    },
    {
        icon: Gift,
        title: "Corporate Gifts",
        description: "Premium corporate gifting with custom merchandise and elegant packaging.",
        services: ["Custom Merchandise", "Gift Hampers", "Branding", "Packaging"],
    },
    {
        icon: GraduationCap,
        title: "Career Guidance",
        description: "Expert career counseling, skill development, and strategic planning.",
        services: ["Career Counseling", "Skill Development", "Resume", "Coaching"],
    },
];

export function DomainsGrid() {
    return (
        <section id="solutions" className="py-20 px-4 bg-brand-yellow">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-6xl font-black text-brand-black uppercase mb-4 tracking-tighter leading-tight">
                        Comprehensive Solutions
                    </h2>
                    <p className="text-xl font-bold text-brand-black/80 max-w-2xl mx-auto">
                        Everything for Everyone, at Any Time.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {domains.map((domain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06 }}
                            whileHover={{ y: -6 }}
                            className="group flex flex-col bg-white border-2 border-brand-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all"
                        >
                            {/* Card Header */}
                            <div className="bg-brand-yellow px-6 py-8 border-b-2 border-brand-black">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-black/10 border-2 border-brand-black/20 flex items-center justify-center flex-shrink-0">
                                        <domain.icon className="w-6 h-6 text-brand-black" />
                                    </div>
                                    <h3 className="text-xl font-black text-brand-black uppercase tracking-tight leading-tight">
                                        {domain.title}
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-brand-black/70 leading-relaxed">
                                    {domain.description}
                                </p>
                            </div>

                            {/* White Bottom with Key Services */}
                            <div className="px-6 py-6 flex-grow">
                                <p className="text-xs font-black text-brand-black uppercase tracking-widest mb-4">
                                    Key Services
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                    {domain.services.map((service, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="text-xs font-semibold text-brand-black/80 bg-gray-100 border border-gray-200 rounded-full px-3 py-1.5 text-center truncate"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
