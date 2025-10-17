"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const strategicAreas = [
  {
    title: "Mineral Corridor",
    description:
      "The Mutanda–Kaoma Road is strategically positioned to enhance regional connectivity, connecting Zambia's mineral-rich Copperbelt and North-Western Provinces to the DRC's key mining regions. Traffic is primarily driven by heavy trucks transporting copper and cobalt from Zambia and the DRC.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760690492/20251017_1036_Zambia_Highway_Convoy_simple_compose_01k7rmwzxpej3sv0mbcn2exc80_byhcr3.png",
  },
  {
    title: "Integrated Network",
    description:
      "Designed to integrate with the proposed Lumwana–Kambimba Road, establishing a continuous transport route from Kolwezi in the DRC to Walvis Bay. Targeted for full operational readiness by 2028.",
    image:
      "https://images.unsplash.com/photo-1581092162562-40038f56c239?w=600&h=400&fit=crop",
  },
];

export default function StrategicPositioning() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-12 text-balance">
          Strategic Positioning
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {strategicAreas.map((area, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden dark:bg-[#1a1a1a] border border-border dark:border-white/10 hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={area.image || "/placeholder.svg"}
                  alt="Background"
                  fill
                  sizes="100vw"
                  priority
                  quality={90}
                  placeholder="blur"
                  blurDataURL="https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_10,e_blur:1000,w_10/v1759918204/DJI_0565_10000_gb099t.jpg"
                  className="object-cover scale-110"
                />
                <div
                  className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/40" : "bg-white/30"}`}
                ></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-black dark:text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-black dark:text-white leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
