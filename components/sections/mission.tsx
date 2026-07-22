import { Reveal } from "@/components/magic/reveal";
import { missionStatement } from "@/lib/site-data";

export function Mission() {
  return (
    <section className="bg-navy-deep py-20 text-white sm:py-24">
      <div className="container-px mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Mission Statement
          </span>
          <p className="mt-6 text-balance font-display text-2xl font-medium leading-relaxed sm:text-3xl">
            {missionStatement}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
