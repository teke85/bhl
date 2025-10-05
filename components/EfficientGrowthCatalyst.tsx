import type React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const EconomicGrowthCatalyst: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center py-8 md:py-0">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Image - Left Side with Overlap on Desktop */}
          <div className="relative md:-mr-12 md:-mt-48 z-20 w-full md:w-auto flex justify-center order-2 md:order-1">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758715610/7_rk8wwz.png"
              alt="Modern bridge infrastructure"
              width={384}
              height={256}
              className="w-full max-w-sm md:w-96 h-48 md:h-64 object-cover shadow-2xl"
            />
          </div>

          {/* Text Column - Right Side */}
          <div className="relative z-30 max-w-full md:max-w-2xl w-full md:w-auto order-1 md:order-2">
            {/* Title */}
            <div className="flex flex-col md:flex-row items-start md:items-center md:justify-end gap-2 md:gap-4 mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-black text-white tracking-wider text-left md:text-right font-heading">
                ECONOMIC GROWTH CATALYST
              </h2>
              <ChevronDown className="h-6 w-6 md:h-8 md:w-8 text-black" />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-4 text-left bg-black/80 backdrop-blur-sm p-6 md:p-12 md:text-right mb-6 font-[family-name:var(--font-jost)] md:mb-8">
              <p className="text-white text-left text-base md:text-lg leading-relaxed mb-4 md:mb-6 font-sans">
                The project is expected to significantly contribute to economic
                growth in both Western and Northwestern provinces, and
                ultimately translate to improved welfare for the country.
              </p>

              <p className="text-left text-white">
                The primary beneficiaries of the Mutanda to Kaoma road
                rehabilitation and construction project include the mining
                industry, businesses, regional trade, local communities, the
                Government, and the transportation sector. The Project&apos;s
                services aim to create a positive impact on various
                stakeholders, fostering economic development and regional
                connectivity.
              </p>
              <Button
                size="lg"
                className="bg-[#EAB81E] hover:bg-[#be9416] text-black font-bold text-sm md:text-base px-6 md:px-8 py-3 rounded-none w-full md:w-1/4 font-[family-name:var(--font-jost)]"
              >
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicGrowthCatalyst;
