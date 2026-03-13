"use client";

import { motion } from "framer-motion";
import { Workflow, MessageSquare, Mic, Glasses, Linkedin, Clapperboard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
    {
        icon: Workflow,
        title: "Workflows",
        description: "Operates through intelligent, modular AI workflows where multiple specialized agents collaborate to complete real business tasks end-to-end — not just single actions."
    },
    {
        icon: MessageSquare,
        title: "Chatbot",
        description: "Intelligent AI assistant that instantly engages website visitors, answers questions, captures leads, books appointments, and provides 24/7 support — automating conversations while delivering a smooth, human-like experience."
    },
    {
        icon: Mic,
        title: "Voice Agent",
        description: "Advanced AI-powered calling system that communicates fluently in multiple languages across industries like hospitals, clinics, manufacturing industries, real estate, education, retail, and more."
    },
    {
        icon: Glasses,
        title: "AR and VR",
        description: "Immersive augmented and virtual reality solutions for training, visualization, and interactive customer experiences."
    },
    {
        icon: Linkedin,
        title: "Linkedin Automation",
        description: "Post automation for businesses for organic content. Build authority and engage your audience automatically."
    },
    {
        icon: Clapperboard,
        title: "Media & Production",
        description: "Generate high-quality content and marketing materials in 1 hour. Streamline your creative pipeline with AI."
    }
];

export function ProductsSection() {
    return (
        <section id="products" className="py-24 px-4 bg-brand-yellow relative overflow-hidden">
            {/* Section Divider Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-black" />

            <div className="container mx-auto">
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-2xl">
                        <div className="inline-block px-4 py-1.5 border-2 border-brand-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 transform -rotate-2">
                            <span className="font-bold text-brand-black uppercase tracking-wider">Our Core Products</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-brand-black uppercase tracking-tighter mb-6">
                            Intelligent <br />
                            <span className="text-white text-stroke-2">Tools</span>
                        </h2>
                        <p className="text-xl font-bold text-brand-black/80">
                            A suite of powerful AI-driven tools designed to automate, engage, and create.
                        </p>
                    </div>

                 </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative h-full"
                        >
                            {/* Card Background Shadow */}
                            <div className="absolute inset-0 bg-brand-black translate-x-2 translate-y-2" />

                            {/* Card Content */}
                            <div className="relative h-full bg-white border-2 border-brand-black p-8 flex flex-col transition-transform hover:-translate-y-1 hover:-translate-x-1">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-4 bg-brand-yellow border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        <product.icon className="w-8 h-8 text-brand-black" />
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-brand-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="w-5 h-5 text-brand-black -rotate-45 group-hover:rotate-0 transition-transform" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-brand-black uppercase mb-4">{product.title}</h3>
                                <p className="text-base font-medium text-brand-black/90 leading-relaxed flex-grow">
                                    {product.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
