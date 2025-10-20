import type { Metadata } from "next";
import { pageMetadata, siteConfig } from "@/lib/seo-config";
import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import VideoShowcase from "@/components/gallery/VideoShowcase";
import PhotoCategories from "@/components/gallery/PhotoCategories";

import PageStructuredData from "@/components/seo/PageStructuredData";

export const metadata: Metadata = {
  title: pageMetadata.gallery.title,
  description: pageMetadata.gallery.description,
  keywords: pageMetadata.gallery.keywords,
  openGraph: {
    title: pageMetadata.gallery.title,
    description: pageMetadata.gallery.description,
    url: `${siteConfig.url}/gallery`,
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
    canonical: `${siteConfig.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
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

        <GalleryHero />
        <PhotoCategories />
        <GalleryGrid />
        <VideoShowcase />
        <Footer />
      </main>
    </>
  );
}
