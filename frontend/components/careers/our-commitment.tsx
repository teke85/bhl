import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const OurCommitment = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-none overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760934674/A_professional__inspiring_image_representing_a_diverse_team_of_engineers__project_managers__and_prof_1_qjqagg.png"
              alt="Our Commitment"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white font-heading mb-6 text-balance">
              We Are Constantly Seeking Great Minds. Like Yours.
            </h2>
            <p className="text-lg text-[#868584] dark:text-white font-paragraph leading-relaxed mb-8">
              Our commitment goes beyond building infrastructure. We&apos;re
              committed to building a diverse, inclusive workplace where every
              team member can thrive and contribute to Zambia&apos;s
              development.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-[#868584] dark:text-white font-paragraph">
                  Equal opportunity employer committed to diversity and
                  inclusion
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-[#868584] dark:text-white font-paragraph">
                  Competitive compensation and comprehensive benefits package
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-[#868584] dark:text-white font-paragraph">
                  Professional development and training opportunities for career
                  growth
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-[#868584] dark:text-white font-paragraph">
                  Work-life balance with flexible working arrangements
                </p>
              </div>
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
