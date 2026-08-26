import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SectionHeading } from "@/components/section-heading";
import { portfolioItems } from "@/content/site";

export const metadata: Metadata = { title: "Portfolio", description: "Explore wedding, decoration, production, corporate and celebration concepts by Aarambh Events & Production." };

export default function PortfolioPage() {
  return <>
    <PageHero eyebrow="Our portfolio" title="Spaces made for the moment." copy="Explore a curated collection of visual directions for celebrations, production and guest experiences. Share your brief and we will shape the right atmosphere for it." image="https://images.unsplash.com/photo-1464699908537-0954e50791ee?auto=format&fit=crop&w=2200&q=88" />
    <section className="section-pad portfolio-page"><div className="shell"><SectionHeading eyebrow="Browse the work" title="A different feeling for every occasion." /><PortfolioGrid items={portfolioItems} /></div></section>
    <section className="contact-cta compact-cta"><div className="shell contact-cta-grid"><div><p className="eyebrow">Your next event</p><h2>Let&apos;s make the brief feel real.</h2><p>Begin with the event you&apos;re imagining. We&apos;ll bring the planning, production and creative thinking.</p></div><Link className="button" href="/contact">Start an Enquiry <ArrowRight size={17} /></Link></div></section>
  </>;
}
