"use client";

import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero/HeroSection";
import { Testimonials } from "@/components/social-proof/Testimonials";
import { DomainsGrid } from "@/components/features/DomainsGrid";
import { ProductsSection } from "@/components/features/ProductsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

// Lazy-load the 102KB BusinessOSPreview — only loads when visible
const BusinessOSPreview = dynamic(
  () => import("@/components/home/BusinessOSPreview").then(m => ({ default: m.BusinessOSPreview })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full py-32 flex items-center justify-center bg-surface dark:bg-surface">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-brand-yellow border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-semibold text-text-muted uppercase tracking-widest">Loading Business OS</p>
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <div className="flex flex-col bg-background min-h-screen page-enter">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Client Logo Marquee / Trusted By Strip */}
      <Testimonials />

      {/* 3. Business OS Preview — lazy loaded for performance */}
      <BusinessOSPreview />

      {/* 4. Solutions Section */}
      <DomainsGrid />

      {/* 5. Products Section */}
      <ProductsSection />

      {/* 6. Final CTA / Contact */}
      <ContactSection />

      <Footer />
    </div>
  );
}
