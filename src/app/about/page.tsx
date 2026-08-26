import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Icon } from "@/components/icon-map";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { reasons } from "@/content/site";

export const metadata: Metadata = { title: "About Us", description: "Discover the creative planning, production and on-ground approach behind Aarambh Events & Production." };

const skills = ["Creative planning", "Professional execution", "Reliable vendors", "Event production", "Decoration", "On-ground management"];

export default function AboutPage() {
  return <>
    <PageHero eyebrow="About Aarambh" title="Turning moments into experiences." copy="A professional event planning, production, decoration and execution company for occasions that deserve thoughtful attention." image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=88" />
    <section className="section-pad"><div className="shell about-story-grid">
      <Reveal className="about-image-wrap"><Image src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=86" alt="Elegant event tablescape with place settings" fill sizes="(max-width: 900px) 90vw, 42vw" /></Reveal>
      <div><SectionHeading eyebrow="Our point of view" title="The planning behind the pleasure." /><Reveal delay={0.1}><div className="long-copy"><p>Aarambh Events &amp; Production brings together the practical discipline of event delivery with a genuine love for how a space can make people feel. We work across celebrations, weddings, corporate experiences and customized occasions—from the early concept to the final guest moment.</p><p>That means one team thinking through the visual story, the production, the suppliers, the timings and all of the small details that make the day feel seamless.</p><Link className="text-link" href="/contact">Start a conversation <ArrowRight size={16} /></Link></div></Reveal></div>
    </div></section>
    <section className="section-pad section-dark"><div className="shell"><SectionHeading eyebrow="What comes together" title="A capable team behind every detail." /><div className="skills-grid">{skills.map((skill, index) => <Reveal key={skill} delay={index * 0.05}><div><Check size={17} />{skill}</div></Reveal>)}</div></div></section>
    <section className="section-pad"><div className="shell"><SectionHeading eyebrow="How we work" title="Made personal. Managed professionally." copy="Aarambh is built for people who value creative expression and a clear, dependable way of bringing it to life." /><div className="reason-cards">{reasons.slice(0, 3).map((reason, index) => <Reveal key={reason.title} delay={index * 0.07}><article><span><Icon name={reason.icon} /></span><h3>{reason.title}</h3><p>{reason.description}</p></article></Reveal>)}</div></div></section>
  </>;
}
