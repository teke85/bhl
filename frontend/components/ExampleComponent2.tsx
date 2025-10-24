import type React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedChevron from "./AnimatedChevron";

const EfficientLogistics: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-8 md:py-0 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          {/* Left Column: Text */}
          <div className="flex flex-col items-start gap-6 text-white">
            <p className="text-base md:text-lg leading-relaxed font-[family-name:var(--font-jost)] bg-black/70 p-6 md:p-8 rounded-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
              quibusdam atque. Veritatis deserunt nihil fuga fugit quam,
              consequuntur rem numquam cumque ab praesentium vel sunt laboriosam
              tempora magni. Quod quaerat explicabo odit autem, quos est ullam
              illo earum beatae, fugiat quasi perspiciatis tempore natus
              molestias vero quam atque voluptates! Consequatur tempora pariatur
              praesentium velit fuga assumenda, a vel consequuntur ullam soluta!
              Delectus voluptates et alias, natus quidem incidunt quibusdam
              cupiditate quos animi. Necessitatibus debitis deleniti molestias
              id, sapiente reiciendis in quae fuga officiis explicabo alias
              velit eum ut dolor numquam magni qui suscipit? Iusto voluptatem ut
              natus blanditiis praesentium quia.
            </p>

            <Button
              size="lg"
              className="bg-[#EAB81E] pl-10 hover:bg-[#be9416] md:ml-8 font-sans text-black font-bold text-sm md:text-base px-6 md:px-8 py-3 rounded-none"
            >
              Discover More
            </Button>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1758715605/2_iy4t13.png"
              alt="Highway construction and infrastructure"
              width={800}
              height={256}
              className="w-full max-w-lg md:max-w-xl h-auto object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EfficientLogistics;
