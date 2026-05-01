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
    // Duplicate the array to create a seamless loop
    const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

    return (
        <section className="py-20 border-t-2 border-brand-black bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-brand-black uppercase text-center tracking-tighter leading-tight">
                    Our clients
                </h2>
            </div>

            <div className="relative w-full flex overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                
                <motion.div
                    className="flex items-center gap-16 md:gap-32 px-8"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedClients.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 h-14 md:h-24 w-auto relative flex items-center justify-center"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-full w-auto object-contain transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
