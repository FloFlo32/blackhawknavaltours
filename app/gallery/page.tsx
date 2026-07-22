import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Gallery } from "@/components/magic/gallery";
import { gallerySectionCopy, galleryImages, images } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Blackhawk Boat Tours Gallery | Chicago River & Lake Tour Photos. Glimpses of the adventure, see what awaits you on a Blackhawk Boat Tour.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Gallery"
          title={gallerySectionCopy.title}
          subtitle={gallerySectionCopy.tagline}
          image={images.galleryHero}
          imageAlt="Blackhawk RHIB airborne off a wake with the Chicago skyline behind"
        />

        <section className="container-px mx-auto max-w-7xl py-16 sm:py-20">
          <Gallery images={galleryImages} />
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
