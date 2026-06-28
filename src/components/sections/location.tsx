"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Location() {
  return (
    <section
      className="relative w-full overflow-hidden rounded-[32px] flex flex-col lg:flex-row lg:h-[calc(100vh-24px)]"
      style={{ backgroundColor: "#f5c500", scrollSnapAlign: "start" }}
    >
      {/* Left: Text */}
      <motion.div
        className="flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-16 w-full lg:w-[44%]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp} className="mb-8">
          <span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[14px] font-bold"
            style={{ backgroundColor: "#f4e9e1" }}
          >
            Locations
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="leading-[0.98] mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(42px, 4.6vw, 68px)",
            fontWeight: 800,
          }}
        >
          Where your everyday just works
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-black/70 mb-10 leading-relaxed"
          style={{ fontSize: "clamp(16px, 1.1vw, 19px)", maxWidth: "380px" }}
        >
          Wake up, step out, you&rsquo;re there. Campus, classes, nights out — all
          within easy reach. No time wasted. Because at Round, location isn&rsquo;t
          random. It&rsquo;s chosen to match your rhythm and make life work better.
        </motion.p>

        <motion.p variants={fadeUp} className="text-[15px] font-bold text-black/60 mb-4">
          Explore what&rsquo;s near
        </motion.p>

        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <button
            className="flex-1 rounded-full px-4 py-2.5 text-[14px] font-bold border-2 border-black whitespace-nowrap"
            style={{ backgroundColor: "transparent" }}
          >
            Coming soon
          </button>
          <button
            className="flex-1 rounded-full px-4 py-2.5 text-[14px] font-bold text-white whitespace-nowrap"
            style={{ backgroundColor: "#e5392a" }}
          >
            Move-in ready
          </button>
        </motion.div>
      </motion.div>

      {/* Right: Map */}
      <div className="flex-1 relative overflow-hidden m-3 rounded-[24px] min-h-[300px] lg:min-h-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 600 700"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="600" height="700" fill="#f59e0b" />
          {Array.from({ length: 24 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={20 + i * 30} x2="600" y2={20 + i * 30}
              stroke="#fff" strokeWidth={i % 5 === 0 ? 2 : 0.8} opacity="0.5" />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`v-${i}`} x1={15 + i * 31} y1="0" x2={15 + i * 31} y2="700"
              stroke="#fff" strokeWidth={i % 4 === 0 ? 2 : 0.8} opacity="0.5" />
          ))}
          {[
            [50, 60, 95, 50], [180, 60, 80, 50], [300, 60, 105, 50], [440, 60, 90, 50],
            [50, 150, 70, 48], [165, 150, 110, 48], [320, 150, 85, 48],
            [50, 250, 130, 52], [230, 250, 90, 52], [370, 250, 100, 52],
            [50, 350, 100, 50], [200, 350, 105, 50], [355, 350, 90, 50],
            [50, 450, 80, 52], [180, 450, 120, 52], [350, 450, 95, 52],
            [50, 555, 110, 48], [210, 555, 95, 48], [355, 555, 100, 48],
          ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill="#fff" opacity="0.22" rx="5" />
          ))}
          {/* Highlighted district */}
          <path d="M310 250 L420 250 L420 360 L355 360 L355 320 L310 320 Z"
            fill="#1a3688" opacity="0.18" />
        </svg>

        {/* Pin */}
        <div className="absolute" style={{ top: "36%", left: "52%" }}>
          <div
            className="flex items-center gap-1.5 rounded-full px-4 py-2 text-white text-[14px] font-bold shadow-xl"
            style={{ backgroundColor: "#1a3688" }}
          >
            <svg width="10" height="13" viewBox="0 0 10 14" fill="white">
              <path d="M5 0C2.2 0 0 2.2 0 5c0 3.8 5 9 5 9s5-5.2 5-9c0-2.8-2.2-5-5-5zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
            Units Crestfield
          </div>
          <div className="w-0.5 h-4 mx-auto" style={{ backgroundColor: "#1a3688" }} />
          <div className="w-3 h-3 rounded-full border-2 border-white mx-auto" style={{ backgroundColor: "#1a3688" }} />
        </div>
      </div>
    </section>
  );
}
