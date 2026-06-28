import CommHero from "@/components/sections/community/comm-hero";
import CommScroll from "@/components/sections/community/comm-scroll";
import CommGallery from "@/components/sections/community/comm-gallery";
import Footer from "@/components/sections/footer";
import NewsletterSection from "@/components/newsletter-section";
import Ticker from "@/components/ticker";

export default function Community() {
  return (
    <div className="flex flex-col gap-3 p-3">
      <CommHero />
      <Ticker
        bg="#1a3688"
        color="#f4e9e1"
        items={[
          "Community Events",
          "Social Areas",
          "Health & Wellness",
          "Career Growth",
          "Culture & Creativity",
          "Community Give-Back",
        ]}
        duration={22}
      />
      <CommScroll />
      <CommGallery />
      <div className="h-4" />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
