"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { gallery } from "@/data/content";

export default function BharatBin() {
  const [active, setActive] = useState<number | null>(null);
  return <>
    <section className="bb-hero"><div className="bb-hero-image"><Image src="/images/bharatbin-hero.jpg" fill priority sizes="100vw" alt="Installed BharatBin being inspected during a public programme" /></div><div className="bb-shade"/><div className="bb-hero-copy"><p className="eyebrow light">A Help India Foundation initiative</p><h1>Smarter waste management.<br/>Cleaner communities.</h1><p>BharatBin brings public infrastructure, source segregation and community participation into one practical waste-management programme.</p></div></section>

    <section className="bb-intro"><div><p className="eyebrow">The challenge</p><h2>Public bins often fail long before collection begins.</h2></div><p>Overflow, damaged containers, mixed waste and limited visibility make everyday disposal harder for residents and sanitation teams. When wet and dry waste are mixed during collection, even well-intentioned segregation breaks down.</p></section>

    <section className="problem-rail">{[
      ["01","Overflow and damage","Bins that are uncovered, broken or poorly maintained can leave waste exposed in public spaces."],
      ["02","Mixed waste","Unclear openings and collection practices can combine wet and dry waste."],
      ["03","Collection visibility","Crews may have little reliable information about which locations need attention first."],
    ].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</section>

    <section className="chain"><p className="eyebrow light">The BharatBin approach</p><h2>Keep segregation intact across the waste chain.</h2><div className="chain-steps">{["Disposal","Segregation","Collection","Transport","Processing"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div><p className="chain-note">The proposed operating model links bins with dedicated segregated collection vehicles and onward processing so separated waste does not get remixed.</p></section>

    <section className="evidence"><div className="evidence-image"><Image src="/images/street-bin.jpg" fill sizes="(max-width:800px) 100vw, 50vw" alt="Installed dual-compartment BharatBin" /></div><div><p className="eyebrow">Documented pilot activity</p><h2>100 BharatBins installed in South Delhi</h2><p>The supplied programme deck documents a public installation drive for 100 dual-compartment BharatBins in MCD South Zone, along with formal handover material, site activity and public-awareness signage.</p><ul><li>Dry and wet waste openings</li><li>Stainless-steel bodies on concrete bases</li><li>Public-awareness and advertisement-ready front panels</li></ul><p className="fine-print">This figure refers to the documented installation event. It does not include the proposed expansion target.</p></div></section>

    <section className="innovation"><div className="section-head"><p className="eyebrow">Infrastructure and innovation</p><h2>Current infrastructure and proposed capabilities</h2></div><div className="innovation-grid"><article className="current"><span>Documented infrastructure</span><h3>Installed public bins</h3><p>Dual dry/wet compartments, permanent bases and visible public-awareness panels.</p></article><article><span>Proposed technology</span><h3>Smart monitoring</h3><p>Fill-level sensors, GPS tracking, solar-assisted power and a central monitoring dashboard.</p></article><article><span>Proposed operating model</span><h3>Segregated collection</h3><p>Dedicated collection vehicles designed to preserve separation during transport.</p></article></div><figure className="concept"><Image src="/images/concept-bin.jpg" fill sizes="(max-width:800px) 100vw, 42vw" alt="Concept visualisation of a solar-assisted smart BharatBin" /><figcaption>Concept visualisation. Advanced specifications shown in the proposal are planned capabilities, not verified features of every installed unit.</figcaption></figure></section>

    <section className="target"><p className="eyebrow light">Future vision · proposed</p><div><span className="target-number">20,000</span><h2>Smart BharatBins across MCD South Zone</h2><p>The proposal outlines a phased target of up to 20,000 units, beginning with a proposed 2,000-bin pilot. This remains subject to approvals, a detailed project report and phased implementation.</p></div></section>

    <section className="community-block"><div><p className="eyebrow">Community participation</p><h2>Infrastructure works better when people understand the system.</h2></div><div>{[["RWAs","Orientation on source segregation, placement and local feedback."],["Schools and colleges","Awareness sessions, demonstrations and student participation."],["Volunteers and residents","Local outreach that supports correct use and cleaner shared spaces."]].map(([t,d])=><article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="gallery"><div className="section-head"><p className="eyebrow">Project gallery</p><h2>Work documented on the ground</h2></div><div className="gallery-grid">{gallery.map((img,i)=><button key={img.src} onClick={()=>setActive(i)} aria-label={`Open image: ${img.caption}`}><Image src={img.src} fill sizes="(max-width:700px) 90vw, 33vw" alt={img.alt}/><span>{img.caption}</span></button>)}</div></section>
    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded project photograph" onClick={()=>setActive(null)}><button onClick={()=>setActive(null)} aria-label="Close image"><X/></button><div><Image src={gallery[active].src} fill sizes="90vw" alt={gallery[active].alt}/></div><p>{gallery[active].caption}</p></div>}
    <section className="bb-cta"><p className="eyebrow light">Collaboration</p><h2>Cleaner public spaces require coordinated work.</h2><p>We welcome conversations with civic bodies, institutions, community organisations and responsible corporate collaborators.</p><Link href="/contact" className="button warm">Contact the foundation <ArrowUpRight/></Link></section>
  </>;
}
