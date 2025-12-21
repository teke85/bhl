"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Users, Leaf, TrendingUp, Heart, Target } from "lucide-react";
import StickyNavigationMenu from "@/components/StickyNavUpdated";
import { Footer } from "@/components/FooterUpdated";
import { useState, useEffect } from "react";

// ============================================
// Types
// ============================================
interface CommitmentData {
    title: string;
    heroTitle: string;
    heroDescription: string;
    commitmentStatement: string;
    itemTitles: string;
    itemDescriptions: string;
    mainTitle: string;
    keyPrincipleTitles: string;
    keyPrincipleDescriptions: string;
    impactQuote: string;
    impactAuthor: string;
    accountabilityMainTitle: string;
    accountabilitysubtitle: string;
    accountabilityitemstitle: string;
    accountabilityitemssubtitle: string;
    ctatitle: string;
    ctadescription: string;
    button1Text: string;
    button1Link: string;
    button2text: string;
    button2link: string;
}

// ============================================
// Helper Functions (duplicated for simplicity in client component)
// ============================================
function stripHtmlTags(html: string): string {
    if (!html) return "";
    return html
        .replace(/<[^>]*>/g, "")
        .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number.parseInt(dec, 10)))
        .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(Number.parseInt(hex, 16)))
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&rsquo;/g, "'")
        .replace(/&lsquo;/g, "'")
        .replace(/&rdquo;/g, '"')
        .replace(/&ldquo;/g, '"')
        .replace(/&ndash;/g, "–")
        .replace(/&mdash;/g, "—")
        .trim();
}

function parseRepeatableField(field: string | null | undefined): string[] {
    if (!field) return [];
    if (field.includes("<li>")) {
        const liMatches = field.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
        if (liMatches) return liMatches.map((li) => stripHtmlTags(li)).filter(Boolean);
    }
    if (field.includes("<p>")) {
        const pMatches = field.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
        if (pMatches) return pMatches.map((p) => stripHtmlTags(p)).filter(Boolean);
    }
    const cleanField = stripHtmlTags(field);
    if (cleanField.includes("|")) return cleanField.split("|").map(s => s.trim()).filter(Boolean);
    if (cleanField.includes("\n")) return cleanField.split("\n").map(s => s.trim()).filter(Boolean);
    return [cleanField.trim()].filter(Boolean);
}

function cleanTextField(field: string | null | undefined): string {
    if (!field) return "";
    return stripHtmlTags(field);
}

const iconMap = [Shield, Target, Users, Leaf, TrendingUp, Heart];
const colorMap = [
    "text-blue-500", "text-green-500", "text-purple-500",
    "text-emerald-500", "text-orange-500", "text-red-500"
];

export default function CommitmentClient({ data }: { data: CommitmentData | null }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const commitmentItemTitles = parseRepeatableField(data?.itemTitles);
    const commitmentItemDescriptions = parseRepeatableField(data?.itemDescriptions);
    const keyPrincipleTitles = parseRepeatableField(data?.keyPrincipleTitles);
    const keyPrincipleDescriptions = parseRepeatableField(data?.keyPrincipleDescriptions);
    const accountabilityTitles = parseRepeatableField(data?.accountabilityitemstitle);
    const accountabilityDescriptions = parseRepeatableField(data?.accountabilityitemssubtitle);

    const commitments = commitmentItemTitles.map((title, index) => ({
        icon: iconMap[index % iconMap.length],
        title,
        description: commitmentItemDescriptions[index] || "",
        color: colorMap[index % colorMap.length],
    }));

    const principles = keyPrincipleTitles.map((title, index) => ({
        title,
        description: keyPrincipleDescriptions[index] || "",
    }));

    const accountabilities = accountabilityTitles.map((title, index) => ({
        title,
        description: accountabilityDescriptions[index] || "",
    }));

    const heroTitle = cleanTextField(data?.heroTitle) || "Our Commitment";
    const heroDescription = cleanTextField(data?.heroDescription) || "Building a corridor of opportunity, sustainability, and shared prosperity for Zambia and the region";
    const commitmentStatement = cleanTextField(data?.commitmentStatement) || "We are committed to delivering the Western Corridor Project as a transformative infrastructure initiative that strengthens Zambia's regional connectivity, economic resilience, and social equity.";
    const mainTitle = cleanTextField(data?.mainTitle) || "Guiding Principles";
    const impactQuote = cleanTextField(data?.impactQuote) || "Our commitment is to not only construct a road, but to create a corridor of opportunity, sustainability, and shared prosperity for Zambia and the region.";
    const impactAuthor = cleanTextField(data?.impactAuthor) || "Western Corridor Limited";
    const accountabilityMainTitle = cleanTextField(data?.accountabilityMainTitle) || "Accountability & Transparency";
    const accountabilitySubtitle = cleanTextField(data?.accountabilitysubtitle) || "We maintain the highest standards of governance and reporting";
    const ctaTitle = cleanTextField(data?.ctatitle) || "Learn More About Our Impact";
    const ctaDescription = cleanTextField(data?.ctadescription) || "Discover how we are making a difference across the Western Corridor";
    const button1Text = cleanTextField(data?.button1Text) || "Regional Impact";
    const button1Link = data?.button1Link || "/regional-impact";
    const button2Text = cleanTextField(data?.button2text) || "Resettlement Framework";
    const button2Link = data?.button2link || "/resettlement";

    return (
        <main className="min-h-screen bg-background dark:bg-[#0a0a0a]">
            <StickyNavigationMenu />
            <section className="relative w-full py-20 md:py-32 overflow-hidden bg-background dark:bg-[#0a0a0a]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1761799061/KasempaToll_WB_Area-DJI_0577_cs1c5k.jpg"
                        alt="Our Commitment"
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/70 dark:bg-black/80" />
                </div>
                <div className="container mx-auto px-4 relative z-10 pt-20">
                    <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading">{heroTitle}</h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-paragraph">{heroDescription}</p>
                    </motion.div>
                </div>
            </section>
            <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
                <div className="container mx-auto px-4">
                    <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <p className="text-lg md:text-xl text-muted-foreground dark:text-white leading-relaxed mb-8 font-paragraph">{commitmentStatement}</p>
                    </motion.div>
                </div>
            </section>
            {commitments.length > 0 && (
                <section className="py-16 bg-card dark:bg-[#1a1a1a]">
                    <div className="container mx-auto px-4">
                        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            {commitments.map((commitment, index) => {
                                const Icon = commitment.icon;
                                return (
                                    <motion.div key={index} className="bg-background dark:bg-[#0a0a0a] p-6 rounded-lg border border-border dark:border-white/10 hover:border-[#fdb913] transition-all duration-300 hover:shadow-lg" variants={itemVariants}>
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`${commitment.color} shrink-0`}><Icon className="h-8 w-8" /></div>
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground dark:text-white mb-2 font-heading">{commitment.title}</h3>
                                                <p className="text-[#868584] dark:text-gray-300 leading-relaxed font-paragraph">{commitment.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>
            )}
            {principles.length > 0 && (
                <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
                    <div className="container mx-auto px-4">
                        <motion.div className="max-w-6xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground dark:text-white mb-12 font-heading">{mainTitle}</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {principles.map((principle, index) => (
                                    <motion.div key={index} className="flex items-start gap-4 p-6 bg-card dark:bg-[#1a1a1a] rounded-lg border border-border dark:border-white/10" initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                                        <div className="w-2 h-2 rounded-full bg-[#fdb913] mt-2 shrink-0"></div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2 font-heading">{principle.title}</h3>
                                            <p className="text-[#868584] dark:text-gray-300 font-paragraph">{principle.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}
            <section className="py-16 bg-[#fdb913]/10 dark:bg-[#fdb913]/5">
                <div className="container mx-auto px-4">
                    <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <blockquote className="text-2xl md:text-3xl font-bold text-foreground dark:text-white mb-6 italic font-heading">&quot;{impactQuote}&quot;</blockquote>
                        <p className="text-lg text-[#868584] dark:text-gray-300 font-paragraph">— {impactAuthor}</p>
                    </motion.div>
                </div>
            </section>
            {accountabilities.length > 0 && (
                <section className="py-16 md:py-24 bg-background dark:bg-[#0a0a0a]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4 font-heading">{accountabilityMainTitle}</h2>
                                <p className="text-lg text-[#868584] dark:text-gray-300 font-paragraph">{accountabilitySubtitle}</p>
                            </motion.div>
                            <motion.div className="space-y-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                                {accountabilities.map((item, index) => (
                                    <div key={index} className="p-6 bg-card dark:bg-[#1a1a1a] rounded-lg border border-border dark:border-white/10">
                                        <h3 className="text-xl font-semibold text-foreground dark:text-white mb-3 font-heading">{item.title}</h3>
                                        <p className="text-[#868584] dark:text-gray-300 font-paragraph">{item.description}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}
            <section className="py-16 bg-card dark:bg-[#1a1a1a]">
                <div className="container mx-auto px-4">
                    <motion.div className="max-w-3xl mx-auto text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white mb-4 font-heading">{ctaTitle}</h2>
                        <p className="text-lg text-[#868584] dark:text-gray-300 mb-8 font-paragraph">{ctaDescription}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href={button1Link} className="px-8 py-3 bg-[#fdb913] text-black font-semibold rounded-lg hover:bg-[#fdb913]/90 transition-colors font-paragraph">{button1Text}</a>
                            <a href={button2Link} className="px-8 py-3 bg-transparent border-2 border-[#fdb913] text-[#fdb913] font-semibold rounded-lg hover:bg-[#fdb913]/10 transition-colors font-paragraph">{button2Text}</a>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
