import { CtaBand, PageHero } from "@/components/PageParts";
export const metadata = { title: "Affiliations" };
export default function Affiliations() { return <>
  <PageHero eyebrow="Affiliations" title="Clear relationships build credible collaboration." intro="We distinguish associated organisations, project coordination and community participation so every relationship is represented accurately." />
  <section className="relationship"><p className="eyebrow">Associated organisation</p><div><h2>BharatBin Pvt. Ltd.</h2><p className="relation-type">Private limited company · Waste-management innovation and research</p><p>The BharatBin programme materials identify BharatBin Pvt. Ltd. as a private limited company working in innovation and research for waste management. It is associated with the Help India Foundation initiative, but it is not presented as an NGO.</p></div></section>
  <section className="relationship-guide"><h2>How we describe collaboration</h2>{[
    ["Associated organisations", "A verified organisational relationship with the foundation or an initiative."],
    ["Project coordination", "Meetings and operational coordination, which do not by themselves constitute a formal partnership."],
    ["Community participation", "Involvement from RWAs, educational institutions, volunteers or local residents."],
  ].map(([a,b])=><article key={a}><h3>{a}</h3><p>{b}</p></article>)}</section>
  <CtaBand title="Interested in exploring a responsible collaboration?" />
  </>; }
