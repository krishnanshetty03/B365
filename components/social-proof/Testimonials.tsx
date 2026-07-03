"use client";

import { motion } from "framer-motion";

const clients = [
    { name: "Vyntrix", logo: "/clients/vyntrix.png" },
    { name: "Jade Media Works", logo: "/clients/jade-final.png" },
    { name: "Dr. Dere", logo: "/clients/dr-dere.png" },
    { name: "Global Solutions", logo: "/clients/client-1.png" },
    { name: "Partner Plus", logo: "/clients/client-2.png" },
];

export function Testimonials() {
    const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

    return (
        <section className="py-16 bg-surface dark:bg-surface border-y border-border-base overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <p className="text-xs font-black text-text-muted uppercase tracking-widest mb-1">
                    Trusted by businesses worldwide
                </p>
                <h2 className="text-2xl md:text-3xl font-black text-brand-black dark:text-white uppercase tracking-tighter">
                    Our Clients
                </h2>
            </div>

            <div className="relative w-full flex overflow-hidden">
                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-surface dark:from-surface to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-surface dark:from-surface to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex items-center gap-12 md:gap-24 px-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: { repeat: Infinity, repeatType: "loop", duration: 22, ease: "linear" },
                    }}
                >
                    {duplicatedClients.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 h-10 md:h-14 w-auto relative flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
