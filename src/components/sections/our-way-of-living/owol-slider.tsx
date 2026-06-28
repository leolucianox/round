"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const slides = [
  {
    bg: "radial-gradient(ellipse at 38% 42%, rgba(26,82,214,0.55) 0%, transparent 55%), radial-gradient(ellipse at 74% 68%, rgba(0,201,90,0.38) 0%, transparent 50%), linear-gradient(160deg, #2a4a8a 0%, #1a2a5a 100%)",
    label: "Living Room",
  },
  {
    bg: "radial-gradient(ellipse at 46% 44%, rgba(245,160,40,0.62) 0%, transparent 55%), radial-gradient(ellipse at 70% 72%, rgba(26,54,136,0.42) 0%, transparent 50%), linear-gradient(160deg, #b87a2a 0%, #3a2410 100%)",
    label: "Kitchen",
  },
  {
    bg: "radial-gradient(ellipse at 54% 46%, rgba(26,143,214,0.72) 0%, transparent 55%), radial-gradient(ellipse at 34% 74%, rgba(245,197,0,0.5) 0%, transparent 50%), linear-gradient(160deg, #1a70a0 0%, #0a2a3a 100%)",
    label: "Bedroom",
  },
  {
    bg: "radial-gradient(ellipse at 42% 42%, rgba(200,40,60,0.52) 0%, transparent 55%), radial-gradient(ellipse at 76% 70%, rgba(245,130,15,0.42) 0%, transparent 50%), linear-gradient(160deg, #6a2020 0%, #1a0a0a 100%)",
    label: "Common Area",
  },
];

export default function OwolSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="w-full flex flex-col gap-3 rounded-[32px] p-3 lg:h-[calc(100vh-24px)] min-h-[calc(100svh-24px)] lg:min-h-0"
      style={{ backgroundColor: "#f5c500", scrollSnapAlign: "start" }}
    >
      {/* Title row */}
      <div className="relative flex items-center justify-center py-3 pt-6 lg:pt-3">
        <h2
          className="font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2.6vw, 38px)" }}
        >
          What this means for you
        </h2>
      </div>

      {/* Photo card */}
      <div className="flex-1 relative rounded-[28px] overflow-hidden min-h-[360px] lg:min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="absolute inset-0"
            style={{ background: slides[active].bg }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: EASE }}
          />
        </AnimatePresence>

        {/* Label */}
        <motion.span
          key={`label-${active}`}
          className="absolute top-5 left-5 rounded-full px-3 py-1 text-[14px] font-bold z-10"
          style={{ backgroundColor: "rgba(255,255,255,0.85)", color: "#000" }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {slides[active].label}
        </motion.span>

        {/* Dot indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className="rounded-full transition-all duration-400"
              style={{
                width: i === active ? 26 : 8,
                height: 8,
                backgroundColor: i === active ? "#fff" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
