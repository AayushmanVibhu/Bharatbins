import Image from "next/image";
import { CtaBand, PageHero } from "@/components/PageParts";
import { foundation } from "@/data/content";

export const metadata = { title: "About Us" };
export default function About() {
  return <>
    <PageHero eyebrow="About us" title="Community purpose, translated into practical work." intro="Help India Foundation is an NGO and trust working across social development, environmental protection, education and employment generation." image="/images/volunteers.jpg" />
    <section className="editorial-grid"><p className="eyebrow">Who we are</p><div><h2>A foundation built around participation.</h2><p>Our work starts with a simple belief: communities should have a meaningful role in the programmes intended to serve them. We focus on practical initiatives that respond to visible needs and can grow through collaboration.</p><p>BharatBin, our documented waste-management initiative, shows this approach in action by pairing public infrastructure with awareness, segregation and a proposal for better collection coordination.</p></div></section>
    <section className="vision-layout"><article><span>Vision</span><h2>{foundation.vision}</h2></article><article><span>Mission</span><p>{foundation.mission}</p></article></section>
    <section className="principles"><div className="section-head"><p className="eyebrow">What guides our work</p><h2>Principles reflected in our approach</h2></div><div className="principle-lines">{[
      ["Community participation", "Programmes become stronger when residents and local institutions help shape them."],
      ["Sustainability", "Environmental responsibility belongs in everyday infrastructure and behaviour."],
      ["Practical impact", "We favour visible, useful interventions over abstract promises."],
      ["Responsible innovation", "Technology should solve a clear operational problem and remain honest about its stage of development."],
    ].map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="wide-image"><Image src="/images/community.jpg" fill sizes="100vw" alt="People gathered around a BharatBin during an installation programme" /></section>
    <CtaBand title="Shared work can create lasting public value." />
  </>;
}
