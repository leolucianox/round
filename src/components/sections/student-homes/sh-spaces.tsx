"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const spaces = [
  {
    key: "Kiosk Unit",
    price: "£640",
    color: "#1a3688",
    idx: "01",
    subtitle: "The smart, compact start",
    desc: "A clever, all-inclusive starting point. Kiosk Units keep everything you need within reach — fully furnished, move-in ready, and priced to make student life simple.",
    photo1: `radial-gradient(ellipse at 50% 30%, rgba(26,54,136,0.75) 0%, transparent 55%), radial-gradient(ellipse at 75% 75%, rgba(0,201,90,0.4) 0%, transparent 50%), linear-gradient(155deg, #1a3060 0%, #0d1a38 100%)`,
    photo2: `radial-gradient(ellipse at 40% 40%, rgba(26,143,214,0.65) 0%, transparent 55%), radial-gradient(ellipse at 70% 70%, rgba(245,197,0,0.35) 0%, transparent 50%), linear-gradient(160deg, #1a4060 0%, #0a1e30 100%)`,
    label1: "Living Room", label2: "Bedroom",
  },
  {
    key: "Boost Unit",
    price: "£695",
    color: "#7a3cf0",
    idx: "02",
    subtitle: "The extra boost that you need!",
    desc: "An upgrade changes the game. Boost Units are our most popular choice — balanced, upgraded, and just right. They keep the smart, compact feel of Kiosk Units, while adding the little something that makes the difference: upper floors, private balconies, more natural light, or better views.",
    photo1: `radial-gradient(ellipse at 45% 35%, rgba(122,60,240,0.75) 0%, transparent 55%), radial-gradient(ellipse at 72% 72%, rgba(0,201,90,0.4) 0%, transparent 50%), linear-gradient(155deg, #2a1060 0%, #160828 100%)`,
    photo2: `radial-gradient(ellipse at 55% 40%, rgba(165,133,224,0.65) 0%, transparent 55%), radial-gradient(ellipse at 35% 72%, rgba(240,74,0,0.35) 0%, transparent 50%), linear-gradient(160deg, #3a1870 0%, #1a0838 100%)`,
    label1: "Living Room", label2: "Balcony View",
  },
  {
    key: "Flex Unit",
    price: "£750",
    color: "#f04a00",
    idx: "03",
    subtitle: "Room to flex and flow",
    desc: "A bit more space to spread out. Flex Units give you extra room to study, host, and live your way — the flexible middle ground between compact and premium.",
    photo1: `radial-gradient(ellipse at 48% 32%, rgba(240,74,0,0.75) 0%, transparent 55%), radial-gradient(ellipse at 26% 76%, rgba(245,197,0,0.5) 0%, transparent 50%), linear-gradient(155deg, #6a2010 0%, #2a0c04 100%)`,
    photo2: `radial-gradient(ellipse at 60% 42%, rgba(245,160,40,0.65) 0%, transparent 55%), radial-gradient(ellipse at 34% 70%, rgba(200,40,60,0.4) 0%, transparent 50%), linear-gradient(160deg, #7a3810 0%, #3a1806 100%)`,
    label1: "Study Room", label2: "Kitchen",
  },
  {
    key: "Vibe Unit",
    price: "£810",
    color: "#00c95a",
    idx: "04",
    subtitle: "The top-tier vibe",
    desc: "Our most spacious, light-filled units. Vibe Units sit on the best floors with the best views — for those who want student living at its absolute best.",
    photo1: `radial-gradient(ellipse at 50% 28%, rgba(0,201,90,0.75) 0%, transparent 55%), radial-gradient(ellipse at 76% 74%, rgba(26,143,214,0.4) 0%, transparent 50%), linear-gradient(155deg, #0a5030 0%, #041a10 100%)`,
    photo2: `radial-gradient(ellipse at 44% 38%, rgba(0,180,80,0.65) 0%, transparent 55%), radial-gradient(ellipse at 68% 68%, rgba(245,197,0,0.45) 0%, transparent 50%), linear-gradient(160deg, #1a6040 0%, #083020 100%)`,
    label1: "Rooftop Terrace", label2: "Master Suite",
  },
];

const amenities = [
  "17–22 m²",
  "120 / 140cm double bed",
  "Private kitchen",
  "Smart TV",
  "Fully furnished",
  "Dormwell mattress",
  "Private bathroom",
  "Air-Condition",
  "Fully equipped",
  "Private workspace",
  "Super-Fast WiFi",
  "Balcony",
];

export default function ShSpaces() {
  const [selected, setSelected] = useState(1);
  const space = spaces[selected];

  return (
    <section
      className="w-full rounded-[32px] p-3 flex flex-col overflow-hidden lg:h-[calc(100vh-24px)]"
      style={{ backgroundColor: "#f4e9e1", scrollSnapAlign: "start" }}
    >
      {/* Top row: selector + photos */}
      <div className="flex flex-col lg:flex-row gap-3 flex-1 min-h-0 mb-3">

        {/* Selector panel */}
        <div
          className="w-full lg:w-[26%] flex-shrink-0 rounded-[24px] p-4 flex flex-col gap-2"
          style={{ backgroundColor: "#000" }}
        >
          <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest px-1 mb-1">
            Choose your unit
          </p>

          {spaces.map((u, i) => {
            const active = i === selected;
            return (
              <button
                key={u.key}
                onClick={() => setSelected(i)}
                className="flex items-center gap-3 rounded-[16px] px-4 py-3 text-left transition-all duration-200"
                style={{ backgroundColor: active ? u.color : "rgba(255,255,255,0.06)" }}
              >
                <span
                  className="text-[11px] font-bold flex-shrink-0 w-5"
                  style={{ color: active ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.25)" }}
                >
                  {u.idx}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[14px] font-bold text-white leading-tight">{u.key}</span>
                  <span
                    className="block text-[12px]"
                    style={{ color: active ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.35)" }}
                  >
                    From {u.price} / mo
                  </span>
                </span>
                {active && (
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
                      <path d="M7.17418 1.66471L0.574525 1.66471L0.589256 0L10.0173 0L10.0173 9.42815L8.3527 9.44288L8.3527 2.84322L1.17851 10.0174L0 8.8389L7.17418 1.66471Z" fill="white" />
                    </svg>
                  </span>
                )}
              </button>
            );
          })}

          <div className="mt-auto pt-2 flex flex-col gap-2">
            <button
              type="button"
              className="w-full rounded-full py-3 font-bold text-[14px] text-black"
              style={{ backgroundColor: "#00c95a" }}
            >
              Book your Unit
            </button>
            <p className="text-[11px] text-white/25 text-center">+44 20 7946 0312</p>
          </div>
        </div>

        {/* Photos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={space.key}
            className="flex-1 flex gap-3 min-h-[240px] lg:min-h-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div
              className="flex-1 rounded-[24px] relative overflow-hidden"
              style={{ background: space.photo1 }}
            >
              <span
                className="absolute top-4 left-4 text-[12px] font-bold rounded-full px-3 py-1"
                style={{ backgroundColor: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.9)" }}
              >
                {space.label1}
              </span>
            </div>
            <div
              className="flex-1 rounded-[24px] relative overflow-hidden"
              style={{ background: space.photo2 }}
            >
              <span
                className="absolute top-4 left-4 text-[12px] font-bold rounded-full px-3 py-1"
                style={{ backgroundColor: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.9)" }}
              >
                {space.label2}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom: description card */}
      <div
        className="rounded-[24px] p-5 flex flex-col gap-4 flex-shrink-0"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-8">
          {/* Unit info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={space.key}
              className="flex-1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span
                  className="rounded-full px-3 py-0.5 text-[11px] font-bold text-white"
                  style={{ backgroundColor: space.color }}
                >
                  {space.idx}
                </span>
                <span className="text-[13px] font-semibold" style={{ color: space.color }}>
                  {space.subtitle}
                </span>
              </div>
              <h2
                className="leading-[0.95] mb-2.5"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 2.6vw, 40px)", fontWeight: 800 }}
              >
                {space.key}
              </h2>
              <p className="text-[13px] text-black/55 leading-relaxed max-w-[520px]">{space.desc}</p>
            </motion.div>
          </AnimatePresence>

          {/* Price + all-inclusive */}
          <div className="flex items-stretch gap-3 flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`price-${space.color}`}
                className="rounded-[18px] px-5 py-4 text-center flex flex-col justify-center min-w-[100px]"
                style={{ backgroundColor: space.color }}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="block text-[10px] font-bold text-white/60 uppercase tracking-wide">From</span>
                <span
                  className="block leading-none text-white"
                  style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800 }}
                >
                  {space.price}
                </span>
                <span className="block text-[10px] font-bold text-white/60 uppercase tracking-wide">/ month</span>
              </motion.div>
            </AnimatePresence>

            <div
              className="rounded-[18px] px-4 py-4 flex flex-col justify-center max-w-[210px]"
              style={{ backgroundColor: "#f04a00" }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="rgba(0,0,0,0.18)" />
                  <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-bold text-white">All-inclusive rent</span>
              </div>
              <p className="text-[12px] text-white/80 leading-snug">
                Bills, water, WiFi, heating &amp; cooling — plus all Community Spaces.
              </p>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 pt-4 border-t border-black/8">
          {amenities.map((a) => (
            <div key={a} className="flex items-center gap-2 text-[12.5px] font-medium text-black/70">
              <span
                className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: space.color }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4l2 2 3-3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {a}
            </div>
          ))}
        </div>
        <p className="text-[10px] text-black/30 leading-snug">
          Each unit includes furniture, kitchen appliances and bathroom equipment. *Balconies and select features available in specific units only.
        </p>
      </div>
    </section>
  );
}
