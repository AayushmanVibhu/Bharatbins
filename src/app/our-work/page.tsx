import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, PageHero } from "@/components/PageParts";
import { focusAreas } from "@/data/content";

export const metadata = { title: "Our Work" };
export default function Work() { return <>
  <PageHero eyebrow="Our work" title="Initiatives shaped around real community needs." intro="Our stated areas of focus span education, skills, employment, environmental protection and waste management. BharatBin is the most extensively documented initiative in the material available today." />
  <section className="work-feature"><div className="work-feature-image"><Image src="/images/three-bins.jpg" fill sizes="(max-width:800px) 100vw, 56vw" alt="Three BharatBins installed in South Delhi" /></div><div><p className="eyebrow light">Flagship documented initiative</p><h2>BharatBin</h2><p>A waste-management programme working to improve public bins, segregation and community awareness. The programme has documented installations in South Delhi and proposes technology-assisted monitoring and segregated collection for future phases.</p><Link href="/our-work/bharatbin" className="button warm">View the project <ArrowUpRight /></Link></div></section>
  <section className="areas-editorial"><div className="section-head"><p className="eyebrow">Broader areas of focus</p><h2>Work that supports capability and participation</h2><p>Specific project records for these areas have not yet been supplied. The entries below reflect the foundation’s stated focus without presenting unverified case studies.</p></div>{focusAreas.slice(0,3).map((x,i)=><article key={x.title}><span>0{i+1}</span><h3>{x.title}</h3><p>{x.text}</p></article>)}</section>
  <CtaBand />
  </>; }
