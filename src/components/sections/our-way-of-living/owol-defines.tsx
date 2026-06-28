"use client";

import { motion } from "framer-motion";

type Cell = string | null;

function parseGrid(rows: string[]): Cell[][] {
  return rows.map((row) =>
    row.split("").map((ch) => {
      if (ch === "G") return "#00c95a";
      if (ch === "B") return "#1a8fd6";
      if (ch === "R") return "#e01f26";
      return null;
    })
  );
}

// 14 cols × 20 rows — shapes centred, empty rows act as padding
const COLS = 14;
const ROWS = 20;

// "For People" — large C-shape with inner cells on right
const smileGrid = parseGrid([
  "..............",
  "..............",
  "..............",
  "..............",
  "..GGGGGGGGGG..",
  ".G..........G.",
  "G..........GG.",
  "G..........GG.",
  "G.............",
  "G.............",
  "G.............",
  "G..........GG.",
  "G..........GG.",
  ".G..........G.",
  "..GGGGGGGGGG..",
  "..............",
  "..............",
  "..............",
  "..............",
  "..............",
]);

// "By Design" — checkerboard wedge, left-aligned
const designGrid = parseGrid([
  "..............",
  "..............",
  "..............",
  ".B.B.B.B......",
  "..B.B.B.......",
  ".B.B.B.B......",
  "..B.B.B.......",
  ".B.B.B........",
  "..B.B.........",
  ".B.B..........",
  "..B...........",
  ".B............",
  "..............",
  "..............",
  "..............",
  "..............",
  "..............",
  "..............",
  "..............",
  "..............",
]);

// "With Care" — pixel heart, left-of-centre
const heartGrid = parseGrid([
  "..............",
  "..............",
  "..............",
  "..............",
  "..............",
  ".RR...RR......",
  "RRRR.RRRR.....",
  "RRRRRRRRR.....",
  "RRRRRRRRR.....",
  ".RRRRRRR......",
  "..RRRRR.......",
  "...RRR........",
  "....R.........",
  "..............",
  "..............",
  "..............",
  "..............",
  "..............",
  "..............",
  "..............",
]);

function PixelArt({ grid }: { grid: Cell[][] }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${COLS} ${ROWS}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width={COLS} height={ROWS} fill="#f5c500" />
      {/* grid lines */}
      {Array.from({ length: COLS + 1 }).map((_, i) => (
        <line key={`v${i}`} x1={i} y1={0} x2={i} y2={ROWS} stroke="#000" strokeWidth="0.035" opacity="0.35" />
      ))}
      {Array.from({ length: ROWS + 1 }).map((_, i) => (
        <line key={`h${i}`} x1={0} y1={i} x2={COLS} y2={i} stroke="#000" strokeWidth="0.035" opacity="0.35" />
      ))}
      {/* pixels */}
      {grid.map((row, r) =>
        row.map((color, c) =>
          color ? <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill={color} /> : null
        )
      )}
    </svg>
  );
}

const cards = [
  {
    grid: smileGrid,
    title: "For People",
    text: "Everything starts with how it feels to live here. From private spaces to shared experiences, people always come first.",
  },
  {
    grid: designGrid,
    title: "By Design",
    text: "Nothing is accidental. Every detail is designed to support the way you live and the way you feel, every day.",
  },
  {
    grid: heartGrid,
    title: "With Care",
    text: "At the heart of everything we do. We care for the people who live here, the spaces we create, and the city we're part of.",
  },
];

export default function OwolDefines() {
  return (
    <section
      className="w-full flex flex-col gap-4 rounded-[32px] px-5 sm:px-8 pt-20 lg:pt-6 pb-5 lg:h-[calc(100vh-24px)]"
      style={{ backgroundColor: "#f5c500", scrollSnapAlign: "start" }}
    >
      {/* Title row */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        <h2
          className="font-extrabold tracking-tight text-center"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5.8vw, 92px)" }}
        >
          What defines us
        </h2>
      </div>

      {/* 3 columns — fills remaining space */}
      <div className="flex flex-col lg:flex-row gap-4 flex-1 min-h-0">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col min-h-0 rounded-[28px] overflow-hidden"
            style={{ border: "1.5px solid rgba(0,0,0,0.28)" }}
          >
            {/* Pixel art — fills available height */}
            <div className="flex-1 min-h-[150px] lg:min-h-0">
              <PixelArt grid={card.grid} />
            </div>

            {/* Title + text inside the card */}
            <div className="text-center flex-shrink-0 px-5 py-5">
              <h3
                className="font-extrabold mb-1.5"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(19px, 1.5vw, 24px)" }}
              >
                {card.title}
              </h3>
              <p className="text-black/70 leading-snug" style={{ fontSize: "clamp(14px, 0.9vw, 16px)" }}>
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.a
        href="/student-homes"
        className="flex items-center justify-center gap-3 rounded-full py-4 flex-shrink-0"
        style={{ backgroundColor: "#0d0d0d" }}
        whileHover={{ backgroundColor: "#262626" }}
        transition={{ duration: 0.2 }}
      >
        <span
          className="text-white font-extrabold"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 1.2vw, 20px)" }}
        >
          Check out our Spaces
        </span>
        <svg width="13" height="13" viewBox="0 0 11 11" fill="none">
          <path d="M7.17418 1.66471L0.574525 1.66471L0.589256 6.74452e-05L10.0173 6.90346e-05L10.0173 9.42815L8.3527 9.44288L8.3527 2.84322L1.17851 10.0174L3.1533e-06 8.8389L7.17418 1.66471Z" fill="white" />
        </svg>
      </motion.a>
    </section>
  );
}
