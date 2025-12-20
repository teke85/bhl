import { Metadata } from "next";
import { Footer } from "@/components/FooterUpdated";
import { getResettlementPageData, stripHtml } from "@/lib/wordpress-graphql";
import ResettlementClient from "./ResettlementClient";

export const metadata: Metadata = {
  title: "Resettlement Policy Framework",
  description: "The Western Corridor Resettlement Policy Framework guides how the Mutanda–Kaoma Road Project addresses land acquisition, displacement, and livelihood restoration.",
};

// Helper function to extract only digits from number strings (fixes "and 6" issue)
function extractNumber(value: string): string {
  const match = value.match(/\d+/);
  return match ? match[0] : value;
}

function parseRepeatableField(field: string | null | undefined): string[] {
  if (!field) return [];

  // Check if it contains HTML list items
  if (field.includes("<li>") || field.includes("<p>")) {
    const items: string[] = [];
    const liMatches = field.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (liMatches) {
      liMatches.forEach((match) => {
        const content = stripHtml(match);
        if (content) items.push(content);
      });
    }
    if (items.length === 0) {
      const pMatches = field.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
      if (pMatches) {
        pMatches.forEach((match) => {
          const content = stripHtml(match);
          if (content) items.push(content);
        });
      }
    }
    if (items.length > 0) return items;
  }

  const cleanedField = stripHtml(field);

  // Try pipe separator first (highest priority)
  if (cleanedField.includes("|")) {
    return cleanedField
      .split("|")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  // Try semicolon separator
  if (cleanedField.includes(";")) {
    return cleanedField
      .split(";")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  // Try newline separator
  if (cleanedField.includes("\n")) {
    return cleanedField
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  // Try comma separator
  if (cleanedField.includes(",")) {
    return cleanedField
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [cleanedField.trim()].filter(Boolean);
}

const defaultData = {
  heroTitle: "Resettlement Policy Framework",
  heroDescription:
    "The Western Corridor Resettlement Policy Framework guides how the Mutanda–Kaoma Road Project addresses land acquisition, displacement, and livelihood restoration.",
  purposeStatement:
    "The Resettlement Policy Framework (RPF) outlines the process for implementing the BEL-TC Resettlement Policy and guides the preparation of Resettlement Action Plans (RAPs) where land acquisition or displacement occurs.",
  leftcolumntitle: "Purpose of the RPF",
  mainTitle: "When the Framework Applies",
  frameworkcardtitle: ["Impact Scenarios", "Resource Changes"],
  frameworkcarddescritpion: [
    "Projects causing permanent or temporary social and economic impacts|Projects implemented through the acquisition of land or other fixed assets",
    "When land usage is changed or restricted due to project operations|When community members' property or resource rights are adversely impacted",
  ],
  principlesnumber: ["1", "2", "3", "4", "5", "6"],
  principlemaintitle: [
    "Informed Rights",
    "Consultation & Alternatives",
    "Full Compensation",
    "Livelihood Restoration",
    "Vulnerable Protection",
    "Grievance Mechanism",
  ],
  principlesdescription: [
    "Informed of their rights and options regarding resettlement",
    "Consulted and provided with feasible resettlement and compensation alternatives",
    "Promptly compensated at full replacement cost for their losses",
    "Supported to restore or improve their livelihoods and living standards",
    "Special attention given to vulnerable groups and their specific needs",
    "Access to fair and transparent grievance redressal mechanisms",
  ],
  communitytitle: "Community Engagement",
  communitydescription:
    "The Resettlement Policy Framework emphasizes open and inclusive engagement with communities affected by the Mutanda–Kaoma Road Project. Consultation is central to the planning and implementation of all resettlement and compensation activities.",
};

export default async function ResettlementPage() {
  const resettlement = await getResettlementPageData();

  let data;

  if (resettlement) {
    const parsedFrameworkTitles = parseRepeatableField(
      resettlement.frameworkcardtitle
    );
    const parsedFrameworkDesc = parseRepeatableField(
      resettlement.frameworkcarddescritpion
    );
    const parsedPrinciplesNumber = parseRepeatableField(
      resettlement.principlesnumber
    );
    const parsedPrinciplesTitles = parseRepeatableField(
      resettlement.principlemaintitle
    );
    const parsedPrinciplesDesc = parseRepeatableField(
      resettlement.principlesdescription
    );

    const finalFrameworkTitles =
      parsedFrameworkTitles.length >= 2
        ? parsedFrameworkTitles
        : defaultData.frameworkcardtitle;

    const finalFrameworkDesc =
      parsedFrameworkDesc.length >= 2
        ? parsedFrameworkDesc
        : defaultData.frameworkcarddescritpion;

    const principlesCount =
      parsedPrinciplesTitles.length >= 6 ? parsedPrinciplesTitles.length : 6;
    const useParsedPrinciples = parsedPrinciplesTitles.length >= 6;

    const finalPrinciplesNumber = useParsedPrinciples
      ? parsedPrinciplesNumber.length >= principlesCount
        ? parsedPrinciplesNumber
        : Array.from({ length: principlesCount }, (_, i) => String(i + 1))
      : defaultData.principlesnumber;

    const finalPrinciplesTitles = useParsedPrinciples
      ? parsedPrinciplesTitles
      : defaultData.principlemaintitle;

    const finalPrinciplesDesc = useParsedPrinciples
      ? parsedPrinciplesDesc.length >= principlesCount
        ? parsedPrinciplesDesc
        : parsedPrinciplesTitles.map((_, i) => parsedPrinciplesDesc[i] || "")
      : defaultData.principlesdescription;

    // Build scenarios
    const scenarios = finalFrameworkTitles.map((title, index) => ({
      title,
      items: finalFrameworkDesc[index]
        ? finalFrameworkDesc[index]
          .split("|")
          .map((item) => item.trim())
          .filter(Boolean)
        : [],
    }));

    // Build principles
    const principles = finalPrinciplesTitles.map((title, index) => ({
      number: extractNumber(finalPrinciplesNumber[index] || String(index + 1)),
      title,
      description: finalPrinciplesDesc[index] || "",
    }));

    data = {
      heroTitle: stripHtml(resettlement.heroTitle) || defaultData.heroTitle,
      heroDescription: stripHtml(resettlement.heroDescription) || defaultData.heroDescription,
      heroBackgroundImageUrl: resettlement.heroBackgroundImage?.node?.sourceUrl,
      purposeStatement: stripHtml(resettlement.purposeStatement) || defaultData.purposeStatement,
      leftcolumntitle: stripHtml(resettlement.leftcolumntitle) || defaultData.leftcolumntitle,
      rightcolumnimageUrl:
        resettlement.rightcolumnimage?.node?.sourceUrl ||
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760716202/Professional_infographic_illustration_showing_a_resettlement_policy_framework_document_with_intercon_1_tt6cxm.png",
      mainTitle: stripHtml(resettlement.mainTitle) || defaultData.mainTitle,
      scenarios,
      principles,
      communitytitle: stripHtml(resettlement.communitytitle) || defaultData.communitytitle,
      communitydescription: stripHtml(resettlement.communitydescription) || defaultData.communitydescription,
    };
  } else {
    // Fallback if no data from WordPress
    const scenarios = defaultData.frameworkcardtitle.map((title, index) => ({
      title,
      items: defaultData.frameworkcarddescritpion[index]
        ? defaultData.frameworkcarddescritpion[index]
          .split("|")
          .map((item) => item.trim())
          .filter(Boolean)
        : [],
    }));

    const principles = defaultData.principlemaintitle.map((title, index) => ({
      number: extractNumber(defaultData.principlesnumber[index] || String(index + 1)),
      title,
      description: defaultData.principlesdescription[index] || "",
    }));

    data = {
      heroTitle: defaultData.heroTitle,
      heroDescription: defaultData.heroDescription,
      heroBackgroundImageUrl: undefined,
      purposeStatement: defaultData.purposeStatement,
      leftcolumntitle: defaultData.leftcolumntitle,
      rightcolumnimageUrl: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760716202/Professional_infographic_illustration_showing_a_resettlement_policy_framework_document_with_intercon_1_tt6cxm.png",
      mainTitle: defaultData.mainTitle,
      scenarios,
      principles,
      communitytitle: defaultData.communitytitle,
      communitydescription: defaultData.communitydescription,
    };
  }

  return (
    <>
      <ResettlementClient data={data} />
    </>
  );
}
