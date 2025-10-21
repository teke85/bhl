"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PortOfWalvisBay() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full py-16 md:py-24 bg-card dark:bg-[#1a1a1a] border-y border-border dark:border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760689576/20251017_1016_Port_of_Walvis_Bay_simple_compose_01k7rkra1rf2ttc55zz04kntm1_ejhyfz.png"
              alt="Background"
              fill
              sizes="100vw"
              priority // loads early for above-the-fold content
              quality={75}
              placeholder="blur"
              blurDataURL="https://res.cloudinary.com/dpeg7wc34/image/upload/f_auto,q_10,e_blur:1000,w_10/v1759918204/DJI_0565_10000_gb099t.jpg"
              className="object-cover scale-110"
            />
            <div
              className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/30" : "bg-white/20"}`}
            ></div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-6 text-balance">
              Port of Walvis Bay
            </h2>
            <p className="text-lg text-muted-foreground dark:text-gray-400 mb-4 leading-relaxed">
              Recognized as one of the most efficient, secure, and
              high-performing ports within the SADC region.
            </p>
            <p className="text-muted-foreground dark:text-gray-400 leading-relaxed">
              The Barotse Highway provides direct access to this world-class
              facility, significantly reducing transport times and costs for
              regional exports. This strategic connection positions the corridor
              as a critical gateway for SADC trade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
