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
        {/* Unified gradient background - DARK at top (carousel), BRIGHT YELLOW at bottom (footer) */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, rgba(10, 10, 8, 0.78) 15%, rgba(20, 18, 12, 0.70) 30%, rgba(35, 30, 18, 0.60) 45%, rgba(60, 50, 22, 0.45) 60%, rgba(100, 85, 30, 0.25) 75%, rgba(160, 130, 40, 0.12) 88%, rgba(200, 165, 55, 0.05) 95%, transparent 100%)"
          }}
        />

        {/* Strong yellow overlay at the bottom */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, transparent 65%, rgba(150, 120, 30, 0.20) 78%, rgba(180, 145, 40, 0.35) 88%, rgba(200, 165, 50, 0.50) 95%, rgba(220, 185, 60, 0.65) 100%)"
          }}
        />

        {/* Background image for footer section - more visible at bottom */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dzqxnnayn/image/upload/v1759583550/IMG-20251004-WA0008_zeo1u5.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.6,
            maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%)"
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