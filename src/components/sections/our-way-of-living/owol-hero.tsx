"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

function Character() {
  return (
    <div
      className="rounded-[20px] overflow-hidden flex-shrink-0"
      style={{ width: 140, height: 180, backgroundColor: "#f5c500", border: "3px solid rgba(0,0,0,0.12)" }}
    >
      <svg viewBox="0 0 140 180" className="w-full h-full">
        {/* dots background */}
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={18 + c * 34} cy={18 + r * 28} r={3} fill="rgba(0,0,0,0.08)" />
          ))
        )}
        {/* body */}
        <ellipse cx="70" cy="115" rx="32" ry="40" fill="#1a3688" />
        {/* head */}
        <circle cx="70" cy="66" r="28" fill="#f4e9e1" />
        {/* eyes */}
        <circle cx="61" cy="61" r="4.5" fill="#1a3688" />
        <circle cx="79" cy="61" r="4.5" fill="#1a3688" />
        <circle cx="62.5" cy="59.5" r="1.5" fill="#fff" />
        <circle cx="80.5" cy="59.5" r="1.5" fill="#fff" />
        {/* smile */}
        <path d="M60 72 Q70 80 80 72" stroke="#1a3688" strokeWidth="2.8" fill="none" strokeLinecap="round" />
        {/* arms */}
        <ellipse cx="32" cy="110" rx="11" ry="22" fill="#f04a00" transform="rotate(-18 32 110)" />
        <ellipse cx="108" cy="110" rx="11" ry="22" fill="#00c95a" transform="rotate(18 108 110)" />
        {/* bag */}
        <rect x="55" y="108" width="30" height="26" rx="5" fill="#7a3cf0" />
        <rect x="63" y="104" width="14" height="8" rx="3" fill="#5a2cc0" />
        {/* legs */}
        <rect x="56" y="150" width="13" height="26" rx="6.5" fill="#1a3688" />
        <rect x="71" y="150" width="13" height="26" rx="6.5" fill="#0f2460" />
      </svg>
    </div>
  );
}

const lines = [
  "We believe student living should feel natural,",
  "not temporary.",
  "Functional, but also personal.",
  "Social, yet never forced.",
  "That’s why we design spaces that support",
  "everyday life, create room for connection,",
  "and take the hassle out of it.",
  "Because living shouldn’t feel like a",
  "compromise. It should feel just right.",
];

export default function OwolHero() {
  return (
    <section className="lg:h-[calc(100vh-24px)]" style={{ scrollSnapAlign: "start" }}>
      <motion.div
        className="relative w-full lg:h-full min-h-[calc(100svh-24px)] lg:min-h-0 rounded-[32px] p-6 lg:p-10 flex flex-col overflow-hidden"
        style={{ backgroundColor: "#e01f26" }}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      >

        {/* Character illustration — top right */}
        <motion.div
          className="absolute top-6 right-6 lg:top-8 lg:right-8"
          initial={{ opacity: 0, scale: 0.88, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
        >
          <div className="scale-[0.38] lg:scale-100 origin-top-right">
            <Character />
          </div>
        </motion.div>

        {/* Text block — bottom left, max 58% width */}
        <div className="mt-auto max-w-[88%] lg:max-w-[58%]">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 2.4vw, 36px)",
                fontWeight: 800,
                lineHeight: 1.38,
                color: "#000",
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
