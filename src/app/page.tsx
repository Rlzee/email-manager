import { HeroSection } from "@/features/landing/hero";
import { Footer } from "@/features/landing/footer";
import { Faq } from "@/features/landing/faq";
import { Pricing } from "@/features/landing/pricing";
import { Testimonials } from "@/features/landing/testimonials";
import { Navbar } from "@/components/ui/navbar";
import { Feature } from "@/features/landing/feature";
import { Bento } from "@/features/landing/bento";
import { Feature2 } from "@/features/landing/feature2";
import { NavbarData } from "@/data/data";

export default function Home() {
  return (
    <>
      <Navbar appName="EM" items={NavbarData.items} buttons={NavbarData.buttons} />
      <HeroSection />
      <Feature />
      <Feature2 />
      <Bento />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
