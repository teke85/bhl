import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import VideoShowcase from "@/components/gallery/VideoShowcase";
import { getGalleryPageData, stripHtml, getAllGallery } from "@/lib/wordpress-graphql";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View photos and videos of the Western Corridor Project, showcasing our progress and impact on Zambia's infrastructure.",
  robots: "noindex, nofollow",
};

export default async function GalleryPage() {
  const [data, allGalleryItems] = await Promise.all([
    getGalleryPageData(),
    getAllGallery()
  ]);

  const heroTitle = stripHtml(data?.herotitle) || "Project Gallery";
  const heroDescription = stripHtml(data?.heroDescription) || "Explore the progress and milestones of the Barotse Corridor Connector through our comprehensive multimedia collection.";

  return (
    <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
      <StickyNavigationMenu />

      <GalleryHero
        title={heroTitle}
        description={heroDescription}
        backgroundImage={data?.heroBackgroundImage?.node?.sourceUrl || undefined}
      />
      <GalleryGrid
        description={stripHtml(data?.projectGalleryDetails) || undefined}
        initialItems={allGalleryItems}
      />
      <VideoShowcase />
      <Footer />
    </main>
  );
}
