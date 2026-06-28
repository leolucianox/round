"use client";

import { useEffect, useRef } from "react";

// 3 visible at once. Track = NUM_COLS/3 × container width.
const NUM_COLS = 7;
const NUM_VISIBLE = 3;
// Each "card-to-card" transition = 100vh scroll  →  wrapper height = (NUM_COLS - NUM_VISIBLE + 1) × 100
const WRAPPER_HVH = (NUM_COLS - NUM_VISIBLE + 1) * 100; // 500
const TRACK_WIDTH_PCT = (NUM_COLS / NUM_VISIBLE) * 100;  // 233.33%
const COL_WIDTH_PCT   = 100 / NUM_COLS;                  // 14.28% of track = 33.33% of container
const SHIFT_PCT       = 100 * (NUM_COLS - NUM_VISIBLE) / NUM_COLS; // 57.14%

// ── Photo backgrounds ──────────────────────────────────────────────────────
const BG = {
  teal:   "radial-gradient(ellipse at 50% 40%, rgba(26,143,214,0.72) 0%, transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(0,201,90,0.5) 0%, transparent 45%), #0a3050",
  orange: "radial-gradient(ellipse at 60% 40%, rgba(240,74,0,0.72) 0%, transparent 55%), radial-gradient(ellipse at 35% 75%, rgba(26,54,136,0.5) 0%, transparent 45%), #1a0a04",
  violet: "radial-gradient(ellipse at 45% 42%, rgba(122,60,240,0.72) 0%, transparent 55%), radial-gradient(ellipse at 72% 72%, rgba(0,201,90,0.45) 0%, transparent 48%), #0e0628",
  warm:   "radial-gradient(ellipse at 52% 44%, rgba(245,160,40,0.72) 0%, transparent 55%), radial-gradient(ellipse at 34% 76%, rgba(200,40,60,0.45) 0%, transparent 48%), #1e0e04",
  sky:    "radial-gradient(ellipse at 48% 38%, rgba(26,143,214,0.8) 0%, transparent 55%), radial-gradient(ellipse at 70% 72%, rgba(245,197,0,0.45) 0%, transparent 45%), #041428",
};

// ── Column definitions ─────────────────────────────────────────────────────
type ColDef =
  | { kind: "solid";     bg: string; tag: string; title: string; body: string; body2?: string }
  | { kind: "photo-top"; photo: string; card: string; tag: string; title: string; body: string }
  | { kind: "text-top";  photo: string; card: string; tag: string; title: string; body: string };

const COLS: ColDef[] = [
  {
    kind:  "solid",
    bg:    "#7a3cf0",
    tag:   "Events",
    title: "Events at Round",
    body:  "A mix of experiences that shapes your day — from wellbeing and creativity to social nights and cultural moments.",
    body2: "You choose what fits. We make it happen.",
  },
  {
    kind:  "photo-top",
    photo: BG.teal,
    card:  "#00c95a",
    tag:   "Health & Wellness",
    title: "Movement, balance and moments to reset.",
    body:  "Group workouts and wellness activities that support both body and mind.",
  },
  {
    kind:  "text-top",
    photo: BG.orange,
    card:  "#f5c500",
    tag:   "Social Days & Nights",
    title: "Easy-going gatherings and themed nights.",
    body:  "Always inclusive, always on your own terms.",
  },
  {
    kind:  "photo-top",
    photo: BG.violet,
    card:  "#1a52d6",
    tag:   "Career",
    title: "Growing beyond the classroom.",
    body:  "Talks, workshops and sessions focused on skills, ideas and future opportunities.",
  },
  {
    kind:  "text-top",
    photo: BG.warm,
    card:  "#e01f26",
    tag:   "Creativity",
    title: "Ideas, inspiration, and new experiences.",
    body:  "Workshops, talks, city explorations and cultural moments that bring people together.",
  },
  {
    kind:  "solid",
    bg:    "#00c95a",
    tag:   "Give-Back",
    title: "Staying connected to the city around us.",
    body:  "Initiatives that give something back to the neighbourhood, the environment and the wider community.",
  },
  {
    kind:  "photo-top",
    photo: BG.sky,
    card:  "#f04a00",
    tag:   "Local",
    title: "Discover the city like a local.",
    body:  "Guided walks, local hot spots and neighbourhood events that connect you to where you live.",
  },
];

// ── Shared style helpers ───────────────────────────────────────────────────
const badge = (light?: boolean): React.CSSProperties => ({
  display: "inline-block",
  backgroundColor: light ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.18)",
  color: light ? "#000" : "#fff",
  borderRadius: 999,
  padding: "4px 12px",
  fontSize: 13,
  fontWeight: 700,
  marginBottom: 14,
  alignSelf: "flex-start" as const,
});

const textCard = (bg: string): React.CSSProperties => ({
  flex: 1,
  borderRadius: 24,
  backgroundColor: bg,
  padding: "18px 24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: `2px solid ${bg}`,
});

const photoCard = (photo: string, borderColor?: string): React.CSSProperties => ({
  flex: 4,
  borderRadius: 24,
  overflow: "hidden",
  position: "relative",
  background: photo,
  ...(borderColor ? { border: `2px solid ${borderColor}` } : {}),
});

// ── Mobile: simple stacked cards (no scroll-jacking) ───────────────────────
function CommScrollMobile() {
  return (
    <div className="flex flex-col gap-3 lg:hidden" style={{ marginTop: 12 }}>
      {COLS.map((col, i) => {
        if (col.kind === "solid") {
          return (
            <div
              key={i}
              style={{
                borderRadius: 24,
                backgroundColor: col.bg,
                border: `2px solid ${col.bg}`,
                padding: 28,
                minHeight: 260,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span style={badge()}>{col.tag}</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 7vw, 40px)", fontWeight: 800, color: "#fff", lineHeight: 1.05, marginBottom: 12 }}>
                {col.title}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15, lineHeight: 1.6 }}>{col.body}</p>
              {col.body2 && (
                <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 1.5, marginTop: 8 }}>{col.body2}</p>
              )}
            </div>
          );
        }

        const textBlock = (
          <div style={textCard(col.card)}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 800, color: "#000", lineHeight: 1.15, marginBottom: 5 }}>
              {col.kind === "text-top" ? col.tag : col.title}
            </h3>
            <p style={{ fontSize: 14, color: "rgba(0,0,0,0.62)", lineHeight: 1.5 }}>{col.body}</p>
          </div>
        );

        const photoBlock = (
          <div style={{ ...photoCard(col.photo, col.card), minHeight: 200 }}>
            {col.kind === "photo-top" && (
              <span style={{ ...badge(true), position: "absolute", top: 14, left: 14 }}>{col.tag}</span>
            )}
          </div>
        );

        return (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {col.kind === "photo-top" ? (
              <>
                {photoBlock}
                {textBlock}
              </>
            ) : (
              <>
                {textBlock}
                {photoBlock}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Component ──────────────────────────────────────────────────────────────
export default function CommScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      const track   = trackRef.current;
      if (!wrapper || !track) return;

      const rect       = wrapper.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = rect.top < 0 ? Math.min(1, -rect.top / scrollable) : 0;

      track.style.transform = `translateX(-${p * SHIFT_PCT}%)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <CommScrollMobile />
      <div
        ref={wrapperRef}
        className="hidden lg:block"
        style={{ height: `${WRAPPER_HVH}vh`, position: "relative", scrollSnapAlign: "start", marginTop: "12px" }}
      >
      {/* Sticky container */}
      <div
        style={{
          position: "sticky",
          top: 12,
          height: "calc(100vh - 24px)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          borderRadius: 32,
          backgroundColor: "#f4e9e1",
        }}
      >
        {/* Horizontal track — 7 cards × (1/3 container) each */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            width: `${TRACK_WIDTH_PCT}%`,
            flex: "1 1 0",
            willChange: "transform",
          }}
        >
          {COLS.map((col, i) => {
            const isFirst = i === 0;
            const isLast  = i === COLS.length - 1;
            const pad: React.CSSProperties = {
              width:     `${COL_WIDTH_PCT}%`,
              flexShrink: 0,
              padding: `0 ${isLast ? 10 : 5}px 0 ${isFirst ? 10 : 5}px`,
            };

            if (col.kind === "solid") {
              return (
                <div key={i} style={pad}>
                  <div style={{
                    height: "100%", borderRadius: 24,
                    backgroundColor: col.bg,
                    border: `2px solid ${col.bg}`,
                    padding: 32,
                    display: "flex", flexDirection: "column", justifyContent: "flex-end",
                  }}>
                    <span style={badge()}>{col.tag}</span>
                    <h2 style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(24px, 2.2vw, 42px)", fontWeight: 800,
                      color: "#fff", lineHeight: 1.05, marginBottom: 12,
                    }}>{col.title}</h2>
                    <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15, lineHeight: 1.6 }}>
                      {col.body}
                    </p>
                    {col.body2 && (
                      <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 1.5, marginTop: 8 }}>
                        {col.body2}
                      </p>
                    )}
                  </div>
                </div>
              );
            }

            if (col.kind === "photo-top") {
              return (
                <div key={i} style={pad}>
                  <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={photoCard(col.photo, col.card)}>
                      <span style={{ ...badge(true), position: "absolute", top: 14, left: 14 }}>
                        {col.tag}
                      </span>
                    </div>
                    <div style={textCard(col.card)}>
                      <h3 style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(15px, 1.1vw, 19px)", fontWeight: 800,
                        color: "#000", lineHeight: 1.15, marginBottom: 5,
                      }}>{col.title}</h3>
                      <p style={{ fontSize: 14, color: "rgba(0,0,0,0.62)", lineHeight: 1.5 }}>{col.body}</p>
                    </div>
                  </div>
                </div>
              );
            }

            // text-top
            return (
              <div key={i} style={pad}>
                <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={textCard(col.card)}>
                    <h3 style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(15px, 1.1vw, 19px)", fontWeight: 800,
                      color: "#000", lineHeight: 1.15, marginBottom: 5,
                    }}>{col.tag}</h3>
                    <p style={{ fontSize: 14, color: "rgba(0,0,0,0.62)", lineHeight: 1.5 }}>{col.body}</p>
                  </div>
                  <div style={{ ...photoCard(col.photo, col.card), position: "relative" }} />
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
}
