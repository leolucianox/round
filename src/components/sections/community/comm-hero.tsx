"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const heroBg = [
  "radial-gradient(ellipse at 32% 40%, rgba(26,82,214,0.82) 0%, transparent 52%)",
  "radial-gradient(ellipse at 72% 68%, rgba(0,201,90,0.42) 0%, transparent 48%)",
  "linear-gradient(160deg, #1a2046 0%, #0a1020 100%)",
].join(", ");

export default function CommHero() {
  return (
    <section
      className="w-full flex flex-col rounded-[32px] p-3 lg:h-[calc(100vh-80px)]"
      style={{
        scrollSnapAlign: "start",
        backgroundColor: "#f4e9e1",
      }}
    >
      {/* Two cards: 65 / 35 */}
      <div className="flex flex-col lg:flex-row gap-3 flex-1 min-h-0">
        {/* Left: photo 65% */}
        <motion.div
          className="relative rounded-[24px] overflow-hidden min-h-[280px] lg:min-h-0"
          style={{ flex: "65 1 0%", background: heroBg }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: EASE }}
        >
        </motion.div>

        {/* Right: text 35% */}
        <motion.div
          className="rounded-[24px] flex flex-col justify-between p-8"
          style={{ flex: "35 1 0%", backgroundColor: "#f04a00" }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
        >
          <div />
          <div>
            <h1
              className="font-extrabold leading-[0.96] mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 2.8vw, 50px)",
                color: "#000",
              }}
            >
              More than shared spaces. A shared way of living.
            </h1>
            <p
              className="leading-relaxed text-black/65"
              style={{ fontSize: "clamp(15px, 1vw, 17px)", maxWidth: 340 }}
            >
              We don&apos;t believe in forced connections or fixed formulas.
              Community at Round grows through everyday moments, shared spaces
              and the freedom to engage — or step back — whenever you want.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
