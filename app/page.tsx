"use client";

// import BigText from "@/components/BigText";
import CombinedCarouselBigTextSection from "@/components/CombinedCarouselBigTextSection";
// import CombinedStatsSection from "@/components/CombinedStatsSection";
import { Footer } from "@/components/FooterUpdated";
// import EfficientGrowthCatalyst from "@/components/EfficientGrowthCatalyst";
// import EfficientLogistics from "@/components/EfficientLogistics";
// import Route from "@/components/FastestRoute";
// import { Footer } from "@/components/Footer";
import HeroCarousel from "@/components/HeroSection3RightLeft";
import KeyStats from "@/components/KeyStatsUpdated";
// import KeyStats from "@/components/KeyStats";
import OurPartners from "@/components/OurPartners";
import ScrollTriggeredSection from "@/components/ScrollTriggeredSection";
import ExpertBuildersSection from "@/components/ExpertBuildersSection";
import ProjectMilestonesSection from "@/components/ProjectMilestones";
import CommunityFirstSection from "@/components/CommunityFirst";
import VideoHeroSection from "@/components/BigVideoComponent";
// import TimelineMarquee from "@/components/TimeLineMarquee";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Wrapper for centering all content */}
      <div className="w-full mx-auto">
        {/* Each section wrapped in a centered container */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-8">
            <HeroCarousel />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-8">
            <KeyStats />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-8">
            <ScrollTriggeredSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-8">
            <ExpertBuildersSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-8">
            <ProjectMilestonesSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-8">
            <CommunityFirstSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-8">
            <VideoHeroSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-8">
            <OurPartners />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-8">
            <CombinedCarouselBigTextSection />
          </div>
        </section>

        {/* Footer typically spans full width */}
        <Footer />
      </div>
    </main>
  );
}
