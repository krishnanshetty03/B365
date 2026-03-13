"use client";

import Link from "next/link";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-brand-yellow border-b-2 border-brand-black">
            <div className="container mx-auto flex items-center justify-center gap-12">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 mr-auto border-2 border-transparent hover:border-brand-black transition-colors rounded-xl p-1 -ml-1">
                    <img
                        src="/logo.png"
                        alt="Business 365 Logo"
                        className="w-12 h-12 object-contain"
                    />
                    <span className="text-xl font-black tracking-tighter text-brand-black uppercase hidden sm:inline-block">
                        Business 365
                    </span>
                </Link>

                {/* Centered Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-brand-black uppercase tracking-widest absolute left-1/2 -translate-x-1/2">
                    <Link href="#products" className="hover:underline decoration-2 underline-offset-4 decoration-brand-black">Products</Link>
                    <Link href="#solutions" className="hover:underline decoration-2 underline-offset-4 decoration-brand-black">Solutions</Link>
                    <Link href="#pricing" className="hover:underline decoration-2 underline-offset-4 decoration-brand-black">Pricing</Link>
                </nav>
            </div>
        </header>
    );
}
