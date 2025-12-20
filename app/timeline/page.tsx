import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import TimelineHero from "@/components/timeline/TimelineHero";
import TimelineVertical from "@/components/timeline/TimelineVertical";
import ProjectPhases from "@/components/timeline/ProjectPhases";
import KeyAchievements from "@/components/timeline/KeyAchievements";
import MilestoneHighlights from "@/components/timeline/MilestoneHighlights";
import UpcomingMilestones from "@/components/timeline/UpcomingMilestones";
import { getTimelineEvents, getTimelinePageData, stripHtml } from "@/lib/wordpress-graphql";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline",
  description: "Explore the key milestones and future plans for the Western Corridor Mutanda–Kaoma Road Project.",
};

export default async function TimelinePage() {
  const [eventsData, pageData] = await Promise.all([
    getTimelineEvents(),
    getTimelinePageData(),
  ]);

  const events = eventsData.map((e) => ({
    date: e.date,
    title: e.title,
    description: stripHtml(e.timelineFields.description),
    status: e.timelineFields.status as "completed" | "current" | "upcoming",
  }));

  return (
    <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
      <StickyNavigationMenu />
      <TimelineHero
        title={pageData?.projectKeyTimelinesAndMilestonesTitle || undefined}
        subtitle={pageData?.heroDescription || undefined}
        image={pageData?.heroBackgroundImage?.node?.sourceUrl || undefined}
      />
      <TimelineVertical events={events} />
      <ProjectPhases />
      <KeyAchievements />
      <MilestoneHighlights />
      <UpcomingMilestones />
      <Footer />
    </main>
  );
}
