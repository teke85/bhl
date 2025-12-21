<a name="readme-top"></a>

<div align="center">
  <img src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1761708103/westerncorridor_logo_bih0jh.png" alt="Logo" width="120">
  <h1 style="color: #DCAF0E;">Western Corridor Limited</h1>
  <p><strong>Official Infrastructure Initiative Website</strong></p>
  <p>Connecting Communities | Driving Economic Growth | Zambia</p>
</div>

---

## 📗 Table of Contents

- [📖 Project Overview](#-project-overview)
- [🛠 Technology Stack](#-technology-stack)
- [🏗 Folder Structure](#-folder-structure)
- [✨ Key Features](#-key-features)
- [🚀 Live Website](#-live-website)
- [🧑‍💼 Maintenance Guide (Non-Technical)](#-maintenance-guide-non-technical)
- [💻 Developer Guide (Technical)](#-developer-guide-technical)
  - [Updating Navigation](#updating-navigation)
  - [Updating Footer](#updating-footer)
- [📦 Deployment](#-deployment)
- [📝 License](#-license)

---

## 📖 Project Overview <a name="project-overview"></a>

The **Western Corridor Website** is the official digital presence for the **Mutanda–Kaoma Road Project**. This strategic initiative enhances regional connectivity by linking Zambia's Copperbelt and North-Western Provinces with the West Coast of Africa via Walvis Bay in Namibia.

Built with a **Headless CMS architecture**, the site combines the flexibility of **WordPress** with the modern performance of **Next.js**.

---

## 🛠 Technology Stack <a name="technology-stack"></a>

- **Frontend:** Next.js (App Router), React, Tailwind CSS, Framer Motion, GSAP
- **CMS:** Headless WordPress via [WPGraphQL](https://www.wpgraphql.com/)
- **Media:** [Cloudinary](https://cloudinary.com/) (Optimized image delivery)
- **Icons:** Lucide React
- **Fonts:** Montserrat, Open Sans, Inter (Google Fonts)

---

## 🏗 Folder Structure <a name="folder-structure"></a>

```text
/app             - Next.js App Router (Pages and Layouts)
/components      - Reusable UI Components
  /ui            - Radix-based UI Primitives
  /home          - Home-page specific components
  /about         - About-page specific components
/lib             - Utility functions and GraphQL queries
/public          - Static assets (favicons, fonts)
```

---

## ✨ Key Features <a name="key-features"></a>

- **Dynamic Content:** Managed entirely through WordPress.
- **SEO Optimized:** Automatic sitemap generation and controlled indexing.
- **Bilingual Layouts:** Support for dark and light modes.
- **Performance:** optimized with Next.js Image component and Cloudinary.
- **Interactive Timeline:** Visual representation of project milestones.

---

## 🚀 Live Website <a name="live-website"></a>

🔗 **Production URL:** [https://www.westerncorridorlimited.com/](https://www.westerncorridorlimited.com/)

---

## 🧑‍💼 Maintenance Guide (Non-Technical) <a name="maintenance-guide-non-technical"></a>

### Updating Content (WordPress)
1. Log in to your WordPress dashboard.
2. Navigate to **Pages** to update text, images, and SEO metadata.
3. Use **Posts** (News Category) to add new articles to the News section.
4. **Media Library:** Upload images directly to WordPress; they are automatically optimized via Cloudinary.

---

## 💻 Developer Guide (Technical) <a name="developer-guide-technical"></a>

### Updating Navigation <a name="updating-navigation"></a>
To add or remove links from the main navigation menu, edit:
`components/StickyNavUpdated.tsx`

Search for the `menuData` object. It is organized by categories:
```typescript
const menuData = {
  COMPANY: { ... },
  PROJECT: { ... },
  // Add new links here
};
```

### Updating Footer <a name="updating-footer"></a>
To update footer links or resources, edit:
`components/FooterUpdated.tsx`

Update the `quickLinks`, `resources`, or `legal` arrays:
```typescript
const quickLinks = [
  { href: "/about", label: "About Us" },
  // ...
];
```

### Prerequisites
- Node.js (v18+)
- WordPress instance with WPGraphQL plugin installed

### Installation
```sh
npm install
cp .env.example .env.local  # Configure your API keys
npm run dev
```

---

## 📦 Deployment <a name="deployment"></a>

The site is optimized for deployment on **Vercel**. 
1. Push your changes to GitHub/GitLab.
2. Connect the repository to Vercel.
3. Configure Environment Variables (WordPress URL, Cloudinary Keys).
4. Deploy.

---

## 📝 License <a name="license"></a>

Managed by **Manic Creatives** for **Western Corridor Limited**. All rights reserved.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
