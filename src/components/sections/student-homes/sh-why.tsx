"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionBanner from "@/components/section-banner";

const cols = [
  {
    n: 1,
    title: "Practical ease and convenience, every day",
    bg: "#f5c500",
    items: [
      "All-inclusive rent — covering electricity, water, internet, heating/cooling and shared expenses.",
      "Smooth check-in and check-out, with our team by your side.",
      "Guided tours, in person or online.",
      "We take care of your unit — fast support, whenever you need it.",
      "Simple monthly payments, all done digitally.",
      "A two-month deposit secures your spot.",
    ],
    photoLabel: "Laundry.",
    photo: `radial-gradient(ellipse at 45% 40%, rgba(245,160,40,0.7) 0%, transparent 55%), radial-gradient(ellipse at 70% 75%, rgba(26,54,136,0.5) 0%, transparent 50%), linear-gradient(160deg, #b87a2a 0%, #3a2410 100%)`,
  },
  {
    n: 2,
    title: "A new take on student living",
    bg: "#00c95a",
    items: [
      "Community-first approach",
      "Seamless student living experience",
      "Smart technology",
      "Thoughtfully designed spaces",
      "Sustainable living",
    ],
    photoLabel: "",
    photo: `radial-gradient(ellipse at 55% 35%, rgba(245,210,160,0.7) 0%, transparent 55%), radial-gradient(ellipse at 35% 75%, rgba(120,90,60,0.55) 0%, transparent 50%), linear-gradient(160deg, #c9a17a 0%, #5a4632 100%)`,
  },
  {
    n: 3,
    title: "Security and comfort from day one",
    bg: "#1a8fd6",
    items: [
      "24/7 Security",
      "24/7 Support",
      "Fast & reliable maintenance",
      "24/7 Hot water",
      "Super-Fast WiFi",
    ],
    photoLabel: "G05",
    photo: `radial-gradient(ellipse at 65% 35%, rgba(122,60,240,0.4) 0%, transparent 55%), radial-gradient(ellipse at 35% 70%, rgba(26,143,214,0.4) 0%, transparent 50%), linear-gradient(155deg, #2a2630 0%, #0e0e12 100%)`,
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ShWhy() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // On touch / small screens there is no hover, so every card renders expanded
  // (lists visible) and the columns stack instead of competing for width.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="w-full flex flex-col gap-3 lg:h-[calc(100vh-24px)]" style={{ scrollSnapAlign: "start" }}>
      <SectionBanner title="Why Round hits different." />

      <div className="flex flex-col lg:flex-row gap-3 flex-1 min-h-0">
        {cols.map((c, i) => {
          const isOpen = hovered === i;
          return (
            <div
              key={c.n}
              className="flex-1 flex flex-col gap-3 lg:h-full min-h-0"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top: text card (expands on hover; always expanded on mobile) */}
              <motion.div
                className="rounded-[28px] px-6 pt-6 pb-4 overflow-hidden"
                style={{ backgroundColor: c.bg, flexBasis: isMobile ? "auto" : 0, flexShrink: isMobile ? 0 : 1 }}
                animate={isMobile ? undefined : { flexGrow: isOpen ? 3.6 : 1 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full border-2 border-black/30 flex items-center justify-center text-[15px] font-extrabold text-black flex-shrink-0">
                    {c.n}
                  </span>
                  <h3 className="leading-[1.05]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(19px, 1.4vw, 25px)", fontWeight: 800 }}>
                    {c.title}
                  </h3>
                </div>

                <motion.ul
                  className="flex flex-col"
                  animate={{ opacity: isMobile || isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {c.items.map((item) => (
                    <li key={item} className="text-[12.5px] leading-snug text-black/80 py-2 border-b border-black/15 last:border-0">
                      {item}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Bottom: photo (shrinks on hover) */}
              <motion.div
                className="rounded-[28px] overflow-hidden relative min-h-[200px] lg:min-h-0"
                style={{ flexBasis: isMobile ? "auto" : 0, flexShrink: isMobile ? 0 : 1, background: c.photo }}
                animate={isMobile ? undefined : { flexGrow: isOpen ? 1 : 2.4 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                {c.photoLabel && (
                  <span
                    className="absolute top-4 left-5 text-white/90"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: c.photoLabel === "G05" ? 20 : 22 }}
                  >
                    {c.photoLabel}
                  </span>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
