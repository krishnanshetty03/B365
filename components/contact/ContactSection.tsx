"use client";

import { ContactForm } from "@/components/ui/ContactForm";

export function ContactSection() {
    return (
        <section id="pricing" className="py-24 md:py-36 bg-brand-yellow">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Visual anchor / decoration */}
                <div className="flex justify-center mb-12">
                    <div className="w-16 h-4 bg-brand-black skew-x-12" />
                </div>

                <div className="bg-brand-yellow border-3 border-brand-black p-4 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
                    style={{ borderWidth: "3px" }}>

                    {/* Shadow layer to ensure it stands out from the yellow background */}
                    <div className="absolute inset-0 bg-white -translate-x-3 -translate-y-3 -z-10 border-3 border-brand-black" style={{ borderWidth: "3px" }} />

                    {/* Header */}
                    <div className="mb-10 text-center relative z-10">
                        <div className="inline-block px-3 py-1 border-2 border-brand-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-6 transform -rotate-2">
                            <span className="font-bold text-brand-black uppercase tracking-wider text-sm">
                                Let's Build Together
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-6xl font-black text-brand-black uppercase tracking-tighter leading-tight">
                            Ready to Transform<br className="hidden md:block" />
                            <span className="text-white" style={{ WebkitTextStroke: "2px black" }}>
                                Your Buziness?
                            </span>
                        </h2>
                        <p className="text-sm md:text-base font-medium text-brand-black/70 mt-4 max-w-2xl mx-auto">
                            Get a custom pricing proposal tailored to your specific operational needs and scale.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="relative z-10">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
