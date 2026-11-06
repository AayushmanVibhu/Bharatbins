import { Mail, Phone, Instagram, Youtube, MessageCircle } from "lucide-react";
import { contact, foundation } from "@/data/content";
export const metadata = { title: "Contact" };
export default function Contact() { return <section className="contact-page"><div className="contact-intro"><p className="eyebrow light">Contact</p><h1>Let’s discuss work that can move from intention to action.</h1><p>Reach the foundation for collaboration, volunteering, institutional coordination or more information about our programmes.</p></div><div className="contact-details">
  <article><span>Foundation</span><h2>{foundation.leader}</h2><p>{foundation.role}</p><a href={`mailto:${foundation.email}`}><Mail />{foundation.email}</a><a href="tel:+919811486711"><Phone />{foundation.phone}</a></article>
  <article><span>BharatBin</span><h2>Project channels</h2><a href={`mailto:${contact.bharatBinEmail}`}><Mail />{contact.bharatBinEmail}</a><a href="https://wa.me/919599100734"><MessageCircle />{contact.whatsapp}</a><a href="https://instagram.com/Bharatbin2026"><Instagram />{contact.instagram}</a><a href="https://youtube.com/@Bharatbin_Smartdustbin"><Youtube />{contact.youtube}</a></article>
  <p className="contact-note">A verified physical address and a connected form-delivery service have not yet been provided, so we offer direct email and phone links instead of simulating a form submission.</p>
  </div></section>; }
