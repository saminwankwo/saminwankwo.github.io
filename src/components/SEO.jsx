import { useEffect } from 'react';
import { CONFIG } from '../data/config';

export default function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  articleDate,
  articleTags = [],
  noIndex = false,
  structuredData,
}) {
  useEffect(() => {
    // Title
    document.title = `${title} | ${CONFIG.name}`;

    // Meta tags helper
    const setMeta = (attr, value, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${value}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Description
    setMeta('name', 'description', description);
    
    // Robots
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    
    // Author
    setMeta('name', 'author', CONFIG.name);
    
    // Keywords
    setMeta('name', 'keywords', CONFIG.skills.join(', '));

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Open Graph
    setMeta('property', 'og:title', ogTitle || title);
    setMeta('property', 'og:description', ogDescription || description);
    setMeta('property', 'og:image', ogImage || CONFIG.ogImage);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', `${CONFIG.name} — Portfolio`);

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:site', CONFIG.twitterHandle);
    setMeta('name', 'twitter:title', ogTitle || title);
    setMeta('name', 'twitter:description', ogDescription || description);
    setMeta('name', 'twitter:image', ogImage || CONFIG.ogImage);

    // Article tags
    if (ogType === 'article') {
      setMeta('property', 'article:published_time', articleDate);
      setMeta('property', 'article:author', CONFIG.name);
      
      // Remove old article tags
      document.querySelectorAll('meta[property="article:tag"]').forEach(el => el.remove());
      
      articleTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.setAttribute('content', tag);
        document.head.appendChild(meta);
      });
    }

    // Structured Data
    const oldScript = document.getElementById('structured-data');
    if (oldScript) oldScript.remove();
    
    if (structuredData) {
      const script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, articleDate, articleTags, noIndex, structuredData]);

  return null;
}
