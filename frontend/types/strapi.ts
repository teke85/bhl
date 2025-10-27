// Support both Strapi v4 (nested) and v5 (flat) structures
export interface StrapiImage {
    id: number;
    documentId?: string;
    url: string;
    alternativeText?: string;
    width: number;
    height: number;
    formats?: any;
}

interface NewsArticleData {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: string;
    publishedDate: string;
    category: string;
    tags?: string[];
    featuredImage: StrapiImage | { data: { attributes: StrapiImage } | null } | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface NewsArticle extends NewsArticleData {
    id: number;
    documentId?: string;
    attributes?: NewsArticleData; // Optional for v4 compatibility
}

interface GalleryItemData {
    title: string;
    description?: string;
    category: string;
    order: number;
    publishedDate: string;
    image: StrapiImage | { data: { attributes: StrapiImage } | null } | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface GalleryItem extends GalleryItemData {
    id: number;
    documentId?: string;
    attributes?: GalleryItemData; // Optional for v4 compatibility
}