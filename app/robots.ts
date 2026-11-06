import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/.next/', '/private/'],
      },
    ],
    sitemap: 'https://chonnostech.com/sitemap.xml',
    host: 'https://chonnostech.com',
  }
}
