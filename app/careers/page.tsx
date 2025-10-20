import type { Metadata } from "next";
import { pageMetadata, siteConfig } from "@/lib/seo-config";
import Navigation from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";
import { CareersHero } from "@/components/careers/careers-hero";
import { LifeAtBHL } from "@/components/careers/life-at-bhl";
import { EmployeeTestimonials } from "@/components/careers/employee-testimonials";
import { OpenPositions } from "@/components/careers/open-positions";
import { OurCommitment } from "@/components/careers/our-commitment";
import { WorkEnvironment } from "@/components/careers/work-environment";
import { FAQSection } from "@/components/careers/faq-section";
import PageStructuredData from "@/components/seo/PageStructuredData";

export const metadata: Metadata = {
  title: pageMetadata.careers.title,
  description: pageMetadata.careers.description,
  keywords: pageMetadata.careers.keywords,
  openGraph: {
    title: pageMetadata.careers.title,
    description: pageMetadata.careers.description,
    url: `${siteConfig.url}/careers`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_ZM",
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/careers`,
  },
};

export default function CareersPage() {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
        ]}
      />
      <div className="min-h-screen">
        <Navigation />
        <CareersHero />
        <LifeAtBHL />
        <EmployeeTestimonials />
        <OpenPositions />
        <OurCommitment />
        <WorkEnvironment />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
