import { siteConfig } from "@/lib/seo-config";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface PageStructuredDataProps {
  type?: "WebPage" | "Article" | "NewsArticle" | "JobPosting" | "FAQPage";
  breadcrumbs?: BreadcrumbItem[];
  article?: {
    headline: string;
    datePublished: string;
    dateModified?: string;
    author: string;
    image?: string;
  };
  jobPosting?: {
    title: string;
    description: string;
    datePosted: string;
    employmentType: string;
    location: string;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export default function PageStructuredData({
  type = "WebPage",
  breadcrumbs,
  article,
  jobPosting,
  faqs,
}: PageStructuredDataProps) {
  const schemas: Record<string, unknown>[] = [];

  // Breadcrumb Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${siteConfig.url}${item.url}`,
      })),
    });
  }

  // Article Schema
  if (type === "Article" || type === "NewsArticle") {
    if (article) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": type,
        headline: article.headline,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
          "@type": "Organization",
          name: article.author,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/logo.png`,
          },
        },
        image: article.image || `${siteConfig.url}/og-image.jpg`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": siteConfig.url,
        },
      });
    }
  }

  // Job Posting Schema
  if (type === "JobPosting" && jobPosting) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: jobPosting.title,
      description: jobPosting.description,
      datePosted: jobPosting.datePosted,
      employmentType: jobPosting.employmentType,
      hiringOrganization: {
        "@type": "Organization",
        name: siteConfig.name,
        sameAs: siteConfig.url,
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: jobPosting.location,
          addressCountry: "ZM",
        },
      },
    });
  }

  // FAQ Schema
  if (type === "FAQPage" && faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  if (schemas.length === 0) return null;

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
