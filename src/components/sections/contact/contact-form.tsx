"use client";

import { useState } from "react";

const inputBase: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.55)",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 12,
  padding: "10px 14px",
  fontSize: 15,
  fontFamily: "inherit",
  outline: "none",
  color: "#000",
};

const labelBase: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "rgba(0,0,0,0.4)",
  display: "block",
  marginBottom: 5,
};

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label style={labelBase}>{label}</label>
      <input type={type} style={inputBase} />
    </div>
  );
}

function CheckboxRow({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label style={{ display: "flex", alignItems: "flex-start", gap: 8, cursor: "pointer" }}>
      <div
        onClick={onChange}
        style={{
          width: 14,
          height: 14,
          borderRadius: 3,
          border: "1.5px solid rgba(0,0,0,0.28)",
          backgroundColor: checked ? "#000" : "transparent",
          flexShrink: 0,
          marginTop: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {checked && (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span style={{ fontSize: 13, color: "rgba(0,0,0,0.5)", lineHeight: 1.5 }}>{label}</span>
    </label>
  );
}

export default function ContactForm() {
  const [terms, setTerms] = useState(false);
  const [news, setNews] = useState(false);

  return (
    <div
      className="flex flex-col rounded-[32px] min-h-[560px] lg:min-h-0 lg:h-full"
      style={{ backgroundColor: "#f4e9e1", padding: "32px" }}
    >
      {/* Badge */}
      <span style={{
        display: "inline-block",
        alignSelf: "flex-start",
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: 999,
        padding: "4px 14px",
        fontSize: 13,
        fontWeight: 700,
        marginBottom: 22,
      }}>
        Contact
      </span>

      {/* Heading */}
      <h1 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(28px, 2.8vw, 50px)",
        fontWeight: 800,
        color: "#000",
        lineHeight: 1.05,
        margin: 0,
      }}>
        Any questions?<br />We&apos;re here to answer!
      </h1>

      {/* Subtitle */}
      <p style={{ fontSize: 15, color: "rgba(0,0,0,0.5)", margin: "8px 0 24px" }}>
        Complete the form and our team will contact you shortly.
      </p>

      {/* Form */}
      <form style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, minHeight: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Field label="Name *" />
          <Field label="Surname *" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Field label="Email *" type="email" />
          <Field label="Phone *" type="tel" />
        </div>

        {/* Textarea grows to fill available space */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
          <label style={labelBase}>Message *</label>
          <textarea
            placeholder="Leave your message here..."
            style={{
              ...inputBase,
              flex: 1,
              resize: "none",
              minHeight: 0,
            }}
          />
        </div>

        {/* Checkboxes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <CheckboxRow
            checked={terms}
            onChange={() => setTerms(v => !v)}
            label="I have read and accept the Terms of Use and the Privacy Policy of Round."
          />
          <CheckboxRow
            checked={news}
            onChange={() => setNews(v => !v)}
            label="I would like to receive news and updates about promotional offers and activities from Round."
          />
        </div>

        {/* Send button */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
          <button
            type="submit"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: 999,
              padding: "10px 26px",
              fontSize: 15,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.02em",
            }}
          >
            Send →
          </button>
        </div>
      </form>
    </div>
  );
}
