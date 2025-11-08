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
// import { BuildingExcellence } from "@/components/BuildingExcellence";
import SectionWrapper from "@/components/SectionWrapper";
import NewsUpdatesSection from "@/components/home/NewsUpdates";
<<<<<<< HEAD:app/page.tsx
import PressReleaseSection from "@/components/home/PressReleaseSection";
=======
import { NoOpenings } from "@/components/careers/no-jobopenings";
>>>>>>> origin/CleanUpCareersPage:frontend/app/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="w-full mx-auto">
        <SectionWrapper fullWidth>
          <HeroCarousel />
        </SectionWrapper>

        <SectionWrapper>
          <PressReleaseSection />
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
          <NewsUpdatesSection />
        </SectionWrapper>

        <Footer />
      </div>
    </main>
  );
}
