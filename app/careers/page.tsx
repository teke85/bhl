import Navigation from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";
import { CareersHero } from "@/components/careers/careers-hero";
import { OurCommitment } from "@/components/careers/our-commitment";
import { FAQSection } from "@/components/careers/faq-section";
import { NoOpenings } from "@/components/careers/no-jobopenings";

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CareersHero />
      <NoOpenings />
      <OurCommitment />
      <FAQSection />
      <Footer />
    </div>
  );
}
