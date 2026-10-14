"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { ButtonLink, Container } from "@/components/ui";
import { nav, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-background/90 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-3">
        <a href="#top" aria-label={site.name}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-cocoa">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="#pricing">{`Subscribe · $${site.price}`}</ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-4 bg-cocoa" />
            <span className="block h-0.5 w-4 bg-cocoa" />
          </span>
        </button>
      </Container>
      {open ? (
        <div id="mobile-nav" className="border-t border-line md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-cocoa"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <ButtonLink href="#pricing">{`Subscribe · $${site.price}`}</ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
