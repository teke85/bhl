import StickyNavigationMenu from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";
import PartnersHero from "@/components/partners/PartnersHero";
import PartnersGrid from "@/components/partners/PartnersGrid";
import { getAllPartners } from "@/lib/wordpress-graphql";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partners",
    description: "Meet our strategic partners and collaborators working together to deliver excellence in infrastructure and logistics.",
};

export default async function PartnersPage() {
    const partnersData = await getAllPartners();

    // Map WP data to local interface
    const formattedPartners = partnersData.length
        ? partnersData.map((p) => ({
            id: p.id,
            name: p.title,
            role: p.partnerFields.role,
            category: p.partnerFields.category,
            description: p.partnerFields.description,
            expertise: p.partnerFields.expertise
                ? p.partnerFields.expertise.split(",").map((s) => s.trim())
                : [],
            responsibilities: p.partnerFields.responsibilities
                ? p.partnerFields.responsibilities.split(",").map((s) => s.trim())
                : [],
        }))
        : undefined;

    return (
        <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
            {/* Navigation */}
            <StickyNavigationMenu />

            {/* Hero Section */}
            <PartnersHero />

            {/* Partners Grid */}
            <PartnersGrid partners={formattedPartners} />

            {/* Footer */}
            <Footer />
        </main>
    );
}