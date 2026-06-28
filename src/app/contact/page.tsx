import ContactForm from "@/components/sections/contact/contact-form";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/sections/footer";

const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="10" height="17" viewBox="0 0 10 20" fill="none">
    <path
      d="M6.5 6.5H9.5L9 10H6.5V20H3V10H1V6.5H3V4.5C3 2 4.5 0.5 7 0.5C8 0.5 9 0.6 9.5 0.7V3.5H8C6.9 3.5 6.5 4 6.5 5V6.5Z"
      fill="white"
    />
  </svg>
);

const TikTokIcon = () => (
  <svg width="14" height="17" viewBox="0 0 16 19" fill="none">
    <path
      d="M15 4.5C13.5 4.5 12.3 3.4 12 2H9V12.5C9 13.9 7.9 15 6.5 15C5.1 15 4 13.9 4 12.5C4 11.1 5.1 10 6.5 10C6.8 10 7 10.1 7.3 10.2V7.1C7 7 6.8 7 6.5 7C3.5 7 1 9.5 1 12.5C1 15.5 3.5 18 6.5 18C9.5 18 12 15.5 12 12.5V8.3C13.2 9.1 14.6 9.5 16 9.5V6.5C15.7 6.5 15.3 6.5 15 6.5Z"
      fill="white"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const RoundLogo = () => (
  <svg width="60" height="22" viewBox="0 0 148 53" fill="none">
    <path d="M0 27.704V8.32666H11.7227V24.5993C11.7227 27.6504 12.6327 29.0957 14.6133 29.0957C16.915 29.0957 17.825 27.2757 17.825 24.3317V8.32666H29.5477V37.7685H19.2167V28.8828H18.6279C18.3067 33.1115 16.4868 38.3038 9.52807 38.3038C2.56937 38.3038 0 33.9133 0 27.704Z" fill="white" />
    <path d="M47.9601 16.9982C45.6584 16.9982 44.6948 18.8181 44.6948 21.7622V37.7672H32.9721V8.32654H43.3566V17.2123H43.9454C44.2666 12.9835 46.0866 7.79126 53.527 7.79126C59.3081 7.79126 62.6269 11.5383 62.6269 17.7476V37.7672H50.9042V21.441C50.9042 18.4434 49.9942 16.9982 47.9601 16.9982Z" fill="white" />
    <path d="M66.1571 8.32666H77.881V37.7685H66.1571V8.32666Z" fill="white" />
    <path d="M83.4981 29.2028V16.5688H80.3399V8.32546H84.4616V0H95.2208V8.32665H101.109V16.57H95.2208V26.2587C95.2208 28.0787 95.9702 29.0957 97.6831 29.0957C98.7001 29.0957 99.9848 28.7745 101.109 28.1857V36.5897C99.8242 37.3391 97.3084 38.3026 93.1867 38.3026C86.5492 38.3026 83.4981 34.6627 83.4981 29.2028Z" fill="white" />
    <path d="M102.875 26.4727H114.17C114.116 28.935 115.615 30.755 119.095 30.755C122.039 30.755 123.109 29.5774 123.109 27.8109C123.109 25.7768 121.182 25.5092 119.148 25.2951C113.046 24.6527 103.678 25.4021 103.678 17.4799C103.678 10.9494 110.102 7.79126 118.559 7.79126C127.017 7.79126 133.547 10.9494 133.547 19.1928H122.895C122.895 17.2123 121.985 15.4458 118.72 15.4458C116.043 15.4458 114.491 16.3558 114.491 18.1223C114.491 19.8887 116.258 20.4775 121.022 20.7987C129.158 21.3875 134.136 22.1369 134.136 28.6674C134.136 34.8231 129.693 38.356 119.255 38.356C106.248 38.356 102.874 32.8426 102.874 26.4727H102.875Z" fill="white" />
    <path d="M147.976 37.7674H136.256V29.9463L142.116 26.0352L147.976 29.9463V37.7674Z" fill="white" />
    <path d="M77.8861 0H66.1538V5.86672H77.8861V0Z" fill="white" />
  </svg>
);

export default function Contact() {
  return (
    <div className="flex flex-col gap-4 p-4" style={{ backgroundColor: "#00c95a" }}>
      {/* Main section — fills the first viewport on desktop, stacks on mobile */}
      <div className="flex flex-col lg:flex-row gap-4 lg:h-[calc(100vh-32px)]">

        {/* Left column — 40% */}
        <div className="flex flex-col gap-4 lg:flex-[40_1_0%]">

          {/* Map card — 60% height */}
          <div className="relative overflow-hidden rounded-[32px] h-[300px] lg:h-auto lg:flex-[6_1_0%]">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.085%2C51.515%2C-0.045%2C51.540&layer=mapnik&marker=51.527%2C-0.063"
              style={{ width: "100%", height: "100%", border: "none", display: "block" }}
              loading="lazy"
              title="Round location"
            />
            {/* Location label overlay */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pointerEvents: "none",
            }}>
              <div style={{
                backgroundColor: "#e01f26",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 700,
                whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(0,0,0,0.22)",
              }}>
                Units Crestfield
              </div>
              <div style={{ width: 2, height: 10, backgroundColor: "#e01f26" }} />
              <div style={{ width: 10, height: 10, backgroundColor: "#e01f26", borderRadius: "50%" }} />
            </div>
          </div>

          {/* Info card — 40% height */}
          <div
            className="rounded-[32px] overflow-hidden flex flex-row min-h-[180px] lg:flex-[4_1_0%]"
            style={{ backgroundColor: "#111" }}
          >
            {/* Left: headline + social */}
            <div style={{
              flex: 1,
              padding: "28px 20px 24px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 2.4vw, 42px)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.0,
                  margin: 0,
                }}>
                  Let&apos;s<br />Connect!
                </h2>
              </div>
              <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
                <a href="#" aria-label="Instagram" style={{ display: "flex" }}><InstagramIcon /></a>
                <a href="#" aria-label="Facebook" style={{ display: "flex" }}><FacebookIcon /></a>
                <a href="#" aria-label="TikTok" style={{ display: "flex" }}><TikTokIcon /></a>
                <a href="#" aria-label="LinkedIn" style={{ display: "flex" }}><LinkedInIcon /></a>
              </div>
            </div>

            {/* Sub-card — touches top, right, bottom of outer card */}
            <div style={{
              width: "32%",
              flexShrink: 0,
              backgroundColor: "#1c1c1c",
              borderRadius: "20px 32px 32px 20px",
              padding: "22px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              <RoundLogo />
              <div>
                <p style={{ color: "rgba(255,255,255,0.48)", fontSize: 13, margin: 0, lineHeight: 1.7 }}>
                  hello@units.co
                </p>
                <p style={{ color: "rgba(255,255,255,0.48)", fontSize: 13, margin: 0, lineHeight: 1.7 }}>
                  +44 20 7946 0312
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — 60%, form card */}
        <div className="min-w-0 min-h-[560px] lg:min-h-0 lg:flex-[60_1_0%]">
          <ContactForm />
        </div>
      </div>

      <div className="h-4" />
      <NewsletterSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
