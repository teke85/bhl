import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "News & Media | Western Corridor Limited",
    description: "Stay updated with the latest news, announcements, and project milestones from Western Corridor Limited.",
};

export default function NewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
