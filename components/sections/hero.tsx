import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Users, Star } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/magic/grid-pattern";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { Reveal } from "@/components/magic/reveal";
import { images } from "@/lib/site-data";

const credentialIcons = [ShieldCheck, Users, Star];
const credentials = ["USCG Licensed", "Family Friendly", "5-Star Rated"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AuroraBackground />
      <GridPattern />

      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
        <div>
          <Reveal>
            <Badge variant="accent" className="border-primary/25">
              River + Lake Tour Experience
            </Badge>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.03] sm:text-6xl md:text-7xl">
              Fast Boats. Big City.{" "}
              <span className="text-gradient">YOUR TOUR.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              {brand.description.split(".")[0]}. Experience Chicago from the Chicago River to Lake Michigan on a high-speed tour with skyline views.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
              {credentials.map((c, i) => {
                const Icon = credentialIcons[i];
                return (
                  <div key={c} className="flex items-center gap-2">
                    <Icon className="size-4 text-primary" />
                    <span className="text-sm font-medium text-foreground/80">{c}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-navy-deep/10">
            <Image
              src={images.heroAction}
              alt="Guests and captain aboard a Blackhawk RHIB speeding past the Chicago skyline"
              width={900}
              height={1000}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={78}
              className="h-[26rem] w-full object-cover sm:h-[32rem]"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-lg shadow-navy-deep/10 sm:-left-8">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold/20 text-gold-foreground">
              <Star className="size-5 fill-current" />
            </span>
            <div>
              <p className="font-display text-lg font-bold leading-tight">10,000+</p>
              <p className="text-xs text-muted-foreground">Happy riders and counting</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
