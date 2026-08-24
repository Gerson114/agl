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
    sitemap: 'https://agl.digital/sitemap.xml',
    host: 'https://agl.digital',
  }
}