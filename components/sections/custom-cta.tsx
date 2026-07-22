import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal } from "@/components/magic/reveal";

export function CustomCta() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-navy-deep px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <GridPattern className="opacity-20" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Custom Adventure Tours
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
            Tailor your experience, we&apos;ll build the perfect tour for you.
          </h2>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
              <Link href="/contact-us">
                Start Planning <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
