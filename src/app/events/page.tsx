import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EventGrid } from "@/components/event-grid";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { eventCategories } from "@/content/site";

export const metadata: Metadata = { title: "Events We Cover", description: "Weddings, celebrations, corporate events, concerts, exhibitions and customized experiences by Aarambh." };

export default function EventsPage() {
  return <>
    <PageHero eyebrow="Events we cover" title="For every reason to gather." copy="From intimate celebrations to public productions, we bring the same care to the idea, environment and execution." image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2200&q=88" />
    <section className="section-pad"><div className="shell"><SectionHeading eyebrow="Your occasion" title="The occasion sets the tone. We shape the experience." /><Reveal><EventGrid items={eventCategories} /></Reveal></div></section>
    <section className="contact-cta compact-cta"><div className="shell contact-cta-grid"><div><p className="eyebrow">Something different?</p><h2>Let&apos;s make it your own.</h2><p>Tell us the occasion, scale and atmosphere you have in mind.</p></div><Link className="button" href="/contact">Talk to Aarambh <ArrowRight size={17} /></Link></div></section>
  </>;
}
