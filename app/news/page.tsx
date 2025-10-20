import type { Metadata } from "next";
import { pageMetadata, siteConfig } from "@/lib/seo-config";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";
import NewsHero from "@/components/news/NewsHero";
import NewsContent from "@/components/news/NewsContent";
import PageStructuredData from "@/components/seo/PageStructuredData";

export const metadata: Metadata = {
  title: pageMetadata.news.title,
  description: pageMetadata.news.description,
  keywords: pageMetadata.news.keywords,
  openGraph: {
    title: pageMetadata.news.title,
    description: pageMetadata.news.description,
    url: `${siteConfig.url}/news`,
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
    canonical: `${siteConfig.url}/news`,
  },
};

export default function NewsPage() {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "News", url: "/news" },
        ]}
      />
      <main className="min-h-screen bg-white dark:bg-black">
        <StickyNavigationMenu />
        <NewsHero />
        <NewsContent />
        <Footer />
      </main>
    </>
  );
}
