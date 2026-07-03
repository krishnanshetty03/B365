"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { domains, categoryMeta, categoryOrder, getDomainsByCategory, type DomainDetail } from "@/lib/domains";

// ── MODAL ─────────────────────────────────────────────────────────────────────
function DomainModal({ domain, onClose }: { domain: DomainDetail; onClose: () => void }) {
    const Icon = domain.icon;
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
            <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <motion.div
                className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto z-10
                           rounded-3xl border border-[#E8E0D2] dark:border-white/10
                           bg-gradient-to-b from-white to-[#FFFDF7] dark:from-zinc-900 dark:to-zinc-950
                           shadow-[0_32px_80px_rgba(0,0,0,0.22)]"
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
            >
                <div className="px-8 pt-8 pb-6 border-b border-[#EDE6DA] dark:border-white/10">
                    <div className="flex items-start justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#111111] dark:bg-brand-yellow flex items-center justify-center
                                        shadow-[0_0_24px_rgba(255,224,0,0.25)]">
                            <Icon className="w-6 h-6 text-brand-yellow dark:text-black" />
                        </div>
                        <button onClick={onClose}
                            className="w-9 h-9 rounded-full bg-[#F3EEE4] dark:bg-white/5 border border-[#E0D8CC] dark:border-white/10
                                       hover:bg-[#EDE6DA] dark:hover:bg-white/10 flex items-center justify-center transition-colors">
                            <X className="w-4 h-4 text-[#555] dark:text-white/60" />
                        </button>
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#999] dark:text-white/40
                                  bg-[#F5F0E8] dark:bg-white/5 border border-[#E0D8CC] dark:border-white/10 px-2.5 py-1 rounded-full inline-block mb-3">
                        {domain.category}
                    </p>
                    <h2 className="text-2xl font-bold text-[#111111] dark:text-white tracking-tight mb-1">{domain.title}</h2>
                    <p className="text-sm text-[#666666] dark:text-white/50 italic leading-relaxed">{domain.tagline}</p>
                </div>

                <div className="px-8 py-6 space-y-6">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#AAAAAA] dark:text-white/30 mb-2">Overview</p>
                        <p className="text-[13px] text-[#555555] dark:text-white/70 leading-relaxed">{domain.overview}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {domain.stats.map((s, i) => (
                            <div key={i} className="bg-[#F5F0E8] dark:bg-white/[0.03] border border-[#E8E0D2] dark:border-white/5 rounded-2xl p-3 text-center">
                                <p className="text-xl font-bold text-[#111111] dark:text-white">{s.value}</p>
                                <p className="text-[10px] text-[#888888] dark:text-white/40 mt-0.5 leading-tight">{s.label}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#AAAAAA] dark:text-white/30 mb-3">What&apos;s Included</p>
                        <div className="grid grid-cols-2 gap-2">
                            {domain.features.map((f, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow mt-0.5 shrink-0" />
                                    <span className="text-[12px] text-[#555555] dark:text-white/70 leading-snug">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#AAAAAA] dark:text-white/30 mb-3">Use Cases</p>
                        <div className="grid grid-cols-2 gap-2">
                            {domain.useCases.map((uc, i) => (
                                <div key={i} className="bg-[#F5F0E8] dark:bg-white/[0.03] border border-[#E8E0D2] dark:border-white/5 rounded-xl p-3">
                                    <p className="text-[11px] font-bold text-[#111111] dark:text-white mb-0.5">{uc.title}</p>
                                    <p className="text-[10px] text-[#666666] dark:text-white/50 leading-snug">{uc.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                        <Link href="/#contact"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5
                                       bg-[#111111] dark:bg-brand-yellow text-brand-yellow dark:text-black font-bold uppercase tracking-widest text-xs
                                       rounded-xl hover:bg-black dark:hover:bg-brand-yellow/90 transition-colors">
                            Get Started <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/#contact"
                            className="inline-flex items-center justify-center px-6 py-3.5
                                       border border-[#E8E0D2] dark:border-white/10 text-[#444444] dark:text-white/70 font-bold uppercase tracking-widest text-xs
                                       rounded-xl hover:border-[#111111] dark:hover:border-white hover:text-[#111111] dark:hover:text-white transition-colors">
                            Talk to Us
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ── PREMIUM SOLUTION CARD ─────────────────────────────────────────────────────
function SolutionCard({ domain, onLearnMore }: { domain: DomainDetail; onLearnMore: () => void }) {
    const Icon = domain.icon;
    const meta = categoryMeta[domain.categoryId];
    const router = useRouter();
    const [clicking, setClicking] = useState(false);

    // 3D Tilt Hook state
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        // Relative mouse coordinates from center
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;

        // Custom tilt normalization (max 10 degrees)
        const rx = -(mouseY / (height / 2)) * 10;
        const ry = (mouseX / (width / 2)) * 10;

        setCoords({ x: ry, y: rx });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        setCoords({ x: 0, y: 0 });
    };

    const handleLearnMore = (e: React.MouseEvent) => {
        e.preventDefault();
        setClicking(true);
        setTimeout(() => {
            router.push(`/solutions/${domain.id}`);
        }, 300);
    };

    return (
        <motion.div
            whileTap={{ scale: 0.97 }}
            animate={clicking ? { scale: 0.96, opacity: 0.65 } : { opacity: 1 }}
            transition={{ type: "spring", stiffness: 360, damping: 26 }}
            className="group relative bg-white dark:bg-zinc-900/70 rounded-2xl border border-[#E8E0D2] dark:border-white/[0.07] hover:border-brand-yellow/60 dark:hover:border-brand-yellow/40 overflow-hidden flex flex-col h-full cursor-pointer"
            style={{ 
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)",
                transform: isHovered ? `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale(1.02)` : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                transformStyle: "preserve-3d",
                transition: isHovered ? "none" : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleLearnMore}
        >
            {/* Animated top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-yellow via-brand-yellow/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-350 origin-left" />

            {/* Hover glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

            {/* Click flash overlay */}
            <motion.div
                className="absolute inset-0 bg-brand-yellow/12 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: clicking ? 1 : 0 }}
                transition={{ duration: 0.15 }}
            />

            {/* Card Body */}
            <div className="relative p-6 flex flex-col flex-1" style={{ transform: "translateZ(30px)" }}>
                {/* Top row: icon + category badge */}
                <div className="flex items-start justify-between mb-5">
                    <motion.div
                        className="w-12 h-12 rounded-xl bg-brand-yellow flex items-center justify-center border border-black/10 shrink-0 shadow-sm"
                        whileHover={{ rotate: [-4, 4, -4, 0], scale: 1.1 }}
                        transition={{ duration: 0.45 }}
                    >
                        <Icon className="w-6 h-6 text-black" />
                    </motion.div>
                    <span className="text-[9px] font-semibold uppercase tracking-widest text-[#888888] dark:text-white/40
                                     bg-[#F5F0E8] dark:bg-white/5 border border-[#E0D8CC] dark:border-white/10 px-2.5 py-1 rounded-full mt-1">
                        {meta.label}
                    </span>
                </div>

                <div className="flex-1 mb-4">
                    <h3 className="text-[17px] font-bold text-[#111111] dark:text-white tracking-tight leading-snug mb-2 group-hover:text-brand-black transition-colors">
                        {domain.title}
                    </h3>
                    <p className="text-[13px] text-[#666666] dark:text-white/55 leading-relaxed line-clamp-2 font-normal">
                        {domain.tagline}
                    </p>
                </div>

                {/* Service chips */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                    {domain.services.slice(0, 3).map((s, i) => (
                        <span key={i}
                            className="text-[10px] font-semibold text-[#555555] dark:text-white/60
                                       bg-[#F3EEE4] dark:bg-white/[0.04] border border-[#E0D8CC] dark:border-white/10
                                       px-2.5 py-0.5 rounded-full tracking-wide">
                            {s}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom: Learn More */}
            <div className="relative px-6 pb-6" style={{ transform: "translateZ(10px)" }}>
                <div className="pt-4 border-t border-[#EDE6DA] dark:border-white/[0.08]">
                    <span className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#333333] dark:text-white/70 group-hover:text-brand-yellow transition-colors duration-200">
                        <span>Learn More</span>
                        <motion.span
                            animate={{ x: clicking ? 6 : 0 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="inline-flex"
                        >
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                        </motion.span>
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

// ── MAIN SECTION ──────────────────────────────────────────────────────────────
export function DomainsGrid() {
    const [activeDomain, setActiveDomain] = useState<DomainDetail | null>(null);

    return (
        <>
            <section id="solutions" className="py-24 bg-[#F7F4EC] dark:bg-zinc-950 transition-colors duration-300">
                <div className="container mx-auto px-4 relative z-10">

                    {/* Section header */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5
                                        bg-brand-yellow/10 border border-brand-yellow/25">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow inline-block" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#555555] dark:text-white/60">Solutions</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] dark:text-white uppercase tracking-tighter leading-none mb-4">
                            A Complete <br />
                            <span className="text-brand-yellow" style={{ WebkitTextStroke: "2px #0A0A0A" }}>
                                Business Ecosystem
                            </span>
                        </h2>
                        <p className="text-[15px] text-[#666666] dark:text-white/60 max-w-lg leading-relaxed">
                            Every solution your business needs — organized by area so you can find
                            exactly what moves you forward.
                        </p>
                    </motion.div>

                    {/* Category groups */}
                    <div className="space-y-12">
                        {categoryOrder.map((catId) => {
                            const meta = categoryMeta[catId];
                            const catDomains = getDomainsByCategory(catId);
                            const isThreeCards = catDomains.length === 3;

                            return (
                                <motion.div
                                    key={catId}
                                    id={catId}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                >
                                    {/* Category heading */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="w-[3px] h-6 rounded-full bg-brand-yellow shrink-0" />
                                        <h3 className="text-[17px] font-bold text-[#111111] dark:text-white tracking-tight">
                                            {meta.label}
                                        </h3>
                                        <div className="flex-1 h-px bg-[#E8E0D2] dark:bg-white/10" />
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#BBBBBB] dark:text-white/30 shrink-0">
                                            {catDomains.length} Solutions
                                        </span>
                                    </div>

                                    {/* Cards grid — 3+2 grid layout for Industry Solutions to avoid trailing spaces, normal responsive grid for others */}
                                    {catId === "industry" ? (
                                        <div className="space-y-5">
                                            {/* Row 1: 3 cards */}
                                            <motion.div
                                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full"
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, margin: "-30px" }}
                                                variants={{
                                                    hidden: {},
                                                    visible: { transition: { staggerChildren: 0.09 } },
                                                }}
                                            >
                                                {catDomains.slice(0, 3).map(domain => (
                                                    <motion.div
                                                        key={domain.id}
                                                        className="h-full"
                                                        variants={{
                                                            hidden:  { opacity: 0, y: 16 },
                                                            visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                                                        }}
                                                    >
                                                        <SolutionCard
                                                            domain={domain}
                                                            onLearnMore={() => setActiveDomain(domain)}
                                                        />
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                            {/* Row 2: 2 cards centered */}
                                            <motion.div
                                                className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:w-2/3 lg:mx-auto"
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, margin: "-30px" }}
                                                variants={{
                                                    hidden: {},
                                                    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.27 } },
                                                }}
                                            >
                                                {catDomains.slice(3).map(domain => (
                                                    <motion.div
                                                        key={domain.id}
                                                        className="h-full"
                                                        variants={{
                                                            hidden:  { opacity: 0, y: 16 },
                                                            visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                                                        }}
                                                    >
                                                        <SolutionCard
                                                            domain={domain}
                                                            onLearnMore={() => setActiveDomain(domain)}
                                                        />
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </div>
                                    ) : (
                                        <motion.div
                                            className={
                                                isThreeCards
                                                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full"
                                                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                                            }
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: "-30px" }}
                                            variants={{
                                                hidden: {},
                                                visible: { transition: { staggerChildren: 0.09 } },
                                            }}
                                        >
                                            {catDomains.map(domain => (
                                                <motion.div
                                                    key={domain.id}
                                                    className="h-full"
                                                    variants={{
                                                        hidden:  { opacity: 0, y: 16 },
                                                        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                                                    }}
                                                >
                                                    <SolutionCard
                                                        domain={domain}
                                                        onLearnMore={() => setActiveDomain(domain)}
                                                    />
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        className="mt-16 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6
                                   border-t border-[#E8E0D2] dark:border-white/10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <p className="text-[15px] font-semibold text-[#111111] dark:text-white mb-1">
                                Not sure which solution fits your business?
                            </p>
                            <p className="text-[13px] text-[#666666] dark:text-white/60">
                                Book a free Business Audit — we&apos;ll map the right solutions to your specific needs.
                            </p>
                        </div>
                        <Link href="/business-audit"
                            className="group inline-flex items-center gap-2 px-6 py-3
                                       bg-[#111111] dark:bg-brand-yellow text-brand-yellow dark:text-black font-bold uppercase tracking-widest text-[10px]
                                       rounded-xl hover:bg-black dark:hover:bg-brand-yellow/90 transition-colors shrink-0">
                            Book a Business Audit
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {activeDomain && (
                    <DomainModal domain={activeDomain} onClose={() => setActiveDomain(null)} />
                )}
            </AnimatePresence>
        </>
    );
}
