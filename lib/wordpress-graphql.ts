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
  // Repeatable commitment items (comma-separated or newline-separated)
  itemTitles: string;
  itemDescriptions: string;
  mainTitle: string;
  // Repeatable key principles (comma-separated or newline-separated)
  keyPrincipleTitles: string;
  keyPrincipleDescriptions: string;
  impactQuote: string;
  impactAuthor: string;
  accountabilityMainTitle: string;
  accountabilitysubtitle: string;
  // Repeatable accountability items (comma-separated or newline-separated)
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

// ============================================
// GraphQL Queries
// ============================================

const GET_ALL_NEWS = `
  query GetAllNews {
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
  }
`;

const GET_ALL_GALLERY = `
  query GetAllGallery {
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
  }
`;

const GET_ALL_VIDEOS = `
  query GetAllVideos {
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
  }
`;

const GET_COMMITMENT = `
  query GetCommitmentQuery {
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
  }
`;

const GET_RESETTLEMENT = `
  query GetResettlementQuery {
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
  }
`;

const GET_SINGLE_NEWS = `
  query GetSingleNews($slug: ID!) {
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
  }
`;

// ============================================
// API Functions
// ============================================

/**
 * Fetch all news articles via GraphQL
 */
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

/**
 * Fetch news by category via GraphQL
 */
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

/**
 * Fetch all gallery items via GraphQL
 */
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

/**
 * Fetch gallery by category via GraphQL
 */
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

/**
 * Fetch all video items via GraphQL
 */
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

/**
 * Fetch commitment page data via GraphQL
 */
export async function getCommitmentData(): Promise<CommitmentData | null> {
  try {
    const data = await client.request<{
      commitments: { nodes: CommitmentData[] };
    }>(GET_COMMITMENT);
    // Return the first commitment (assuming single page content)
    return data.commitments?.nodes?.[0] || null;
  } catch (error) {
    console.error("❌ GraphQL Error fetching commitment:", error);
    return null;
  }
}

/**
 * Fetch resettlement page data via GraphQL
 */
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

/**
 * Fetch single news article by slug via GraphQL
 */
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

/**
 * Get related news articles by category
 */
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

/**
 * Get image URL from GraphQL response
 */
export function getImageUrl(
  item: NewsArticle | GalleryItem | VideoItem | ResettlementData
): string {
  // Check for featuredImage (NewsArticle, GalleryItem, VideoItem)
  if ("featuredImage" in item && item.featuredImage?.node?.sourceUrl) {
    return item.featuredImage.node.sourceUrl;
  }
  // Check for rightcolumnimage (ResettlementData)
  if ("rightcolumnimage" in item && item.rightcolumnimage?.node?.sourceUrl) {
    return item.rightcolumnimage.node.sourceUrl;
  }
  return "/placeholder.svg";
}

/**
 * Strip HTML tags from content
 */
export function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Parse repeatable fields (pipe-separated, newline-separated, or comma-separated)
 * This handles WordPress ACF repeater fields stored as delimited strings
 */
export function parseRepeatableField(
  field: string | null | undefined
): string[] {
  if (!field) return [];

  // Try pipe separator first (most common for ACF)
  if (field.includes("|")) {
    return field
      .split("|")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  // Then try newline separator
  if (field.includes("\n")) {
    return field
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  // Finally try comma separator (but be careful with content that has commas)
  // Only use comma if the field looks like a list
  if (field.includes(",") && !field.includes(".")) {
    return field
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  // Return as single item array if no separator found
  return [field.trim()];
}
