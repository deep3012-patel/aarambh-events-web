"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { PortfolioCategory, PortfolioItem } from "@/content/site";

const filters: Array<"All" | PortfolioCategory> = ["All", "Weddings", "Decoration", "Stage & Production", "Corporate", "Celebrations", "Rentals"];

export function PortfolioGrid({ items, featuredOnly = false }: { items: PortfolioItem[]; featuredOnly?: boolean }) {
  const [filter, setFilter] = useState<"All" | PortfolioCategory>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const source = featuredOnly ? items.filter((item) => item.featured) : items;
  const visibleItems = useMemo(
    () => source.filter((item) => filter === "All" || item.category === filter),
    [filter, source],
  );
  const selectedIndex = visibleItems.findIndex((item) => item.id === selectedId);
  const selected = selectedIndex >= 0 ? visibleItems[selectedIndex] : null;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!selected) return;
      if (event.key === "Escape") setSelectedId(null);
      if (event.key === "ArrowLeft") setSelectedId(visibleItems[(selectedIndex - 1 + visibleItems.length) % visibleItems.length]?.id ?? null);
      if (event.key === "ArrowRight") setSelectedId(visibleItems[(selectedIndex + 1) % visibleItems.length]?.id ?? null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selected, selectedIndex, visibleItems]);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);

  return (
    <>
      {!featuredOnly ? (
        <div className="portfolio-filters" role="toolbar" aria-label="Filter portfolio projects">
          {filters.map((item) => (
            <button className={filter === item ? "selected" : ""} type="button" key={item} onClick={() => setFilter(item)}>
              {item}
            </button>
          ))}
        </div>
      ) : null}

      <div className="portfolio-grid">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, index) => (
            <motion.article
              className={`project-card ${index === 0 && visibleItems.length > 2 ? "project-card-large" : ""}`}
              layout
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              key={item.id}
            >
              <button type="button" onClick={() => setSelectedId(item.id)} aria-label={`View ${item.title} project`}>
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 720px) 90vw, (max-width: 1024px) 46vw, 33vw" />
                <span className="project-overlay" />
                <span className="project-category">{item.category}</span>
                <span className="project-details"><strong>{item.title}</strong><small>{item.description}</small></span>
                <span className="project-action">View Project <ArrowUpRight size={16} /></span>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label={`${selected.title} project`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setSelectedId(null)}>
            <motion.div className="lightbox" initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }} onMouseDown={(event) => event.stopPropagation()}>
              <div className="lightbox-image"><Image src={selected.image} alt={selected.alt} fill sizes="90vw" priority /></div>
              <div className="lightbox-caption">
                <span>{selected.category}</span>
                <h2>{selected.title}</h2>
                <p>{selected.description}</p>
              </div>
              <button className="lightbox-close" type="button" onClick={() => setSelectedId(null)} aria-label="Close project preview"><X size={20} /></button>
              {visibleItems.length > 1 ? <>
                <button className="lightbox-nav lightbox-prev" type="button" onClick={() => setSelectedId(visibleItems[(selectedIndex - 1 + visibleItems.length) % visibleItems.length].id)} aria-label="Previous project"><ChevronLeft size={24} /></button>
                <button className="lightbox-nav lightbox-next" type="button" onClick={() => setSelectedId(visibleItems[(selectedIndex + 1) % visibleItems.length].id)} aria-label="Next project"><ChevronRight size={24} /></button>
              </> : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
