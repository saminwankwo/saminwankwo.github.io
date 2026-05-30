import fs from 'fs';
import path from 'path';

async function generateSitemap() {
  try {
    // 1. Load env vars manually
    const envPath = path.resolve(process.cwd(), '.env');
    let env = {};
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf-8');
      envContent.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) env[key.trim()] = value.trim();
      });
    }

    const username = env.VITE_HASHNODE_USERNAME || 'saminwankwo';
    const siteUrl = env.VITE_SITE_URL || 'https://saminwankwo.dev';
    const host = env.VITE_HASHNODE_BLOG || 'saminwankwo.hashnode.dev';

    // 2. Fetch posts from Hashnode
    const query = `
      query GetPosts($host: String!) {
        publication(host: $host) {
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

    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { host } }),
    });

    const result = await response.json();
    const posts = result?.data?.publication?.posts?.edges || [];

    // 3. Read base sitemap
    const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
    let sitemap = fs.readFileSync(sitemapPath, 'utf-8');

    // 4. Insert post entries
    const postUrls = posts.map(({ node }) => {
      const date = new Date(node.publishedAt).toISOString().split('T')[0];
      return `  <url>
    <loc>${siteUrl}/blog/${node.slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>never</changefreq>
    <priority>0.6</priority>
  </url>`;
    }).join('\n');

    const closingTag = '</urlset>';
    sitemap = sitemap.replace(closingTag, postUrls + '\n' + closingTag);

    // 5. Write back
    fs.writeFileSync(sitemapPath, sitemap);
    console.log(`✓ Sitemap updated: added ${posts.length} blog posts.`);

  } catch (error) {
    console.warn('! Sitemap generation failed:', error.message);
    process.exit(0);
  }
}

generateSitemap();
