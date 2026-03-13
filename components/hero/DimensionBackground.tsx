"use client";

import { motion } from "framer-motion";

export function DimensionBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* 
         BACKGROUND COLOR CONTAINER 
         We separate the color from the grid to ensure stacking is correct.
      */}
            <div className="absolute inset-0 bg-brand-yellow" />

            {/* 
         3D SCENE CONTAINER
         Centered perspective.
      */}
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ perspective: "1000px" }}
            >
                {/* FLOOR GRID */}
                <motion.div
                    className="absolute w-[300vw] h-[300vh] bg-[size:60px_60px]"
                    style={{
                        backgroundImage: "linear-gradient(to right, #000 2px, transparent 2px), linear-gradient(to bottom, #000 2px, transparent 2px)",
                        // Centering logic:
                        left: "50%",
                        top: "50%",
                        // Move origin to center, rotate floor X, pull it down slightly
                        transform: "translate(-50%, -15%) rotateX(70deg) translateZ(0)",
                        transformOrigin: "center center",
                    }}
                    animate={{
                        backgroundPosition: ["0px 0px", "0px 60px"],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* CEILING GRID (Optional - Mirroring Floor for Tunnel effect) */}
                <motion.div
                    className="absolute w-[300vw] h-[300vh] bg-[size:60px_60px] opacity-50"
                    style={{
                        backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                        left: "50%",
                        top: "50%",
                        // INVERTED rotation for ceiling
                        transform: "translate(-50%, -85%) rotateX(-70deg) translateZ(0)",
                        transformOrigin: "center center",
                    }}
                    animate={{
                        backgroundPosition: ["0px 0px", "0px 60px"],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* HORIZON GLOW - Hides the sharp meeting point */}
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[radial-gradient(circle_at_center,transparent_0%,#FFE000_85%)]" />

        </div>
    );
}
