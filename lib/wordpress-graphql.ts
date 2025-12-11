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

const GET_REGIONAL_IMPACT = `
  query GetRegionalQuery {
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
 * Fetch regional impact page data via GraphQL
 */
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
 */
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

/**
 * Parse HTML-wrapped repeatable fields from WordPress
 * Handles fields like: "<p>Item1</p>\n <p>Item2</p>\n <p>Item3</p>"
 */
export function parseHtmlRepeatableField(
  field: string | null | undefined
): string[] {
  if (!field) return [];

  // Split by </p> and extract content from <p> tags
  const matches = field.match(/<p>([^<]*)<\/p>/g);
  if (matches && matches.length > 0) {
    return matches.map((match) => stripHtml(match).trim()).filter(Boolean);
  }

  // Fallback to regular parsing if no <p> tags
  return parseRepeatableField(stripHtml(field));
}

/**
 * Parse regional impact cards from WordPress fields
 */
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

/**
 * Parse strategic positioning sections from WordPress
 * Handles HTML content with multiple <p> tags
 */
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

/**
 * Parse trade list items from WordPress (comma-separated)
 */
export function parseTradeListItems(tradelistitem: string): string[] {
  if (!tradelistitem) return [];

  // Handle comma-separated list with "and"
  return tradelistitem
    .replace(/, and /g, ", ")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}
