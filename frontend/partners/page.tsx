"use client"
import StickyNavigationMenu from "@/components/StickyNavUpdated"
import { Footer } from "@/components/FooterUpdated"
import PartnersHero from "@/components/partners/PartnersHero"
import PartnersGrid from "@/components/partners/PartnersGrid"

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">            {/* Navigation */}
            <StickyNavigationMenu />

            {/* Hero Section */}
            <PartnersHero />

            {/* Partners Grid */}
            <PartnersGrid />

            {/* Footer */}
            <Footer />
        </main>
    )
}