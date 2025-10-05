"use client";
import Image from "next/image";
import BigText from "./BigText";
import { Footer } from "./Footer";
import Route from "./FastestRoute";

const CombinedCarouselBigTextSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758715424/4_bhefzk.png"
          alt="Logistics Background"
          fill
          className="object-cover"
          priority={false}
        />

        {/* Dark gradient overlay for top section */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent"
          style={{ height: "90%" }}
        />

        {/* Yellowish gradient overlay for middle and bottom sections */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(45, 40, 20, 0.65) 0%, rgba(60, 52, 25, 0.72) 30%, rgba(85, 70, 30, 0.78) 60%, rgba(110, 90, 35, 0.85) 100%)",
            top: "40%",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* KeyStats Section */}
        <div className="w-full">
          <Route />
        </div>

        {/* EfficientLogistics Section */}
        <div className="w-full">
          <BigText />
        </div>

        {/* EfficientGrowthCatalyst Section */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default CombinedCarouselBigTextSection;
