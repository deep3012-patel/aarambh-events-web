import Image from "next/image";
import Link from "next/link";

export type EventCardItem = {
  title: string;
  description: string;
  image: string;
};

export function EventGrid({ items, limit }: { items: EventCardItem[]; limit?: number }) {
  const displayedItems = limit ? items.slice(0, limit) : items;
  return (
    <div className="event-grid">
      {displayedItems.map((item, index) => (
        <Link className="event-card" href="/contact" key={`${item.title}-${index}`}>
          <Image src={item.image} alt={`${item.title} Indian wedding event setup`} fill sizes="(max-width: 680px) 86vw, (max-width: 1024px) 44vw, 25vw" />
          <span className="event-card-overlay" />
          <span className="event-card-content">
            <strong>{item.title}</strong>
            <small>{item.description}</small>
          </span>
        </Link>
      ))}
    </div>
  );
}
