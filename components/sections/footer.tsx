import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { footerQuickLinks, footerTours } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-deep text-white/90">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Image src="/logo.png" alt={`${brand.name} crest`} width={56} height={77} className="h-auto w-14" />
            <span className="leading-[1.05]">
              <span className="block font-display text-lg font-bold tracking-tight text-white">
                BLACKHAWK
              </span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Boat Tours
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm text-white/60">
            Chicago&apos;s premier high-speed boat tour experience. Feel the rush on military-grade vessels.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-gold">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {footerQuickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-white/70 transition-colors hover:text-white cursor-pointer"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-gold">
            Tours
          </h4>
          <ul className="mt-4 space-y-2.5">
            {footerTours.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-white/70 transition-colors hover:text-white cursor-pointer"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-gold">
            Contact Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a
                href={`tel:${brand.contact.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-start gap-2.5 transition-colors hover:text-white cursor-pointer"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" /> {brand.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${brand.social.email}`}
                className="flex items-start gap-2.5 transition-colors hover:text-white cursor-pointer"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" /> {brand.social.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{brand.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>2026 Copyright © All Rights Reserved By {brand.name}.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-white cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-white cursor-pointer">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
