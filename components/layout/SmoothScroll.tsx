"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Add lenis class to root element
        document.documentElement.classList.add("lenis");

        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExponential
            infinite: false,
        });

        lenisRef.current = lenis;

        // RAF Loop
        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        // Bind custom scroll-linked travel adjustments to the Hero Grid
        const onScroll = () => {
            const scrollY = window.scrollY;
            const gridFloor = document.getElementById("grid-floor");
            const gridCeiling = document.getElementById("grid-ceiling");
            
            if (gridFloor) {
                // Pull floor grid forward dynamically on scroll
                gridFloor.style.transform = `translateX(-50%) rotateX(72deg) translateY(${scrollY * 0.15}px)`;
            }
            if (gridCeiling) {
                // Push ceiling grid backward dynamically on scroll
                gridCeiling.style.transform = `translateX(-50%) rotateX(-72deg) translateY(${-scrollY * 0.15}px)`;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        // Clean up
        return () => {
            document.documentElement.classList.remove("lenis");
            cancelAnimationFrame(rafId);
            window.removeEventListener("scroll", onScroll);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
