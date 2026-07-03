"use client";

import { ContactForm } from "@/components/ui/ContactForm";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
    { icon: Mail, label: "Email", value: "enquiry@buziness365.com" },
    { icon: MapPin, label: "Presence", value: "India · USA · UK" },
    { icon: Phone, label: "WhatsApp", value: "Connect via WhatsApp" },
    { icon: Clock, label: "Response Time", value: "Within 4 Hours" },
];

export function ContactSection() {
    return (
        <section id="pricing" className="relative py-24 md:py-32 bg-surface dark:bg-surface">
            {/* Scroll target for Contact links */}
            <div id="contact" className="absolute -top-20" />
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow block" />
                        <span className="text-xs font-bold text-brand-black dark:text-white uppercase tracking-widest">Let's Build Together</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black dark:text-white uppercase tracking-tighter leading-none mb-4">
                        Ready to Transform
                        <br />
                        <span className="text-brand-yellow" style={{ WebkitTextStroke: "1.5px #0A0A0A" }}>
                            Your Buziness?
                        </span>
                    </h2>
                    <p className="text-base text-text-muted font-medium max-w-xl mx-auto">
                        Get a custom proposal tailored to your specific needs and scale. We'll respond within 24 hours.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Sidebar */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="p-6 bg-brand-black dark:bg-brand-yellow rounded-2xl mb-6">
                            <p className="text-brand-yellow dark:text-brand-black font-black text-lg uppercase tracking-tight mb-2">
                                Enterprise Ready
                            </p>
                            <p className="text-brand-yellow/70 dark:text-brand-black/70 text-sm font-medium leading-relaxed">
                                Custom pricing for teams of all sizes. From startups to Fortune 500 — we scale with you.
                            </p>
                        </div>

                        {contactInfo.map(info => {
                            const Icon = info.icon;
                            return (
                                <div
                                    key={info.label}
                                    className="flex items-start gap-4 p-4 bg-white dark:bg-surface-alt rounded-xl border border-border-base"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-brand-yellow/15 border border-brand-yellow/30 flex items-center justify-center shrink-0">
                                        <Icon className="w-4 h-4 text-brand-black dark:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">{info.label}</p>
                                        <p className="text-sm font-semibold text-brand-black dark:text-white mt-0.5">{info.value}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        className="lg:col-span-2 bg-white dark:bg-surface-alt rounded-2xl border border-border-base p-6 md:p-8 shadow-sm"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
