import type { Metadata } from "next";
import { pageMetadata, siteConfig } from "@/lib/seo-config";
import CombinedCarouselBigTextSection from "@/components/CombinedCarouselBigTextSection";
import { Footer } from "@/components/FooterUpdated";
import HeroCarousel from "@/components/HeroSection3RightLeft";
import KeyStats from "@/components/KeyStatsUpdated";
import OurPartners from "@/components/OurPartners";
import ScrollTriggeredSection from "@/components/ScrollTriggeredSection";
import ExpertBuildersSection from "@/components/ExpertBuildersSection";
import ProjectMilestonesSection from "@/components/ProjectMilestones";
import CommunityFirstSection from "@/components/CommunityFirst";
import VideoHeroSection from "@/components/BigVideoComponent";
import { BuildingExcellence } from "@/components/BuildingExcellence";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
  openGraph: {
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Barotse Highway Limited",
      },
    ],
    locale: "en_ZM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="w-full mx-auto">
        <section className="w-full flex justify-center">
          <div className="w-full max-w-full px-4 sm:px-6 lg:px-0">
            <HeroCarousel />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <KeyStats />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <ScrollTriggeredSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <ExpertBuildersSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <ProjectMilestonesSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <CommunityFirstSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <VideoHeroSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <CombinedCarouselBigTextSection />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <OurPartners />
          </div>
        </section>

        <section className="w-full flex justify-center">
          <div className="w-full max-w-[2560px] px-4 sm:px-6 lg:px-0">
            <BuildingExcellence />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
