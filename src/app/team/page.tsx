import { ArrowUpRight, Mail } from "lucide-react";
import { PageHero } from "@/components/PageParts";
import { foundation } from "@/data/content";

export const metadata = { title: "Our Team", description: "Leadership at Help India Foundation.", alternates: { canonical: "/team" }, openGraph: { title: "Our Team | Help India Foundation", description: "Leadership at Help India Foundation.", url: "/team" } };
export default function Team() {
  return <>
    <PageHero eyebrow="Our team" title="Leadership grounded in public purpose." intro="Help India Foundation brings together community participation, institutional collaboration and practical programme development." />
    <section className="leadership"><div className="leadership-intro"><p className="eyebrow">Leadership</p><p>The foundation’s leadership supports programme direction, relationships and the coordination needed to move community-focused ideas into action.</p></div><article className="leader-card"><span className="leader-index">01</span><div><h2>{foundation.leader}</h2><p className="leader-role">{foundation.role}</p><p>Working across the foundation’s social-development priorities and the coordination of its BharatBin waste-management initiative.</p><a className="text-link" href={`mailto:${foundation.email}`}>Contact through the foundation <Mail size={18} /><ArrowUpRight size={16} /></a></div></article></section>
    <section className="leadership-values"><p className="eyebrow light">The work behind the work</p><div><h2>Progress depends on people who listen, coordinate and follow through.</h2><p>We welcome conversations with individuals and institutions who can contribute local insight, technical knowledge, volunteer time or long-term collaboration.</p></div></section>
  </>;
}
