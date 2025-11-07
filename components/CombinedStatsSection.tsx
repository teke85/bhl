"use client";

import ExampleComponent from "./ExampleComponent";
import ExampleComponent2 from "./ExampleComponent2";
import KeyStats from "./KeyStatsUpdated";

const CombinedStatsSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* KeyStats Section */}
        <div className="w-full">{/* <KeyStats /> */}</div>

        {/* EfficientLogistics Section */}
        <div className="w-full">
          <ExampleComponent />
        </div>

        {/* EfficientGrowthCatalyst Section */}
        <div className="w-full">
          <ExampleComponent2 />
        </div>
      </div>
    </section>
  );
};

export default CombinedStatsSection;
