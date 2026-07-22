import type { Metadata } from "next";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${brand.name}.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl py-20 sm:py-28">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Legal
            </span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated 2026.</p>
          </Reveal>

          <Reveal delay={0.06} className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              These terms govern your booking and use of {brand.name} tours and this website.
              By booking a tour, you agree to the terms below.
            </p>
            <p>
              <strong className="text-foreground">Bookings.</strong> Tours are subject to
              availability and weather conditions. We may reschedule or cancel a tour for
              safety reasons, including severe weather or unsafe water conditions.
            </p>
            <p>
              <strong className="text-foreground">Safety.</strong> All guests must wear a
              USCG-approved life jacket for the duration of the tour and follow the captain&apos;s
              instructions at all times. Guests who are visibly intoxicated or unable to safely
              board may be denied boarding.
            </p>
            <p>
              <strong className="text-foreground">Liability.</strong> Boat touring carries
              inherent risk. Guests participate at their own risk and agree to any waiver
              provided at check-in.
            </p>
            <p>
              <strong className="text-foreground">Contact.</strong> Questions about these
              terms can be sent to{" "}
              <a href={`mailto:${brand.social.email}`} className="text-primary underline-offset-4 hover:underline">
                {brand.social.email}
              </a>{" "}
              or {brand.contact.phone}.
            </p>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
