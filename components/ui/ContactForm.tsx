"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
    onClose?: () => void;
    source?: "general" | "audit" | "business-os";
}

export function ContactForm({ onClose, source = "general" }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [serverErrorMessage, setServerErrorMessage] = useState("");

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.message.trim()) newErrors.message = "Please enter your requirements or message";

        setErrors(newErrors);
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setServerErrorMessage("");

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            // Find first field with error and focus it
            const firstErrorField = Object.keys(validationErrors)[0];
            const element = document.getElementsByName(firstErrorField)[0] as HTMLInputElement | HTMLTextAreaElement;
            if (element) element.focus();
            return;
        }

        setStatus("loading");
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                    subject: source === "audit"
                        ? `New AI & Business Audit Inquiry from ${formData.name}`
                        : source === "business-os"
                        ? `New Business OS Inquiry from ${formData.name}`
                        : `New Pricing Inquiry from ${formData.name}`,
                    from_name: "buziness365 Website",
                    ...formData,
                    company: formData.company || "Not provided",
                    phone: formData.phone || "Not provided",
                }),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", company: "", phone: "", message: "" });
            } else {
                setStatus("error");
                setServerErrorMessage(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setServerErrorMessage("Unable to connect to the email service. Please check your connection.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    if (status === "success") {
        return (
            <motion.div
                className="flex flex-col items-center justify-center py-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="w-20 h-20 bg-brand-black rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-brand-yellow" />
                </div>
                <h3 className="text-2xl font-black text-brand-black uppercase mb-2">
                    Message Sent!
                </h3>
                <p className="text-brand-black/70 font-medium mb-6">
                    We&apos;ll get back to you within 24 hours.
                </p>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="px-6 py-3 bg-brand-black text-brand-yellow font-bold uppercase tracking-wider border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                    >
                        Close
                    </button>
                )}
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
                <label className="block text-xs font-black text-brand-black uppercase tracking-wider mb-1.5">
                    Name *
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 bg-white border-2 font-medium text-brand-black placeholder:text-brand-black/40 focus:outline-none focus:ring-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all ${errors.name ? "border-red-500" : "border-brand-black"
                        }`}
                />
                {errors.name && (
                    <p className="text-red-600 text-xs font-bold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <label className="block text-xs font-black text-brand-black uppercase tracking-wider mb-1.5">
                    Email *
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={`w-full px-4 py-3 bg-white border-2 font-medium text-brand-black placeholder:text-brand-black/40 focus:outline-none focus:ring-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all ${errors.email ? "border-red-500" : "border-brand-black"
                        }`}
                />
                {errors.email && (
                    <p className="text-red-600 text-xs font-bold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                )}
            </div>

            {/* Company & Phone row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-black text-brand-black uppercase tracking-wider mb-1.5">
                        Company
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full px-4 py-3 bg-white border-2 border-brand-black font-medium text-brand-black placeholder:text-brand-black/40 focus:outline-none focus:ring-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all"
                    />
                </div>
                <div>
                    <label className="block text-xs font-black text-brand-black uppercase tracking-wider mb-1.5">
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-white border-2 border-brand-black font-medium text-brand-black placeholder:text-brand-black/40 focus:outline-none focus:ring-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all"
                    />
                </div>
            </div>

            {/* Message */}
            <div>
                <label className="block text-xs font-black text-brand-black uppercase tracking-wider mb-1.5">
                    Message *
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                        source === "audit"
                            ? "Tell us about your business operations, the software/tools you currently use, and what workflows or AI integrations you want to audit..."
                            : source === "business-os"
                            ? "Tell us about your business modules, how many users you have, and what integrations or features you need built inside your Business OS..."
                            : "Tell us about your requirements, team size, and what solutions interest you..."
                    }
                    rows={4}
                    className={`w-full px-4 py-3 bg-white border-2 font-medium text-brand-black placeholder:text-brand-black/40 focus:outline-none focus:ring-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] transition-all resize-none ${errors.message ? "border-red-500" : "border-brand-black"
                        }`}
                />
                {errors.message && (
                    <p className="text-red-600 text-xs font-bold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                )}
            </div>

            {/* Error banner */}
            {status === "error" && (
                <motion.div
                    className="p-3 bg-red-100 border-2 border-red-500 flex items-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <p className="text-red-700 text-sm font-bold">
                        {serverErrorMessage || "Something went wrong. Please try again."}
                    </p>
                </motion.div>
            )}

            {/* Submit */}
            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-brand-black text-brand-yellow font-black text-lg uppercase tracking-wider border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        Send Message
                    </>
                )}
            </button>
        </form>
    );
}
