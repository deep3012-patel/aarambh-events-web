import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { IconName } from "@/content/site";
import { Icon } from "@/components/icon-map";

export function ServiceCard({
  icon,
  title,
  summary,
  items,
  compact = false,
}: {
  icon: IconName;
  title: string;
  summary: string;
  items: string[];
  compact?: boolean;
}) {
  return (
    <article className={`service-card ${compact ? "service-card-compact" : ""}`}>
      <div className="service-icon"><Icon name={icon} /></div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <ul>
        {items.slice(0, compact ? 3 : items.length).map((item) => <li key={item}>{item}</li>)}
      </ul>
      <Link href="/contact" className="text-link">Enquire now <ArrowUpRight size={16} /></Link>
    </article>
  );
}
