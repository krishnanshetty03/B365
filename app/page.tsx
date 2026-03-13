import { HeroSection } from "@/components/hero/HeroSection";
import { ProductsSection } from "@/components/features/ProductsSection";
import { DomainsGrid } from "@/components/features/DomainsGrid";
import { Testimonials } from "@/components/social-proof/Testimonials";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-brand-yellow min-h-screen">
      <HeroSection />
      <Testimonials />
      <ProductsSection />
      <DomainsGrid />
      <ContactSection />
      <Footer />
    </div>
  );
}
