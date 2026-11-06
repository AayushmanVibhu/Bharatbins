import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/PageParts";
import { focusAreas, foundation, gallery } from "@/data/content";

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-photo"><Image src="/images/hero.jpg" fill priority sizes="100vw" alt="Participants inspecting a BharatBin installation in South Delhi" /></div><div className="hero-overlay" />
      <div className="hero-copy"><p className="eyebrow light">Help India Foundation</p><h1>Opportunity, dignity and cleaner communities.</h1><p>We work across education, training, employment generation, environmental protection and waste management—with community participation at the centre.</p><div className="hero-actions"><Link href="/our-work" className="button warm">Explore our work <ArrowUpRight /></Link><Link href="/about" className="text-link light">About the foundation</Link></div></div>
      <a href="#intro" className="scroll-cue" aria-label="Continue to introduction"><ArrowDown /></a>
    </section>

    <section className="intro split" id="intro"><p className="eyebrow">Who we are</p><div><h2>Practical social development, shaped with communities.</h2><p>Help India Foundation is an Indian nonprofit organisation working to expand opportunity and improve shared environments. Our approach connects community needs with practical action—from learning and livelihoods to responsible waste management.</p><Link href="/about" className="text-link">Read about our approach <ArrowUpRight /></Link></div></section>

    <section className="manifesto"><div className="manifesto-label"><span>Vision</span></div><blockquote>{foundation.vision}</blockquote><div className="manifesto-label"><span>Mission</span></div><p className="mission-copy">{foundation.mission}</p></section>

    <section className="focus-section"><div className="section-head"><p className="eyebrow">Areas of focus</p><h2>Work that strengthens people and places.</h2></div><div className="focus-list">{focusAreas.map((area, i) => <article key={area.title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}</div></section>

    <section className="featured-project"><div className="project-image"><Image src="/images/installed-bin.jpg" fill sizes="(max-width: 800px) 100vw, 54vw" alt="A dual-compartment BharatBin installed in a South Delhi public space" /></div><div className="project-copy"><p className="eyebrow light">Featured initiative</p><span className="initiative-name">BharatBin</span><h2>Public waste infrastructure designed around segregation.</h2><p>The initiative combines wet-and-dry waste units, awareness signage and community participation. Its South Delhi programme installed 100 BharatBins; future technology and expansion remain proposals.</p><Link href="/our-work/bharatbin" className="button warm">View BharatBin <ArrowUpRight /></Link></div></section>

    <section className="ground-work"><div className="section-head"><p className="eyebrow">On the ground</p><h2>100 BharatBins installed in South Delhi.</h2><p>Field photographs show the installed dual-compartment units, public-awareness panels and participation around the installation programme.</p></div><div className="image-strip">{gallery.slice(0, 3).map((item, i) => <figure key={item.src} className={`tile tile-${i + 1}`}><Image src={item.src} fill sizes="(max-width: 700px) 92vw, 33vw" alt={item.alt} /><figcaption>{item.caption}</figcaption></figure>)}</div></section>
    <CtaBand eyebrow="Participate" title="Volunteer, collaborate locally or explore an institutional partnership." linkLabel="See ways to get involved" />
  </>;
}
