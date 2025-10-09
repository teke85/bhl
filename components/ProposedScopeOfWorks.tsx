import type React from "react";
import Image from "next/image";
import AnimatedChevron from "./AnimatedChevron";

// Define the interface for scope items
interface ScopeItem {
  id: number;
  text: string;
}

interface ProposedScopeProps {
  items: ScopeItem[];
  imageUrl: string;
  imageAlt: string;
}

const ProposedScope: React.FC<ProposedScopeProps> = ({
  items,
  imageUrl,
  imageAlt,
}) => {
  return (
    <section className="relative bg-black min-h-screen overflow-hidden flex items-center justify-center py-8 md:py-0">
      <div className="container-fluid w-full mx-auto px-4 md:px-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Text Column - Left Side */}
          <div className="relative z-30 max-w-full md:max-w-full w-full md:w-auto">
            {/* Title */}
            <div className="flex flex-col md:flex-row items-start mb-6 md:mb-8">
              <h2 className="text-2xl font-heading md:text-4xl lg:text-6xl tracking-tight font-black text-white">
                PROPOSED
                <br /> SCOPE OF WORKS
              </h2>
              <AnimatedChevron className="h-6 rotate-270 w-6 md:h-10 md:w-10 -ml-1 md:-ml-35" />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-4 text-white z-50 h-full backdrop-blur-sm p-6 md:py-12 bg-[#3D3D3D] text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-full md:max-w-2xl font-[family-name:var(--font-jost)]">
              <ul className="list-disc list-inside space-y-3 md:space-y-4 font-[family-name:var(--font-jost)]">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="text-white mr-3 mt-1.5 flex-shrink-0 font-sans"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image - Right Side with Overlap on Desktop */}
          <div className="relative md:-ml-12 md:-mt-85 z-30 w-full md:w-auto flex justify-center">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={800}
              height={256}
              className="w-full max-w-sm md:w-4xl h-48 md:h-80 object-cover shadow-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposedScope;
