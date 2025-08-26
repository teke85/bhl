"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Truck, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Direct Port Access",
    description:
      "Direct access to Walvis Bay port, reducing transport costs by 30%",
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Mining Connectivity",
    description:
      "Enhanced connectivity for mining operations in Northwestern Province",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Community Development",
    description:
      "Improved access to healthcare and education for rural communities",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Economic Growth",
    description: "Boost to regional trade with Angola, Botswana, and Namibia",
  },
];

const ProjectOverview = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Transforming Zambia&apos;s
              <span className="text-primary"> Western Corridor</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The Mutanda-Kaoma Road represents the largest infrastructure
              investment in Zambia&apos;s Western Province. This Public-Private
              Partnership will transform 371 kilometres of challenging terrain
              into a modern highway, connecting the mineral-rich Northwestern
              Province to international markets via Namibia&apos;s Walvis Bay
              port.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive approach includes not just road construction,
              but the development of supporting infrastructure including toll
              collection systems, weighbridges, and comprehensive maintenance
              programs that will ensure this vital artery serves Zambia for
              generations to come.
            </p>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Learn More About the Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
              style={{
                backgroundImage: `url('/modern-highway-construction-in-africa-with-mining-.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-12">
            Key Benefits & Impact
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
