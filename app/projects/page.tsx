import ProjectHero from "@/components/projects/ProjectHero";
import ProjectKeyStats from "@/components/projects/ProjectKeyStats";
import RoadSections from "@/components/projects/RoadSections";
import RoadDesign from "@/components/projects/RoadDesign";
import KeyProjectComponents from "@/components/projects/KeyProjectComponents";
import TechnicalSpecifications from "@/components/projects/TechnicalSpecifications";
import ProjectGallery from "@/components/projects/ProjectGallery";
import EnvironmentalImpact from "@/components/projects/EnvironmentalImpact";
import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import ProjectPromoters from "@/components/projects/ProjectPromoters";
import ResettlementPolicy from "@/components/projects/ResettlementPolicy";
// import ProjectScopeAndHistory from "@/components/about/ProjectScopeAndHistory";
import ProjectHistory from "@/components/projects/Project";
import { getProjectsPageData, stripHtml } from "@/lib/wordpress-graphql";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Detailed overview of the Mutanda–Kaoma Road Project, technical specifications, and environmental impact assessments.",
};

export default async function ProjectPage() {
  const data = await getProjectsPageData();

  // Parse stats list if present
  let stats = undefined;
  if (data?.projectPageFields?.statsList) {
    try {
      stats = JSON.parse(data.projectPageFields.statsList);
    } catch (e) {
      console.error("Failed to parse statsList", e);
    }
  }

  return (
    <main className="min-h-screen">
      <StickyNavigationMenu />

      <ProjectHero
        title={stripHtml(data?.projectPageFields?.heroTitle) || undefined}
        subtitle={stripHtml(data?.projectPageFields?.heroSubtitle) || undefined}
        image={data?.projectPageFields?.heroImage?.node?.sourceUrl || undefined}
        description={stripHtml(data?.projectPageFields?.descriptionContent) || undefined}
      />
      <ProjectKeyStats stats={stats} />
      {/* <ProjectScopeAndHistory /> */}
      <ProjectHistory />
      <ProjectGallery />
      <RoadSections />
      <RoadDesign />
      <KeyProjectComponents />
      <ResettlementPolicy />
      <ProjectPromoters />
      <TechnicalSpecifications />
      <EnvironmentalImpact />
      <Footer />
    </main>
  );
}
