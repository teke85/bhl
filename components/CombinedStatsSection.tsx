"use client";
import Image from "next/image";
import KeyStats from "./KeyStats";
import EfficientLogistics from "./EfficientLogistics";
import EfficientGrowthCatalyst from "./EfficientGrowthCatalyst";

const CombinedStatsSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759608279/3_b3nlji.png"
          alt="Logistics Background"
          fill
          className="object-cover"
          priority={false}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* KeyStats Section */}
        <div className="w-full">
          <KeyStats />
        </div>

        {/* EfficientLogistics Section */}
        <div className="w-full">
          <EfficientLogistics />
        </div>

        {/* EfficientGrowthCatalyst Section */}
        <div className="w-full">
          <EfficientGrowthCatalyst />
        </div>
      </div>
    </section>
  );
};

export default CombinedStatsSection;
