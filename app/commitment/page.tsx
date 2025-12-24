import { getCommitmentPageData } from "@/lib/wordpress-graphql";
import type { Metadata } from "next";
import CommitmentClient from "./CommitmentClient";

export const metadata: Metadata = {
  title: "Our Commitment",
  description: "Western Corridor Limited is committed to delivering world-class infrastructure while prioritizing community welfare, environmental sustainability, and economic development.",
  robots: "noindex, nofollow",
};

export default async function CommitmentPage() {
  const data = await getCommitmentPageData();

  return <CommitmentClient data={data} />;
}
