import { useEffect } from 'react'
import { CONFIG } from '../data/config'

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
    // 1. Title
    document.title = `${title} | ${CONFIG.name}`

    // 2. Helper to upsert meta
    const upsertMeta = (attr, val, content) => {
      let el = document.querySelector(`meta[${attr}="${val}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, val)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    // 3. Helper to upsert link
    const upsertLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    // 4. Basic Meta
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    upsertMeta('name', 'author', CONFIG.name)

    // 5. Canonical
    if (canonical) upsertLink('canonical', canonical)

    // 6. Open Graph
    const finalOgTitle = ogTitle || title
    const finalOgDesc = ogDescription || description
    const finalOgImage = ogImage ? (ogImage.startsWith('http') ? ogImage : CONFIG.siteUrl + ogImage) : CONFIG.siteUrl + CONFIG.ogImage

    upsertMeta('property', 'og:type', ogType)
    upsertMeta('property', 'og:title', finalOgTitle)
    upsertMeta('property', 'og:description', finalOgDesc)
    upsertMeta('property', 'og:image', finalOgImage)
    upsertMeta('property', 'og:url', canonical || window.location.href)
    upsertMeta('property', 'og:site_name', CONFIG.name)

    // 7. Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:site', CONFIG.twitterHandle)
    upsertMeta('name', 'twitter:title', finalOgTitle)
    upsertMeta('name', 'twitter:description', finalOgDesc)
    upsertMeta('name', 'twitter:image', finalOgImage)

    // 8. Article specific
    if (ogType === 'article') {
      if (articleDate) upsertMeta('property', 'article:published_time', articleDate)
      upsertMeta('property', 'article:author', CONFIG.fullName)
      if (articleTags && Array.isArray(articleTags)) {
        // Remove old tags
        document.querySelectorAll('meta[property="article:tag"]').forEach(el => el.remove())
        articleTags.forEach(tag => {
          const el = document.createElement('meta')
          el.setAttribute('property', 'article:tag')
          el.setAttribute('content', tag)
          document.head.appendChild(el)
        })
      }
    }

    // 9. Structured Data
    const existingScript = document.getElementById('structured-data')
    if (existingScript) existingScript.remove()

    if (structuredData) {
      const script = document.createElement('script')
      script.id = 'structured-data'
      script.type = 'application/ld+json'
      script.innerHTML = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }

  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, articleDate, articleTags, noIndex, structuredData])

  return null
}
