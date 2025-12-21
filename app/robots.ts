import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/about', '/projects', '/contact'],
            disallow: '/',
        },
        sitemap: 'https://westerncorridorlimited.com/sitemap.xml',
    }
}
