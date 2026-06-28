"use client";

import { motion } from "framer-motion";

const photos = [
  { label: "Tech", bg: `radial-gradient(ellipse at 40% 40%, rgba(200,40,40,0.85) 0%, transparent 60%), #1a1a1a` },
  { label: "Explore", bg: `radial-gradient(ellipse at 50% 45%, rgba(180,150,120,0.8) 0%, transparent 60%), #5a4a3a` },
  { label: "Art", bg: `radial-gradient(ellipse at 40% 50%, rgba(122,60,240,0.7) 0%, transparent 55%), radial-gradient(ellipse at 70% 60%, rgba(0,201,90,0.5) 0%, transparent 50%), #2a1a3a` },
  { label: "Community", bg: `radial-gradient(ellipse at 45% 45%, rgba(240,74,0,0.6) 0%, transparent 55%), #2a2018` },
  { label: "Life", bg: `radial-gradient(ellipse at 50% 50%, rgba(26,143,214,0.6) 0%, transparent 60%), #1a2a3a` },
  { label: "Culture", bg: `radial-gradient(ellipse at 55% 35%, rgba(200,40,100,0.8) 0%, transparent 55%), #1a1a2a` },
  { label: "Sports", bg: `radial-gradient(ellipse at 35% 55%, rgba(0,201,90,0.75) 0%, transparent 55%), #0a1a0a` },
  { label: "Music", bg: `radial-gradient(ellipse at 50% 40%, rgba(245,130,15,0.8) 0%, transparent 55%), #2a1a0a` },
  { label: "Design", bg: `radial-gradient(ellipse at 45% 50%, rgba(165,133,224,0.8) 0%, transparent 55%), #1a1a3a` },
  { label: "Travel", bg: `radial-gradient(ellipse at 50% 45%, rgba(26,143,214,0.7) 0%, transparent 55%), radial-gradient(ellipse at 70% 65%, rgba(0,201,90,0.45) 0%, transparent 45%), #1a2a1a` },
];

const CARD_GAP = 12;

export default function Social() {
  return (
    <section className="w-full overflow-hidden rounded-[32px]" style={{ backgroundColor: "#f4e9e1" }}>
      <div className="flex flex-col gap-3 p-3">
        {/* Cards: mobile = stacked (purple card row 1, ticker row 2) / desktop = side by side */}
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Purple "Staying connected" card */}
          <motion.div
            className="rounded-[24px] p-6 flex flex-col justify-between flex-shrink-0"
            style={{
              height: "clamp(200px, 25vw, 300px)",
              width: "min(260px, 55vw)",
              backgroundColor: "#a585e0",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] font-bold w-fit"
              style={{ backgroundColor: "rgba(255,255,255,0.35)" }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="black" stroke="none" />
              </svg>
              Instagram
            </span>
            <h2
              className="leading-[0.93] text-black"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 2.4vw, 40px)", fontWeight: 800 }}
            >
              Staying<br />connected
            </h2>
          </motion.div>

          {/* Infinite photo ticker */}
          <div className="flex-1 overflow-hidden rounded-[24px]" style={{ height: "clamp(200px, 25vw, 300px)" }}>
            <motion.div
              className="flex h-full"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
              style={{ width: "fit-content" }}
            >
              {[...photos, ...photos].map((photo, i) => (
                <div
                  key={i}
                  className="rounded-[24px] flex-shrink-0 flex items-end p-4"
                  style={{
                    width: "min(260px, 55vw)",
                    height: "clamp(200px, 25vw, 300px)",
                    marginRight: CARD_GAP,
                    background: photo.bg,
                  }}
                >
                  <span className="text-white/40 text-[13px] font-medium">{photo.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
