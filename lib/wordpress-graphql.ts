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
  fetch: (url, params) =>
    fetch(url, { ...params, next: { revalidate: 0 } } as RequestInit),
});

async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  try {
    return await client.request(query, variables);
  } catch (error) {
    console.error("❌ GraphQL Error:", error);
    return null;
  }
}

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
      sourceUrl?: string; // Made optional to match query usage flexibility
    };
  } | null;
  sectionImageTwo: {
    node: {
      id: string;
      sourceUrl?: string;
    };
  } | null;
  sectionImageThree: {
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

export interface PartnerItem {
  id: string;
  title: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  partnerFields: {
    role: string;
    category: string;
    description: string;
    expertise: string; // Store as multiline string or CSV
    responsibilities: string; // Store as multiline string or CSV
    websiteUrl?: string;
  };
}

export interface TimelineItem {
  id: string;
  title: string;
  date: string; // Use standard WP Date
  timelineFields: {
    description: string;
    year: string;
    phase?: string; // e.g. "Phase 1"
    status?: string; // "Completed", "In Progress"
  };
}


export interface ProjectPageData {
  id: string;
  title: string;
  projectPageFields: {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: { node: { sourceUrl: string } };
    statsTitle: string;
    statsList: string; // JSON string or specific format
    descriptionTitle: string;
    descriptionContent: string;
  };
}

export interface ContactPageNode {
  id: string;
  slug: string;
  heroTitle: string;
  heroDescription: string;
  heroBackgroundImage: {
    node: {
      id: string;
      sourceUrl: string;
    };
  };
  email: string;
  emailUrl: string;
  emailIcon: string;
  address: string;
  addressIcon: string;
  timeIcon: string;
  businessHours: string;
  days: string;
  phone?: string; // Added as requested
}

export interface ContactPageResponse {
  contactPage: {
    nodes: ContactPageNode[];
  };
}

export interface PartnersPageData {
  id: string;
  title: string;
  partnersPageFields: {
    heroTitle: string;
    heroSubtitle: string;
    herodescription: string; // Fixed case to match WordPress
    heroImage: { node: { sourceUrl: string; altText?: string } };
  };
}

// ... (skipping unchanged lines)



// Response Interfaces
interface PartnersResponse {
  partners: {
    nodes: PartnerItem[];
  };
}

interface TimelineResponse {
  timelineEvents: {
    nodes: TimelineItem[];
  };
}







interface PageDataResponse<T> {
  pageBy: T;
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
        sectionImageTwo {
          node {
            id
            sourceUrl
          }
        }
        sectionImageThree {
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

const GET_ALL_PARTNERS = `
  query GetAllPartners {
  partners(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
      id
      title
        featuredImage {
          node {
          sourceUrl
          altText
        }
      }
        partnerFields {
        role
        category
        description
        expertise
        responsibilities
        websiteUrl
      }
    }
  }
}
`;

const GET_TIMELINE_EVENTS = `
  query GetTimelineEvents {
  timelineEvents(first: 100, where: { orderby: { field: DATE, order: ASC } }) {
      nodes {
      id
      title
      date
        timelineFields {
        description
        year
        phase
        status
      }
    }
  }
}
`;


const GET_PROJECTS_PAGE = `
  query GetProjectsPage {
  pageBy(uri: "/projects") {
    id
    title
      projectPageFields {
      heroTitle
      heroSubtitle
        heroImage {
          node {
          sourceUrl
        }
      }
      statsTitle
      statsList
      descriptionTitle
      descriptionContent
    }
  }
}
`;

const GET_CONTACT_PAGE = `
  query GetContactPageQuery {
    contactPage {
      nodes {
        id
        slug
        heroTitle
        heroDescription
        heroBackgroundImage {
          node {
            id
            sourceUrl
          }
        }
        email
        emailUrl
        emailIcon
        address
        addressIcon
        timeIcon
        businessHours
        days
        phone
      }
    }
  }
`;

const GET_PARTNERS_PAGE = `
  query GetPartnersPage {
  pageBy(pageId: 764) {
    id
    title
      partnersPageFields {
      heroTitle
      heroSubtitle
      herodescription
        heroImage {
          node {
          sourceUrl
          altText
        }
      }
    }
  }
}
`;

export const GET_ABOUT_PAGE_QUERY = `
  query GetAboutPageQuery {
    aboutPage {
      nodes {
      id
      slug
      heroTitle
      heroDescription
        heroBackgroundImage {
          node {
          id
          sourceUrl
        }
      }
      sectionTitle
      sectionParagraph
        leftImage {
          node {
          id
          sourceUrl
        }
      }
      distance
      year
      length
      completion
      sectionMainTitle
      scopeOfWorkTitle
      scopeOfWorkDescription
      briefHistoryOfTheProjectTitle
      briefHistoryOfTheProjectDescription
      ourMissionVisionSectionTitle
      guidedByClearPrinciplesAndAmbitiousGoalsDescription
      visionStatementCardTitle
      visionStatementCardDescription
      missionStatementTitle
      missionStatementDescription
      purposeTitle
      purposeDescription
      ourCommitmentSectionTitle
      ourCommitmentDescription
      ourCoreValuesTitle
      ourCoreValuesDescription
      iconName
      ourCoreValuesCardTitle
      leadershipTeamTitle
      leadershipTeamParagraph
      button1Text
      button2Text
      fullnames
      bioone
      biotwo
      expandBioButton
        ceoLeftImage {
          node {
          id
          sourceUrl
        }
      }
        directorRightImage {
          node {
          id
          sourceUrl
        }
      }
      byTheNumbersTitle
      byTheNumbersCardTitle
      byTheNumbersDescription
    }
  }
}
`;

export const GET_RESETTLEMENT_PAGE_QUERY = `
  query GetResettleMentPageQuery {
    resettlements {
      nodes {
      id
      slug
      heroTitle
      heroDescription
        heroBackgroundImage {
          node {
          id
          sourceUrl
        }
      }
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

export const GET_REGIONAL_IMPACT_PAGE_QUERY = `
  query GetRegionalImpactPageQuery {
    regionalImpactPage {
      nodes {
      id
      slug
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
          sourceUrl
        }
      }
      tradetitle
      tradelistitem
    }
  }
}
`;

export const GET_TIMELINE_PAGE_QUERY = `
  query GetTimelinePageQuery {
    timelinePage {
      nodes {
      id
      slug
      projectKeyTimelinesAndMilestonesTitle
      heroDescription
        heroBackgroundImage {
          node {
          id
          sourceUrl
        }
      }
      carddate
      cardtitle
      carddescription
      cardbuttontext
      projectAchievementsCardIcon
      projectAchievementsFigure
      projectAchievementsTitle
      projectAchievementsDescription
      upcomingMilestonesTitle
      upcomingMilestonesCardIcon
      upcomingMilestonesCardTitle
      upcomingMilestonesCardYear
      upcomingMilestonesCardDescription
    }
  }
}
`;

export const GET_COOKIE_POLICY_PAGE_QUERY = `
  query GetCookiePolicyPageQuery {
    cookiePolicyPage {
      nodes {
      id
      slug
      heroTitle
        heroBackgroundImage {
          node {
          id
          sourceUrl
        }
      }
      lastUpdated
      visualContent
    }
  }
}
`;

export const GET_PRIVACY_PAGE_QUERY = `
  query GetPrivacyPageQuery {
    privacys {
      nodes {
      id
      slug
      heroTitle
      lastUpdated
      visualContent
    }
  }
}
`;

export const GET_TERMS_PAGE_QUERY = `
  query GetTermsPageQuery {
    termsPage {
      nodes {
      id
      slug
      heroTitle
      lastUpdated
      visualContent
    }
  }
}
`;

export const GET_GALLERY_PAGE_QUERY = `
  query GetGalleryPageQuery {
    gallerydatas {
      nodes {
        herotitle
        heroDescription
        heroBackgroundImage {
          node {
            id
            sourceUrl
          }
        }
        projectGalleryDetails
      }
    }
  }
`;

const GET_CAREERS_PAGE = `
  query GetCareersPageQuery {
    careerspages {
      nodes {
        id
        slug
        heroTitle
        heroDescription
        heroBackgroundImage {
          node {
            id
            sourceUrl
          }
        }
        commitmentTitle
        commitmentItems
        button1Text
        button1Link
        noCurrentOpeningsTitle
        weAreAlwaysOnTheLookoutForTalentedProfessionalsDescritpion
        checkingBackSoonIcon
        checkingBackSoonText
        checkingBackSoonDescription
        stayUpdatedText
        stayUpdatedDescription
        stayUpdatedButtonText
        stayUpdatedIcon
        stayUpdatedSmallText
        whyJoinUsText
        whyJoinUsListItem
        whyJoinUsIcon
        getInTouchWithOurHrTeamText
        getInTouchWithOurHrTeamLink
        frequentlyAskedQuestionsTitle
        frequentlyAskedQuestionsDescription
        answer
        question
        answerone
        questionone
        answertwo
        questiontwo
        answerthree
        questionthree
        answerfour
        questionfour
        answerfive
        questionfive
      }
    }
  }
`;

const GET_COMMITMENT = `
  query GetCommitmentQuery {
    commitments {
      nodes {
        id
        slug
        heroTitle
        heroDescription
        heroBackgroundImage {
          node {
            id
            sourceUrl
          }
        }
        commitmentStatement
        itemTitles
        itemDescriptions
        iconname
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

const GET_CAREER_FAQS = `
  query GetCareerFaqs {
    careerFaqs(first: 100) {
      nodes {
        id
        title
        question
        answer
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
    const normalizedTarget = category.toLowerCase().trim();

    return allGallery.filter((item) => {
      const itemCategory = item.galleryFields?.category;

      const matches = (cat: any) => {
        if (typeof cat !== "string") return false;
        const normalizedCat = cat.toLowerCase().trim();

        // Exact match (case-insensitive + trimmed)
        if (normalizedCat === normalizedTarget) return true;

        // Handle plural/singular variations (e.g., "Road Sections" vs "Road Section")
        if (normalizedCat + "s" === normalizedTarget) return true;
        if (normalizedTarget + "s" === normalizedCat) return true;

        return false;
      };

      if (Array.isArray(itemCategory)) {
        return itemCategory.some(matches);
      } else if (typeof itemCategory === "string") {
        return matches(itemCategory);
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
// New Fetch Functions
// ============================================

export async function getAllPartners(): Promise<PartnerItem[]> {
  try {
    const data = await client.request<PartnersResponse>(GET_ALL_PARTNERS);
    return data.partners.nodes || [];
  } catch (error) {
    console.error("❌ GraphQL Error fetching partners:", error);
    return [];
  }
}

export async function getTimelineEvents(): Promise<TimelineItem[]> {
  try {
    const data = await client.request<TimelineResponse>(GET_TIMELINE_EVENTS);
    return data.timelineEvents.nodes || [];
  } catch (error) {
    console.error("❌ GraphQL Error fetching timeline:", error);
    return [];
  }
}




export async function getProjectsPageData(): Promise<ProjectPageData | null> {
  try {
    const data = await client.request<PageDataResponse<ProjectPageData>>(GET_PROJECTS_PAGE);
    return data.pageBy || null;
  } catch (error) {
    console.error("❌ GraphQL Error fetching projects page:", error);
    return null;
  }
}



export async function getPartnersPageData(): Promise<PartnersPageData | null> {
  try {
    const data = await client.request<PageDataResponse<PartnersPageData>>(GET_PARTNERS_PAGE);
    return data.pageBy || null;
  } catch (error) {
    console.error("❌ GraphQL Error fetching partners page:", error);
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

  // Check for <li> tags
  const liMatches = field.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
  if (liMatches && liMatches.length > 0) {
    return liMatches.map((match) => stripHtml(match).trim()).filter(Boolean);
  }

  // First, check for <p> tags BEFORE stripping HTML
  const pTagMatches = field.match(/<p>([^<]*)<\/p>/g);
  if (pTagMatches && pTagMatches.length > 0) {
    return pTagMatches.map((match) => stripHtml(match).trim()).filter(Boolean);
  }

  // Now strip HTML for other checks
  const cleanText = stripHtml(field);

  // Check for comma-separated values
  if (cleanText.includes(",")) {
    const textWithoutAnd = cleanText
      .replace(/, and /g, ", ")
      .replace(/ and /g, ", ")
      .replace(/ and$/, "")
      .replace(/\.$/, "");

    return textWithoutAnd
      .split(",")
      // Split by " and " as well if it remained (though regex above handles ", and ")
      // But standard comma split is fine
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  }

  // Check for newline-separated values
  if (cleanText.includes("\n")) {
    return cleanText
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  }

  // Return as single item if no delimiters found
  return cleanText.trim() ? [cleanText.trim()] : [];
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
    const logoKey = `logo${i} ` as keyof HomePageData;
    const logo = data[logoKey];
    if (
      logo &&
      typeof logo === "object" &&
      "node" in logo &&
      logo.node?.sourceUrl
    ) {
      logos.push({
        id: logo.node.id,
        name: names[i - 1] || `Partner ${i} `,
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
    .replace(/ and /g, ", ")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

/**
 * Parse "By the Numbers" achievements from About page data
 */
export function parseAboutByTheNumbers(data: AboutPageData): Array<{
  number: string;
  label: string;
}> {
  const numbers = parseHtmlRepeatableField(data.byTheNumbersCardTitle);
  const labels = parseHtmlRepeatableField(data.byTheNumbersDescription);

  const maxLength = Math.max(numbers.length, labels.length);
  const achievements = [];

  for (let i = 0; i < maxLength; i++) {
    achievements.push({
      number: numbers[i] || "",
      label: labels[i] || "",
    });
  }

  return achievements;
}

/**
 * Parse Leadership Team from About page data
 */
export function parseLeadershipTeam(data: AboutPageData): Array<{
  id: string;
  name: string;
  title: string;
  image: string;
  shortBio: string;
  fullBio: string;
}> {
  const names = parseHtmlRepeatableField(data.fullnames);

  // Try new fields first (bioone/biotwo), fall back to old bio field if not available
  let ceoBio = "";
  let directorBio = "";

  if (data.bioone || data.biotwo) {
    // Use new separate bio fields
    ceoBio = stripHtml(data.bioone || "");
    directorBio = stripHtml(data.biotwo || "");
  } else if ((data as any).bio) {
    // Fallback to old bio field for backward compatibility
    const bios = parseHtmlRepeatableField((data as any).bio);
    ceoBio = bios[0] || "";
    directorBio = bios[1] || "";
  }

  const team = [];

  // CEO
  if (names[0]) {
    team.push({
      id: "ceo",
      name: names[0],
      title: "CEO",
      image: data.ceoLeftImage?.node?.sourceUrl || "/placeholder.svg",
      shortBio: ceoBio.length > 160 ? ceoBio.substring(0, 160) + "..." : ceoBio,
      fullBio: ceoBio,
    });
  }

  // Director
  if (names[1]) {
    team.push({
      id: "director",
      name: names[1],
      title: "Director",
      image: data.directorRightImage?.node?.sourceUrl || "/placeholder.svg",
      shortBio: directorBio.length > 160 ? directorBio.substring(0, 160) + "..." : directorBio,
      fullBio: directorBio,
    });
  }

  return team;
}

/**
 * Parse Missions from About page data
 */
export function parseAboutMissions(data: AboutPageData): Array<{
  title: string;
  description: string;
}> {
  return [
    {
      title: stripHtml(data.visionStatementCardTitle) || "Vision Statement",
      description: stripHtml(data.visionStatementCardDescription) || "",
    },
    {
      title: stripHtml(data.missionStatementTitle) || "Mission Statement",
      description: stripHtml(data.missionStatementDescription) || "",
    },
    {
      title: stripHtml(data.purposeTitle) || "Purpose",
      description: stripHtml(data.purposeDescription) || "",
    },
  ].filter((item) => item.description.length > 0);
}

/**
 * Parse Core Values from About page data
 */
export function parseAboutCoreValues(data: AboutPageData): Array<{
  icon: string;
  title: string;
  description: string;
}> {
  const titles = parseHtmlRepeatableField(data.ourCoreValuesCardTitle);
  const descriptions = parseHtmlRepeatableField(data.ourCoreValuesDescription);
  const icons = parseHtmlRepeatableField(data.iconName);

  const maxLength = Math.max(titles.length, descriptions.length);
  const values = [];

  const defaultIcons = ["🌱", "⚖️", "🔍", "💡", "🌟", "🛡️", "🛣️", "🌍"];

  for (let i = 0; i < maxLength; i++) {
    values.push({
      icon: icons[i]?.trim() || defaultIcons[i % defaultIcons.length],
      title: titles[i] || "",
      description: descriptions[i] || "",
    });
  }

  return values;
}

/**
 * Parse Timeline page achievements
 */
export function parseTimelineAchievements(data: TimelinePageData): Array<{
  icon: string;
  stat: string;
  label: string;
  description: string;
}> {
  const icons = parseHtmlRepeatableField(data.projectAchievementsCardIcon);
  const figures = parseHtmlRepeatableField(data.projectAchievementsFigure);
  const titles = parseHtmlRepeatableField(data.projectAchievementsTitle);
  const descriptions = parseHtmlRepeatableField(data.projectAchievementsDescription);

  const maxLength = Math.max(icons.length, figures.length, titles.length, descriptions.length);
  const achievements = [];

  for (let i = 0; i < maxLength; i++) {
    achievements.push({
      icon: icons[i]?.trim() || "CheckCircle2",
      stat: figures[i] || "",
      label: titles[i] || "",
      description: descriptions[i] || "",
    });
  }

  return achievements;
}

/**
 * Parse Timeline page upcoming milestones
 */
export function parseUpcomingMilestones(data: TimelinePageData): Array<{
  icon: string;
  title: string;
  date: string;
  description: string;
}> {
  const icons = parseHtmlRepeatableField(data.upcomingMilestonesCardIcon);
  const titles = parseHtmlRepeatableField(data.upcomingMilestonesCardTitle);
  const years = parseHtmlRepeatableField(data.upcomingMilestonesCardYear);
  const descriptions = parseHtmlRepeatableField(data.upcomingMilestonesCardDescription);

  const maxLength = Math.max(icons.length, titles.length, years.length, descriptions.length);
  const milestones = [];

  for (let i = 0; i < maxLength; i++) {
    milestones.push({
      icon: icons[i]?.trim() || "Rocket",
      title: titles[i] || "",
      date: years[i] || "",
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


// ============================================
// Page Integration Queries & Interfaces
// ============================================

export interface ImageNode {
  node: {
    id: string;
    sourceUrl: string;
  };
}

export interface AboutPageData {
  id: string;
  slug: string;
  heroTitle?: string;
  heroDescription?: string;
  heroBackgroundImage?: ImageNode | null;
  sectionTitle?: string;
  sectionParagraph?: string;
  leftImage?: ImageNode | null;
  distance?: string;
  year?: string;
  length?: string;
  completion?: string;
  sectionMainTitle?: string;
  scopeOfWorkTitle?: string;
  scopeOfWorkDescription?: string;
  briefHistoryOfTheProjectTitle?: string;
  briefHistoryOfTheProjectDescription?: string;
  ourMissionVisionSectionTitle?: string;
  guidedByClearPrinciplesAndAmbitiousGoalsDescription?: string;
  visionStatementCardTitle?: string;
  visionStatementCardDescription?: string;
  missionStatementTitle?: string;
  missionStatementDescription?: string;
  purposeTitle?: string;
  purposeDescription?: string;
  ourCommitmentSectionTitle?: string;
  ourCommitmentDescription?: string;
  ourCoreValuesTitle?: string;
  ourCoreValuesDescription?: string;
  iconName?: string;
  ourCoreValuesCardTitle?: string;
  leadershipTeamTitle?: string;
  leadershipTeamParagraph?: string;
  button1Text?: string;
  button2Text?: string;
  fullnames?: string;
  bioone?: string;
  biotwo?: string;
  expandBioButton?: string;
  ceoLeftImage?: ImageNode | null;
  directorRightImage?: ImageNode | null;
  byTheNumbersTitle?: string;
  byTheNumbersCardTitle?: string;
  byTheNumbersDescription?: string;
}

export interface ResettlementPageData {
  id: string;
  slug: string;
  heroTitle?: string;
  heroDescription?: string;
  heroBackgroundImage?: ImageNode | null;
  purposeStatement?: string;
  leftcolumntitle?: string;
  rightcolumnimage?: ImageNode | null;
  mainTitle?: string;
  frameworkcardtitle?: string;
  frameworkcarddescritpion?: string;
  principlesnumber?: string;
  principlemaintitle?: string;
  principlesdescription?: string;
  communitytitle?: string;
  communitydescription?: string;
}

export interface GalleryPageData {
  herotitle?: string;
  heroDescription?: string;
  heroBackgroundImage?: ImageNode | null;
  projectGalleryDetails?: string;
}

export interface RegionalImpactPageData {
  id: string;
  slug: string;
  heroTitle?: string;
  heroDescription?: string;
  heroBackgroundImage?: ImageNode | null;
  iconnames?: string;
  cardtitle?: string;
  carddescription?: string;
  mainTitle?: string;
  positioningtitle?: string;
  positioningdescription?: string;
  porttitle?: string;
  portdescription?: string;
  trademaintitle?: string;
  tradeicon?: ImageNode | null;
  tradetitle?: string;
  tradelistitem?: string;
}

export interface TimelinePageData {
  id: string;
  slug: string;
  projectKeyTimelinesAndMilestonesTitle?: string;
  heroDescription?: string;
  heroBackgroundImage?: ImageNode | null;
  carddate?: string;
  cardtitle?: string;
  carddescription?: string;
  cardbuttontext?: string;
  projectAchievementsCardIcon?: string;
  projectAchievementsFigure?: string;
  projectAchievementsTitle?: string;
  projectAchievementsDescription?: string;
  upcomingMilestonesTitle?: string;
  upcomingMilestonesCardIcon?: string;
  upcomingMilestonesCardTitle?: string;
  upcomingMilestonesCardYear?: string;
  upcomingMilestonesCardDescription?: string;
}

export interface LegalPageData {
  id: string;
  slug: string;
  heroTitle?: string;
  heroBackgroundImage?: ImageNode | null;
  lastUpdated?: string;
  visualContent?: string;
}



export async function getAboutPageData(): Promise<AboutPageData | null> {
  const data = await fetchAPI(GET_ABOUT_PAGE_QUERY);
  return data?.aboutPage?.nodes?.[0] || null;
}

export async function getGalleryPageData(): Promise<GalleryPageData | null> {
  const data = await fetchAPI(GET_GALLERY_PAGE_QUERY);
  return data?.gallerydatas?.nodes?.[0] || null;
}

export async function getResettlementPageData(): Promise<ResettlementPageData | null> {
  const data = await fetchAPI(GET_RESETTLEMENT_PAGE_QUERY);
  return data?.resettlements?.nodes?.[0] || null;
}

export async function getRegionalImpactPageData(): Promise<RegionalImpactPageData | null> {
  const data = await fetchAPI(GET_REGIONAL_IMPACT_PAGE_QUERY);
  return data?.regionalImpactPage?.nodes?.[0] || null;
}

export async function getTimelinePageData(): Promise<TimelinePageData | null> {
  const data = await fetchAPI(GET_TIMELINE_PAGE_QUERY);
  return data?.timelinePage?.nodes?.[0] || null;
}

export async function getCookiePolicyPageData(): Promise<LegalPageData | null> {
  const data = await fetchAPI(GET_COOKIE_POLICY_PAGE_QUERY);
  return data?.cookiePolicyPage?.nodes?.[0] || null;
}

export async function getPrivacyPageData(): Promise<LegalPageData | null> {
  const data = await fetchAPI(GET_PRIVACY_PAGE_QUERY);
  return data?.privacys?.nodes?.[0] || null;
}

export async function getTermsPageData(): Promise<LegalPageData | null> {
  const data = await fetchAPI(GET_TERMS_PAGE_QUERY);
  return data?.termsPage?.nodes?.[0] || null;
}

export async function getContactPageData(): Promise<ContactPageNode | null> {
  const data = await fetchAPI(GET_CONTACT_PAGE);
  return data?.contactPage?.nodes?.[0] || null;
}

export interface CareersPageData {
  id: string;
  slug?: string;
  heroTitle: string;
  heroDescription: string;
  heroBackgroundImage: {
    node: {
      id?: string;
      sourceUrl: string;
    };
  };
  commitmentTitle: string;
  commitmentDescription?: string;
  commitmentItems: string;
  button1Text?: string;
  button1Link?: string;
  noCurrentOpeningsTitle?: string;
  weAreAlwaysOnTheLookoutForTalentedProfessionalsDescritpion?: string;
  checkingBackSoonIcon?: string;
  checkingBackSoonText?: string;
  checkingBackSoonDescription?: string;
  stayUpdatedText?: string;
  stayUpdatedDescription?: string;
  stayUpdatedButtonText?: string;
  stayUpdatedIcon?: string;
  stayUpdatedSmallText?: string;
  whyJoinUsText?: string;
  whyJoinUsListItem?: string;
  whyJoinUsIcon?: string;
  getInTouchWithOurHrTeamText?: string;
  getInTouchWithOurHrTeamLink?: string;
  frequentlyAskedQuestionsTitle?: string;
  frequentlyAskedQuestionsDescription?: string;
  question?: string;
  answer?: string;
  questionone?: string;
  answerone?: string;
  questiontwo?: string;
  answertwo?: string;
  questionthree?: string;
  answerthree?: string;
  questionfour?: string;
  answerfour?: string;
  questionfive?: string;
  answerfive?: string;
}

export interface CommitmentPageData {
  id: string;
  slug: string;
  heroTitle: string;
  heroDescription: string;
  heroBackgroundImage?: {
    node: {
      id: string;
      sourceUrl: string;
    };
  };
  commitmentStatement: string;
  itemTitles: string;
  itemDescriptions: string;
  iconname?: string;
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

export interface CareerFaqItem {
  id: string;
  title: string;
  question: string;
  answer: string;
}

interface CareersPageResponse {
  careerspages: {
    nodes: CareersPageData[];
  };
}

interface CommitmentPageResponse {
  commitments: {
    nodes: CommitmentPageData[];
  };
}

interface CareerFaqsResponse {
  careerFaqs: {
    nodes: CareerFaqItem[];
  };
}



export async function getCareersPageData(): Promise<CareersPageData | null> {
  try {
    const data = await fetchAPI(GET_CAREERS_PAGE);
    return data?.careerspages?.nodes?.[0] || null;
  } catch (error) {
    console.error("❌ GraphQL Error fetching careers page:", error);
    return null;
  }
}

export async function getCommitmentPageData(): Promise<CommitmentPageData | null> {
  try {
    const data = await fetchAPI(GET_COMMITMENT);
    return data?.commitments?.nodes?.[0] || null;
  } catch (error) {
    console.error("❌ GraphQL Error fetching commitment page:", error);
    return null;
  }
}

export async function getCareerFaqs(): Promise<CareerFaqItem[]> {
  try {
    const data = await fetchAPI(GET_CAREER_FAQS);
    return data?.careerFaqs?.nodes || [];
  } catch (error) {
    console.error("❌ GraphQL Error fetching career FAQs:", error);
    return [];
  }
}
