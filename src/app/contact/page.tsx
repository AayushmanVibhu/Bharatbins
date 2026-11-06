import { Instagram, Mail, MessageCircle, Phone, Youtube } from "lucide-react";
import { contact, foundation } from "@/data/content";

export const metadata = { title: "Contact & Get Involved", description: "Contact Help India Foundation about volunteering, community collaboration, institutional partnerships or BharatBin.", alternates: { canonical: "/contact" }, openGraph: { title: "Contact & Get Involved | Help India Foundation", description: "Volunteer, collaborate locally or discuss an institutional partnership.", url: "/contact" } };
const pathways = [
  ["Volunteer", "Offer time and skills for community outreach, awareness or programme support."],
  ["Community collaboration", "Share a local need or discuss participation with residents and institutions."],
  ["Institutional partnership", "Explore programme, research or implementation collaboration."],
  ["BharatBin enquiry", "Ask about installed infrastructure, future development or project coordination."],
];

export default function Contact() {
  return <>
    <section className="contact-page"><div className="contact-intro"><p className="eyebrow light">Contact</p><h1>Start a useful conversation.</h1><p>Connect with Help India Foundation about community participation, volunteering, institutional collaboration or the BharatBin initiative.</p></div><div className="contact-details">
      <article><span>Help India Foundation</span><h2>{foundation.leader}</h2><p>{foundation.role}</p><a href={`mailto:${foundation.email}`}><Mail />{foundation.email}</a><a href={`tel:${foundation.phone.replace(/\s/g, "")}`}><Phone />{foundation.phone}</a></article>
      <article><span>BharatBin enquiries</span><h2>Project channels</h2><a href={`mailto:${contact.bharatBinEmail}`}><Mail />{contact.bharatBinEmail}</a><a href="https://wa.me/919599100734" target="_blank" rel="noreferrer"><MessageCircle />{contact.whatsapp}</a><a href="https://instagram.com/Bharatbin2026" target="_blank" rel="noreferrer"><Instagram />{contact.instagram}</a><a href="https://youtube.com/@Bharatbin_Smartdustbin" target="_blank" rel="noreferrer"><Youtube />{contact.youtube}</a></article>
    </div></section>
    <section className="get-involved" id="get-involved"><div className="section-head"><p className="eyebrow">Get involved</p><h2>Choose the conversation that fits.</h2><p>Email the foundation with a short introduction, your location or organisation, and how you would like to participate.</p></div><div className="pathway-grid">{pathways.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p><a href={`mailto:${foundation.email}?subject=${encodeURIComponent(title + " enquiry")}`}>Email about {title.toLowerCase()}</a></article>)}</div></section>
  </>;
}
