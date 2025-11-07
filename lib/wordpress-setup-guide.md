# WordPress Setup Guide for Next.js Integration

## Prerequisites

- WordPress installed (locally via LocalWP or on a hosting provider)
- Admin access to WordPress dashboard

## Step 1: Install Required Plugins

### 1. WPGraphQL Plugin

1. Go to WordPress Admin → Plugins → Add New
2. Search for "WPGraphQL"
3. Click "Install Now" then "Activate"
4. Verify GraphQL endpoint at: `yoursite.com/graphql`

### 2. WPGraphQL for ACF (Advanced Custom Fields)

- Install & activate "WPGraphQL for Advanced Custom Fields (ACF)"
- This enables custom field support in GraphQL queries

### 3. CORS Configuration (if needed)

- Install "Access Control Allow Origin Header"
- Or configure CORS in your Next.js headers

## Step 2: Configure WordPress Settings

### Permalinks

1. Go to Settings → Permalinks
2. Select "Post name" (not Default)
3. Save changes

### Create Custom Taxonomies (if using ACF)

1. Go to Custom Fields → Field Groups
2. Create field group "Gallery Images" with:
   - Field: Images (Image array)
   - Field: Category (Select/Taxonomy)

## Step 3: Data Structure Setup

### Create Categories

1. Posts → Categories
2. Create these categories:
   - **Gallery** (parent category for gallery items)
     - Chilombo River Bridge
     - Landscape
     - Community
     - Equipment
   - **News** (for blog posts)
   - **Projects** (optional for project pages)

### Media & Images

1. Upload all images to WordPress Media Library
2. Organize into folders:
   - Gallery Images
   - News/Blog Images
   - Featured Images

### Add Gallery Posts

1. Posts → Add New
2. Title: Gallery item name (e.g., "Chilombo River Bridge Construction")
3. Featured Image: Upload main image
4. Category: Select relevant gallery category
5. Content: Add description
6. ACF Fields:
   - Add multiple images to "Gallery Images" field
   - Set category (Chilombo, Landscape, etc.)
7. Publish

### Add News Posts

1. Posts → Add New
2. Title: Article title
3. Featured Image: Article cover image
4. Category: Select "News"
5. Content: Full article content
6. Additional Fields:
   - Author: Automatically set
   - Date: Auto-populated
7. Publish

## Step 4: Set Environment Variables

Create `.env.local` in your Next.js project:

\`\`\`
NEXT_PUBLIC_WORDPRESS_API_URL=http://yoursite.com/graphql
\`\`\`

## Step 5: Test Your Setup

1. Visit: `http://yoursite.com/graphql`
2. Try query:
   \`\`\`graphql
   query GetGalleryItems {
   posts(where: { categoryName: "chilombo" }, first: 10) {
   nodes {
   id
   title
   featuredImage {
   node {
   sourceUrl
   }
   }
   }
   }
   }
   \`\`\`

## Step 6: Data Population Checklist

**For Gallery Page:**

- [ ] Create "Gallery" parent category
- [ ] Create gallery subcategories (Chilombo, Landscape, Community, Equipment)
- [ ] Upload 12+ gallery images to Media Library
- [ ] Create gallery posts with:
  - [ ] Title (image name)
  - [ ] Featured Image
  - [ ] Category assignment
  - [ ] Description in content
  - [ ] Multiple images in ACF Gallery field

**For News Page:**

- [ ] Create "News" category
- [ ] Create 10+ news posts with:
  - [ ] Title (article headline)
  - [ ] Featured Image
  - [ ] Full content/excerpt
  - [ ] Author information
  - [ ] Publication date
  - [ ] Category: News

**For Video Section:**

- [ ] Create "Videos" custom post type (optional)
- [ ] Add video posts with:
  - [ ] Title
  - [ ] Thumbnail image
  - [ ] Video URL (custom field)
  - [ ] Description

## Replicating for Other Pages

Follow this pattern for any new page:

1. **Create Category** → Posts → Categories → Add new category for your section
2. **Add Posts** → Posts → Add New → Set title, content, featured image, category
3. **Query in Next.js** → Copy pattern from `lib/wordpress.ts`
4. **Create Component** → Update components to use the new query
5. **Add Routes** → Create page.tsx files using the data

## Useful GraphQL Queries

\`\`\`graphql

# Get all posts with pagination

query GetPosts($first: Int = 10, $after: String) {
posts(first: $first, after: $after) {
pageInfo {
hasNextPage
endCursor
}
nodes {
id
title
slug
featuredImage { node { sourceUrl } }
}
}
}

# Get posts by category

query GetByCategory($categoryName: String!) {
posts(where: { categoryName: $categoryName }) {
nodes {
id
title
slug
}
}
}

# Get single post with full content

query GetPost($slug: String!) {
postBy(slug: $slug) {
id
title
content
featuredImage { node { sourceUrl } }
}
}
\`\`\`
