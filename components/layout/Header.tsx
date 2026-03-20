"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 bg-brand-yellow border-b-2 border-brand-black">
            <div className="container mx-auto flex items-center justify-between gap-4 md:gap-12">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 border-2 border-transparent hover:border-brand-black transition-colors rounded-xl p-1 -ml-1 z-50">
                    <img
                        src="/logo.png"
                        alt="Business 365 Logo"
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                    <span className="text-xl font-black tracking-tighter text-brand-black uppercase hidden lg:inline-block">
                        Business 365
                    </span>
                </Link>

                {/* Centered Nav for Desktop */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-brand-black uppercase tracking-widest absolute left-1/2 -translate-x-1/2">
                    <Link href="#products" className="hover:underline decoration-2 underline-offset-4 decoration-brand-black">Products</Link>
                    <Link href="#solutions" className="hover:underline decoration-2 underline-offset-4 decoration-brand-black">Solutions</Link>
                    <Link href="#pricing" className="hover:underline decoration-2 underline-offset-4 decoration-brand-black">Pricing</Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-brand-black border-2 border-transparent hover:border-brand-black rounded-lg transition-colors"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Navigation Dropdown */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden absolute top-full left-0 right-0 bg-brand-yellow border-b-4 border-brand-black flex flex-col items-center py-6 gap-6 shadow-xl z-40">
                        <Link href="#products" onClick={toggleMobileMenu} className="text-xl font-bold text-brand-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4 decoration-brand-black">Products</Link>
                        <Link href="#solutions" onClick={toggleMobileMenu} className="text-xl font-bold text-brand-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4 decoration-brand-black">Solutions</Link>
                        <Link href="#pricing" onClick={toggleMobileMenu} className="text-xl font-bold text-brand-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4 decoration-brand-black">Pricing</Link>
                    </nav>
                )}
            </div>
        </header>
    );
}
