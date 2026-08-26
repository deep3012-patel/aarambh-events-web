"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="shell nav-shell">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <span className="brand-mark">A</span>
          <span>
            <strong>{site.shortName}</strong>
            <small>Events &amp; Production</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-small nav-talk" href="/contact">
          Let&apos;s Talk
        </Link>

        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-nav ${open ? "mobile-nav-open" : ""}`}>
        <nav className="shell" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link href={item.href} key={item.href} style={{ transitionDelay: `${index * 35}ms` }} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
          <Link className="button" href="/contact" onClick={() => setOpen(false)}>
            Start an Enquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}
