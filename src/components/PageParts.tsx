import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PageHero({ eyebrow, title, intro, image, imageAlt = "" }: { eyebrow: string; title: string; intro: string; image?: string; imageAlt?: string }) {
  return <section className={`page-hero ${image ? "has-image" : ""}`}><div className="page-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{intro}</p></div>{image && <figure className="page-hero-image"><Image src={image} fill sizes="(max-width: 800px) 100vw, 48vw" alt={imageAlt} priority /></figure>}</section>;
}

export function CtaBand({ eyebrow = "Work with us", title = "Bring local knowledge and shared responsibility to the same table.", linkLabel = "Start a conversation" }: { eyebrow?: string; title?: string; linkLabel?: string }) {
  return <section className="cta-band"><p className="eyebrow light">{eyebrow}</p><div><h2>{title}</h2><Link href="/contact#get-involved" className="text-link light">{linkLabel} <ArrowUpRight /></Link></div></section>;
}
