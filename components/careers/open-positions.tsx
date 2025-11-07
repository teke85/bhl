import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const OpenPositions = () => {
  const positions = [
    {
      title: "Senior Civil Engineer",
      location: "Lusaka, Zambia",
      department: "Engineering",
    },
    {
      title: "Project Coordinator",
      location: "Mongu, Zambia",
      department: "Project Management",
    },
    {
      title: "Environmental Specialist",
      location: "Western Province, Zambia",
      department: "Environmental & Social",
    },
    {
      title: "Financial Analyst",
      location: "Lusaka, Zambia",
      department: "Finance",
    },
    {
      title: "Construction Supervisor",
      location: "Senanga, Zambia",
      department: "Construction",
    },
    {
      title: "Community Liaison Officer",
      location: "Sesheke, Zambia",
      department: "Community Relations",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-black lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white font-heading mb-4">
            There&apos;s Room for More. Join Us!
          </h2>
          <p className="text-[#868584] dark:text-white font-paragraph max-w-2xl mx-auto mb-8">
            Explore our current openings and find the perfect role to advance
            your career in infrastructure development.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 bg-transparent text-black dark:text-white"
          >
            View All Positions on LinkedIn
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-colors group"
            >
              <div className="mb-4">
                <div className="text-sm text-primary font-medium mb-2">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white font-heading mb-2 group-hover:text-primary transition-colors">
                  {position.title}
                </h3>
                <p className="text-sm text-[#868584] dark:text-white font-paragraph mb-1">
                  {position.location}
                </p>
                <p className="text-sm text-[#868584] dark:text-white font-paragraph">
                  {position.department}
                </p>
              </div>
              <Button
                variant="ghost"
                className="w-full gap-2 group-hover:bg-primary/10"
              >
                View Job Details
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
