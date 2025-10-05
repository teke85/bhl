"use client";

import BigText from "@/components/BigText";
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
      {/* <LogoCarousel /> */}
      <KeyStats />
      {/* <StatsSection /> */}
      <EfficientLogistics />
      <EfficientGrowthCatalyst />
      <TimelineMarquee />
      <OurPartners />
      <Route />
      {/* <BigText /> */}
      {/* <ProjectOverview /> */}
      {/* <StrategicImportance /> */}
      {/* <TimelineSection /> */}
      <Footer />
    </main>
  );
}
