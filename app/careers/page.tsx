import Navigation from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";
import { CareersHero } from "@/components/careers/careers-hero";
import { OurCommitment } from "@/components/careers/our-commitment";
import { FAQSection } from "@/components/careers/faq-section";
import { NoOpenings } from "@/components/careers/no-jobopenings";
import { OpenPositions } from "@/components/careers/open-positions";
import { getCareersPageData, stripHtml } from "@/lib/wordpress-graphql";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Western Corridor Limited and be part of a transformative team building the future of Zambia's infrastructure.",
  robots: "noindex, nofollow",
};

export default async function CareersPage() {
  const pageData = await getCareersPageData();

  const jobs: any[] = []; // No job openings fetching as per user request (jobs CPT removed)

  const commitmentItems = pageData?.commitmentItems
    ? pageData.commitmentItems
      .split("\n")
      .map((i) => stripHtml(i).trim())
      .filter(Boolean)
    : undefined;

  const whyJoinUsList = pageData?.whyJoinUsListItem
    ? pageData.whyJoinUsListItem
      .split("\n")
      .map((i) => stripHtml(i).trim())
      .filter(Boolean)
    : undefined;

  // Prefer page data FAQs if available, otherwise use default
  const faqs = [];
  if (pageData) {
    if (pageData.question && pageData.answer) faqs.push({ question: stripHtml(pageData.question), answer: stripHtml(pageData.answer) });
    if (pageData.question2 && pageData.answer2) faqs.push({ question: stripHtml(pageData.question2), answer: stripHtml(pageData.answer2) });
    if (pageData.question3 && pageData.answer3) faqs.push({ question: stripHtml(pageData.question3), answer: stripHtml(pageData.answer3) });
    if (pageData.question4 && pageData.answer4) faqs.push({ question: stripHtml(pageData.question4), answer: stripHtml(pageData.answer4) });
    if (pageData.question5 && pageData.answer5) faqs.push({ question: stripHtml(pageData.question5), answer: stripHtml(pageData.answer5) });
    if (pageData.question6 && pageData.answer6) faqs.push({ question: stripHtml(pageData.question6), answer: stripHtml(pageData.answer6) });
  }

  const finalFaqs = faqs.length > 0 ? faqs : undefined;

  // If there are multiple FAQs handled via a different structure in the future, adapt here.
  // Currently supports 1 Q&A pair from the page pod as per query provided.

  return (
    <div className="min-h-screen">
      <Navigation />
      <CareersHero
        title={stripHtml(pageData?.heroTitle) || undefined}
        description={stripHtml(pageData?.heroDescription) || undefined}
        backgroundImage={pageData?.heroBackgroundImage?.node?.sourceUrl || undefined}
      />
      {jobs.length > 0 ? (
        <OpenPositions jobs={jobs} />
      ) : (
        <NoOpenings
          title={stripHtml(pageData?.noCurrentOpeningsTitle) || undefined}
          description={
            stripHtml(
              pageData?.weAreAlwaysOnTheLookoutForTalentedProfessionalsDescritpion
            ) || undefined
          }
          checkingBackTitle={undefined} // No field in query for title?
          checkingBackText={stripHtml(pageData?.checkingBackSoonText) || undefined}
          stayUpdatedTitle={stripHtml(pageData?.stayUpdatedText) || undefined}
          stayUpdatedText={stripHtml(pageData?.stayUpdatedDescription) || undefined}
          stayUpdatedButtonText={stripHtml(pageData?.stayUpdatedButtonText) || undefined}
          stayUpdatedSmallText={stripHtml(pageData?.stayUpdatedSmallText) || undefined}
          whyJoinUsTitle={stripHtml(pageData?.whyJoinUsText) || undefined}
          whyJoinUsList={whyJoinUsList}
          contactText={
            stripHtml(
              pageData?.haveAQuestionAboutWorkingAtWesternCorridorLimitedText
            ) || undefined
          }
          contactLinkText={stripHtml(pageData?.getInTouchWithOurHrTeamText) || undefined}
        />
      )}
      <OurCommitment
        title={stripHtml(pageData?.commitmentTitle) || undefined}
        description={stripHtml(pageData?.commitmentDescription) || undefined}
        items={commitmentItems}
      />
      <FAQSection faqs={finalFaqs} />
      <Footer />
    </div>
  );
}
