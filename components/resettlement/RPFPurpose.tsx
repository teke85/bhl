"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RPFPurpose() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16 md:py-24 bg-card dark:bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-6 text-balance">
              Purpose of the RPF
            </h2>
            <p className="text-lg text-black dark:text-white mb-6">
              The Resettlement Policy Framework (RPF) outlines the process for
              implementing the BEL-TC Resettlement Policy and guides the
              preparation of Resettlement Action Plans (RAPs) where land
              acquisition or displacement occurs.
            </p>
            <p className="text-base text-black dark:text-white">
              This framework ensures that all affected persons are treated
              fairly, with their rights protected and their livelihoods restored
              or improved compared to pre-project conditions.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760716202/Professional_infographic_illustration_showing_a_resettlement_policy_framework_document_with_intercon_1_tt6cxm.png"
              alt="Community consultation"
              className="w-full h-full object-cover"
              width={600}
              height={400}
              objectFit="cover"
            />
            <div
              className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/20" : "bg-white/10"}`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
