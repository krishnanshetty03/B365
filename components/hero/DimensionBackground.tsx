"use client";

import { motion } from "framer-motion";

export function DimensionBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* Adaptive Base Background */}
            <div className="absolute inset-0 bg-background transition-colors duration-300" />

            {/* ── 3D FLOOR GRID ─────────────────────────────────── */}
            <div
                className="absolute inset-0 flex items-end justify-center"
                style={{ perspective: "600px", perspectiveOrigin: "50% 40%" }}
            >
                <motion.div
                    id="grid-floor"
                    className="absolute"
                    style={{
                        width: "280vw",
                        height: "220vh",
                        left: "50%",
                        top: "38%",
                        transform: "translateX(-50%) rotateX(72deg)",
                        transformOrigin: "center top",
                        backgroundImage: [
                            "linear-gradient(to right, rgba(180,150,0,0.18) 1px, transparent 1px)",
                            "linear-gradient(to bottom, rgba(180,150,0,0.18) 1px, transparent 1px)",
                        ].join(", "),
                        backgroundSize: "70px 70px",
                    }}
                    animate={{ backgroundPosition: ["0px 0px", "0px 70px"] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* ── 3D CEILING GRID (subtle, upper half) ─────────── */}
            <div
                className="absolute inset-0 flex items-start justify-center"
                style={{ perspective: "600px", perspectiveOrigin: "50% 60%" }}
            >
                <motion.div
                    id="grid-ceiling"
                    className="absolute opacity-40"
                    style={{
                        width: "280vw",
                        height: "220vh",
                        left: "50%",
                        top: "-38%",
                        transform: "translateX(-50%) rotateX(-72deg)",
                        transformOrigin: "center bottom",
                        backgroundImage: [
                            "linear-gradient(to right, rgba(180,150,0,0.12) 1px, transparent 1px)",
                            "linear-gradient(to bottom, rgba(180,150,0,0.12) 1px, transparent 1px)",
                        ].join(", "),
                        backgroundSize: "70px 70px",
                    }}
                    animate={{ backgroundPosition: ["0px 0px", "0px 70px"] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* ── Vertical side lines (depth effect) ──────────── */}
            <div className="absolute inset-0 flex items-center justify-center">
                {[-5, -3, -1, 1, 3, 5].map((n, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-0 bottom-0 w-px"
                        style={{
                            left: `calc(50% + ${n * 12}%)`,
                            background: "linear-gradient(to bottom, transparent 0%, rgba(180,150,0,0.15) 40%, rgba(180,150,0,0.08) 60%, transparent 100%)",
                        }}
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    />
                ))}
            </div>

            {/* ── Central yellow radial glow ────────────────────── */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse 70% 50% at 50% 55%, rgba(255,224,0,0.12) 0%, transparent 70%)",
                }}
            />

            {/* ── Edge fade dynamically matching light/dark mode ── */}
            <div className="absolute inset-0"
                style={{
                    background: [
                        "linear-gradient(to bottom, var(--background) 0%, transparent 20%, transparent 70%, var(--background) 100%)",
                        "linear-gradient(to right, var(--background) 0%, transparent 15%, transparent 85%, var(--background) 100%)",
                    ].join(", "),
                }}
            />
        </div>
    );
}
