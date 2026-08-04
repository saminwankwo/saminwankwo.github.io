import CONFIG from '@config'

export function buildPageTitle(title) {
  if (title === CONFIG.name || title === CONFIG.fullName) return title
  return `${title} | ${CONFIG.name}`
}

export function buildStructuredData(type, data) {
  if (type === '404') return null

  const base = {
    "@context": "https://schema.org"
  }

  if (type === 'home') {
    return {
      ...base,
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": CONFIG.name,
        "jobTitle": CONFIG.title,
        "url": CONFIG.siteUrl,
        "description": CONFIG.tagline,
        "sameAs": CONFIG.socials.map(s => s.url)
      }
    }
  }

  if (type === 'webpage' && data) {
    return {
      ...base,
      "@type": "WebPage",
      "name": data.title,
      "description": data.description,
      "url": data.url,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": CONFIG.siteUrl },
          { "@type": "ListItem", "position": 2, "name": data.breadcrumbName, "item": data.url }
        ]
      }
    }
  }

  if (type === 'blog') {
    return {
      ...base,
      "@type": "Blog",
      "name": `${CONFIG.name} — Engineering Blog`,
      "description": "Backend engineering articles on Node.js, PHP, Laravel, AWS, GraphQL, and microservices.",
      "url": `${CONFIG.siteUrl}/blog`,
      "author": { "@type": "Person", "name": CONFIG.name }
    }
  }

  if (type === 'article' && data) {
    return {
      ...base,
      "@type": "Article",
      "headline": data.title,
      "description": data.brief,
      "author": { "@type": "Person", "name": CONFIG.name, "url": CONFIG.siteUrl },
      "publisher": { "@type": "Person", "name": CONFIG.name },
      "datePublished": data.date,
      "image": data.coverImage?.url || (CONFIG.siteUrl + CONFIG.ogImage),
      "url": data.url,
      "mainEntityOfPage": { "@type": "WebPage", "@id": data.url }
    }
  }

  return null
}

export function truncateDescription(text, maxLen = 155) {
  if (!text || text.length <= maxLen) return text
  const truncated = text.substring(0, maxLen)
  return truncated.substring(0, truncated.lastIndexOf(' ')) + '...'
}
