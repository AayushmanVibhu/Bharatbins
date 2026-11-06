import Image from "next/image";
import { CtaBand, PageHero } from "@/components/PageParts";
import { foundation } from "@/data/content";

export const metadata = { title: "About Us", description: "Learn about Help India Foundation's purpose, areas of focus and community-centred approach.", alternates: { canonical: "/about" }, openGraph: { title: "About Us | Help India Foundation", description: "The foundation's purpose, focus areas and community-centred approach.", url: "/about" } };
export default function About() {
  return <>
    <PageHero eyebrow="About us" title="A nonprofit working for opportunity and healthier shared environments." intro="Help India Foundation works across education, training, employment generation, environmental protection and waste management." image="/images/volunteers.jpg" imageAlt="Young volunteers participating in a BharatBin community programme" />
    <section className="editorial-grid"><p className="eyebrow">Our approach</p><div><h2>Community participation turns an idea into useful local action.</h2><p>We bring attention to the everyday systems that shape people’s lives: access to learning, preparation for livelihoods, cleaner public spaces and responsible waste practices.</p><p>Our work is intended to grow through collaboration with residents, educational institutions, community organisations, civic bodies and responsible businesses.</p></div></section>
    <section className="vision-layout"><article><span>Vision</span><h2>{foundation.vision}</h2></article><article><span>Mission</span><p>{foundation.mission}</p></article></section>
    <section className="principles"><div className="section-head"><p className="eyebrow">How we work</p><h2>Four commitments that guide our approach.</h2></div><div className="principle-lines">{[
      ["Participation", "Listen to residents and local institutions, and create room for meaningful involvement."],
      ["Practicality", "Focus on interventions that respond to visible needs and can be understood and used."],
      ["Environmental responsibility", "Support everyday habits and infrastructure that keep shared spaces cleaner."],
      ["Responsible innovation", "Develop technology for a clear operational purpose and describe its stage honestly."],
    ].map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <figure className="wide-image"><Image src="/images/community.jpg" fill sizes="100vw" alt="Community participants gathered around a BharatBin installation" /><figcaption>Community participation during the South Delhi BharatBin programme</figcaption></figure>
    <CtaBand title="Work with us on initiatives that respond to local needs." />
  </>;
}
