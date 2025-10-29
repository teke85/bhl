import RegionalImpactHero from "@/components/regional-impact/RegionalImpactHero";
import ImpactAreas from "@/components/regional-impact/ImpactAreas";
import StrategicPositioning from "@/components/regional-impact/StrategicPositioning";
import PortOfWalvisBay from "@/components/regional-impact/PortOfWalvisBay";
import TradeOpportunities from "@/components/regional-impact/TradeOpportunities";
// import EconomicBenefits from "@/components/regional-impact/EconomicBenefits";
// import RegionalConnectivity from "@/components/regional-impact/ProjectScopeHistory";
import { Footer } from "@/components/FooterUpdated";
import StickyNavigationMenu from "@/components/StickyNavUpdated";

const RegionalImpactPage = () => {
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
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {/* <RegionalImpactHero /> */}
      <ImpactAreas />
      <StrategicPositioning />
      <PortOfWalvisBay />
      <TradeOpportunities />
      {/* <EconomicBenefits /> */}
      {/* <RegionalConnectivity /> */}
      <Footer />
    </main>
  );
};

export default RegionalImpactPage;
