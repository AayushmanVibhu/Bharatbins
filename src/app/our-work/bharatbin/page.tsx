import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectGallery } from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "BharatBin Waste-Management Initiative",
  description: "Learn about 100 BharatBins installed in South Delhi, dual wet-and-dry waste infrastructure, community engagement and proposed future technology.",
  alternates: { canonical: "/our-work/bharatbin" },
  openGraph: { title: "BharatBin | Help India Foundation", description: "Installed public waste infrastructure in South Delhi and a clearly separated roadmap for future development.", url: "/our-work/bharatbin", type: "article" },
};

export default function BharatBin() {
  return <>
    <section className="bb-hero"><div className="bb-hero-image"><Image src="/images/bharatbin-hero.jpg" fill priority sizes="100vw" alt="An installed BharatBin being inspected during the South Delhi programme" /></div><div className="bb-shade"/><div className="bb-hero-copy"><p className="eyebrow light">A Help India Foundation initiative</p><span className="bb-wordmark">BharatBin</span><h1>Better segregation begins in the public space.</h1><p>Dual-compartment bins, visible awareness and community participation form the practical foundation of the initiative.</p></div></section>

    <section className="bb-intro"><div><p className="eyebrow">Why it matters</p><h2>Waste can be separated at disposal and mixed again during collection.</h2></div><p>BharatBin considers the full chain—from clear wet-and-dry openings in public spaces to future collection and monitoring systems designed to preserve segregation.</p></section>

    <section className="evidence"><div className="evidence-image"><Image src="/images/installed-bin.jpg" fill sizes="(max-width:800px) 100vw, 48vw" alt="Installed dual-compartment BharatBin for wet and dry waste" /></div><div><p className="eyebrow">On the ground</p><h2>100 BharatBins installed in South Delhi</h2><p>The installation programme placed dual-compartment units in MCD South Zone public spaces, supported by field activity and visible anti-plastic awareness messages.</p><ul><li>Separate openings for wet and dry waste</li><li>Stainless-steel units fixed to concrete bases</li><li>Front panels for public-awareness messages</li></ul><p className="status-note"><strong>Implemented:</strong> the 100-unit installation is distinct from the future expansion described below.</p></div></section>

    <section className="segregation"><div><p className="eyebrow light">Designed for better segregation</p><h2>A clearer path from disposal to processing.</h2><p>The current units support separation at the point of disposal. The wider operating model proposes dedicated collection and transport so wet and dry waste remain separate.</p></div><ol>{["Disposal", "Wet / dry separation", "Collection", "Transport", "Processing"].map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></section>

    <section className="innovation"><div className="section-head"><p className="eyebrow">Technology and future development</p><h2>Proposed capabilities, clearly separated from installed infrastructure.</h2><p>The smart-system concepts below describe a development direction. They are not presented as features of the 100 installed units.</p></div><div className="innovation-layout"><div className="innovation-grid"><article className="current"><span>Installed</span><h3>Public waste units</h3><p>Wet-and-dry openings, permanent bases and public-awareness panels.</p></article><article><span>Proposed</span><h3>Smart monitoring</h3><p>Fill-level sensing, GPS, solar-assisted power and a central dashboard.</p></article><article><span>Proposed</span><h3>Segregated collection</h3><p>Dedicated vehicles intended to preserve separation through transport.</p></article></div><figure className="concept"><Image src="/images/concept-bin.jpg" fill sizes="(max-width:800px) 100vw, 42vw" alt="Concept design for a solar-assisted smart BharatBin" /><figcaption><strong>Concept visualisation:</strong> a proposed smart BharatBin design, not a photograph of an installed unit.</figcaption></figure></div></section>

    <section className="target"><p className="eyebrow light">Looking ahead</p><div><span className="target-number">20,000</span><h2>Proposed long-term expansion across MCD South Zone</h2><p>The phased proposal begins with an initial 2,000-unit expansion and sets a longer-term ambition of up to 20,000 smart BharatBins. Implementation would depend on approvals, detailed planning and phased delivery.</p></div></section>

    <section className="community-block"><div><p className="eyebrow">Community engagement</p><h2>Infrastructure works best when people understand and use it well.</h2></div><div>{[["Resident welfare associations", "Local orientation, placement input and feedback."], ["Schools and colleges", "Awareness sessions, demonstrations and student participation."], ["Volunteers and residents", "Neighbourhood outreach that supports correct use and cleaner shared spaces."]].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <ProjectGallery />
    <section className="bb-cta"><p className="eyebrow light">BharatBin enquiries</p><h2>Discuss local implementation, research or institutional collaboration.</h2><p>Connect with the foundation about installed infrastructure, community engagement or the proposed development roadmap.</p><Link href="/contact#get-involved" className="button warm">Contact the foundation <ArrowUpRight/></Link></section>
  </>;
}
