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
  twocolumnSectionDescription: string;
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

// ============================================
// GraphQL Queries
// ============================================

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
        twocolumnSectionDescription
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

export async function getHomePageData(): Promise<HomePageData | null> {
  try {
    const data = await client.request<{
      homePage: { nodes: HomePageData[] };
    }>(GET_HOME_PAGE);
    return data.homePage?.nodes?.[0] || null;
  } catch (error) {
    console.error("GraphQL Error fetching home page:", error);
    return null;
  }
}

// ============================================
// Helper Functions
// ============================================

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

  // Split the descriptions - they come as HTML paragraphs
  const descriptions = parseHtmlRepeatableField(
    data.twocolumnSectionDescription
  );

  // First highlight - Left column
  highlights.push({
    title:
      titles[0] || "CONNECTING COMMUNITIES THROUGH LEADERSHIP AND COMMITMENT",
    text: descriptions[0] || "",
    img:
      data.leftimage?.node?.sourceUrl ||
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761481328/EI3A9529DRM_exisuy.jpg",
    link: data.ctaButtonLinkExploretheproject || "/about",
    btnText:
      stripHtml(data.ctaButtonTextExploretheproject) || "Explore the Project",
  });

  // Second highlight - Right column
  highlights.push({
    title:
      titles[1] || "CONNECTING ZAMBIA THROUGH GOVERNMENT-LED INFRASTRUCTURE",
    text: descriptions[1] || "",
    img:
      data.rightimage?.node?.sourceUrl ||
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761481327/EI3A9515DRM_yzoiit.jpg",
    link: data.ctaButtonLinkLearnabouttheppp || "/projects",
    btnText:
      stripHtml(data.ctaButtonTextLearnabouttheppp) || "Learn About the PPP",
  });

  return highlights;
}
