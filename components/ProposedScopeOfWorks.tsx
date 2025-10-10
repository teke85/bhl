import type React from "react";
import Image from "next/image";
import AnimatedChevron from "./AnimatedChevron";

const ProposedScope: React.FC = () => {
  // All your data is now self-contained here
  const scopeData = {
    items: [
      { id: 1, text: "Project funding" },
      { id: 2, text: "Feasibility Studies and Design" },
      { id: 3, text: "371 km of Road Construction/Rehabilitation" },
      { id: 4, text: "Construction of 3 No. Toll Plaza" },
      { id: 5, text: "Construction of 2 weighbridges on the Road" },
      { id: 6, text: "Provision of traffic and toll management systems" },
      {
        id: 7,
        text: "Provision of Environmental Impact Assessment (EIA) studies",
      },
      { id: 8, text: "Resettlement Action Plan" },
      { id: 9, text: "Operations and Maintenance" },
    ],
    images: {
      first:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1759688770/DJI_0521_q55ort.jpg",
      second:
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760053175/DJI_0524_10000_jhze1c.jpg",
      alt: "Road construction and infrastructure development",
    },
  };

  return (
    <section className="relative bg-black min-h-screen overflow-hidden flex items-center justify-center py-8 md:py-0">
      <div className="container-fluid w-full mx-auto px-4 md:px-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Text Column - Left Side */}
          <div className="relative z-30 max-w-full md:max-w-full w-full md:w-auto">
            {/* Title */}
            <div className="flex flex-col md:flex-row items-start mb-6 md:mb-8">
              <h2 className="text-2xl font-extrabold font-heading md:text-4xl lg:text-6xl tracking-tight text-white">
                PROPOSED
                <br /> SCOPE OF WORKS
              </h2>
              <AnimatedChevron className="h-6 rotate-270 w-6 md:h-10 md:w-10 -ml-1 md:-ml-35" />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-4 text-white h-full backdrop-blur-sm p-6 md:py-12 bg-[#3D3D3D] text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-full md:max-w-2xl font-[family-name:var(--font-jost)]">
              <ul className="list-disc list-inside space-y-3 md:space-y-4 font-sans">
                {scopeData.items.map((item) => (
                  <li
                    key={item.id}
                    className="text-white mr-3 mt-1.5 flex-shrink-0 font-sans"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Image (First image) */}
            <div className="absolute bottom-20 -right-100 z-50 w-full md:w-auto flex justify-center">
              <Image
                src={scopeData.images.first}
                alt={`${scopeData.images.alt} - Image 1`}
                width={800}
                height={256}
                className="w-full max-w-sm md:w-4xl h-48 md:h-80 object-cover shadow-3xl"
              />
            </div>
          </div>

          {/* Right Image (Second image) */}
          <div className="relative md:-ml-4 md:-mt-85 z-20 w-full md:w-auto flex justify-center">
            <Image
              src={scopeData.images.second}
              alt={`${scopeData.images.alt} - Image 2`}
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
