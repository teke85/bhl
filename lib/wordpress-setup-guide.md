# Task: Create/Update a Next.js Page with WordPress Data Integration

## Context

I have a Next.js project that fetches data from WordPress using GraphQL. I need you to:

1. Update my `lib/wordpress.ts` file to add the new query and data fetching function
2. Update/create page components to accept props from WordPress
3. Update/create the main page.tsx to fetch data and pass it to components

## Project Architecture

- **lib/wordpress.ts**: Contains GraphQL queries, TypeScript interfaces, helper functions (like `stripHtml`, `parseHtmlRepeatableField`), and data fetching functions
- **components/[page-name]/**: Contains individual section components that receive props
- **app/[page-name]/page.tsx**: Server component that fetches data and renders section components

## WordPress GraphQL Query

[PASTE YOUR GRAPHQL QUERY HERE]

## Current lib/wordpress.ts

[PASTE YOUR LIB FILE HERE]
import { GraphQLClient } from "graphql-request";

// GraphQL endpoint from your WordPress
const GRAPHQL_URL =
process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL ||
"https://cms.westerncorridorlimited.com/graphql";

// Create GraphQL client
const client = new GraphQLClient(GRAPHQL_URL, {
headers: {
"Content-Type": "application/json",
},
});

// ============================================
// TypeScript Interfaces
// ============================================

export interface NewsArticle {
id: string;
title: string;
slug: string;
content: string;
excerpt: string;
date: string;
featuredImage?: {
node: {
sourceUrl: string;
altText: string;
mediaDetails: {
width: number;
height: number;
};
};
};
newsFields: {
author: string;
publishedDate: string;
category: string | string[];
tags?: string;
};
}

export interface GalleryItem {
id: string;
title: string;
slug: string;
featuredImage?: {
node: {
sourceUrl: string;
altText: string;
mediaDetails: {
width: number;
height: number;
};
};
};
galleryFields: {
category: string | string[];
order: number;
description?: string;
};
}

export interface VideoItem {
id: string;
title: string;
slug: string;
featuredImage?: {
node: {
sourceUrl: string;
altText: string;
mediaDetails: {
width: number;
height: number;
};
};
};
videoFields: {
videoUrl: string;
category?: string | string[];
order: number;
};
}

// Commitment interface for the commitment page
export interface CommitmentData {
title: string;
heroTitle: string;
heroDescription: string;
commitmentStatement: string;
itemTitles: string;
itemDescriptions: string;
mainTitle: string;
keyPrincipleTitles: string;
keyPrincipleDescriptions: string;
impactQuote: string;
impactAuthor: string;
accountabilityMainTitle: string;
accountabilitysubtitle: string;
accountabilityitemstitle: string;
accountabilityitemssubtitle: string;
ctatitle: string;
ctadescription: string;
button1Text: string;
button1Link: string;
button2text: string;
button2link: string;
}

// Resettlement interface for the resettlement page
export interface ResettlementData {
title: string;
heroTitle: string;
heroDescription: string;
purposeStatement: string;
leftcolumntitle: string;
rightcolumnimage: {
node: {
id: string;
sourceUrl?: string;
};
} | null;
mainTitle: string;
frameworkcardtitle: string;
frameworkcarddescritpion: string;
principlesnumber: string;
principlemaintitle: string;
principlesdescription: string;
communitytitle: string;
communitydescription: string;
}

// Regional Impact interface for the regional impact page
export interface RegionalImpactData {
title: string;
heroTitle: string;
heroDescription: string;
heroBackgroundImage: {
node: {
id: string;
sourceUrl?: string;
};
} | null;
iconnames: string;
cardtitle: string;
carddescription: string;
mainTitle: string;
positioningtitle: string;
positioningdescription: string;
porttitle: string;
portdescription: string;
trademaintitle: string;
tradeicon: {
node: {
id: string;
};
} | null;
tradetitle: string;
tradelistitem: string;
}

// ============================================
// GraphQL Queries
// ============================================

const GET_ALL_NEWS = `  query GetAllNews {
    newsArticles(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        content
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        newsFields {
          author
          publishedDate
          category
          tags
        }
      }
    }
  }`;

const GET_ALL_GALLERY = `  query GetAllGallery {
    galleryItems(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        galleryFields {
          category
          order
          description
        }
      }
    }
  }`;

const GET_ALL_VIDEOS = `  query GetAllVideos {
    videoItems(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        videoFields {
          videoUrl
          category
          order
        }
      }
    }
  }`;

const GET_COMMITMENT = `  query GetCommitmentQuery {
    commitments {
      nodes {
        title
        heroTitle
        heroDescription
        commitmentStatement
        itemTitles
        itemDescriptions
        mainTitle
        keyPrincipleTitles
        keyPrincipleDescriptions
        impactQuote
        impactAuthor
        accountabilityMainTitle
        accountabilitysubtitle
        accountabilityitemstitle
        accountabilityitemssubtitle
        ctatitle
        ctadescription
        button1Text
        button1Link
        button2text
        button2link
      }
    }
  }`;

const GET_RESETTLEMENT = `  query GetResettlementQuery {
    resettlements {
      nodes {
        title
        heroTitle
        heroDescription
        purposeStatement
        leftcolumntitle
        rightcolumnimage {
          node {
            id
            sourceUrl
          }
        }
        mainTitle
        frameworkcardtitle
        frameworkcarddescritpion
        principlesnumber
        principlemaintitle
        principlesdescription
        communitytitle
        communitydescription
      }
    }
  }`;

const GET_REGIONAL_IMPACT = `  query GetRegionalQuery {
    regionalImpactPage {
      nodes {
        title
        heroTitle
        heroDescription
        heroBackgroundImage {
          node {
            id
            sourceUrl
          }
        }
        iconnames
        cardtitle
        carddescription
        mainTitle
        positioningtitle
        positioningdescription
        porttitle
        portdescription
        trademaintitle
        tradeicon {
          node {
            id
          }
        }
        tradetitle
        tradelistitem
      }
    }
  }`;

const GET_SINGLE_NEWS = `  query GetSingleNews($slug: ID!) {
    newsArticle(id: $slug, idType: SLUG) {
      id
      title
      slug
      content
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      newsFields {
        author
        publishedDate
        category
        tags
      }
    }
  }`;

// ============================================
// API Functions
// ============================================

/\*\*

- Fetch all news articles via GraphQL
  \*/
  export async function getAllNews(): Promise<NewsArticle[]> {
  try {
  const data = await client.request<{
  newsArticles: { nodes: NewsArticle[] };
  }>(GET_ALL_NEWS);
  return data.newsArticles?.nodes || [];
  } catch (error) {
  console.error("❌ GraphQL Error fetching news:", error);
  return [];
  }
  }

/\*\*

- Fetch news by category via GraphQL
  \*/
  export async function getNewsByCategory(
  category: string
  ): Promise<NewsArticle[]> {
  try {
  const allNews = await getAllNews();
  return allNews.filter((article) => {
  const articleCategory = article.newsFields?.category;

        if (Array.isArray(articleCategory)) {
          return articleCategory.some(
            (cat) =>
              typeof cat === "string" &&
              cat.toLowerCase() === category.toLowerCase()
          );
        } else if (typeof articleCategory === "string") {
          return articleCategory.toLowerCase() === category.toLowerCase();
        }

        return false;
      });

  } catch (error) {
  console.error("❌ GraphQL Error filtering news:", error);
  return [];
  }
  }

/\*\*

- Fetch all gallery items via GraphQL
  \*/
  export async function getAllGallery(): Promise<GalleryItem[]> {
  try {
  const data = await client.request<{
  galleryItems: { nodes: GalleryItem[] };
  }>(GET_ALL_GALLERY);
  return data.galleryItems.nodes || [];
  } catch (error) {
  console.error("❌ GraphQL Error fetching gallery:", error);
  return [];
  }
  }

/\*\*

- Fetch gallery by category via GraphQL
  \*/
  export async function getGalleryByCategory(
  category: string
  ): Promise<GalleryItem[]> {
  try {
  const allGallery = await getAllGallery();
  return allGallery.filter((item) => {
  const itemCategory = item.galleryFields?.category;

        if (Array.isArray(itemCategory)) {
          return itemCategory.some(
            (cat) =>
              typeof cat === "string" &&
              cat.toLowerCase() === category.toLowerCase()
          );
        } else if (typeof itemCategory === "string") {
          return itemCategory.toLowerCase() === category.toLowerCase();
        }

        return false;
      });

  } catch (error) {
  console.error("❌ GraphQL Error filtering gallery:", error);
  return [];
  }
  }

/\*\*

- Fetch all video items via GraphQL
  \*/
  export async function getAllVideos(): Promise<VideoItem[]> {
  try {
  const data = await client.request<{ videoItems: { nodes: VideoItem[] } }>(
  GET_ALL_VIDEOS
  );
  return data.videoItems?.nodes || [];
  } catch (error) {
  console.error("❌ GraphQL Error fetching videos:", error);
  return [];
  }
  }

/\*\*

- Fetch commitment page data via GraphQL
  \*/
  export async function getCommitmentData(): Promise<CommitmentData | null> {
  try {
  const data = await client.request<{
  commitments: { nodes: CommitmentData[] };
  }>(GET_COMMITMENT);
  return data.commitments?.nodes?.[0] || null;
  } catch (error) {
  console.error("❌ GraphQL Error fetching commitment:", error);
  return null;
  }
  }

/\*\*

- Fetch resettlement page data via GraphQL
  \*/
  export async function getResettlementData(): Promise<ResettlementData | null> {
  try {
  const data = await client.request<{
  resettlements: { nodes: ResettlementData[] };
  }>(GET_RESETTLEMENT);
  return data.resettlements?.nodes?.[0] || null;
  } catch (error) {
  console.error("❌ GraphQL Error fetching resettlement:", error);
  return null;
  }
  }

/\*\*

- Fetch regional impact page data via GraphQL
  \*/
  export async function getRegionalImpactData(): Promise<RegionalImpactData | null> {
  try {
  const data = await client.request<{
  regionalImpactPage: { nodes: RegionalImpactData[] };
  }>(GET_REGIONAL_IMPACT);
  return data.regionalImpactPage?.nodes?.[0] || null;
  } catch (error) {
  console.error("❌ GraphQL Error fetching regional impact:", error);
  return null;
  }
  }

/\*\*

- Fetch single news article by slug via GraphQL
  \*/
  export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  try {
  const data = await client.request<{ newsArticle: NewsArticle | null }>(
  GET_SINGLE_NEWS,
  { slug }
  );
  return data.newsArticle || null;
  } catch (error) {
  console.error("❌ GraphQL Error fetching single news:", error);
  return null;
  }
  }

/\*\*

- Get related news articles by category
  \*/
  export async function getRelatedNews(
  currentSlug: string,
  category: string,
  limit = 3
  ): Promise<NewsArticle[]> {
  try {
  const allNews = await getNewsByCategory(category);
  return allNews
  .filter((article) => article.slug !== currentSlug)
  .slice(0, limit);
  } catch (error) {
  console.error("❌ Error fetching related news:", error);
  return [];
  }
  }

// ============================================
// Helper Functions
// ============================================

/\*\*

- Get image URL from GraphQL response
  \*/
  export function getImageUrl(
  item:
  | NewsArticle
  | GalleryItem
  | VideoItem
  | ResettlementData
  | RegionalImpactData
  ): string {
  if ("featuredImage" in item && item.featuredImage?.node?.sourceUrl) {
  return item.featuredImage.node.sourceUrl;
  }
  if ("rightcolumnimage" in item && item.rightcolumnimage?.node?.sourceUrl) {
  return item.rightcolumnimage.node.sourceUrl;
  }
  if (
  "heroBackgroundImage" in item &&
  item.heroBackgroundImage?.node?.sourceUrl
  ) {
  return item.heroBackgroundImage.node.sourceUrl;
  }
  return "/placeholder.svg";
  }

/\*\*

- Strip HTML tags from content
  _/
  export function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]_>/g, "").trim();
  }

/\*\*

- Format date to readable string
  \*/
  export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  });
  }

/\*\*

- Parse repeatable fields (pipe-separated, newline-separated, or comma-separated)
  \*/
  export function parseRepeatableField(
  field: string | null | undefined
  ): string[] {
  if (!field) return [];

if (field.includes("|")) {
return field
.split("|")
.map((item) => item.trim())
.filter(Boolean);
}

if (field.includes("\n")) {
return field
.split("\n")
.map((item) => item.trim())
.filter(Boolean);
}

if (field.includes(",") && !field.includes(".")) {
return field
.split(",")
.map((item) => item.trim())
.filter(Boolean);
}

return [field.trim()];
}

/\*\*

- Parse HTML-wrapped repeatable fields from WordPress
- Handles fields like: "<p>Item1</p>\n <p>Item2</p>\n <p>Item3</p>"
  \*/
  export function parseHtmlRepeatableField(
  field: string | null | undefined
  ): string[] {
  if (!field) return [];

// Split by </p> and extract content from <p> tags
const matches = field.match(/<p>([^<]\*)<\/p>/g);
if (matches && matches.length > 0) {
return matches.map((match) => stripHtml(match).trim()).filter(Boolean);
}

// Fallback to regular parsing if no <p> tags
return parseRepeatableField(stripHtml(field));
}

/\*\*

- Parse regional impact cards from WordPress fields
  \*/
  export function parseRegionalImpactCards(
  iconnames: string,
  cardtitle: string,
  carddescription: string
  ): Array<{ icon: string; title: string; description: string }> {
  const icons = parseHtmlRepeatableField(iconnames);
  const titles = parseHtmlRepeatableField(cardtitle);
  const descriptions = parseHtmlRepeatableField(carddescription);

const maxLength = Math.max(icons.length, titles.length, descriptions.length);
const cards = [];

for (let i = 0; i < maxLength; i++) {
cards.push({
icon: icons[i] || "TrendingUp",
title: titles[i] || "",
description: descriptions[i] || "",
});
}

return cards;
}

/\*\*

- Parse strategic positioning sections from WordPress
- Handles HTML content with multiple <p> tags
  \*/
  export function parseStrategicPositioning(description: string): {
  mineralCorridor: string;
  integratedNetwork: string;
  } {
  if (!description) {
  return { mineralCorridor: "", integratedNetwork: "" };
  }

// Split by </p> <p> pattern to get two paragraphs
const paragraphs = parseHtmlRepeatableField(description);

return {
mineralCorridor: paragraphs[0] || "",
integratedNetwork: paragraphs[1] || "",
};
}

/\*\*

- Parse trade list items from WordPress (comma-separated)
  \*/
  export function parseTradeListItems(tradelistitem: string): string[] {
  if (!tradelistitem) return [];

// Handle comma-separated list with "and"
return tradelistitem
.replace(/, and /g, ", ")
.split(",")
.map((item) => item.trim())
.filter(Boolean);
}

## Page Components

[PASTE EACH COMPONENT FILE WITH ITS FILENAME]
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, X, Maximize, Minimize } from "lucide-react";
import { cn } from "@/lib/utils";
import StickyNavigationMenu from "./StickyNavUpdated";

const STATIC_SLIDE = {
title: "TRANSFORMATION OF THE WESTERN CORRIDOR",
subtitle:
"Connecting Zambia's Rich Natural Resources to the Rest of the World",
backgroundImage:
"https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_70,w_1920,c_limit/v1759918204/DJI_0565_10000_gb099t.jpg",
};

const SAMPLE_VIDEO_URL =
"https://res.cloudinary.com/dpeg7wc34/video/upload/v1760020925/BHL_Concession_Signing_01.12.2024_barvdy.mp4";

const HeroCarousel: React.FC = () => {
const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
const [isFullScreen, setIsFullScreen] = useState(false);

const titleRef = useRef<HTMLHeadingElement>(null);
const subtitleRef = useRef<HTMLParagraphElement>(null);
const ctaRef = useRef<HTMLDivElement>(null);
const videoRef = useRef<HTMLVideoElement>(null);
const modalRef = useRef<HTMLDivElement>(null);
const transformationTextRef = useRef<HTMLHeadingElement>(null);

// Animate scrolling TRANSFORMATION text
useEffect(() => {
if (!transformationTextRef.current) return;
const element = transformationTextRef.current;
const textWidth = element.offsetWidth;
element.style.transform = `translateY(-50%) translateX(${window.innerWidth}px)`;

    const animate = () => {
      const startX = window.innerWidth;
      const endX = -textWidth;
      const distance = Math.abs(endX - startX);
      const speed = 50;
      const duration = (distance / speed) * 1000;
      let startTime: number | null = null;

      const animateFrame = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = (elapsed / duration) % 1;
        const currentX = startX - distance * progress;
        element.style.transform = `translateY(-50%) translateX(${currentX}px)`;
        requestAnimationFrame(animateFrame);
      };

      requestAnimationFrame(animateFrame);
    };

    animate();

}, []);

// Animate hero text and buttons
useEffect(() => {
setTimeout(() => {
[titleRef, subtitleRef, ctaRef].forEach((ref, index) => {
if (ref.current) {
ref.current.style.transition = `all 0.8s ease ${index * 0.2}s`;
ref.current.style.transform = "translateY(0)";
ref.current.style.opacity = "1";
}
});
}, 300);
}, []);

const handleOpenVideoModal = () => {
setIsVideoModalOpen(true);
document.body.style.overflow = "hidden";
};

const handleCloseModal = () => {
setIsVideoModalOpen(false);
setIsFullScreen(false);
document.body.style.overflow = "unset";
videoRef.current?.pause();
};

const handleFullscreen = () => {
if (!modalRef.current) return;
if (!isFullScreen) {
modalRef.current.requestFullscreen?.();
setIsFullScreen(true);
} else {
document.exitFullscreen();
setIsFullScreen(false);
}
};

return (
<div className="relative h-screen w-full overflow-hidden">
{/_ Full Navigation with Mega Menu - Using StickyNavigationMenu component _/}
<StickyNavigationMenu />

      {/* Optimized Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={STATIC_SLIDE.backgroundImage}
          alt="Background"
          fill
          sizes="100vw"
          priority={true}
          quality={75}
          loading="eager"
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_10,e_blur:1000,w_10/v1759918204/DJI_0565_10000_gb099t.jpg"
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 from-black/40 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Scrolling TRANSFORMATION Text - Responsive sizing */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none overflow-hidden">
        <span
          ref={transformationTextRef}
          className="absolute text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-extrabold uppercase text-white/20 tracking-widest leading-none select-none whitespace-nowrap"
          style={{ top: "50%" }}
        >
          TRANSFORMATION
        </span>
      </div>

      {/* Hero Title & Subtitle - Mobile responsive */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-4 sm:px-6 md:px-8">
        <h1
          ref={titleRef}
          className="max-w-4xl text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight opacity-0 translate-y-[40px] drop-shadow-lg"
        >
          {STATIC_SLIDE.title}
        </h1>
        <p
          ref={subtitleRef}
          className="max-w-2xl text-[#cfcdcb] font-body text-sm sm:text-base md:text-lg lg:text-2xl mb-6 sm:mb-8 opacity-0 translate-y-[30px] drop-shadow-md px-4"
        >
          {STATIC_SLIDE.subtitle}
        </p>
      </div>

      {/* CTA Buttons - Mobile responsive */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-30 w-full px-4">
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center opacity-0 translate-y-[30px] max-w-md sm:max-w-none mx-auto"
        >
          <Link href="/projects" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#FDDB59] font-body rounded-none hover:bg-[#be9416] text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group shadow-lg"
            >
              Explore Projects
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            onClick={handleOpenVideoModal}
            className="w-full sm:w-auto border-white/30 rounded-none text-white hover:bg-white/10 hover:text-white hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group bg-transparent backdrop-blur-sm shadow-lg"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 font-body mr-2 group-hover:scale-110 transition-transform duration-300" />
            Watch Overview
          </Button>
        </div>
      </div>

      {/* Video Modal - Mobile responsive */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-2 sm:p-4 backdrop-blur-sm">
          <div
            ref={modalRef}
            className={cn(
              "relative bg-black rounded-lg overflow-hidden shadow-2xl transition-all duration-300",
              isFullScreen ? "w-full h-full" : "w-full max-w-4xl aspect-video"
            )}
          >
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center space-x-2 z-10">
              <button
                onClick={handleFullscreen}
                className="p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200 backdrop-blur-sm"
              >
                {isFullScreen ? (
                  <Minimize className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
              <button
                onClick={handleCloseModal}
                className="p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200 backdrop-blur-sm"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              <source src={SAMPLE_VIDEO_URL} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>

);
};

export default HeroCarousel;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Zap, Globe, TrendingUp, Award } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
value: string;
unit?: string;
label: string;
description: string;
icon: React.ReactNode;
highlight?: boolean;
}

const KeyStatsUpdated = () => {
const [isVisible, setIsVisible] = useState(false);
const [counts, setCounts] = useState<Record<number, number>>({});
const statsRef = useRef<HTMLDivElement>(null);

const stats: Stat[] = [
{
value: "371",
label: "KILOMETRES",
description: "TOTAL ROAD LENGTH",
icon: <TrendingUp className="w-8 h-8" />,
},
{
value: "8",
unit: "M+",
label: "INVESTMENT",
description: "ALREADY INVESTED",
icon: <Award className="w-8 h-8" />,
highlight: true,
},
{
value: "2025",
label: "START OF CONSTRUCTION",
description: "TARGET YEAR",
icon: <Zap className="w-8 h-8" />,
highlight: true,
},
{
value: "4",
label: "DISTRICTS",
description: "COMMUNITIES BENEFITING",
icon: <Globe className="w-8 h-8" />,
},
];

useEffect(() => {
const observer = new IntersectionObserver(
([entry]) => {
if (entry.isIntersecting) setIsVisible(true);
},
{ threshold: 0.2 }
);

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();

}, []);

useEffect(() => {
if (isVisible && statsRef.current) {
const cards = gsap.utils.toArray(".stat-card");
const icons = gsap.utils.toArray(".stat-icon");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        icons,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.15,
          delay: 0.3,
        }
      );

      gsap.to(".highlight-card", {
        scale: 1.05,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }

}, [isVisible]);

useEffect(() => {
if (isVisible) {
stats.forEach((stat, index) => {
const numValue = parseFloat(stat.value);
if (!isNaN(numValue)) {
let current = 0;
const increment = numValue / 50;
const timer = setInterval(() => {
current += increment;
if (current >= numValue) {
setCounts((prev) => ({ ...prev, [index]: numValue }));
clearInterval(timer);
} else {
setCounts((prev) => ({
...prev,
[index]: stat.value.includes(".")
? parseFloat(current.toFixed(1))
: Math.floor(current),
}));
}
}, 30);
}
});
}
}, [isVisible]);

return (
<section
      ref={statsRef}
      className="relative py-32 bg-white dark:bg-black overflow-hidden"
    >
<div className="absolute inset-0 opacity-10">
<div
className="absolute inset-0"
style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,0.03) 35px,
              rgba(255,255,255,0.03) 70px
            )`,
          }}
/>
</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-body tracking-[0.3em] text-black dark:text-white mb-4">
            OUR KEY STATS
          </h2>
          <div className="w-24 h-px bg-[#FDDB59] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card relative group p-8 rounded-lg transition-all duration-700 ${
                stat.highlight
                  ? "highlight-card bg-[#FDDB59] dark:bg-[#FDDB59]/95"
                  : "bg-transparent"
              }`}
            >
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-body tracking-[0.2em] uppercase ${
                      stat.highlight
                        ? "text-black"
                        : "text-black dark:text-white/50"
                    }`}
                  >
                    {stat.label}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-6xl md:text-7xl font-bold leading-none ${
                      stat.highlight
                        ? "text-black"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {index === 1 && "$"}
                    {counts[index] !== undefined ? counts[index] : stat.value}
                  </span>
                  {stat.unit && (
                    <span
                      className={`text-3xl md:text-4xl font-bold ${
                        stat.highlight
                          ? "text-black/80"
                          : "text-black dark:text-white/80"
                      }`}
                    >
                      {stat.unit}
                    </span>
                  )}
                </div>

                <div
                  className={`text-sm font-body uppercase tracking-wide ${
                    stat.highlight
                      ? "text-black/70"
                      : "text-black/60 dark:text-white/60"
                  }`}
                >
                  {stat.description}
                </div>

                <div
                  className={`stat-icon opacity-60 group-hover:opacity-100 transition-opacity ${
                    stat.highlight ? "text-black" : "text-[#FDDB59]"
                  }`}
                >
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

);
};

export default KeyStatsUpdated;

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ScrollImageItem {
title: string;
description: string;
imageUrl: string;
}

const ScrollTriggeredImage = () => {
const [activeIndex, setActiveIndex] = useState(0);
const sectionRef = useRef<HTMLDivElement>(null);
const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

const items: ScrollImageItem[] = [
{
title: "INFRASTRUCTURE EXCELLENCE",
description:
"The Western Corridor Project represents a transformative infrastructure initiative aimed at upgrading the 371 km Mutanda to Kaoma Road to international bituminous standards. Delivered under a 25-year Public-Private Partnership concession, the project includes the construction of three toll plazas, two weighbridges, upgraded bridges, and 20 km of urban roads, forming a critical trade artery between Zambia’s mineral-rich regions and the West Coast of Africa. With a phased pavement design, climate-resilient drainage systems, and electronic tolling infrastructure, the project is engineered for long-term durability, safety, and efficiency. It is strategically aligned with Zambia’s national infrastructure and economic development goals, and is expected to significantly enhance regional connectivity, reduce transport costs, and support sustainable growth across the SADC region.",
imageUrl:
"https://res.cloudinary.com/dpeg7wc34/image/upload/v1762357419/Toll_plaza_ls71wg.jpg",
},
{
title: "REGIONAL CONNECTIVITY",
description:
"The Western Corridor Project is a strategic infrastructure initiative that significantly enhances regional connectivity by linking Zambia’s mineral-rich Copperbelt and North-Western Provinces with the West Coast of Africa via Walvis Bay in Namibia. By upgrading the 371 km Mutanda to Kaoma Road and integrating it with key trade routes such as the Lumwana–Kambimba and Kipushi–Solwezi corridors, the project creates a seamless transport network that bypasses congested urban centres and reduces travel distances by up to 400 km for cross-border freight. This improved corridor facilitates efficient trade flows between Zambia, the Democratic Republic of Congo, Angola, Botswana, and Namibia, positioning Zambia as a pivotal logistics hub in the Southern African Development Community (SADC) region.",
imageUrl:
"https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_auto,w_1920,c_limit/v1762947095/DJI_0711_wiuokv.jpg",
},
{
title: "COMMUNITY IMPACT",
description:
"Empowering local communities through inclusive development and collaboration. The Western Corridor leadership, in partnership with traditional leaders across four districts, is ensuring that the Mutanda–Kaoma Road benefits every household along its route. Through fair resettlement programs, community engagement, and sustainable economic initiatives, the project is improving livelihoods, preserving cultural heritage, and building a foundation for long-term growth.",
imageUrl:
"https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_auto,w_1920,c_limit/v1761107765/EI3A9507DRM_emgog7.jpg",
},
];

useEffect(() => {
const handleScroll = () => {
if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      contentRefs.current.forEach((ref, index) => {
        if (ref) {
          const itemTop = ref.offsetTop + sectionTop;
          const itemBottom = itemTop + ref.offsetHeight;

          if (scrollPosition >= itemTop && scrollPosition < itemBottom) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);

}, []);

return (
<section
      ref={sectionRef}
      className="relative bg-white dark:bg-black py-12 md:py-20 px-4"
    >
<div className="container mx-auto">
{/_ Desktop Layout - Side by side with sticky image _/}
<div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
{/_ Sticky Image Container - Desktop _/}
<div className="lg:sticky lg:top-32 h-[500px] xl:h-[600px] w-full max-w-[500px] relative rounded-none overflow-hidden">
{items.map((item, index) => (
<div
key={index}
className={`absolute inset-0 rounded-none transition-opacity duration-700 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`} >
<Image
src={item.imageUrl || "/placeholder.svg"}
alt={item.title}
fill
className="object-cover"
sizes="(max-width: 1024px) 100vw, 500px"
/>
</div>
))}
</div>

          {/* Content - Desktop */}
          <div className="space-y-96">
            {items.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="min-h-[400px] flex flex-col justify-center"
              >
                <h2 className="text-4xl xl:text-6xl capitalize text-black dark:text-white font-heading font-bold mb-6">
                  {item.title}
                </h2>
                <p className="text-lg xl:text-xl font-body text-[#868584] dark:text-white leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout - Stacked cards */}
        <div className="lg:hidden space-y-8 md:space-y-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col space-y-6">
              {/* Image */}
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-none overflow-hidden">
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 500px"
                  quality={90}
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl capitalize text-black dark:text-[#cfcdcb] font-heading font-bold">
                  {item.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-body text-[#cfcdcb] dark:text-[#cfcdcb] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

);
};

export default ScrollTriggeredImage;

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ExpertBuildersSection = () => {
const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
const ctx = gsap.context(() => {
const titles = gsap.utils.toArray(".animated-title");
const paragraphs = gsap.utils.toArray(".animated-paragraph");
const buttons = gsap.utils.toArray(".animated-button");

      gsap.fromTo(
        titles,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        buttons,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.3,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();

}, []);

return (
<section
      ref={sectionRef}
      className="bg-white dark:bg-black py-16 md:py-24 px-4 overflow-hidden"
    >
<div className="container mx-auto max-w-7xl">
<div className="grid md:grid-cols-2 gap-8 md:gap-12">
{/_ Expert Builders Card _/}
<div className="space-y-6">
<h2 className="animated-title text-4xl uppercase md:text-6xl font-bold text-black dark:text-white">
Expert Builders
</h2>
<p className="animated-paragraph text-[#868584] font-body dark:text-white text-lg md:text-xl leading-relaxed">
Upgrading 371 km of the Mutanda to Kaoma Road to international
bituminous standards, completing Zambia&apos;s Western Corridor.
</p>
<div className="animated-button">
<Button
                className="font-body text-lg border-white/20 text-white dark:text-black bg-[#FDDB59] rounded-none hover:bg-[#FDDB59]/90 hover:scale-105 transition-transform duration-300 gap-2"
                asChild
              >
<Link href="/projects">
View Project Details <ArrowRight className="h-4 w-4" />
</Link>
</Button>
</div>
</div>

          {/* Regional Impact Card */}
          <div className="space-y-6">
            <h2 className="animated-title text-4xl uppercase md:text-6xl font-bold text-black dark:text-white">
              Regional Impact
            </h2>
            <p className="animated-paragraph text-[#868584] dark:text-white font-body text-lg md:text-xl leading-relaxed">
              Creating a vital link between Zambia&apos;s Copperbelt, DRC&apos;s
              mining regions, and the Port of Walvis Bay on Africa&apos;s West
              Coast.
            </p>
            <div className="animated-button">
              <Button
                className="bg-[#FDDB59] hover:bg-[#FDDB59]/90 font-body text-lg rounded-none border-white/20 text-white dark:text-black hover:scale-105 hover:border-white/40 transition-transform duration-300 gap-2"
                asChild
              >
                <Link href="/regional-impact">
                  Explore Regional Benefits <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

);
};

export default ExpertBuildersSection;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ProjectMilestonesSection = () => {
const milestones = [
{
year: "2018",
description: "Maintenance contract initiated",
},
{
year: "Dec 2024",
description: "Concession agreement signed",
},
{
year: "2025",
description: "Start of construction",
},
{
year: "2028",
description: "Projected completion of the highway",
},
];

return (
<section className="bg-white dark:bg-black py-16 md:py-24 px-4">
<div className="container mx-auto max-w-7xl">
<div className="border border-gray-200 rounded-lg p-8 md:p-16 space-y-12">
<h2 className="text-4xl font-heading md:text-5xl font-bold text-black dark:text-white">
Project Milestones
</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="space-y-3">
                <div className="text-[#fdb913] font-bdy dark:text-[#fdb913] text-3xl md:text-4xl font-bold">
                  {milestone.year}
                </div>
                <p className="font-body text-[#868584] dark:text-white text-base md:text-lg">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>

          <div>
            <Button
              className=" font-heading text-xl rounded-none dark:hover:bg-black hover:text-white transition-all duration-500 border-white/20 text-black dark:text-white bg-transparent gap-2"
              asChild
            >
              <Link href="/timeline">
                See our Project History{" "}
                <ArrowRight className="h-4 w-4 hover:text-white text-black dark:text-white" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

);
};

export default ProjectMilestonesSection;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CommunityFirstSection = () => {
const policyPoints = [
"Informed of rights and options",
"Consulted on alternatives",
"Full replacement cost compensation",
"Supported to improve living standards",
];

return (
<section className="bg-white dark:bg-black py-16 md:py-14 px-4">
<div className="container mx-auto max-w-7xl">
<div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
{/_ Left Side - Community First _/}
<div className="space-y-6">
<h2 className="text-4xl font-heading md:text-6xl font-bold text-black dark:text-white">
Community First
</h2>
<p className="text-[#868584] dark:text-white font-sans text-lg leading-relaxed">
Our comprehensive Resettlement Policy Framework ensures fair
treatment and support for all affected communities.
</p>
<Button
              className="bg-[#FDDB59] font-body rounded-none text-black hover:bg-[#FDDB59]/90 transition-all duration-300 gap-2 font-semibold"
              asChild
            >
<Link href="/resettlement">
Learn About Our Policy{" "}
<ArrowRight className="h-4 w-4 rounded-none" />
</Link>
</Button>
</div>

          {/* Right Side - Policy Points */}
          <div className="bg-black/5 dark:bg-black/5 rounded-lg p-8 md:p-12 space-y-6">
            {policyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#FDDB59] flex items-center justify-center text-black dark:text-white font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-black dark:text-white text-base md:text-lg pt-2">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

);
};

export default CommunityFirstSection;

"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

const VideoHeroSection: React.FC = () => {
const [isPlaying, setIsPlaying] = useState(false);
const [scale, setScale] = useState(0.8);
const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
const handleScroll = () => {
if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the section is visible
      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const totalHeight = rect.height;
      const visibilityRatio = Math.max(
        0,
        Math.min(1, visibleHeight / totalHeight)
      );

      // Scale from 0.8 to 1 as the section comes into view
      const newScale = 0.8 + visibilityRatio * 0.2;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);

}, []);

return (
<section
      ref={sectionRef}
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
<div
className="absolute inset-0 transition-transform duration-700 ease-out"
style={{ transform: `scale(${scale})` }} >
{/_ Background Image (blurred) _/}
<div className="absolute inset-0">
<Image
src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760565943/ScreenShot_Tool_-20251016000257_encjfo.png"
alt="Barotse Highway background"
fill
priority
sizes="100vw"
className={`object-cover transition-opacity duration-700 ${isPlaying ? "opacity-0" : "opacity-100"}`}
/>
</div>

        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Video Player */}
        {isPlaying && (
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dpeg7wc34/video/upload/v1760020925/BHL_Concession_Signing_01.12.2024_barvdy.mp4"
              autoPlay
              loop
              playsInline
            />
            {/* Close button */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-6 right-6 z-20 bg-black/60 hover:bg-black/80 p-3 rounded-full text-white transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Play Button - kept outside scaling wrapper to maintain center position */}
      {!isPlaying && (
        <button
          onClick={() => setIsPlaying(true)}
          className="relative z-10 flex flex-col items-center gap-3 text-white group transition-all"
        >
          <span className="text-sm uppercase tracking-wide font-medium font-body">
            Play Video
          </span>
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-[#FDB913]/80 transition-all">
            <Play className="h-6 w-6 text-[#FDB913] group-hover:text-black transition-colors" />
          </div>
        </button>
      )}
    </section>

);
};

export default VideoHeroSection;

"use client";
import HighlightsSection from "./HighlightsSection";
// import Route from "./FastestRoute";

const CombinedCarouselBigTextSection = () => {
return (
<section className="relative w-full overflow-hidden">
{/_ Content Container _/}
<div className="relative z-10">
{/_ KeyStats Section _/}
<div className="w-full">
<HighlightsSection />
</div>
</div>
</section>
);
};

export default CombinedCarouselBigTextSection;

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function PartnersCarousel() {
const partners = [
{
id: 1,
name: "FIRST QUANTUM MINERALS",
logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430581/First_Quantum_Minerals_New_Logo.svg_ivz3bj.png",
},
{
id: 2,
name: "BEEFCO",
logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1762357921/Beefco_iarvhw.jpg",
},

    {
      id: 3,
      name: "HOTSHEET PROJECT MANAGERS",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1762393622/Hotsheet_logo_hz645n.jpg",
    },
    {
      id: 4,
      name: "PANGAEA SECURITIES",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430587/Pangaea-Securities__qbmjbo.png",
    },
    {
      id: 5,
      name: "HERBERT SMITH FREEHILLS KRAMER",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430583/Herbert_Smith_Freehills_logo.svg_wit9u9.png",
    },
    {
      id: 6,
      name: "MAY AND CO",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430582/MAY-and-Co-teal-logo-1_lcmvcw.jpg",
    },
    {
      id: 7,
      name: "NYELETI",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1762950469/Nyeleti_Logo_wpojak.jpg",
    },
    {
      id: 8,
      name: "KONGIWE",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430583/Kongiwe-Logo-for-Header_ciq6du.png",
    },
    {
      id: 9,
      name: "DH Engineering Consultants",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759430581/dhki-e1677569611745_d61ec9.jpg",
    },
    {
      id: 10,
      name: "Brian Colquhoun, Hugh O'Donnell & Partners (BCHOD)",
      logo: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1762425986/BCHOD_col4d9.jpg",
    },

];

const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
const observer = new IntersectionObserver(
([entry]) => {
if (entry.isIntersecting) {
setIsVisible(true);
}
},
{ threshold: 0.1 }
);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };

}, []);

return (
<section
      ref={sectionRef}
      className="w-full bg-white dark:bg-black py-20 md:py-28"
    >
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="text-center mb-16">
<h2 className="text-sm font-semibold text-[#868584] dark:text-white tracking-wider uppercase mb-3">
Trusted By
</h2>
<h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
Our Partners
</h3>
<p className="text-lg text-[#868584] dark:text-white max-w-2xl mx-auto">
Collaborating with industry leaders to deliver exceptional
infrastructure solutions
</p>
</div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="group relative"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <div className="relative h-32 flex items-center justify-center p-6 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1">
                <div className="relative w-full h-full md:grayscale md:group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-xs font-medium text-gray-600 whitespace-nowrap bg-white px-3 py-1 rounded-full shadow-sm">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/partners"
            className="inline-flex items-center gap-2 px-12 py-3 rounded-none bg-[#FDDB59] text-black dark:text-black font-semibold hover:bg-[#fdb913] dark:hover:bg-[#fdb913] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Read More
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>

);
}

export default PartnersCarousel;

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Calendar, ExternalLink, ChevronRight } from "lucide-react";

export default function PressReleaseSection() {
return (
<section className="relative py-20 md:py-32 bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black overflow-hidden">
{/_ Background Pattern _/}
<div className="absolute inset-0 opacity-10 dark:opacity-10">
<div
className="absolute inset-0"
style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fdb913' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
/>
</div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#fdb913]/20 border border-[#fdb913] px-4 py-2 rounded-full">
            <FileText className="w-4 h-4 text-[#fdb913]" />
            <span className="text-[#fdb913] font-semibold text-sm uppercase tracking-wider">
              Press Release
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-[#fdb913] text-sm font-semibold mb-4 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              31st October 2025
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              President Hakainde Launches Landmark Western Corridor
              Transformation Project
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Multi-faceted project set to unlock economic potential and create
              job opportunities in Zambia through Public-Private-Partnership
            </p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-lg dark:shadow-none">
              <div className="text-4xl font-bold text-[#fdb913] mb-2">
                371km
              </div>
              <div className="text-gray-900 dark:text-white font-semibold mb-2">
                Road Infrastructure
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Mutanda-Kasempa-Kaoma Road upgrade to bituminous standard
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-lg dark:shadow-none">
              <div className="text-4xl font-bold text-[#fdb913] mb-2">PPP</div>
              <div className="text-gray-900 dark:text-white font-semibold mb-2">
                Partnership Model
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Public-Private Partnership with BeefCo & FQM Limited
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-lg dark:shadow-none">
              <div className="text-4xl font-bold text-[#fdb913] mb-2">20%</div>
              <div className="text-gray-900 dark:text-white font-semibold mb-2">
                Local Participation
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Reserved for Zambian contractors and suppliers
              </div>
            </div>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-linear-to-r from-[#fdb913]/10 to-transparent border-l-4 border-[#fdb913] p-8 rounded-r-xl mb-12 shadow-md dark:shadow-none"
          >
            <blockquote className="text-gray-900 dark:text-white text-lg md:text-xl italic mb-4">
              &ldquo;This road means business, business to move goods from
              Zambia to the world through the port of Walvis Bay, and from the
              world, through Walvis Bay, back to Zambia.&rdquo;
            </blockquote>
            <cite className="text-[#fdb913] font-semibold not-italic">
              — His Excellency, President Hakainde Hichilema
            </cite>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/news/president-hakainde-launches-landmark-western-corridor-transformation-project"
              className="group inline-flex items-center gap-2 bg-[#fdb913] hover:bg-[#fdb913]/90 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#fdb913]/50 hover:scale-105"
            >
              Read Full Press Release
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/news"
              className="group inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-gray-300 dark:border-white/20"
            >
              View All News
              <ExternalLink className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Contact Info */}
          {/* <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 text-center"
                    >
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">For Media Inquiries:</p>
                        <p className="text-gray-900 dark:text-white font-semibold">Kasole Sakavuyi - Media Liaison</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            <a href="mailto:socialmedia@manic.co.zm" className="hover:text-[#fdb913] transition-colors">
                                socialmedia@manic.co.zm
                            </a>
                            {" · "}
                            <a href="tel:+260974607451" className="hover:text-[#fdb913] transition-colors">
                                +260 974 607 451
                            </a>
                        </p>
                    </motion.div> */}
        </div>
      </div>
    </section>

);
}

## Main Page File (if exists)

[PASTE YOUR PAGE.TSX FILE HERE]
import CombinedCarouselBigTextSection from "@/components/CombinedCarouselBigTextSection";
import { Footer } from "@/components/FooterUpdated";
import HeroCarousel from "@/components/HeroSection3RightLeft";
import KeyStats from "@/components/KeyStatsUpdated";
import OurPartners from "@/components/OurPartners";
import ScrollTriggeredSection from "@/components/ScrollTriggeredSection";
import ExpertBuildersSection from "@/components/ExpertBuildersSection";
import ProjectMilestonesSection from "@/components/ProjectMilestones";
import CommunityFirstSection from "@/components/CommunityFirst";
import VideoHeroSection from "@/components/BigVideoComponent";
// import { BuildingExcellence } from "@/components/BuildingExcellence";
import SectionWrapper from "@/components/SectionWrapper";
import NewsUpdatesSection from "@/components/home/NewsUpdates";
import PressReleaseSection from "@/components/home/PressReleaseSection";

export default function HomePage() {
return (
<main className="min-h-screen bg-black">
<div className="w-full mx-auto">
<SectionWrapper fullWidth>
<HeroCarousel />
</SectionWrapper>

        <SectionWrapper>
          <KeyStats />
        </SectionWrapper>

        <SectionWrapper>
          <ScrollTriggeredSection />
        </SectionWrapper>

        <SectionWrapper>
          <ExpertBuildersSection />
        </SectionWrapper>

        <SectionWrapper>
          <ProjectMilestonesSection />
        </SectionWrapper>

        <SectionWrapper>
          <CommunityFirstSection />
        </SectionWrapper>

        <SectionWrapper>
          <VideoHeroSection />
        </SectionWrapper>

        <SectionWrapper>
          <CombinedCarouselBigTextSection />
        </SectionWrapper>

        <SectionWrapper>
          <OurPartners />
        </SectionWrapper>

        <SectionWrapper>
          <PressReleaseSection />
        </SectionWrapper>

        {/* <SectionWrapper>
          <NewsUpdatesSection />
        </SectionWrapper> */}

        <Footer />
      </div>
    </main>

);
}

## Reference Design (optional)

[PASTE URL OR DESCRIBE THE DESIGN]
https://www.westerncorridorlimited.com/

## Requirements

1. Create a TypeScript interface for the WordPress data structure based on the GraphQL query
2. Add a data fetching function that calls the WordPress API with the query
3. Add any necessary helper/parsing functions for repeatable fields or HTML content
4. Update each component to:
   - Accept typed props matching the WordPress data
   - Include sensible fallback values
   - Parse WordPress data formats (HTML in fields, pipe-separated values, etc.)
5. Update the page.tsx to:
   - Fetch data using the new function
   - Extract and transform data as needed
   - Pass correct props to each component

## Data Parsing Patterns to Follow

- Use `stripHtml()` for fields containing HTML tags that should be plain text
- Use `parseHtmlRepeatableField()` for `<p>` tag wrapped repeatable content
- Use `.split(',')` or `.split('|')` for delimiter-separated values
- Always provide fallback arrays/strings for optional fields

## Output Format

Provide complete updated files with clear comments indicating changes. Use TypeScript throughout.
