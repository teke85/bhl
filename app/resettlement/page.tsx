"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { GraphQLClient } from "graphql-request";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import Footer from "@/components/FooterUpdated";

// GraphQL endpoint
const GRAPHQL_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL ||
  "https://cms.westerncorridorlimited.com/graphql";

const client = new GraphQLClient(GRAPHQL_URL, {
  headers: { "Content-Type": "application/json" },
});

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

interface ResettlementData {
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

// Helper function to strip HTML tags and decode HTML entities
function stripHtmlTags(html: string | null | undefined): string {
  if (!html) return "";
  const text = html
    .replace(/<[^>]*>/g, "")
    .replace(/&#(\d+);/g, (_, dec) =>
      String.fromCharCode(Number.parseInt(dec, 10))
    )
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
      String.fromCharCode(Number.parseInt(hex, 16))
    )
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&hellip;/g, "…");
  return text.trim();
}

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
        const content = stripHtmlTags(match);
        if (content) items.push(content);
      });
    }
    if (items.length === 0) {
      const pMatches = field.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
      if (pMatches) {
        pMatches.forEach((match) => {
          const content = stripHtmlTags(match);
          if (content) items.push(content);
        });
      }
    }
    if (items.length > 0) return items;
  }

  const cleanedField = stripHtmlTags(field);

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

  // Try comma separator (removed the period restriction)
  if (cleanedField.includes(",")) {
    return cleanedField
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [cleanedField.trim()].filter(Boolean);
}

// Default data for fallback
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

const ResettlementPage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    heroTitle: string;
    heroDescription: string;
    purposeStatement: string;
    leftcolumntitle: string;
    rightcolumnimageUrl: string;
    mainTitle: string;
    frameworkcardtitle: string[];
    frameworkcarddescritpion: string[];
    principlesnumber: string[];
    principlemaintitle: string[];
    principlesdescription: string[];
    communitytitle: string;
    communitydescription: string;
  }>({
    heroTitle: defaultData.heroTitle,
    heroDescription: defaultData.heroDescription,
    purposeStatement: defaultData.purposeStatement,
    leftcolumntitle: defaultData.leftcolumntitle,
    rightcolumnimageUrl:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760716202/Professional_infographic_illustration_showing_a_resettlement_policy_framework_document_with_intercon_1_tt6cxm.png",
    mainTitle: defaultData.mainTitle,
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
    communitytitle: defaultData.communitytitle,
    communitydescription: defaultData.communitydescription,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await client.request<{
          resettlements: { nodes: ResettlementData[] };
        }>(GET_RESETTLEMENT);

        const resettlement = result.resettlements?.nodes?.[0];

        if (resettlement) {
          console.log("[v0] Raw WordPress data:", {
            frameworkcardtitle: resettlement.frameworkcardtitle,
            frameworkcarddescritpion: resettlement.frameworkcarddescritpion,
            principlesnumber: resettlement.principlesnumber,
            principlemaintitle: resettlement.principlemaintitle,
            principlesdescription: resettlement.principlesdescription,
          });

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

          console.log("[v0] Parsed data lengths:", {
            frameworkTitles: parsedFrameworkTitles.length,
            frameworkDesc: parsedFrameworkDesc.length,
            principlesNumber: parsedPrinciplesNumber.length,
            principlesTitles: parsedPrinciplesTitles.length,
            principlesDesc: parsedPrinciplesDesc.length,
          });

          const finalFrameworkTitles =
            parsedFrameworkTitles.length >= 2
              ? parsedFrameworkTitles
              : ["Impact Scenarios", "Resource Changes"];

          const finalFrameworkDesc =
            parsedFrameworkDesc.length >= 2
              ? parsedFrameworkDesc
              : [
                  "Projects causing permanent or temporary social and economic impacts|Projects implemented through the acquisition of land or other fixed assets",
                  "When land usage is changed or restricted due to project operations|When community members' property or resource rights are adversely impacted",
                ];

          const principlesCount =
            parsedPrinciplesTitles.length >= 6
              ? parsedPrinciplesTitles.length
              : 6;
          const useParsedPrinciples = parsedPrinciplesTitles.length >= 6;

          const finalPrinciplesNumber = useParsedPrinciples
            ? parsedPrinciplesNumber.length >= principlesCount
              ? parsedPrinciplesNumber
              : Array.from({ length: principlesCount }, (_, i) => String(i + 1))
            : ["1", "2", "3", "4", "5", "6"];

          const finalPrinciplesTitles = useParsedPrinciples
            ? parsedPrinciplesTitles
            : [
                "Informed Rights",
                "Consultation & Alternatives",
                "Full Compensation",
                "Livelihood Restoration",
                "Vulnerable Protection",
                "Grievance Mechanism",
              ];

          const finalPrinciplesDesc = useParsedPrinciples
            ? parsedPrinciplesDesc.length >= principlesCount
              ? parsedPrinciplesDesc
              : parsedPrinciplesTitles.map(
                  (_, i) => parsedPrinciplesDesc[i] || ""
                )
            : [
                "Informed of their rights and options regarding resettlement",
                "Consulted and provided with feasible resettlement and compensation alternatives",
                "Promptly compensated at full replacement cost for their losses",
                "Supported to restore or improve their livelihoods and living standards",
                "Special attention given to vulnerable groups and their specific needs",
                "Access to fair and transparent grievance redressal mechanisms",
              ];

          console.log("[v0] Final data being set:", {
            frameworkTitles: finalFrameworkTitles,
            principlesTitles: finalPrinciplesTitles,
            principlesNumber: finalPrinciplesNumber,
          });

          setData({
            heroTitle:
              stripHtmlTags(resettlement.heroTitle) || defaultData.heroTitle,
            heroDescription:
              stripHtmlTags(resettlement.heroDescription) ||
              defaultData.heroDescription,
            purposeStatement:
              stripHtmlTags(resettlement.purposeStatement) ||
              defaultData.purposeStatement,
            leftcolumntitle:
              stripHtmlTags(resettlement.leftcolumntitle) ||
              defaultData.leftcolumntitle,
            rightcolumnimageUrl:
              resettlement.rightcolumnimage?.node?.sourceUrl ||
              "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760716202/Professional_infographic_illustration_showing_a_resettlement_policy_framework_document_with_intercon_1_tt6cxm.png",
            mainTitle:
              stripHtmlTags(resettlement.mainTitle) || defaultData.mainTitle,
            frameworkcardtitle: finalFrameworkTitles,
            frameworkcarddescritpion: finalFrameworkDesc,
            principlesnumber: finalPrinciplesNumber,
            principlemaintitle: finalPrinciplesTitles,
            principlesdescription: finalPrinciplesDesc,
            communitytitle:
              stripHtmlTags(resettlement.communitytitle) ||
              defaultData.communitytitle,
            communitydescription:
              stripHtmlTags(resettlement.communitydescription) ||
              defaultData.communitydescription,
          });
        }
      } catch (error) {
        console.error("Error fetching resettlement data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (!mounted) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-background dark:bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#fdb913]"></div>
      </div>
    );
  }

  // Build scenarios for framework section
  const scenarios = data.frameworkcardtitle.map((title, index) => ({
    title,
    items: data.frameworkcarddescritpion[index]
      ? data.frameworkcarddescritpion[index]
          .split("|")
          .map((item) => item.trim())
          .filter(Boolean)
      : [],
  }));

  // Build principles array
  const principles = data.principlemaintitle.map((title, index) => ({
    number: extractNumber(data.principlesnumber[index] || String(index + 1)),
    title,
    description: data.principlesdescription[index] || "",
  }));

  return (
    <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
      {/* Header Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-3 items-center gap-4 h-16">
            <div className="relative z-30 justify-self-center">
              <StickyNavigationMenu />
            </div>
            <div className="relative z-30 justify-self-end" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1761799609/Kasempa_Western_ByPass-DJI_0533_omz2fa.jpg"
            alt="Kasempa Western Bypass aerial view"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {data.heroTitle}
          </motion.h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {data.heroDescription}
          </p>
        </div>
      </section>

      {/* RPF Purpose Section */}
      <section className="py-16 md:py-24 bg-card dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 text-balance">
                {data.leftcolumntitle}
              </h2>
              <p className="text-lg text-foreground dark:text-white mb-6">
                {data.purposeStatement}
              </p>
              <p className="text-base text-muted-foreground dark:text-gray-300">
                This framework ensures that all affected persons are treated
                fairly, with their rights protected and their livelihoods
                restored or improved compared to pre-project conditions.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={data.rightcolumnimageUrl || "/placeholder.svg"}
                alt="Community consultation"
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
              <div
                className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/20" : "bg-white/10"}`}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Applies Section */}
      <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-12 text-balance">
            {data.mainTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-muted dark:bg-[#1a1a1a] border border-border dark:border-white/10"
              >
                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-6">
                  {scenario.title}
                </h3>
                <ul className="space-y-4">
                  {scenario.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-4">
                      <span className="text-[#fdb913] font-bold text-lg shrink-0">
                        •
                      </span>
                      <span className="text-muted-foreground dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles Section */}
      <section className="py-16 md:py-24 bg-muted dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-12 text-balance">
            Key Principles of Resettlement Planning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card dark:bg-[#0a0a0a] border border-border dark:border-white/10 hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fdb913] flex items-center justify-center shrink-0">
                    <span className="text-black font-bold text-lg">
                      {principle.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground dark:text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="py-20 bg-background dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-foreground dark:text-white"
          >
            {data.communitytitle}
          </motion.h2>
          <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
            {data.communitydescription}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ResettlementPage;
