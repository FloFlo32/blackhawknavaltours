import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Map } from "@/components/sections/map";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { contactCopy, images } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Blackhawk Boat Tours Contact Us | Book Your Chicago Boat Adventure. Call, email, or find our dock at 2601 N Cannon Dr, Chicago.",
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact Us"
          title={contactCopy.title}
          subtitle={contactCopy.body}
          image={images.contactHero}
          imageAlt="Guests riding the Blackhawk RHIB along the Chicago skyline"
        />

        <section className="container-px mx-auto max-w-5xl py-16 sm:py-20">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {contactCopy.subtitle}
            </span>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2">
            <RevealItem>
              <a
                href={`tel:${brand.contact.phone.replace(/[^\d+]/g, "")}`}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-deep/5 cursor-pointer"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <Phone className="size-6" />
                </span>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Call Us At
                  </p>
                  <p className="mt-1 text-xl font-semibold">{brand.contact.phone}</p>
                </div>
              </a>
            </RevealItem>
            <RevealItem>
              <a
                href={`mailto:${brand.social.email}`}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-deep/5 cursor-pointer"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <Mail className="size-6" />
                </span>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Mail Us At
                  </p>
                  <p className="mt-1 text-xl font-semibold">{brand.social.email}</p>
                </div>
              </a>
            </RevealItem>
          </RevealGroup>

          <Reveal delay={0.1} className="mt-8 flex justify-center">
            <Button asChild size="lg" className="bg-navy-deep text-white hover:bg-primary">
              <Link href="/experiences">
                View Experiences <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </section>

        <Map />
      </main>
      <Footer />
    </>
  );
}
