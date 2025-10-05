"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TimelineItem {
  month: string;
  date: string;
  year?: string;
  details: string;
  arrowPosition: "above" | "below";
  showYear: boolean;
}

const TimelineMarquee = () => {
  const timelineData: TimelineItem[] = [
    {
      month: "JULY",
      date: "10",
      year: "2024",
      details:
        "Started the Mutanda-Kaoma Road Project with initial planning and site surveys.",
      arrowPosition: "above",
      showYear: true,
    },
    {
      month: "FEBRUARY",
      date: "16",
      details:
        "Submission of unsolicited proposal for the Mutanda-Kaoma Road Project",
      arrowPosition: "below",
      showYear: false,
    },
    {
      month: "JUNE",
      date: "19",
      year: "2025",
      details:
        "Major construction milestones achieved with 60% completion of the road infrastructure.",
      arrowPosition: "above",
      showYear: true,
    },
    {
      month: "SEPTEMBER",
      date: "20",
      details:
        "Final quality assurance and project review before handover to local authorities.",
      arrowPosition: "below",
      showYear: false,
    },
  ];

  const duplicatedData = [...timelineData, ...timelineData, ...timelineData];

  return (
    <TooltipProvider>
      <div className="relative w-full max-w-full mx-auto">
        {/* KEY PROJECT TIMELINES Text - Positioned like in PartnersCarousel */}
        <div className="absolute -top-10 left-8 flex flex-col z-50">
          <span className="text-3xl md:text-5xl lg:text-6xl font-black text-[#EAB81E] drop-shadow-lg font-heading">
            KEY PROJECT
          </span>
          <span className="text-3xl md:text-5xl lg:text-6xl font-black text-[#EAB81E] drop-shadow-lg font-heading">
            TIMELINES
          </span>
        </div>
        <div className="relative h-96 overflow-hidden rounded-lg">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759581302/SUSTA_hdo1em.png"
              alt="Road texture background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Marquee Content */}
          <div className="flex items-center justify-center h-full relative z-30 overflow-hidden">
            <div className="marquee-container group">
              <div className="marquee-content">
                {duplicatedData.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex flex-col items-center w-80 px-8 relative"
                  >
                    {item.arrowPosition === "above" && (
                      <div className="mb-4">
                        <Image
                          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759578733/1_mlmrsc.png"
                          alt="Arrow down"
                          width={100}
                          height={100}
                          className="drop-shadow-2xl"
                        />
                      </div>
                    )}

                    <div className="relative">
                      {item.showYear && item.year && (
                        <div className="absolute -right-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center z-10">
                          <span className="text-white text-5xl ml-15 font-bold tracking-wider drop-shadow-lg whitespace-nowrap">
                            {item.year}
                          </span>
                        </div>
                      )}

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-48 h-16 relative cursor-pointer hover:brightness-110 transition-all duration-200 rounded-sm overflow-hidden">
                            <Image
                              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759578735/5_ifzph1.png"
                              alt="Yellow road texture"
                              fill
                              className="object-cover"
                              style={{
                                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                              }}
                            />
                            <div className="flex items-center justify-center h-full relative z-10">
                              <div className="text-center">
                                <div className="text-white mr-10 text-xl font-bold tracking-wider drop-shadow-lg">
                                  {item.month} {item.date}
                                </div>
                              </div>
                            </div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          className="max-w-xs bg-gray-600 text-white border-gray-500 z-50"
                        >
                          <div className="p-3">
                            <p className="font-medium text-sm">
                              {item.details}
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </div>

                    {item.arrowPosition === "below" && (
                      <div className="mt-4 rotate-180">
                        <Image
                          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759578733/1_mlmrsc.png"
                          alt="Arrow up"
                          width={100}
                          height={100}
                          className="drop-shadow-2xl"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .marquee-container {
            width: 100%;
            overflow: hidden;
          }

          .marquee-content {
            display: flex;
            animation: marquee 40s linear infinite;
          }

          .marquee-container:hover .marquee-content {
            animation-play-state: paused;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
        `}</style>
      </div>
    </TooltipProvider>
  );
};

export default TimelineMarquee;
