import {
  getNewsBySlug,
  getRelatedNews,
  stripHtml,
  NewsArticle,
} from "@/lib/wordpress-graphql";
import type { Metadata } from "next";
import NewsArticleClient from "./NewsArticleClient";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = await getNewsBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
      robots: "noindex, nofollow",
    };
  }

  return {
    title: stripHtml(article.title),
    description: stripHtml(article.excerpt || "Read the latest news from Western Corridor Limited."),
    robots: "noindex, nofollow",
  };
}

export default async function NewsArticlePage({
  params
}: {
  params: { slug: string }
}) {
  const article = await getNewsBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Fetch related articles
  let relatedArticles: NewsArticle[] = [];
  if (article.newsFields?.category) {
    const category = Array.isArray(article.newsFields.category)
      ? article.newsFields.category[0]
      : article.newsFields.category;

    relatedArticles = await getRelatedNews(params.slug, category, 3);
  }

  return (
    <NewsArticleClient
      article={article}
      relatedArticles={relatedArticles || []}
    />
  );
}
