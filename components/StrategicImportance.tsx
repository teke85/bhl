"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const StrategicImportance = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#E7E9EB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl font-[family-name:var(--font-jost)] mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Strategic Impact
          </Badge>

          <h2 className="text-3xl lg:text-4xl font-[family-name:var(--font-playfair)] font-bold text-card-foreground mb-6">
            Gateway to Economic Growth
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The Mutanda-Kaoma Road is more than infrastructure – it&#39;s
            economic transformation. By providing the fastest route from
            Zambia&apos;s Copperbelt to West Coast ports, we&apos;re opening new
            possibilities for trade, tourism, and community development.
          </p>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            This project will serve as the primary corridor for copper, cobalt,
            and other mineral exports, while simultaneously enabling the import
            of goods and services essential for regional development.
          </p>

          {/* Map Visualization */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div
                className="aspect-[16/9] w-full"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dpeg7wc34/image/upload/v1756193625/map-of-zambia-showing-mutanda-kaoma-road-route-con_oshdzc.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      Regional Connectivity
                    </h3>
                    <p className="text-sm opacity-90">
                      Connecting Zambia&apos;s mineral wealth to international
                      markets
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StrategicImportance;
