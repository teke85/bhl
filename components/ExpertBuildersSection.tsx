import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ExpertBuildersSection = () => {
  return (
    <section className="bg-white dark:bg-black py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Expert Builders Card */}
          <div className="space-y-6">
            <h2 className="text-4xl uppercase md:text-6xl font-bold text-black dark:text-white">
              Expert Builders
            </h2>
            <p className="text-black font-body dark:text-white text-lg md:text-xl leading-relaxed">
              Upgrading 371 km of the Mutanda to Kaoma Road to international
              bituminous standards, completing Zambia&apos;s Western Corridor.
            </p>
            <Button
              className="font-body text-lg  border-white/20 text-white dark:text-black bg-[#fdb913] rounded-none hover:bg-[#fdb913]/90 transition-all duration-300 gap-2"
              asChild
            >
              <Link href="/project">
                View Project Details <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Regional Impact Card */}
          <div className="space-y-6">
            <h2 className="text-4xl uppercase md:text-6xl font-bold text-black dark:text-white">
              Regional Impact
            </h2>
            <p className="text-black dark:text-white font-body text-lg md:text-xl leading-relaxed">
              Creating a vital link between Zambia&apos;s Copperbelt, DRC&apos;s
              mining regions, and the Port of Walvis Bay on Africa&apos;s West
              Coast.
            </p>
            <Button
              className="bg-[#fdb913] font-body text-lg rounded-none border-white/20 text-white dark:text-black hover:bg-[#fdb913]/90 hover:border-white/40 transition-all duration-300 gap-2"
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
