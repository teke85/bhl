import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ProjectMilestonesSection = () => {
  const milestones = [
    {
      year: "2018",
      description: "Maintenance contract initiated",
    },
    {
      year: "Dec 2024",
      description: "Concession agreement signed",
    },
    {
      year: "2025",
      description: "Financial close target",
    },
  ];

  return (
    <section className="bg-white dark:bg-black py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="border border-gray-200 rounded-lg p-8 md:p-16 space-y-12">
          <h2 className="text-4xl font-heading md:text-5xl font-bold text-black dark:text-white">
            Project Milestones
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="space-y-3">
                <div className="text-[#fdb913] font-bdy dark:text-[#fdb913] text-3xl md:text-4xl font-bold">
                  {milestone.year}
                </div>
                <p className="font-body text-black dark:text-white text-base md:text-lg">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>

          <div>
            <Button
              className="bg-[#fdb913] font-body rounded-none border-white/20 text-black dark:text-white hover:bg-[#FDB913] hover:border-white/40 transition-all duration-300 gap-2"
              asChild
            >
              <Link href="/timeline">
                Full Project History{" "}
                <ArrowRight className="h-4 w-4 text-black dark:text-white" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMilestonesSection;
