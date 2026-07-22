import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Gauge, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BorderBeam } from "@/components/magic/border-beam";
import { militaryPerformance, images } from "@/lib/site-data";

const icons = [ShieldCheck, Gauge, Users2];

export function Vessels() {
  return (
    <section id="vessels" className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Our Vessels
        </span>
        <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
          Military-Grade Performance
        </h2>
        <p className="mt-4 text-muted-foreground">
          Our fleet consists of US Navy-style rigid-hull inflatable boats, the same vessels trusted
          by military forces worldwide for their unmatched speed, stability, and safety.
        </p>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-3">
        {militaryPerformance.map((m, i) => {
          const Icon = icons[i];
          return (
            <RevealItem
              key={m.title}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-deep/5"
            >
              {i === 1 && <BorderBeam duration={8} />}
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-3xl">
        <Image
          src={images.vessels}
          alt="Guests cheering aboard a Blackhawk RHIB near downtown Chicago"
          width={1400}
          height={700}
          sizes="100vw"
          quality={75}
          className="h-[18rem] w-full object-cover sm:h-[22rem]"
        />
      </Reveal>

      <div className="mt-8 flex justify-center">
        <Button asChild size="lg" className="bg-navy-deep text-white hover:bg-primary">
          <Link href="/our-vessels">
            Explore Our Fleet <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
