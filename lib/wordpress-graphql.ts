import { GraphQLClient } from "graphql-request";

// GraphQL endpoint from your GoDaddy WordPress
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

const GET_NEWS_BY_CATEGORY = `
  query GetNewsByCategory($category: String!) {
    newsArticles(
      first: 100
      where: { 
        orderby: { field: DATE, order: DESC }
      }
    ) {
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

// ============================================
// API Functions
// ============================================

/**
 * Fetch all news articles via GraphQL
 */
export async function getAllNews(): Promise<NewsArticle[]> {
  try {
    const data: any = await client.request(GET_ALL_NEWS);
    return data.newsArticles.nodes || [];
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

      // Handle both string and array formats
      if (Array.isArray(articleCategory)) {
        // If it's an array, check if the category is in the array
        return articleCategory.some(
          (cat) =>
            typeof cat === "string" &&
            cat.toLowerCase() === category.toLowerCase()
        );
      } else if (typeof articleCategory === "string") {
        // If it's a string, do direct comparison
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
    const data: any = await client.request(GET_ALL_GALLERY);
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

      // Handle both string and array formats
      if (Array.isArray(itemCategory)) {
        // If it's an array, check if the category is in the array
        return itemCategory.some(
          (cat) =>
            typeof cat === "string" &&
            cat.toLowerCase() === category.toLowerCase()
        );
      } else if (typeof itemCategory === "string") {
        // If it's a string, do direct comparison
        return itemCategory.toLowerCase() === category.toLowerCase();
      }

      return false;
    });
  } catch (error) {
    console.error("❌ GraphQL Error filtering gallery:", error);
    return [];
  }
}

// Add this interface after GalleryItem interface (around line 62)
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

// Add this GraphQL query after GET_ALL_GALLERY (around line 160)
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

// Add this function after getGalleryByCategory (around line 234)
/**
 * Fetch all video items via GraphQL
 */
export async function getAllVideos(): Promise<VideoItem[]> {
  try {
    const data: any = await client.request(GET_ALL_VIDEOS);
    return data.videoItems.nodes || [];
  } catch (error) {
    console.error("❌ GraphQL Error fetching videos:", error);
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
  item: NewsArticle | GalleryItem | VideoItem
): string {
  return item.featuredImage?.node?.sourceUrl || "/placeholder.svg";
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

// Add this GraphQL query
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

// Add this function
/**
 * Fetch single news article by slug via GraphQL
 */
export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  try {
    const data: any = await client.request(GET_SINGLE_NEWS, { slug });
    return data.newsArticle || null;
  } catch (error) {
    console.error("❌ GraphQL Error fetching single news:", error);
    return null;
  }
}

// Add this function for related articles
/**
 * Get related news articles by category
 */
export async function getRelatedNews(
  currentSlug: string,
  category: string,
  limit: number = 3
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
