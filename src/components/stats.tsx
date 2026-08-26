"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { stats } from "@/content/site";

type Stat = (typeof stats)[number];

function StatNumber({ value, suffix }: Pick<Stat, "value" | "suffix">) {
  const [number, setNumber] = useState(0);
  const [started, setStarted] = useState(false);
  const element = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const target = element.current;
    if (!target || started) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    observer.observe(target);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (reduceMotion) return;
    const startedAt = performance.now();
    const duration = 1050;
    let frame = 0;
    const update = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setNumber(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion, started, value]);

  return <span ref={element} className="stat-value">{reduceMotion && started ? value : number}{suffix}</span>;
}

export function Stats({ items }: { items: Stat[] }) {
  return (
    <div className="stats-grid">
      {items.map((item) => (
        <div className="stat" key={item.label}>
          <StatNumber value={item.value} suffix={item.suffix} />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
