const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.735-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);
const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);
const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
);

export function Footer() {
    return (
        <footer className="bg-brand-black text-brand-yellow border-t-2 border-brand-yellow/40">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/logo.png" alt="buziness365 Logo" className="w-12 h-12 object-contain" />
                            <span className="text-xl font-black tracking-tighter uppercase">buziness365</span>
                        </div>
                        <p className="font-medium text-brand-yellow/70 text-sm leading-relaxed mb-6">
                            Your global marketplace for comprehensive business solutions — everything for everyone, at any time.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            <a href="#" title="Coming Soon" aria-label="Twitter" className="p-2 border-2 border-brand-yellow/30 text-brand-yellow/70 hover:border-brand-yellow hover:text-brand-yellow hover:bg-brand-yellow/10 transition-all">
                                <TwitterIcon />
                            </a>
                            <a href="https://www.linkedin.com/company/buziness365" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 border-2 border-brand-yellow/30 text-brand-yellow/70 hover:border-brand-yellow hover:text-brand-yellow hover:bg-brand-yellow/10 transition-all">
                                <LinkedInIcon />
                            </a>
                            <a href="#" title="Coming Soon" aria-label="Instagram" className="p-2 border-2 border-brand-yellow/30 text-brand-yellow/70 hover:border-brand-yellow hover:text-brand-yellow hover:bg-brand-yellow/10 transition-all">
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h4 className="font-black uppercase tracking-widest text-sm mb-5 border-b border-brand-yellow/20 pb-3">Products</h4>
                        <ul className="space-y-3">
                            {["Workflows", "Chatbot", "Voice Agent", "XR - MR/VR/AR", "Law OS", "WhatsApp OS"].map(item => (
                                <li key={item}>
                                    <a href="#products" className="text-sm font-medium text-brand-yellow/70 hover:text-brand-yellow hover:pl-1 transition-all duration-150">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h4 className="font-black uppercase tracking-widest text-sm mb-5 border-b border-brand-yellow/20 pb-3">Solutions</h4>
                        <ul className="space-y-3">
                            {["AI Automation / ML", "XR - MR/VR/AR", "Data Engineering", "Cybersecurity", "Business Consulting", "Corporate Gifts"].map(item => (
                                <li key={item}>
                                    <a href="#solutions" className="text-sm font-medium text-brand-yellow/70 hover:text-brand-yellow hover:pl-1 transition-all duration-150">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-black uppercase tracking-widest text-sm mb-5 border-b border-brand-yellow/20 pb-3">Connect</h4>
                        <ul className="space-y-3 mb-6">
                            {[
                                { label: "About Us", href: "/" },
                                { label: "Business Audit", href: "/business-audit" },
                                { label: "Business OS", href: "/business-os" },
                                { label: "Privacy Policy", href: "#" },
                                { label: "Terms of Service", href: "#" },
                            ].map(item => (
                                <li key={item.label}>
                                    <a href={item.href} className="text-sm font-medium text-brand-yellow/70 hover:text-brand-yellow hover:pl-1 transition-all duration-150">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#pricing"
                            className="inline-block bg-brand-yellow text-brand-black font-black uppercase tracking-wider text-xs px-5 py-3 border-2 border-brand-yellow shadow-[3px_3px_0px_0px_rgba(255,224,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(255,224,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                        >
                            Get Started →
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-brand-yellow/20">
                <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-bold text-brand-yellow/50 text-sm">© 2026 buziness365. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="mailto:enquiry@buziness365.com" className="text-xs font-semibold text-brand-yellow/40 hover:text-brand-yellow transition-colors">enquiry@buziness365.com</a>
                        <span className="text-brand-yellow/20">·</span>
                        <span className="text-xs font-semibold text-brand-yellow/30">India · USA · UK</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
