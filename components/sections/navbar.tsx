"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 shadow-sm shadow-black/[0.03] backdrop-blur-xl"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm"
      )}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy-deep p-1.5 shadow-md shadow-navy-deep/30 ring-1 ring-white/10">
            <Image src="/logo.png" alt={`${brand.name} crest`} width={40} height={55} className="h-auto w-full" />
          </span>
          <span className="leading-[1.05]">
            <span className="block font-display text-lg font-bold tracking-tight sm:text-xl">
              BLACKHAWK
            </span>
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary">
              Boat Tours
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground cursor-pointer"
            >
              {l.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-primary transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${brand.contact.phone.replace(/[^\d+]/g, "")}`}
            className="hidden items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground md:flex cursor-pointer"
          >
            <Phone className="size-4 text-primary" />
            {brand.contact.phone}
          </a>
          <Button asChild size="default" className="hidden bg-navy-deep text-white hover:bg-primary sm:inline-flex">
            <Link href="/contact-us">Book Now</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {navItems.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-accent hover:text-foreground cursor-pointer"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${brand.contact.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium text-foreground/80 cursor-pointer"
            >
              <Phone className="size-4 text-primary" /> {brand.contact.phone}
            </a>
            <Button asChild className="mt-2 bg-navy-deep text-white hover:bg-primary">
              <Link href="/contact-us" onClick={() => setOpen(false)}>
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
