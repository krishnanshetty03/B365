"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, ChevronRight, Zap } from "lucide-react";
import { useEffect } from "react";

export interface ProductDetail {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    tagline: string;
    overview: string;
    color: string;
    features: string[];
    useCases: { title: string; desc: string }[];
    stats: { label: string; value: string }[];
}

interface ProductModalProps {
    product: ProductDetail | null;
    onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
    // Lock body scroll when open
    useEffect(() => {
        if (product) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [product]);

    // Close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    return (
        <AnimatePresence>
            {product && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal Panel */}
                    <motion.div
                        key="modal"
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none"
                    >
                        <motion.div
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl pointer-events-auto"
                            initial={{ opacity: 0, scale: 0.94, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 28 }}
                        >
                            {/* Header Strip */}
                            <div className={`${product.color} relative px-8 pt-8 pb-10 rounded-t-2xl overflow-hidden`}>
                                <div className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                                        backgroundSize: "32px 32px",
                                    }}
                                />
                                <div className="relative z-10 flex items-start justify-between gap-4">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/10 rounded-full mb-4">
                                            <Zap className="w-3 h-3 text-black/70" />
                                            <span className="text-xs font-bold text-black/70 uppercase tracking-widest">buziness365 Product</span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none mb-2">
                                            {product.title}
                                        </h2>
                                        <p className="text-base font-semibold text-black/70 max-w-xl">{product.tagline}</p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="flex-shrink-0 w-10 h-10 rounded-xl bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
                                        aria-label="Close"
                                    >
                                        <X className="w-5 h-5 text-black" />
                                    </button>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="px-8 py-8 space-y-10">

                                {/* Stats Row */}
                                <div className="grid grid-cols-3 gap-4">
                                    {product.stats.map(stat => (
                                        <div key={stat.label} className="text-center p-4 rounded-xl bg-surface border border-border-base">
                                            <p className="text-2xl md:text-3xl font-black text-brand-black dark:text-white">{stat.value}</p>
                                            <p className="text-xs font-semibold text-text-muted mt-1 leading-snug">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Overview */}
                                <div>
                                    <h3 className="text-xs font-black text-text-muted uppercase tracking-widest mb-3">Overview</h3>
                                    <p className="text-base text-brand-black/80 dark:text-white/70 leading-relaxed">{product.overview}</p>
                                </div>

                                {/* Features Grid */}
                                <div>
                                    <h3 className="text-xs font-black text-text-muted uppercase tracking-widest mb-4">Key Features</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {product.features.map(f => (
                                            <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border-base">
                                                <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" style={{ filter: "drop-shadow(0 0 4px rgba(255,224,0,0.6))" }} />
                                                <span className="text-sm font-semibold text-brand-black dark:text-white/80">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Use Cases */}
                                <div>
                                    <h3 className="text-xs font-black text-text-muted uppercase tracking-widest mb-4">Who It's For</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {product.useCases.map(uc => (
                                            <div key={uc.title} className="flex gap-3 p-4 rounded-xl border border-border-base hover:border-brand-yellow/50 transition-colors group">
                                                <ChevronRight className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                                                <div>
                                                    <p className="text-sm font-black text-brand-black dark:text-white">{uc.title}</p>
                                                    <p className="text-xs text-text-muted mt-0.5 leading-snug">{uc.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Strip */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border-base">
                                    <a
                                        href="#pricing"
                                        onClick={onClose}
                                        className="group flex-1 flex items-center justify-center gap-2 bg-brand-black text-brand-yellow font-black uppercase tracking-widest py-4 text-sm rounded-xl hover:bg-brand-yellow hover:text-brand-black transition-all duration-200"
                                    >
                                        Get Started with {product.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <a
                                        href="#pricing"
                                        onClick={onClose}
                                        className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-black dark:border-white/20 text-brand-black dark:text-white font-black uppercase tracking-widest text-sm rounded-xl hover:bg-surface transition-all duration-200"
                                    >
                                        Book a Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
