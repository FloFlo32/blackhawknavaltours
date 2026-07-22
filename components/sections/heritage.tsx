import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { heritage } from "@/lib/site-data";

export function Heritage() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
      <RevealGroup className="grid gap-6 sm:grid-cols-2">
        {heritage.map((h) => (
          <RevealItem
            key={h.ship}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-deep/5 sm:flex-row sm:items-start"
          >
            <Image
              src={h.crest}
              alt={`${h.ship} Navy crest`}
              width={96}
              height={120}
              quality={85}
              className="h-24 w-auto shrink-0"
            />
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                From the {h.ship}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold">{h.boat}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.body}</p>
              <p className="mt-3 text-xs text-muted-foreground/80">{h.note}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
