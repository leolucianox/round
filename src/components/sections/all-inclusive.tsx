"use client";

import { useEffect, useRef } from "react";

const NUM_SLIDES = 2;

const communitySpaces = ["Fully equipped gym", "Self-service laundry room", "Social areas"];
const security = ["24/7 CCTV Surveillance", "Night patrol security", "Electronic access control", "Smart secure entry"];
const smartLiving = ["Digital mobile key", "Space reservations app", "Maintenance ticketing", "Digital intercom"];

function ArrowSmall({ color = "black", opacity = 0.5 }: { color?: string; opacity?: number }) {
  return (
    <svg width="10" height="10" viewBox="0 0 11 11" fill="none" className="flex-shrink-0">
      <path
        d="M7.17418 1.66471L0.574525 1.66471L0.589256 0L10.0173 0L10.0173 9.42815L8.3527 9.44288L8.3527 2.84322L1.17851 10.0174L0 8.8389L7.17418 1.66471Z"
        fill={color}
        opacity={opacity}
      />
    </svg>
  );
}

function InfoList({
  items,
  textColor = "#000",
  borderColor = "rgba(0,0,0,0.12)",
}: {
  items: string[];
  textColor?: string;
  borderColor?: string;
}) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="text-[15px] leading-snug pb-2 last:border-0"
          style={{ color: textColor, borderBottom: `1px solid ${borderColor}` }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function AllInclusiveMobile() {
  return (
    <section className="flex flex-col gap-3 rounded-[32px] p-4" style={{ backgroundColor: "#f4e9e1" }}>
      {/* Card 1 */}
      <div className="rounded-[28px] p-6 flex flex-col gap-4" style={{ backgroundColor: "#ef5a3c" }}>
        <h2 className="leading-tight text-black font-extrabold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 7vw, 36px)" }}>
          One Unit.<br />An entire universe.
        </h2>
        <p className="text-black/60 text-[14px] leading-relaxed">
          Fully furnished and all-inclusive. No hidden fees, no surprises. Just student living at its best.
        </p>
        <ul className="flex flex-col gap-2">
          {["Fully equipped gym", "Self-service laundry room", "Social areas"].map((item) => (
            <li key={item} className="text-[14px] font-semibold text-black border-b border-black/15 pb-2 last:border-0">{item}</li>
          ))}
        </ul>
      </div>
      {/* Card 2 */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-[28px] p-5 flex flex-col gap-3" style={{ backgroundColor: "#1c1c1e" }}>
          <h3 className="text-white font-bold text-[16px]" style={{ fontFamily: "var(--font-display)" }}>Security</h3>
          <ul className="flex flex-col gap-1.5">
            {["24/7 CCTV", "Night patrol", "Electronic access", "Smart entry"].map((item) => (
              <li key={item} className="text-[13px] text-white/70 border-b border-white/10 pb-1.5 last:border-0">{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[28px] p-5 flex flex-col gap-3" style={{ backgroundColor: "#3dc456" }}>
          <h3 className="text-black font-bold text-[16px]" style={{ fontFamily: "var(--font-display)" }}>Smart Living</h3>
          <ul className="flex flex-col gap-1.5">
            {["Digital key", "Space reservations", "Maintenance app", "Digital intercom"].map((item) => (
              <li key={item} className="text-[13px] text-black/70 border-b border-black/15 pb-1.5 last:border-0">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function AllInclusive() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const slides = slidesRef.current;
      if (!section || !slides) return;

      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;

      let p = 0;
      if (rect.top < 0) {
        p = Math.min(1, -rect.top / scrollable);
      }

      // Each slide occupies 100/NUM_SLIDES % of the slides container
      slides.style.transform = `translateX(-${p * (100 / NUM_SLIDES)}%)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="block lg:hidden">
        <AllInclusiveMobile />
      </div>
      <section
        ref={sectionRef}
        aria-label="All-inclusive features"
        className="hidden lg:block"
        style={{ height: `${NUM_SLIDES * 100}vh`, position: "relative" }}
      >
      <div
        style={{
          position: "sticky",
          top: 12,
          height: "calc(100vh - 24px)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          borderRadius: "32px",
          backgroundColor: "#f4e9e1",
        }}
      >
        {/* Slides track — driven by scroll progress */}
        <div
          ref={slidesRef}
          style={{
            display: "flex",
            width: `${NUM_SLIDES * 100}%`,
            flex: "1 1 0",
            willChange: "transform",
          }}
        >
          {/* ——— Slide 1 ——— */}
          <div style={{ width: `${100 / NUM_SLIDES}%`, flexShrink: 0, paddingRight: 6 }}>
            <div
              className="h-full grid grid-cols-4 gap-3"
              style={{ gridTemplateRows: "1fr 1fr" }}
            >
              {/* One Unit — coral, tall left */}
              <div
                className="col-span-1 row-span-2 rounded-[28px] p-7 flex flex-col justify-between"
                style={{ backgroundColor: "#ef5a3c" }}
              >
                <div>
                  <svg width="64" height="80" viewBox="0 0 64 80" fill="none">
                    <rect x="20" y="56" width="24" height="22" rx="3" fill="#1a3688" />
                    <path d="M32 56 C32 40 32 30 32 20" stroke="#00a050" strokeWidth="3" />
                    <path d="M32 34 C22 30 18 22 20 14 C28 16 32 24 32 34" fill="#00c95a" />
                    <path d="M32 30 C42 26 46 18 44 10 C36 12 32 20 32 30" fill="#00a050" />
                    <circle cx="32" cy="12" r="6" fill="#f5c500" />
                  </svg>
                </div>
                <div>
                  <p className="text-black/70 text-[14px] font-bold mb-2">Your rent covers everything</p>
                  <h2
                    className="leading-[0.98] mb-4 text-black"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(30px, 2.4vw, 42px)",
                      fontWeight: 800,
                    }}
                  >
                    One Unit. An entire universe.
                  </h2>
                  <p className="text-black/60 leading-snug" style={{ fontSize: "15px" }}>
                    Each unit is its own universe — fully furnished and all-inclusive. No hidden fees, no surprises.
                    Just student living at its best.
                  </p>
                </div>
              </div>

              {/* Interior photo — top center */}
              <div
                className="col-span-2 row-span-1 rounded-[28px]"
                style={{
                  background: `
                    radial-gradient(ellipse at 30% 40%, rgba(26,54,136,0.85) 0%, transparent 55%),
                    radial-gradient(ellipse at 70% 60%, rgba(240,74,0,0.55) 0%, transparent 50%),
                    radial-gradient(ellipse at 50% 85%, rgba(245,197,0,0.6) 0%, transparent 45%),
                    #1a6b8a
                  `,
                }}
              />

              {/* Community — purple, tall right */}
              <div
                className="col-span-1 row-span-2 rounded-[28px] p-6 flex flex-col"
                style={{ backgroundColor: "#a585e0" }}
              >
                <p className="text-[13px] font-bold text-black/50 uppercase tracking-wider mb-1">
                  Open access, 24/7
                </p>
                <h3
                  className="text-[20px] font-bold mb-5 text-black"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Community living spaces
                </h3>
                <ul className="flex flex-col gap-3 mt-auto">
                  {communitySpaces.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between text-[14px] font-semibold text-black border-b border-black/15 pb-3 last:border-0 last:pb-0"
                    >
                      {item}
                      <ArrowSmall />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social photo — bottom center-left */}
              <div
                className="col-span-1 row-span-1 rounded-[28px]"
                style={{
                  background: `
                    radial-gradient(ellipse at 40% 50%, rgba(0,201,90,0.8) 0%, transparent 55%),
                    radial-gradient(ellipse at 75% 70%, rgba(245,197,0,0.5) 0%, transparent 45%),
                    #0d6b4a
                  `,
                }}
              />

              {/* Door lock — bottom center-right */}
              <div
                className="col-span-1 row-span-1 rounded-[28px] flex items-center justify-center"
                style={{ backgroundColor: "#1a1410" }}
              >
                <div
                  className="rounded-xl border border-white/20 flex items-center justify-center"
                  style={{ width: 60, height: 84, backgroundColor: "#2a221c" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    <circle cx="12" cy="16" r="1" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ——— Slide 2 ——— */}
          <div style={{ width: `${100 / NUM_SLIDES}%`, flexShrink: 0, paddingLeft: 6 }}>
            <div
              className="h-full grid grid-cols-4 gap-3"
              style={{ gridTemplateRows: "1fr 1fr" }}
            >
              {/* Security — dark charcoal, tall left */}
              <div
                className="col-span-1 row-span-2 rounded-[28px] p-6 flex flex-col justify-start"
                style={{ backgroundColor: "#1c1c1e" }}
              >
                <p
                  className="text-[13px] font-bold uppercase tracking-wider mb-1"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Day and night
                </p>
                <h3 className="text-[22px] font-bold mb-4 text-white" style={{ fontFamily: "var(--font-display)" }}>
                  Security
                </h3>
                <InfoList items={security} textColor="rgba(255,255,255,0.85)" borderColor="rgba(255,255,255,0.1)" />
              </div>

              {/* Ambient interior — top center */}
              <div
                className="col-span-2 row-span-1 rounded-[28px]"
                style={{
                  background: `
                    radial-gradient(ellipse at 25% 45%, rgba(200,40,40,0.7) 0%, transparent 50%),
                    radial-gradient(ellipse at 65% 55%, rgba(26,54,136,0.6) 0%, transparent 50%),
                    radial-gradient(ellipse at 80% 25%, rgba(245,130,15,0.5) 0%, transparent 45%),
                    #2a1a0a
                  `,
                }}
              />

              {/* Smart Living — green, tall right */}
              <div
                className="col-span-1 row-span-2 rounded-[28px] p-6 flex flex-col justify-start"
                style={{ backgroundColor: "#3dc456" }}
              >
                <p
                  className="text-[13px] font-bold uppercase tracking-wider mb-1"
                  style={{ color: "rgba(0,0,0,0.5)" }}
                >
                  Designed for everyday ease
                </p>
                <h3 className="text-[22px] font-bold mb-4 text-black" style={{ fontFamily: "var(--font-display)" }}>
                  Smart Living
                </h3>
                <InfoList items={smartLiving} textColor="#000" borderColor="rgba(0,0,0,0.15)" />
              </div>

              {/* Phone/app — bottom center-left */}
              <div
                className="col-span-1 row-span-1 rounded-[28px] flex items-center justify-center"
                style={{
                  background: `radial-gradient(ellipse at 50% 50%, rgba(40,80,50,0.5) 0%, transparent 60%), #2a3a2a`,
                }}
              >
                <div
                  className="rounded-2xl border-2 border-white/20 flex items-center justify-center"
                  style={{ width: 64, height: 110, backgroundColor: "rgba(122,60,240,0.6)" }}
                >
                  <span className="text-white/70 text-[9px] font-bold text-center">
                    round
                    <br />
                    app
                  </span>
                </div>
              </div>

              {/* Desk/work photo — bottom center-right */}
              <div
                className="col-span-1 row-span-1 rounded-[28px]"
                style={{
                  background: `
                    radial-gradient(ellipse at 40% 45%, rgba(180,120,70,0.7) 0%, transparent 55%),
                    radial-gradient(ellipse at 70% 70%, rgba(60,90,60,0.6) 0%, transparent 50%),
                    #6b4a2a
                  `,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
