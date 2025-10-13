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
    <section className="bg-[#0a0a0a] py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="border border-white/10 rounded-lg p-8 md:p-16 space-y-12">
          <h2 className="text-4xl font-heading md:text-5xl font-bold text-white">
            Project Milestones
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="space-y-3">
                <div className="text-[#fdb913] font-sans text-3xl md:text-4xl font-bold">
                  {milestone.year}
                </div>
                <p className="text-white font-sans text-base md:text-lg">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>

          <div>
            <Button
              variant="outline"
              className="bg-transparent border-white/20 text-white hover:bg-[#FDB913] hover:border-white/40 transition-all duration-300 gap-2"
              asChild
            >
              <Link href="/timeline">
                Full Project History <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMilestonesSection;
