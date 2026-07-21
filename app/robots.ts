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
    sitemap: 'https://mevi.gersonback.uk/sitemap.xml',
    host: 'https://mevi.gersonback.uk',
  }
}