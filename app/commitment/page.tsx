import { GraphQLClient } from "graphql-request";
import type { Metadata } from "next";
import CommitmentClient from "./CommitmentClient";

export const metadata: Metadata = {
  title: "Our Commitment",
  description: "Western Corridor Limited is committed to delivering world-class infrastructure while prioritizing community welfare, environmental sustainability, and economic development.",
  robots: "noindex, nofollow",
};

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

async function getCommitmentData() {
  try {
    const data = await client.request<{
      commitments: { nodes: any[] };
    }>(GET_COMMITMENT);
    return data.commitments?.nodes?.[0] || null;
  } catch (error) {
    console.error("GraphQL Error fetching commitment:", error);
    return null;
  }
}

export default async function CommitmentPage() {
  const data = await getCommitmentData();

  return <CommitmentClient data={data} />;
}
