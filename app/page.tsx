import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Differentiators } from "@/components/sections/differentiators";
import { Experiences } from "@/components/sections/experiences";
import { CustomCta } from "@/components/sections/custom-cta";
import { Vessels } from "@/components/sections/vessels";
import { Heritage } from "@/components/sections/heritage";
import { Mission } from "@/components/sections/mission";
import { Story } from "@/components/sections/story";
import { GallerySection } from "@/components/sections/gallery-section";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Differentiators />
        <Experiences />
        <CustomCta />
        <Vessels />
        <Heritage />
        <Mission />
        <Story />
        <GallerySection />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
