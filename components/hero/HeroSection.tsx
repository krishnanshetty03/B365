"use client";

import { DimensionBackground } from "./DimensionBackground";
import { Button } from "@/components/ui/button";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { motion } from "framer-motion";
import { Globe, Users, TrendingUp, ShieldCheck } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative w-full py-28 md:py-36 min-h-[600px] md:min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
            <DimensionBackground />

            {/* Floating Cards - Positioned absolutely in the 3D space */}
            <FloatingCard className="top-[20%] left-[10%] hidden lg:block" delay={0}>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-yellow border-2 border-brand-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <Globe className="w-6 h-6 text-brand-black" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-brand-black uppercase tracking-wider">Global Reach</p>
                        <p className="font-black text-brand-black">50+ Countries</p>
                    </div>
                </div>
            </FloatingCard>

            <FloatingCard className="top-[30%] right-[10%] hidden lg:block" delay={1.5}>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-yellow border-2 border-brand-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <Users className="w-6 h-6 text-brand-black" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-brand-black uppercase tracking-wider">Active Users</p>
                        <p className="font-black text-brand-black">10k+ Businesses</p>
                    </div>
                </div>
            </FloatingCard>

            <FloatingCard className="bottom-[25%] left-[15%] hidden lg:block" delay={0.5}>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-yellow border-2 border-brand-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <TrendingUp className="w-6 h-6 text-brand-black" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-brand-black uppercase tracking-wider">Growth</p>
                        <p className="font-black text-brand-black">+120% YoY</p>
                    </div>
                </div>
            </FloatingCard>

            {/* Main Content */}
            <div className="z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border-2 border-brand-black mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                    <span className="flex h-2 w-2 rounded-full bg-brand-black animate-pulse" />
                    <span className="text-sm font-bold text-brand-black">New: Enterprise Solutions Available</span>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl lg:text-8xl font-black tracking-tighter text-brand-black mb-6 uppercase leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    One Platform.<br />
                    <span className="text-brand-black underline decoration-4 underline-offset-8">
                        Infinite Dimensions.
                    </span>
                </motion.h1>

                <motion.p
                    className="max-w-2xl mx-auto text-lg md:text-2xl font-medium text-brand-black mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    buziness365 manages your entire operation in a unified,
                    immersive workspace. Enter a new dimension of productivity.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                </motion.div>
            </div>

        </section>
    );
}
