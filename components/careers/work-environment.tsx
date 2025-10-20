import Image from "next/image";
import { Card } from "@/components/ui/card";

export const WorkEnvironment = () => {
  return (
    <section className="py-16 bg-white dark:bg-black lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
            We All Work in This Together
          </h2>
          <p className="text-muted-foreground dark:text-white max-w-2xl mx-auto">
            Our collaborative work environment fosters innovation, teamwork, and
            excellence across all our projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden border-border group">
            <div className="relative h-[300px]">
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760934049/An_image_of_simple_yet_corporate_looking_office_spaces_in_Zambia__po7uxf.png"
                alt="BHL Offices"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-black dark:text-white mb-2">
                Modern Workspaces
              </h3>
              <p className="text-sm text-muted-foreground dark:text-white">
                State-of-the-art offices designed for collaboration and
                productivity.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden border-border group">
            <div className="relative h-[300px]">
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760933868/An_image_of_black_and_a_few_white_Zambian_employees_in_a_team_meeting_discussing_infrastructure_plan_ieqzdz.png"
                alt="Team Collaboration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-black dark:text-white mb-2">
                Collaborative Culture
              </h3>
              <p className="text-sm text-muted-foreground dark:text-white">
                Work alongside talented professionals from diverse backgrounds.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden border-border group">
            <div className="relative h-[300px]">
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1760933563/An_image_of_black_Zambian_employees_performing_regular_team_building_activities__o44nam.png"
                alt="Team Building"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-black dark:text-white mb-2">
                Team Building
              </h3>
              <p className="text-sm text-muted-foreground dark:text-white">
                Regular activities and events that strengthen our team bonds.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
