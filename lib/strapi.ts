import axios from 'axios';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export const strapiAPI = axios.create({
    baseURL: `${STRAPI_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

// News API
export const newsAPI = {
    getAll: async () => {
        const { data } = await strapiAPI.get('/news-type?populate=*&sort=publishedDate:desc');
        return data.data;
    },
    getBySlug: async (slug: string) => {
        const { data } = await strapiAPI.get(`/news-type?filters[slug][$eq]=${slug}&populate=*`);
        return data.data[0];
    },
    getByCategory: async (category: string) => {
        const { data } = await strapiAPI.get(`/news-type?filters[category][$eq]=${category}&populate=*&sort=publishedDate:desc`);
        return data.data;
    },
};

// Gallery API
export const galleryAPI = {
    getAll: async () => {
        const { data } = await strapiAPI.get('/gallery-items?populate=*&sort=order:asc');
        return data.data;
    },
    getByCategory: async (category: string) => {
        const { data } = await strapiAPI.get(`/gallery-items?filters[category][$eq]=${category}&populate=*&sort=order:asc`);
        return data.data;
    },
};

// Helper to get image URL - Updated for both v4 and v5
export const getStrapiMedia = (image: any): string => {
    // Handle null/undefined
    if (!image) return '/placeholder.svg';

    // Handle direct URL string
    if (typeof image === 'string') {
        if (image.startsWith('http')) return image;
        return `${STRAPI_URL}${image}`;
    }

    // Handle v5 structure (flat)
    if (image.url) {
        if (image.url.startsWith('http')) return image.url;
        return `${STRAPI_URL}${image.url}`;
    }

    // Handle v4 structure (nested attributes)
    if (image.data?.attributes?.url) {
        const url = image.data.attributes.url;
        if (url.startsWith('http')) return url;
        return `${STRAPI_URL}${url}`;
    }

    return '/placeholder.svg';
};