// import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/content/site";

export function ContactDetails() {
  return (
    <div className="contact-details">
      <a href={site.contact.phoneHref}><Phone size={18} /><span><small>Call us</small>{site.contact.phoneDisplay}</span></a>
      <a href={site.contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WhatsApp</small>Start a conversation</span></a>
      {site.contact.email ? <a href={`mailto:${site.contact.email}`}><Mail size={18} /><span><small>Email</small>{site.contact.email}</span></a> : null}
      <a href={site.contact.instagram} target="_blank" rel="noreferrer">
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
  <span><small>Instagram</small>{site.contact.instagramHandle}</span>
</a>
      <span><MapPin size={18} /><span><small>Location</small>{site.contact.location}</span></span>
    </div>
  );
}
