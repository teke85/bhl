import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface OurCommitmentProps {
  title?: string;
  description?: string;
  items?: string[];
}

export const OurCommitment = ({
  title = "We Are Constantly Seeking Great Minds. Like Yours.",
  description = "Our commitment goes beyond building infrastructure. We're committed to building a diverse, inclusive workplace where every team member can thrive and contribute to Zambia's development.",
  items = [
    "Equal opportunity employer committed to diversity and inclusion",
    "Competitive compensation and comprehensive benefits package",
    "Professional development and training opportunities for career growth",
    "Work-life balance with flexible working arrangements",
  ],
}: OurCommitmentProps) => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white font-heading mb-6 text-balance">
              {title}
            </h2>
            <div
              className="text-lg text-[#868584] dark:text-white font-paragraph leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="space-y-4 mb-8">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-[#868584] dark:text-white font-paragraph">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
