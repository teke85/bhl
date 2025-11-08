"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TimelineCardProps {
  date: string;
  year: string;
  tooltip?: string;
  arrow?: "up" | "down";
}

const TimelineCard = ({
  date,
  year,
  tooltip,
  arrow = "down",
}: TimelineCardProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative flex flex-col items-center justify-center group cursor-pointer">
            {/* Arrow */}
            <div
              className={`relative w-10 h-60 mb-2 ${
                arrow === "up" ? "rotate-180 mt-4" : "mb-4"
              }`}
            >
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759578735/5_ifzph1.png"
                alt="arrow"
                fill
                className="object-contain"
                sizes="30px"
              />
            </div>

            {/* Yellow Strip */}
            <div className="relative w-40 h-50 flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1759578733/1_mlmrsc.png"
                alt="yellow stripe"
                fill
                className="object-cover"
                sizes="160px"
              />
              <span className="absolute text-white font-bold text-lg tracking-wide">
                {date}
              </span>
            </div>

            {/* Year (rotated on the side) */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 rotate-90">
              <span className="text-white text-xl font-semibold">{year}</span>
            </div>
          </div>
        </TooltipTrigger>

        {/* Tooltip on hover */}
        {tooltip && (
          <TooltipContent
            side="top"
            className="bg-gray-700 text-white max-w-xs text-center p-4 rounded-md shadow-xl"
          >
            {tooltip}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default TimelineCard;
