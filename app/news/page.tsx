import { getAllNews } from "@/lib/wordpress-graphql";
import type { Metadata } from "next";
import NewsClient from "./NewsClient";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Stay updated with the latest news, announcements, and progress reports from Western Corridor Limited.",
  robots: "noindex, nofollow",
};

export default async function NewsPage() {
  const initialNews = await getAllNews();

  return <NewsClient initialNews={initialNews || []} />;
}
