import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://saminwankwo.github.io'
  return [
    { url: `${base}/`,            lastModified: new Date(), changeFrequency: 'weekly',  priority: 1   },
    { url: `${base}/experience`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/portfolio`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/freelance`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`,        lastModified: new Date(), changeFrequency: 'daily',   priority: 0.7 },
    { url: `${base}/contact`,     lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
  ]
}