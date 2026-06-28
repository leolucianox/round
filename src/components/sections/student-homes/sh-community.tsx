"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const GAP = 12;

const spaces = [
  { label: "Lounge", bg: `radial-gradient(ellipse at 40% 45%, rgba(0,160,90,0.75) 0%, transparent 55%), radial-gradient(ellipse at 78% 72%, rgba(245,197,0,0.45) 0%, transparent 45%), #0d5a3a` },
  { label: "Hall", bg: `radial-gradient(ellipse at 50% 42%, rgba(240,120,40,0.6) 0%, transparent 55%), radial-gradient(ellipse at 30% 75%, rgba(26,54,136,0.5) 0%, transparent 50%), #241810` },
  { label: "Co-working", bg: `radial-gradient(ellipse at 45% 50%, rgba(26,82,214,0.6) 0%, transparent 55%), radial-gradient(ellipse at 72% 62%, rgba(0,201,90,0.4) 0%, transparent 50%), #122a4a` },
  { label: "Laundry room", bg: `radial-gradient(ellipse at 50% 45%, rgba(26,143,214,0.75) 0%, transparent 55%), radial-gradient(ellipse at 76% 76%, rgba(245,197,0,0.55) 0%, transparent 45%), #14365a` },
  { label: "Gym", bg: `radial-gradient(ellipse at 42% 42%, rgba(200,40,60,0.6) 0%, transparent 55%), radial-gradient(ellipse at 70% 70%, rgba(245,130,15,0.45) 0%, transparent 50%), #1a1014` },
  { label: "Study room", bg: `radial-gradient(ellipse at 55% 45%, rgba(245,160,60,0.6) 0%, transparent 55%), radial-gradient(ellipse at 35% 72%, rgba(60,90,60,0.5) 0%, transparent 50%), #2a1e12` },
];

const VISIBLE_DESKTOP = 2;
const VISIBLE_MOBILE = 1;

function NavButton({ dir, onClick, disabled }: { dir: "prev" | "next"; onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir}
      className="w-12 h-12 rounded-full flex items-center justify-center transition-opacity"
      style={{ backgroundColor: "rgba(255,255,255,0.15)", opacity: disabled ? 0.3 : 1 }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: dir === "next" ? "none" : "scaleX(-1)" }}>
        <path d="M5.5 3L10.5 8L5.5 13" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function ShCommunity() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [vw, setVw] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setVw(el.clientWidth));
    ro.observe(el);
    setVw(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const visibleCount = vw > 640 ? VISIBLE_DESKTOP : VISIBLE_MOBILE;
  const maxIndex = spaces.length - visibleCount;
  const clampedIndex = Math.min(index, maxIndex);
  const slideW = vw > 0 ? (vw - GAP * (visibleCount - 1)) / visibleCount : 0;
  const step = slideW + GAP;

  return (
    <section className="w-full rounded-[32px] p-3 flex flex-col lg:flex-row gap-3 lg:items-stretch" style={{ backgroundColor: "#1a52d6", scrollSnapAlign: "start" }}>
      {/* Left: text — stretches to match carousel height automatically */}
      <motion.div
        className="w-full lg:w-[30%] flex flex-col justify-between gap-6 p-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <h2 className="text-white leading-[0.98] mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 2.6vw, 42px)", fontWeight: 800 }}>
            Community<br />Living Spaces
          </h2>
          <p className="text-white/75 leading-relaxed mb-6" style={{ fontSize: "clamp(15px, 1vw, 17px)", maxWidth: 320 }}>
            Social areas to relax and connect, a self-service laundry room that makes
            life easier, and a fully equipped gym with 24/7 access — so you never lose
            your rhythm.
          </p>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-2.5">
          <NavButton dir="prev" onClick={() => setIndex((i) => Math.max(0, i - 1))} disabled={clampedIndex === 0} />
          <NavButton dir="next" onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))} disabled={clampedIndex === maxIndex} />
        </div>
      </motion.div>

      {/* Right: 2-up carousel — height driven by square cards */}
      <div ref={viewportRef} className="flex-1 overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: -clampedIndex * step }}
          transition={{ type: "spring", stiffness: 260, damping: 34 }}
        >
          {spaces.map((s, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-[24px] overflow-hidden"
              style={{
                width: slideW || "calc(50% - 6px)",
                aspectRatio: "1 / 1",
                marginRight: GAP,
                background: s.bg,
              }}
            >
              <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[13px] font-bold" style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#000" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
