import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/PageParts";
import { affiliations } from "@/data/content";

export const metadata = { title: "Affiliations", description: "Associated organisations and institutional relationships of Help India Foundation.", alternates: { canonical: "/affiliations" }, openGraph: { title: "Affiliations | Help India Foundation", description: "Associated organisations and institutional relationships of Help India Foundation.", url: "/affiliations" } };
export default function Affiliations() {
  return <>
    <PageHero eyebrow="Affiliations" title="Organisations connected through shared work." intro="Help India Foundation engages with organisations whose knowledge and capabilities can strengthen community-focused initiatives." />
    <section className="affiliation-list"><div className="affiliation-heading"><p className="eyebrow">Associated organisation</p><h2>Waste-management research and innovation</h2></div>{affiliations.map((item) => <article key={item.name}><span>Organisation</span><h3>{item.name}</h3><p className="relation-type">{item.type}</p><p>{item.description}</p></article>)}</section>
    <section className="partnership-invite"><p className="eyebrow light">Institutional collaboration</p><div><h2>Interested in contributing expertise or local capacity?</h2><p>We welcome conversations with nonprofits, educational institutions, civic bodies, community organisations and responsible businesses.</p><Link href="/contact#get-involved" className="text-link light">Discuss a collaboration <ArrowUpRight /></Link></div></section>
  </>;
}
