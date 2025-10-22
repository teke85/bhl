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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="w-full mx-auto">
        <section className="w-full flex justify-center">
          <div className="w-full max-w-full px-4 sm:px-6 lg:px-0">
            <HeroCarousel />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <KeyStats />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <ScrollTriggeredSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <ExpertBuildersSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <ProjectMilestonesSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <CommunityFirstSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <VideoHeroSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <CombinedCarouselBigTextSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <OurPartners />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <BuildingExcellence />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
