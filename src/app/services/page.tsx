import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/content/site";

export const metadata: Metadata = { title: "Services", description: "Event planning, decoration, event production, entertainment and event rentals from Aarambh." };

export default function ServicesPage() {
  return <>
    <PageHero eyebrow="Our services" title="One team. Every essential detail." copy="Plan it, style it, stage it and deliver it with a partner that understands the complete event picture." image="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=2200&q=88" />
    <section className="section-pad section-dark"><div className="shell"><SectionHeading eyebrow="Capabilities" title="Everything an experience needs to come together." /><div className="services-grid">{services.map((service, index) => <Reveal key={service.title} delay={(index % 4) * 0.05}><ServiceCard {...service} /></Reveal>)}</div></div></section>
    <section className="section-pad"><div className="shell rental-callout"><div className="rental-icon"><Box size={28} /></div><div><p className="eyebrow">Event rentals</p><h2>Set the scene with the right pieces.</h2><p>From chairs, tables and sofas to lighting, props, décor items and production equipment—we can help source the elements your event needs.</p></div><Link className="button" href="/contact">Enquire Now <ArrowRight size={17} /></Link></div></section>
  </>;
}
