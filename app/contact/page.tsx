"use client"

import { Footer } from "@/components/Footer"
import StickyNavigationMenu from "@/components/StickyNav"
import ContactHero from "@/components/contact/ContactHero"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import OfficeLocations from "@/components/contact/OfficeLocations"
import FAQSection from "@/components/contact/FAQSection"
import MobileMenu from "@/components/MobileMenu"

export default function ContactPage() {
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
      <ContactHero />
      <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4 py-20">
        <ContactInfo />
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
      <OfficeLocations />
      <FAQSection />
      <Footer />
    </main>
  )
}