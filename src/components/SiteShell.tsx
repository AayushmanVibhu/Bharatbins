"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { foundation } from "@/data/content";

const links = [
  ["About", "/about"],
  ["Our work", "/our-work"],
  ["Our team", "/team"],
  ["Affiliations", "/affiliations"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Help India Foundation home">
        <Image src="/images/logo.png" width={76} height={76} alt="Help India Foundation logo" priority />
        <span><strong>HELP INDIA</strong><small>FOUNDATION</small></span>
      </Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className={pathname === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>
        ))}
        <Link href="/contact" className="nav-action">Get involved <ArrowUpRight size={15} /></Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <p className="eyebrow light">Help India Foundation</p>
          <h2>Practical work.<br />Shared responsibility.</h2>
        </div>
        <div className="footer-links">
          <div><span>Explore</span><Link href="/about">About</Link><Link href="/our-work">Our work</Link><Link href="/team">Our team</Link></div>
          <div><span>Connect</span><a href={`mailto:${foundation.email}`}>Email us</a><a href={`tel:${foundation.phone.replace(/\s/g, "")}`}>Call us</a><Link href="/contact">Contact</Link></div>
        </div>
      </div>
      <div className="footer-bottom"><span>{foundation.tagline}</span><span>© {new Date().getFullYear()} Help India Foundation</span></div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}
