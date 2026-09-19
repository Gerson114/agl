import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chonnostech.com.br'
  const lastModified = new Date()

  const rotas = ['', '/sobre', '/sistema', '/como-funciona', '/solucoes', '/contato']

  return rotas.map((rota) => ({
    url: `${baseUrl}${rota}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: rota === '' ? 1.0 : 0.7,
  }))
}
