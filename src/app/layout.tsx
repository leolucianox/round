import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SidebarNav from "@/components/sidebar-nav";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Round — Unique Student Homes",
  description:
    "All-inclusive student accommodation with everything you need to live, study and connect.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${plusJakarta.variable}`}>
      <body>
        <SidebarNav />
        <div className="ml-0 lg:ml-[232px]">{children}</div>
      </body>
    </html>
  );
}
