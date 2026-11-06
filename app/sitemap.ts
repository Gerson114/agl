import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chonnostech.com'
  const rotas = ['', '/sobre', '/sistema', '/como-funciona', '/solucoes', '/automacoes', '/contato']

  return rotas.map((rota) => ({
    url: `${baseUrl}${rota}`,
    priority: rota === '' ? 1.0 : 0.7,
  }))
}
