import CombinedCarouselBigTextSection from "@/components/CombinedCarouselBigTextSection";
import { Footer } from "@/components/FooterUpdated";
import HeroCarousel from "@/components/HeroSection3RightLeft";
import KeyStats from "@/components/KeyStatsUpdated";
import OurPartners from "@/components/OurPartners";
import ScrollTriggeredSection from "@/components/ScrollTriggeredSection";
import ExpertBuildersSection from "@/components/ExpertBuildersSection";
import ProjectMilestonesSection from "@/components/ProjectMilestones";
import CommunityFirstSection from "@/components/CommunityFirst";
import VideoHeroSection from "@/components/BigVideoComponent";
import { BuildingExcellence } from "@/components/BuildingExcellence";
import SectionWrapper from "@/components/SectionWrapper";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="w-full mx-auto">
        <SectionWrapper fullWidth>
          <HeroCarousel />
        </SectionWrapper>

        <SectionWrapper>
          <KeyStats />
        </SectionWrapper>

        <SectionWrapper>
          <ScrollTriggeredSection />
        </SectionWrapper>

        <SectionWrapper>
          <ExpertBuildersSection />
        </SectionWrapper>

        <SectionWrapper>
          <ProjectMilestonesSection />
        </SectionWrapper>

        <SectionWrapper>
          <CommunityFirstSection />
        </SectionWrapper>

        <SectionWrapper>
          <VideoHeroSection />
        </SectionWrapper>

        <SectionWrapper>
          <CombinedCarouselBigTextSection />
        </SectionWrapper>

        <SectionWrapper>
          <OurPartners />
        </SectionWrapper>

        <SectionWrapper>
          <BuildingExcellence />
        </SectionWrapper>

        <Footer />
      </div>
    </main>
  );
}
