import type { Metadata } from "next";
import { pageMetadata, siteConfig } from "@/lib/seo-config";
import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import OurMission from "@/components/about/OurMission";
import CoreValues from "@/components/about/CoreValues";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import Achievements from "@/components/about/Achievements";
import PageStructuredData from "@/components/seo/PageStructuredData";

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  keywords: pageMetadata.about.keywords,
  openGraph: {
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_ZM",
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
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
    </>
  );
}
