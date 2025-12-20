<a name="readme-top"></a>

<div align="center">
  <h1>Western Corridor Website</h1>
  <p>Official Website – Client Handover Documentation</p>
</div>

---

## 📗 Table of Contents

- [📖 Project Overview](#-project-overview)
- [🛠 Technology Stack](#-technology-stack)
- [✨ Key Features](#-key-features)
- [🚀 Live Website](#-live-website)
- [🎥 Project Walkthrough](#-project-walkthrough)
- [🧑‍💼 Client Handover Guide](#-client-handover-guide)
  - [Updating Website Content](#updating-website-content)
  - [Media & Images](#media--images)

- [💻 Developer Setup (Optional)](#-developer-setup-optional)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Project](#running-the-project)

- [📦 Deployment Notes](#-deployment-notes)
- [📝 License](#-license)

---

## 📖 Project Overview <a name="project-overview"></a>

The **Western Corridor Website** is the official digital presence of **Western Corridor Limited**, developed on behalf of **Manic Creatives**.

The website is built using a **headless architecture**, with **WordPress serving as the Content Management System (CMS)** and a **Next.js frontend** consuming content via GraphQL. This setup allows non-technical users to easily manage content while maintaining modern performance, scalability, and security standards.

This repository/package is delivered as a **handover ZIP** for ongoing maintenance and future development.

---

## 🛠 Technology Stack <a name="technology-stack"></a>

### Frontend

- Next.js
- React
- GraphQL
- Tailwind CSS (if applicable)

### CMS / Backend

- WordPress (Headless CMS)
- WPGraphQL

### Media Management

- Cloudinary

---

## ✨ Key Features <a name="key-features"></a>

- WordPress-powered content management
- GraphQL API integration using WPGraphQL
- Dynamic rendering via Next.js
- Optimized image delivery through Cloudinary
- SEO-friendly and high-performance frontend

---

## 🚀 Live Website <a name="live-website"></a>

🔗 **Production URL:**
[https://www.westerncorridorlimited.com/](https://www.westerncorridorlimited.com/)

---

## 🎥 Project Walkthrough <a name="project-walkthrough"></a>

📹 **Overview Video:**
[https://www.loom.com/share/98e3385a8dee47eeb2014bbbdc039ca3](https://www.loom.com/share/98e3385a8dee47eeb2014bbbdc039ca3)

---

## 🧑‍💼 Client Handover Guide <a name="client-handover-guide"></a>

This section is intended for **Western Corridor Limited staff** who will manage and update the website content.

### Updating Website Content <a name="updating-website-content"></a>

1. Log in to WordPress using the provided admin URL:

   ```
   https://yourwebsite.com/wp-admin
   ```

2. **Edit Pages**
   - Go to **Pages**
   - Select the page you want to update
   - Make your changes
   - Click **Update**

3. **Edit Blog Posts or News**
   - Navigate to **Posts**
   - Add a new post or edit an existing one
   - Click **Publish** or **Update**

### Media & Images <a name="media--images"></a>

- Go to **Media → Add New** to upload images or documents
- Images uploaded here can be reused across pages and posts
- For best performance, avoid uploading very large image files

> **Note:** The website frontend automatically reflects updates made in WordPress. No developer involvement is required for routine content changes.

---

## 💻 Developer Setup (Optional) <a name="developer-setup-optional"></a>

This section is only required if a developer needs to run or extend the project locally.

### Prerequisites <a name="prerequisites"></a>

- Node.js (v16 or later)
- npm
- Access to the WordPress CMS
- Access to Cloudinary account credentials

### Installation <a name="installation"></a>

1. Extract the provided ZIP file
2. Navigate into the project directory
3. Install dependencies:

```sh
npm install
```

### Environment Variables <a name="environment-variables"></a>

Create a `.env.local` file in the root directory and configure the following:

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://yourwordpresssite.com/graphql
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> **Important:** Environment variables are not included in the ZIP for security reasons and must be provided separately.

### Running the Project <a name="running-the-project"></a>

Start the development server:

```sh
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

## 📦 Deployment Notes <a name="deployment-notes"></a>

- The **frontend** can be deployed on platforms such as Vercel, Netlify, or Render
- The **WordPress CMS** should remain hosted on a WordPress-compatible hosting provider
- Ensure environment variables are configured correctly on the hosting platform

---

## 📝 License <a name="license"></a>

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
