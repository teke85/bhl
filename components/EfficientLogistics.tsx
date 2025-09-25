import type React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const EfficientLogistics: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center py-8 md:py-0">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Text Column - Left Side */}
          <div className="relative z-30 max-w-full md:max-w-2xl w-full md:w-auto">
            {/* Title */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-black text-black tracking-wider font-[family-name:var(--font-outfit)]">
                EFFICIENT LOGISTICS
              </h2>
              <ChevronDown className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>

            {/* Description */}
            <p className="text-white z-50 h-44 backdrop-blur-sm p-6 md:p-4 bg-black/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-full md:max-w-xl font-[family-name:var(--font-jost)]">
              Advanced construction techniques and modern infrastructure
              development ensure sustainable and efficient transportation
              networks. Our comprehensive approach integrates cutting-edge
              technology with environmental considerations to deliver
              world-class road systems.
            </p>

            {/* Button */}
            <Button
              size="lg"
              className="bg-[#EAB81E] hover:bg-[#be9416] font-[family-name:var(--font-jost)] text-black font-bold text-sm md:text-base px-6 md:px-8 py-3 rounded-none w-full md:w-auto"
            >
              Discover More
            </Button>
          </div>

          {/* Image - Right Side with Overlap on Desktop */}
          <div className="relative md:-ml-12 md:mt-16 z-10 w-full md:w-auto flex justify-center">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758715605/2_iy4t13.png"
              alt="Highway construction and infrastructure"
              width={584}
              height={256}
              className="w-full max-w-sm md:w-96 h-48 md:h-80 object-cover shadow-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficientLogistics;
