import type { Metadata } from "next";
import Image from "next/image";
import { Anchor, MapPin, Users } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import {
  aboutMission,
  blackhawkStory,
  captainKenBio,
  captainKenCredentials,
  aboutDifferentiators,
  images,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Blackhawk Boat Tours About Us | Chicago's Premier High-Speed Boat Tours. The Blackhawk story and Captain Ken's journey from the U.S. Coast Guard to Chicago's waterways.",
};

const diffIcons = [Anchor, MapPin, Users];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="About Us"
          title="Born from a Love of Adventure"
          subtitle={aboutMission}
          image={images.aboutHero}
          imageAlt="Blackhawk RHIB passing Navy Pier on Lake Michigan"
        />

        <section className="container-px mx-auto max-w-7xl py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                The Blackhawk Story
              </span>
              <div className="mt-4 space-y-4">
                {blackhawkStory.map((p, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <p className="text-muted-foreground">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.1} className="overflow-hidden rounded-3xl">
              <Image
                src={images.aboutStory}
                alt="Captain steering the RHIB with downtown Chicago in the background"
                width={800}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={78}
                className="h-[22rem] w-full object-cover sm:h-[28rem]"
              />
            </Reveal>
          </div>
        </section>

        <section className="border-y border-border bg-muted/30 py-16 sm:py-20">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal className="order-2 overflow-hidden rounded-3xl lg:order-1">
                <Image
                  src={images.captainPortrait}
                  alt="Captain Ken aboard the boat with the Chicago skyline behind him"
                  width={800}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={78}
                  className="h-[24rem] w-full object-cover sm:h-[30rem]"
                />
              </Reveal>
              <div className="order-1 lg:order-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Captain Ken
                </span>
                <div className="mt-4 space-y-4">
                  {captainKenBio.map((p, i) => (
                    <Reveal key={i} delay={i * 0.05}>
                      <p className="text-sm text-muted-foreground">{p}</p>
                    </Reveal>
                  ))}
                </div>
                <ul className="mt-6 space-y-2 border-t border-border pt-5">
                  {captainKenCredentials.map((c) => (
                    <li key={c} className="flex gap-2.5 text-sm">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container-px mx-auto max-w-7xl py-16 sm:py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What Makes Us Different
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
              Why families choose Blackhawk
            </h2>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3">
            {aboutDifferentiators.map((d, i) => {
              const Icon = diffIcons[i];
              return (
                <RevealItem
                  key={d.title}
                  className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-deep/5"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.body}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
