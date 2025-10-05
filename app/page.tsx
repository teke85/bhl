"use client";

import BigText from "@/components/BigText";
import CombinedStatsSection from "@/components/CombinedStatsSection";
import EfficientGrowthCatalyst from "@/components/EfficientGrowthCatalyst";
import EfficientLogistics from "@/components/EfficientLogistics";
import Route from "@/components/FastestRoute";
import { Footer } from "@/components/Footer";
import HeroCarousel from "@/components/HeroSection2";

import KeyStats from "@/components/KeyStats";
import OurPartners from "@/components/OurPartners";
import TimelineMarquee from "@/components/TimeLineMarquee";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroCarousel />
      <CombinedStatsSection />
      {/* <LogoCarousel /> */}
      {/* <KeyStats /> */}
      {/* <StatsSection /> */}
      {/* <EfficientLogistics /> */}
      {/* <EfficientGrowthCatalyst /> */}
      <TimelineMarquee />
      <OurPartners />
      {/* <BigText /> */}
      {/* <ProjectOverview /> */}
      {/* <StrategicImportance /> */}
      {/* <TimelineSection /> */}
      {/* Combined section with unified gradient background */}
      <div className="relative w-full">
        {/* Unified gradient background - DARK at top (carousel), LIGHT at bottom (footer) */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, rgba(10, 10, 8, 0.80) 15%, rgba(20, 18, 12, 0.75) 30%, rgba(30, 28, 18, 0.70) 45%, rgba(40, 35, 22, 0.60) 60%, rgba(60, 50, 28, 0.50) 75%, rgba(100, 80, 35, 0.35) 88%, rgba(150, 120, 45, 0.20) 100%)"
          }}
        />

        {/* Background image for footer section - more visible at bottom */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dzqxnnayn/image/upload/v1759583550/IMG-20251004-WA0008_zeo1u5.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            // Make it fade in from top to bottom
            maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,1) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,1) 100%)"
          }}
        />

        <div className="relative z-10">
          <Route />
          <Footer />
        </div>
      </div>
    </main>
  );
}
