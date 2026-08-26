import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { EventGrid } from "@/components/event-grid";
import { Icon } from "@/components/icon-map";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Stats } from "@/components/stats";
import { eventCategories, instagramImages, portfolioItems, processSteps, reasons, services, site, stats } from "@/content/site";

const heroImage = "https://i.pinimg.com/736x/cf/8e/dd/cf8edded6cc3cfe4bdbcb451d072fe13.jpg";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image src={heroImage} alt="Colourful Gujarati mehndi celebration stage with floral decor" fill priority sizes="100vw" className="home-hero-image" />
        <div className="home-hero-overlay" />
        <div className="hero-particles" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <div className="shell hero-content">
          <Reveal>
            <p className="eyebrow">Gujarati celebrations, beautifully produced</p>
            <h1>We Create.<br /><em>You Celebrate.</em></h1>
            <p>Aarambh Events &amp; Production brings Gujarati warmth, vibrant decoration, garba energy and flawless execution to every celebration.</p>
            <div className="hero-actions">
              <Link className="button" href="/portfolio">Explore Our Work <ArrowRight size={17} /></Link>
              <Link className="button button-ghost" href="/contact">Get In Touch <ArrowUpRight size={17} /></Link>
            </div>
          </Reveal>
          <div className="hero-side-note"><span>01</span><p>Every celebration deserves a beginning worth remembering.</p></div>
        </div>
        <div className="hero-scroll"><span>Scroll to discover</span><i /></div>
      </section>

      <section className="intro-section section-pad">
        <div className="shell intro-grid">
          <Reveal><p className="eyebrow">The Aarambh way</p><h2>Moments made <em>more meaningful.</em></h2></Reveal>
          <Reveal delay={0.1}><div className="intro-copy"><p>We transform ideas, occasions and spaces into experiences that feel effortless to the people in them. Every concept brings together creative planning, crafted detail and calm on-ground management.</p><Link className="text-link" href="/about">Meet Aarambh <ArrowUpRight size={16} /></Link></div></Reveal>
        </div>
      </section>

      <section className="section-pad section-dark services-section"><div className="shell">
        <div className="section-heading-row"><SectionHeading eyebrow="What we do" title="Designed around the occasion." copy="One capable team for the ideas, details and delivery that bring an event together." /><Link className="text-link desktop-only" href="/services">All services <ArrowRight size={16} /></Link></div>
        <div className="services-grid services-grid-featured">{services.slice(0, 4).map((service, index) => <Reveal key={service.title} delay={index * 0.06}><ServiceCard {...service} compact /></Reveal>)}</div>
        <Link className="text-link mobile-only" href="/services">All services <ArrowRight size={16} /></Link>
      </div></section>

      <section className="section-pad events-preview"><div className="shell">
        <div className="section-heading-row"><SectionHeading title="Every celebration, our way." copy="From wedding rituals and garba nights to birthdays and family milestones, we bring colour, culture and care to the occasion." /><Link className="text-link desktop-only" href="/events">Explore all events <ArrowRight size={16} /></Link></div>
        <Reveal><EventGrid items={eventCategories} limit={8} /></Reveal>
      </div></section>

      <section className="section-pad portfolio-preview"><div className="shell">
        <div className="section-heading-row"><SectionHeading title="Made to be remembered." copy="A glimpse of the visual worlds, stages and celebrations we can create." /><Link className="text-link desktop-only" href="/portfolio">View portfolio <ArrowRight size={16} /></Link></div>
        <PortfolioGrid items={portfolioItems} featuredOnly />
      </div></section>

      <section className="section-pad reason-section"><div className="shell reason-layout">
        <div className="reason-copy"><SectionHeading eyebrow="Why Aarambh" title="Creative in vision. Calm in execution." copy="The best events feel personal, polished and unforced. That is what our process is built to deliver." /><Link className="button button-ghost" href="/why-aarambh">Why choose us <ArrowRight size={17} /></Link></div>
        <div className="reasons-list">{reasons.slice(0, 4).map((reason, index) => <Reveal key={reason.title} delay={index * 0.06}><article><span><Icon name={reason.icon} size={20} /></span><div><h3>{reason.title}</h3><p>{reason.description}</p></div></article></Reveal>)}</div>
      </div></section>

      <section className="section-pad process-section"><div className="shell"><SectionHeading eyebrow="Our approach" title="A beautiful event starts with a clear process." align="center" /><div className="process-grid">{processSteps.map((step, index) => <Reveal key={step.number} delay={index * 0.06}><article className="process-step"><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article></Reveal>)}</div></div></section>

      <section className="stats-section"><div className="shell"><p className="placeholder-label">Our capabilities</p><Stats items={stats} /></div></section>

      <section className="section-pad instagram-section"><div className="shell">
        <div className="instagram-heading"><SectionHeading eyebrow="Follow our work" title="Small details. Big feeling." copy="A living gallery for future projects, behind-the-scenes moments and fresh inspiration." /><a className="button button-ghost" href={site.contact.instagram} target="_blank" rel="noreferrer">Follow Us on Instagram <ArrowUpRight size={17} /></a></div>
        <div className="instagram-grid">{instagramImages.map((item) => <a href={site.contact.instagram} target="_blank" rel="noreferrer" key={item.id}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 680px) 31vw, 16vw" /></a>)}</div>
      </div></section>

      <section className="contact-cta"><div className="shell contact-cta-grid"><div><p className="eyebrow">Let&apos;s begin</p><h2>Have an occasion in mind?</h2><p>Bring us the possibility. We&apos;ll help shape the experience.</p></div><div className="cta-actions"><Link className="button" href="/contact">Send an Enquiry <ArrowRight size={17} /></Link><a className="text-link" href={site.contact.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp us</a></div></div></section>
      <a className="floating-whatsapp" href={site.contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Aarambh on WhatsApp"><MessageCircle size={21} /><span>Chat with us</span></a>
    </>
  );
}
