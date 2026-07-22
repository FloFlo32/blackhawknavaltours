import type { Metadata } from "next";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${brand.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl py-20 sm:py-28">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Legal
            </span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated 2026.</p>
          </Reveal>

          <Reveal delay={0.06} className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              {brand.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This
              policy explains what information we collect when you contact us, book a tour, or
              browse this website, and how we use it.
            </p>
            <p>
              <strong className="text-foreground">Information we collect.</strong> When you
              call, email, or submit a booking request, we collect the details you provide,
              such as your name, phone number, email address, and preferred tour date. We do
              not sell or rent this information to third parties.
            </p>
            <p>
              <strong className="text-foreground">How we use it.</strong> We use your
              information to confirm bookings, respond to inquiries, and communicate important
              updates about your tour. We may also use it to improve our services.
            </p>
            <p>
              <strong className="text-foreground">Contact.</strong> If you have questions about
              this policy or want your information removed from our records, email{" "}
              <a href={`mailto:${brand.social.email}`} className="text-primary underline-offset-4 hover:underline">
                {brand.social.email}
              </a>{" "}
              or call {brand.contact.phone}.
            </p>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
