export function Footer() {
    return (
        <footer className="bg-brand-black text-brand-yellow py-12 px-4 border-t-4 border-brand-yellow">
            <div className="container mx-auto flex flex-col items-start">
                <img
                    src="/logo.png"
                    alt="Business 365 Logo"
                    className="w-14 h-14 object-contain mb-4"
                />
                <p className="font-bold text-brand-yellow/80 max-w-md">
                    Your global marketplace for comprehensive business solutions - everything for everyone, at any time.
                </p>
            </div>

            <div className="container mx-auto mt-12 pt-8 border-t border-brand-yellow/20 text-center font-bold text-brand-yellow/60 text-sm">
                © 2026 Business 365. All rights reserved.
            </div>
        </footer>
    );
}
