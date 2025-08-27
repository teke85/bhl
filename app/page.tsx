// import { Footer } from "@/components/Footer";
// import { HeroSection } from "@/components/HeroSection";

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Nav";
import NewsUpdatesSections from "@/components/NewsUpdatesSections";
import ProjectOverview from "@/components/ProjectOverview";
import StatsSection from "@/components/StatsSection";
import StrategicImportance from "@/components/StrategicImportance";
import TimelineSection from "@/components/TimeLineSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ProjectOverview />
      <StrategicImportance />
      <TimelineSection />
      <NewsUpdatesSections />
      <Footer />
    </main>
  );
}
