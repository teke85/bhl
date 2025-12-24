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

  // Construct FAQs array from the new field names
  const faqs = [];
  if (pageData) {
    if (pageData.question && pageData.answer) faqs.push({ question: stripHtml(pageData.question), answer: stripHtml(pageData.answer) });
    if (pageData.questionone && pageData.answerone) faqs.push({ question: stripHtml(pageData.questionone), answer: stripHtml(pageData.answerone) });
    if (pageData.questiontwo && pageData.answertwo) faqs.push({ question: stripHtml(pageData.questiontwo), answer: stripHtml(pageData.answertwo) });
    if (pageData.questionthree && pageData.answerthree) faqs.push({ question: stripHtml(pageData.questionthree), answer: stripHtml(pageData.answerthree) });
    if (pageData.questionfour && pageData.answerfour) faqs.push({ question: stripHtml(pageData.questionfour), answer: stripHtml(pageData.answerfour) });
    if (pageData.questionfive && pageData.answerfive) faqs.push({ question: stripHtml(pageData.questionfive), answer: stripHtml(pageData.answerfive) });
  }

  const finalFaqs = faqs.length > 0 ? faqs : undefined;

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
          checkingBackIcon={stripHtml(pageData?.checkingBackSoonIcon) || undefined}
          checkingBackTitle={stripHtml(pageData?.checkingBackSoonText) || undefined}
          checkingBackText={stripHtml(pageData?.checkingBackSoonDescription) || undefined}
          stayUpdatedTitle={stripHtml(pageData?.stayUpdatedText) || undefined}
          stayUpdatedText={stripHtml(pageData?.stayUpdatedDescription) || undefined}
          stayUpdatedButtonText={stripHtml(pageData?.stayUpdatedButtonText) || undefined}
          stayUpdatedSmallText={stripHtml(pageData?.stayUpdatedSmallText) || undefined}
          whyJoinUsTitle={stripHtml(pageData?.whyJoinUsText) || undefined}
          whyJoinUsList={whyJoinUsList}
          contactText="Have a question about working at Western Corridor Limited?"
          contactLinkText={stripHtml(pageData?.getInTouchWithOurHrTeamText) || undefined}
          contactLink={stripHtml(pageData?.getInTouchWithOurHrTeamLink) || undefined}
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
