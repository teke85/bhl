import Navigation from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";
import { CareersHero } from "@/components/careers/careers-hero";
import { OurCommitment } from "@/components/careers/our-commitment";
import { FAQSection } from "@/components/careers/faq-section";
import { NoOpenings } from "@/components/careers/no-jobopenings";
import { OpenPositions } from "@/components/careers/open-positions";
import { getJobOpenings } from "@/lib/wordpress-graphql";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Western Corridor Limited and be part of a transformative team building the future of Zambia's infrastructure.",
};

export default async function CareersPage() {
  const jobsData = await getJobOpenings();

  const jobs = jobsData.map((job) => ({
    title: job.title,
    location: job.jobFields?.location || "Zambia",
    department: job.jobFields?.department || "General",
    link: job.jobFields?.applicationLink,
    date: job.date,
  }));

  return (
    <div className="min-h-screen">
      <Navigation />
      <CareersHero />
      {jobs.length > 0 ? <OpenPositions jobs={jobs} /> : <NoOpenings />}
      <OurCommitment />
      <FAQSection />
      <Footer />
    </div>
  );
}
