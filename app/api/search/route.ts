// app/api/search/route.ts - Minimal working version
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q") || "";

    // Always return successful response with mock data
    const mockData = {
      posts: {
        nodes: query
          ? [
              {
                id: "1",
                title: `<h2>Gallery Updates</h2>`,
                excerpt: `<p>Check out our latest gallery updates featuring project progress photos for ${query}.</p>`,
                slug: "gallery-updates",
                date: new Date().toISOString(),
                featuredImage: {
                  node: {
                    sourceUrl:
                      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761708103/westerncorridor_logo_bih0jh.png",
                    altText: "Gallery",
                  },
                },
              },
              {
                id: "2",
                title: `<h2>Project News about ${query}</h2>`,
                excerpt: `<p>Latest news about the Western Corridor project related to ${query}.</p>`,
                slug: "project-news",
                date: new Date().toISOString(),
                featuredImage: {
                  node: {
                    sourceUrl:
                      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761481328/EI3A9529DRM_exisuy.jpg",
                    altText: "Project",
                  },
                },
              },
            ]
          : [],
      },
      pages: {
        nodes: query
          ? [
              {
                id: "3",
                title: `<h1>About ${query}</h1>`,
                content: `<p>Learn more about ${query} on our website.</p>`,
                slug: "about-topic",
                featuredImage: {
                  node: {
                    sourceUrl:
                      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761481327/EI3A9515DRM_yzoiit.jpg",
                    altText: "About",
                  },
                },
              },
            ]
          : [],
      },
    };

    return NextResponse.json(mockData);
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({
      posts: { nodes: [] },
      pages: { nodes: [] },
    });
  }
}

// Test endpoint to verify API is working
export async function POST() {
  return NextResponse.json({ message: "Search API is working" });
}
