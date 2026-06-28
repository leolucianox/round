"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const GAP = 12;

const spaces = [
  {
    label: "Gym",
    bg: `radial-gradient(ellipse at 42% 44%, rgba(200,40,60,0.72) 0%, transparent 55%), radial-gradient(ellipse at 74% 72%, rgba(245,130,15,0.5) 0%, transparent 45%), #1a0a10`,
  },
  {
    label: "Social Lounge",
    bg: `radial-gradient(ellipse at 48% 44%, rgba(245,160,40,0.7) 0%, transparent 55%), radial-gradient(ellipse at 66% 74%, rgba(26,54,136,0.45) 0%, transparent 50%), #261808`,
  },
  {
    label: "Co-working",
    bg: `radial-gradient(ellipse at 46% 46%, rgba(122,60,240,0.65) 0%, transparent 55%), radial-gradient(ellipse at 72% 68%, rgba(0,201,90,0.4) 0%, transparent 50%), #160a28`,
  },
  {
    label: "Rooftop",
    bg: `radial-gradient(ellipse at 52% 38%, rgba(26,143,214,0.72) 0%, transparent 55%), radial-gradient(ellipse at 34% 76%, rgba(245,197,0,0.5) 0%, transparent 45%), #0a1e2e`,
  },
  {
    label: "Cinema Room",
    bg: `radial-gradient(ellipse at 44% 46%, rgba(240,74,0,0.65) 0%, transparent 55%), radial-gradient(ellipse at 72% 66%, rgba(26,82,214,0.45) 0%, transparent 50%), #1a0c04`,
  },
  {
    label: "Games Room",
    bg: `radial-gradient(ellipse at 50% 42%, rgba(0,201,90,0.68) 0%, transparent 55%), radial-gradient(ellipse at 74% 72%, rgba(245,197,0,0.5) 0%, transparent 45%), #041a0e`,
  },
];

const VISIBLE_DESKTOP = 2;
const VISIBLE_MOBILE = 1;

function NavButton({
  dir,
  onClick,
  disabled,
}: {
  dir: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir}
      className="w-12 h-12 rounded-full flex items-center justify-center transition-opacity"
      style={{ backgroundColor: "rgba(255,255,255,0.15)", opacity: disabled ? 0.3 : 1 }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        style={{ transform: dir === "next" ? "none" : "scaleX(-1)" }}
      >
        <path
          d="M5.5 3L10.5 8L5.5 13"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function CommGallery() {
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
    <section
      className="w-full rounded-[32px] p-3 flex flex-col lg:flex-row gap-3 lg:items-stretch"
      style={{ backgroundColor: "#e01f26" }}
    >
      {/* Left: text */}
      <motion.div
        className="w-full lg:w-[30%] flex flex-col justify-between gap-6 p-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <h2
            className="text-white leading-[0.98] mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 2.6vw, 42px)",
              fontWeight: 800,
            }}
          >
            Spaces that bring people together
          </h2>
          <p
            className="text-white/75 leading-relaxed mb-6"
            style={{ fontSize: "clamp(15px, 1vw, 17px)", maxWidth: 320 }}
          >
            Shared spaces designed for real life — to work, relax, move and
            connect. Not just to pass time, but to share it, your way.
          </p>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-2.5">
          <NavButton
            dir="prev"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={clampedIndex === 0}
          />
          <NavButton
            dir="next"
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            disabled={clampedIndex === maxIndex}
          />
        </div>
      </motion.div>

      {/* Right: carousel (2-up on desktop, 1-up on mobile) */}
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
              <span
                className="absolute top-4 left-4 rounded-full px-3 py-1 text-[13px] font-bold"
                style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#000" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
