import { HeroSection } from "@/features/landing/hero";
import { Header } from "@/features/landing/header";
import { Footer } from "@/features/landing/footer";
import { Faq } from "@/features/landing/faq";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Faq />
      <Footer />
    </>
  );
}
