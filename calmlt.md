# SAMUEL NWANKWO — PORTFOLIO AGENT PROMPT v2
# React multi-page portfolio — improved architecture edition
# Feed this entire file to a senior frontend developer agent.
# Last updated: April 2025

---

You are a senior frontend developer agent. Build a complete, production-ready,
multi-page portfolio website for a backend engineer named Samuel Nwankwo
using React (Vite + React Router v6).

Output only raw file contents — no explanations, no markdown code fences,
no commentary between files.

---

## OUTPUT FORMAT

Output every file using this exact format:

// path/to/filename.ext
[complete raw file content]

Blank line between each file. Output in the exact order listed in PROJECT STRUCTURE.

Rules:
  - Output every single file listed. Do not skip any.
  - No placeholder data — all arrays fully populated with real content
  - No lorem ipsum anywhere
  - Every async hook handles loading + success + error states
  - SEO component used on every page with correct per-page props
  - Footer rendered on every page via App.jsx layout wrapper
  - Every section uses correct semantic HTML5 elements
  - No hardcoded strings — everything flows from src/config/index.js
  - No console.error in production code — use console.warn for non-critical

---

## PROJECT STRUCTURE

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

  src/config/index.js

  src/types/index.js

  src/styles/globals.css
  src/styles/typography.css
  src/styles/animations.css

  src/lib/seo.js
  src/lib/formatters.js
  src/lib/analytics.js

  src/data/skills.js
  src/data/experience.js
  src/data/projects.js
  src/data/freelance.js
  src/data/testimonials.js
  src/data/articles.js

  src/hooks/useHashnode.js
  src/hooks/useGitHub.js
  src/hooks/useClipboard.js
  src/hooks/useScrollSpy.js

  src/components/seo/SEO.jsx

  src/components/layout/Nav.jsx
  src/components/layout/MobileMenu.jsx
  src/components/layout/Footer.jsx
  src/components/layout/NowStrip.jsx

  src/components/ui/Tag.jsx
  src/components/ui/Button.jsx
  src/components/ui/FadeIn.jsx
  src/components/ui/Skeleton.jsx
  src/components/ui/Modal.jsx
  src/components/ui/Toast.jsx
  src/components/ui/Spinner.jsx
  src/components/ui/SectionHeader.jsx
  src/components/ui/ErrorBoundary.jsx

  src/components/features/CaseStudyModal.jsx
  src/components/features/TerminalWidget.jsx
  src/components/features/ContactForm.jsx
  src/components/features/GitHubStats.jsx
  src/components/features/ArticleList.jsx

  src/sections/Hero.jsx
  src/sections/Skills.jsx
  src/sections/Experience.jsx
  src/sections/Projects.jsx
  src/sections/Freelance.jsx
  src/sections/Testimonials.jsx
  src/sections/GitHub.jsx
  src/sections/Writing.jsx
  src/sections/Contact.jsx

  src/pages/Home.jsx
  src/pages/Blog.jsx
  src/pages/BlogPost.jsx
  src/pages/NotFound.jsx

---

## TECH STACK

- Vite 5 + React 18
- React Router v6 (BrowserRouter + Routes)
- Plain CSS with CSS custom properties — no Tailwind, no CSS-in-JS
- Google Fonts: JetBrains Mono + Syne (via @import in globals.css)
- Zero extra runtime dependencies beyond react-router-dom
- Form submission via Formspree (native fetch, no SDK)
- GitHub stats via public GitHub REST API (unauthenticated)
- Blog posts via Hashnode public GraphQL API

---

## PACKAGE.JSON

{
  "name": "samuel-nwankwo-portfolio",
  "private": true,
  "version": "2.0.0",
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
  resolve: {
    alias: {
      '@': '/src',
      '@config': '/src/config',
      '@data': '/src/data',
      '@hooks': '/src/hooks',
      '@lib': '/src/lib',
      '@ui': '/src/components/ui',
      '@features': '/src/components/features',
      '@layout': '/src/components/layout',
      '@sections': '/src/sections',
      '@pages': '/src/pages',
    }
  },
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

NOTE: Because Vite aliases are defined above, all imports throughout the project
MUST use these aliases. Examples:
  import CONFIG from '@config'                instead of '../../../config'
  import Button from '@ui/Button'             instead of '../../components/ui/Button'
  import { formatDate } from '@lib/formatters' instead of '../lib/formatters'
  import skills from '@data/skills'           instead of '../../data/skills'

---

## .ENV.EXAMPLE

# Copy this to .env and fill in your real values.
# All vars must be prefixed VITE_ to be available in the browser.

VITE_SITE_URL=https://saminwankwo.dev
VITE_HASHNODE_USERNAME=saminwankwo
VITE_HASHNODE_BLOG=saminwankwo.hashnode.dev
VITE_GITHUB_USERNAME=saminwankwo
VITE_FORMSPREE_ID=YOUR_FORMSPREE_FORM_ID

# Formspree setup:
#   1. https://formspree.io → create free account
#   2. Create new form
#   3. Copy the form ID (e.g. "xpwzgkrb")
#   4. Paste above

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

## SITEMAP GENERATOR (scripts/generate-sitemap.js)

Node.js ESM script. Runs automatically before every vite build.

Logic:
  1. Read .env file manually (no dotenv dep) — parse KEY=VALUE lines
  2. Read VITE_SITE_URL, VITE_HASHNODE_USERNAME from process.env or parsed .env
  3. Fetch all posts from Hashnode GraphQL API (first: 100):
       POST https://gql.hashnode.com
       Query: user(username) → publications(first:1) → posts(first:100)
         → slug, publishedAt
  4. Read public/sitemap.xml
  5. Before closing </urlset>, inject one <url> per blog post:
       <loc>{siteUrl}/blog/{slug}</loc>
       <lastmod>{publishedAt YYYY-MM-DD}</lastmod>
       <changefreq>never</changefreq>
       <priority>0.6</priority>
  6. Write updated XML back to public/sitemap.xml
  7. console.log(`Sitemap: added ${n} blog post URLs`)
  On ANY error: console.warn and exit(0) — never block the build

---

## PUBLIC FILES

public/robots.txt:
  User-agent: *
  Allow: /
  Disallow: /api/
  Sitemap: https://saminwankwo.dev/sitemap.xml

public/sitemap.xml (static base — generator appends blog posts at build time):
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

public/manifest.json:
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
    "categories": ["portfolio", "technology", "business"]
  }

---

## INDEX.HTML

Full HTML with all default SEO tags. SEO.jsx overrides these per-page at runtime.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <title>Samuel Nwankwo — Backend Engineer | Node.js · PHP · Cloud</title>
  <meta name="description" content="Samuel Nwankwo is a backend engineer with 7+ years PHP/Laravel and 5+ years Node.js/NestJS. Scalable APIs, microservices, AWS, Docker. Available for remote roles." />
  <meta name="author" content="Samuel Nwankwo" />
  <meta name="robots" content="index, follow" />
  <meta name="keywords" content="backend engineer, Node.js, PHP Laravel, NestJS, REST API, GraphQL, microservices, AWS, Docker, Nigeria developer, Samuel Nwankwo, saminwankwo" />
  <meta name="theme-color" content="#00ff9d" />
  <meta name="application-name" content="Samuel Nwankwo" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="Samuel.dev" />

  <link rel="canonical" href="https://saminwankwo.dev" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://saminwankwo.dev" />
  <meta property="og:title" content="Samuel Nwankwo — Backend Engineer" />
  <meta property="og:description" content="7+ years PHP/Laravel · 5+ years Node.js · AWS · Docker · Microservices · Open to remote roles." />
  <meta property="og:image" content="https://saminwankwo.dev/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Samuel Nwankwo — Backend Engineer portfolio" />
  <meta property="og:site_name" content="Samuel Nwankwo" />
  <meta property="og:locale" content="en_US" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@saminwankwo" />
  <meta name="twitter:creator" content="@saminwankwo" />
  <meta name="twitter:title" content="Samuel Nwankwo — Backend Engineer" />
  <meta name="twitter:description" content="7+ years PHP/Laravel · 5+ years Node.js · AWS · Docker · Available for remote roles." />
  <meta name="twitter:image" content="https://saminwankwo.dev/og-image.jpg" />

  <link rel="manifest" href="/manifest.json" />
  <link rel="apple-touch-icon" href="/icon-192.png" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230a0c0f'/><text y='.9em' font-size='75' x='12'>⬡</text></svg>" />

  <!-- Person schema -->
  <script type="application/ld+json">
  {
    "@context":"https://schema.org","@type":"Person",
    "name":"Samuel Nwankwo","alternateName":"Nwankwo Chibuike Samuel",
    "jobTitle":"Backend Engineer",
    "description":"Backend engineer specializing in Node.js, PHP/Laravel, AWS microservices, and payment integrations.",
    "url":"https://saminwankwo.dev","image":"https://saminwankwo.dev/og-image.jpg",
    "email":"nwankwosami@gmail.com","telephone":"+234-805-864-3829",
    "address":{"@type":"PostalAddress","addressLocality":"Port Harcourt","addressRegion":"Rivers State","addressCountry":"NG"},
    "sameAs":[
      "https://github.com/saminwankwo","https://linkedin.com/in/saminwankwo",
      "https://twitter.com/saminwankwo","https://instagram.com/saminwankwo",
      "https://t.me/saminwankwo","https://npmjs.com/~saminwankwo",
      "https://youtube.com/@saminwankwo","https://saminwankwo.hashnode.dev"
    ],
    "knowsAbout":["Node.js","NestJS","PHP","Laravel","AWS","Docker","GraphQL","REST APIs","TypeScript","MongoDB","MySQL","Microservices","Redis","RabbitMQ"],
    "worksFor":{"@type":"Organization","name":"Olotu Square"}
  }
  </script>

  <!-- WebSite schema -->
  <script type="application/ld+json">
  {
    "@context":"https://schema.org","@type":"WebSite",
    "name":"Samuel Nwankwo Portfolio","url":"https://saminwankwo.dev",
    "description":"Portfolio of Samuel Nwankwo, Backend Engineer.",
    "author":{"@type":"Person","name":"Samuel Nwankwo"}
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preconnect" href="https://api.github.com" />
  <link rel="preconnect" href="https://gql.hashnode.com" />

  <!-- IMPORTANT: Replace /og-image.jpg with a real 1200×630px image before deploying -->
  <!-- IMPORTANT: Generate icon-192.png and icon-512.png from your logo -->
  <!-- IMPORTANT: Replace saminwankwo.dev with your real domain everywhere -->
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>

---

## CONFIG (src/config/index.js)

RULE: This is the single source of truth for ALL site-wide constants.
Every component must import CONFIG from '@config'.
No component may hardcode a name, URL, handle, or personal detail.
Use import.meta.env.VITE_* with fallback strings so the site never crashes
if .env is absent.

Export a frozen CONFIG object (Object.freeze) with these fields:

  // Identity
  name:            "Samuel Nwankwo"
  fullName:        "Nwankwo Chibuike Samuel"
  title:           "Backend Engineer"
  shortTitle:      "Backend Engineer | Node.js · PHP · Cloud"
  tagline:         "Building scalable APIs, microservices, and cloud infrastructure."
  initials:        "SN"

  // Location & availability
  location:        "Port Harcourt, Nigeria"
  country:         "NG"
  timezone:        "UTC+1 (WAT)"
  timezoneNote:    "Overlap with EU business hours · Partial US East overlap"
  availableFrom:   "Immediately"
  workPreference:  "Remote-first · Contract or Full-time · Async-friendly"
  noticeRequired:  "None"
  available:       true

  // Contact
  email:           "nwankwosami@gmail.com"
  phone:           "+234 805 864 3829"

  // Social handles — all platforms use the same handle
  handle:          "saminwankwo"

  // Social URLs — derived from handle
  githubUrl:       "https://github.com/saminwankwo"
  linkedinUrl:     "https://linkedin.com/in/saminwankwo"
  twitterUrl:      "https://twitter.com/saminwankwo"
  instagramUrl:    "https://instagram.com/saminwankwo"
  telegramUrl:     "https://t.me/saminwankwo"
  npmUrl:          "https://npmjs.com/~saminwankwo"
  youtubeUrl:      "https://youtube.com/@saminwankwo"
  hashnodeUrl:     "https://saminwankwo.hashnode.dev"
  twitterHandle:   "@saminwankwo"

  // Environment-driven (with fallbacks)
  siteUrl:         import.meta.env.VITE_SITE_URL       || "https://saminwankwo.dev"
  hashnodeBlog:    import.meta.env.VITE_HASHNODE_BLOG   || "saminwankwo.hashnode.dev"
  hashnodeUser:    import.meta.env.VITE_HASHNODE_USERNAME || "saminwankwo"
  githubUser:      import.meta.env.VITE_GITHUB_USERNAME  || "saminwankwo"
  formspreeId:     import.meta.env.VITE_FORMSPREE_ID     || ""

  // Assets
  resumePath:      "/Samuel_Nwankwo_Resume.pdf"
  resumeFilename:  "Samuel_Nwankwo_Resume.pdf"
  ogImage:         "/og-image.jpg"

  // SEO keyword array used by SEO component
  seoKeywords: [
    "backend engineer","Node.js developer","PHP Laravel developer","NestJS",
    "REST API","GraphQL","microservices","AWS","Docker","Nigeria developer",
    "remote backend engineer","Samuel Nwankwo","saminwankwo"
  ]

  // Skills keyword array used in SEO meta
  skillKeywords: [
    "Node.js","NestJS","PHP","Laravel","TypeScript","JavaScript",
    "MongoDB","MySQL","PostgreSQL","Redis","AWS","Docker","GraphQL",
    "REST APIs","Microservices","RabbitMQ","WebSockets","CI/CD"
  ]

  // Currently learning — shown in Skills section
  currentlyLearning: [
    "Apache Kafka",
    "Bun.js runtime",
    "TypeScript advanced patterns",
    "System design at scale"
  ]

  // All social platforms for footer + mobile menu
  socials: [
    { label: "GitHub",      url: "https://github.com/saminwankwo",          ariaLabel: "GitHub profile" },
    { label: "LinkedIn",    url: "https://linkedin.com/in/saminwankwo",      ariaLabel: "LinkedIn profile" },
    { label: "Twitter / X", url: "https://twitter.com/saminwankwo",          ariaLabel: "Twitter/X profile" },
    { label: "Instagram",   url: "https://instagram.com/saminwankwo",        ariaLabel: "Instagram profile" },
    { label: "Telegram",    url: "https://t.me/saminwankwo",                 ariaLabel: "Telegram profile" },
    { label: "npm",         url: "https://npmjs.com/~saminwankwo",           ariaLabel: "npm packages" },
    { label: "YouTube",     url: "https://youtube.com/@saminwankwo",         ariaLabel: "YouTube channel" },
    { label: "Hashnode",    url: "https://saminwankwo.hashnode.dev",         ariaLabel: "Hashnode blog" },
  ]

---

## TYPES (src/types/index.js)

JSDoc @typedef declarations — no runtime code, pure documentation.
These give IDE autocomplete across the whole project.

Define typedefs for:

  @typedef {Object} SkillCategory
    icon: string, cat: string, tags: SkillTag[]

  @typedef {Object} SkillTag
    l: string (label), p?: 1 (primary flag)

  @typedef {Object} Job
    company: string, role: string, date: string, loc: string,
    current: boolean, tech: string[], bullets: string[]

  @typedef {Object} Project
    num: string, cat: string, name: string, desc: string,
    metric: string, link?: string, github?: string,
    techDetail?: string[], caseStudy?: CaseStudy

  @typedef {Object} CaseStudy
    problem: string, solution: string, stack: string, outcome: string

  @typedef {Object} FreelanceClient
    name: string, country: string, sector: string, stack: string

  @typedef {Object} Testimonial
    quote: string, name: string, role: string

  @typedef {Object} Article
    tag: string, title: string, readTime: string, href: string

  @typedef {Object} HashnodePost
    title: string, brief: string, slug: string, url: string,
    readTime: string, date: string, tag: string,
    coverImage?: { url: string }

  @typedef {Object} GitHubRepo
    name: string, description: string, html_url: string,
    language: string, stargazers_count: number, forks_count: number

  @typedef {Object} GitHubUser
    public_repos: number, followers: number, following: number, public_gists: number

Export: nothing — this file is for JSDoc only. Add @exports {} at the bottom.

---

## STYLES

### src/styles/globals.css

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Syne:wght@400;600;700;800&display=swap');

:root {
  /* Backgrounds */
  --bg:           #0a0c0f;
  --bg2:          #0f1217;
  --bg3:          #161b23;

  /* Borders */
  --border:       #1e2530;
  --border2:      #2a3545;

  /* Brand colors */
  --green:        #00ff9d;
  --green-dim:    #00cc7a;
  --green-dk:     #003d25;
  --blue:         #4fc3f7;
  --amber:        #ffd166;
  --red:          #ff6b6b;
  --purple:       #bb86fc;

  /* Text */
  --text:         #e2e8f0;
  --text2:        #8892a4;
  --text3:        #4a5568;

  /* Typography */
  --mono:         'JetBrains Mono', monospace;
  --sans:         'Syne', sans-serif;

  /* Layout */
  --nav-h:        56px;
  --strip-h:      38px;
  --max-w:        960px;
  --section-px:   2rem;
  --section-py:   5rem;
}

/* Reset */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0 }
html { scroll-behavior: smooth; font-size: 16px }
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--mono);
  overflow-x: hidden;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
img { display: block; max-width: 100% }
a { color: inherit; text-decoration: none }
button { cursor: pointer; border: none; background: none }
input, textarea, button, select { font-family: var(--mono) }
h1,h2,h3,h4,h5,h6 { font-family: var(--sans); line-height: 1.15 }
ul, ol { list-style: none }

/* Selection */
::selection { background: var(--green-dk); color: var(--green) }

/* Scrollbar */
::-webkit-scrollbar { width: 4px }
::-webkit-scrollbar-track { background: var(--bg) }
::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 2px }

/* Focus */
:focus-visible { outline: 2px solid var(--green); outline-offset: 3px }

/* Skip link */
.skip-link {
  position: absolute; left: -9999px; top: 1rem;
  background: var(--green); color: var(--bg);
  padding: 8px 16px; font-size: 12px; font-family: var(--mono);
  z-index: 9999; text-decoration: none; font-weight: 600;
}
.skip-link:focus { left: 1rem }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Section header utility classes */
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

/* Skeleton */
.skeleton { background: var(--bg3); border-radius: 2px; animation: pulse 1.4s ease infinite }

/* Visually hidden (screen reader only) */
.sr-only {
  position: absolute; width: 1px; height: 1px;
  padding: 0; margin: -1px; overflow: hidden;
  clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}

### src/styles/typography.css

/* Post body — rendered from Hashnode HTML */
.post-body p         { font-size:14px; line-height:1.9; color:var(--text2); margin-bottom:1.25rem }
.post-body h2        { font-family:var(--sans); font-weight:800; font-size:22px; color:var(--text); margin:2rem 0 0.75rem; letter-spacing:-0.5px }
.post-body h3        { font-family:var(--sans); font-weight:700; font-size:18px; color:var(--text); margin:1.5rem 0 0.5rem }
.post-body code      { font-family:var(--mono); font-size:13px; background:var(--bg3); color:var(--green); padding:2px 6px; border-radius:2px }
.post-body pre       { background:var(--bg3); border:1px solid var(--border); padding:1.25rem; overflow-x:auto; margin-bottom:1.25rem; border-radius:2px }
.post-body pre code  { background:transparent; padding:0; color:var(--text) }
.post-body strong    { color:var(--text); font-weight:600 }
.post-body em        { color:var(--text2) }
.post-body ul, .post-body ol  { padding-left:1.5rem; margin-bottom:1.25rem; list-style:initial }
.post-body li        { font-size:14px; line-height:1.9; color:var(--text2) }
.post-body blockquote { border-left:3px solid var(--green); padding-left:1rem; margin-bottom:1.25rem; color:var(--text2); font-style:italic }
.post-body a         { color:var(--green); text-decoration:underline }
.post-body hr        { border:none; border-top:1px solid var(--border); margin:2rem 0 }
.post-body img       { width:100%; border:1px solid var(--border); margin:1.25rem 0; loading:lazy }
.post-body table     { width:100%; border-collapse:collapse; margin-bottom:1.25rem }
.post-body th, .post-body td { border:1px solid var(--border); padding:8px 12px; font-size:13px; text-align:left }
.post-body th        { background:var(--bg3); color:var(--text); font-weight:600 }
.post-body td        { color:var(--text2) }

### src/styles/animations.css

@keyframes blink   { 50% { opacity: 0 } }
@keyframes pulse   { 0%,100% { opacity: 0.4 } 50% { opacity: 1 } }
@keyframes fadeUp  { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
@keyframes spin    { to { transform: rotate(360deg) } }
@keyframes slideIn { from { opacity:0; transform:translateX(-10px) } to { opacity:1; transform:translateX(0) } }
@keyframes toastIn { from { opacity:0; transform:translateY(10px) } to { opacity:1; transform:translateY(0) } }
@keyframes toastOut { to { opacity:0; transform:translateY(10px) } }

.animate-blink   { animation: blink 1s steps(1) infinite }
.animate-pulse   { animation: pulse 1.4s ease infinite }
.animate-fadeUp  { animation: fadeUp 0.6s ease forwards }
.animate-spin    { animation: spin 1s linear infinite }

---

## LIB LAYER (src/lib/)

### src/lib/seo.js

Pure functions — no React, no imports from the project.

EXPORTS:

buildPageTitle(title)
  Returns: `${title} | Samuel Nwankwo`
  If title is already the full name, return as-is.

buildStructuredData(type, data)
  type: "home" | "blog" | "article" | "404"
  data: object with post/page fields where relevant
  Returns a JSON-serialisable structured data object.

  "home" →
    @type: "ProfilePage"
    mainEntity: { @type: "Person", name, jobTitle, url, sameAs: [github, linkedin, twitter, instagram, telegram, npm, youtube, hashnode] }

  "blog" →
    @type: "Blog"
    name: "Samuel Nwankwo — Engineering Blog"
    description: "Backend engineering articles on Node.js, PHP, Laravel, AWS, GraphQL, and microservices."
    url: siteUrl + "/blog"
    author: { @type: "Person", name: "Samuel Nwankwo" }

  "article" (data: post HashnodePost) →
    @type: "Article"
    headline: post.title
    description: post.brief
    author: { @type: "Person", name: "Samuel Nwankwo", url: siteUrl }
    publisher: { @type: "Person", name: "Samuel Nwankwo" }
    datePublished: post.publishedAt
    image: post.coverImage?.url || ogImage
    url: post.url
    mainEntityOfPage: { @type: "WebPage", @id: post.url }

  "404" → null (no structured data for 404)

truncateDescription(text, maxLen = 155)
  Truncates text to maxLen chars at a word boundary, appends "..." if truncated.

### src/lib/formatters.js

Pure functions — no React, no imports from the project.

EXPORTS:

formatDate(isoString, options?)
  Converts ISO date string to human-readable: "March 10, 2025"
  Uses Intl.DateTimeFormat('en-US', { year:'numeric', month:'long', day:'numeric' })
  Returns original string if parsing fails.

formatShortDate(isoString)
  Returns "Mar 10, 2025"

timeAgo(isoString)
  Returns "2 months ago", "just now", "1 year ago" etc.
  Uses Date.now() minus parsed date, human-readable buckets.

truncate(str, maxLen)
  Truncates at word boundary, appends "..."

slugify(str)
  Converts "Hello World" → "hello-world"
  Removes special chars, replaces spaces with hyphens, lowercase.

capitalise(str)
  "hello world" → "Hello World"

formatReadTime(minutes)
  If already string containing "min": return as-is
  If number: return `${minutes} min read`

### src/lib/analytics.js

Lightweight analytics wrapper. Defaults to Plausible (privacy-friendly, no cookies).

EXPORTS:

init()
  If window.plausible is defined: no-op (already loaded)
  Otherwise: no-op (analytics script loaded separately, optionally)
  Call in main.jsx after React mounts.

trackEvent(eventName, props?)
  If window.plausible: window.plausible(eventName, { props })
  Else: console.debug('[analytics]', eventName, props)
  Never throws.

trackPageView()
  Plausible auto-tracks pageviews — this is a no-op.
  Exists for future swap to another provider.

Common events to call throughout the app:
  trackEvent('Resume Download')       — on resume link click
  trackEvent('Contact Form Submit')   — on successful form send
  trackEvent('Project Case Study', { name }) — on modal open
  trackEvent('GitHub Link Click')     — on GitHub profile click
  trackEvent('Blog Post View', { title }) — on BlogPost mount

---

## DATA FILES (src/data/)

All data files export a default array.
Every item uses the typedef shape from src/types/index.js.
No item may have a placeholder value.

### src/data/skills.js

export default [
  {
    icon: "⬡", cat: "Languages & Frameworks",
    tags: [
      {l:"Node.js",p:1},{l:"NestJS",p:1},{l:"PHP",p:1},{l:"Laravel",p:1},
      {l:"Express.js"},{l:"TypeScript"},{l:"JavaScript"},{l:"React.js"}
    ]
  },
  {
    icon: "◈", cat: "Databases",
    tags: [
      {l:"MongoDB",p:1},{l:"MySQL",p:1},{l:"PostgreSQL"},{l:"Redis"},{l:"Mongoose ODM"}
    ]
  },
  {
    icon: "☁", cat: "Cloud & DevOps",
    tags: [
      {l:"AWS EC2",p:1},{l:"Docker",p:1},{l:"AWS S3"},{l:"Lambda"},
      {l:"Nginx"},{l:"GitHub Actions"},{l:"CI/CD"}
    ]
  },
  {
    icon: "⟡", cat: "API & Architecture",
    tags: [
      {l:"REST APIs",p:1},{l:"GraphQL",p:1},{l:"Microservices"},
      {l:"WebSockets"},{l:"RabbitMQ"},{l:"Webhooks"}
    ]
  },
  {
    icon: "⚡", cat: "Payments & Integrations",
    tags: [
      {l:"Stripe",p:1},{l:"Paystack",p:1},{l:"Apple Pay"},
      {l:"Split Payments"},{l:"WhatsApp API"},{l:"Mailchimp"}
    ]
  },
  {
    icon: "◎", cat: "Testing & Security",
    tags: [
      {l:"Jest",p:1},{l:"PHPUnit",p:1},{l:"OWASP"},
      {l:"JWT/OAuth2"},{l:"Rate Limiting"},{l:"HTTPS/TLS"}
    ]
  },
]

### src/data/experience.js

export default [
  {
    company: "Sweeftly",
    role: "Backend Engineer — Full-Time, Remote",
    date: "May 2024 – Aug 2025",
    loc: "Cumbernauld, Scotland",
    current: true,
    tech: ["NestJS","Express.js","MongoDB","AWS (EC2, ELB, S3)","Docker"],
    bullets: [
      "Architected e-commerce API (v1 Express.js → v2 NestJS) handling thousands of daily orders with chat-style ordering flow.",
      "Integrated 3 delivery partners (Stuart, Shipday, Gophr) + Stripe/Apple Pay; webhook reconciliation reduced payment discrepancies by ~90%.",
      "Deployed behind AWS ELB with autoscaling groups; achieved 99.9% uptime with S3 media uploads and automated backups.",
      "Built WhatsApp notification bot cutting support ticket volume by ~35%.",
    ]
  },
  {
    company: "Olotu Square",
    role: "Backend Engineer — Contract, Remote",
    date: "May 2024 – Present",
    loc: "Port Harcourt, Nigeria",
    current: true,
    tech: ["Node.js","Express","Laravel","MongoDB","MySQL","Docker","GitHub Actions"],
    bullets: [
      "Migrated PHP monolith → Laravel; reduced deployment errors by ~50% through standardized architecture and automated tests.",
      "Multi-tenant SaaS with isolated DBs; cut client onboarding from 3 days to under 2 hours.",
      "GitHub Actions + Docker CI/CD enabling zero-downtime deployments.",
      "Led 4-month backend training for 12+ developers — 80% now in active backend roles.",
    ]
  },
  {
    company: "Webxiel",
    role: "Laravel Developer — Contract, Remote",
    date: "Jan 2024 – Oct 2024",
    loc: "Enugu State, Nigeria",
    current: false,
    tech: ["PHP","Laravel","MySQL"],
    bullets: [
      "Laravel microservice for landlord-to-tenant mobile API serving 10,000+ users.",
      "JWT auth, secure RESTful endpoints, webhook integrations for push notifications.",
      "Optimized N+1 queries; improved average endpoint response time by ~40%.",
    ]
  },
  {
    company: "iGiet Ltd",
    role: "Software Engineer — Contract, Remote",
    date: "Nov 2023 – Sep 2024",
    loc: "Port Harcourt, Nigeria",
    current: false,
    tech: ["Node.js","Express.js","Laravel","React.js","GraphQL"],
    bullets: [
      "Parrot mobile app backend shipped from 0 to production in 6 weeks.",
      "REST+GraphQL hybrid API cut client data payload by ~30%.",
      "SSR + asset optimization reduced initial load time by ~50%.",
    ]
  },
  {
    company: "Credib",
    role: "Backend Developer — Full-Time, Remote",
    date: "Aug 2022 – Feb 2024",
    loc: "Port Harcourt, Nigeria",
    current: false,
    tech: ["Node.js","GraphQL","MySQL","AWS","Docker","Redis","RabbitMQ"],
    bullets: [
      "GraphQL API gateway across 5+ microservices; reduced frontend integration complexity by ~60%.",
      "Paystack split payments + S3 serving 50,000+ assets.",
      "Redis caching cut avg DB query load by ~45%; RabbitMQ async job queues.",
      "Maintained 99.7% uptime across all containerized AWS EC2 production services.",
    ]
  },
  {
    company: "Emblic Technologies",
    role: "Software Developer — On-site",
    date: "Mar 2020 – Jul 2022",
    loc: "Port Harcourt, Nigeria",
    current: false,
    tech: ["PHP","MySQL","Java/Kotlin (Android)","HTML/CSS/Bootstrap","AWS"],
    bullets: [
      "OfficePro — enterprise office suite (HR, Payroll, Inventory, Invoicing, Attendance) at 5+ corporate clients.",
      "Hospital Management System used by 3 healthcare facilities.",
      "MyReminda published to Google Play; 1,000+ downloads.",
      "POS solution for supermarket chains; legacy payroll converted with Excel/PDF reporting.",
    ]
  },
]

### src/data/projects.js

export default [
  {
    num:"01", cat:"npm package", name:"Auth SDK for Express.js",
    desc:"TypeScript-first Express.js auth SDK on npm. Zero-config JWT with refresh tokens and role-based guards.",
    metric:"200+ app installs",
    link:"https://npmjs.com/~saminwankwo",
    github:"https://github.com/saminwankwo",
    techDetail:["Node.js","TypeScript","Express.js","JWT","Refresh Tokens","npm Registry","Semantic Versioning"],
    caseStudy:{
      problem:"Every project copy-pasted the same JWT middleware, creating inconsistent security implementations across codebases.",
      solution:"Extracted auth logic into a configurable npm package with multiple strategies, automatic refresh token rotation, role-based route guards, and full TypeScript types.",
      stack:"Node.js · TypeScript · Express.js · JWT · npm Registry",
      outcome:"Adopted by 200+ applications. Auth integration reduced from ~2 hours to under 10 minutes per project. Zero reported security regressions."
    }
  },
  {
    num:"02", cat:"SaaS platform", name:"Multitenant SaaS Platform",
    desc:"Database-per-tenant Laravel SaaS for 50+ clients with automated provisioning triggered on signup.",
    metric:"3 days → 30 min onboarding",
    techDetail:["Laravel","MySQL","Docker","GitHub Actions","Tenant Isolation","Auto-provisioning","DB Seeding"],
    caseStudy:{
      problem:"Every new client required 3 days of manual DB creation, config changes, and server work blocking the engineering team.",
      solution:"Multi-tenant Laravel platform with automatic DB creation, seed data injection, environment config generation, and a CI/CD pipeline triggered on client signup.",
      stack:"Laravel · MySQL · Docker · GitHub Actions",
      outcome:"Onboarding from 3 days to 30 minutes. Scaled to 50+ tenants with zero additional ops overhead. Team reclaimed ~6 hours per week."
    }
  },
  {
    num:"03", cat:"e-commerce API", name:"E-Commerce API",
    desc:"Production RESTful API for product, cart, checkout, and vendor split payouts with Stripe and idempotency.",
    metric:"$1M+ processed, zero downtime",
    techDetail:["Laravel","MySQL","Stripe","AWS EC2","Docker","Idempotency Keys","Webhook Reconciliation","Queue Workers"],
    caseStudy:{
      problem:"Client needed reliable split-payout infrastructure handling high transaction volume with full audit trails.",
      solution:"Laravel REST API with Stripe split payments, idempotency keys for retry safety, webhook signature verification, automated reconciliation reports, and queue-backed order processing.",
      stack:"Laravel · MySQL · Stripe · AWS EC2 · Docker · Laravel Queues",
      outcome:"$1M+ processed in first 6 months. Zero payment failures or unplanned downtime. 3 hours/week of manual reconciliation work eliminated."
    }
  },
  {
    num:"04", cat:"developer tools", name:"DevXP.dev",
    desc:"Developer upskilling platform simulating real-world Git workflows, code reviews, and TDD exercises.",
    metric:"500+ users · 80% WAU",
    link:"#",
    techDetail:["Node.js","Express","MongoDB","AWS","Redis","WebSockets","GitHub API"]
  },
  {
    num:"05", cat:"ML + serverless", name:"Sports Prediction API",
    desc:"AWS Lambda serverless API wrapping a pre-trained ML model delivering real-time win probabilities.",
    metric:"<100ms cold start · 99.7% uptime",
    techDetail:["Node.js","AWS Lambda","API Gateway","ML Integration","Serverless Framework","CloudWatch"]
  },
  {
    num:"06", cat:"security", name:"AI Intrusion Detection System",
    desc:"Network intrusion detection using PHP for data ingestion and TensorFlow for real-time anomaly alerting.",
    metric:"92% detection accuracy",
    techDetail:["PHP","TensorFlow","Python","Real-time Alerting","Network Monitoring","Anomaly Detection"]
  },
  {
    num:"07", cat:"websockets", name:"Remote Access Terminal",
    desc:"Secure authenticated shell management over WebSockets for remote support. Encrypted, session-scoped.",
    metric:"60% less troubleshooting time",
    techDetail:["Node.js","WebSockets","SSH","Encryption","Session Management","Authentication"]
  },
  {
    num:"08", cat:"portfolio", name:"Interactive Dev Portfolio",
    desc:"This portfolio — live GitHub feed, Hashnode blog integration, case studies, GitHub Actions CI/CD.",
    metric:"95+ Lighthouse score",
    link:"https://github.com/saminwankwo",
    techDetail:["React","Vite","React Router","GitHub API","Hashnode GraphQL","GitHub Actions","SEO","PWA"]
  },
]

### src/data/freelance.js

export default [
  { name:"DigiBank",      country:"🇳🇬 Nigeria",  sector:"Fintech",     stack:"PHP/Laravel — loan scheduling API" },
  { name:"VendoHub",      country:"🇺🇸 USA",       sector:"Marketplace", stack:"Node.js, MongoDB — vendor onboarding" },
  { name:"EduCrest LMS",  country:"🇬🇧 UK",        sector:"EdTech",      stack:"NestJS — role-based LMS backend" },
  { name:"Schetia",       country:"🇳🇬 Nigeria",  sector:"EdTech",      stack:"Node.js, Express, MongoDB" },
  { name:"Movment",       country:"🇳🇬 Nigeria",  sector:"Transport",   stack:"Node.js — ride-sharing dispatch API" },
  { name:"GodgraceLab",   country:"🇳🇬 Nigeria",  sector:"HealthTech",  stack:"PHP, MySQL — healthcare admin portal" },
  { name:"SparkxyFix",    country:"🇳🇬 Nigeria",  sector:"Services",    stack:"Node.js, Stripe — booking & payments" },
  { name:"KID Platform",  country:"🇳🇬 Nigeria",  sector:"EdTech",      stack:"React.js, Node.js — children's platform" },
]

### src/data/testimonials.js

export default [
  {
    quote: "Samuel consistently delivers clean, well-documented APIs on time. His ability to onboard new concepts quickly and mentor others while shipping production features is rare.",
    name: "Engineering Lead",
    role: "Olotu Square"
  },
  {
    quote: "The NestJS backend Samuel built for our LMS is rock solid. Role-based access, clean architecture, thorough documentation — exactly what we needed.",
    name: "Founder",
    role: "EduCrest LMS (UK)"
  },
  {
    quote: "Samuel taught our cohort from zero to deploying REST APIs in 4 months. Practical, patient, and deeply knowledgeable about real-world backend patterns.",
    name: "Backend Developer",
    role: "Olotu Square Training Graduate"
  },
]

### src/data/articles.js

Static fallback used when Hashnode API is unavailable.

export default [
  { tag:"Architecture", title:"Building Multi-Tenant SaaS with Laravel: DB Isolation Patterns", readTime:"8 min", href:"https://saminwankwo.hashnode.dev" },
  { tag:"Performance",  title:"Redis Caching Strategies That Cut My DB Load by 45%",            readTime:"6 min", href:"https://saminwankwo.hashnode.dev" },
  { tag:"API Design",   title:"GraphQL vs REST: When I Use Each in Production",                  readTime:"5 min", href:"https://saminwankwo.hashnode.dev" },
  { tag:"DevOps",       title:"Zero-Downtime Deployments with Docker + GitHub Actions",          readTime:"7 min", href:"https://saminwankwo.hashnode.dev" },
]

---

## HOOKS (src/hooks/)

### src/hooks/useHashnode.js

PURPOSE: Fetch posts from Hashnode public GraphQL API.
One hook file exports TWO named hooks:
  useHashnode({ first })   — post list
  useHashnodePost(slug)    — single post

Endpoint: POST https://gql.hashnode.com
Headers: { "Content-Type": "application/json" }

useHashnode({ first = 4 }):
  GraphQL query fetches:
    title, brief, slug, url, readTimeInMinutes, publishedAt,
    coverImage { url }, tags { name }
  Maps result to HashnodePost shape:
    { title, brief, slug, url, readTime: `${readTimeInMinutes} min`,
      date: publishedAt, tag: tags[0]?.name || "Article",
      coverImage: coverImage?.url ? { url: coverImage.url } : null }
  Returns { posts: HashnodePost[], loading: bool, error: bool }
  On any error: { posts: [], loading: false, error: true }

useHashnodePost(slug):
  Fetches single post by slug — adds content { html } to the query
  Returns { post: HashnodePost & { content: { html: string } } | null, loading, error }
  If publication.post is null: { post: null, loading: false, error: false }
    (caller interprets null post as 404)

### src/hooks/useGitHub.js

PURPOSE: Fetch public GitHub profile + top repos.
Uses Promise.all for parallel requests — no sequential waterfalls.

Endpoints:
  https://api.github.com/users/{CONFIG.githubUser}
  https://api.github.com/users/{CONFIG.githubUser}/repos?sort=updated&per_page=6&type=public

Returns { user: GitHubUser | null, repos: GitHubRepo[], loading, error }

Rate limit handling:
  If response status === 403 → return { error: true, rateLimited: true }
  Never throws — always returns a valid shape.

### src/hooks/useClipboard.js

PURPOSE: Copy text to clipboard with transient "copied" state.

useClipboard(resetMs = 2000)
  Returns { copied: bool, copy: (text: string) => void }
  copy() calls navigator.clipboard.writeText(text)
  Sets copied = true, auto-resets after resetMs
  If clipboard API unavailable: silently fails, copied stays false

### src/hooks/useScrollSpy.js

PURPOSE: Track which section is currently in the viewport.
Used by Nav to highlight the active section link as user scrolls.

useScrollSpy(sectionIds: string[], options?)
  options: { rootMargin: "-40% 0px -55% 0px" } (default — triggers near center)
  Uses IntersectionObserver on each id
  Returns activeId: string | null — the id of the most-recently-intersected section
  Cleans up observer on unmount.

---

## COMPONENTS — SEO

### src/components/seo/SEO.jsx

PURPOSE: Manage all <head> meta tags per-page without react-helmet.
Zero dependencies — pure DOM manipulation in useEffect.

Props:
  title          string    — page title
  description    string    — ≤155 chars
  canonical      string    — full canonical URL
  ogTitle        string?   — defaults to title
  ogDescription  string?   — defaults to description
  ogImage        string?   — defaults to CONFIG.ogImage
  ogType         string?   — "website"|"article", default "website"
  articleDate    string?   — ISO date for article pages
  articleTags    string[]? — for article pages
  noIndex        bool?     — adds noindex,nofollow
  structuredData object?   — JSON-LD, injected as <script id="structured-data">

Implementation:
  Import { buildPageTitle } from '@lib/seo'

  Helper upsertMeta(attr, val, content):
    document.querySelector(`meta[${attr}="${val}"]`)
    || document.head.appendChild(Object.assign(document.createElement('meta'), { [attr]: val }))
    .setAttribute('content', content)

  Helper upsertLink(rel, href):
    Find or create <link rel={rel}> and set href

  On effect (runs when any prop changes):
    document.title = buildPageTitle(title)
    upsertMeta('name','description', description)
    upsertMeta('name','robots', noIndex ? 'noindex,nofollow' : 'index,follow')
    upsertMeta('name','author', CONFIG.name)
    upsertMeta('name','keywords', CONFIG.seoKeywords.join(', '))
    upsertLink('canonical', canonical)
    // OG tags
    upsertMeta('property','og:title', ogTitle || title)
    upsertMeta('property','og:description', ogDescription || description)
    upsertMeta('property','og:image', ogImage || CONFIG.ogImage)
    upsertMeta('property','og:url', canonical)
    upsertMeta('property','og:type', ogType || 'website')
    upsertMeta('property','og:site_name', `${CONFIG.name} — Portfolio`)
    // Twitter tags
    upsertMeta('name','twitter:card', 'summary_large_image')
    upsertMeta('name','twitter:site', CONFIG.twitterHandle)
    upsertMeta('name','twitter:title', ogTitle || title)
    upsertMeta('name','twitter:description', ogDescription || description)
    upsertMeta('name','twitter:image', ogImage || CONFIG.ogImage)
    // Article tags
    if ogType === 'article':
      upsertMeta('property','article:published_time', articleDate)
      upsertMeta('property','article:author', CONFIG.name)
      articleTags?.forEach(tag => upsertMeta('property','article:tag', tag))
    // Structured data
    if structuredData:
      document.getElementById('structured-data')?.remove()
      const s = document.createElement('script')
      s.id = 'structured-data'
      s.type = 'application/ld+json'
      s.textContent = JSON.stringify(structuredData)
      document.head.appendChild(s)

  Returns null

---

## COMPONENTS — LAYOUT

### src/components/layout/Nav.jsx

PURPOSE: Fixed navigation bar. Handles desktop links + mobile toggle.
Delegates mobile overlay entirely to <MobileMenu>.
Uses useScrollSpy to highlight active section link.

RULE: Nav is layout-only. It renders links and buttons but contains
zero business logic, zero data fetching, and zero form handling.

<header role="banner">
  <nav aria-label="Main navigation" style={{ position:'fixed', top:0, left:0, right:0,
    height:'var(--nav-h)', zIndex:100, background:'rgba(10,12,15,0.92)',
    backdropFilter:'blur(12px)', borderBottom:'1px solid var(--border)',
    padding:'0 2rem', display:'flex', alignItems:'center', justifyContent:'space-between' }}>

    Logo: <Link to="/" aria-label={`${CONFIG.name} — home`}>
      <span style={{ color:'var(--green)', fontFamily:'var(--sans)', fontWeight:800, fontSize:18 }}>Samuel</span>
      <span style={{ color:'var(--text3)', fontWeight:400 }}>.dev</span>

    Desktop links (hidden on <768px):
      Skills | Experience | Projects | Freelance | GitHub | Writing | Blog | Contact
      Use useScrollSpy(['skills','experience','projects','freelance','github','writing','contact'])
      to get activeSection. Apply active style (color:var(--green)) when link section === activeSection.
      Hash links (non-blog): handle in handleNavClick(sectionId) —
        if location.pathname === '/': scrollIntoView(id)
        else: navigate('/', { state: { scrollTo: sectionId } })
      Blog: <Link to="/blog">

    Desktop buttons (hidden on <768px):
      "Resume ↓" <a href={CONFIG.resumePath} download={CONFIG.resumeFilename}
        onClick={() => trackEvent('Resume Download')}>
      "Hire Me" <a href={`mailto:${CONFIG.email}`}>

    Mobile toggle (visible on <768px):
      <button aria-label="Open navigation menu" aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}>☰</button>

    {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} handleNavClick={handleNavClick} />}

### src/components/layout/MobileMenu.jsx

PURPOSE: Full-screen navigation overlay for mobile.
Has its own focus trap and Escape key handler.
Receives onClose and handleNavClick as props from Nav.

RULE: This component owns all mobile menu UX.
Nav renders it but does NOT manage its internal state.

Renders:
  <div role="dialog" aria-modal="true" aria-label="Navigation menu"
    style={{ position:'fixed', inset:0, background:'var(--bg)', zIndex:200,
      display:'flex', flexDirection:'column', alignItems:'center',
      justifyContent:'center', gap:'2rem' }}>

    Close button: <button aria-label="Close navigation menu"
      style={{ position:'absolute', top:'1.5rem', right:'1.5rem' }}>✕</button>

    Nav links (all of them):
      font-size 18px, var(--sans) weight 600, color var(--text2), hover var(--green)

    Separator line: 1px var(--border)

    Buttons: Resume ↓ + Hire Me (same style as desktop)

    Social quick-links grid:
      All 8 platforms from CONFIG.socials
      Font-size 12px, color var(--text3), hover var(--green)
      Each: <a href={s.url} aria-label={s.ariaLabel} target="_blank" rel="noopener noreferrer">

  Focus trap useEffect:
    On mount: save document.activeElement, focus first focusable in overlay
    Tab key: cycle through focusable elements within overlay
    Escape key: call onClose()
    On unmount: restore focus to previously focused element

### src/components/layout/Footer.jsx

PURPOSE: Site-wide footer rendered on every page via App.jsx layout.
Contains social links, copyright, utility links.

RULE: Footer imports CONFIG.socials and maps it — never hardcodes social URLs.

<footer role="contentinfo" aria-label="Site footer"
  style={{ background:'var(--bg)', borderTop:'1px solid var(--border)', padding:'2.5rem 2rem 2rem' }}>

  Flex column, align-center, gap 0, text-align center

  Row 1 — Availability pill:
    <span> "● Available for hire"
    bg rgba(0,255,157,0.1), color var(--green), border rgba(0,255,157,0.3), 11px mono, padding 4px 12px

  Row 2 — Social links (margin 1.25rem 0):
    <nav aria-label="Social media links">
      {CONFIG.socials.map(s => (
        <a key={s.label} href={s.url} aria-label={s.ariaLabel}
           target="_blank" rel="noopener noreferrer">
          {s.label}
        </a>
      ))}
    flex, gap 1.25rem, justify-center, flex-wrap, 11px mono, color var(--text3), hover var(--green)

  Row 3 — Copyright + utility links:
    "© 2025 {CONFIG.name} · {CONFIG.title} · {CONFIG.location}"
    <span aria-hidden>·</span>
    <Link to="/blog">Blog</Link>
    <a href="/sitemap.xml" target="_blank" rel="noopener">Sitemap</a>
    <a href={CONFIG.resumePath} download={CONFIG.resumeFilename}>Resume</a>
    11px mono, color var(--text3), all links hover var(--green)

### src/components/layout/NowStrip.jsx

PURPOSE: "Currently available" banner shown only on Home page.

<div role="status" aria-label="Availability status"
  style={{ background:'var(--green)', height:'var(--strip-h)',
    position:'sticky', top:'var(--nav-h)', zIndex:98,
    display:'flex', alignItems:'center', justifyContent:'center', gap:12,
    fontFamily:'var(--mono)', fontSize:12 }}>

  <span className="animate-blink" aria-hidden style={{ width:8, height:8, borderRadius:'50%', background:'#0a0c0f' }} />
  <strong style={{ color:'#0a0c0f' }}>Currently available</strong>
  <span className="now-strip-detail" style={{ color:'var(--green-dk)' }}>
    · Open to full-time remote & contract · Node.js / PHP / Cloud
  </span>

CSS:
  @media (max-width: 480px) { .now-strip-detail { display: none } }

---

## COMPONENTS — UI

RULE: All UI components are "dumb" — they accept props and render.
They import nothing from hooks, data files, or feature components.
They may import CONFIG for colors/values, other UI components, and lib/formatters.

### src/components/ui/Tag.jsx

Props: children, primary (bool), size ("sm"|"md", default "md")
Renders a <span> pill.
Styles applied inline (no className dependency).
Primary: border rgba(0,255,157,0.6), color var(--green), bg rgba(0,255,157,0.06)
Normal: border var(--border2), color var(--text2)
sm: 10px, padding 2px 8px
md: 11px, padding 3px 10px
Both: border-radius 2px, font-family var(--mono), display inline-block, transition border-color 0.15s

Normal hover via onMouseEnter/onMouseLeave state toggle (border+color → green)

### src/components/ui/Button.jsx

Props: children, variant ("filled"|"ghost"|"outline"), size ("sm"|"md"), as ("button"|"a"),
       href, download, onClick, disabled, ariaLabel, type ("button"|"submit")

Renders as the element specified by 'as' prop (default "button").
If as="a": spread href, download, target, rel props.

Variants:
  filled:  bg var(--green), color var(--bg), hover bg var(--green-dim)
  ghost:   bg transparent, border 1px var(--green), color var(--green), hover bg var(--green) + color var(--bg)
  outline: bg transparent, border 1px var(--border2), color var(--text2), hover border var(--green) + color var(--green)

Sizes:
  sm: padding 6px 14px, font-size 11px
  md: padding 11px 26px, font-size 12px

All: font-family var(--mono), font-weight 600, text-transform uppercase, letter-spacing 0.1em
     cursor pointer, transition all 0.2s, display inline-flex, align-items center, gap 6px
If disabled: opacity 0.6, cursor not-allowed, pointer-events none

### src/components/ui/FadeIn.jsx

Props: children, delay (ms, default 0), className, style, as (element, default "div")
IntersectionObserver threshold 0.08, rootMargin "0px 0px -40px 0px"
Initial: opacity 0, transform translateY(22px)
On intersect: opacity 1, transform none, transition with delay
Disconnects observer after first intersection.
Renders as the element type specified by 'as'.

### src/components/ui/Skeleton.jsx

Props: width (string, default "100%"), height (string), count (int, default 1),
       gap (string, default "0.5rem"), borderRadius (string, default "2px")

If count > 1: renders count skeleton divs in a flex column with gap.
Each div: className="skeleton", width, height, borderRadius (all as inline styles).
Default height: "1rem"

### src/components/ui/Modal.jsx

PURPOSE: Generic modal shell. Handles backdrop, Escape, focus trap, body scroll lock.
Feature components use this as their container.

Props: children, onClose, ariaLabelledBy (string id), maxWidth (string, default "540px"),
       fullScreenOnMobile (bool, default true)

Renders:
  Backdrop <div onClick={onClose} style={{ position:'fixed', inset:0, zIndex:200,
    background:'rgba(0,0,0,0.8)', display:'flex', alignItems:'center',
    justifyContent:'center', padding:'2rem' }}>

    Panel <div onClick={e=>e.stopPropagation()}
      role="dialog" aria-modal="true" aria-labelledby={ariaLabelledBy}
      style={{ background:'var(--bg2)', border:'1px solid var(--border2)',
        padding:'2rem', maxWidth, width:'100%', maxHeight:'90vh', overflowY:'auto',
        position:'relative' }}>
      {children}

  useEffect on mount: document.body.style.overflow = 'hidden'
  useEffect cleanup: document.body.style.overflow = ''
  useEffect keydown: Escape → onClose
  Focus trap: same pattern as MobileMenu

  @media (max-width: 768px) when fullScreenOnMobile:
    Panel: inset 0, border-radius 0, max-height 100vh, margin 0

### src/components/ui/Toast.jsx

PURPOSE: Transient feedback notification (e.g. "Link copied!").

Props: message (string), visible (bool), position ("bottom-center"|"top-right", default "bottom-center")

Renders:
  <div role="status" aria-live="polite" aria-atomic="true"
    style={{ position:'fixed', bottom:'2rem', left:'50%', transform:'translateX(-50%)',
      background:'var(--bg3)', border:'1px solid var(--border2)',
      color:'var(--text)', padding:'8px 16px', fontSize:12,
      fontFamily:'var(--mono)', zIndex:300,
      opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none',
      transition:'opacity 0.2s ease',
      animation: visible ? 'toastIn 0.2s ease' : 'none' }}>
    {message}

### src/components/ui/Spinner.jsx

Props: size (number, default 20), color (string, default "var(--green)")
Renders a single div: width/height = size, border-radius 50%,
  border `2px solid transparent`, borderTop `2px solid ${color}`,
  animation: spin 1s linear infinite, aria-label="Loading", role="status"

### src/components/ui/SectionHeader.jsx

Props: tag (string), title (string | ReactNode), subtitle (string?), id (string?)
Renders wrapped in <FadeIn>:
  <p className="section-tag">{tag}</p>
  <h2 id={id} className="section-title">{title}</h2>
  {subtitle && <p style subtitle styles>{subtitle}</p>}
  <div className="section-line" />
Wrapper: margin-bottom 2.5rem

### src/components/ui/ErrorBoundary.jsx

PURPOSE: React class-based error boundary wrapping async sections.
Prevents one failed section from taking down the whole page.

Props: children, fallback (ReactNode, optional)
If no fallback provided: renders a minimal "Something went wrong" message
  styled with var(--bg2), var(--border), var(--text3), 12px mono, padding 1.5rem

Catches errors in child component trees.
Logs error to console.warn (not console.error).
Does not re-throw.

---

## COMPONENTS — FEATURES

RULE: Feature components are "smart" — they own significant logic, data fetching,
or complex interactivity. They import from hooks, data, and lib.
Sections import feature components to keep sections clean.

### src/components/features/TerminalWidget.jsx

PURPOSE: Animated terminal panel shown in Hero on desktop.
Extracted from Hero so Hero remains a layout file.

Props: none (reads nothing from parent — self-contained)

State: typed (string), outputVisible (bool), cursorVisible (bool)

Typing animation:
  useEffect: type "node --info samuel.json" at 55ms/char using setInterval
  When complete: setOutputVisible(true)

Render:
  Outer: bg var(--bg2), border 1px var(--border), width 370px, flex-shrink 0
  aria-label="Terminal showing developer info", aria-hidden="true" (decorative)

  Title bar: bg var(--bg3), padding 10px 16px, flex, align-center, gap 8px
    3 dots (aria-hidden): #ff5f57, #ffbd2e, #28ca41 (10px circles)
    Label: "samuel@dev ~ portfolio" 11px, color var(--text3), margin-left auto

  Body: padding 16px, 12px var(--mono), line-height 2.1
    Prompt line: <span green>›</span> {typed}
    Cursor: 7×13px inline-block, bg var(--green), className="animate-blink"
      Hidden when outputVisible (output replaces cursor position)

    If outputVisible:
      Data rows (key: amber, value: blue):
        name: "Nwankwo Chibuike Samuel"
        role: "Backend Engineer"
        location: "Port Harcourt, NG"
        stack: ["NestJS","Laravel","AWS"]
        available: true   ← var(--green)

      Blank line, then:
        <span green>›</span> git log --oneline
        ✓ 200+ npm installs (auth-sdk)       ← green
        ✓ 99.7% uptime prediction-api         ← green
        ✓ 50+ tenants on SaaS platform        ← green

      Blank line, then:
        <span green>›</span> cat available.json
        { "status": "open",                   ← blue
          "type": "remote",
          "notice": "immediate" }

      Final prompt: <span green>›</span> + blinking cursor

### src/components/features/CaseStudyModal.jsx

PURPOSE: Project case study overlay.
Uses Modal.jsx (generic shell) internally.

Props: project (Project), onClose (() => void)

Renders Modal with ariaLabelledBy="case-study-title":
  Header:
    <p> "Case Study" — 10px green caps
    <h2 id="case-study-title"> {project.name} — Syne bold 22px
    <p> {project.cat} — 11px mono, color var(--text3)
    Close <Button variant="outline" size="sm" onClick={onClose} ariaLabel="Close case study">✕</Button>
      absolute top-right

  Divider

  4 content rows (Problem/Solution/Stack/Outcome):
    Each: padding 1rem 0, border-bottom 1px var(--border) except last
    Label: 10px mono, color var(--text3), uppercase, letter-spacing 0.15em
    Value: 13px mono, line-height 1.9
      Problem/Solution/Stack: color var(--text2)
      Outcome: color var(--green)

  If project.techDetail:
    "Architecture" label + flex-wrap of <Tag> components (non-primary)

  Action buttons (margin-top 1.5rem, flex, gap 8px, flex-wrap):
    If project.link:
      <Button variant="ghost" size="sm" as="a" href={project.link} target="_blank"
        rel="noopener noreferrer" onClick={() => trackEvent('Project Live Link', { name: project.name })}>
        View Live →
      </Button>
    If project.github:
      <Button variant="outline" size="sm" as="a" href={project.github} target="_blank"
        rel="noopener noreferrer">
        View on GitHub →
      </Button>

### src/components/features/ContactForm.jsx

PURPOSE: Contact form with Formspree submission, loading/success/error states.
Extracted from Contact section so Contact remains a layout file.

State: name, email, message, status ("idle"|"submitting"|"success"|"error")

handleSubmit(e):
  e.preventDefault()
  setStatus('submitting')
  if !CONFIG.formspreeId: console.warn('No Formspree ID') → setStatus('success') return
  fetch(`https://formspree.io/f/${CONFIG.formspreeId}`, {
    method:'POST', headers:{ 'Content-Type':'application/json', 'Accept':'application/json' },
    body: JSON.stringify({ name, email, message })
  })
  .then(res => res.ok ? setStatus('success') : setStatus('error'))
  .then(() => { if success: trackEvent('Contact Form Submit') })
  .catch(() => setStatus('error'))

Renders:
  If status === 'success':
    <div role="alert" aria-live="polite">
      "✓" 32px green, "Message sent. I'll get back to you soon." 13px green mono
      success panel styles (green bg tint + border)

  If status === 'error':
    <div role="alert" aria-live="polite">
      "Something went wrong. Please email me directly:" + CONFIG.email link
      error panel styles (red bg tint + border)

  Otherwise (idle|submitting):
    <form aria-label="Contact form" onSubmit={handleSubmit}>
      3 fields: Name (text), Email (email), Message (textarea rows=5)
        Each: <label htmlFor={id}> + <input/textarea id={id} aria-required="true" required>
        Focus: border-color var(--green)
        Placeholder: color var(--text3)
      <Button type="submit" variant="filled" disabled={status==='submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Message →'}
      </Button>
      <p style footer note> "Response time: usually within 24 hours"
        11px mono, color var(--text3), text-align center, margin-top 0.75rem

### src/components/features/GitHubStats.jsx

PURPOSE: GitHub repos + stats cards. Used inside GitHub section.
Uses useGitHub hook.

Renders:
  Loading: <Skeleton count={6} height="60px" /> in 2-column grid
  Error: <p style muted> "GitHub stats unavailable" — no crash, no retry
  Success: two cards (repos left, stats right)

LEFT CARD — Top Repositories:
  bg var(--bg2), border 1px var(--border), padding 1.5rem
  <h3> "Top Repositories" — 11px mono, muted caps
  <ul>: up to 6 repos, each <li>:
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <span repo name — 13px mono, color var(--green)>
      <p description — 11px mono, muted, single-line truncate>
      <footer flex row gap 1rem>
        <Tag size="sm" style amber>{repo.language || 'Unknown'}</Tag>
        <span>★ {repo.stargazers_count}</span>
        <span>⑂ {repo.forks_count}</span>
  "View all on GitHub →" <a href={CONFIG.githubUrl}>: green 11px mono, mt 1rem

RIGHT CARD — Stats:
  bg var(--bg2), border 1px var(--border), padding 1.5rem
  <h3> "Contribution Stats"
  2×2 grid of stat boxes (bg var(--bg3), border var(--border), padding 1rem, text-center):
    { label:'Public Repos',  value: user.public_repos }
    { label:'Followers',     value: user.followers }
    { label:'Following',     value: user.following }
    { label:'Public Gists',  value: user.public_gists }
    Value: Syne 800 24px, color var(--green)
    Label: 10px mono, muted, uppercase
  
  GitHub streak image (margin-top 1rem):
    <img src={streakUrl} width="100%" loading="lazy" alt="GitHub contribution streak"
      style={{ border:'1px solid var(--border)' }}
      onError={e => e.currentTarget.style.display = 'none'} />
    streakUrl built from CONFIG.githubUser

### src/components/features/ArticleList.jsx

PURPOSE: Render list of articles from Hashnode or static fallback.
Used inside Writing section.

Props: first (int, default 4)

Uses useHashnode({ first })
If loading: <Skeleton count={4} height="58px" />
If error or posts.length === 0: render static articles from articles.js silently
If posts: render live Hashnode posts

Renders <div> wrapping article rows:
  border 1px var(--border), overflow hidden
  Each article: FadeIn delay={index*60}
    <article>
      <a href={post.url} target="_blank" rel="noopener noreferrer"
        aria-label={`Read: ${post.title}`}
        style={{ display:'flex', justifyContent:'space-between', alignItems:'center',
          gap:'1.5rem', padding:'1.1rem 1.4rem', background:'var(--bg3)',
          borderBottom: notLast ? '1px solid var(--border)' : 'none',
          transition:'background 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.background='var(--bg)'}
        onMouseLeave={e => e.currentTarget.style.background='var(--bg3)'}>
        Left: tag pill + <h3>{post.title}</h3> (Syne 600 14px, color var(--text))
        Right: read time (11px muted) + "↗" (14px muted)

---

## SECTIONS (src/sections/)

RULE: Sections are layout + composition only.
A section file may not contain form logic, data fetching, modal state,
or animation logic. Those belong in feature components.
A section renders semantic HTML structure and composes UI + feature components.

Each section is a <section> element with:
  - id matching its nav link target
  - aria-labelledby pointing to its SectionHeader h2 id
  - A max-width inner wrapper: max-width var(--max-w), margin 0 auto

### src/sections/Hero.jsx

<section id="hero" aria-label="Introduction" role="banner">
padding: calc(var(--nav-h) + var(--strip-h) + 2rem) 2rem 4rem
min-height 100vh, flex center
Decorative bg elements: aria-hidden="true"

Inner flex row, gap 4rem, align-center, max-width var(--max-w)

LEFT (flex:1):
  "$ whoami" prompt
  <h1>: "Samuel" + br + "Nwankwo" (green)
  Subtitle with blue stack highlight
  Summary with green left border
  Stats row: 4 items
  CTAs: <Button variant="filled" as="a" href="#experience"> + <Button variant="outline" as="a" href="#contact">
  Resume link: <a href={CONFIG.resumePath} download>↓ Download Resume (PDF)</a>

RIGHT (>1100px):
  <TerminalWidget />
  (ErrorBoundary wrapping TerminalWidget is optional but good practice)

### src/sections/Skills.jsx

<section id="skills" aria-labelledby="skills-title">
bg var(--bg2), border-top + border-bottom 1px var(--border)
padding var(--section-py) var(--section-px)

<SectionHeader id="skills-title" tag="Technical Stack" title="Skills & Technologies" />

<ErrorBoundary>
  Grid: auto-fit minmax(260px,1fr), gap 1.25rem
  {skills.map((cat, i) => (
    <FadeIn delay={i*60} as="article" key={cat.cat}>
      <div card style hover border transition>
        Header: icon (aria-hidden) + <h3>{cat.cat}</h3>
        Tags: flex-wrap, gap 6px
          {cat.tags.map(t => <Tag primary={!!t.p}>{t.l}</Tag>)}
  ))}

  Currently Exploring row (full-width, FadeIn delay=420):
    "// currently exploring" label + CONFIG.currentlyLearning.map → Tag

### src/sections/Experience.jsx

<section id="experience" aria-labelledby="experience-title">
bg var(--bg)
padding var(--section-py) var(--section-px)

<SectionHeader id="experience-title" tag="Work History" title="Professional Experience" />

<ol aria-label="Work history" style={{ position:'relative' }}>
  ::before line: absolute left 0, top 0, bottom 0, width 1, bg var(--border)

  {experience.map((job, i) => (
    <FadeIn as="li" delay={i*70} key={job.company}>
      Timeline dot (aria-hidden): filled green if current, hollow if past

      Company row: <h3>{job.company}</h3> + CURRENT pill if current
      Role: <p> blue
      Meta: <p> muted — "{job.loc} · {job.date}"
      Tech tags: flex-wrap
      Bullets: <ul> {job.bullets.map(b => <li>)}

### src/sections/Projects.jsx

<section id="projects" aria-labelledby="projects-title">
bg var(--bg2), border-top + border-bottom 1px var(--border)

State: activeProject (Project | null)

<SectionHeader id="projects-title" tag="Featured Work" title="Project Highlights" />

<ul style grid>
  {projects.map((p, i) => (
    <FadeIn as="li" delay={i*55} key={p.name}>
      <article
        onClick={() => p.caseStudy && setActiveProject(p)}
        style={{ cursor: p.caseStudy ? 'pointer' : 'default' }}>
        ::before green top bar (CSS — use className + :hover selector via style tag or inline)
        Hover: translateY(-2px)
        Category + <h3>{p.name}</h3> + desc + bottom row (metric + links)
        If p.caseStudy: "case study ↗" <button>
          aria-label={`View case study for ${p.name}`}
          onClick={e => { e.stopPropagation(); setActiveProject(p); trackEvent('Project Case Study', { name: p.name }) }}
        If p.link: "live ↗" <a>

{activeProject && (
  <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
)}

### src/sections/Freelance.jsx

<section id="freelance" aria-labelledby="freelance-title">
bg var(--bg)

<SectionHeader id="freelance-title" tag="Global Clients" title="Freelance Engagements" />

<ul style grid auto-fit minmax(200px,1fr)>
  {freelance.map((client, i) => (
    <FadeIn as="li" delay={i*50} key={client.name}>
      <article card>
        <h3>{client.name}</h3>
        <p>{client.country} · {client.sector}</p>
        <p>{client.stack}</p>

### src/sections/Testimonials.jsx

<section id="testimonials" aria-labelledby="testimonials-title">
bg var(--bg2), border-top + border-bottom 1px var(--border)

<SectionHeader id="testimonials-title" tag="Social Proof" title="What People Say" />

<ul style grid auto-fit minmax(260px,1fr)>
  {testimonials.map((t, i) => (
    <FadeIn as="li" delay={i*70} key={t.name}>
      <figure card flex column>
        <span aria-hidden>"</span>
        <blockquote cite={t.name}>
          <p>{t.quote}</p>
        </blockquote>
        <figcaption>
          <strong>{t.name}</strong>
          <span>{t.role}</span>
        </figcaption>

### src/sections/GitHub.jsx

<section id="github" aria-labelledby="github-title">
bg var(--bg)

<SectionHeader id="github-title" tag="Open Source" title="GitHub Activity" />

<ErrorBoundary>
  <GitHubStats />

### src/sections/Writing.jsx

<section id="writing" aria-labelledby="writing-title">
bg var(--bg2), border-top + border-bottom 1px var(--border)

<SectionHeader id="writing-title" tag="Tech Content" title="Articles & Writing" />

<ErrorBoundary>
  <ArticleList first={4} />

Below ArticleList:
  Row: "View all articles →" <a href={CONFIG.hashnodeUrl}> + YouTube subscribe link
    YouTube row: border 1px var(--border), padding 0.9rem 1.4rem
    flex, space-between, align-center
    Left: "▶" (aria-hidden, red) + "Backend dev content on YouTube" 13px
    Right: <Button variant="outline" size="sm" as="a" href={CONFIG.youtubeUrl} target="_blank">Subscribe →</Button>

### src/sections/Contact.jsx

<section id="contact" aria-labelledby="contact-title">
bg var(--bg2), border-top 1px var(--border)

Inner: grid 1fr 1fr, gap 4rem (stacks 1fr on mobile)

LEFT:
  <SectionHeader id="contact-title" tag="Open to Opportunities"
    title={<>"Let's Build <span style green>Something.</span>"</>} />
  Subtitle paragraph
  5 contact link rows (email, phone, github, linkedin, npm)
    Each: <a> with aria-label, border hover transition
  Social quick-links: small pills for Twitter, Instagram, Telegram, YouTube, Hashnode
    Each: <a href={CONFIG.{platform}Url} target="_blank" rel="noopener noreferrer"
      aria-label={platform}>
  Availability card (bg var(--bg3), border, padding 1rem, margin-top 1.5rem):
    "// availability" heading
    4 rows: Timezone | Available | Work type | Notice
  Download Resume button (margin-top 1rem, full-width):
    <Button variant="outline" as="a" href={CONFIG.resumePath} download={CONFIG.resumeFilename}
      onClick={() => trackEvent('Resume Download')}>
      ↓ Download Resume (PDF)
    </Button>

RIGHT:
  <ContactForm />

---

## PAGES (src/pages/)

RULE: Pages are thin wrappers. They:
  1. Render <SEO /> with correct props
  2. Handle route-level state (scroll restoration, hash navigation)
  3. Compose sections or feature components
  Pages contain minimal logic beyond the above.

Import { buildStructuredData } from '@lib/seo'
Import { truncateDescription } from '@lib/seo'

### src/pages/Home.jsx

SEO props:
  title: "Samuel Nwankwo — Backend Engineer"
  description: "Backend engineer with 7+ years PHP/Laravel and 5+ years Node.js. Scalable APIs, microservices, AWS. Available for remote roles from Port Harcourt, Nigeria."
  canonical: CONFIG.siteUrl + "/"
  structuredData: buildStructuredData('home', {})

Handles scrollTo from navigation state:
  const location = useLocation()
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior:'smooth' })
      }, 100)
    }
  }, [location.state])

Renders:
  <SEO .../>
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

### src/pages/Blog.jsx

Lazy-loaded via React.lazy in App.jsx.

SEO props:
  title: "Blog — Backend Engineering Articles"
  description: "Articles by Samuel Nwankwo on Node.js, PHP/Laravel, Redis, GraphQL, Docker, AWS, and production backend engineering."
  canonical: CONFIG.siteUrl + "/blog"
  structuredData: buildStructuredData('blog', {})

State: activeTag ("All")
Filter tags: ["All","Architecture","Performance","API Design","DevOps","Node.js","Laravel"]

Uses useHashnode({ first: 20 })
Loading: <Spinner /> centered
Error: error message + retry button (remount hook via key state)

Render:
  <SEO />
  <main id="main-content">
    <header> — page title, subtitle, filter bar
      Filter bar: <nav aria-label="Filter posts by topic">
        {filterTags.map(tag => (
          <button aria-pressed={activeTag === tag} onClick={() => setActiveTag(tag)}>{tag}</button>
        ))}

    Filtered posts: posts.filter(post =>
      activeTag === 'All' || post.tags?.some(t => t.name === activeTag) || post.tag === activeTag
    )

    <ul aria-label="Blog posts">
      {filteredPosts.map((post, i) => (
        <FadeIn as="li" delay={i*50} key={post.slug}>
          <article>
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              Header: tag pill + <time>{formatShortDate(post.date)}</time>
              <h2>{post.title}</h2>
              <p>{truncate(post.brief, 160)}</p>
              Footer: read time + "Read on Hashnode ↗"

    Empty state if filteredPosts.length === 0

### src/pages/BlogPost.jsx

Lazy-loaded via React.lazy in App.jsx.

const { slug } = useParams()
const { post, loading, error } = useHashnodePost(slug)
const { copy, copied } = useClipboard()

useEffect(() => {
  if (post) trackEvent('Blog Post View', { title: post.title })
}, [post])

If loading: centered <Spinner /> with "Loading post..." caption
If !loading && (error || !post): return <NotFound />

SEO props (conditional, only when post loaded):
  title: post.title
  description: truncateDescription(post.brief, 155)
  canonical: post.url        ← CRITICAL: canonical = Hashnode URL (content authority)
  ogType: "article"
  ogImage: post.coverImage?.url || CONFIG.ogImage
  articleDate: post.publishedAt
  articleTags: post.tags?.map(t => t.name) || []
  structuredData: buildStructuredData('article', post)

Render:
  <SEO />
  <main id="main-content">
    <article style max-width 720px, margin auto, padding 6rem 2rem 4rem>
      <header>
        Back link, cover image, tag + date, <h1>, meta, canonical notice
        "Originally published on Hashnode →" <a href={post.url}>
        Divider
      Post body: <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content?.html }} />
      <footer>
        Share row: "Share on X →", "Share on LinkedIn →", copy link button
          Copy button onClick: copy(post.url)
          <Toast message="Link copied!" visible={copied} />
        "View all articles →" <Link to="/blog">

### src/pages/NotFound.jsx

SEO:
  title: "404 — Page Not Found"
  description: "The page you are looking for does not exist."
  noIndex: true
  canonical: CONFIG.siteUrl + "/404"

Render:
  <SEO />
  <main id="main-content">
    Centered: <h1>"404"</h1> + message + back home <Button>

---

## APP.JSX + MAIN.JSX

### src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import './styles/typography.css'
import './styles/animations.css'
import { init as initAnalytics } from '@lib/analytics'

initAnalytics()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)

### src/App.jsx

import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Nav from '@layout/Nav'
import Footer from '@layout/Footer'
import Home from '@pages/Home'
import NotFound from '@pages/NotFound'

const Blog     = lazy(() => import('@pages/Blog'))
const BlogPost = lazy(() => import('@pages/BlogPost'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <Suspense fallback={<div style={{ minHeight:'100vh', background:'var(--bg)' }} />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

---

## RESPONSIVE BREAKPOINTS

Mobile-first. Default: single column, padding 1.25rem.

@media (min-width: 480px):
  Hero stats: 2×2 grid

@media (min-width: 768px):
  Nav: show desktop links + buttons; hide ☰
  Hero: flex-direction row
  Contact: grid 1fr 1fr
  Skills: 2 columns
  Footer: rows flex-direction row

@media (min-width: 1024px):
  Skills: 3-column auto-fit
  Projects: 3-column auto-fit
  GitHub: 2-column grid
  Freelance: 4-column auto-fit
  Section padding: var(--section-py) var(--section-px)

@media (min-width: 1100px):
  Hero terminal: display block
  Hero inner: max-width var(--max-w)

@media (min-width: 1280px):
  All section inners: max-width var(--max-w), margin 0 auto

Mobile-specific:
  NowStrip subtitle: display none on <480px
  Hero name: clamp(38px,10vw,72px)
  Stats: flex-wrap, gap 1.5rem
  Project cards: 1 col <480px, 2 col 480–1024px, 3 col 1024px+
  CaseStudyModal / Modal: full-screen on mobile
  Blog filter: overflow-x auto, flex nowrap
  MobileMenu: full-screen overlay

---

## ACCESSIBILITY REQUIREMENTS

All must be enforced in code:

1. One <h1> per page only
2. Heading hierarchy: h1 → h2 (SectionHeader) → h3 (cards) — no gaps
3. Images: meaningful alt or aria-hidden + alt=""
4. All interactive elements reachable by keyboard
5. :focus-visible with green outline — never suppressed
6. WCAG AA contrast on all text
7. Form: <label> + htmlFor/id, aria-required="true"
8. role="alert" + aria-live="polite" on form states
9. Modal: role="dialog", aria-modal, aria-labelledby, focus trap, scroll lock
10. Skip-to-content link (first DOM element)
11. aria-label on all ambiguous/icon-only buttons
12. aria-current="page" on active NavLink
13. aria-pressed on filter buttons (Blog)
14. aria-expanded on mobile ☰ button
15. MobileMenu: full focus trap, Escape closes
16. Reduced motion: @media (prefers-reduced-motion: reduce) in globals.css
17. Semantic: <header>, <nav>, <main>, <section>, <article>, <figure>,
    <blockquote>, <footer>, <time>, <address>, <ol>/<ul> used correctly
18. External links: rel="noopener noreferrer" + aria-label if text is ambiguous

---

## SEO PER PAGE SUMMARY

index.html (static): Person + WebSite schema
Home:                 ProfilePage schema   (via SEO.jsx)
Blog:                 Blog schema          (via SEO.jsx)
BlogPost:             Article schema       (via SEO.jsx, per post)
                      canonical = post.url (Hashnode)
NotFound:             noIndex: true        (via SEO.jsx)

---

## FINAL OUTPUT CHECKLIST

Before writing any file, verify:

  ✓ Every import uses Vite aliases (@config, @data, @hooks, @lib, @ui, @features, @layout, @sections, @pages)
  ✓ Every string/URL flows from CONFIG — nothing hardcoded
  ✓ Every async hook returns loading + error + data states
  ✓ Every page has <SEO /> with correct, unique per-page props
  ✓ Every page has <main id="main-content">
  ✓ Footer appears on every page via App.jsx Layout component
  ✓ Nav uses useScrollSpy for active link highlighting
  ✓ MobileMenu includes all links + social links + Resume + Hire Me buttons
  ✓ CONFIG.socials array is the single source for all social links
  ✓ ContactForm uses Formspree with idle/submitting/success/error states
  ✓ CaseStudyModal opens per-project via Projects section state
  ✓ ArticleList falls back to static articles.js on Hashnode error (silently)
  ✓ GitHubStats shows graceful fallback on API error
  ✓ ErrorBoundary wraps all async/complex feature sections
  ✓ TerminalWidget is self-contained (no props from Hero)
  ✓ Button.jsx used for all interactive elements — no raw <button> with inline styles
  ✓ Modal.jsx used as shell inside CaseStudyModal (not reimplemented)
  ✓ trackEvent() called on: resume download, form submit, case study open, blog post view
  ✓ Sitemap generator handles missing .env gracefully (exit 0, console.warn)
  ✓ Blog + BlogPost are React.lazy loaded in App.jsx
  ✓ ScrollToTop component in App.jsx
  ✓ Reduced motion media query in globals.css
  ✓ :focus-visible in globals.css
  ✓ Skip-to-content link is first rendered element in Layout
  ✓ All external links have target="_blank" rel="noopener noreferrer"
  ✓ Resume <a> has download={CONFIG.resumeFilename}
  ✓ No console.error anywhere — use console.warn for non-critical
  ✓ No placeholder comments, no TODOs, no lorem ipsum in any file
  ✓ All data arrays fully populated with content specified in this document