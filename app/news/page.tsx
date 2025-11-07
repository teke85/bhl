"use client";

import { useEffect, useState } from "react";
import {
  getAllNews,
  getNewsByCategory,
  getImageUrl,
  stripHtml,
  formatDate,
  type NewsArticle,
} from "@/lib/wordpress-graphql";
import Image from "next/image";
import Link from "next/link";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";
import NewsHero from "@/components/news/NewsHero";
import { Calendar, ArrowRight } from "lucide-react";

export default function NewsPage() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log("🔍 Fetching news via GraphQL...");
        const data = selectedCategory
          ? await getNewsByCategory(selectedCategory)
          : await getAllNews();

        console.log("✅ GraphQL Response:", data);
        console.log("📊 Number of articles:", data?.length);

        setNews(data || []);
      } catch (error) {
        console.error("❌ Error fetching news:", error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [selectedCategory]);

  const categories = [
    "Project Update",
    "Press Release",
    "Announcement",
    "Community",
  ];

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
      <NewsHero />

      {/* Category Filter */}
      <section className="px-4 py-12">
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
                const imageUrl = getImageUrl(article);
                const cleanExcerpt = stripHtml(article.excerpt || "");

                return (
                  <Link
                    key={article.id}
                    href={`/news/${article.slug}`}
                    className="group"
                  >
                    <article className="bg-card dark:bg-[#1a1a1a] rounded-lg overflow-hidden border border-border dark:border-white/10 hover:border-[#fdb913] transition-all duration-300 hover:shadow-xl">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-[#fdb913] text-black text-sm font-semibold rounded-full">
                            {article.newsFields?.category || "News"}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h2 className="text-2xl font-heading font-bold text-black dark:text-white mb-3 group-hover:text-[#fdb913] transition-colors line-clamp-2">
                          {article.title}
                        </h2>
                        <p className="text-[#868584] dark:text-white font-paragraph mb-4 line-clamp-3">
                          {cleanExcerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-[#868584] dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {formatDate(
                                  article.newsFields?.publishedDate || article.date
                                )}
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