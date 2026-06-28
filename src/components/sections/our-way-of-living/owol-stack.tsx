"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PEEK = 22; // px each stacked card peeks above the next

const CARDS = [
  {
    color: "#00c95a",
    text: "Because it's shaped around real everyday life.",
  },
  {
    color: "#e01f26",
    text: "Because it's more than just a place to stay.",
  },
  {
    color: "#1a8fd6",
    text: "Because feeling at home is what matters most.",
  },
];

function CircleProgress({ activeIdx, total }: { activeIdx: number; total: number }) {
  const r = 20;
  const circ = 2 * Math.PI * r;
  const pct = (activeIdx + 1) / total;
  const offset = circ * (1 - pct);

  return (
    <svg width="52" height="52" viewBox="0 0 52 52">
      <circle cx="26" cy="26" r={r} fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="2.5" />
      <circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        stroke="rgba(0,0,0,0.75)"
        strokeWidth="2.5"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 26 26)"
        style={{ transition: "stroke-dashoffset 0.55s cubic-bezier(0.4,0,0.2,1)" }}
      />
    </svg>
  );
}

export default function OwolStack() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Card 2 (red): slides in during progress 0.15 → 0.45
  const card2Y = useTransform(scrollYProgress, [0.15, 0.45], ["100%", "0%"]);
  // Card 3 (blue): slides in during progress 0.5 → 0.8
  const card3Y = useTransform(scrollYProgress, [0.5, 0.8], ["100%", "0%"]);

  // Track active index for circle progress
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v < 0.45) setActiveIdx(0);
      else if (v < 0.8) setActiveIdx(1);
      else setActiveIdx(2);
    });
  }, [scrollYProgress]);

  return (
    <div
      ref={wrapperRef}
      style={{ height: "300vh", scrollSnapAlign: "start" }}
    >
      {/* Sticky inner */}
      <div
        className="sticky flex flex-col gap-3 overflow-hidden"
        style={{ top: "12px", height: "calc(100vh - 24px)" }}
      >
        {/* Title area */}
        <div className="relative flex items-center justify-center py-2 pt-14 lg:pt-2 flex-shrink-0">
          <h2
            className="font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 5.5vw, 84px)" }}
          >
            Why it&apos;s different
          </h2>
        </div>

        {/* Cards container */}
        <div className="relative flex-1 min-h-0 overflow-hidden rounded-[32px]">
          {/* Card 1 — green, always at base */}
          <div
            className="absolute inset-0 rounded-[32px] p-6 lg:p-10 flex flex-col"
            style={{ backgroundColor: CARDS[0].color, zIndex: 1 }}
          >
            <p
              className="font-extrabold"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 3.2vw, 52px)", maxWidth: "65%", lineHeight: 1.2 }}
            >
              {CARDS[0].text}
            </p>
          </div>

          {/* Card 2 — red, slides up over card 1 */}
          <motion.div
            className="absolute left-0 right-0 bottom-0 rounded-[32px] p-6 lg:p-10 flex flex-col"
            style={{ top: PEEK, backgroundColor: CARDS[1].color, zIndex: 2, y: card2Y }}
          >
            <p
              className="font-extrabold"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 3.2vw, 52px)", maxWidth: "65%", lineHeight: 1.2 }}
            >
              {CARDS[1].text}
            </p>
          </motion.div>

          {/* Card 3 — blue, slides up over card 2 */}
          <motion.div
            className="absolute left-0 right-0 bottom-0 rounded-[32px] p-6 lg:p-10 flex flex-col"
            style={{ top: PEEK * 2, backgroundColor: CARDS[2].color, zIndex: 3, y: card3Y }}
          >
            <p
              className="font-extrabold"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 3.2vw, 52px)", maxWidth: "65%", lineHeight: 1.2 }}
            >
              {CARDS[2].text}
            </p>
          </motion.div>

          {/* Circle progress — bottom-right, above all cards */}
          <div className="absolute bottom-8 right-8 z-10 pointer-events-none">
            <CircleProgress activeIdx={activeIdx} total={CARDS.length} />
          </div>
        </div>
      </div>
    </div>
  );
}
