export const siteConfig = {
  name: "Barotse Highway Limited",
  description:
    "Barotse Highway Limited - A 371km expressway connecting Mutanda to Kaoma, enhancing regional trade and connectivity in Zambia. Connecting Zambia's rich mineral resources to the world.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://barotsehighway.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/BarotseHighway",
    linkedin: "https://linkedin.com/company/barotse-highway-limited",
    facebook: "https://facebook.com/BarotseHighway",
  },
  contact: {
    email: "info@barotsehighway.com",
    phone: "+260 123 456 789",
    address: "Cairo Road, Lusaka, Zambia",
  },
};

export type SiteConfig = typeof siteConfig;

// Page-specific metadata configurations
export const pageMetadata = {
  home: {
    title: "Home - Connecting Zambia's Future",
    description:
      "Barotse Highway Limited is developing a 371km expressway from Mutanda to Kaoma, transforming regional connectivity and trade in Zambia.",
    keywords: [
      "Barotse Highway",
      "Zambia infrastructure",
      "expressway development",
      "regional connectivity",
    ],
  },
  about: {
    title: "About Us - Our Vision & Mission",
    description:
      "Learn about Barotse Highway Limited, a joint venture between BeefCo Holdings and First Quantum Minerals, dedicated to transforming Zambia's infrastructure.",
    keywords: [
      "about Barotse Highway",
      "company history",
      "infrastructure development",
      "Zambian companies",
    ],
  },
  projects: {
    title: "Our Projects - 371km Highway Development",
    description:
      "Explore the Barotse Highway project: 371km of road construction, toll plazas, weighbridges, and sustainable infrastructure development.",
    keywords: [
      "highway project",
      "road construction",
      "infrastructure projects",
      "toll road",
    ],
  },
  news: {
    title: "Latest News & Updates",
    description:
      "Stay updated with the latest news, project milestones, and developments from Barotse Highway Limited.",
    keywords: [
      "Barotse Highway news",
      "project updates",
      "infrastructure news",
      "Zambia development",
    ],
  },
  gallery: {
    title: "Project Gallery - Photos & Videos",
    description:
      "View photos and videos showcasing the progress and impact of the Barotse Highway project across Zambia.",
    keywords: [
      "project gallery",
      "construction photos",
      "infrastructure images",
      "project progress",
    ],
  },
  careers: {
    title: "Careers - Join Our Team",
    description:
      "Explore career opportunities at Barotse Highway Limited. Join us in building Zambia's future infrastructure.",
    keywords: [
      "careers Zambia",
      "infrastructure jobs",
      "engineering careers",
      "job opportunities",
    ],
  },
  contact: {
    title: "Contact Us - Get in Touch",
    description:
      "Contact Barotse Highway Limited for inquiries, partnerships, or general information about our projects.",
    keywords: [
      "contact Barotse Highway",
      "get in touch",
      "project inquiries",
      "partnerships",
    ],
  },
  regionalImpact: {
    title: "Regional Impact - Transforming Connectivity",
    description:
      "Discover how the Barotse Highway is enhancing regional trade, connectivity, and economic development across Southern Africa.",
    keywords: [
      "regional impact",
      "trade corridor",
      "economic development",
      "Walvis Bay corridor",
    ],
  },
  resettlement: {
    title: "Resettlement Policy Framework",
    description:
      "Learn about our comprehensive resettlement policy framework ensuring fair treatment and support for affected communities.",
    keywords: [
      "resettlement policy",
      "community engagement",
      "social responsibility",
      "land acquisition",
    ],
  },
  partners: {
    title: "Our Partners - Strategic Collaborations",
    description:
      "Meet our strategic partners and stakeholders contributing to the success of the Barotse Highway project.",
    keywords: [
      "project partners",
      "strategic partnerships",
      "stakeholders",
      "collaborations",
    ],
  },
};
