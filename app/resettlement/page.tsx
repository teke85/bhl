"use client"

import ResettlementHero from "@/components/resettlement/ResettlementHero"
import ResettlementPillars from "@/components/resettlement/ResettlementPillars"
import RPFPurpose from "@/components/resettlement/RPFPurpose"
import FrameworkApplies from "@/components/resettlement/FrameworkApplies"
import KeyPrinciples from "@/components/resettlement/KeyPrinciples"
import CommunityEngagement from "@/components/resettlement/CommunityEngagement"
import CompensationFramework from "@/components/resettlement/CompensationFramework"
import SupportPrograms from "@/components/resettlement/SupportPrograms"
import { Footer } from "@/components/Footer"
import StickyNavigationMenu from "@/components/StickyNav"
import ThemeToggle from "@/components/ModeToggle"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/MobileMenu"

const ResettlementPage = () => {
    return (
        <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
            {/* Header Navigation */}
            <nav className="absolute top-0 left-0 right-0 z-40">
                <div className="container mx-auto px-4 py-4">
                    <div className="grid grid-cols-3 items-center gap-4 h-16">
                        <div className="relative z-30 justify-self-center">
                            <StickyNavigationMenu />
                        </div>
                        <div className="relative z-30 justify-self-end" />
                        <div className="col-span-3 md:hidden">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Page Content */}
            <ResettlementHero />
            <ResettlementPillars />
            <RPFPurpose />
            <FrameworkApplies />
            <KeyPrinciples />
            <CommunityEngagement />
            <CompensationFramework />
            <SupportPrograms />
            <Footer />
        </main>
    )
}

export default ResettlementPage