"use client";

import { motion } from "framer-motion";

const features = [
  "Fully furnished",
  "Smart TV",
  "Private workspace",
  "Air Conditioning",
  "Private kitchen",
  "Super-fast WiFi",
  "Private bathroom",
  "Balcony",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function OurSpaces() {
  return (
    <section className="w-full overflow-hidden rounded-[32px] lg:h-[72vh]" style={{ backgroundColor: "#f4e9e1", scrollSnapAlign: "start" }}>
      <div className="flex flex-col lg:flex-row items-center gap-8 px-6 py-8 lg:px-10 lg:h-full overflow-visible lg:overflow-hidden">
        {/* Left: text */}
        <motion.div
          className="w-full lg:w-[42%] flex-shrink-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h2
            variants={fadeUp}
            className="leading-[0.95] mb-5"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(42px, 4.2vw, 66px)", fontWeight: 800 }}
          >
            Student living,<br />redefined.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-black/60 leading-relaxed mb-8"
            style={{ fontSize: "clamp(15px, 1vw, 18px)", maxWidth: "370px" }}
          >
            A new concept in student living — fully furnished, move-in ready units
            designed for comfort and ease. It&rsquo;s a place to belong. Join a vibrant
            community and experience student living like never before.
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2.5 text-[15px] font-medium text-black/80">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <circle cx="8" cy="8" r="7" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                  <path d="M5 8l2 2 4-4" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </div>
            ))}
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="/student-homes"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-bold text-[15px]"
            style={{ backgroundColor: "#000" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Check out our Spaces
            <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
              <path d="M7.17418 1.66471L0.574525 1.66471L0.589256 0L10.0173 0L10.0173 9.42815L8.3527 9.44288L8.3527 2.84322L1.17851 10.0174L0 8.8389L7.17418 1.66471Z" fill="white" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Right: Corridor perspective */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="rounded-[28px] overflow-hidden" style={{ background: "#ece4da", aspectRatio: "5/4" }}>
            <svg viewBox="0 0 500 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              <rect width="500" height="400" fill="#ece4da" />
              {/* Perspective lines from center vanishing point */}
              {[
                [0, 0], [500, 0], [0, 400], [500, 400],
                [0, 130], [500, 130], [0, 270], [500, 270],
                [125, 0], [375, 0], [125, 400], [375, 400],
              ].map(([x, y], i) => (
                <line key={`p-${i}`} x1="250" y1="200" x2={x} y2={y} stroke="#000" strokeWidth="0.6" opacity="0.12" />
              ))}
              {/* Nested colored door frames receding into distance */}
              {[
                { s: 6, c: "#1a3688" },
                { s: 34, c: "#f5c500" },
                { s: 60, c: "#f04a00" },
                { s: 84, c: "#00c95a" },
                { s: 106, c: "#7a3cf0" },
                { s: 126, c: "#e01f26" },
                { s: 144, c: "#1a8fd6" },
                { s: 160, c: "#f5c500" },
                { s: 174, c: "#000000" },
              ].map(({ s, c }, i) => (
                <rect
                  key={i}
                  x={s}
                  y={s * 0.8}
                  width={500 - s * 2}
                  height={400 - s * 1.6}
                  fill="none"
                  stroke={c}
                  strokeWidth={i < 7 ? 9 : 12}
                  rx={i === 0 ? 18 : 2}
                />
              ))}
              {/* Side door panels */}
              {[1, 2, 3, 4].map((i) => {
                const s = 34 + i * 24;
                const lc = ["#f5c500", "#00c95a", "#f04a00", "#7a3cf0"][i - 1];
                const rc = ["#7a3cf0", "#1a8fd6", "#e01f26", "#f5c500"][i - 1];
                return (
                  <g key={`door-${i}`}>
                    <rect x={s + 5} y={s * 0.8 + 40} width={16} height={30} fill={lc} opacity={0.65} rx={2} />
                    <rect x={500 - s - 21} y={s * 0.8 + 40} width={16} height={30} fill={rc} opacity={0.65} rx={2} />
                  </g>
                );
              })}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
