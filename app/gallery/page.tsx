import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import VideoShowcase from "@/components/gallery/VideoShowcase";

export default function GalleryPage() {
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

      <GalleryHero />
      <GalleryGrid />
      <VideoShowcase />
      <Footer />
    </main>
  );
}
