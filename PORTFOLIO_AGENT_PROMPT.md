# SAMUEL NWANKWO — PORTFOLIO AGENT PROMPT
# Complete specification for a React-based multi-page portfolio website
# Feed this entire file to a frontend developer agent.
# Last updated: April 2025

---

You are a senior frontend developer agent. Build a complete, production-ready,
multi-page portfolio website for a backend engineer named Samuel Nwankwo
using React (Vite + React Router v6). Output only raw file contents.
No explanations, no markdown code fences, no commentary between files.

---

## OUTPUT FORMAT

Output every file using this exact format — filename as a comment on line 1,
then the complete file content, then a blank line before the next file:

// path/to/filename.ext
[complete raw file content]

Output files in this exact order:
  package.json
  vite.config.js
  .env.example
  netlify.toml
  vercel.json
  index.html
  public/robots.txt
  public/sitemap.xml
  public/manifest.json
  scripts/generate-sitemap.js
  src/main.jsx
  src/App.jsx
  src/styles/globals.css
  src/data/config.js
  src/data/skills.js
  src/data/experience.js
  src/data/projects.js
  src/data/freelance.js
  src/data/testimonials.js
  src/data/articles.js
  src/hooks/useHashnode.js
  src/hooks/useGitHub.js
  src/components/SEO.jsx
  src/components/FadeIn.jsx
  src/components/SectionHeader.jsx
  src/components/Tag.jsx
  src/components/Nav.jsx
  src/components/NowStrip.jsx
  src/components/Footer.jsx
  src/components/CaseStudyModal.jsx
  src/pages/NotFound.jsx
  src/pages/Home.jsx
  src/pages/Blog.jsx
  src/pages/BlogPost.jsx
  src/sections/Hero.jsx
  src/sections/Skills.jsx
  src/sections/Experience.jsx
  src/sections/Projects.jsx
  src/sections/Freelance.jsx
  src/sections/Testimonials.jsx
  src/sections/GitHub.jsx
  src/sections/Writing.jsx
  src/sections/Contact.jsx

Rules:
  - Do not skip any file
  - No placeholder data — all arrays fully populated
  - No lorem ipsum anywhere
  - All async hooks handle loading + success + error states
  - Accessibility attributes on all semantic and interactive elements
  - SEO component used on every page with correct per-page props
  - Footer rendered on every page via App.jsx layout wrapper
  - Every section uses semantic HTML5 elements

---

## TECH STACK

- Vite 5 + React 18
- React Router v6 (BrowserRouter + Routes)
- Plain CSS with CSS custom properties (no Tailwind, no styled-components)
- Google Fonts: JetBrains Mono + Syne (via @import in globals.css)
- Zero extra dependencies beyond react-router-dom
- Form submission via Formspree (fetch, no SDK)
- GitHub data via public REST API (no auth)
- Blog posts via Hashnode public GraphQL API

---

## PACKAGE.JSON

{
  "name": "samuel-nwankwo-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "node scripts/generate-sitemap.js && vite build",
    "preview": "vite preview",
    "generate-sitemap": "node scripts/generate-sitemap.js"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.23.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.3.1"
  }
}

---

## VITE CONFIG (vite.config.js)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
})

---

## ENVIRONMENT VARIABLES (.env.example)

# Copy this file to .env and fill in your values
# All variables must be prefixed with VITE_ to be exposed to the client

VITE_SITE_URL=https://saminwankwo.dev
VITE_HASHNODE_USERNAME=saminwankwo
VITE_HASHNODE_BLOG=saminwankwo.hashnode.dev
VITE_GITHUB_USERNAME=saminwankwo
VITE_FORMSPREE_ID=YOUR_FORMSPREE_FORM_ID

# To get a Formspree ID:
#   1. Go to https://formspree.io
#   2. Create a free account
#   3. Create a new form
#   4. Copy the form ID (looks like "xpwzgkrb")

---

## DEPLOYMENT

netlify.toml:
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200

  [build]
    command = "yarn build"
    publish = "dist"

  [build.environment]
    NODE_VERSION = "20"

vercel.json:
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
    "headers": [
      {
        "source": "/Samuel_Nwankwo_Resume.pdf",
        "headers": [{ "key": "Content-Disposition", "value": "attachment" }]
      }
    ]
  }

---

## CONFIG FILE (src/data/config.js)

Export a single CONFIG object. Use import.meta.env for env vars with
fallback strings so the site doesn't crash if .env is missing.

CONFIG fields:
  name:           "Samuel Nwankwo"
  fullName:       "Nwankwo Chibuike Samuel"
  title:          "Backend Engineer"
  shortTitle:     "Backend Engineer | Node.js · PHP · Cloud"
  tagline:        "Building scalable APIs, microservices, and cloud infrastructure."
  location:       "Port Harcourt, Nigeria"
  country:        "NG"
  timezone:       "UTC+1 (WAT)"
  timezoneNote:   "Overlap with EU business hours · Partial US East overlap"
  availableFrom:  "Immediately"
  workPreference: "Remote-first · Contract or Full-time · Open to async collaboration"
  noticeRequired: "None"

  email:     "nwankwosami@gmail.com"
  phone:     "+234 805 864 3829"

  // Social — all platforms share the same handle: saminwankwo
  github:    "saminwankwo"
  linkedin:  "saminwankwo"
  twitter:   "saminwankwo"
  instagram: "saminwankwo"
  telegram:  "saminwankwo"
  npm:       "saminwankwo"
  youtube:   "saminwankwo"
  hashnode:  "saminwankwo"

  // URLs
  githubUrl:    "https://github.com/saminwankwo"
  linkedinUrl:  "https://linkedin.com/in/saminwankwo"
  twitterUrl:   "https://twitter.com/saminwankwo"
  instagramUrl: "https://instagram.com/saminwankwo"
  telegramUrl:  "https://t.me/saminwankwo"
  npmUrl:       "https://npmjs.com/~saminwankwo"
  youtubeUrl:   "https://youtube.com/@saminwankwo"
  hashnodeUrl:  "https://saminwankwo.hashnode.dev"

  siteUrl:       import.meta.env.VITE_SITE_URL     || "https://saminwankwo.dev"
  hashnodeBlog:  import.meta.env.VITE_HASHNODE_BLOG || "saminwankwo.hashnode.dev"
  formspreeId:   import.meta.env.VITE_FORMSPREE_ID  || ""
  resumePath:    "/Samuel_Nwankwo_Resume.pdf"
  ogImage:       "/og-image.jpg"

  twitterHandle: "@saminwankwo"

  available: true

  skills: [
    "Node.js","NestJS","PHP","Laravel","TypeScript","JavaScript",
    "MongoDB","MySQL","PostgreSQL","Redis","AWS","Docker",
    "GraphQL","REST APIs","Microservices","RabbitMQ","WebSockets","CI/CD"
  ]

  currentlyLearning: [
    "Apache Kafka",
    "Bun.js runtime",
    "TypeScript advanced patterns",
    "System design at scale"
  ]

---

## AESTHETIC & THEME

FONTS: JetBrains Mono (monospace, all body/code text) + Syne (display, headings)
Load via @import in globals.css:
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Syne:wght@400;600;700;800&display=swap');

CSS VARIABLES (:root):
  --bg:           #0a0c0f
  --bg2:          #0f1217
  --bg3:          #161b23
  --border:       #1e2530
  --border2:      #2a3545
  --green:        #00ff9d
  --green-dim:    #00cc7a
  --green-dk:     #003d25
  --blue:         #4fc3f7
  --amber:        #ffd166
  --red:          #ff6b6b
  --purple:       #bb86fc
  --text:         #e2e8f0
  --text2:        #8892a4
  --text3:        #4a5568
  --mono:         'JetBrains Mono', monospace
  --sans:         'Syne', sans-serif
  --nav-h:        56px
  --strip-h:      38px
  --max-w:        960px
  --section-px:   2rem
  --section-py:   5rem

GLOBALS (globals.css):
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0 }
  html { scroll-behavior: smooth; font-size: 16px }
  body {
    background: var(--bg); color: var(--text);
    font-family: var(--mono); overflow-x: hidden;
    line-height: 1.6; -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  ::selection { background: var(--green-dk); color: var(--green) }
  ::-webkit-scrollbar { width: 4px }
  ::-webkit-scrollbar-track { background: var(--bg) }
  ::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 2px }
  img { display: block; max-width: 100% }
  a { color: inherit; text-decoration: none }
  button { cursor: pointer; border: none; background: none }
  input, textarea, button, select { font-family: var(--mono) }
  h1,h2,h3,h4,h5,h6 { font-family: var(--sans); line-height: 1.15 }

  // Focus visible — WCAG AA
  :focus-visible {
    outline: 2px solid var(--green);
    outline-offset: 3px;
  }

  // Skip to content
  .skip-link {
    position: absolute; left: -9999px; top: 1rem;
    background: var(--green); color: var(--bg);
    padding: 8px 16px; font-size: 12px; font-family: var(--mono);
    z-index: 9999; text-decoration: none;
  }
  .skip-link:focus { left: 1rem }

  // Reduced motion
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  @keyframes blink { 50% { opacity: 0 } }
  @keyframes pulse { 0%,100% { opacity: 0.4 } 50% { opacity: 1 } }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px) }
    to   { opacity: 1; transform: translateY(0) }
  }
  @keyframes spin {
    to { transform: rotate(360deg) }
  }

  // Section utility classes
  .section-tag {
    font-size: 11px; color: var(--green); font-family: var(--mono);
    text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 6px;
    display: flex; align-items: center; gap: 8px;
  }
  .section-tag::before { content: "//"; color: var(--text3) }
  .section-title {
    font-family: var(--sans); font-weight: 800;
    font-size: clamp(26px, 4vw, 38px); letter-spacing: -1px; color: var(--text);
  }
  .section-line { width: 40px; height: 2px; background: var(--green); margin-top: 10px }

  // Skeleton loading
  .skeleton {
    background: var(--bg3); border-radius: 2px;
    animation: pulse 1.4s ease infinite;
  }

  // Post body
  .post-body p { font-size:14px; line-height:1.9; color:var(--text2); margin-bottom:1.25rem }
  .post-body h2 {
    font-family:var(--sans); font-weight:800; font-size:22px;
    color:var(--text); margin:2rem 0 0.75rem; letter-spacing:-0.5px
  }
  .post-body h3 {
    font-family:var(--sans); font-weight:700; font-size:18px;
    color:var(--text); margin:1.5rem 0 0.5rem
  }
  .post-body code {
    font-family:var(--mono); font-size:13px; background:var(--bg3);
    color:var(--green); padding:2px 6px; border-radius:2px
  }
  .post-body pre {
    background:var(--bg3); border:1px solid var(--border);
    padding:1.25rem; overflow-x:auto; margin-bottom:1.25rem; border-radius:2px
  }
  .post-body pre code { background:transparent; padding:0; color:var(--text) }
  .post-body strong { color:var(--text); font-weight:600 }
  .post-body ul, .post-body ol { padding-left:1.5rem; margin-bottom:1.25rem }
  .post-body li { font-size:14px; line-height:1.9; color:var(--text2) }
  .post-body blockquote {
    border-left:3px solid var(--green); padding-left:1rem;
    margin-bottom:1.25rem; color:var(--text2); font-style:italic
  }
  .post-body a { color:var(--green); text-decoration:underline }
  .post-body hr { border:none; border-top:1px solid var(--border); margin:2rem 0 }
  .post-body img { width:100%; border:1px solid var(--border); margin:1.25rem 0 }
  .post-body table { width:100%; border-collapse:collapse; margin-bottom:1.25rem }
  .post-body th, .post-body td {
    border:1px solid var(--border); padding:8px 12px; font-size:13px; text-align:left
  }
  .post-body th { background:var(--bg3); color:var(--text); font-weight:600 }
  .post-body td { color:var(--text2) }

---

## INDEX.HTML

Full HTML file with all SEO meta tags baked in as defaults.
SEO.jsx overrides these dynamically per page.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <!-- Primary -->
  <title>Samuel Nwankwo — Backend Engineer | Node.js · PHP · Cloud</title>
  <meta name="description" content="Samuel Nwankwo is a backend engineer with 7+ years in PHP/Laravel and 5+ years in Node.js/NestJS. Scalable APIs, microservices, AWS, Docker. Available for remote roles." />
  <meta name="author" content="Samuel Nwankwo" />
  <meta name="robots" content="index, follow" />
  <meta name="keywords" content="backend engineer, Node.js developer, PHP Laravel developer, NestJS, REST API, GraphQL, microservices, AWS, Docker, Nigeria developer, remote backend engineer, Samuel Nwankwo, saminwankwo" />
  <meta name="theme-color" content="#00ff9d" />
  <meta name="application-name" content="Samuel Nwankwo" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="Samuel.dev" />

  <!-- Canonical -->
  <link rel="canonical" href="https://saminwankwo.dev" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://saminwankwo.dev" />
  <meta property="og:title" content="Samuel Nwankwo — Backend Engineer" />
  <meta property="og:description" content="7+ years PHP/Laravel · 5+ years Node.js · AWS · Docker · Microservices · Available for remote roles." />
  <meta property="og:image" content="https://saminwankwo.dev/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Samuel Nwankwo — Backend Engineer portfolio" />
  <meta property="og:site_name" content="Samuel Nwankwo" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@saminwankwo" />
  <meta name="twitter:creator" content="@saminwankwo" />
  <meta name="twitter:title" content="Samuel Nwankwo — Backend Engineer" />
  <meta name="twitter:description" content="7+ years PHP/Laravel · 5+ years Node.js · AWS · Docker · Available for remote roles." />
  <meta name="twitter:image" content="https://saminwankwo.dev/og-image.jpg" />

  <!-- PWA -->
  <link rel="manifest" href="/manifest.json" />
  <link rel="apple-touch-icon" href="/icon-192.png" />

  <!-- Favicon (SVG inline) -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230a0c0f'/><text y='.9em' font-size='75' x='12'>⬡</text></svg>" />

  <!-- Structured Data: Person -->
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"Person",
    "name":"Samuel Nwankwo",
    "alternateName":"Nwankwo Chibuike Samuel",
    "jobTitle":"Backend Engineer",
    "description":"Backend engineer specializing in Node.js, PHP/Laravel, AWS microservices, and payment integrations.",
    "url":"https://saminwankwo.dev",
    "image":"https://saminwankwo.dev/og-image.jpg",
    "email":"nwankwosami@gmail.com",
    "telephone":"+234-805-864-3829",
    "address":{"@type":"PostalAddress","addressLocality":"Port Harcourt","addressRegion":"Rivers State","addressCountry":"NG"},
    "sameAs":[
      "https://github.com/saminwankwo",
      "https://linkedin.com/in/saminwankwo",
      "https://twitter.com/saminwankwo",
      "https://instagram.com/saminwankwo",
      "https://t.me/saminwankwo",
      "https://npmjs.com/~saminwankwo",
      "https://youtube.com/@saminwankwo",
      "https://saminwankwo.hashnode.dev"
    ],
    "knowsAbout":["Node.js","NestJS","PHP","Laravel","AWS","Docker","GraphQL","REST APIs","TypeScript","MongoDB","MySQL","Microservices","Redis","RabbitMQ"],
    "worksFor":{"@type":"Organization","name":"Olotu Square"}
  }
  </script>

  <!-- Structured Data: WebSite -->
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"WebSite",
    "name":"Samuel Nwankwo Portfolio",
    "url":"https://saminwankwo.dev",
    "description":"Portfolio of Samuel Nwankwo, Backend Engineer specializing in Node.js, PHP/Laravel, and cloud infrastructure.",
    "author":{"@type":"Person","name":"Samuel Nwankwo"}
  }
  </script>

  <!-- Preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preconnect" href="https://api.github.com" />
  <link rel="preconnect" href="https://gql.hashnode.com" />
  <!-- NOTE: Replace /og-image.jpg with a real 1200×630px image before deploying -->
  <!-- NOTE: Replace saminwankwo.dev with your real domain in config.js and here -->
  <!-- NOTE: Generate icon-192.png and icon-512.png from your logo for PWA support -->
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>

---

## PUBLIC FILES

robots.txt:
  User-agent: *
  Allow: /
  Disallow: /api/
  Sitemap: https://saminwankwo.dev/sitemap.xml

sitemap.xml (static base — extended at build time by generate-sitemap.js):
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://saminwankwo.dev/</loc>
      <lastmod>2025-04-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://saminwankwo.dev/blog</loc>
      <lastmod>2025-04-01</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  </urlset>

manifest.json:
  {
    "name": "Samuel Nwankwo — Backend Engineer",
    "short_name": "Samuel.dev",
    "description": "Portfolio of Samuel Nwankwo, Backend Engineer specializing in Node.js, PHP/Laravel, and cloud infrastructure.",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#0a0c0f",
    "theme_color": "#00ff9d",
    "orientation": "portrait-primary",
    "icons": [
      { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
      { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
    ],
    "categories": ["portfolio","technology","business"]
  }

---

## SITEMAP GENERATOR (scripts/generate-sitemap.js)

Node.js ESM script. Runs before vite build.
  1. Reads VITE_HASHNODE_USERNAME and VITE_SITE_URL from process.env
     (load .env manually using fs.readFileSync + simple KEY=VALUE parser
      — no dotenv dependency)
  2. Fetches all posts from Hashnode GraphQL API:
     POST https://gql.hashnode.com
     Query: user(username) → publications → posts(first:100) → slug, publishedAt
  3. Reads public/sitemap.xml base file
  4. Inserts <url> entries for each blog post:
     <loc>https://saminwankwo.dev/blog/{slug}</loc>
     <lastmod>{publishedAt date YYYY-MM-DD}</lastmod>
     <changefreq>never</changefreq>
     <priority>0.6</priority>
  5. Writes updated XML back to public/sitemap.xml
  6. Logs count of URLs added
  On any error: log warning and exit 0 (do not block build)

---

## ROUTING (src/App.jsx)

Uses BrowserRouter + Routes.

Layout component renders:
  <a href="#main-content" className="skip-link">Skip to main content</a>
  <Nav />
  <Suspense fallback={<div style={{minHeight:'100vh'}} />}>
    <Outlet />   ← or <Routes> with nested elements
  </Suspense>
  <Footer />

Lazy load Blog and BlogPost:
  const Blog     = React.lazy(() => import('./pages/Blog'))
  const BlogPost = React.lazy(() => import('./pages/BlogPost'))
  Home and NotFound imported normally (not lazy)

ScrollToTop component:
  useEffect that calls window.scrollTo(0, 0) on pathname change

Routes:
  /            → <Home />
  /blog        → <Blog />
  /blog/:slug  → <BlogPost />
  *            → <NotFound />

Handle hash navigation from /blog to home sections:
  In Nav, for hash links:
    if already on "/": document.getElementById(id).scrollIntoView()
    else: navigate("/", { state: { scrollTo: id } })
  In Home.jsx useEffect:
    if location.state?.scrollTo:
      setTimeout(() => document.getElementById(state.scrollTo)?.scrollIntoView(), 100)

---

## SEO COMPONENT (src/components/SEO.jsx)

Zero dependencies — uses direct DOM manipulation via useEffect.

Props:
  title          string   — page title (appended with " | Samuel Nwankwo")
  description    string   — meta description ≤155 chars
  canonical      string   — full canonical URL
  ogTitle        string?  — defaults to title
  ogDescription  string?  — defaults to description
  ogImage        string?  — defaults to CONFIG.ogImage
  ogType         string?  — "website" | "article", default "website"
  articleDate    string?  — ISO date for article pages
  articleTags    array?   — string array for article pages
  noIndex        bool?    — adds noindex,nofollow if true
  structuredData object?  — JSON-LD to inject as <script> tag

Implementation:
  Helper: upsertMeta(attr, val, content) — finds or creates <meta>
  Helper: upsertLink(rel, href) — finds or creates <link>
  On effect run:
    document.title = `${title} | Samuel Nwankwo`
    Set description, robots, author, keywords
    Set canonical link
    Set all og: and twitter: meta tags
    If ogType === "article": set article:published_time, article:author, article:tag(s)
    If structuredData: remove existing #structured-data script, inject new one
  Returns null

SEO props per page:

  Home:
    title: "Samuel Nwankwo — Backend Engineer"
    description: "Backend engineer with 7+ years PHP/Laravel and 5+ years Node.js. Scalable APIs, microservices, AWS cloud infrastructure. Available for remote roles from Port Harcourt, Nigeria."
    canonical: CONFIG.siteUrl + "/"
    structuredData: ProfilePage schema pointing to Person entity

  Blog:
    title: "Blog — Backend Engineering Articles"
    description: "Articles by Samuel Nwankwo on Node.js, PHP/Laravel, Redis, GraphQL, Docker, AWS, and production backend engineering."
    canonical: CONFIG.siteUrl + "/blog"
    structuredData: Blog schema

  BlogPost (after post loads):
    title: post.title
    description: post.brief?.slice(0, 155)
    canonical: post.url   ← Hashnode URL is canonical (content lives there)
    ogType: "article"
    ogImage: post.coverImage?.url || CONFIG.ogImage
    articleDate: post.publishedAt
    articleTags: post.tags?.map(t => t.name)
    structuredData: Article schema

  NotFound:
    title: "404 — Page Not Found"
    description: "The page you are looking for does not exist."
    noIndex: true

---

## FADEIN COMPONENT (src/components/FadeIn.jsx)

Props: children, delay (ms, default 0), className, style, as (element type, default "div")
Uses useRef + useEffect + IntersectionObserver (threshold 0.08, rootMargin "0px 0px -40px 0px")
Initial inline style: { opacity: 0, transform: 'translateY(22px)', transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }
On intersect: set opacity 1, transform none
Disconnect observer after first intersection
Renders as the element type specified by "as" prop

---

## SECTION HEADER (src/components/SectionHeader.jsx)

Props: tag (string), title (string), subtitle (string, optional)
Renders wrapped in FadeIn with margin-bottom 2.5rem:
  <p className="section-tag">{tag}</p>
  <h2 className="section-title">{title}</h2>
  {subtitle && <p style={{ fontSize:13, color:'var(--text2)', marginTop:'0.75rem', lineHeight:1.8 }}>{subtitle}</p>}
  <div className="section-line" />

---

## TAG COMPONENT (src/components/Tag.jsx)

Props: children, primary (bool), size ("sm"|"md", default "md")
Primary: border rgba(0,255,157,0.6), color var(--green), bg rgba(0,255,157,0.06)
Normal: border var(--border2), color var(--text2)
Normal hover (CSS class): border var(--green), color var(--green)
sm: font-size 10px, padding 2px 8px
md: font-size 11px, padding 3px 10px
All: border-radius 2px, font-family var(--mono), display inline-block

---

## NOW STRIP (src/components/NowStrip.jsx)

Full-width bar, bg var(--green), height var(--strip-h) = 38px
Position: sticky, top: var(--nav-h), z-index: 98
Flex row, justify-content center, align-items center, gap 12px
Font: var(--mono) 12px

Left: blinking dot (8px circle, bg #0a0c0f, animation blink 1.2s steps(1) infinite, aria-hidden)
     + "Currently available" (font-weight 600, color #0a0c0f)
Right: "· Open to full-time remote & contract · Node.js / PHP / Cloud" (color var(--green-dk))

On <480px: hide right text via CSS (just show dot + "Currently available")
Rendered inside Home.jsx only.

---

## NAV (src/components/Nav.jsx)

Semantic: <header> wrapping <nav aria-label="Main navigation">
Position: fixed, top 0, left 0, right 0, height var(--nav-h) = 56px, z-index 100
bg: rgba(10,12,15,0.92), backdrop-filter: blur(12px)
border-bottom: 1px solid var(--border)
padding: 0 2rem, flex, space-between, align-center

Logo: <Link to="/" aria-label="Samuel Nwankwo — home">
  "Samuel" — var(--sans) 800 18px, color var(--green)
  ".dev"   — color var(--text3), weight 400

Nav links (<NavLink> with aria-current="page" when active):
  Each link: 12px var(--mono), uppercase, letter-spacing 0.08em, color var(--text2)
  Active + hover: color var(--green)
  Links in order: Skills | Experience | Projects | Freelance | GitHub | Writing | Blog | Contact
  Skills      → /#skills
  Experience  → /#experience
  Projects    → /#projects
  Freelance   → /#freelance
  GitHub      → /#github
  Writing     → /#writing
  Blog        → /blog   (React Router Link)
  Contact     → /#contact

Buttons (flex row, gap 8px, margin-left 1.5rem):
  1. "Resume ↓"
     <a href={CONFIG.resumePath} download="Samuel_Nwankwo_Resume.pdf"
        aria-label="Download Samuel Nwankwo's resume PDF">
     Style: border 1px var(--green), color var(--green), bg transparent
     padding 6px 14px, font-size 11px, mono uppercase, letter-spacing 0.1em
     Hover: bg var(--green), color var(--bg)

  2. "Hire Me"
     <a href={`mailto:${CONFIG.email}`} aria-label="Send email to hire Samuel">
     Style: bg var(--green), color var(--bg), same padding/font
     Hover: bg var(--green-dim)

Mobile menu (<768px):
  Hide nav links + buttons
  Show ☰ button: aria-label="Open navigation menu", aria-expanded={menuOpen}
    border 1px var(--border), color var(--text), 12px mono, padding 6px 10px

  Full-screen overlay when open:
    position fixed, inset 0, bg var(--bg), z-index 200
    role="dialog", aria-modal="true", aria-label="Navigation menu"
    Flex column, justify-content center, align-items center, gap 2rem
    Each link: font-size 18px, var(--sans) 600, color var(--text2), hover var(--green)
    Include all nav links + both buttons (Resume ↓ + Hire Me) + all social icon-links
    Close ✕ button: absolute top 1.5rem right 1.5rem, aria-label="Close navigation menu"
    Focus trap: Tab key cycles only within overlay
    Escape key closes overlay

---

## FOOTER (src/components/Footer.jsx)

Rendered on EVERY page via App.jsx layout.
<footer role="contentinfo" aria-label="Site footer">

Three rows, centered, padding 2.5rem 2rem 2rem, bg var(--bg), border-top 1px var(--border):

Row 1 — Availability:
  <span> pill: "● Available for hire"
  bg rgba(0,255,157,0.1), color var(--green), border rgba(0,255,157,0.3)
  11px mono, padding 4px 12px, border-radius 2px

Row 2 — Social links (flex, gap 1.25rem, justify-center, flex-wrap, margin 1.25rem 0):
  Render ALL social platforms from CONFIG. Use text labels.
  GitHub | LinkedIn | Twitter / X | Instagram | Telegram | npm | YouTube | Hashnode
  Each: <a> with aria-label="Follow Samuel on {platform}", 11px mono, color var(--text3)
  Hover: color var(--green)
  Use CONFIG URLs for each platform

Row 3 — Copyright + utility links (flex, gap 1rem, justify-center, flex-wrap):
  "© 2025 Samuel Nwankwo · Backend Engineer · Port Harcourt, Nigeria"
  11px mono, color var(--text3)
  Separator · then:
  <Link to="/blog">Blog</Link>
  <a href="/sitemap.xml" target="_blank" rel="noopener">Sitemap</a>
  <a href={CONFIG.resumePath} download>Resume</a>
  All: 11px mono, color var(--text3), hover var(--green)

---

## CASE STUDY MODAL (src/components/CaseStudyModal.jsx)

Props: project, onClose
Mounts: add overflow:hidden to body; unmounts: remove it
Escape key → onClose (useEffect keydown listener)
Click backdrop → onClose

Backdrop: position fixed, inset 0, z-index 200, bg rgba(0,0,0,0.8)
  flex center, padding 2rem

Inner panel:
  role="dialog", aria-modal="true", aria-labelledby="modal-title"
  bg var(--bg2), border 1px var(--border2), padding 2rem
  max-width 580px, width 100%, max-height 90vh, overflow-y auto
  position relative
  On mobile: max-height 100vh, border-radius 0, margin 0, align self to stretch

  Header:
    "Case Study" pill — 10px green caps mono, margin-bottom 6px
    Project name <h2 id="modal-title"> — Syne bold 22px, color var(--text)
    Project category — 11px mono, color var(--text3)
    Close ✕ button — absolute top 1.5rem right 1.5rem,
      border 1px var(--border2), color var(--text2), 12px mono, padding 4px 10px
      hover: border var(--green), color var(--green)
      aria-label="Close case study"

  Divider: 1px var(--border), margin 1.25rem 0

  4 content rows (Problem / Solution / Stack / Outcome):
    Each: padding 1rem 0, border-bottom 1px var(--border) except last
    Label: 10px mono, color var(--text3), uppercase, letter-spacing 0.15em, margin-bottom 6px
    Value: 13px mono, line-height 1.9
      Problem/Solution/Stack: color var(--text2)
      Outcome: color var(--green)

  If project.techDetail (array):
    "Architecture" row: flex-wrap tags using <Tag> component (non-primary)

  Action buttons row (margin-top 1.5rem, flex, gap 8px, flex-wrap):
    If project.link:
      "View Live →" — border 1px var(--green), color var(--green),
      padding 10px 24px, 11px uppercase mono
      hover: bg var(--green), color var(--bg)
    If project.github:
      "View on GitHub →" — border 1px var(--border2), color var(--text2),
      padding 10px 24px, 11px uppercase mono
      hover: border var(--green), color var(--green)

---

## HOME PAGE (src/pages/Home.jsx)

Renders:
  <SEO {...homeProps} />
  <main id="main-content" aria-label="Portfolio of Samuel Nwankwo">
    <NowStrip />
    <Hero />
    <Skills />
    <Experience />
    <Projects />
    <Freelance />
    <Testimonials />
    <GitHub />
    <Writing />
    <Contact />
  </main>

Handle scrollTo from navigation state (location.state?.scrollTo).

---

## HERO SECTION (src/sections/Hero.jsx)

<section id="hero" aria-label="Introduction" role="banner">

Layout: min-height 100vh, flex center, padding calc(var(--nav-h) + var(--strip-h) + 2rem) 2rem 4rem
Decorative bg: grid lines (aria-hidden) + radial glow (aria-hidden)
Inner: max-width var(--max-w), margin 0 auto, flex, align-items center, gap 4rem

LEFT CONTENT (flex: 1, min-width 0):
  Prompt: "$ whoami" — 12px, flex, gap 8px, color var(--text3)
    "$" in var(--green), aria-hidden="true"

  <h1>: Syne 800, clamp(46px,8vw,84px), line-height 1, letter-spacing -3px
    "Samuel" (color var(--text)) + <br /> + "Nwankwo" (color var(--green))

  Subtitle: Syne, clamp(17px,2.8vw,24px), color var(--text2), letter-spacing -0.5px
    "Backend Engineer — " + <span color var(--blue)>"Node.js · PHP · Cloud"</span>

  Summary <p>: 13px, color var(--text2), line-height 1.9, max-width 520px
    border-left 2px solid var(--green), padding-left 1.25rem

  Stats row: flex, gap 2.5rem, flex-wrap wrap
    4 stats: "7+" Years PHP/Laravel | "5+" Years Node.js | "$1M+" Payments Processed | "200+" Auth SDK Installs
    Num: Syne 800 30px, color var(--green)
    Label: 10px mono, color var(--text3), uppercase, letter-spacing 0.1em

  CTAs (flex, gap 1rem, flex-wrap):
    "View Experience" → href="#experience"
      bg var(--green), color var(--bg), padding 11px 26px, 12px mono, uppercase, font-weight 600
      hover: bg var(--green-dim)
    "Get In Touch" → href="#contact"
      border 1px var(--border2), color var(--text2), same padding
      hover: border var(--green), color var(--green)

  Resume download link (below CTAs, margin-top 0.75rem):
    <a href={CONFIG.resumePath} download>
    12px mono, color var(--text3), hover var(--green)
    "↓ Download Resume (PDF)"

RIGHT TERMINAL (hidden on ≤1100px):
  Width 370px, flex-shrink 0
  bg var(--bg2), border 1px var(--border)

  Title bar: bg var(--bg3), padding 10px 16px, flex, align-center, gap 8px
    border-bottom 1px var(--border)
    Dots: 10px circles — #ff5f57, #ffbd2e, #28ca41 (aria-hidden)
    Label "samuel@dev ~ portfolio" — 11px, color var(--text3), margin-left auto

  Terminal body: padding 16px, 12px mono, line-height 2.1
    Typing animation via useEffect: type "node --info samuel.json" at 55ms/char
    After typing completes (useState gate): reveal all output lines in order
    Cursor: 7×13px inline-block span, bg var(--green), animation blink 1s steps(1) infinite

    Output to show (after typing):
      name: "Nwankwo Chibuike Samuel"    ← key:amber, value:blue
      role: "Backend Engineer"
      location: "Port Harcourt, NG"
      stack: ["NestJS","Laravel","AWS"]
      available: true                    ← value:green

      › git log --oneline                ← prefix:green
      ✓ 200+ npm installs (auth-sdk)     ← green
      ✓ 99.7% uptime prediction-api      ← green
      ✓ 50+ tenants on SaaS platform     ← green

      › cat available.json               ← prefix:green
      { "status": "open",                ← blue
        "type": "remote",
        "notice": "immediate" }

    aria-label="Terminal showing developer info" on the terminal container
    aria-hidden="true" on the terminal (decorative)

---

## SKILLS SECTION (src/sections/Skills.jsx)

<section id="skills" aria-labelledby="skills-heading">
bg var(--bg2), padding var(--section-py) var(--section-px)
border-top + border-bottom 1px var(--border)

<SectionHeader id="skills-heading" tag="Technical Stack" title="Skills & Technologies" />

6 skill cards in CSS grid: repeat(auto-fit, minmax(260px, 1fr)), gap 1.25rem
Each card: FadeIn with delay={index * 60}
  <article>: bg var(--bg3), border 1px var(--border), padding 1.4rem
    Hover: border-color var(--green)
    Header: icon (color var(--green), 17px, aria-hidden) + <h3> category name (Syne bold 13px)
    Tags: flex-wrap, gap 6px, using <Tag> component

"Currently Exploring" row (full-width, after last card, FadeIn with delay 420ms):
  bg var(--bg3), border 1px var(--border), padding 1rem 1.4rem
  flex, align-center, gap 1rem, flex-wrap
  Left label: 11px green, "// currently exploring"
  Right: CONFIG.currentlyLearning.map → each item as <Tag> (non-primary)

SKILLS DATA (data/skills.js):
export default [
  { icon:"⬡", cat:"Languages & Frameworks",
    tags:[{l:"Node.js",p:1},{l:"NestJS",p:1},{l:"PHP",p:1},{l:"Laravel",p:1},
          {l:"Express.js"},{l:"TypeScript"},{l:"JavaScript"},{l:"React.js"}] },
  { icon:"◈", cat:"Databases",
    tags:[{l:"MongoDB",p:1},{l:"MySQL",p:1},{l:"PostgreSQL"},{l:"Redis"},{l:"Mongoose ODM"}] },
  { icon:"☁", cat:"Cloud & DevOps",
    tags:[{l:"AWS EC2",p:1},{l:"Docker",p:1},{l:"AWS S3"},{l:"Lambda"},
          {l:"Nginx"},{l:"GitHub Actions"},{l:"CI/CD"}] },
  { icon:"⟡", cat:"API & Architecture",
    tags:[{l:"REST APIs",p:1},{l:"GraphQL",p:1},{l:"Microservices"},{l:"WebSockets"},
          {l:"RabbitMQ"},{l:"Webhooks"}] },
  { icon:"⚡", cat:"Payments & Integrations",
    tags:[{l:"Stripe",p:1},{l:"Paystack",p:1},{l:"Apple Pay"},{l:"Split Payments"},
          {l:"WhatsApp API"},{l:"Mailchimp"}] },
  { icon:"◎", cat:"Testing & Security",
    tags:[{l:"Jest",p:1},{l:"PHPUnit",p:1},{l:"OWASP"},{l:"JWT/OAuth2"},
          {l:"Rate Limiting"},{l:"HTTPS/TLS"}] },
]

---

## EXPERIENCE SECTION (src/sections/Experience.jsx)

<section id="experience" aria-labelledby="experience-heading">
bg var(--bg), padding var(--section-py) var(--section-px)

<SectionHeader id="experience-heading" tag="Work History" title="Professional Experience" />

Timeline: <ol aria-label="Work history timeline"> (ordered = chronological)
  Position relative; ::before: absolute left 0, top 0, bottom 0, width 1px, bg var(--border)

Each job: <li> FadeIn delay={index * 70}
  padding-left 2rem, padding-bottom 2.75rem, position relative

  Dot: position absolute, left -5px, top 5px, 11×11px, border-radius 50%, aria-hidden
    current: bg var(--green)
    past: border 2px var(--green), bg var(--bg)

  Company row: flex, align-center, gap 10px
    <h3>: Syne bold 17px, color var(--text)
    CURRENT pill (if current): aria-label="Current position"
      bg rgba(0,255,157,0.1), color var(--green), border rgba(0,255,157,0.3)
      10px mono uppercase, padding 2px 8px

  Role: color var(--blue), 13px mono
  Meta: "City, Country · Date" — 11px mono, color var(--text3)
  Tech: flex-wrap, gap 6px
    Each tag: 10px mono, color var(--amber), border rgba(255,209,102,0.25),
    bg rgba(255,209,102,0.05), padding 2px 8px
  Bullets: <ul aria-label="Key achievements"> list-style none
    Each <li>: 12px mono, color var(--text2), line-height 1.9,
    padding-left 1.2rem, position relative
    ::before "›" absolute left 0, color var(--green), aria-hidden

EXPERIENCE DATA (data/experience.js):
export default [
  {
    company:"Sweeftly", role:"Backend Engineer — Full-Time, Remote",
    date:"May 2024 – Aug 2025", loc:"Cumbernauld, Scotland", current:true,
    tech:["NestJS","Express.js","MongoDB","AWS (EC2, ELB, S3)","Docker"],
    bullets:[
      "Architected e-commerce API (v1 Express.js → v2 NestJS) handling thousands of daily orders with chat-style ordering flow.",
      "Integrated 3 delivery partners (Stuart, Shipday, Gophr) + Stripe/Apple Pay; webhook reconciliation reduced payment discrepancies by ~90%.",
      "Deployed behind AWS ELB with autoscaling groups; achieved 99.9% uptime with S3 media uploads and automated backups.",
      "Built WhatsApp notification bot for real-time order/delivery updates, cutting support ticket volume by ~35%.",
    ]
  },
  {
    company:"Olotu Square", role:"Backend Engineer — Contract, Remote",
    date:"May 2024 – Present", loc:"Port Harcourt, Nigeria", current:true,
    tech:["Node.js","Express","Laravel","MongoDB","MySQL","Docker","GitHub Actions"],
    bullets:[
      "Migrated PHP monolith → Laravel; reduced deployment errors by ~50% through standardized architecture and automated tests.",
      "Multi-tenant SaaS with isolated DBs; cut client onboarding from 3 days to under 2 hours.",
      "GitHub Actions + Docker CI/CD enabling zero-downtime deployments across all client apps.",
      "Led 4-month backend training for 12+ developers — 80% now in active backend roles.",
    ]
  },
  {
    company:"Webxiel", role:"Laravel Developer — Contract, Remote",
    date:"Jan 2024 – Oct 2024", loc:"Enugu State, Nigeria", current:false,
    tech:["PHP","Laravel","MySQL"],
    bullets:[
      "Laravel microservice for landlord-to-tenant mobile API serving 10,000+ users.",
      "JWT auth, secure RESTful endpoints, webhook integrations for push notifications.",
      "Optimized N+1 queries; improved average endpoint response time by ~40%.",
    ]
  },
  {
    company:"iGiet Ltd", role:"Software Engineer — Contract, Remote",
    date:"Nov 2023 – Sep 2024", loc:"Port Harcourt, Nigeria", current:false,
    tech:["Node.js","Express.js","Laravel","React.js","GraphQL"],
    bullets:[
      "Parrot mobile app backend shipped from 0 to production in 6 weeks.",
      "REST+GraphQL hybrid API cut client data payload by ~30%.",
      "SSR + asset optimization reduced initial load time by ~50%.",
    ]
  },
  {
    company:"Credib", role:"Backend Developer — Full-Time, Remote",
    date:"Aug 2022 – Feb 2024", loc:"Port Harcourt, Nigeria", current:false,
    tech:["Node.js","GraphQL","MySQL","AWS","Docker","Redis","RabbitMQ"],
    bullets:[
      "GraphQL API gateway across 5+ microservices; reduced frontend integration complexity by ~60%.",
      "Paystack split payments + S3 serving 50,000+ assets.",
      "Redis caching cut avg DB query load by ~45%; RabbitMQ async job queues.",
      "Maintained 99.7% uptime across all containerized AWS EC2 production services.",
    ]
  },
  {
    company:"Emblic Technologies", role:"Software Developer — On-site",
    date:"Mar 2020 – Jul 2022", loc:"Port Harcourt, Nigeria", current:false,
    tech:["PHP","MySQL","Java/Kotlin (Android)","HTML/CSS/Bootstrap","AWS"],
    bullets:[
      "OfficePro — enterprise office suite (HR, Payroll, Inventory, Invoicing, Attendance) at 5+ corporate clients.",
      "Hospital Management System used by 3 healthcare facilities with patient mgmt, pharmacy, and billing.",
      "MyReminda published to Google Play Store; 1,000+ downloads.",
      "POS solution for supermarket chains; legacy payroll product with Excel/PDF reporting.",
    ]
  },
]

---

## PROJECTS SECTION (src/sections/Projects.jsx)

<section id="projects" aria-labelledby="projects-heading">
bg var(--bg2), padding var(--section-py) var(--section-px)
border-top + border-bottom 1px var(--border)

<SectionHeader tag="Featured Work" title="Project Highlights" />

useState: activeProject (null | project object) for modal
8 cards: <ul> + <li> wrappers, grid auto-fit minmax(270px,1fr), gap 1.25rem

Each card: FadeIn delay={index * 55}
  <article>: bg var(--bg3), border 1px var(--border), padding 1.4rem
    position relative, overflow hidden, flex column, height 100%
    ::before bar: absolute top 0, left 0, right 0, height 2px, bg var(--green)
      transform scaleX(0), transform-origin left, transition 0.3s
    Hover: transform translateY(-2px), ::before scaleX(1)
    cursor: pointer if has caseStudy, else default

    Category: "NN / cat" — 10px mono, color var(--text3)
    <h3>: Syne bold 15px, color var(--text)
    <p>: 12px mono, color var(--text2), line-height 1.8, flex:1, margin-bottom 1rem
    Bottom row: border-top 1px var(--border), padding-top 0.75rem, flex space-between, align-center
      Left: metric — green 11px mono
      Right: flex gap 10px
        If caseStudy: <button> "case study ↗" aria-label="View case study for {name}"
          10px mono, color var(--text3), hover var(--green)
          onClick: setActiveProject(project)
        If link: <a> "live ↗" aria-label="View {name} live", 10px mono, color var(--text3)
          hover var(--green), target _blank, rel noopener

{activeProject && <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />}

PROJECTS DATA (data/projects.js):
export default [
  {
    num:"01", cat:"npm package", name:"Auth SDK for Express.js",
    desc:"TypeScript-first Express.js auth SDK on npm. Zero-config JWT setup with refresh tokens, role-based guards, and strategy pattern.",
    metric:"200+ app installs",
    link:"https://npmjs.com/~saminwankwo",
    github:"https://github.com/saminwankwo",
    techDetail:["Node.js","TypeScript","Express.js","JWT","Refresh Tokens","npm Registry","Semantic Versioning"],
    caseStudy:{
      problem:"Every project started with the same copy-pasted JWT middleware, leading to inconsistent security implementations across codebases.",
      solution:"Extracted auth logic into a configurable npm package supporting multiple strategies, automatic refresh token rotation, and role-based route guards. Full TypeScript types and JSDoc coverage.",
      stack:"Node.js · TypeScript · Express.js · JWT · npm Registry",
      outcome:"Adopted by 200+ applications. Auth integration time reduced from ~2 hours to under 10 minutes. Zero reported security regressions."
    }
  },
  {
    num:"02", cat:"SaaS platform", name:"Multitenant SaaS Platform",
    desc:"Database-per-tenant Laravel architecture for 50+ clients with automated provisioning on signup. Zero manual ops.",
    metric:"3 days → 30 min onboarding",
    techDetail:["Laravel","MySQL","Docker","GitHub Actions","Tenant Isolation","Automated Provisioning","Seeding"],
    caseStudy:{
      problem:"Every new client required 3 days of manual DB setup, config changes, and server work — blocking the team from building features.",
      solution:"Multi-tenant Laravel platform with automatic DB creation, seed data injection, environment config generation, and deployment pipeline triggered on client signup.",
      stack:"Laravel · MySQL · Docker · GitHub Actions",
      outcome:"Onboarding from 3 days to 30 minutes. Scaled to 50+ tenants with zero additional ops overhead. Team reclaimed ~6 hours per week."
    }
  },
  {
    num:"03", cat:"e-commerce API", name:"E-Commerce API",
    desc:"Production RESTful API for product, cart, checkout, and vendor split payouts. Stripe with idempotency and reconciliation.",
    metric:"$1M+ processed, zero downtime",
    techDetail:["Laravel","MySQL","Stripe","AWS EC2","Docker","Idempotency Keys","Webhook Reconciliation","Queue Workers"],
    caseStudy:{
      problem:"Client needed high-reliability payment infrastructure with split payouts to multiple vendors and audit-ready reconciliation reporting.",
      solution:"Laravel REST API with Stripe split payments, idempotency keys for retry safety, webhook signature verification, automated reconciliation reports, and queue-backed order processing.",
      stack:"Laravel · MySQL · Stripe · AWS EC2 · Docker · Laravel Queues",
      outcome:"$1M+ processed in the first 6 months. Zero payment failures or unplanned downtime. Reconciliation reports automated — 3 hours of manual work eliminated weekly."
    }
  },
  {
    num:"04", cat:"developer tools", name:"DevXP.dev",
    desc:"Developer upskilling platform with simulated Git workflows, code reviews, and TDD exercises with real-time feedback.",
    metric:"500+ users · 80% WAU",
    link:"#",
    techDetail:["Node.js","Express","MongoDB","AWS","Redis","WebSockets","GitHub API"]
  },
  {
    num:"05", cat:"ML + serverless", name:"Sports Prediction API",
    desc:"AWS Lambda serverless API wrapping a pre-trained ML model. Real-time win probabilities with sub-100ms cold starts.",
    metric:"<100ms cold start · 99.7% uptime",
    techDetail:["Node.js","AWS Lambda","API Gateway","ML Integration","Serverless Framework","CloudWatch"]
  },
  {
    num:"06", cat:"security", name:"AI Intrusion Detection System",
    desc:"Network intrusion detection using PHP data ingestion and TensorFlow anomaly models with real-time alerting.",
    metric:"92% detection accuracy",
    techDetail:["PHP","TensorFlow","Python","Real-time Alerting","Network Monitoring","Anomaly Detection"]
  },
  {
    num:"07", cat:"websockets", name:"Remote Access Terminal",
    desc:"Secure authenticated shell management over WebSockets. Encrypted, session-scoped remote access for support workflows.",
    metric:"60% less troubleshooting time",
    techDetail:["Node.js","WebSockets","SSH","Encryption","Session Management","Authentication"]
  },
  {
    num:"08", cat:"portfolio", name:"Interactive Dev Portfolio",
    desc:"This portfolio — live GitHub feed, Hashnode blog integration, case studies, and GitHub Actions CI/CD.",
    metric:"95+ Lighthouse score",
    link:"https://github.com/saminwankwo",
    techDetail:["React","Vite","React Router","GitHub API","Hashnode GraphQL","GitHub Actions","SEO","PWA"]
  },
]

---

## FREELANCE SECTION (src/sections/Freelance.jsx)

<section id="freelance" aria-labelledby="freelance-heading">
bg var(--bg), padding var(--section-py) var(--section-px)

<SectionHeader tag="Global Clients" title="Freelance Engagements" />

<ul aria-label="Freelance client list">: grid auto-fit minmax(200px,1fr), gap 1rem
Each <li>: FadeIn delay={index * 50}
  <article>: bg var(--bg2), border 1px var(--border), padding 1rem 1.2rem
    hover: border-color var(--green)
    <h3>: Syne bold 13px, color var(--text)
    Country · Sector: 10px mono, color var(--text3), uppercase, letter-spacing 0.1em
    Stack: 11px mono, color var(--text2)

FREELANCE DATA (data/freelance.js):
export default [
  { name:"DigiBank",     country:"🇳🇬 Nigeria",  sector:"Fintech",     stack:"PHP/Laravel — loan scheduling API" },
  { name:"VendoHub",     country:"🇺🇸 USA",       sector:"Marketplace", stack:"Node.js, MongoDB — vendor onboarding" },
  { name:"EduCrest LMS", country:"🇬🇧 UK",        sector:"EdTech",      stack:"NestJS — role-based LMS backend" },
  { name:"Schetia",      country:"🇳🇬 Nigeria",  sector:"EdTech",      stack:"Node.js, Express, MongoDB" },
  { name:"Movment",      country:"🇳🇬 Nigeria",  sector:"Transport",   stack:"Node.js — ride-sharing dispatch API" },
  { name:"GodgraceLab",  country:"🇳🇬 Nigeria",  sector:"HealthTech",  stack:"PHP, MySQL — healthcare admin portal" },
  { name:"SparkxyFix",   country:"🇳🇬 Nigeria",  sector:"Services",    stack:"Node.js, Stripe — booking & payments" },
  { name:"KID Platform", country:"🇳🇬 Nigeria",  sector:"EdTech",      stack:"React.js, Node.js — children's platform" },
]

---

## TESTIMONIALS SECTION (src/sections/Testimonials.jsx)

<section id="testimonials" aria-labelledby="testimonials-heading">
bg var(--bg2), padding var(--section-py) var(--section-px)
border-top + border-bottom 1px var(--border)

<SectionHeader tag="Social Proof" title="What People Say" />

Grid: auto-fit minmax(260px,1fr), gap 1.25rem
Each: FadeIn delay={index * 70}

<figure> (semantic for quote + attribution):
  bg var(--bg3), border 1px var(--border), padding 1.5rem, flex column, gap 1rem
  <span aria-hidden>: 22px, color var(--green), Georgia serif — opening quote mark
  <blockquote cite={name}>:
    <p>: 12px mono, color var(--text2), font-style italic, line-height 1.9, flex:1
  <figcaption>: border-top 1px var(--border), padding-top 0.75rem
    <strong>: Syne bold 13px, color var(--text)
    <span>: 10px mono, color var(--text3), display block, margin-top 2px

TESTIMONIALS DATA (data/testimonials.js):
export default [
  {
    quote:"Samuel consistently delivers clean, well-documented APIs on time. His ability to onboard new concepts quickly and mentor others while shipping production features is rare.",
    name:"Engineering Lead",
    role:"Olotu Square"
  },
  {
    quote:"The NestJS backend Samuel built for our LMS is rock solid. Role-based access, clean architecture, thorough documentation — exactly what we needed.",
    name:"Founder",
    role:"EduCrest LMS (UK)"
  },
  {
    quote:"Samuel taught our cohort from zero to deploying REST APIs in 4 months. Practical, patient, and deeply knowledgeable about real-world backend patterns.",
    name:"Backend Developer",
    role:"Olotu Square Training Graduate"
  },
]

---

## GITHUB SECTION (src/sections/GitHub.jsx)

<section id="github" aria-labelledby="github-heading">
bg var(--bg), padding var(--section-py) var(--section-px)

<SectionHeader tag="Open Source" title="GitHub Activity" />

Uses useGitHub hook. Grid: 1fr 1fr, gap 1.5rem (stacks on mobile).

Loading state: skeleton boxes (bg var(--bg3), pulse animation)
Error state: muted text "GitHub stats unavailable" — never crashes page

LEFT CARD (bg var(--bg2), border 1px var(--border), padding 1.5rem):
  <h3> "Top Repositories" — 11px mono, muted, uppercase, margin-bottom 1rem
  <ul>: up to 6 repos
    Each <li>: padding 0.75rem 0, border-bottom 1px var(--border) except last
      Repo name: <a href={html_url} target="_blank"> 13px mono, color var(--green)
      Description: 11px mono, color var(--text3), display -webkit-box,
        -webkit-line-clamp 1, overflow hidden (single line truncate)
      Bottom row: flex, gap 1rem, margin-top 4px
        Language tag: <Tag size="sm"> color amber style
        Stars: "★ {count}" — 10px mono, color var(--text3)
        Forks: "⑂ {count}" — 10px mono, color var(--text3)
  "View all on GitHub →" <a>: color var(--green), 11px mono, margin-top 1rem, display block

RIGHT CARD (bg var(--bg2), border 1px var(--border), padding 1.5rem):
  <h3> "Contribution Stats" — same style
  2×2 stat grid (gap 1rem, margin-bottom 1.25rem):
    Each stat box: bg var(--bg3), border 1px var(--border), padding 1rem, text-align center
      Value: Syne 800 24px, color var(--green)
      Label: 10px mono, muted, uppercase
    Stats: Public Repos | Followers | Following | Public Gists (or Total Stars if available)
  
  GitHub streak image:
    <img> src=`https://github-readme-streak-stats.herokuapp.com?user=${CONFIG.github}&theme=dark&background=0f1217&ring=00ff9d&fire=00ff9d&currStreakLabel=00ff9d&sideLabels=8892a4&dates=4a5568&border=1e2530`
    width 100%, border 1px var(--border), display block
    alt="GitHub contribution streak for Samuel Nwankwo"
    loading="lazy"
    onError: hide image (e.currentTarget.style.display = 'none')

GITHUB HOOK (src/hooks/useGitHub.js):
  Fetches:
    https://api.github.com/users/{CONFIG.github}
    https://api.github.com/users/{CONFIG.github}/repos?sort=updated&per_page=6&type=public
  Uses Promise.all for parallel requests
  Returns: { user, repos, loading, error }
  Handles 403 (rate limit) gracefully — returns error state, never throws

---

## WRITING SECTION (src/sections/Writing.jsx)

<section id="writing" aria-labelledby="writing-heading">
bg var(--bg2), padding var(--section-py) var(--section-px)
border-top + border-bottom 1px var(--border)

<SectionHeader tag="Tech Content" title="Articles & Writing" />

Uses useHashnode({ first: 4 }) hook.
Loading: 4 skeleton rows (height 60px each, pulse animation)
Error / empty: fall back silently to static articles from data/articles.js

Articles list: flex column, border 1px var(--border), overflow hidden
Each article: FadeIn delay={index * 60}
  <article>: <a href={article.url} target="_blank" rel="noopener noreferrer"
    display flex, justify-content space-between, align-items center, gap 1.5rem
    padding 1.1rem 1.4rem, bg var(--bg3), border-bottom 1px var(--border) except last
    Hover: bg var(--bg)
    Left group: flex, align-center, gap 1rem
      Tag pill: 9px mono, color var(--green), border rgba(0,255,157,0.3), bg rgba(0,255,157,0.06), padding 3px 8px
      <h3>: Syne 600 14px, color var(--text), line-height 1.4
    Right group: flex, align-center, gap 1.2rem, flex-shrink 0
      Read time: 11px mono, color var(--text3)
      "↗" 14px, color var(--text3)

Below list (margin-top 1.25rem):
  Two rows, flex, justify-content space-between, align-items center, flex-wrap, gap 1rem:
    "View all articles →" <a href={CONFIG.hashnodeUrl} target="_blank">
      color var(--green), 11px mono
    YouTube row: border 1px var(--border), padding 0.9rem 1.4rem, flex, justify-content space-between
      Left: "▶" (color var(--red), aria-hidden) + "Backend dev content on YouTube" 13px
      Right: "Subscribe →" <a href={CONFIG.youtubeUrl} target="_blank" color var(--green) 11px mono>

ARTICLES DATA (data/articles.js) — static fallback:
export default [
  { tag:"Architecture", title:"Building Multi-Tenant SaaS with Laravel: DB Isolation Patterns",      readTime:"8 min", href:"https://saminwankwo.hashnode.dev" },
  { tag:"Performance",  title:"Redis Caching Strategies That Cut My DB Load by 45%",                 readTime:"6 min", href:"https://saminwankwo.hashnode.dev" },
  { tag:"API Design",   title:"GraphQL vs REST: When I Use Each in Production",                      readTime:"5 min", href:"https://saminwankwo.hashnode.dev" },
  { tag:"DevOps",       title:"Zero-Downtime Deployments with Docker + GitHub Actions",              readTime:"7 min", href:"https://saminwankwo.hashnode.dev" },
]

---

## HASHNODE HOOK (src/hooks/useHashnode.js)

Props: { first = 4 }
Endpoint: POST https://gql.hashnode.com
Headers: Content-Type: application/json

GraphQL query:
  query GetPosts($username: String!, $first: Int!) {
    user(username: $username) {
      publications(first: 1) {
        edges {
          node {
            posts(first: $first) {
              edges {
                node {
                  title
                  brief
                  slug
                  url
                  readTimeInMinutes
                  publishedAt
                  coverImage { url }
                  tags { name }
                }
              }
            }
          }
        }
      }
    }
  }
Variables: { username: CONFIG.hashnode, first }

Returns: { posts, loading, error }
Posts shape: { title, brief, slug, url, readTime: readTimeInMinutes + " min", date: publishedAt, tag: tags[0]?.name || "Article", coverImage }
On any error: { posts: [], loading: false, error: true }

Single post query (used in BlogPost.jsx — pass slug):
  Separate export: useHashnodePost(slug)
  Query: same user/publication but use post(slug: $slug)
  Fetches additionally: content { html }
  Returns: { post, loading, error }

---

## CONTACT SECTION (src/sections/Contact.jsx)

<section id="contact" aria-labelledby="contact-heading">
bg var(--bg2), padding var(--section-py) var(--section-px), border-top 1px var(--border)

Inner: max-width var(--max-w), margin 0 auto
Grid: 1fr 1fr, gap 4rem (stacks to 1fr on mobile)

LEFT COLUMN:
  <SectionHeader tag="Open to Opportunities" title={<>"Let's Build<br/><span green>Something.</span>"</>} />
  Subtitle <p>: 13px mono, color var(--text2), line-height 1.9, margin-bottom 2rem
    "Available for full-time remote roles, contract work, and technical consultations.
     Node.js · PHP/Laravel · AWS · Microservices."

  5 contact link rows (flex, align-center, gap 12px, border 1px var(--border), padding 11px 14px):
    Hover: border var(--green), color var(--green), transition 0.2s
    Use <a> with aria-label for each:
    @  nwankwosami@gmail.com   → mailto:
    #  +234 805 864 3829       → tel:
    ⌥  github.com/saminwankwo → CONFIG.githubUrl
    ⌘  linkedin.com/saminwankwo → CONFIG.linkedinUrl
    ◉  npmjs.com/~saminwankwo  → CONFIG.npmUrl

  Social quick-links row (flex, gap 8px, flex-wrap, margin-top 1rem):
    Small bordered pills for all social platforms:
    Twitter/X | Instagram | Telegram | YouTube | Hashnode
    Each: 11px mono, border 1px var(--border2), padding 4px 10px, color var(--text3)
    hover: border var(--green), color var(--green)
    href: CONFIG.{platform}Url, target _blank, rel noopener

  Availability card (bg var(--bg3), border 1px var(--border), padding 1rem, margin-top 1.5rem):
    Title: "// availability" — 10px green mono
    4 rows: label (10px muted caps) + value (12px green mono)
      Timezone     | UTC+1 (WAT) · EU & partial US East overlap
      Available    | Immediately
      Work type    | Remote · Contract · Full-time
      Notice       | None required

  Download Resume button (below availability card, margin-top 1rem):
    <a href={CONFIG.resumePath} download>
    Full-width, border 1px var(--border2), color var(--text2), bg transparent
    padding 12px, flex center, gap 8px, 12px mono uppercase
    "↓  Download Resume (PDF)"
    hover: border var(--green), color var(--green)

RIGHT COLUMN — Contact Form:
  <form aria-label="Contact form" onSubmit={handleSubmit}>

  3 fields (each: flex column, gap 6px, margin-bottom 1rem):
    <label htmlFor="name"> "Name" — 10px mono, muted, uppercase
    <input id="name" type="text" required aria-required="true"
      placeholder="Your name"
      value + onChange + onFocus/onBlur (border color toggle)
      Style: bg var(--bg3), border 1px var(--border), color var(--text),
        padding 10px 14px, 13px mono, outline none, width 100%
      Focus: border-color var(--green)
      Placeholder: color var(--text3)>

    <label htmlFor="email"> "Email" — same label style
    <input id="email" type="email" required aria-required="true"
      placeholder="your@email.com">

    <label htmlFor="message"> "Message" — same
    <textarea id="message" rows="5" required aria-required="true"
      placeholder="Tell me about your project or role...">

  Submit button (type="submit", full-width):
    Default: bg var(--green), color var(--bg), padding 13px,
      12px mono, font-weight 600, uppercase, letter-spacing 0.1em
    Submitting state: bg var(--green-dim), text "Sending...", disabled
    Hover (not submitting): bg var(--green-dim)

  Form submission logic:
    Uses Formspree: fetch(`https://formspree.io/f/${CONFIG.formspreeId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ name, email, message })
    })
    States: idle | submitting | success | error
    If CONFIG.formspreeId is empty: log warning, show success anyway (dev mode)

  Success state: role="alert", aria-live="polite"
    border 1px rgba(0,255,157,0.4), bg rgba(0,255,157,0.04), padding 2rem, text-align center
    "✓" 32px green, then "Message sent. I'll get back to you soon." 13px green mono

  Error state: role="alert"
    border 1px rgba(255,107,107,0.4), bg rgba(255,107,107,0.04), padding 1rem
    "Something went wrong. Please email me directly at nwankwosami@gmail.com" 12px var(--red) mono

  "Response time: usually within 24 hours" — 11px mono, color var(--text3), text-align center, margin-top 0.75rem

---

## BLOG INDEX (src/pages/Blog.jsx)

<SEO {...blogSEO} />
<main id="main-content" aria-label="Blog posts">

Uses useHashnode({ first: 20 })
Loading: 3 skeleton post cards
Error: "Couldn't load posts." + retry button (onClick re-triggers fetch via key/state reset)

Layout: bg var(--bg), min-height 100vh, padding-top calc(var(--nav-h))

Header area (max-width 800px, margin 0 auto, padding 4rem 2rem 2rem):
  <p className="section-tag"> // Blog </p>
  <h1>: "Writing & Notes" — Syne 800, clamp(28px,5vw,48px), letter-spacing -1.5px
  <p>: subtitle 13px mono, color var(--text2), line-height 1.9, margin-top 0.75rem
    "Thoughts on backend architecture, performance, and engineering craft."
  Accent line: 40×2px green, margin-top 1rem

Filter bar (max-width 800px, margin 0 auto, padding 0 2rem 1.5rem):
  <nav aria-label="Filter posts by topic">
    Flex row, gap 8px, flex-wrap wrap
    On mobile: overflow-x auto, flex no-wrap (horizontal scroll)
    Tags: All | Architecture | Performance | API Design | DevOps | Node.js | Laravel
    Active: <button> bg var(--green), color var(--bg), border var(--green), aria-pressed="true"
    Inactive: border var(--border2), color var(--text2), aria-pressed="false"
      hover: border var(--green), color var(--green)
    All: 11px mono uppercase, padding 5px 12px
    Filtering: client-side, useState activeTag
      Filter by: post.tags?.some(t => t.name === activeTag) || activeTag === "All"

Post list (max-width 800px, margin 0 auto, padding 0 2rem 4rem):
  <ul aria-label="Blog posts">
    Each post: <li>, FadeIn delay={index * 50}
      <article>: <a href={post.url} target="_blank" rel="noopener noreferrer">
        display block, border 1px var(--border), padding 1.5rem
        bg var(--bg2), margin-bottom 1px, transition all 0.2s
        Hover: bg var(--bg3), border-color var(--green)
        Header: flex, justify-content space-between, align-items center
          Tag pill + Date (11px mono, color var(--text3))
        <h2>: Syne bold 18px, color var(--text), margin 0.5rem 0, line-height 1.3
        <p>: excerpt 12px mono, color var(--text2), line-height 1.8, margin-bottom 0.75rem
        Footer: flex, justify-content space-between
          Read time (11px muted) + "Read on Hashnode ↗" (green 11px mono)

Empty state (no posts after filter):
  "No posts found for this topic." — centered, 13px mono, color var(--text3), padding 3rem

---

## BLOG POST (src/pages/BlogPost.jsx)

Route: /blog/:slug
useParams() → slug
useHashnodePost(slug) → { post, loading, error }
If error or post === null after loading: <NotFound />

<SEO /> rendered after post loads (conditional)
<main id="main-content">

Loading state: centered column flex, padding 6rem 2rem
  Blinking cursor block (same style as terminal cursor, 8px × 16px)
  "Loading post..." 13px mono, color var(--text3), margin-top 1rem

Layout: <article> max-width 720px, margin 0 auto, padding 6rem 2rem 4rem

<header>:
  Back link: <Link to="/blog"> "← Back to blog"
    11px mono, color var(--text3), hover var(--green), display inline-block, margin-bottom 2rem

  Cover image (if post.coverImage?.url):
    <img> width 100%, max-height 320px, object-fit cover
    border 1px var(--border), margin-bottom 1.5rem
    alt={post.title}, loading="lazy"

  Tag + date row: flex, align-center, gap 12px, margin-bottom 1rem
    Tag pill (green) + <time dateTime={post.publishedAt}> formatted date (muted 11px)

  <h1>: Syne 800, clamp(26px,4vw,40px), letter-spacing -1px, line-height 1.15, margin-bottom 0.5rem
  Meta: "{ readTime } · by Samuel Nwankwo" — 11px mono, color var(--text3)

  Canonical notice: "Originally published on Hashnode →" <a href={post.url}>
    11px mono, color var(--text3), hover var(--green), margin-top 0.5rem, display inline-block
    NOTE: SEO canonical points to Hashnode — avoids duplicate content penalty

  Divider: 1px var(--border), margin 2rem 0

Post body: <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content?.html }} />

Post footer (border-top 1px var(--border), margin-top 3rem, padding-top 2rem):
  Share row: "Share this post:" label (11px muted) + flex row of share links:
    Twitter/X: <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(post.url)}`}
      target _blank> "Share on X →"
    LinkedIn: <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(post.url)}&title=${encodeURIComponent(post.title)}`}
      target _blank> "Share on LinkedIn →"
    Copy link button: copies post.url to clipboard
      onClick: navigator.clipboard.writeText(post.url) → show "Copied!" toast 2s
    All: 11px mono, border 1px var(--border2), padding 6px 12px, color var(--text2), hover var(--green)

  "View all articles →" <Link to="/blog">: green 11px mono, display block, margin-top 1.5rem

---

## 404 PAGE (src/pages/NotFound.jsx)

<SEO title="404 — Page Not Found" description="This page doesn't exist." noIndex={true}
     canonical={CONFIG.siteUrl + "/404"} />

<main id="main-content">
  Full-viewport center flex column, text-align center, padding 2rem
  <h1> "404" — Syne 800, 80px, color var(--green), line-height 1
  <p> "Page not found." — Syne 600, 24px, color var(--text), margin 1rem 0
  <p> "The page you're looking for doesn't exist or has been moved."
    13px mono, color var(--text2), margin-bottom 2rem, max-width 400px
  <Link to="/"> "← Back home"
    bg var(--green), color var(--bg), padding 12px 28px, 12px mono, uppercase, font-weight 600
    hover: bg var(--green-dim)

---

## RESPONSIVE BREAKPOINTS

Mobile-first. All sections default to single column, padding 1.25rem.

@media (min-width: 480px):
  Hero stats: 2-column grid (2×2)
  Stats gap: 2rem

@media (min-width: 768px):
  Nav: show links + buttons, hide ☰ button
  Hero inner: flex-direction row (left + terminal side by side)
  Contact inner: grid 1fr 1fr
  Skills: 2-column grid
  Footer rows: flex row
  NowStrip: show full text

@media (min-width: 1024px):
  Skills: 3-column auto-fit grid
  Projects: 3-column auto-fit grid
  GitHub section: 2-column grid
  Freelance: 4-column auto-fit grid
  Section padding: var(--section-py) var(--section-px)

@media (min-width: 1100px):
  Hero terminal: visible (display block)
  Hero inner max-width: var(--max-w)

@media (min-width: 1280px):
  All section inners: max-width var(--max-w), margin 0 auto

Mobile-specific overrides:
  Nav: 56px height maintained on all sizes
  NowStrip: hide subtitle text on <380px (just dot + "Currently available")
  Hero name: clamp(38px, 10vw, 72px) on mobile
  Stats: flex-wrap, gap 1.5rem
  Timeline: dots and line visible on all sizes
  Project cards: 1 column <480px, 2 column 480–1024px, 3 column 1024px+
  CaseStudyModal: full-screen on mobile (inset 0, border-radius 0, max-height 100vh)
  Blog filter bar: overflow-x auto, flex no-wrap (horizontal scroll, hide scrollbar)
  Contact grid: 1 column on mobile

---

## ACCESSIBILITY REQUIREMENTS

Enforced throughout all components:

1. One <h1> per page only (enforced by structure)
2. Heading hierarchy: h1 → h2 (SectionHeader) → h3 (cards/jobs/posts) — no skips
3. All images: meaningful alt="" or decorative aria-hidden="true" + alt=""
4. All interactive elements keyboard-navigable (Tab order follows visual order)
5. :focus-visible in globals.css — visible green outline, no outline suppression
6. Color contrast WCAG AA minimum on all text (design tokens verified)
7. All form inputs associated with <label> via htmlFor/id pairs
8. aria-required="true" on required form fields
9. role="alert" + aria-live="polite" on form success/error messages
10. Modal: role="dialog", aria-modal="true", aria-labelledby, focus trap, scroll lock
11. Skip-to-content link (first element in DOM, visible on focus)
12. aria-label on icon-only and ambiguous buttons
13. aria-current="page" on active NavLink
14. aria-pressed on filter toggle buttons (Blog page)
15. aria-expanded on mobile menu ☰ button
16. Reduced motion media query disabling all animations
17. Semantic HTML: <header>, <nav>, <main>, <section>, <article>, <figure>,
    <blockquote>, <footer>, <time>, <address> used appropriately
18. Lists: <ul>/<ol> for card grids, timeline entries, nav links
19. External links: rel="noopener noreferrer" + (if icon-only) aria-label

---

## STRUCTURED DATA SUMMARY

index.html (static, always present):
  Person schema (full)
  WebSite schema

Home.jsx (via SEO component):
  ProfilePage schema

Blog.jsx (via SEO component):
  Blog schema

BlogPost.jsx (via SEO component, per post):
  Article schema with post-specific fields
  canonical = post.url (Hashnode) — content authority stays with Hashnode

---

## PERFORMANCE NOTES (as comments in code)

index.html:
  <!-- IMPORTANT: Replace /og-image.jpg with a real 1200×630px JPG before deploying -->
  <!-- IMPORTANT: Generate icon-192.png + icon-512.png from your logo for PWA -->
  <!-- IMPORTANT: Update siteUrl in config.js and canonical tags with real domain -->
  <!-- IMPORTANT: Set real Hashnode username in config.js and .env -->

App.jsx:
  // Blog + BlogPost are lazy-loaded for faster initial bundle
  // Use React.lazy + Suspense with an empty fallback (avoids layout shift)

globals.css:
  /* Google Fonts loaded with display=swap — prevents FOIT */
  /* Preconnect links in index.html reduce font load latency */

Writing.jsx / GitHub.jsx:
  // Images use loading="lazy" — below-fold images deferred
  // Skeleton UI prevents layout shift during async loads (no CLS)

All <img>:
  // Always set explicit width + height attributes to prevent CLS
  // Set loading="lazy" on all below-fold images

---

## COMPLETE DATA SUMMARY

All data files must be fully populated with the content specified above.
No file may contain placeholder comments like "// add more" or "TODO".
Blog posts come from Hashnode — no posts.js file is needed.
The articles.js file is a static fallback only.

---

## FINAL OUTPUT CHECKLIST

Before outputting, verify every file:
  ✓ Imports are correct (no missing imports)
  ✓ CONFIG used from data/config.js (not hardcoded strings)
  ✓ Every async operation has loading + error + success states
  ✓ Every page has <SEO /> with correct props
  ✓ Every page has id="main-content" on <main>
  ✓ Footer appears on every page (via App.jsx layout)
  ✓ Mobile menu includes all nav links + social links + buttons
  ✓ All social links use CONFIG URLs (GitHub, LinkedIn, Twitter, Instagram, Telegram, npm, YouTube, Hashnode)
  ✓ Form submission uses Formspree with proper error handling
  ✓ CaseStudyModal handles multiple projects (state per click)
  ✓ Hashnode hook used for both Writing section (4 posts) and Blog page (20 posts)
  ✓ sitemap generator script handles missing env vars gracefully
  ✓ No console.error calls that would leak in production (use console.warn for non-critical)
  ✓ All external links have target="_blank" rel="noopener noreferrer"
  ✓ Resume download link uses download attribute with filename
  ✓ Reduced motion media query present in globals.css
  ✓ :focus-visible styles present in globals.css
  ✓ Skip-to-content link is first element rendered
