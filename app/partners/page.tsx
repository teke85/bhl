"use client"
import StickyNavigationMenu from "@/components/StickyNavUpdated"
import { Footer } from "@/components/FooterUpdated"
import PartnersHero from "@/components/partners/PartnersHero"
import PartnersGrid from "@/components/partners/PartnersGrid"

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            {/* Navigation */}
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