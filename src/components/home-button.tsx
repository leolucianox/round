import Link from "next/link";

const HouseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(0,0,0,0.75)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

interface HomeButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function HomeButton({ className = "", onClick }: HomeButtonProps) {
  return (
    <Link
      href="/"
      aria-label="Home"
      onClick={onClick}
      className={`inline-flex items-center justify-center w-11 h-11 flex-shrink-0 ${className}`}
      style={{
        backgroundColor: "#f4e9e1",
        border: "1.5px solid rgba(0,0,0,0.12)",
        borderRadius: "clamp(14px, 2vw, 18px)",
      }}
    >
      <HouseIcon />
    </Link>
  );
}
