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

export interface HomePageData {
  title: string;
  heroTitle: string;
  heroDescription: string;
  heroBackgroundImage: {
    node: {
      id: string;
      sourceUrl?: string;
    };
  } | null;
  heroBackgroundVideo: {
    node: {
      id: string;
      sourceUrl?: string;
    };
  } | null;
  scrollingText: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
  keystatsmaintitle: string;
  keystatsValue: string;
  unit: string;
  keystatsLabel: string;
  keystatsDescription: string;
  icon: string;
  sectionTitle: string;
  description: string;
  sectionImage: {
    node: {
      id: string;
      sourceUrl?: string;
    };
  } | null;
  expertbuildersSectionTitle: string;
  expertbuildersDescription: string;
  expertbuildersButton1Text: string;
  expertBuildersButton1Link: string;
  expertBuildersButton2Link: string;
  expertbuildersButton2Text: string;
  year: string;
  projectMilestonesDescription: string;
  projectMilestonesButtonText: string;
  projectMilestonesButtonLink: string;
  communityfirstSectionTitle: string;
  sectionParagraph: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  pointNumber: string;
  pointDescription: string;
  video: {
    node: {
      id: string;
      sourceUrl?: string;
    };
  } | null;
  leftimage: {
    node: {
      id: string;
      sourceUrl?: string;
    };
  } | null;
  rightimage: {
    node: {
      id: string;
      sourceUrl?: string;
    };
  } | null;
  twocolumnSectionTitle: string;
  twocolumnSectionDescriptionOne: string;
  twocolumnSectionDescriptionTwo: string;
  ctaButtonTextExploretheproject: string;
  ctaButtonLinkExploretheproject: string;
  ctaButtonTextLearnabouttheppp: string;
  ctaButtonLinkLearnabouttheppp: string;
  partnersTitle: string;
  partnersSubtitle: string;
  partnersDescription: string;
  logogridPartnersName: string;
  logo1: { node: { id: string; sourceUrl?: string } } | null;
  logo2: { node: { id: string; sourceUrl?: string } } | null;
  logo3: { node: { id: string; sourceUrl?: string } } | null;
  logo4: { node: { id: string; sourceUrl?: string } } | null;
  logo5: { node: { id: string; sourceUrl?: string } } | null;
  logo6: { node: { id: string; sourceUrl?: string } } | null;
  logo7: { node: { id: string; sourceUrl?: string } } | null;
  logo8: { node: { id: string; sourceUrl?: string } } | null;
  logo9: { node: { id: string; sourceUrl?: string } } | null;
  logo10: { node: { id: string; sourceUrl?: string } } | null;
  ctaButtonTextReadmore: string;
  ctaButtonLinkReadmore: string;
}

// GraphQL Response Types
interface NewsArticlesResponse {
  newsArticles: {
    nodes: NewsArticle[];
  };
}

interface SingleNewsResponse {
  newsArticle: NewsArticle | null;
}

interface GalleryItemsResponse {
  galleryItems: {
    nodes: GalleryItem[];
  };
}

interface VideoItemsResponse {
  videoItems: {
    nodes: VideoItem[];
  };
}

interface HomePageResponse {
  homePage: {
    nodes: HomePageData[];
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

const GET_HOME_PAGE = `
  query GetHomePageQuery {
    homePage {
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
        heroBackgroundVideo {
          node {
            id
            sourceUrl
          }
        }
        scrollingText
        button1Text
        button1Link
        button2Text
        button2Link
        keystatsmaintitle
        keystatsValue
        unit
        keystatsLabel
        keystatsDescription
        icon
        sectionTitle
        description
        sectionImage {
          node {
            id
            sourceUrl
          }
        }
        expertbuildersSectionTitle
        expertbuildersDescription
        expertbuildersButton1Text
        expertBuildersButton1Link
        expertBuildersButton2Link
        expertbuildersButton2Text
        year
        projectMilestonesDescription
        projectMilestonesButtonText
        projectMilestonesButtonLink
        communityfirstSectionTitle
        sectionParagraph
        ctaButtonText
        ctaButtonLink
        pointNumber
        pointDescription
        video {
          node {
            id
            sourceUrl
          }
        }
        leftimage {
          node {
            id
            sourceUrl
          }
        }
        rightimage {
          node {
            id
            sourceUrl
          }
        }
        twocolumnSectionTitle
        twocolumnSectionDescriptionOne
        twocolumnSectionDescriptionTwo
        ctaButtonTextExploretheproject
        ctaButtonLinkExploretheproject
        ctaButtonTextLearnabouttheppp
        ctaButtonLinkLearnabouttheppp
        partnersTitle
        partnersSubtitle
        partnersDescription
        logogridPartnersName
        logo1 { node { id sourceUrl } }
        logo2 { node { id sourceUrl } }
        logo3 { node { id sourceUrl } }
        logo4 { node { id sourceUrl } }
        logo5 { node { id sourceUrl } }
        logo6 { node { id sourceUrl } }
        logo7 { node { id sourceUrl } }
        logo8 { node { id sourceUrl } }
        logo9 { node { id sourceUrl } }
        logo10 { node { id sourceUrl } }
        ctaButtonTextReadmore
        ctaButtonLinkReadmore
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
    const data = await client.request<NewsArticlesResponse>(GET_ALL_NEWS);
    return data.newsArticles.nodes || [];
  } catch (error) {
    console.error("❌ GraphQL Error fetching news:", error);
    return [];
  }
}

/**
 * Fetch single news article by slug via GraphQL
 */
export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  try {
    const data = await client.request<SingleNewsResponse>(GET_SINGLE_NEWS, {
      slug,
    });
    return data.newsArticle || null;
  } catch (error) {
    console.error("❌ GraphQL Error fetching single news:", error);
    return null;
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

/**
 * Fetch all gallery items via GraphQL
 */
export async function getAllGallery(): Promise<GalleryItem[]> {
  try {
    const data = await client.request<GalleryItemsResponse>(GET_ALL_GALLERY);
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
    const data = await client.request<VideoItemsResponse>(GET_ALL_VIDEOS);
    return data.videoItems.nodes || [];
  } catch (error) {
    console.error("❌ GraphQL Error fetching videos:", error);
    return [];
  }
}

/**
 * Fetch home page data via GraphQL
 */
export async function getHomePageData(): Promise<HomePageData | null> {
  try {
    const data = await client.request<HomePageResponse>(GET_HOME_PAGE);
    return data.homePage?.nodes?.[0] || null;
  } catch (error) {
    console.error("GraphQL Error fetching home page:", error);
    return null;
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
 * Strip HTML tags from content and decode HTML entities
 */
export function stripHtml(html: string | null | undefined): string {
  if (!html) return "";

  let text = html.replace(/<[^>]*>/g, "").trim();

  const entities: { [key: string]: string } = {
    "&quot;": '"',
    "&apos;": "'",
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&nbsp;": " ",
    "&#8217;": "'",
    "&#8216;": "'",
    "&#8220;": '"',
    "&#8221;": '"',
    "&#8211;": "–",
    "&#8212;": "—",
  };

  text = text.replace(/&[#\w]+;/g, (entity) => entities[entity] || entity);
  text = text.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));

  return text.trim();
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
 * Parse HTML repeatable field into array
 */
export function parseHtmlRepeatableField(
  field: string | null | undefined
): string[] {
  if (!field) return [];

  const cleanText = stripHtml(field);

  if (cleanText.includes(",")) {
    const textWithoutAnd = cleanText
      .replace(/, and /g, ", ")
      .replace(/ and /g, ", ")
      .replace(/ and$/, "")
      .replace(/\.$/, "");

    return textWithoutAnd
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  }

  const matches = field.match(/<p>([^<]*)<\/p>/g);
  if (matches && matches.length > 0) {
    return matches.map((match) => stripHtml(match).trim()).filter(Boolean);
  }

  return cleanText
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

/**
 * Parse key stats from home page data
 */
export function parseKeyStats(data: HomePageData): Array<{
  value: string;
  unit: string;
  label: string;
  description: string;
  icon: string;
}> {
  const values = parseHtmlRepeatableField(data.keystatsValue);
  const units = parseHtmlRepeatableField(data.unit);
  const labels = parseHtmlRepeatableField(data.keystatsLabel);
  const descriptions = parseHtmlRepeatableField(data.keystatsDescription);
  const icons = parseHtmlRepeatableField(data.icon);

  const maxLength = Math.max(
    values.length,
    units.length,
    labels.length,
    descriptions.length,
    icons.length
  );
  const stats = [];

  for (let i = 0; i < maxLength; i++) {
    stats.push({
      value: values[i] || "",
      unit: units[i] || "",
      label: labels[i] || "",
      description: descriptions[i] || "",
      icon: icons[i] || "TrendingUp",
    });
  }

  return stats;
}

/**
 * Parse community points from home page data
 */
export function parseCommunityPoints(data: HomePageData): Array<{
  number: string;
  description: string;
}> {
  const numbers = parseHtmlRepeatableField(data.pointNumber);
  const descriptions = parseHtmlRepeatableField(data.pointDescription);

  const maxLength = Math.max(numbers.length, descriptions.length);
  const points = [];

  for (let i = 0; i < maxLength; i++) {
    points.push({
      number: numbers[i] || "",
      description: descriptions[i] || "",
    });
  }

  return points;
}

/**
 * Parse partner logos from home page data
 */
export function parsePartnerLogos(data: HomePageData): Array<{
  id: string;
  name: string;
  url: string;
}> {
  const logos: Array<{ id: string; name: string; url: string }> = [];
  const names = parseHtmlRepeatableField(data.logogridPartnersName);

  for (let i = 1; i <= 10; i++) {
    const logoKey = `logo${i}` as keyof HomePageData;
    const logo = data[logoKey];
    if (
      logo &&
      typeof logo === "object" &&
      "node" in logo &&
      logo.node?.sourceUrl
    ) {
      logos.push({
        id: logo.node.id,
        name: names[i - 1] || `Partner ${i}`,
        url: logo.node.sourceUrl,
      });
    }
  }

  return logos;
}

/**
 * Parse project milestones from home page data
 */
export function parseProjectMilestones(data: HomePageData): Array<{
  year: string;
  description: string;
}> {
  const years = parseHtmlRepeatableField(data.year);
  const descriptions = parseHtmlRepeatableField(
    data.projectMilestonesDescription
  );

  const maxLength = Math.max(years.length, descriptions.length);
  const milestones = [];

  for (let i = 0; i < maxLength; i++) {
    milestones.push({
      year: years[i] || "",
      description: descriptions[i] || "",
    });
  }

  return milestones;
}

/**
 * Parse highlights from home page data
 */
export function parseHighlights(data: HomePageData): Array<{
  title: string;
  text: string;
  img: string;
  link: string;
  btnText: string;
}> {
  const highlights = [];

  // Split the titles by " and " - WordPress stores them as: "TITLE1 and TITLE2"
  const titles = data.twocolumnSectionTitle
    ? data.twocolumnSectionTitle.split(" and ").map((t) => stripHtml(t.trim()))
    : [];

  // First highlight - Left column (uses descriptionOne)
  highlights.push({
    title:
      titles[0] || "CONNECTING COMMUNITIES THROUGH LEADERSHIP AND COMMITMENT",
    text: stripHtml(data.twocolumnSectionDescriptionOne) || "",
    img:
      data.leftimage?.node?.sourceUrl ||
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761481328/EI3A9529DRM_exisuy.jpg",
    link: data.ctaButtonLinkExploretheproject || "/about",
    btnText:
      stripHtml(data.ctaButtonTextExploretheproject) || "Explore the Project",
  });

  // Second highlight - Right column (uses descriptionTwo)
  highlights.push({
    title:
      titles[1] || "CONNECTING ZAMBIA THROUGH GOVERNMENT-LED INFRASTRUCTURE",
    text: stripHtml(data.twocolumnSectionDescriptionTwo) || "",
    img:
      data.rightimage?.node?.sourceUrl ||
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761481327/EI3A9515DRM_yzoiit.jpg",
    link: data.ctaButtonLinkLearnabouttheppp || "/projects",
    btnText:
      stripHtml(data.ctaButtonTextLearnabouttheppp) || "Learn About the PPP",
  });

  return highlights;
}
