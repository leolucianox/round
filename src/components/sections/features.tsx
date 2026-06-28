"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const security = [
  "24/7 CCTV Surveillance",
  "377 Night patrol",
  "High-security entrance door with electronic lock",
  "Smart and secure access control",
];

const support = [
  "24/7 headset support",
  "Check-in & Onboarding assistance",
  "Fast request handling",
  "Fast maintenance support",
  "Continuous experience improvements",
];

const smartLiving = [
  "Digital mobile key",
  "Shared spaces reservations",
  "Maintenance ticketing system",
  "Laundry — EasyPay",
  "Digital intercom",
];

function InfoCard({
  eyebrow,
  title,
  items,
  textColor = "#000",
  borderColor = "rgba(0,0,0,0.12)",
}: {
  eyebrow: string;
  title: string;
  items: string[];
  textColor?: string;
  borderColor?: string;
}) {
  return (
    <>
      <p className="text-[13px] font-bold uppercase tracking-wider mb-1" style={{ color: textColor, opacity: 0.5 }}>
        {eyebrow}
      </p>
      <h3 className="text-[22px] font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: textColor }}>
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-[15px] leading-snug pb-2 last:border-0"
            style={{ color: textColor, borderBottom: `1px solid ${borderColor}`, opacity: 0.92 }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Features() {
  return (
    <section className="w-full">
      <motion.div
        className="grid grid-cols-4 gap-3"
        style={{ gridAutoRows: "minmax(250px, auto)" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        {/* Security — orange, tall left */}
        <motion.div
          variants={fadeUp}
          className="col-span-1 row-span-2 rounded-[28px] p-6 flex flex-col justify-start"
          style={{ backgroundColor: "#f5820f" }}
        >
          <InfoCard eyebrow="Day and night" title="Security" items={security} />
        </motion.div>

        {/* Desk photo — top center-left */}
        <motion.div
          variants={fadeUp}
          className="col-span-1 row-span-1 rounded-[28px] overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse at 40% 45%, rgba(180,120,70,0.7) 0%, transparent 55%),
              radial-gradient(ellipse at 70% 70%, rgba(60,90,60,0.6) 0%, transparent 50%),
              #6b4a2a
            `,
          }}
        />

        {/* Phone photo — top center-right */}
        <motion.div
          variants={fadeUp}
          className="col-span-1 row-span-1 rounded-[28px] overflow-hidden flex items-center justify-center"
          style={{
            background: `
              radial-gradient(ellipse at 50% 50%, rgba(40,80,50,0.5) 0%, transparent 60%),
              #2a3a2a
            `,
          }}
        >
          <div
            className="rounded-2xl border-2 border-white/20 flex items-center justify-center"
            style={{ width: 64, height: 110, backgroundColor: "rgba(122,60,240,0.6)" }}
          >
            <span className="text-white/70 text-[9px] font-bold text-center">round<br />app</span>
          </div>
        </motion.div>

        {/* Smart Living — green, tall right */}
        <motion.div
          variants={fadeUp}
          className="col-span-1 row-span-2 rounded-[28px] p-6 flex flex-col justify-start"
          style={{ backgroundColor: "#3dc456" }}
        >
          <InfoCard eyebrow="Designed for everyday ease" title="Smart Living" items={smartLiving} />
        </motion.div>

        {/* Support — yellow, bottom center wide */}
        <motion.div
          variants={fadeUp}
          className="col-span-2 row-span-1 rounded-[28px] p-6"
          style={{ backgroundColor: "#f5c500" }}
        >
          <InfoCard eyebrow="We've got you covered" title="Support" items={support} />
        </motion.div>
      </motion.div>
    </section>
  );
}
