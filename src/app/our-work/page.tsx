import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageParts";
import { focusAreas } from "@/data/content";

export const metadata = { title: "Our Work", description: "Explore Help India Foundation's focus on education, livelihoods, environmental protection, waste management and community engagement.", alternates: { canonical: "/our-work" }, openGraph: { title: "Our Work | Help India Foundation", description: "Education, livelihoods, environmental protection, waste management and community engagement.", url: "/our-work" } };
export default function Work() {
  return <>
    <PageHero eyebrow="Our work" title="Supporting people, livelihoods and the environments we share." intro="Our areas of focus connect education and employment generation with environmental protection, responsible waste management and community participation." />
    <section className="work-feature"><div className="work-feature-image"><Image src="/images/three-bins.jpg" fill sizes="(max-width:800px) 100vw, 55vw" alt="Three BharatBins installed in South Delhi" /></div><div><p className="eyebrow light">Featured initiative</p><span className="initiative-name">BharatBin</span><h2>Waste segregation in public spaces</h2><p>BharatBin is a waste-management initiative centred on dual-compartment public bins, awareness and better continuity from disposal to collection. The South Delhi programme installed 100 units.</p><Link href="/our-work/bharatbin" className="button warm">Explore the initiative <ArrowUpRight /></Link></div></section>
    <section className="areas-editorial"><div className="section-head"><p className="eyebrow">Areas of focus</p><h2>A connected view of community development.</h2><p>Education, livelihoods and environmental wellbeing influence one another. The foundation’s work is organised around these five areas.</p></div>{focusAreas.map((area, i) => <article key={area.title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}</section>
    <CtaBand eyebrow="Collaborate" title="Bring a community need, an institutional perspective or practical expertise." />
  </>;
}
