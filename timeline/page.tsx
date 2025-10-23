"use client";

import TimelineHero from "@/components/timeline/TimelineHero";
import TimelineVertical from "@/components/timeline/TimelineVertical";
import MilestoneHighlights from "@/components/timeline/MilestoneHighlights";
import KeyAchievements from "@/components/timeline/KeyAchievements";
import UpcomingMilestones from "@/components/timeline/UpcomingMilestones";
import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";

const TimelinePage = () => {
  return (
    <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
      {/* Header Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-3 items-center gap-4 h-16">
            <div className="relative z-30 justify-self-center">
              <StickyNavigationMenu />
            </div>
            <div className="relative z-30 justify-self-end" />
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <TimelineHero />
      <TimelineVertical />
      <MilestoneHighlights />
      {/* <ProjectPhases /> */}
      <KeyAchievements />
      <UpcomingMilestones />
      <Footer />
    </main>
  );
};

export default TimelinePage;
