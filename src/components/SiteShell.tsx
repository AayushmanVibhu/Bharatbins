"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { foundation } from "@/data/content";

const links = [["About", "/about"], ["Our work", "/our-work"], ["Our team", "/team"], ["Affiliations", "/affiliations"], ["Contact", "/contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Help India Foundation home">
      <span className="brand-emblem"><Image src="/images/foundation-emblem.png" width={68} height={55} alt="" priority /></span>
      <span className="brand-name"><strong>Help India</strong><small>Foundation</small></span>
    </Link>
    <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="site-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</button>
    <nav id="site-navigation" className={open ? "nav open" : "nav"} aria-label="Main navigation">
      {links.map(([label, href]) => { const active = href === "/our-work" ? pathname.startsWith(href) : pathname === href; return <Link key={href} href={href} aria-current={active ? "page" : undefined} className={active ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>; })}
      <Link href="/contact#get-involved" className="nav-action" onClick={() => setOpen(false)}>Get involved <ArrowUpRight size={15} /></Link>
    </nav>
  </header>;
}

export function Footer() {
  return <footer className="footer"><div className="footer-main">
    <div className="footer-identity"><p className="eyebrow light">Help India Foundation</p><h2>Community-centred work for opportunity and cleaner surroundings.</h2></div>
    <div className="footer-links"><div><span>Explore</span><Link href="/about">About</Link><Link href="/our-work">Our work</Link><Link href="/team">Leadership</Link><Link href="/affiliations">Affiliations</Link></div><div><span>Connect</span><a href={`mailto:${foundation.email}`}>Email the foundation</a><a href={`tel:${foundation.phone.replace(/\s/g, "")}`}>Call {foundation.phone}</a><Link href="/contact#get-involved">Get involved</Link></div></div>
  </div><div className="footer-bottom"><span>{foundation.tagline}</span><span>© {new Date().getFullYear()} Help India Foundation</span></div></footer>;
}

export function SiteShell({ children }: { children: React.ReactNode }) { return <><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /></>; }
