import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/icon-map";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Stats } from "@/components/stats";
import { processSteps, reasons, stats } from "@/content/site";

export const metadata: Metadata = { title: "Why Aarambh", description: "See the creative, professional and detail-led approach that guides every Aarambh event." };

export default function WhyAarambhPage() {
  return <>
    <PageHero eyebrow="Why Aarambh" title="A clear vision, beautifully carried through." copy="Every experience benefits from someone keeping the creative idea and the practical details moving in the same direction." image="https://images.unsplash.com/photo-1532712938310-34d8b3f6c5f2?auto=format&fit=crop&w=2200&q=88" />
    <section className="section-pad"><div className="shell"><SectionHeading eyebrow="What guides us" title="The details people feel, even when they don&apos;t see them." /><div className="reason-cards reason-cards-full">{reasons.map((reason, index) => <Reveal key={reason.title} delay={(index % 3) * 0.06}><article><span><Icon name={reason.icon} /></span><h3>{reason.title}</h3><p>{reason.description}</p></article></Reveal>)}</div></div></section>
    <section className="section-pad section-dark"><div className="shell"><SectionHeading eyebrow="Our approach" title="A five-step route to a smooth celebration." align="center" /><div className="process-list">{processSteps.map((step, index) => <Reveal key={step.number} delay={index * 0.06}><article><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></article></Reveal>)}</div></div></section>
    <section className="stats-section stats-section-light"><div className="shell"><p className="placeholder-label">Illustrative placeholders — replace with verified figures.</p><Stats items={stats} /></div></section>
    <section className="contact-cta compact-cta"><div className="shell contact-cta-grid"><div><p className="eyebrow">Work with us</p><h2>Bring the moment to Aarambh.</h2><p>Start with a short conversation about your occasion and vision.</p></div><Link className="button" href="/contact">Let&apos;s Talk <ArrowRight size={17} /></Link></div></section>
  </>;
}
