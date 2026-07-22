import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/magic/gallery";
import { Reveal } from "@/components/magic/reveal";
import { gallerySectionCopy, galleryImages } from "@/lib/site-data";

export function GallerySection() {
  return (
    <section id="gallery" className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Gallery
        </span>
        <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
          {gallerySectionCopy.title}
        </h2>
        <p className="mt-4 text-muted-foreground">{gallerySectionCopy.tagline}</p>
      </Reveal>

      <div className="mt-12">
        <Gallery images={galleryImages.slice(0, 8)} />
      </div>

      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline">
          <Link href="/gallery">
            Expand for More <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
