"use client";
import HighlightsSection from "./HighlightsSection";

const CombinedCarouselBigTextSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10">
        {/* KeyStats Section */}
        <div className="w-full">
          <HighlightsSection />
        </div>
      </div>
    </section>
  );
};

export default CombinedCarouselBigTextSection;
