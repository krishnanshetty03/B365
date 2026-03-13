"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    { quote: "Their mentorship and resource-sharing in the incubation phase were pivotal. We secured our Series A funding.", author: "Sarah Johnson", role: "CEO, TechStartup Inc" },
    { quote: "Our data infrastructure transformation was seamless. We can now process 10x more data with 40% less overhead.", author: "Michael Chen", role: "CTO, DataFlow" },
    { quote: "The AR solutions they developed for our store completely changed how customers interact with products.", author: "Emily Rodriguez", role: "Marketing Dir, RetailCorp" },
    { quote: "Integrating their IoT systems into our farms has seen a 30% increase in yield and reduction in water usage.", author: "David Kumar", role: "Ops Head, AgriGrowth" },
];

export function Testimonials() {
    return (
        <section className="py-20 border-t-2 border-brand-black bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-black text-brand-black uppercase mb-12 text-center tracking-tighter">
                    What Our Partners Say
                </h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="w-full md:w-[45%] lg:w-[22%] bg-brand-yellow p-6 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative"
                        >
                            <Quote className="w-8 h-8 text-brand-black mb-4" />
                            <p className="text-lg font-bold text-brand-black mb-6 leading-tight">"{test.quote}"</p>
                            <div className="border-t-2 border-brand-black pt-4">
                                <p className="font-black text-brand-black uppercase">{test.author}</p>
                                <p className="text-xs font-bold text-brand-black/70 uppercase tracking-widest">{test.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
