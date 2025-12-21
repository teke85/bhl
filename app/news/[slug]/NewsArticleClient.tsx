"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    getImageUrl,
    stripHtml,
    formatDate,
    type NewsArticle,
} from "@/lib/wordpress-graphql";
import Image from "next/image";
import Link from "next/link";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";
import {
    Calendar,
    User,
    Tag,
    ArrowLeft,
    Facebook,
    Twitter,
    Linkedin,
    Link2,
    Clock,
    Mail,
    Share2,
} from "lucide-react";
import { motion } from "framer-motion";
import NewsHero from "@/components/news/NewsHero";

export default function NewsArticleClient({
    article,
    relatedArticles
}: {
    article: NewsArticle;
    relatedArticles: NewsArticle[];
}) {
    const router = useRouter();
    const [copied, setCopied] = useState(false);
    const [stickyShareVisible, setStickyShareVisible] = useState(false);

    // Sticky share bar visibility
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setStickyShareVisible(scrollPosition > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const shareUrl = typeof window !== "undefined" ? window.location.href : "";

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleShare = (platform: string) => {
        const title = stripHtml(article.title || "");
        const url = encodeURIComponent(shareUrl);
        const text = encodeURIComponent(title);

        const shareUrls: Record<string, string> = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        };

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], "_blank", "width=600,height=400");
        }
    };

    const imageUrl = getImageUrl(article);
    const readingTime = Math.ceil(
        stripHtml(article.content).split(" ").length / 200
    );

    return (
        <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
            <StickyNavigationMenu />
            <NewsHero />

            {/* Sticky Share Bar */}
            <motion.div
                className={`fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3 ${stickyShareVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                    opacity: stickyShareVisible ? 1 : 0,
                    x: stickyShareVisible ? 0 : -20,
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex flex-col items-center gap-3 bg-card dark:bg-[#1a1a1a] p-3 rounded-xl border border-border dark:border-white/10 shadow-lg">
                    <span className="text-xs font-semibold text-[#868584] dark:text-gray-400 mb-1">
                        <Share2 className="h-4 w-4" />
                    </span>
                    <button
                        onClick={() => handleShare("facebook")}
                        className="p-2.5 rounded-lg hover:bg-[#fdb913]/20 transition-colors group"
                        aria-label="Share on Facebook"
                    >
                        <Facebook className="h-5 w-5 text-[#868584] dark:text-gray-400 group-hover:text-[#fdb913]" />
                    </button>
                    <button
                        onClick={() => handleShare("twitter")}
                        className="p-2.5 rounded-lg hover:bg-[#fdb913]/20 transition-colors group"
                        aria-label="Share on Twitter"
                    >
                        <Twitter className="h-5 w-5 text-[#868584] dark:text-gray-400 group-hover:text-[#fdb913]" />
                    </button>
                    <button
                        onClick={() => handleShare("linkedin")}
                        className="p-2.5 rounded-lg hover:bg-[#fdb913]/20 transition-colors group"
                        aria-label="Share on LinkedIn"
                    >
                        <Linkedin className="h-5 w-5 text-[#868584] dark:text-gray-400 group-hover:text-[#fdb913]" />
                    </button>
                    <button
                        onClick={handleCopyLink}
                        className="p-2.5 rounded-lg hover:bg-[#fdb913]/20 transition-colors relative group"
                        aria-label="Copy link"
                    >
                        <Link2 className="h-5 w-5 text-[#868584] dark:text-gray-400 group-hover:text-[#fdb913]" />
                        {copied && (
                            <span className="absolute left-full ml-2 px-3 py-1.5 bg-black text-white text-xs rounded-lg whitespace-nowrap">
                                Copied!
                            </span>
                        )}
                    </button>
                </div>
            </motion.div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-4 md:pt-48">
                <div className="container mx-auto max-w-4xl">
                    {/* Back Button */}
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-[#868584] dark:text-gray-400 hover:text-[#fdb913] transition-colors mb-8 group"
                    >
                        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to News</span>
                    </Link>

                    {/* Category Badge */}
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-[#fdb913] text-black text-sm font-semibold rounded-full uppercase tracking-wide">
                            {Array.isArray(article.newsFields?.category)
                                ? article.newsFields.category[0]
                                : article.newsFields?.category || "News"}
                        </span>
                    </div>

                    {/* Title */}
                    <motion.h1
                        className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black dark:text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {stripHtml(article.title)}
                    </motion.h1>

                    {/* Excerpt */}
                    {article.excerpt && (
                        <motion.p
                            className="text-lg md:text-xl text-[#868584] dark:text-gray-300 leading-relaxed mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {stripHtml(article.excerpt)}
                        </motion.p>
                    )}

                    {/* Meta Information */}
                    <motion.div
                        className="flex flex-wrap items-center gap-4 md:gap-6 text-[#868584] dark:text-gray-400 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span className="text-sm font-medium">
                                {article.newsFields?.author || "Admin"}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">
                                {formatDate(article.newsFields?.publishedDate || article.date)}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{readingTime} min read</span>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    {article.newsFields?.tags && (
                        <motion.div
                            className="flex items-start gap-3 mb-8 flex-wrap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Tag className="h-4 w-4 text-[#868584] dark:text-gray-400 mt-1" />
                            <div className="flex flex-wrap gap-2">
                                {article.newsFields.tags.split(",").map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-card dark:bg-[#1a1a1a] text-[#868584] dark:text-gray-300 text-xs font-medium rounded-lg border border-border dark:border-white/10 hover:border-[#fdb913] transition-colors"
                                    >
                                        {tag.trim()}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Share Buttons */}
                    <motion.div
                        className="flex items-center gap-3 pb-8 border-b border-border dark:border-white/10 flex-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <span className="text-sm font-semibold text-[#868584] dark:text-gray-400">
                            Share:
                        </span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handleShare("facebook")}
                                className="p-2.5 rounded-lg bg-card dark:bg-[#1a1a1a] hover:bg-[#fdb913] transition-all duration-300 group"
                                aria-label="Share on Facebook"
                            >
                                <Facebook className="h-5 w-5 text-[#868584] dark:text-gray-400 group-hover:text-black" />
                            </button>
                            <button
                                onClick={() => handleShare("twitter")}
                                className="p-2.5 rounded-lg bg-card dark:bg-[#1a1a1a] hover:bg-[#fdb913] transition-all duration-300 group"
                                aria-label="Share on Twitter"
                            >
                                <Twitter className="h-5 w-5 text-[#868584] dark:text-gray-400 group-hover:text-black" />
                            </button>
                            <button
                                onClick={() => handleShare("linkedin")}
                                className="p-2.5 rounded-lg bg-card dark:bg-[#1a1a1a] hover:bg-[#fdb913] transition-all duration-300 group"
                                aria-label="Share on LinkedIn"
                            >
                                <Linkedin className="h-5 w-5 text-[#868584] dark:text-gray-400 group-hover:text-black" />
                            </button>
                            <button
                                onClick={handleCopyLink}
                                className="p-2.5 rounded-lg bg-card dark:bg-[#1a1a1a] hover:bg-[#fdb913] transition-all duration-300 relative group"
                                aria-label="Copy link"
                            >
                                <Link2 className="h-5 w-5 text-[#868584] dark:text-gray-400 group-hover:text-black" />
                                {copied && (
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap">
                                        Copied!
                                    </span>
                                )}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            {imageUrl && (
                <section className="px-4 mb-12 md:mb-16">
                    <motion.div
                        className="container mx-auto max-w-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={imageUrl}
                                alt={stripHtml(article.title)}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </motion.div>
                </section>
            )}

            {/* Article Content */}
            <section className="px-4 pb-16">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <article
                            className="prose prose-lg lg:prose-xl dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-black dark:prose-headings:text-white prose-headings:scroll-mt-24 prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-12 prose-h2:text-2xl prose-h2:mb-5 prose-h2:mt-10 prose-h2:border-b prose-h2:border-border dark:prose-h2:border-white/10 prose-h2:pb-3 prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8 prose-h4:text-lg prose-h4:mb-3 prose-h4:mt-6 prose-p:text-[#4a4a4a] dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-[16px] md:prose-p:text-[17px] prose-a:text-[#fdb913] prose-a:font-medium prose-a:no-underline hover:prose-a:text-[#e5a711] hover:prose-a:underline prose-a:transition-all prose-a:duration-200 prose-strong:text-black dark:prose-strong:text-white prose-strong:font-semibold prose-ul:text-[#4a4a4a] dark:prose-ul:text-gray-300 prose-ul:leading-relaxed prose-ul:mb-6 prose-ol:text-[#4a4a4a] dark:prose-ol:text-gray-300 prose-ol:leading-relaxed prose-ol:mb-6 prose-li:mb-2 prose-li:pl-2 prose-li:marker:text-[#fdb913] prose-blockquote:border-l-4 prose-blockquote:border-[#fdb913] prose-blockquote:bg-card dark:prose-blockquote:bg-[#1a1a1a] prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-[#4a4a4a] dark:prose-blockquote:text-gray-300 prose-blockquote:shadow-sm prose-img:rounded-lg prose-img:shadow-md prose-img:my-6 prose-img:border prose-img:border-border dark:prose-img:border-white/10 prose-img:max-w-full prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-[#868584] dark:prose-figcaption:text-gray-400 prose-figcaption:mt-2 prose-figcaption:italic prose-code:text-[#fdb913] prose-code:bg-card dark:prose-code:bg-[#1a1a1a] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-pre:bg-[#1a1a1a] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-pre:my-6 prose-pre:shadow-lg prose-pre:overflow-x-auto prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:overflow-hidden prose-table:rounded-lg prose-thead:bg-card dark:prose-thead:bg-[#1a1a1a] prose-thead:border-b-2 prose-thead:border-[#fdb913] prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-black dark:prose-th:text-white prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-border dark:prose-td:border-white/10 prose-hr:border-border dark:prose-hr:border-white/10 prose-hr:my-8"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Newsletter CTA */}
                        <div className="my-12 p-6 md:p-8 bg-gradient-to-br from-[#fdb913]/10 to-transparent border border-[#fdb913]/20 rounded-xl md:rounded-2xl">
                            <div className="max-w-2xl mx-auto text-center">
                                <Mail className="h-10 w-10 md:h-12 md:w-12 text-[#fdb913] mx-auto mb-4" />
                                <h3 className="text-xl md:text-2xl font-heading font-bold text-black dark:text-white mb-3">
                                    Stay Updated
                                </h3>
                                <p className="text-[#868584] dark:text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                                    Get the latest news and updates from Western Corridor Limited
                                    delivered directly to your inbox.
                                </p>
                                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 rounded-lg border border-border dark:border-white/10 bg-background dark:bg-[#0a0a0a] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#fdb913] text-sm md:text-base"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-[#fdb913] text-black font-semibold rounded-lg hover:bg-[#e5a711] transition-colors whitespace-nowrap text-sm md:text-base"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Author Info */}
                        {article.newsFields?.author && (
                            <div className="mt-8 p-5 md:p-6 bg-card dark:bg-[#1a1a1a] rounded-xl border border-border dark:border-white/10">
                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    <div className="shrink-0">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#fdb913] flex items-center justify-center">
                                            <User className="h-6 w-6 md:h-8 md:w-8 text-black" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-heading font-bold text-black dark:text-white mb-2">
                                            Written by {article.newsFields.author}
                                        </h4>
                                        <p className="text-[#868584] dark:text-gray-300 text-xs md:text-sm leading-relaxed">
                                            Contributing writer at Western Corridor Limited, covering
                                            infrastructure development, regional impact, and community
                                            initiatives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="px-4 py-12 md:py-20 bg-card dark:bg-[#1a1a1a]">
                    <div className="container mx-auto max-w-6xl">
                        <div className="mb-8 md:mb-12">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-black dark:text-white mb-2 md:mb-3">
                                Related Articles
                            </h2>
                            <p className="text-[#868584] dark:text-gray-400 md:text-lg">
                                Continue reading more news and updates
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {relatedArticles.map((relatedArticle) => {
                                const relatedImageUrl = getImageUrl(relatedArticle);
                                const relatedExcerpt = stripHtml(relatedArticle.excerpt || "");

                                return (
                                    <Link
                                        key={relatedArticle.id}
                                        href={`/news/${relatedArticle.slug}`}
                                        className="group"
                                    >
                                        <article className="bg-background dark:bg-[#0a0a0a] rounded-xl overflow-hidden border border-border dark:border-white/10 hover:border-[#fdb913] transition-all duration-300 hover:shadow-lg md:hover:shadow-2xl md:hover:-translate-y-1 h-full">
                                            <div className="relative h-48 md:h-52 overflow-hidden">
                                                <Image
                                                    src={relatedImageUrl}
                                                    alt={stripHtml(relatedArticle.title)}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute top-3 left-3 md:top-4 md:left-4">
                                                    <span className="px-2 py-1 md:px-3 md:py-1 bg-[#fdb913] text-black text-xs font-semibold rounded-full">
                                                        {Array.isArray(relatedArticle.newsFields?.category)
                                                            ? relatedArticle.newsFields.category[0]
                                                            : relatedArticle.newsFields?.category || "News"}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="p-4 md:p-6">
                                                <h3 className="text-lg md:text-xl font-heading font-bold text-black dark:text-white mb-2 md:mb-3 group-hover:text-[#fdb913] transition-colors line-clamp-2">
                                                    {stripHtml(relatedArticle.title)}
                                                </h3>
                                                <p className="text-[#868584] dark:text-gray-300 text-xs md:text-sm line-clamp-3 leading-relaxed mb-3 md:mb-4">
                                                    {relatedExcerpt}
                                                </p>
                                                <div className="flex items-center gap-3 md:gap-4 text-xs text-[#868584] dark:text-gray-400">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" />
                                                        {formatDate(
                                                            relatedArticle.newsFields?.publishedDate ||
                                                            relatedArticle.date
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Back to News CTA */}
            <section className="px-4 py-12 md:py-16">
                <div className="container mx-auto max-w-4xl text-center">
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-[#fdb913] text-black font-semibold rounded-lg md:rounded-xl hover:bg-[#e5a711] transition-all duration-300 hover:shadow-lg md:hover:shadow-xl"
                    >
                        <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
                        <span className="text-sm md:text-base">View All News Articles</span>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
