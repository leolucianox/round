"use client";

import { motion } from "framer-motion";

const words = ["Home", "of", "the", "uniquely", "awesome."];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-[32px]" style={{ height: "calc(100vh - 24px)", scrollSnapAlign: "start" }}>
      {/* Colorful background simulating the student lounge photo */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 60%, rgba(0, 140, 100, 0.85) 0%, transparent 55%),
            radial-gradient(ellipse at 55% 40%, rgba(26, 54, 136, 0.7) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(240, 74, 0, 0.5) 0%, transparent 45%),
            radial-gradient(ellipse at 40% 80%, rgba(245, 197, 0, 0.6) 0%, transparent 40%),
            #0d5a4a
          `,
        }}
      />

      {/* Decorative shapes suggesting furniture/space */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full opacity-30"
          style={{
            width: 300,
            height: 300,
            top: "60%",
            left: "10%",
            backgroundColor: "#f5c500",
          }}
        />
        <div
          className="absolute rounded-2xl opacity-20"
          style={{
            width: 200,
            height: 150,
            top: "20%",
            right: "15%",
            backgroundColor: "#7a3cf0",
          }}
        />
        <div
          className="absolute rounded-full opacity-25"
          style={{
            width: 120,
            height: 120,
            top: "15%",
            left: "30%",
            backgroundColor: "#00c95a",
          }}
        />
      </div>

      {/* Dark gradient overlay for text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        <h1
          className="text-white leading-[1.0] mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(54px, 6.5vw, 98px)",
            fontWeight: 800,
            maxWidth: "800px",
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={word}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-white/90 text-center mb-8"
          style={{ fontSize: "clamp(16px, 1.2vw, 20px)", maxWidth: "420px", lineHeight: 1.5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          All-inclusive student accommodation with everything you need to live,
          study and connect.
        </motion.p>

        <motion.a
          href="#"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-black font-bold text-[14px]"
          style={{ backgroundColor: "#f4e9e1" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Book your Unit
          <svg width="12" height="12" viewBox="0 0 11 11" fill="none">
            <path
              d="M7.17418 1.66471L0.574525 1.66471L0.589256 6.74452e-05L10.0173 6.90346e-05L10.0173 9.42815L8.3527 9.44288L8.3527 2.84322L1.17851 10.0174L3.1533e-06 8.8389L7.17418 1.66471Z"
              fill="black"
            />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
