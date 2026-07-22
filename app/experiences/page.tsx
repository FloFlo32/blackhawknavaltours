import type { Metadata } from "next";
import { Check, Zap, Eye, Users } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { GallerySection } from "@/components/sections/gallery-section";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { ImageCard } from "@/components/magic/image-card";
import { tours, whyRideWithUs, tourHighlights, images } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Blackhawk Boat Tours Experiences | Chicago River & Lake Adventures. Choose your adventure: high-speed thrills, scenic architectural tours, or private charters.",
};

const whyIcons = [Zap, Eye, Users];

export default function ExperiencesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Choose Your Adventure"
          title="Experiences Built for Adventure"
          subtitle="Whether you seek an affordable private leisure tour of Chicago, a thrilling speedboat adventure, or a blend of both, Blackhawk Boat Tours has you covered."
          image={images.experiencesHero}
          imageAlt="Blackhawk RHIB speeding past Navy Pier, Chicago skyline behind"
        />

        <section className="container-px mx-auto max-w-7xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Experiences
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
              Choose your adventure
            </h2>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3">
            {tours.map((t) => (
              <RevealItem key={t.slug}>
                <ImageCard
                  src={t.image}
                  alt={t.name}
                  eyebrow={t.featured ? "Featured" : undefined}
                  title={t.name}
                  description={t.description}
                  className="h-full"
                />
                <div className="mt-3 flex items-center justify-between px-1">
                  <span className="text-sm font-semibold text-primary">
                    {t.price ?? "Custom pricing"}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {t.cta}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 sm:p-8">
            <h3 className="font-semibold">Along the way, you&apos;ll pass:</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {tourHighlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/80"
                >
                  {h}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="border-y border-border bg-muted/30 py-16 sm:py-20">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Why Ride With Us
              </span>
              <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
                Built for the thrill seekers
              </h2>
            </Reveal>

            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3">
              {whyRideWithUs.map((w, i) => {
                const Icon = whyIcons[i];
                return (
                  <RevealItem
                    key={w.title}
                    className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-deep/5"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
                    <span className="mt-4 flex items-center gap-1.5 text-xs font-medium text-primary">
                      <Check className="size-3.5" /> Included on every tour
                    </span>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </section>

        <GallerySection />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
