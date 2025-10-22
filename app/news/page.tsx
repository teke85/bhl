import StickyNavigationMenu from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";
import NewsHero from "@/components/news/NewsHero";
import NewsContent from "@/components/news/NewsContent";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <StickyNavigationMenu />
      <NewsHero />
      <NewsContent />
      <Footer />
    </main>
  );
}
