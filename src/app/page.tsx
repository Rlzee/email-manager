import { HeroSection } from "@/features/landing/hero";
import { Header } from "@/features/landing/header";
import { Footer } from "@/features/landing/footer";
import { Faq } from "@/features/landing/faq";
import { Pricing } from "@/features/landing/pricing";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}
