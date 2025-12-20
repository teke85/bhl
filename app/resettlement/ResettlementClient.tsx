"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";

interface ResettlementClientProps {
    data: {
        heroTitle: string;
        heroDescription: string;
        heroBackgroundImageUrl?: string;
        purposeStatement: string;
        leftcolumntitle: string;
        rightcolumnimageUrl: string;
        mainTitle: string;
        scenarios: Array<{
            title: string;
            items: string[];
        }>;
        principles: Array<{
            number: string;
            title: string;
            description: string;
        }>;
        communitytitle: string;
        communitydescription: string;
    };
}

export default function ResettlementClient({ data }: ResettlementClientProps) {
    const { theme } = useTheme();

    return (
        <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
            {/* Header Navigation */}
            <StickyNavigationMenu />

            {/* Hero Section */}
            <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src={data.heroBackgroundImageUrl || "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761799609/Kasempa_Western_ByPass-DJI_0533_omz2fa.jpg"}
                        alt="Kasempa Western Bypass aerial view"
                        fill
                        priority
                        loading="eager"
                        sizes="100vw"
                        className="object-cover object-center opacity-40"
                    />
                </div>
                <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center pt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        {data.heroTitle}
                    </motion.h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        {data.heroDescription}
                    </p>
                </div>
            </section>

            {/* RPF Purpose Section */}
            <section className="py-16 md:py-24 bg-card dark:bg-[#1a1a1a]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 text-balance">
                                {data.leftcolumntitle}
                            </h2>
                            <p className="text-lg text-foreground dark:text-white mb-6">
                                {data.purposeStatement}
                            </p>
                            <p className="text-base text-muted-foreground dark:text-gray-300">
                                This framework ensures that all affected persons are treated
                                fairly, with their rights protected and their livelihoods
                                restored or improved compared to pre-project conditions.
                            </p>
                        </div>
                        <div className="relative h-96 rounded-lg overflow-hidden">
                            <Image
                                src={data.rightcolumnimageUrl || "/placeholder.svg"}
                                alt="Community consultation"
                                className="w-full h-full object-cover"
                                width={600}
                                height={400}
                            />
                            <div
                                className={`absolute inset-0 ${theme === "dark" ? "bg-[#0a0a0a]/20" : "bg-white/10"}`}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Applies Section */}
            <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-12 text-balance">
                        {data.mainTitle}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {data.scenarios.map((scenario, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-lg bg-muted dark:bg-[#1a1a1a] border border-border dark:border-white/10"
                            >
                                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-6">
                                    {scenario.title}
                                </h3>
                                <ul className="space-y-4">
                                    {scenario.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex gap-4">
                                            <span className="text-[#fdb913] font-bold text-lg shrink-0">
                                                •
                                            </span>
                                            <span className="text-muted-foreground dark:text-gray-300">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Principles Section */}
            <section className="py-16 md:py-24 bg-muted dark:bg-[#1a1a1a]">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-12 text-balance">
                        Key Principles of Resettlement Planning
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.principles.map((principle, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-lg bg-card dark:bg-[#0a0a0a] border border-border dark:border-white/10 hover:border-[#fdb913] dark:hover:border-[#fdb913] transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#fdb913] flex items-center justify-center shrink-0">
                                        <span className="text-black font-bold text-lg">
                                            {principle.number}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground dark:text-white mb-2">
                                            {principle.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Engagement Section */}
            <section className="py-20 bg-background dark:bg-[#0a0a0a]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-6 text-foreground dark:text-white"
                    >
                        {data.communitytitle}
                    </motion.h2>
                    <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
                        {data.communitydescription}
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
