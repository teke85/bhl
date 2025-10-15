import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ExpertBuildersSection = () => {
  return (
    <section className="dark:bg-white border-b-1 border-t-1 dark:border-white/20  py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Expert Builders Card */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black">
              Expert Builders
            </h2>
            <p className="text-white font-body dark:text-black text-lg md:text-xl leading-relaxed">
              Upgrading 371 km of the Mutanda to Kaoma Road to international
              bituminous standards, completing Zambia&apos;s Western Corridor.
            </p>
            <Button
              variant="outline"
              className="bg-transparent rounded-none border-white/20 text-white hover:bg-[#FDB913] hover:border-white/40 transition-all duration-300 gap-2"
              asChild
            >
              <Link href="/project">
                View Project Details <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Regional Impact Card */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black">
              Regional Impact
            </h2>
            <p className="dark:text-black text-white font-body text-lg md:text-xl leading-relaxed">
              Creating a vital link between Zambia&apos;s Copperbelt, DRC&apos;s
              mining regions, and the Port of Walvis Bay on Africa&apos;s West
              Coast.
            </p>
            <Button
              variant="outline"
              className="bg-transparent rounded-none border-white/20 text-white hover:bg-[#FDB913] hover:border-white/40 transition-all duration-300 gap-2"
              asChild
            >
              <Link href="/regional-impact">
                Explore Regional Benefits <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertBuildersSection;
