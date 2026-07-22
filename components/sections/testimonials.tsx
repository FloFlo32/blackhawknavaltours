import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { Marquee } from "@/components/magic/marquee";
import { featuredTestimonial, guestPhotos } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What People Say
          </span>
          <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
            Real stories from real adventurers
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10">
            <Quote className="size-8 text-gold" />
            <p className="mt-4 text-balance text-xl font-medium leading-relaxed sm:text-2xl">
              &ldquo;{featuredTestimonial.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Image
                src={featuredTestimonial.image}
                alt={`${featuredTestimonial.name}, Blackhawk Boat Tours guest`}
                width={44}
                height={44}
                quality={80}
                className="size-11 rounded-full object-cover"
              />
              <span className="font-semibold">{featuredTestimonial.name}</span>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-12">
          <Marquee pauseOnHover className="[--marquee-duration:32s]">
            {guestPhotos.map((g) => (
              <div
                key={g.name}
                className="flex shrink-0 items-center gap-3 rounded-full border border-border bg-card px-4 py-2 shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.image}
                  alt={`${g.name}, Blackhawk Boat Tours guest`}
                  loading="lazy"
                  decoding="async"
                  className="size-9 rounded-full object-cover"
                />
                <span className="whitespace-nowrap text-sm font-medium">
                  {g.name}
                  {g.location ? <span className="text-muted-foreground">, {g.location}</span> : null}
                </span>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-muted/30 to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-muted/30 to-transparent sm:w-24" />
        </div>
      </div>
    </section>
  );
}
