import KeyStatsUpdated from "@/components/KeyStatsUpdated"
import HighlightsSection from "@/components/HighlightsSection"
import {
  getHomePageData,
  parseKeyStats,
  parseCommunityPoints,
  parsePartnerLogos,
  parseHighlights,
  parseProjectMilestones,
  stripHtml,
} from "@/lib/wordpress-graphql"
import CommunityFirstSection from "@/components/CommunityFirst"
import ProjectMilestonesSection from "@/components/ProjectMilestones"
import PartnersCarousel from "@/components/OurPartners"
import Footer from "@/components/FooterUpdated"
import HeroCarousel from "@/components/HeroSection3RightLeft"
import ScrollTriggeredSection from "@/components/ScrollTriggeredSection"
import SectionWrapper from "@/components/SectionWrapper"
import ExpertBuildersSection from "@/components/ExpertBuildersSection"
import VideoHeroSection from "@/components/BigVideoComponent"

export default async function HomePage() {
  const data = await getHomePageData()
  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-muted-foreground">Unable to load page data Kindly Connect to Internet</p>
      </div>
    )
  }

  // Parse WordPress data if available
  const keyStats = data ? parseKeyStats(data) : []
  const communityPoints = data ? parseCommunityPoints(data) : []
  const partnerLogos = data ? parsePartnerLogos(data) : []
  const highlights = data ? parseHighlights(data) : []
  const milestones = data ? parseProjectMilestones(data) : []

  const scrollItems = [
    {
      title:
        stripHtml(data.sectionTitle)
          ?.replace(/,\s*REGIONAL\s+CONNECTIVITY,\s*COMMUNITY\s+IMPACT/gi, "")
          .replace(/\s+and\s+/gi, " ")
          .trim() || "INFRASTRUCTURE EXCELLENCE",
      description: stripHtml(data.description) || "",
      imageUrl: data.sectionImage?.node?.sourceUrl || "/placeholder.svg",
    },
    {
      title: "REGIONAL CONNECTIVITY",
      description:
        "The Western Corridor Project is a strategic infrastructure initiative that significantly enhances regional connectivity by linking Zambia's mineral-rich Copperbelt and North-Western Provinces with the West Coast of Africa via Walvis Bay in Namibia.",
      imageUrl:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_auto,w_1920,c_limit/v1762947095/DJI_0711_wiuokv.jpg",
    },
    {
      title: "COMMUNITY IMPACT",
      description:
        "Empowering local communities through inclusive development and collaboration. The Western Corridor leadership, in partnership with traditional leaders across four districts, is ensuring that the Mutanda–Kaoma Road benefits every household along its route.",
      imageUrl:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_auto,w_1920,c_limit/v1761107765/EI3A9507DRM_emgog7.jpg",
    },
  ]

  // Transform partner logos to match component interface
  const partners = partnerLogos.map((logo) => ({
    id: logo.id,
    name: logo.name,
    logo: logo.url,
  }))

  return (
    <main className="min-h-screen bg-black">
      <div className="w-full max-w-full mx-auto">
        <HeroCarousel
          title={stripHtml(data.heroTitle)}
          subtitle={stripHtml(data.heroDescription)}
          backgroundImage={data.heroBackgroundImage?.node?.sourceUrl || "/placeholder.svg"}
          videoUrl={data.heroBackgroundVideo?.node?.sourceUrl}
          scrollingText={stripHtml(data.scrollingText)}
          button1Text={stripHtml(data.button1Text)}
          button1Link={data.button1Link || "#"}
          button2Text={stripHtml(data.button2Text)}
          button2Link={data.button2Link || "#"}
        />
        {/* Key Stats Section */}
        <KeyStatsUpdated
          stats={keyStats.length > 0 ? keyStats : undefined}
          mainTitle={data?.keystatsmaintitle ? stripHtml(data.keystatsmaintitle) : "OUR KEY STATS"}
        />

        <SectionWrapper>
          <ScrollTriggeredSection items={scrollItems} />
        </SectionWrapper>

        <SectionWrapper className="overflow-x-hidden">
          <ExpertBuildersSection
            expertTitle={
              stripHtml(data.expertbuildersSectionTitle)
                ?.replace(/\s+and\s+Regional\s+Impact\.?/gi, "")
                .trim() || "EXPERT BUILDERS"
            }
            expertDescription={stripHtml(data.expertbuildersDescription)}
            expertButton1Text={stripHtml(data.expertbuildersButton1Text)}
            expertButton1Link={data.expertBuildersButton1Link || "/projects"}
            regionalTitle="Regional Impact"
            regionalDescription={stripHtml(data.expertbuildersDescription)}
            regionalButton2Text={stripHtml(data.expertbuildersButton2Text)}
            regionalButton2Link={data.expertBuildersButton2Link || "/regional-impact"}
          />
        </SectionWrapper>

        <ProjectMilestonesSection
          milestones={milestones.length > 0 ? milestones : undefined}
          buttonText={data?.projectMilestonesButtonText ? stripHtml(data.projectMilestonesButtonText) : undefined}
          buttonLink={data?.projectMilestonesButtonLink || undefined}
        />

        {/* Community First Section */}
        <CommunityFirstSection
          title={data?.communityfirstSectionTitle ? stripHtml(data.communityfirstSectionTitle) : undefined}
          paragraph={data?.sectionParagraph ? stripHtml(data.sectionParagraph) : undefined}
          buttonText={data?.ctaButtonText ? stripHtml(data.ctaButtonText) : undefined}
          buttonLink={data?.ctaButtonLink || undefined}
          points={communityPoints.length > 0 ? communityPoints : undefined}
        />

        <SectionWrapper>
          <VideoHeroSection />
        </SectionWrapper>

        {/* Highlights Section */}
        <HighlightsSection highlights={highlights.length > 0 ? highlights : undefined} />

        {/* Partners Carousel */}
        <PartnersCarousel
          title={data?.partnersTitle ? stripHtml(data.partnersTitle) : undefined}
          subtitle={data?.partnersSubtitle ? stripHtml(data.partnersSubtitle) : undefined}
          description={data?.partnersDescription ? stripHtml(data.partnersDescription) : undefined}
          partners={partners.length > 0 ? partners : undefined}
          buttonText={data?.ctaButtonTextReadmore ? stripHtml(data.ctaButtonTextReadmore) : undefined}
          buttonLink={data?.ctaButtonLinkReadmore || undefined}
        />
        <Footer />
      </div>
    </main>
  )
}
