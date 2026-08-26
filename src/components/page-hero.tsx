import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
}) {
  return (
    <section className="page-hero">
      <Image src={image} alt="" fill priority sizes="100vw" className="page-hero-image" />
      <div className="page-hero-overlay" />
      <div className="shell page-hero-content">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{copy}</p>
          <span className="hero-corner"><ArrowDownRight size={22} /></span>
        </Reveal>
      </div>
    </section>
  );
}
