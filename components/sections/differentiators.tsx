import Image from "next/image";
import { Eye, BookOpen, Zap } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { differentiators, images } from "@/lib/site-data";

const icons = [Eye, BookOpen, Zap];

export function Differentiators() {
  return (
    <section id="different" className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={images.differentiators}
              alt="Captain at the helm of a Blackhawk RHIB with the Chicago skyline behind"
              width={800}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
              className="h-[24rem] w-full object-cover sm:h-[30rem]"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What Makes Us Different
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
              This isn&apos;t your typical boat tour.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We specialize in small, personal experiences for families and groups who want more than
              just a view. You&apos;ll get:
            </p>
          </Reveal>

          <RevealGroup className="mt-8 flex flex-col gap-6">
            {differentiators.map((d, i) => {
              const Icon = icons[i];
              return (
                <RevealItem key={d.title} className="flex gap-4">
                  <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{d.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d.body}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <Reveal delay={0.1}>
            <p className="mt-8 border-l-2 border-gold pl-4 text-lg font-medium text-foreground">
              It&apos;s the perfect blend of education, excitement, and unforgettable moments.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
