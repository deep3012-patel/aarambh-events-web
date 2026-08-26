import type { Metadata } from "next";
import { ContactDetails } from "@/components/contact-details";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Contact Us", description: "Send Aarambh Events & Production an enquiry for your wedding, celebration, corporate event, décor or production requirement." };

export default function ContactPage() {
  return <>
    <PageHero eyebrow="Contact Aarambh" title="Let&apos;s make the occasion unforgettable." copy="Tell us what you&apos;re planning. We&apos;ll get back to you with the right next steps—no booking required." image="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=88" />
    <section className="section-pad contact-page"><div className="shell contact-page-grid">
      <div className="contact-page-copy"><p className="eyebrow">Talk to the team</p><h2>Begin with an enquiry.</h2><p>Whether you have a detailed brief or just a date and a feeling, we&apos;d love to hear what you&apos;re planning.</p><p className="contact-service-line">Event Planning <b>·</b> Production <b>·</b> Decoration <b>·</b> Rentals</p><ContactDetails /></div>
      <div className="form-card"><p className="eyebrow">Event enquiry</p><h2>Tell us a little more.</h2><EnquiryForm /></div>
    </div></section>
  </>;
}
