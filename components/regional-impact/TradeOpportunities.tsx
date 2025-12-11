"use client";

import { parseTradeListItems } from "@/lib/wordpress-graphql";

interface TradeOpportunitiesProps {
  trademaintitle: string;
  tradetitle: string;
  tradelistitem: string;
}

export default function TradeOpportunities({
  trademaintitle,
  tradetitle,
  tradelistitem,
}: TradeOpportunitiesProps) {
  const allItems = tradelistitem
    ? parseTradeListItems(tradelistitem)
    : [
        "Copper",
        "Cobalt",
        "Precious Metals",
        "Grains",
        "Livestock",
        "Processed foods",
        "Industrial goods",
        "Textiles",
        "Electronics",
        "Regional travel",
        "Business tourism",
        "Adventure tourism",
      ];

  const categories = [
    {
      name: "Minerals",
      icon: "⛏️",
      items: allItems.filter((item) =>
        ["Copper", "Cobalt", "Precious Metals", "Precious metals"].includes(
          item
        )
      ),
    },
    {
      name: "Agriculture",
      icon: "🌾",
      items: allItems.filter((item) =>
        ["Grains", "Livestock", "Processed foods"].includes(item)
      ),
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      items: allItems.filter((item) =>
        ["Industrial goods", "Textiles", "Electronics"].includes(item)
      ),
    },
    {
      name: "Tourism",
      icon: "✈️",
      items: allItems.filter((item) =>
        ["Regional travel", "Business tourism", "Adventure tourism"].includes(
          item
        )
      ),
    },
  ].filter((cat) => cat.items.length > 0);

  const hasCategories =
    categories.length > 0 && categories.some((cat) => cat.items.length > 0);

  return (
    <section className="w-full py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-4 text-balance">
          {trademaintitle || "Diverse Trade Opportunities"}
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-semibold text-[#fdb913] mb-12">
          {tradetitle || "Minerals, Agriculture, Manufacturing and Tourism"}
        </h3>

        {hasCategories ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-colors"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h4 className="text-xl font-heading font-bold text-foreground dark:text-white mb-3">
                  {category.name}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-muted-foreground dark:text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fdb913]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            {allItems.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 text-muted-foreground dark:text-gray-400"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
