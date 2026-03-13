"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FloatingCardProps {
    children: ReactNode;
    className?: string; // For positioning
    delay?: number;
}

export function FloatingCard({ children, className, delay = 0 }: FloatingCardProps) {
    return (
        <motion.div
            className={cn(
                "absolute p-4 rounded-xl bg-white border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: [0, -10, 0],
            }}
            transition={{
                opacity: { duration: 0.5, delay },
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay, // Offset the floating cycle
                },
            }}
        >
            {children}
        </motion.div>
    );
}
