"use client";

import { TrendingUp, Truck, Zap, Coins, type LucideIcon } from "lucide-react";
import { parseHtmlRepeatableField } from "@/lib/wordpress-graphql";

// Icon mapping based on icon names from WordPress
const iconMap: Record<string, LucideIcon> = {
  TrendingUp: TrendingUp,
  Truck: Truck,
  Zap: Zap,
  Coins: Coins,
  "trending-up": TrendingUp,
  truck: Truck,
  zap: Zap,
  coins: Coins,
};

interface ImpactAreasProps {
  iconnames: string;
  cardtitle: string;
  carddescription: string;
}

export default function ImpactAreas({
  iconnames,
  cardtitle,
  carddescription,
}: ImpactAreasProps) {
  const icons = iconnames
    ? parseHtmlRepeatableField(iconnames)
    : ["TrendingUp", "Truck", "Zap", "Coins"];
  const titles = cardtitle
    ? parseHtmlRepeatableField(cardtitle)
    : ["Critical Link", "West Coast Access", "Efficiency", "Trade Drivers"];
  const descriptions = carddescription
    ? parseHtmlRepeatableField(carddescription)
    : [
        "Connects mineral-rich regions to key ports",
        "Direct route to Walvis Bay, Namibia",
        "Faster alternative to congested routes",
        "Copper, cobalt, agriculture, and tourism",
      ];

  // Build the impact areas array
  const impactAreas = titles.map((title, index) => ({
    icon: iconMap[icons[index]] || TrendingUp,
    title,
    description: descriptions[index] || "",
  }));

  return (
    <section className="w-full py-16 md:py-24 bg-background dark:bg-[#0a0a0a] border-b border-border dark:border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-[#fdb913]/20 dark:bg-[#fdb913]/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-[#fdb913]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-black dark:text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-[#868584] dark:text-white font-paragraph">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
