import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import VideoShowcase from "@/components/gallery/VideoShowcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View photos and videos of the Western Corridor Project, showcasing our progress and impact on Zambia's infrastructure.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
      <StickyNavigationMenu />

      <GalleryHero />
      <GalleryGrid />
      <VideoShowcase />
      <Footer />
    </main>
  );
}
