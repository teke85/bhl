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
import ProjectHistory from "@/components/projects/ProjectHistory";
import RegionalConnectivity from "@/components/regional-impact/ProjectScopeHistory";
import ResettlementPolicy from "@/components/projects/ResettlementPolicy";

export default function ProjectPage() {
  return (
    <main className="min-h-screen">
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

      <ProjectHero />
      <ProjectKeyStats />
      <ProjectHistory />
      <RegionalConnectivity />
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
