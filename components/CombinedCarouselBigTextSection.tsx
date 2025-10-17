"use client";
import Image from "next/image";
import BigText from "./BigText";
import { Footer } from "./Footer";
import HighlightsSection from "./HighlightsSection";
// import Route from "./FastestRoute";

const CombinedCarouselBigTextSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10">
        {/* KeyStats Section */}
        <div className="w-full">
          <HighlightsSection />
        </div>

        {/* EfficientLogistics Section */}
        {/* <div className="w-full">
          <BigText />
        </div> */}

        {/* EfficientGrowthCatalyst Section */}
        {/* <div className="w-full">
          <Footer />
        </div> */}
      </div>
    </section>
  );
};

export default CombinedCarouselBigTextSection;
