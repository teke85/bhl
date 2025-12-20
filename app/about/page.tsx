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
import { getAboutPageData, stripHtml } from "@/lib/wordpress-graphql";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Western Corridor Limited, our story, mission, vision, and the team driving Zambia's infrastructure transformation.",
};

export default async function AboutPage() {
  const data = await getAboutPageData();

  return (
    <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
      <StickyNavigationMenu />

      <AboutHero
        title={data?.heroTitle || undefined}
        description={stripHtml(data?.heroDescription) || undefined}
        image={data?.heroBackgroundImage?.node?.sourceUrl || undefined}
      />
      <CompanyStory
        title={data?.sectionTitle || undefined}
        content={data?.sectionParagraph || undefined}
        image={data?.leftImage?.node?.sourceUrl || undefined}
      />
      <ProjectScopeAndHistory />
      <OurMission
        title={data?.missionStatementTitle || undefined}
        description={data?.missionStatementDescription || undefined}
      />
      <OurCommitment />
      <CoreValues
        title={data?.ourCoreValuesTitle || undefined}
      />
      <LeadershipTeam />
      <Achievements />
      <Footer />
    </main>
  );
}
