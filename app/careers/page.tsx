import Navigation from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";
import { CareersHero } from "@/components/careers/careers-hero";
import { LifeAtBHL } from "@/components/careers/life-at-bhl";
import { EmployeeTestimonials } from "@/components/careers/employee-testimonials";
import { OpenPositions } from "@/components/careers/open-positions";
import { OurCommitment } from "@/components/careers/our-commitment";
import { WorkEnvironment } from "@/components/careers/work-environment";
import { FAQSection } from "@/components/careers/faq-section";

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <CareersHero />
        <LifeAtBHL />
        <EmployeeTestimonials />
        <OpenPositions />
        <OurCommitment />
        <WorkEnvironment />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
