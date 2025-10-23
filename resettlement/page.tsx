"use client";

import ResettlementHero from "@/components/resettlement/ResettlementHero";

import RPFPurpose from "@/components/resettlement/RPFPurpose";
import FrameworkApplies from "@/components/resettlement/FrameworkApplies";
import KeyPrinciples from "@/components/resettlement/KeyPrinciples";
import CommunityEngagement from "@/components/resettlement/CommunityEngagement";

import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";

const ResettlementPage = () => {
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
      <ResettlementHero />
      <RPFPurpose />
      <FrameworkApplies />
      <KeyPrinciples />
      <CommunityEngagement />
      <Footer />
    </main>
  );
};

export default ResettlementPage;
