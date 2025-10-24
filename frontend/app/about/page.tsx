import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import OurMission from "@/components/about/OurMission";
import CoreValues from "@/components/about/CoreValues";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import Achievements from "@/components/about/Achievements";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
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

      <AboutHero />
      <CompanyStory />
      <OurMission />
      <CoreValues />
      <LeadershipTeam />
      <Achievements />
      <Footer />
    </main>
  );
}
