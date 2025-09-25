import type React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const EconomicGrowthCatalyst: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center py-8 md:py-0">
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
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-black text-black tracking-wider text-left md:text-right font-[family-name:var(--font-outfit)]">
                ECONOMIC GROWTH CATALYST
              </h2>
              <ChevronDown className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>

            {/* Description */}
            <div className="text-left bg-black/80 backdrop-blur-sm p-6 md:p-12 md:text-right mb-6 font-[family-name:var(--font-jost)] md:mb-8">
              <p className="text-white text-base md:text-lg leading-relaxed mb-4 md:mb-6 font-[family-name:var(--font-jost)]">
                Infrastructure development serves as a catalyst for sustainable
                economic growth, creating opportunities for communities and
                businesses alike. Our projects are designed to enhance
                connectivity and promote regional development.
              </p>

              <p className="text-white text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-[family-name:var(--font-jost)]">
                Through strategic infrastructure investments, we bridge
                communities, facilitate trade, and foster economic prosperity.
                Our comprehensive approach ensures long-term value creation for
                all stakeholders while maintaining environmental sustainability.
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-start md:justify-end">
              <Button
                size="lg"
                className="bg-[#EAB81E] hover:bg-[#be9416] text-black font-bold text-sm md:text-base px-6 md:px-8 py-3 rounded-none w-full md:w-auto font-[family-name:var(--font-jost)]"
              >
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Title */}
      <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 z-20">
        <h3 className="text-2xl font-[family-name:var(--font-outift)] md:text-4xl lg:text-6xl font-black text-[#EAB81E] tracking-wider">
          KEY PROJECT
          <br />
          TIMELINES
        </h3>
      </div>
    </section>
  );
};

export default EconomicGrowthCatalyst;
