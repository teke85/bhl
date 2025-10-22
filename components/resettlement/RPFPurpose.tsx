"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RPFPurpose() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
              The Project has developed a Resettlement Policy Framework (RPF)
              that outlines the process for implementing the Barotse
              Resettlement Policy throughout the Project. It guides the
              preparation of Resettlement Action Plans (RAPs) for locations
              where land acquisition or displacement occurs. The RPF establishes
              principles, procedures, and an institutional framework for
              conducting resettlement activities under the Barotse project, and
              it serves as the foundation for preparing operational instruments,
              including multiple RAPs, abbreviated Resettlement Plans, and
              Livelihood Restoration Plans. A Resettlement Framework applies in
              cases where:
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
