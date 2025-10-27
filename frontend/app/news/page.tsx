// import StickyNavigationMenu from "@/components/StickyNavUpdated";
// import { Footer } from "@/components/FooterUpdated";
// import NewsHero from "@/components/news/NewsHero";
// import NewsContent from "@/components/news/NewsContent";

// export default function NewsPage() {
//   return (
//     <main className="min-h-screen bg-white dark:bg-black">
//       <StickyNavigationMenu />
//       <NewsHero />
//       <NewsContent />
//       <Footer />
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { newsAPI, getStrapiMedia } from "@/lib/strapi";
import type { NewsArticle } from "@/types/strapi";
import Image from "next/image";
import Link from "next/link";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function NewsPage() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const data = selectedCategory
  //         ? await newsAPI.getByCategory(selectedCategory)
  //         : await newsAPI.getAll();
  //       setNews(data);
  //     } catch (error) {
  //       console.error("Error fetching news:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchNews();
  // }, [selectedCategory]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log('🔍 Fetching news from Strapi...');
        const data = selectedCategory
          ? await newsAPI.getByCategory(selectedCategory)
          : await newsAPI.getAll();

        // Comprehensive debug logs
        console.log('✅ Raw API Response:', data);
        console.log('📊 Type of response:', typeof data);
        console.log('📊 Is Array?:', Array.isArray(data));
        console.log('📊 Length:', data?.length);

        if (data && data.length > 0) {
          console.log('🔍 First article (full):', data[0]);
          console.log('🔍 First article.id:', data[0]?.id);
          console.log('🔍 First article.attributes:', data[0]?.attributes);
          console.log('🔍 First article.attributes.title:', data[0]?.attributes?.title);
          console.log('🔍 First article.attributes.slug:', data[0]?.attributes?.slug);
          console.log('🔍 First article.attributes.featuredImage:', data[0]?.attributes?.featuredImage);
        } else {
          console.warn('⚠️ No data returned or empty array');
        }

        setNews(data || []);
      } catch (error) {
        console.error("❌ Error fetching news:", error);
        console.error("❌ Error details:", error instanceof Error ? error.message : String(error));
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [selectedCategory]);

  const categories = ["Project Update", "Press Release", "Announcement", "Community"];

  if (loading) {
    return (
      <main className="min-h-screen bg-background dark:bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#fdb913]"></div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
      <StickyNavigationMenu />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-black dark:text-white mb-4">
            News & Updates
          </h1>
          <p className="text-xl text-[#868584] dark:text-white font-paragraph max-w-2xl">
            Stay informed about the latest developments in the Barotse Highway project
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 pb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full font-paragraph transition-all duration-300 ${!selectedCategory
                ? "bg-[#fdb913] text-black scale-105"
                : "bg-card dark:bg-[#1a1a1a] text-foreground dark:text-white hover:bg-[#fdb913]/20 border border-border dark:border-white/10"
                }`}
            >
              All News
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full font-paragraph transition-all duration-300 ${selectedCategory === cat
                  ? "bg-[#fdb913] text-black scale-105"
                  : "bg-card dark:bg-[#1a1a1a] text-foreground dark:text-white hover:bg-[#fdb913]/20 border border-border dark:border-white/10"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-7xl">
          {news.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((article) => {
                // Check if article exists
                if (!article) {
                  console.warn('News article is null/undefined');
                  return null;
                }

                // Handle both v4 (with attributes) and v5 (flat) structures
                const articleData = article.attributes || article;

                const imageUrl = getStrapiMedia(articleData.featuredImage);

                // Skip articles without valid slug (needed for link)
                if (!articleData.slug) {
                  console.warn('News article missing slug:', article.id);
                  return null;
                }

                return (
                  <Link
                    key={article.id}
                    href={`/news/${articleData.slug}`}
                    className="group"
                  >
                    <article className="bg-card dark:bg-[#1a1a1a] rounded-lg overflow-hidden border border-border dark:border-white/10 hover:border-[#fdb913] transition-all duration-300 hover:shadow-xl">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={articleData.title || 'News article'}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-[#fdb913] text-black text-sm font-semibold rounded-full">
                            {articleData.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-3 group-hover:text-[#fdb913] transition-colors line-clamp-2">
                          {articleData.title}
                        </h2>
                        <p className="text-[#868584] dark:text-white font-paragraph mb-4 line-clamp-3">
                          {articleData.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-[#868584] dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(articleData.publishedDate).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </span>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-[#fdb913] group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-[#868584] dark:text-white font-paragraph">
                No news articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}