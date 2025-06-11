import { HeroSection } from "@/features/landing/hero";
import { Footer } from "@/features/landing/footer";
import { Faq } from "@/features/landing/faq";
import { Pricing } from "@/features/landing/pricing";
import { Testimonials } from "@/features/landing/testimonials";
import { Navbar } from "@/components/ui/navbar";

export const NavbarData = {
  items: [
    {
      label: "Pricing",
      sectionId: "pricing",
    },
    {
      label: "Testimonials",
      sectionId: "testimonials",
    },
    {
      label: "Faqs",
      sectionId: "faq",
    },
  ],
  buttons: [
    {
      label: "To identify",
      href: "/",
    },
  ],
};


export default function Home() {
  return (
    <>
      <Navbar appName="EM" items={NavbarData.items} buttons={NavbarData.buttons} />
      <HeroSection />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
