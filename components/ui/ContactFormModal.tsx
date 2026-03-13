"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={handleBackdropClick}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-brand-black/80 backdrop-blur-sm" />

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-lg"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.95 }}
                        transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
                    >
                        {/* Shadow layer */}
                        <div className="absolute inset-0 bg-brand-black translate-x-3 translate-y-3" />

                        {/* Card */}
                        <div className="relative bg-brand-yellow border-3 border-brand-black p-8 overflow-y-auto max-h-[90vh]"
                            style={{ borderWidth: "3px" }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 w-10 h-10 bg-brand-black text-brand-yellow flex items-center justify-center hover:bg-gray-800 transition-colors shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="mb-6">
                                <div className="inline-block px-3 py-1 border-2 border-brand-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4 transform -rotate-1">
                                    <span className="font-bold text-brand-black uppercase tracking-wider text-sm">
                                        Get Pricing
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-brand-black uppercase tracking-tighter">
                                    Let&apos;s Talk<br />
                                    <span className="text-white" style={{ WebkitTextStroke: "2px black" }}>
                                        Business
                                    </span>
                                </h2>
                                <p className="text-sm font-medium text-brand-black/70 mt-2">
                                    Tell us about your needs and we&apos;ll get back to you with custom pricing.
                                </p>
                            </div>

                            <ContactForm onClose={handleClose} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
