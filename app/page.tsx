"use client";

// import BigText from "@/components/BigText";
import CombinedCarouselBigTextSection from "@/components/CombinedCarouselBigTextSection";
import CombinedStatsSection from "@/components/CombinedStatsSection";
import { Footer } from "@/components/Footer";
// import EfficientGrowthCatalyst from "@/components/EfficientGrowthCatalyst";
// import EfficientLogistics from "@/components/EfficientLogistics";
// import Route from "@/components/FastestRoute";
// import { Footer } from "@/components/Footer";
import HeroCarousel from "@/components/HeroSection3RightLeft";

// import KeyStats from "@/components/KeyStats";
import OurPartners from "@/components/OurPartners";
import TimelineMarquee from "@/components/TimeLineMarquee";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroCarousel />
      <CombinedStatsSection />
      {/* <LogoCarousel /> */}
      {/* <KeyStats /> */}
      {/* <StatsSection /> */}
      {/* <EfficientLogistics /> */}
      {/* <EfficientGrowthCatalyst /> */}
      <TimelineMarquee />
      <OurPartners />
      <CombinedCarouselBigTextSection />
      {/* <Route /> */}
      {/* <BigText /> */}
      {/* <ProjectOverview /> */}
      {/* <StrategicImportance /> */}
      {/* <TimelineSection /> */}
      <Footer />
    </main>
  );
}
