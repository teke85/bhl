import Image from "next/image";
import { Card } from "@/components/ui/card";

export const WorkEnvironment = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            We All Work in This Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our collaborative work environment fosters innovation, teamwork, and
            excellence across all our projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden border-border group">
            <div className="relative h-[300px]">
              <Image
                src="/modern-office-workspace-in-lusaka.jpg"
                alt="BHL Offices"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Modern Workspaces
              </h3>
              <p className="text-sm text-muted-foreground">
                State-of-the-art offices designed for collaboration and
                productivity.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden border-border group">
            <div className="relative h-[300px]">
              <Image
                src="/team-meeting-discussing-infrastructure-plans.jpg"
                alt="Team Collaboration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Collaborative Culture
              </h3>
              <p className="text-sm text-muted-foreground">
                Work alongside talented professionals from diverse backgrounds.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden border-border group">
            <div className="relative h-[300px]">
              <Image
                src="/team-building-activity-outdoors-in-zambia.jpg"
                alt="Team Building"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Team Building
              </h3>
              <p className="text-sm text-muted-foreground">
                Regular activities and events that strengthen our team bonds.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
