import { CtaBand, PageHero } from "@/components/PageParts";

export const metadata = { title: "Our Team" };
export default function Team() { return <>
  <PageHero eyebrow="Our team" title="People who keep the work moving." intro="Help India Foundation is presented here through the leadership information verified in the BharatBin programme material." />
  <section className="profile"><div className="profile-monogram" aria-hidden="true">RL</div><div><p className="eyebrow">Leadership</p><h2>Mr. Rajeev Lochan</h2><h3>Co-Founder, Help India Foundation</h3><p>Mr. Rajeev Lochan is identified in the foundation’s BharatBin proposal as Co-Founder and the principal foundation contact. A verified individual portrait and additional biographical details will be added when supplied.</p><a className="text-link" href="mailto:helpindiafoundation026@gmail.com">Contact the foundation</a></div></section>
  <section className="team-note"><p className="eyebrow light">Growing the page responsibly</p><h2>Every person shown here will be verified.</h2><p>The team structure is ready to expand as confirmed names, roles, biographies and photographs become available. We do not use fictional profiles or substitute portraits.</p></section>
  <CtaBand />
  </>; }
