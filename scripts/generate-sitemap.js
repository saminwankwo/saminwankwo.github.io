import fs from 'fs';
import path from 'path';

async function generateSitemap() {
  try {
    // 1. Load env vars manually (handles values containing '=')
    const envPath = path.resolve(process.cwd(), '.env');
    let env = {};
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf-8');
      envContent.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const idx = trimmed.indexOf('=');
        if (idx === -1) return;
        const key = trimmed.slice(0, idx).trim();
        const value = trimmed.slice(idx + 1).trim();
        if (key) env[key] = value;
      });
    }

    const username = env.VITE_HASHNODE_USERNAME || 'saminwankwo';
    const siteUrl = (env.VITE_SITE_URL || 'https://saminwankwo.dev').replace(/\/$/, '');
    const host = env.VITE_HASHNODE_BLOG || 'saminwankwo.hashnode.dev';

    // 2. Fetch posts from Hashnode (new API: user.posts is public; publication.posts is Pro-gated)
    const query = `
      query GetPosts($username: String!) {
        user(username: $username) {
          posts(first: 100) {
            edges {
              node {
                slug
                publishedAt
              }
            }
          }
        }
      }
    `;

    let posts = [];
    try {
      const response = await fetch('https://gql-beta.hashnode.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables: { username } }),
      });

      if (!response.ok) {
        throw new Error(`Hashnode API failed: ${response.status} ${response.statusText}`);
      }

      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error(`Hashnode returned non-JSON: ${text.slice(0, 120)}`);
      }
      if (result.errors) {
        throw new Error(`Hashnode GraphQL errors: ${JSON.stringify(result.errors)}`);
      }
      posts = result?.data?.user?.posts?.edges || [];
    } catch (fetchErr) {
      console.warn(`! Hashnode fetch failed (${fetchErr.message}) — generating static sitemap only`);
      posts = [];
    }

    // 3. Build sitemap from scratch using template (no append-only)
    const today = new Date().toISOString().split('T')[0];

    const staticUrls = [
      { loc: `${siteUrl}/`, lastmod: today, changefreq: 'monthly', priority: '1.0' },
      { loc: `${siteUrl}/blog`, lastmod: today, changefreq: 'weekly', priority: '0.8' },
      { loc: `${siteUrl}/projects`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
      { loc: `${siteUrl}/experience`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
      { loc: `${siteUrl}/skills`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
      { loc: `${siteUrl}/github`, lastmod: today, changefreq: 'weekly', priority: '0.5' },
      { loc: `${siteUrl}/contact`, lastmod: today, changefreq: 'yearly', priority: '0.5' },
    ];

    const postUrls = posts.map(({ node }) => {
      const date = new Date(node.publishedAt).toISOString().split('T')[0];
      return `  <url>\n    <loc>${siteUrl}/blog/${node.slug}</loc>\n    <lastmod>${date}</lastmod>\n    <changefreq>never</changefreq>\n    <priority>0.6</priority>\n  </url>`;
    });

    const allUrls = [
      ...staticUrls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`),
      ...postUrls,
    ].join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allUrls}\n</urlset>\n`;

    // 4. Write to both public and dist
    const publicPath = path.resolve(process.cwd(), 'public/sitemap.xml');
    fs.writeFileSync(publicPath, sitemap);

    const distPath = path.resolve(process.cwd(), 'dist/sitemap.xml');
    if (fs.existsSync(path.resolve(process.cwd(), 'dist'))) {
      fs.writeFileSync(distPath, sitemap);
    }

    console.log(`✓ Sitemap generated: ${staticUrls.length} static + ${posts.length} blog posts.`);
  } catch (error) {
    console.error('✗ Sitemap generation failed:', error.message);
    process.exit(1);
  }
}

generateSitemap();
