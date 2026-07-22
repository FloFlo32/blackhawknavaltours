import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { closingLine, teamTagline, images } from "@/lib/site-data";

export function Story() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Story
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
              Born from a Love of Adventure
            </h2>
            <p className="mt-4 text-muted-foreground">
              Licensed captains. Coast Guard certified professionals. {teamTagline}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
            <div>
              <p className="font-display text-3xl font-bold text-primary">10,000+</p>
              <p className="text-sm text-muted-foreground">Tours. Safe adventures since day one.</p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 border-l-2 border-gold pl-4 text-lg font-medium">
              {closingLine}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <Button asChild size="lg" variant="outline" className="mt-8">
              <Link href="/about-us">
                Meet the Team <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-1 overflow-hidden rounded-3xl lg:order-2">
          <Image
            src={images.storyAction}
            alt="Captain Ken aboard the boat with the Chicago skyline behind him"
            width={800}
            height={900}
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={78}
            className="h-[26rem] w-full object-cover sm:h-[32rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
