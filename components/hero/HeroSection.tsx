"use client";

import { DimensionBackground } from "./DimensionBackground";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Globe, Zap, Clock } from "lucide-react";

const stats = [
    { icon: Globe,  value: "3",     label: "Countries" },
    { icon: Zap,    value: "6",     label: "AI Products" },
    { icon: Clock,  value: "24/7",  label: "Always On" },
];

const fadeUp = {
    hidden:  { opacity: 0, y: 28 },
    show:    { opacity: 1, y: 0 },
};

const stagger = {
    hidden: {},
    show:   { transition: { staggerChildren: 0.12 } },
};

export function HeroSection() {
    return (
        <section className="relative w-full pt-12 pb-24 md:pt-20 md:pb-32 flex flex-col items-center justify-center overflow-hidden">
            <DimensionBackground />

            <div className="relative z-10 container mx-auto px-4 text-center">

                {/* Live badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-black border border-brand-black mb-8 shadow-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-brand-yellow animate-pulse" />
                    <span className="text-sm font-bold text-brand-yellow tracking-wide">Enterprise Solutions — Now Available</span>
                </motion.div>

                {/* Headline */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className="mb-8"
                >
                    <motion.h1
                        variants={fadeUp}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-[88px] font-black tracking-tighter leading-[0.92] mb-3 uppercase"
                    >
                        <span className="text-brand-black dark:text-white block">
                            A Marketplace &amp;
                        </span>
                        <span className="text-brand-black dark:text-white block">
                            Operating System
                        </span>
                        <span className="text-brand-black dark:text-white block">
                            Built for Business.
                        </span>
                        <span
                            className="text-brand-yellow block mt-2 text-5xl sm:text-6xl md:text-8xl lg:text-[96px] drop-shadow-[0_0_30px_rgba(245,200,0,0.3)] animate-pulse"
                            style={{ WebkitTextStroke: "1px #0A0A0A" }}
                        >
                            365 Days a Year.
                        </span>
                    </motion.h1>
                </motion.div>

                {/* Subheadline */}
                <motion.p
                    className="max-w-2xl mx-auto text-base md:text-lg font-medium text-brand-black/65 dark:text-white/55 mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.38 }}
                >
                    AI products, business solutions, and automation tools —
                    built for every business, everywhere.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a
                        href="#solutions"
                        className="ripple-on-click group inline-flex items-center gap-2 bg-brand-black text-brand-yellow font-black uppercase tracking-widest px-8 py-4 text-sm border-2 border-brand-black shadow-[4px_4px_0px_0px_#F5C800] hover:shadow-[1px_1px_0px_0px_#F5C800] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 rounded-xl"
                    >
                        Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="/#contact"
                        className="group inline-flex items-center gap-2 bg-transparent text-brand-black dark:text-white font-black uppercase tracking-widest px-8 py-4 text-sm border-2 border-brand-black/20 dark:border-white/20 hover:border-brand-yellow hover:text-brand-yellow transition-all duration-200 rounded-xl"
                    >
                        Book a Free Audit
                    </a>
                </motion.div>

                {/* Stats Strip */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.62 }}
                >
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={i}
                                className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-brand-black/10 dark:border-white/10 rounded-full shadow-sm"
                                whileHover={{ scale: 1.04, y: -2 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            >
                                <Icon className="w-3.5 h-3.5 text-brand-yellow" />
                                <span className="text-xs font-black text-brand-black dark:text-white tracking-wide">{stat.value}</span>
                                <span className="text-xs font-medium text-brand-black/50 dark:text-white/40">{stat.label}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Location + Email */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.75 }}
                >
                    <div className="flex items-center gap-2 text-brand-black/45 dark:text-white/35">
                        <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                        <span className="text-sm font-semibold tracking-wide">India &nbsp;·&nbsp; USA &nbsp;·&nbsp; UK</span>
                    </div>
                    <div className="w-px h-4 bg-brand-black/20 dark:bg-white/20 hidden sm:block" />
                    <a
                        href="mailto:enquiry@buziness365.com"
                        className="flex items-center gap-2 text-brand-black/45 dark:text-white/35 hover:text-brand-black dark:hover:text-white transition-colors"
                    >
                        <Mail className="w-3.5 h-3.5 text-brand-yellow" />
                        <span className="text-sm font-semibold tracking-wide">enquiry@buziness365.com</span>
                    </a>
                </motion.div>

                {/* Highlighted Services */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-3 mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.85 }}
                >
                    {["AI-BaaS", "PaaS", "iPaaS", "SaaS"].map((service) => (
                        <motion.span
                            key={service}
                            className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-brand-yellow bg-brand-yellow/10 dark:bg-brand-yellow/5 border border-brand-yellow/30 shadow-[0_0_15px_rgba(245,200,0,0.08)] select-none hover:bg-brand-yellow/20 hover:border-brand-yellow/50 transition-colors"
                            whileHover={{ scale: 1.05, y: -1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                            {service}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
