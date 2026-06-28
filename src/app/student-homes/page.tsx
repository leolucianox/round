import ShHero from "@/components/sections/student-homes/sh-hero";
import ShSteps from "@/components/sections/student-homes/sh-steps";
import ShSpaces from "@/components/sections/student-homes/sh-spaces";
import ShCommunity from "@/components/sections/student-homes/sh-community";
import ShWhy from "@/components/sections/student-homes/sh-why";
import SectionBanner from "@/components/section-banner";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/sections/footer";

export default function StudentHomes() {
  return (
    <div className="flex flex-col gap-3 p-3">
      <ShHero />
      <ShSteps />
      <SectionBanner title="Check out our Spaces" />
      <ShSpaces />
      <ShCommunity />
      <ShWhy />
      <div className="h-4" />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
