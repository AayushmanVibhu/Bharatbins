import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image?: string }) {
  return (
    <section className={`page-hero ${image ? "has-image" : ""}`}>
      <div className="page-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{intro}</p></div>
      {image && <div className="page-hero-image"><Image src={image} fill sizes="(max-width: 800px) 100vw, 48vw" alt="" priority /></div>}
    </section>
  );
}

export function CtaBand({ title = "Let’s work towards cleaner, more capable communities." }: { title?: string }) {
  return <section className="cta-band"><p className="eyebrow light">Collaborate with us</p><h2>{title}</h2><Link href="/contact" className="text-link light">Start a conversation <ArrowUpRight /></Link></section>;
}
