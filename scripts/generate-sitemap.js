import { CONFIG } from '../data/config';

async function fetchPosts() {
  const query = `
    query Publication($host: String!) {
      publication(host: $host) {
        posts(first: 100) {
          edges {
            node {
              url
              publishedAt
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        query, 
        variables: { host: CONFIG.hashnodeBlog } 
      }),
    });

    const { data } = await response.json();
    return data.publication.posts.edges.map(edge => ({
      url: edge.node.url,
      lastmod: edge.node.publishedAt.split('T')[0]
    }));
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
    return [];
  }
}

async function generateSitemap() {
  const posts = await fetchPosts();
  const baseUrl = CONFIG.siteUrl;
  const today = new Date().toISOString().split('T')[0];

  const staticUrls = [
    { loc: `${baseUrl}/`, lastmod: today, changefreq: 'monthly', priority: '1.0' },
    { loc: `${baseUrl}/blog`, lastmod: today, changefreq: 'weekly', priority: '0.8' },
  ];

  const postUrls = posts.map(post => `
  <url>
    <loc>${post.url}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')}
${postUrls}
</urlset>`;

  const fs = await import('fs');
  const path = await import('path');
  
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully with', posts.length, 'posts.');
}

generateSitemap();
