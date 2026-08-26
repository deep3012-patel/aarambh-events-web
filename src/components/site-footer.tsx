import Link from "next/link";
// import { ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { site } from "@/content/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const footerServices = ["Event Planning", "Decoration", "Production", "Rentals", "Corporate Events", "Weddings"];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Link className="brand" href="/" aria-label={`${site.name} home`}>
            <span className="brand-mark">A</span>
            <span>
              <strong>{site.shortName}</strong>
              <small>Events &amp; Production</small>
            </span>
          </Link>
          <p>{site.tagline}</p>
          <span className="footer-note">Founded by {site.owners}</span>
          <span className="footer-note">A premium event planning, production and décor studio.</span>
        </div>

        <div>
          <h3>Quick links</h3>
          <ul className="footer-links">
            {quickLinks.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul className="footer-links">
            {footerServices.map((service) => (
              <li key={service}><Link href="/services">{service}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Connect</h3>
          <ul className="footer-links footer-socials">
            <li><a href={site.contact.instagram} target="_blank" rel="noreferrer"><span aria-hidden="true" className="text-base">◎</span> Instagram <ArrowUpRight size={14} /></a></li>
            <li><a href={site.contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp <ArrowUpRight size={14} /></a></li>
            {site.contact.email ? <li><a href={`mailto:${site.contact.email}`}><Mail size={16} /> Email <ArrowUpRight size={14} /></a></li> : null}
          </ul>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</span>
        <span>We Create | You Celebrate</span>
      </div>
    </footer>
  );
}
