import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import OurMission from "@/components/about/OurMission";
import CoreValues from "@/components/about/CoreValues";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import Achievements from "@/components/about/Achievements";
import OurCommitment from "@/components/OurCommitment";
import ProjectScopeAndHistory from "@/components/about/ProjectScopeAndHistory";
import {
  getAboutPageData,
  stripHtml,
  parseLeadershipTeam,
  parseAboutByTheNumbers,
  parseAboutMissions,
  parseAboutCoreValues,
  parseHtmlRepeatableField,
} from "@/lib/wordpress-graphql";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Western Corridor Limited, our story, mission, vision, and the team driving Zambia's infrastructure transformation.",
};

export default async function AboutPage() {
  const data = await getAboutPageData();

  const leadershipTitle = stripHtml(data?.leadershipTeamTitle) || "Leadership Team";
  const leadershipDescription = stripHtml(data?.leadershipTeamParagraph) || "Experienced professionals driving the Western Corridor vision";
  const team = data ? parseLeadershipTeam(data) : [];

  const achievementsTitle = stripHtml(data?.byTheNumbersTitle) || "By The Numbers";
  const stats = data ? parseAboutByTheNumbers(data) : [];

  const missionTitle = stripHtml(data?.ourMissionVisionSectionTitle) || "Our Mission & Vision";
  const missionDescription = stripHtml(data?.guidedByClearPrinciplesAndAmbitiousGoalsDescription) || "Guided by clear principles and ambitious goals";
  const missions = data ? parseAboutMissions(data) : [];

  const coreValuesTitle = stripHtml(data?.ourCoreValuesTitle) || "Our Core Values";
  const coreValues = data ? parseAboutCoreValues(data) : [];

  return (
    <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
      <StickyNavigationMenu />

      <AboutHero
        title={stripHtml(data?.heroTitle) || undefined}
        description={stripHtml(data?.heroDescription) || undefined}
        image={data?.heroBackgroundImage?.node?.sourceUrl || undefined}
      />
      <CompanyStory
        title={stripHtml(data?.sectionTitle) || undefined}
        content={data?.sectionParagraph || undefined}
        image={data?.leftImage?.node?.sourceUrl || undefined}
      />
      <ProjectScopeAndHistory
        scopeTitle={stripHtml(data?.scopeOfWorkTitle) || undefined}
        scopeDescription={stripHtml(data?.scopeOfWorkDescription) || undefined}
        historyTitle={stripHtml(data?.briefHistoryOfTheProjectTitle) || undefined}
        historyDescription={stripHtml(data?.briefHistoryOfTheProjectDescription) || undefined}
      />
      <OurMission
        title={missionTitle}
        description={missionDescription}
        missions={missions}
      />
      <OurCommitment
        title={stripHtml(data?.ourCommitmentSectionTitle) || undefined}
        description={stripHtml(data?.ourCommitmentDescription) || undefined}
        points={data?.ourCommitmentDescription ? parseHtmlRepeatableField(data.ourCommitmentDescription) : undefined}
      />
      <CoreValues
        title={coreValuesTitle}
        values={coreValues}
      />
      <LeadershipTeam
        title={leadershipTitle}
        description={leadershipDescription}
        leaders={team}
      />
      <Achievements
        title={achievementsTitle}
        stats={stats}
      />
      <Footer />
    </main>
  );
}
