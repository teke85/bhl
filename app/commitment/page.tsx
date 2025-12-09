"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Users, Leaf, TrendingUp, Heart, Target } from "lucide-react";
import { GraphQLClient } from "graphql-request";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import Footer from "@/components/FooterUpdated";

// ============================================
// GraphQL Setup
// ============================================
const GRAPHQL_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL ||
  "https://cms.westerncorridorlimited.com/graphql";

const client = new GraphQLClient(GRAPHQL_URL, {
  headers: { "Content-Type": "application/json" },
});

// ============================================
// Types
// ============================================
interface CommitmentData {
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

// ============================================
// GraphQL Query
// ============================================
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

// ============================================
// Helper Functions
// ============================================

function stripHtmlTags(html: string): string {
  if (!html) return "";
  // Remove HTML tags and decode common HTML entities
  return (
    html
      .replace(/<[^>]*>/g, "") // Remove all HTML tags
      .replace(/&#(\d+);/g, (_, dec) =>
        String.fromCharCode(Number.parseInt(dec, 10))
      )
      // Decode hex HTML entities (e.g., &#x26; -> &)
      .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
        String.fromCharCode(Number.parseInt(hex, 16))
      )
      // Decode named HTML entities
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
      .trim()
  );
}

function parseRepeatableField(field: string | null | undefined): string[] {
  if (!field) return [];

  let cleanField = field;

  // Check if the field contains HTML list items (<li> tags)
  if (field.includes("<li>")) {
    const liMatches = field.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (liMatches && liMatches.length > 0) {
      return liMatches.map((li) => stripHtmlTags(li)).filter(Boolean);
    }
  }

  // Check if the field contains <p> tags (paragraph-based repeatable)
  if (field.includes("<p>")) {
    const pMatches = field.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
    if (pMatches && pMatches.length > 0) {
      return pMatches.map((p) => stripHtmlTags(p)).filter(Boolean);
    }
  }

  // Strip any remaining HTML tags for plain text parsing
  cleanField = stripHtmlTags(field);

  // Try pipe separator first
  if (cleanField.includes("|")) {
    return cleanField
      .split("|")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  // Then try newline separator
  if (cleanField.includes("\n")) {
    return cleanField
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (cleanField.includes(".,")) {
    return cleanField
      .split(/,\s*(?:and\s+)?/g) // Split on ", " or ", and "
      .map((item) => item.replace(/^\s*and\s+/, "").trim()) // Remove leading "and "
      .map((item) => item.replace(/\.$/, "").trim()) // Remove trailing period
      .filter(Boolean);
  }

  // Finally try comma separator (but not if it looks like a sentence)
  if (cleanField.includes(",") && !cleanField.includes(".")) {
    return cleanField
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [cleanField.trim()].filter(Boolean);
}

function cleanTextField(field: string | null | undefined): string {
  if (!field) return "";
  return stripHtmlTags(field);
}

async function getCommitmentData(): Promise<CommitmentData | null> {
  try {
    const data = await client.request<{
      commitments: { nodes: CommitmentData[] };
    }>(GET_COMMITMENT);
    return data.commitments?.nodes?.[0] || null;
  } catch (error) {
    console.error("GraphQL Error fetching commitment:", error);
    return null;
  }
}

// ============================================
// Constants
// ============================================
const iconMap = [Shield, Target, Users, Leaf, TrendingUp, Heart];
const colorMap = [
  "text-blue-500",
  "text-green-500",
  "text-purple-500",
  "text-emerald-500",
  "text-orange-500",
  "text-red-500",
];

// ============================================
// Component
// ============================================
export default function CommitmentPage() {
  const [mounted, setMounted] = useState(false);
  const [commitmentData, setCommitmentData] = useState<CommitmentData | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 0);

    // Fetch data from WordPress
    getCommitmentData().then((data) => {
      setCommitmentData(data);
      setLoading(false);
    });

    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Parse repeatable fields
  const commitmentItemTitles = parseRepeatableField(commitmentData?.itemTitles);
  const commitmentItemDescriptions = parseRepeatableField(
    commitmentData?.itemDescriptions
  );
  const keyPrincipleTitles = parseRepeatableField(
    commitmentData?.keyPrincipleTitles
  );
  const keyPrincipleDescriptions = parseRepeatableField(
    commitmentData?.keyPrincipleDescriptions
  );
  const accountabilityTitles = parseRepeatableField(
    commitmentData?.accountabilityitemstitle
  );
  const accountabilityDescriptions = parseRepeatableField(
    commitmentData?.accountabilityitemssubtitle
  );

  // Build arrays from parsed data
  const commitments = commitmentItemTitles.map((title, index) => ({
    icon: iconMap[index % iconMap.length],
    title,
    description: commitmentItemDescriptions[index] || "",
    color: colorMap[index % colorMap.length],
  }));

  const principles = keyPrincipleTitles.map((title, index) => ({
    title,
    description: keyPrincipleDescriptions[index] || "",
  }));

  const accountabilities = accountabilityTitles.map((title, index) => ({
    title,
    description: accountabilityDescriptions[index] || "",
  }));

  const heroTitle =
    cleanTextField(commitmentData?.heroTitle) || "Our Commitment";
  const heroDescription =
    cleanTextField(commitmentData?.heroDescription) ||
    "Building a corridor of opportunity, sustainability, and shared prosperity for Zambia and the region";
  const commitmentStatement =
    cleanTextField(commitmentData?.commitmentStatement) ||
    "We are committed to delivering the Western Corridor Project as a transformative infrastructure initiative that strengthens Zambia's regional connectivity, economic resilience, and social equity.";
  const mainTitle =
    cleanTextField(commitmentData?.mainTitle) || "Guiding Principles";
  const impactQuote =
    cleanTextField(commitmentData?.impactQuote) ||
    "Our commitment is to not only construct a road, but to create a corridor of opportunity, sustainability, and shared prosperity for Zambia and the region.";
  const impactAuthor =
    cleanTextField(commitmentData?.impactAuthor) || "Western Corridor Limited";
  const accountabilityMainTitle =
    cleanTextField(commitmentData?.accountabilityMainTitle) ||
    "Accountability & Transparency";
  const accountabilitySubtitle =
    cleanTextField(commitmentData?.accountabilitysubtitle) ||
    "We maintain the highest standards of governance and reporting";
  const ctaTitle =
    cleanTextField(commitmentData?.ctatitle) || "Learn More About Our Impact";
  const ctaDescription =
    cleanTextField(commitmentData?.ctadescription) ||
    "Discover how we are making a difference across the Western Corridor";
  const button1Text =
    cleanTextField(commitmentData?.button1Text) || "Regional Impact";
  const button1Link = commitmentData?.button1Link || "/regional-impact";
  const button2Text =
    cleanTextField(commitmentData?.button2text) || "Resettlement Framework";
  const button2Link = commitmentData?.button2link || "/resettlement";

  if (!mounted) return null;

  if (loading) {
    return (
      <main className="min-h-screen bg-background dark:bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#fdb913]"></div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
      <StickyNavigationMenu />

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden bg-background dark:bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1761799061/KasempaToll_WB_Area-DJI_0577_cs1c5k.jpg"
            alt="Our Commitment"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/70 dark:bg-black/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Commitment Statement */}
      <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground dark:text-white leading-relaxed mb-8">
              {commitmentStatement}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Commitments Grid */}
      {commitments.length > 0 && (
        <section className="py-16 bg-card dark:bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {commitments.map((commitment, index) => {
                const Icon = commitment.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-background dark:bg-[#0a0a0a] p-6 rounded-lg border border-border dark:border-white/10 hover:border-[#fdb913] transition-all duration-300 hover:shadow-lg"
                    variants={itemVariants}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`${commitment.color} shrink-0`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">
                          {commitment.title}
                        </h3>
                        <p className="text-[#868584] dark:text-gray-300 leading-relaxed">
                          {commitment.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Key Principles Section */}
      {principles.length > 0 && (
        <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground dark:text-white mb-12">
                {mainTitle}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-card dark:bg-[#1a1a1a] rounded-lg border border-border dark:border-white/10"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#fdb913] mt-2 shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-[#868584] dark:text-gray-300">
                        {principle.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Impact Statement */}
      <section className="py-16 bg-[#fdb913]/10 dark:bg-[#fdb913]/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-2xl md:text-3xl font-bold text-foreground dark:text-white mb-6 italic">
              &quot;{impactQuote}&quot;
            </blockquote>
            <p className="text-lg text-[#868584] dark:text-gray-300">
              — {impactAuthor}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accountability & Transparency */}
      {accountabilities.length > 0 && (
        <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4">
                  {accountabilityMainTitle}
                </h2>
                <p className="text-lg text-[#868584] dark:text-gray-300">
                  {accountabilitySubtitle}
                </p>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {accountabilities.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-card dark:bg-[#1a1a1a] rounded-lg border border-border dark:border-white/10"
                  >
                    <h3 className="text-xl font-semibold text-foreground dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#868584] dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-card dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white mb-4">
              {ctaTitle}
            </h2>
            <p className="text-lg text-[#868584] dark:text-gray-300 mb-8">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={button1Link}
                className="px-8 py-3 bg-[#fdb913] text-black font-semibold rounded-lg hover:bg-[#fdb913]/90 transition-colors"
              >
                {button1Text}
              </a>
              <a
                href={button2Link}
                className="px-8 py-3 bg-transparent border-2 border-[#fdb913] text-[#fdb913] font-semibold rounded-lg hover:bg-[#fdb913]/10 transition-colors"
              >
                {button2Text}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
