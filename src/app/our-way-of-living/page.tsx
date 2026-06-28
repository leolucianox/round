import OwolHero from "@/components/sections/our-way-of-living/owol-hero";
import OwolSlider from "@/components/sections/our-way-of-living/owol-slider";
import OwolDefines from "@/components/sections/our-way-of-living/owol-defines";
import OwolStack from "@/components/sections/our-way-of-living/owol-stack";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/sections/footer";

export default function OurWayOfLiving() {
  return (
    <main className="flex flex-col gap-3 p-3">
      <OwolHero />
      <OwolSlider />
      <OwolDefines />
      <OwolStack />
      <div className="h-4" />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
