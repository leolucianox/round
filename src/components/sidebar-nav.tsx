"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HomeButton from "@/components/home-button";

const MotionLink = motion.create(Link);

const navItems = [
  { label: "Student Homes", color: "#1a3688", idx: "01", href: "/student-homes" },
  { label: "Our way of living", color: "#f5c500", idx: "02", href: "/our-way-of-living" },
  { label: "Community", color: "#f04a00", idx: "03", href: "/community" },
  { label: "Contact", color: "#00c95a", idx: "04", href: "/contact" },
];

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 22 20" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7765 19.2437C12.1917 19.2437 13.593 18.9949 14.9005 18.5113C16.208 18.0278 17.3959 17.319 18.3966 16.4256C19.3973 15.5321 20.1911 14.4714 20.7327 13.304C21.2743 12.1366 21.553 10.8854 21.553 9.62187C21.553 8.35831 21.2743 7.10712 20.7327 5.93974C20.1911 4.77236 19.3973 3.71166 18.3966 2.81818C17.3959 1.92471 16.208 1.21597 14.9005 0.732422C13.593 0.248877 12.1917 0 10.7765 0C7.91839 0 5.17735 1.01373 3.15636 2.81818C1.13538 4.62263 0 7.06999 0 9.62187C0 12.1738 1.13538 14.6211 3.15636 16.4256C5.17735 18.23 7.91839 19.2437 10.7765 19.2437Z"
      fill="white"
      opacity="0.8"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="10" height="18" viewBox="0 0 10 20" fill="none">
    <path
      d="M6.5 6.5H9.5L9 10H6.5V20H3V10H1V6.5H3V4.5C3 2 4.5 0.5 7 0.5C8 0.5 9 0.6 9.5 0.7V3.5H8C6.9 3.5 6.5 4 6.5 5V6.5Z"
      fill="white"
    />
  </svg>
);

const TikTokIcon = () => (
  <svg width="15" height="18" viewBox="0 0 16 19" fill="none">
    <path
      d="M15 4.5C13.5 4.5 12.3 3.4 12 2H9V12.5C9 13.9 7.9 15 6.5 15C5.1 15 4 13.9 4 12.5C4 11.1 5.1 10 6.5 10C6.8 10 7 10.1 7.3 10.2V7.1C7 7 6.8 7 6.5 7C3.5 7 1 9.5 1 12.5C1 15.5 3.5 18 6.5 18C9.5 18 12 15.5 12 12.5V8.3C13.2 9.1 14.6 9.5 16 9.5V6.5C15.7 6.5 15.3 6.5 15 6.5Z"
      fill="white"
    />
  </svg>
);

export default function SidebarNav() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "pt">("en");
  const pathname = usePathname();

  const close = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger — mobile only */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-40 lg:hidden w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: "#f4e9e1" }}
        aria-label="Open menu"
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path d="M0 1h18M0 7h18M0 13h18" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
          onClick={close}
        />
      )}

      <nav
        className={`fixed left-3 top-3 bottom-3 z-50 flex-col p-3 gap-2 rounded-[32px] ${isOpen ? "flex" : "hidden lg:flex"}`}
        style={{ width: "220px", backgroundColor: "#f4e9e1" }}
      >
        {/* Logo + home button */}
        <div className="flex items-center justify-between py-2 px-1 mb-1">
          <Link href="/" onClick={close}>
            <svg width="110" height="40" viewBox="0 0 148 53" fill="none">
            <path d="M0 27.704V8.32666H11.7227V24.5993C11.7227 27.6504 12.6327 29.0957 14.6133 29.0957C16.915 29.0957 17.825 27.2757 17.825 24.3317V8.32666H29.5477V37.7685H19.2167V28.8828H18.6279C18.3067 33.1115 16.4868 38.3038 9.52807 38.3038C2.56937 38.3038 0 33.9133 0 27.704Z" fill="black" />
            <path d="M47.9601 16.9982C45.6584 16.9982 44.6948 18.8181 44.6948 21.7622V37.7672H32.9721V8.32654H43.3566V17.2123H43.9454C44.2666 12.9835 46.0866 7.79126 53.527 7.79126C59.3081 7.79126 62.6269 11.5383 62.6269 17.7476V37.7672H50.9042V21.441C50.9042 18.4434 49.9942 16.9982 47.9601 16.9982Z" fill="black" />
            <path d="M66.1571 8.32666H77.881V37.7685H66.1571V8.32666Z" fill="black" />
            <path d="M83.4981 29.2028V16.5688H80.3399V8.32546H84.4616V0H95.2208V8.32665H101.109V16.57H95.2208V26.2587C95.2208 28.0787 95.9702 29.0957 97.6831 29.0957C98.7001 29.0957 99.9848 28.7745 101.109 28.1857V36.5897C99.8242 37.3391 97.3084 38.3026 93.1867 38.3026C86.5492 38.3026 83.4981 34.6627 83.4981 29.2028Z" fill="black" />
            <path d="M102.875 26.4727H114.17C114.116 28.935 115.615 30.755 119.095 30.755C122.039 30.755 123.109 29.5774 123.109 27.8109C123.109 25.7768 121.182 25.5092 119.148 25.2951C113.046 24.6527 103.678 25.4021 103.678 17.4799C103.678 10.9494 110.102 7.79126 118.559 7.79126C127.017 7.79126 133.547 10.9494 133.547 19.1928H122.895C122.895 17.2123 121.985 15.4458 118.72 15.4458C116.043 15.4458 114.491 16.3558 114.491 18.1223C114.491 19.8887 116.258 20.4775 121.022 20.7987C129.158 21.3875 134.136 22.1369 134.136 28.6674C134.136 34.8231 129.693 38.356 119.255 38.356C106.248 38.356 102.874 32.8426 102.874 26.4727H102.875Z" fill="black" />
            <path d="M147.976 37.7674H136.256V29.9463L142.116 26.0352L147.976 29.9463V37.7674Z" fill="black" />
            <path d="M77.8861 0H66.1538V5.86672H77.8861V0Z" fill="black" />
          </svg>
          </Link>
          {pathname !== "/" && <HomeButton onClick={close} />}
        </div>

        {/* Nav blocks */}
        <div className="flex flex-col gap-2 flex-1 min-h-0">
          {navItems.map((item) => {
            const isHovered = hovered === item.label;
            const isActive = item.href !== "#" && pathname === item.href;
            const fg = isActive ? item.color : isHovered ? "#fff" : "#000";
            return (
              <MotionLink
                key={item.label}
                href={item.href}
                className="flex-1 flex flex-col justify-between p-5 cursor-pointer"
                style={{
                  backgroundColor: isActive ? "#ffffff" : item.color,
                  border: `2px solid ${isActive ? item.color : "transparent"}`,
                  borderRadius: "clamp(16px, 2vw, 36px)",
                }}
                onHoverStart={() => setHovered(item.label)}
                onHoverEnd={() => setHovered(null)}
                onClick={close}
                whileHover={{ scale: 1.025 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className="flex justify-between items-start">
                  <span
                    className="text-[13px] font-medium opacity-60 transition-colors duration-200"
                    style={{ color: fg }}
                  >
                    {item.idx}
                  </span>
                  <motion.div
                    animate={{ rotate: isHovered || isActive ? 45 : 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: "50%", originY: "50%", display: "flex" }}
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path
                        d="M7.17418 1.66471L0.574525 1.66471L0.589256 6.74452e-05L10.0173 6.90346e-05L10.0173 9.42815L8.3527 9.44288L8.3527 2.84322L1.17851 10.0174L3.1533e-06 8.8389L7.17418 1.66471Z"
                        fill={fg}
                      />
                    </svg>
                  </motion.div>
                </div>
                <span
                  className="text-[14px] font-bold leading-tight transition-colors duration-200"
                  style={{ color: fg }}
                >
                  {item.label}
                </span>
              </MotionLink>
            );
          })}
        </div>

        {/* Bottom controls */}
        <div className="flex flex-col gap-1.5 mt-1">
          <motion.button
            type="button"
            className="w-full rounded-full py-2.5 px-3 text-white text-[14px] font-bold"
            style={{ backgroundColor: "#7a3cf0" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book your Unit
          </motion.button>

          <div className="bg-black rounded-full p-1 flex items-center gap-0.5">
            <button
              type="button"
              onClick={() => setLang("en")}
              className="flex-1 rounded-full py-1 text-[12px] font-bold text-center transition-all duration-200"
              style={{
                backgroundColor: lang === "en" ? "#fff" : "transparent",
                color: lang === "en" ? "#000" : "rgba(255,255,255,0.45)",
              }}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang("pt")}
              className="flex-1 rounded-full py-1 text-[12px] font-bold text-center transition-all duration-200"
              style={{
                backgroundColor: lang === "pt" ? "#fff" : "transparent",
                color: lang === "pt" ? "#000" : "rgba(255,255,255,0.45)",
              }}
            >
              Português
            </button>
          </div>

          <div className="bg-black rounded-xl px-3 py-2 flex items-center justify-center gap-4">
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="TikTok"><TikTokIcon /></a>
          </div>
        </div>
      </nav>
    </>
  );
}
