import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/PageParts";
import { focusAreas, foundation, gallery } from "@/data/content";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-photo"><Image src="/images/hero.jpg" fill priority sizes="100vw" alt="BharatBin programme participants inspecting an installation" /></div>
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow light">Help India Foundation · India</p>
          <h1>Progress begins<br />on the ground.</h1>
          <p>Working with communities on education, livelihoods, environmental protection and better waste management.</p>
          <div className="hero-actions"><Link href="/our-work" className="button warm">Explore our work <ArrowUpRight /></Link><Link href="/about" className="text-link light">About the foundation</Link></div>
        </div>
        <a href="#intro" className="scroll-cue" aria-label="Scroll to introduction"><ArrowDown /></a>
      </section>

      <section className="intro split" id="intro">
        <p className="eyebrow">Who we are</p>
        <div><h2>Local participation can turn public purpose into visible change.</h2><p>Help India Foundation is an NGO and trust focused on practical social development. We connect community needs with action in education, employment, environmental protection and waste management.</p><Link href="/about" className="text-link">Discover our approach <ArrowUpRight /></Link></div>
      </section>

      <section className="manifesto">
        <div className="manifesto-label"><span>01</span><p>Vision</p></div>
        <blockquote>{foundation.vision}</blockquote>
        <div className="manifesto-label"><span>02</span><p>Mission</p></div>
        <p className="mission-copy">{foundation.mission}</p>
      </section>

      <section className="focus-section">
        <div className="section-head"><p className="eyebrow">Where we focus</p><h2>Connected issues.<br />Grounded responses.</h2></div>
        <div className="focus-list">{focusAreas.map((area, i) => <article key={area.title}><span>0{i + 1}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}</div>
      </section>

      <section className="featured-project">
        <div className="project-image"><Image src="/images/installed-bin.jpg" fill sizes="(max-width: 800px) 100vw, 56vw" alt="A BharatBin installed in a South Delhi public space" /></div>
        <div className="project-copy"><p className="eyebrow light">Featured initiative · BharatBin</p><h2>Rethinking how our cities manage waste.</h2><p>BharatBin connects public waste infrastructure with clear segregation, responsible collection and community awareness. Smart monitoring and a segregated collection fleet form part of the proposed next phase.</p><Link href="/our-work/bharatbin" className="button warm">Explore BharatBin <ArrowUpRight /></Link></div>
      </section>

      <section className="ground-work">
        <div className="section-head"><p className="eyebrow">On the ground</p><h2>Documented work in South Delhi</h2><p>The programme materials record the installation of 100 BharatBins, alongside site visits, coordination meetings and community participation.</p></div>
        <div className="image-strip">{gallery.slice(0, 3).map((item, i) => <figure key={item.src} className={`tile tile-${i + 1}`}><Image src={item.src} fill sizes="(max-width: 700px) 90vw, 33vw" alt={item.alt} /><figcaption>{item.caption}</figcaption></figure>)}</div>
      </section>
      <CtaBand />
    </>
  );
}
