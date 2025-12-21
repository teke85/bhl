import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { getContactPageData, stripHtml } from "@/lib/wordpress-graphql";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Western Corridor Limited for inquiries, collaborations, or more information about our projects.",
};

export default async function ContactPage() {
  const data = await getContactPageData();
  return (
    <main className="min-h-screen">
      <StickyNavigationMenu />

      {/* Hero Section */}
      <ContactHero
        title={stripHtml(data?.contactPageFields?.heroTitle) || undefined}
        subtitle={stripHtml(data?.contactPageFields?.heroSubtitle) || undefined}
        image={data?.contactPageFields?.heroImage?.node?.sourceUrl || undefined}
      />

      {/* Contact Form & Info */}
      <section className="py-16 bg-white dark:bg-black text-black dark:text-white lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 text-black bg-white dark:text-white dark:bg-black space-y-6">
              <ContactInfo
                email={stripHtml(data?.contactPageFields?.email) || undefined}
                phone={stripHtml(data?.contactPageFields?.phone) || undefined}
                address={stripHtml(data?.contactPageFields?.address) || undefined}
                workingHours={stripHtml(data?.contactPageFields?.workingHours) || undefined}
              />
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white text-black dark:bg-black dark:text-white">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Optional, can be added back if needed and fetched from WP */}
      {/* {data?.contactPageFields?.mapEmbedUrl && (
          <section className="py-16 lg:py-24 bg-card">
            <div className="container mx-auto px-4 lg:px-8">
               ... map embed ...
            </div>
          </section>
        )} */}
      <Footer />
    </main>
  );
}
