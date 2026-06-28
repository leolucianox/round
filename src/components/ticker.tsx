"use client";

import { motion } from "framer-motion";

interface TickerProps {
  items: string[];
  bg: string;
  color: string;
  duration?: number;
}

const Flower = ({ color }: { color: string }) => (
  <svg width="13" height="13" viewBox="0 0 12 12" className="mx-3 flex-shrink-0">
    <g fill={color}>
      <circle cx="6" cy="2.4" r="2" />
      <circle cx="6" cy="9.6" r="2" />
      <circle cx="2.4" cy="6" r="2" />
      <circle cx="9.6" cy="6" r="2" />
      <circle cx="6" cy="6" r="1.6" />
    </g>
  </svg>
);

export default function Ticker({ items, bg, color, duration = 24 }: TickerProps) {
  const repeated = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-2.5 flex items-center rounded-[32px]"
      style={{ backgroundColor: bg }}
    >
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="text-[15px] font-semibold tracking-wide uppercase"
              style={{ color }}
            >
              {item}
            </span>
            <Flower color={color} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
