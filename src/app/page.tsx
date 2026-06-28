import Hero from "@/components/sections/hero";
import Ticker from "@/components/ticker";
import Location from "@/components/sections/location";
import AllInclusive from "@/components/sections/all-inclusive";
import OurSpaces from "@/components/sections/our-spaces";
import Social from "@/components/sections/social";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 p-3">
      <Hero />
      <Location />
      <Ticker
        bg="#ee5a6a"
        color="#1a3688"
        items={[
          "24/7 Security",
          "Fast and reliable maintenance",
          "Smart living",
          "Social areas",
          "Private kitchen & bathroom",
        ]}
      />
      <AllInclusive />
      <Ticker
        bg="#e5392a"
        color="#f4e9e1"
        items={[
          "Home",
          "Smart living",
          "Social areas",
          "Private kitchen & bathroom",
          "24/7 Security",
          "Fast and reliable maintenance",
        ]}
        duration={26}
      />
      <OurSpaces />
      <Social />
      <div className="h-4" />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
