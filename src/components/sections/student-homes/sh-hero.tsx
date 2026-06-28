"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

/** Modern apartment-building facade, drawn to read like the reference photo. */
function BuildingFacade() {
  return (
    <svg viewBox="0 0 640 720" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sh-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a4a4d" />
          <stop offset="1" stopColor="#2c2c2e" />
        </linearGradient>
        <linearGradient id="sh-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cdd3d6" />
          <stop offset="1" stopColor="#aeb6ba" />
        </linearGradient>
      </defs>

      <rect width="640" height="720" fill="url(#sh-wall)" />
      {/* sky strip top-right */}
      <rect x="360" y="0" width="280" height="150" fill="url(#sh-sky)" />

      {/* upper louvered band */}
      <rect x="0" y="0" width="360" height="150" fill="#3c3c3f" />
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={`l-${i}`} x1="0" y1={12 + i * 12} x2="360" y2={12 + i * 12} stroke="#2a2a2c" strokeWidth="4" />
      ))}

      {/* window grid */}
      {Array.from({ length: 3 }).map((_, r) =>
        Array.from({ length: 5 }).map((_, c) => {
          const accent = (r + c) % 4 === 0;
          return (
            <rect
              key={`w-${r}-${c}`}
              x={28 + c * 120}
              y={180 + r * 130}
              width={92}
              height={96}
              rx="3"
              fill={accent ? "#0f5b52" : "#23383c"}
              stroke="#555"
              strokeWidth="3"
            />
          );
        })
      )}

      {/* ground / entrance band */}
      <rect x="0" y="560" width="640" height="160" fill="#202022" />
      <rect x="0" y="560" width="640" height="10" fill="#3a3a3c" />

      {/* glass entrance box */}
      <rect x="250" y="470" width="150" height="160" rx="6" fill="#15171a" stroke="#4a4a4d" strokeWidth="4" />
      <rect x="266" y="486" width="55" height="128" fill="#2b3033" />
      <rect x="329" y="486" width="55" height="128" fill="#22262a" />
      <text x="325" y="455" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="800" fontSize="26" fill="#f4e9e1">
        round.
      </text>

      {/* planter + greenery */}
      <rect x="430" y="588" width="180" height="42" rx="6" fill="#3a3a3c" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={`p-${i}`}
          d={`M${452 + i * 34} 588 C ${446 + i * 34} 560, ${460 + i * 34} 548, ${454 + i * 34} 528`}
          stroke="#2f9e5e"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
      ))}
      <ellipse cx="500" cy="560" rx="60" ry="26" fill="#2f9e5e" opacity="0.85" />
      <ellipse cx="556" cy="566" rx="44" ry="20" fill="#36b06b" opacity="0.8" />
    </svg>
  );
}

export default function ShHero() {
  return (
    <section className="flex flex-col lg:flex-row gap-3 lg:h-[calc(100vh-24px)]" style={{ scrollSnapAlign: "start" }}>
      {/* Left: text card — slightly narrower */}
      <motion.div
        className="w-full lg:w-[42%] flex flex-col rounded-[32px] px-7 py-8 lg:px-10 lg:py-10 min-h-[360px] lg:min-h-0"
        style={{ backgroundColor: "#f4e9e1" }}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >

        <div className="mt-auto pb-2">
          <motion.h1
            variants={fadeUp}
            className="leading-[0.98] mb-5 mt-8 lg:mt-0"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 3.4vw, 62px)",
              fontWeight: 800,
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            Student<br />accommodation<br />at Round Parkside
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-black/60 leading-relaxed"
            style={{ fontSize: "clamp(14px, 1vw, 17px)", maxWidth: "420px" }}
          >
            Fully equipped and move-in ready, our units provide everything you need
            to hit &ldquo;student mode&rdquo; from day one. Designed around your daily
            flow, Round Parkside features a 24/7 gym, a laundry room, and social
            spaces. Whether you&rsquo;re preparing for finals or catching up with
            friends, you&rsquo;ll find the perfect balance to live, study, and unwind.
          </motion.p>
        </div>
      </motion.div>

      {/* Right: photo card — slightly wider */}
      <motion.div
        className="flex-1 rounded-[32px] overflow-hidden min-h-[300px] lg:min-h-0"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <BuildingFacade />
      </motion.div>
    </section>
  );
}
