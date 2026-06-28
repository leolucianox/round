"use client";

import { motion } from "framer-motion";

const COLS = 38;
const ROWS = 7;

const COLORS = [
  "#e01f26", "#f04a00", "#f5c500", "#00c95a", "#1a3688",
  "#7a3cf0", "#000000", "#ff8800", "#00aacc", "#cc0066",
  "#44bb00", "#f4e9e1",
];

function seeded(n: number) {
  const x = Math.sin(n + 7) * 10000;
  return x - Math.floor(x);
}

function tileColor(col: number, row: number): string {
  const s = seeded(col * 97 + row * 31);
  if (s < 0.32) return COLORS[Math.floor(seeded(col * 13 + row * 7) * 11)];
  return "#f4e9e1";
}

export default function Footer() {
  return (
    <footer
      className="w-full overflow-hidden rounded-[32px]"
      style={{ backgroundColor: "#f4e9e1" }}
    >
      {/* Pixel mosaic */}
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          gap: "2px",
          padding: "2px",
          height: "clamp(120px, 15vw, 180px)",
        }}
      >
        {Array.from({ length: COLS * ROWS }).map((_, i) => {
          const col = i % COLS;
          const row = Math.floor(i / COLS);
          return (
            <motion.div
              key={i}
              style={{ backgroundColor: tileColor(col, row), borderRadius: 2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (col + row) * 0.006, duration: 0.25 }}
            />
          );
        })}
      </div>

      {/* Wordmark */}
      <div className="px-6 sm:px-10 pt-8 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg
            viewBox="0 0 148 42"
            fill="none"
            className="w-full"
            style={{ maxWidth: 860, height: "auto" }}
          >
            <path d="M0 27.704V8.32666H11.7227V24.5993C11.7227 27.6504 12.6327 29.0957 14.6133 29.0957C16.915 29.0957 17.825 27.2757 17.825 24.3317V8.32666H29.5477V37.7685H19.2167V28.8828H18.6279C18.3067 33.1115 16.4868 38.3038 9.52807 38.3038C2.56937 38.3038 0 33.9133 0 27.704Z" fill="black" />
            <path d="M47.9601 16.9982C45.6584 16.9982 44.6948 18.8181 44.6948 21.7622V37.7672H32.9721V8.32654H43.3566V17.2123H43.9454C44.2666 12.9835 46.0866 7.79126 53.527 7.79126C59.3081 7.79126 62.6269 11.5383 62.6269 17.7476V37.7672H50.9042V21.441C50.9042 18.4434 49.9942 16.9982 47.9601 16.9982Z" fill="black" />
            <path d="M66.1571 8.32666H77.881V37.7685H66.1571V8.32666Z" fill="black" />
            <path d="M83.4981 29.2028V16.5688H80.3399V8.32546H84.4616V0H95.2208V8.32665H101.109V16.57H95.2208V26.2587C95.2208 28.0787 95.9702 29.0957 97.6831 29.0957C98.7001 29.0957 99.9848 28.7745 101.109 28.1857V36.5897C99.8242 37.3391 97.3084 38.3026 93.1867 38.3026C86.5492 38.3026 83.4981 34.6627 83.4981 29.2028Z" fill="black" />
            <path d="M102.875 26.4727H114.17C114.116 28.935 115.615 30.755 119.095 30.755C122.039 30.755 123.109 29.5774 123.109 27.8109C123.109 25.7768 121.182 25.5092 119.148 25.2951C113.046 24.6527 103.678 25.4021 103.678 17.4799C103.678 10.9494 110.102 7.79126 118.559 7.79126C127.017 7.79126 133.547 10.9494 133.547 19.1928H122.895C122.895 17.2123 121.985 15.4458 118.72 15.4458C116.043 15.4458 114.491 16.3558 114.491 18.1223C114.491 19.8887 116.258 20.4775 121.022 20.7987C129.158 21.3875 134.136 22.1369 134.136 28.6674C134.136 34.8231 129.693 38.356 119.255 38.356C106.248 38.356 102.874 32.8426 102.874 26.4727H102.875Z" fill="black" />
            <path d="M147.976 37.7674H136.256V29.9463L142.116 26.0352L147.976 29.9463V37.7674Z" fill="black" />
            <path d="M77.8861 0H66.1538V5.86672H77.8861V0Z" fill="black" />
          </svg>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-6 sm:px-10 py-5 border-t border-black/10">
        <div>
          <span className="text-[14px] text-black/40">© 2026 Units Living Ltd</span>
          <p className="text-[13px] text-black/25 mt-0.5">Web design by Studio Vela. Code by Helix Labs.</p>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <a href="#" className="text-[14px] text-black/40 hover:text-black transition-colors">FAQs</a>
          <a href="#" className="text-[14px] text-black/40 hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="text-[14px] text-black/40 hover:text-black transition-colors">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
}
