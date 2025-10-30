"use client";

import { useEffect, useState } from "react";

const strategicAreas = [
  {
    title: "Mineral Corridor",
    description:
      "The Mutanda–Kaoma Road is strategically positioned to enhance regional connectivity, connecting Zambia's mineral-rich Copperbelt and North-Western Provinces to the DRC's key mining regions. Traffic is primarily driven by heavy trucks transporting copper and cobalt from Zambia and the DRC.",
  },
  {
    title: "Integrated Network",
    description:
      "Designed to integrate with the proposed Lumwana–Kambimba Road, establishing a continuous transport route from Kolwezi in the DRC to Walvis Bay. Targeted for full operational readiness by 2028.",
  },
];

export default function StrategicPositioning() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Schedule the state update for after the current render
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Prevent flash of incorrect theme
  if (!mounted) {
    return (
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="h-96" />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-12 text-balance">
          Strategic Positioning
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {strategicAreas.map((area, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden dark:bg-[#1a1a1a] border border-border dark:border-white/10 hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-all duration-300 p-6"
            >
              <h3 className="text-2xl font-heading font-bold text-black dark:text-white mb-3">
                {area.title}
              </h3>
              <p className="text-black dark:text-white leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
