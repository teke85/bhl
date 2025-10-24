"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RegionalConnectivity() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-between items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-6 text-balance">
              Regional Connectivity Hub
            </h2>
            <p className="text-lg text-black dark:text-white font-body mb-8 leading-relaxed">
              The Road also serves as a vital trade corridor, connecting Solwezi
              to Walvis Bay in Namibia. The current condition of the Road
              restricts seamless movement of goods, impacting trade within
              Zambia and potentially hindering economic ties with neighbouring
              countries such as the Congo DRC. The Road will serve as a gateway
              for trade with Angola, Botswana, Namibia and the Western half of
              the world. The benefits already being noted, the Road will provide
              the means for economic growth for both Western and Northwestern
              provinces. While the Project, as planned, acknowledges that
              traffic will still use the alternative routes for access to
              international ports like Durban and Dar es Salaam, there is an
              expected diversion through the new&quot; route to Walvis Bay
              through Kaoma.
            </p>

            <div className="space-y-5">
              {[
                "Enhance Regional Connectivity",
                "Foster economic cooperation and development",
                "Benefit the local community and the country in terms of mining, tourism, agriculture, fish trade, timber production, delivery of social services and reduced vehicle operating costs",
                "Enables cross-border commerce",
                "Provide the fastest route between the mineral-rich Provinces of the Copperbelt and Northwestern in Zambia and the Democratic Republic of Congo to the West Coast Regions of Africa",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#fdb913] mt-2 flex-shrink-0"></div>
                  <span className="text-base text-foreground dark:text-white leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full w-[60%] mx-auto rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760688925/assets_task_01k7rhvvv0edyswpv0an4gz514_1760687005_img_1_wxsqvq.webp"
              alt="Regional connectivity map"
              className="w-full h-full object-cover"
              priority
              fill
            />
            <div
              className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/30" : "bg-white/20"}`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
