// app/api/search/route.ts
import { NextRequest, NextResponse } from "next/server";

// Define the static pages on the site
const SITE_PAGES = [
  {
    title: "Home",
    slug: "/",
    description: "Welcome to the Western Corridor Project official website.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880457/DJI_0445_formphotoeditor.com_bb4kdl.jpg",
  },
  {
    title: "About Us",
    slug: "about",
    description: "Learn more about the Western Corridor Project and our mission.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761477016/EI3A9561DRM_bbw3jo.jpg",
  },
  {
    title: "Projects",
    slug: "projects",
    description:
      "Explore our ongoing and completed infrastructure projects and view project updates.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880457/DJI_0445_formphotoeditor.com_bb4kdl.jpg",
  },
  {
    title: "Regional Impact",
    slug: "regional-impact",
    description: "Discover how we are transforming connectivity in the region.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761799600/Kasempa_Western_ByPass-DJI_0539_qdpo3f.jpg",
  },
  {
    title: "Resettlement",
    slug: "resettlement",
    description:
      "Information about our resettlement and community support programs.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761799609/Kasempa_Western_ByPass-DJI_0533_omz2fa.jpg",
  },
  {
    title: "Our Commitment",
    slug: "commitment",
    description: "Our dedication to sustainable and inclusive development.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761799061/KasempaToll_WB_Area-DJI_0577_cs1c5k.jpg",
  },
  {
    title: "Timeline",
    slug: "timeline",
    description: "Track the progress and key milestones of the project.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880457/DJI_0445_formphotoeditor.com_bb4kdl.jpg",
  },
  {
    title: "Our Partners",
    slug: "partners",
    description: "Meet the partners and stakeholders working with us.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761477016/EI3A9561DRM_bbw3jo.jpg",
  },
  {
    title: "Gallery",
    slug: "gallery",
    description: "View photos and visual updates of our work.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880457/DJI_0445_formphotoeditor.com_bb4kdl.jpg",
  },
  {
    title: "News",
    slug: "news",
    description: "Latest project updates, press releases, and news articles.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880457/DJI_0445_formphotoeditor.com_bb4kdl.jpg",
  },
  {
    title: "Careers",
    slug: "careers",
    description: "Join our team and build the future with us.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761477016/EI3A9561DRM_bbw3jo.jpg",
  },
  {
    title: "Contact Us",
    slug: "contact",
    description: "Get in touch with the Western Corridor Project team.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1761800734/MutandaJunction_DJI_0581_zjk0pv.jpg",
  },
  {
    title: "Privacy Policy",
    slug: "privacy",
    description: "Read our privacy policy.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880457/DJI_0445_formphotoeditor.com_bb4kdl.jpg",
  },
  {
    title: "Terms of Service",
    slug: "terms",
    description: "Read our terms and conditions.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880457/DJI_0445_formphotoeditor.com_bb4kdl.jpg",
  },
  {
    title: "Cookie Policy",
    slug: "cookies",
    description: "Learn about how we use cookies.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1760880457/DJI_0445_formphotoeditor.com_bb4kdl.jpg",
  },
];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q")?.toLowerCase() || "";

    if (!query) {
      return NextResponse.json({
        posts: { nodes: [] },
        pages: { nodes: [] },
      });
    }

    // Filter pages based on the query checking title and description
    const filteredPages = SITE_PAGES.filter(
      (page) =>
        page.title.toLowerCase().includes(query) ||
        page.description.toLowerCase().includes(query)
    );

    // Map to the format expected by the frontend
    const nodes = filteredPages.map((page, index) => ({
      id: `local-page-${index}`,
      title: page.title, // Frontend likely expects HTML string based on previous mock, but plain text should work if rendered safely, or we wrap it.
      // The previous mock returned <h1>Title</h1>. Let's return plain text and see if it works, or wrap it.
      // Safer to just return the string. If the frontend uses dangerouslySetInnerHTML it will render fine, if not it will just show text.
      // actually the previous mock used `<h1>...</h1>`. Let's stick to simple strings first.
      content: `<p>${page.description}</p>`,
      slug: page.slug,
      featuredImage: {
        node: {
          sourceUrl: page.image, // Use specific page image
          altText: page.title,
        },
      },
      // Some components might expect 'excerpt' instead of content for search results
      excerpt: `<p>${page.description}</p>`,
    }));

    return NextResponse.json({
      posts: { nodes: [] }, // No posts, only pages as requested
      pages: { nodes },
    });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({
      posts: { nodes: [] },
      pages: { nodes: [] },
    });
  }
}

