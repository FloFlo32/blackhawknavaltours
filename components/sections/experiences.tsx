import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal } from "@/components/magic/reveal";
import { tours } from "@/lib/site-data";

export function Experiences() {
  return (
    <section id="experiences" className="border-y border-border bg-muted/30 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What We Offer
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
              Experiences Built for Adventure
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose your adventure. From high-speed thrills to scenic architectural tours, we have
              the perfect ride for you.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/experiences">
              View More <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <div className="mt-12">
          <AutoSlider itemClassName="w-[85%] sm:w-[60%] lg:w-[32%]">
            {tours.map((t) => (
              <ImageCard
                key={t.slug}
                href="/experiences"
                src={t.image}
                alt={t.name}
                eyebrow={t.featured ? "Featured" : undefined}
                title={t.name}
                description={t.description}
                className="h-full"
              />
            ))}
          </AutoSlider>
        </div>
      </div>
    </section>
  );
}
