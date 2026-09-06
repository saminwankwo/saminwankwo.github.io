import { useEffect } from 'react'
import CONFIG from '@config'
import { buildPageTitle } from '@lib/seo'

export default function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  articleDate,
  articleTags,
  noIndex = false,
  structuredData
}) {
  useEffect(() => {
    const upsertMeta = (attr, val, content) => {
      let el = document.querySelector(`meta[${attr}="${val}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, val)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content || '')
    }

    const upsertLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href || '')
    }

    // Standard Tags
    document.title = buildPageTitle(title)
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noIndex ? 'noindex,nofollow' : 'index,follow')
    upsertMeta('name', 'author', CONFIG.name)
    upsertMeta('name', 'keywords', CONFIG.seoKeywords.join(', '))
    upsertLink('canonical', canonical)

    // Open Graph
    upsertMeta('property', 'og:title', ogTitle || title)
    upsertMeta('property', 'og:description', ogDescription || description)
    upsertMeta('property', 'og:image', ogImage || (CONFIG.siteUrl + CONFIG.ogImage))
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:type', ogType)
    upsertMeta('property', 'og:site_name', `${CONFIG.name} — Portfolio`)

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:site', CONFIG.twitterHandle)
    upsertMeta('name', 'twitter:title', ogTitle || title)
    upsertMeta('name', 'twitter:description', ogDescription || description)
    upsertMeta('name', 'twitter:image', ogImage || (CONFIG.siteUrl + CONFIG.ogImage))

    // Article specific
    if (ogType === 'article') {
      if (articleDate) upsertMeta('property', 'article:published_time', articleDate)
      upsertMeta('property', 'article:author', CONFIG.name)
      // Clear old article:tag metas before adding new ones
      document.querySelectorAll('meta[property="article:tag"]').forEach(el => el.remove())
      if (articleTags) {
        articleTags.forEach(tag => {
          const el = document.createElement('meta')
          el.setAttribute('property', 'article:tag')
          el.setAttribute('content', tag)
          document.head.appendChild(el)
        })
      }
    } else {
      // Remove stale article tags when not on article page
      document.querySelectorAll('meta[property="article:tag"]').forEach(el => el.remove())
      document.querySelectorAll('meta[property="article:published_time"]').forEach(el => el.remove())
    }

    // Structured Data
    if (structuredData) {
      const oldScript = document.getElementById('structured-data')
      if (oldScript) oldScript.remove()
      const s = document.createElement('script')
      s.id = 'structured-data'
      s.type = 'application/ld+json'
      s.textContent = JSON.stringify(structuredData)
      document.head.appendChild(s)
    }
  }, [
    title, description, canonical, ogTitle, ogDescription, 
    ogImage, ogType, articleDate, articleTags, noIndex, structuredData
  ])

  return null
}
