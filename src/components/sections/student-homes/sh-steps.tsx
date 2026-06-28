"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const walks = [
  { n: "03'", t: "min to Alderton University entrance" },
  { n: "05'", t: "min to the nearest supermarket" },
  { n: "08'", t: "min to the tube station" },
  { n: "12'", t: "min to the nearest cafe" },
  { n: "04'", t: "min to Greenway Park" },
];

function PinIcon({ size = 11, color = "#000" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 10 14" fill={color}>
      <path d="M5 0C2.2 0 0 2.2 0 5c0 3.8 5 9 5 9s5-5.2 5-9c0-2.8-2.2-5-5-5zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  );
}

/** Compact neighbourhood map. */
function MiniMap() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[24px]">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="400" fill="#f0a500" />
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={14 + i * 30} x2="600" y2={14 + i * 30} stroke="#fff" strokeWidth={i % 4 === 0 ? 2 : 0.8} opacity="0.5" />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v-${i}`} x1={15 + i * 31} y1="0" x2={15 + i * 31} y2="400" stroke="#fff" strokeWidth={i % 4 === 0 ? 2 : 0.8} opacity="0.5" />
        ))}
        {[
          [40, 40, 90, 46], [170, 40, 80, 46], [300, 40, 100, 46], [440, 40, 90, 46],
          [40, 130, 70, 50], [160, 130, 110, 50], [320, 130, 90, 50], [450, 130, 90, 50],
          [40, 240, 120, 48], [210, 240, 90, 48], [360, 240, 100, 48],
          [40, 330, 95, 46], [190, 330, 110, 46], [360, 330, 95, 46],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} fill="#fff" opacity="0.2" rx="5" />
        ))}
        <path d="M300 150 L410 150 L410 250 L350 250 L350 215 L300 215 Z" fill="#1a3688" opacity="0.16" />
      </svg>

      <div className="absolute" style={{ top: "30%", left: "50%" }}>
        <div className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-white text-[13px] font-bold shadow-xl" style={{ backgroundColor: "#1a3688" }}>
          <PinIcon size={9} color="#fff" />
          Units Crestfield
        </div>
        <div className="w-0.5 h-3 mx-auto" style={{ backgroundColor: "#1a3688" }} />
        <div className="w-2.5 h-2.5 rounded-full border-2 border-white mx-auto" style={{ backgroundColor: "#1a3688" }} />
      </div>
    </div>
  );
}

export default function ShSteps() {
  return (
    <section className="flex flex-col lg:flex-row gap-3 lg:h-[calc(100vh-24px)]" style={{ scrollSnapAlign: "start" }}>
      {/* Left: yellow info card (60%) */}
      <motion.div
        className="w-full lg:w-[60%] flex flex-col rounded-[32px] px-7 py-8 lg:px-10 lg:py-9"
        style={{ backgroundColor: "#f5c500" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        {/* top row: location pill + address */}
        <motion.div variants={fadeUp} className="flex items-center justify-between gap-4 mb-7">
          <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[14px] font-bold flex-shrink-0" style={{ backgroundColor: "#f4e9e1" }}>
            <PinIcon /> Location
          </span>
          <div className="text-right text-[13px] text-black/70 leading-snug">
            <p className="font-bold text-black">14 Crestfield Lane</p>
            <p>E2 8HT, Bethnal Green, London</p>
            <p>+44 20 7946 0312</p>
          </div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="leading-[0.98] mb-4"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 3.6vw, 56px)", fontWeight: 800 }}
        >
          All you need,<br />just steps away
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-black/70 leading-relaxed mb-8"
          style={{ fontSize: "clamp(15px, 1vw, 17px)", maxWidth: "560px" }}
        >
          Life made simple. Just a short walk from Alderton University with easy
          access to the city centre, you&rsquo;re exactly where you need to be. And for
          those much-needed breaks, Greenway Park is just around the corner — the
          perfect spot to unwind and reset.
        </motion.p>

        <motion.p variants={fadeUp} className="text-[15px] font-bold text-black/60 mb-3">
          You are just a walk away:
        </motion.p>

        <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-auto">
          {walks.map((w) => (
            <div key={w.n} className="flex items-center gap-3 rounded-[18px] px-4 py-3" style={{ backgroundColor: "#ef5a3c" }}>
              <span className="text-[26px] font-extrabold leading-none text-black flex-shrink-0" style={{ fontFamily: "var(--font-display)" }}>
                {w.n}
              </span>
              <span className="text-[14px] leading-tight text-black/80">{w.t}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right: map + photo stacked (40%) */}
      <motion.div
        className="flex-1 flex flex-col gap-3"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Map */}
        <div className="rounded-[32px] overflow-hidden min-h-[260px] lg:min-h-0" style={{ flex: "0.82 1 0" }}>
          <MiniMap />
        </div>

        {/* Photo */}
        <div
          className="rounded-[32px] overflow-hidden relative flex items-end p-6 min-h-[220px] lg:min-h-0"
          style={{
            flex: "1 1 0",
            background: `
              radial-gradient(ellipse at 35% 30%, rgba(120,130,140,0.55) 0%, transparent 55%),
              radial-gradient(ellipse at 70% 75%, rgba(47,158,94,0.4) 0%, transparent 50%),
              linear-gradient(160deg, #4a4a4d 0%, #2a2a2c 100%)
            `,
          }}
        >
          <div className="absolute rounded-xl border border-white/20" style={{ width: 110, height: 120, right: 28, bottom: 24, background: "#15171a" }} />
          <span className="relative text-white/90 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
            round.
          </span>
        </div>
      </motion.div>
    </section>
  );
}
