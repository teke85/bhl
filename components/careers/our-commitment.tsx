import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const OurCommitment = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/zambian-landscape-with-highway-construction-progre.jpg"
              alt="Our Commitment"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              We Are Constantly Seeking Great Minds. Like Yours.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our commitment goes beyond building infrastructure. We&apos;re
              committed to building a diverse, inclusive workplace where every
              team member can thrive and contribute to Zambia&apos;s
              development.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Equal opportunity employer committed to diversity and
                  inclusion
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Competitive compensation and comprehensive benefits package
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Professional development and training opportunities for career
                  growth
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
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
