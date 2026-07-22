import Image from "next/image";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <AuroraBackground />
      <GridPattern />
      <div className="container-px mx-auto max-w-5xl pt-16 pb-10 text-center sm:pt-20">
        <Reveal>
          <Badge variant="accent" className="mx-auto border-primary/25">
            {eyebrow}
          </Badge>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-bold leading-[1.05] sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">{subtitle}</p>
          </Reveal>
        )}
      </div>
      <Reveal delay={0.18} className="container-px mx-auto max-w-6xl pb-16 sm:pb-20">
        <div className="overflow-hidden rounded-3xl shadow-xl shadow-navy-deep/10">
          <Image
            src={image}
            alt={imageAlt}
            width={1600}
            height={800}
            priority
            sizes="100vw"
            quality={78}
            className="h-[18rem] w-full object-cover sm:h-[24rem] lg:h-[28rem]"
          />
        </div>
      </Reveal>
    </section>
  );
}
