import type React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedChevron from "./AnimatedChevron";

const EfficientLogistics: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center py-8 md:py-0">
      <div className="container-fluid w-full mx-auto px-4 md:px-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Text Column - Left Side */}
          <div className="relative z-30 max-w-full md:max-w-full w-full md:w-auto">
            {/* Title */}
            <div className="flex flex-col md:flex-col items-start md:items-start gap-2 md:gap-4 mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-black text-white tracking-wider font-heading">
                EFFICIENT LOGISTICS
              </h2>
              <AnimatedChevron className="h-6 w-6 md:h-10 md:w-10" />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-4 text-white z-50 h-full backdrop-blur-sm p-6 md:p-12 bg-black/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-full md:max-w-2xl font-[family-name:var(--font-jost)]">
              <p className="">
                The Road also serves as a vital trade corridor, connecting
                Solwezi to Walvis Bay in Namibia. The current condition of the
                Road restricts seamless movement of goods, impacting trade
                within Zambia and potentially hindering economic ties with
                neighbouring countries such as the Congo DRC.
              </p>
              {/* Button */}
              <Button
                size="lg"
                className="bg-[#EAB81E] hover:bg-[#be9416] font-[family-name:var(--font-jost)] text-black font-bold text-sm md:text-base px-6 md:px-8 py-3 rounded-none w-full md:w-1/4"
              >
                Discover More
              </Button>
            </div>
          </div>

          {/* Image - Right Side with Overlap on Desktop */}
          <div className="relative md:-ml-12 md:-mt-18 z-10 w-full md:w-auto flex justify-center">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758715605/2_iy4t13.png"
              alt="Highway construction and infrastructure"
              width={800}
              height={256}
              className="w-full  max-w-sm md:w-4xl h-48 md:h-80 object-cover shadow-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficientLogistics;
