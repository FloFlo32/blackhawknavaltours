import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { statsBar } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-border py-20 sm:py-28">
      <AuroraBackground />
      <div className="container-px mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-balance text-4xl font-bold sm:text-5xl">
            Ready to Feel the Rush?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don&apos;t just see Chicago, experience it at full speed.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-navy-deep text-white hover:bg-primary">
              <Link href="/contact-us">
                Book Your Adventure <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/experiences">View Experiences</Link>
            </Button>
          </div>
        </Reveal>

        <RevealGroup className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-border pt-10">
          {statsBar.map((s) => (
            <RevealItem key={s.label}>
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {s.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
