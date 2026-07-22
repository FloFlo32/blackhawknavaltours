import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, PhoneCall, LifeBuoy, Zap, Eye, Users } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Heritage } from "@/components/sections/heritage";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { vesselSpecs, safetyPoints, whyRideWithUs, images } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Vessels",
  description:
    "Blackhawk Boat Tours Vessels | Military-Grade Navy Style Boats. Authentic RHIBs, Coast Guard licensed captains, speeds up to 40 MPH.",
};

const whyIcons = [Zap, Eye, Users];
const safetyIcons = [ShieldCheck, PhoneCall, LifeBuoy];

export default function OurVesselsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Our Vessels"
          title="Military-Grade Performance"
          subtitle="Our fleet consists exclusively of authentic military-spec Rigid-Hull Inflatable Boats (RHIBs), originally designed for Navy SEAL insertions and Coast Guard rescue missions."
          image={images.vesselsHero}
          imageAlt="Guests riding through choppy water on the Blackhawk RHIB"
        />

        <section className="container-px mx-auto max-w-7xl py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="overflow-hidden rounded-3xl">
              <Image
                src={images.vesselsMachine}
                alt="Captain and guests aboard the RHIB under a cloudy Chicago sky"
                width={800}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={78}
                className="h-[24rem] w-full object-cover sm:h-[30rem]"
              />
            </Reveal>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                The Machine
              </span>
              <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
                U.S. Navy Rigid-Hull Inflatable Boats
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our fleet consists of US Navy-style rigid-hull inflatable boats, the same
                vessels trusted by military forces worldwide for their unmatched speed,
                stability, and safety.
              </p>

              <RevealGroup className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
                {vesselSpecs.map((s) => (
                  <RevealItem
                    key={s.label}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {s.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{s.value}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </section>

        <Heritage />

        <section className="border-y border-border bg-muted/30 py-16 sm:py-20">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Why Ride With Us
              </span>
              <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
                Built for the thrill seekers
              </h2>
            </Reveal>

            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3">
              {whyRideWithUs.map((w, i) => {
                const Icon = whyIcons[i];
                return (
                  <RevealItem
                    key={w.title}
                    className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-deep/5"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </section>

        <section className="container-px mx-auto max-w-5xl py-16 text-center sm:py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Safety First. Always.
            </span>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              While we deliver extreme thrills, we never compromise on safety. Our operations
              exceed all Coast Guard requirements.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3">
            {safetyPoints.map((p, i) => {
              const Icon = safetyIcons[i];
              return (
                <RevealItem
                  key={p}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Icon className="size-5" />
                  </span>
                  <p className="text-sm font-medium">{p}</p>
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
