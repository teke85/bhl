"use client";

import { useEffect, useState } from "react";
import { stripHtml } from "@/lib/wordpress-graphql";

interface PortOfWalvisBayProps {
  porttitle: string;
  portdescription: string;
}

export default function PortOfWalvisBay({
  porttitle,
  portdescription,
}: PortOfWalvisBayProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const parseHtmlParagraphs = (html: string): string[] => {
    if (!html) return [];
    const matches = html.match(/<p>([^<]*)<\/p>/g);
    if (matches && matches.length > 0) {
      return matches.map((match) => stripHtml(match).trim()).filter(Boolean);
    }
    return [stripHtml(html)];
  };

  const descriptions = portdescription
    ? parseHtmlParagraphs(portdescription)
    : [
        "Recognized as one of the most efficient, secure, and high-performing ports within the SADC region.",
        "The Western Corridor Limited provides direct access to this world-class facility, significantly reducing transport times and costs for regional exports. This strategic connection positions the corridor as a critical gateway for SADC trade.",
      ];

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
    <section className="w-full py-16 md:py-24 bg-card dark:bg-[#1a1a1a] border-y border-border dark:border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-6 text-balance">
            {porttitle || "Port of Walvis Bay"}
          </h2>
          {descriptions.map((desc, index) => (
            <p
              key={index}
              className="text-lg text-muted-foreground dark:text-gray-400 mb-4 leading-relaxed last:mb-0"
            >
              {desc}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
