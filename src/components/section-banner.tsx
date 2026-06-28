"use client";

import { motion } from "framer-motion";

interface SectionBannerProps {
  title: string;
  bg?: string;
  color?: string;
}

export default function SectionBanner({ title, bg = "#ee5a6a", color = "#000" }: SectionBannerProps) {
  return (
    <motion.div
      className="relative w-full flex items-center justify-center rounded-full py-4"
      style={{ backgroundColor: bg }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        className="font-extrabold tracking-tight"
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2.6vw, 36px)", color }}
      >
        {title}
      </span>
    </motion.div>
  );
}
