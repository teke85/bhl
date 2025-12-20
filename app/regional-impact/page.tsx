import { getRegionalImpactPageData } from "@/lib/wordpress-graphql";
import RegionalImpactHero from "@/components/regional-impact/RegionalImpactHero";
import ImpactAreas from "@/components/regional-impact/ImpactAreas";
import StrategicPositioning from "@/components/regional-impact/StrategicPositioning";
import PortOfWalvisBay from "@/components/regional-impact/PortOfWalvisBay";
import TradeOpportunities from "@/components/regional-impact/TradeOpportunities";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import Footer from "@/components/FooterUpdated";

export const metadata = {
  title: "Regional Impact",
  description:
    "Transforming trade flows and connectivity across the SADC region through strategic infrastructure development.",
};

export default async function RegionalImpactPage() {
  const data = await getRegionalImpactPageData();

  // Fallback values if WordPress data is not available
  const heroTitle = data?.heroTitle || "Regional Impact";
  const heroDescription =
    data?.heroDescription ||
    "Transforming trade flows and connectivity across the SADC region.";
  const heroBackgroundImage =
    data?.heroBackgroundImage?.node?.sourceUrl || undefined;
  const iconnames = data?.iconnames || "";
  const cardtitle = data?.cardtitle || "";
  const carddescription = data?.carddescription || "";
  const mainTitle = data?.mainTitle || "Strategic Positioning";
  const positioningtitle = data?.positioningtitle || "";
  const positioningdescription = data?.positioningdescription || "";
  const porttitle = data?.porttitle || "Port of Walvis Bay";
  const portdescription = data?.portdescription || "";
  const trademaintitle = data?.trademaintitle || "Diverse Trade Opportunities";
  const tradetitle = data?.tradetitle || "";
  const tradelistitem = data?.tradelistitem || "";

  return (
    <main className="min-h-screen">
      <StickyNavigationMenu />
      <RegionalImpactHero
        title={heroTitle}
        description={heroDescription}
        backgroundImage={heroBackgroundImage}
      />
      <ImpactAreas
        iconnames={iconnames}
        cardtitle={cardtitle}
        carddescription={carddescription}
      />
      <StrategicPositioning
        mainTitle={mainTitle}
        positioningtitle={positioningtitle}
        positioningdescription={positioningdescription}
      />
      <PortOfWalvisBay
        porttitle={porttitle}
        portdescription={portdescription}
      />
      <TradeOpportunities
        trademaintitle={trademaintitle}
        tradetitle={tradetitle}
        tradelistitem={tradelistitem}
      />
      <Footer />
    </main>
  );
}
