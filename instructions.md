You are a frontend developer agent. Build a complete multi-page portfolio website
for a backend engineer named Samuel Nwankwo using React (Vite + React Router).
Output only the file contents — no explanations, no markdown, just the raw code.

---

PROJECT STRUCTURE

src/
├── main.jsx
├── App.jsx                        ← Router setup
├── styles/
│   └── globals.css                ← Global CSS, variables, resets, fonts
├── components/
│   ├── Nav.jsx                    ← Fixed nav, shared across all pages
│   ├── NowStrip.jsx               ← Green availability banner
│   ├── Footer.jsx                 ← Shared footer
│   ├── SectionHeader.jsx          ← Reusable section header (tag + title + line)
│   ├── FadeIn.jsx                 ← IntersectionObserver wrapper component
│   ├── Tag.jsx                    ← Skill/tech tag pill
│   └── CaseStudyModal.jsx         ← Project case study modal
├── pages/
│   ├── Home.jsx                   ← Assembles all home sections
│   ├── Blog.jsx                   ← Blog index (list of posts)
│   ├── BlogPost.jsx               ← Individual blog post page
│   └── NotFound.jsx               ← 404 page
├── sections/                      ← Home page sections (each its own file)
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Freelance.jsx
│   ├── Testimonials.jsx
│   ├── Writing.jsx
│   └── Contact.jsx
└── data/
    ├── skills.js
    ├── experience.js
    ├── projects.js
    ├── freelance.js
    ├── testimonials.js
    ├── articles.js
    └── posts.js                   ← Blog post data (title, slug, date, tag, content)

---

TECH STACK
- Vite + React 18
- React Router v6 (createBrowserRouter or <BrowserRouter>)
- No CSS framework — plain CSS with CSS variables
- Google Fonts: JetBrains Mono + Syne (loaded in globals.css via @import)
- No other dependencies except react-router-dom

---

AESTHETIC & THEME (applied via CSS variables in globals.css)

:root {
  --bg:        #0a0c0f;
  --bg2:       #0f1217;
  --bg3:       #161b23;
  --border:    #1e2530;
  --border2:   #2a3545;
  --green:     #00ff9d;
  --green-dim: #00cc7a;
  --green-dk:  #003d25;
  --blue:      #4fc3f7;
  --amber:     #ffd166;
  --red:       #ff6b6b;
  --text:      #e2e8f0;
  --text2:     #8892a4;
  --text3:     #4a5568;
  --mono:      'JetBrains Mono', monospace;
  --sans:      'Syne', sans-serif;
}

globals.css rules:
- * { box-sizing: border-box; margin: 0; padding: 0 }
- html { scroll-behavior: smooth }
- body { background: var(--bg); color: var(--text); font-family: var(--mono);
         overflow-x: hidden }
- ::selection { background: var(--green-dk); color: var(--green) }
- ::-webkit-scrollbar { width: 4px }
- ::-webkit-scrollbar-track { background: var(--bg) }
- ::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 2px }
- @keyframes blink { 50% { opacity: 0 } }
- img, svg { display: block }
- a { color: inherit; text-decoration: none }
- input, textarea, button { font-family: var(--mono) }

---

ROUTING (App.jsx)

Routes:
  /                 → <Home />
  /blog             → <Blog />
  /blog/:slug       → <BlogPost />
  *                 → <NotFound />

All pages share <Nav /> above and <Footer /> below the route outlet.
Use <ScrollRestoration /> or scroll to top on route change.

---

NOW STRIP (NowStrip.jsx)
- Full-width bar, bg var(--green), height 38px
- Flex row, centered, gap 12px, font-family var(--mono), font-size 12px
- Blinking dot: 8px circle, bg #0a0c0f, animation blink 1.2s steps(1) infinite
- "Currently available" — font-weight 600, color #0a0c0f
- "· Open to full-time remote roles & contract work · Node.js / PHP / Cloud"
  color: var(--green-dk)
- Rendered on Home page only (inside Home.jsx, above all sections)

---

NAV (Nav.jsx)
Fixed top, height 56px, z-index 100
Background: rgba(10,12,15,0.92), backdrop-filter blur(12px)
Border-bottom: 1px solid var(--border)
Padding: 0 2rem
Flex row, space-between, align-center

Left: Logo
  <Link to="/"> "Samuel" + ".dev"
  Font: var(--sans), weight 800, size 18px
  "Samuel" color: var(--green)
  ".dev" color: var(--text3), weight 400

Center/Right: nav links + buttons
  Links (use <NavLink>): Skills | Experience | Projects | Freelance | Writing | Blog | Contact
  Font: var(--mono), 12px, uppercase, letter-spacing 0.08em
  Default color: var(--text2)
  Hover + active (NavLink): color var(--green)
  "Writing" links to /#writing (hash link on home)
  "Contact" links to /#contact (hash link on home)
  All others link to their section IDs on home via hash, except "Blog" → /blog

Buttons (right side):
  1. Resume ↓ — ghost: border 1px var(--green), color var(--green), bg transparent
     padding 6px 14px, font-size 11px, uppercase, letter-spacing 0.1em
     href="/Samuel_Nwankwo_Resume.pdf" download
     hover: bg var(--green), color var(--bg)
  2. Hire Me — filled: bg var(--green), color var(--bg), same padding/font
     hover: bg var(--green-dim)
     href="mailto:nwankwosami@gmail.com"

Mobile (<768px):
  Hide all nav links and buttons
  Show ☰ button (border 1px var(--border), color var(--text), 12px mono)
  Clicking opens a full-screen overlay menu (position fixed, bg var(--bg),
  z-index 200) with links stacked vertically, centered, 18px, gap 2rem.
  Close button top-right "✕"

---

FOOTER (Footer.jsx)
bg var(--bg), border-top 1px var(--border)
padding 1.5rem 2rem, text-align center
font-size 11px, color var(--text3), font-family var(--mono)
"Built by " + <span style green>"Samuel Nwankwo"</span>
+ " · Backend Engineer · Port Harcourt, Nigeria · 2025"

---

FADEIN COMPONENT (FadeIn.jsx)
Props: children, delay (ms, default 0), className
Uses useRef + useEffect with IntersectionObserver (threshold 0.08)
Initial style: opacity 0, transform translateY(22px)
On intersect: opacity 1, transform translateY(0)
Transition: opacity 0.6s ease, transform 0.6s ease
Apply transitionDelay from delay prop

---

SECTION HEADER (SectionHeader.jsx)
Props: tag (string), title (string)
Renders:
  <FadeIn>
    <p class="section-tag">// {tag}</p>   ← 11px, color var(--green), mono, uppercase letter-spacing
    <h2 class="section-title">{title}</h2> ← Syne 800, clamp(26px,4vw,38px), letter-spacing -1px
    <div class="section-line" />           ← 40×2px, bg var(--green), margin-top 10px
  </FadeIn>
margin-bottom 2.5rem on the wrapper

---

TAG COMPONENT (Tag.jsx)
Props: children, primary (bool)
Renders a <span> pill
Primary: border rgba(0,255,157,0.6), color var(--green), bg rgba(0,255,157,0.06)
Normal: border var(--border2), color var(--text2)
Normal hover: border var(--green), color var(--green) (use CSS class + :hover)
All: font-size 11px, padding 3px 10px, border-radius 2px, font-family var(--mono)

---

HOME PAGE (Home.jsx)
Renders in order:
  <NowStrip />
  <Hero />
  <Skills />
  <Experience />
  <Projects />
  <Freelance />
  <Testimonials />
  <Writing />
  <Contact />

---

HERO SECTION (sections/Hero.jsx)
Section: min-height 100vh, display flex, align-items center
padding: 80px 2rem 4rem, position relative, overflow hidden
Background: grid overlay (repeating linear-gradient rgba(0,255,157,0.03) lines, 40×40px)
Radial glow: position absolute, top 20%, left -10%, 500×500px,
  radial-gradient(circle, rgba(0,255,157,0.04), transparent 70%)

Inner: max-width 960px, margin 0 auto, width 100%
Display: flex, align-items center, gap 4rem

LEFT CONTENT (flex:1):
  Prompt: font-size 12px, color var(--text3), display flex, gap 8px
    "$" in var(--green), then "whoami"
  Name h1: font-family var(--sans), weight 800, font-size clamp(46px,8vw,84px)
    line-height 1, letter-spacing -3px, margin-bottom 0.4rem
    "Samuel" color var(--text), "Nwankwo" color var(--green), each on own line
  Subtitle: font-family var(--sans), font-size clamp(17px,2.8vw,24px), color var(--text2)
    margin-bottom 1.75rem, letter-spacing -0.5px
    "Node.js · PHP · Cloud" wrapped in <span> color var(--blue)
  Summary p: font-size 13px, color var(--text2), line-height 1.9, max-width 520px
    margin-bottom 2.25rem, border-left 2px solid var(--green), padding-left 1.25rem
  Stats row: display flex, gap 2.5rem, flex-wrap wrap, margin-bottom 2.25rem
    Each stat: flex-direction column, gap 2px
      Number span: font-family var(--sans), weight 800, font-size 30px, color var(--green)
      Label span: font-size 10px, color var(--text3), text-transform uppercase, letter-spacing 0.1em
    Stats: "7+" / "Years PHP/Laravel" | "5+" / "Years Node.js"
           "$1M+" / "Payments Processed" | "200+" / "Auth SDK Installs"
  CTAs: display flex, gap 1rem, flex-wrap wrap
    "View Experience" → href="#experience", bg var(--green), color var(--bg),
      padding 11px 26px, font-size 12px, font-weight 600, uppercase, letter-spacing 0.1em
      hover: bg var(--green-dim)
    "Get In Touch" → href="#contact", border 1px var(--border2), color var(--text2),
      same padding, hover: border var(--green), color var(--green)

RIGHT TERMINAL (visible only at >1100px via CSS, width 370px, flex-shrink 0):
  bg var(--bg2), border 1px var(--border)
  Title bar: bg var(--bg3), padding 10px 16px, flex, gap 8px, border-bottom 1px var(--border)
    3 dots: 10px circles — #ff5f57, #ffbd2e, #28ca41
    Label: font-size 11px, color var(--text3), margin-left auto — "samuel@dev ~ portfolio"
  Body: padding 16px, font-size 12px, line-height 2.1, font-family var(--mono)
  Typing animation (useEffect): type "node --info samuel.json" at 55ms/char
  After typing completes, show all output lines (useState gating)
  Cursor: 7×13px inline-block, bg var(--green), animation blink 1s steps(1) infinite
  Output colors:
    key names: var(--amber)
    string values: var(--blue)
    "true": var(--green)
    ✓ lines: var(--green)
    › prefix: var(--green)

---

DATA FILES

data/skills.js — export default array of:
  { icon, cat, tags: [{ label, primary }] }

data/experience.js — export default array of:
  { company, role, date, loc, current, tech: [], bullets: [] }

data/projects.js — export default array of:
  { num, cat, name, desc, metric, link?, caseStudy?: { problem, solution, stack, outcome } }

data/freelance.js — export default array of:
  { name, country, flag, sector, stack }

data/testimonials.js — export default array of:
  { quote, name, role }

data/articles.js — export default array of:
  { tag, title, readTime, href }

data/posts.js — export default array of:
  { slug, title, date, tag, excerpt, readTime, content }
  content is a string of HTML or markdown (use dangerouslySetInnerHTML or a simple renderer)

Populate all data files with the full content specified in the sections below.

---

SKILLS DATA (data/skills.js)
[
  { icon:"⬡", cat:"Languages & Frameworks",
    tags:[{l:"Node.js",p:1},{l:"NestJS",p:1},{l:"PHP",p:1},{l:"Laravel",p:1},
          {l:"Express.js"},{l:"TypeScript"},{l:"JavaScript"},{l:"React.js"}] },
  { icon:"◈", cat:"Databases",
    tags:[{l:"MongoDB",p:1},{l:"MySQL",p:1},{l:"PostgreSQL"},{l:"Redis"},{l:"Mongoose ODM"}] },
  { icon:"☁", cat:"Cloud & DevOps",
    tags:[{l:"AWS EC2",p:1},{l:"Docker",p:1},{l:"AWS S3"},{l:"Lambda"},{l:"Nginx"},
          {l:"GitHub Actions"},{l:"CI/CD"}] },
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

EXPERIENCE DATA (data/experience.js)
Full 6 jobs as specified in the experience section above.
Each with company, role, date, loc, current (bool), tech array, bullets array.
Sweeftly and Olotu Square: current: true

---

PROJECTS DATA (data/projects.js)
Full 8 projects as specified in the projects section above.
Projects 01–03 include caseStudy objects.
Projects 04 and 08 include live links.

---

FREELANCE DATA (data/freelance.js)
Full 8 clients as specified in the freelance section above.

---

TESTIMONIALS DATA (data/testimonials.js)
Full 3 testimonials as specified.

---

ARTICLES DATA (data/articles.js)
Full 4 articles as specified in the writing section.

---

BLOG POSTS DATA (data/posts.js)
4 sample posts that match the article topics:
[
  {
    slug: "multitenant-saas-laravel",
    title: "Building Multi-Tenant SaaS with Laravel: DB Isolation Patterns",
    date: "2025-03-10",
    tag: "Architecture",
    readTime: "8 min",
    excerpt: "How I architected a database-per-tenant Laravel platform that scaled to 50+ clients...",
    content: "<p>Full article content here as HTML...</p>"
  },
  {
    slug: "redis-caching-strategies",
    title: "Redis Caching Strategies That Cut My DB Load by 45%",
    date: "2025-02-18",
    tag: "Performance",
    readTime: "6 min",
    excerpt: "Practical Redis patterns I use in production Node.js and Laravel apps...",
    content: "<p>Full article content here as HTML...</p>"
  },
  {
    slug: "graphql-vs-rest",
    title: "GraphQL vs REST: When I Use Each in Production",
    date: "2025-01-29",
    tag: "API Design",
    readTime: "5 min",
    excerpt: "Not a religious debate — here's my actual decision framework...",
    content: "<p>Full article content here as HTML...</p>"
  },
  {
    slug: "zero-downtime-docker-github-actions",
    title: "Zero-Downtime Deployments with Docker + GitHub Actions",
    date: "2025-01-12",
    tag: "DevOps",
    readTime: "7 min",
    excerpt: "The exact pipeline I use across my client projects for zero-downtime deploys...",
    content: "<p>Full article content here as HTML...</p>"
  }
]

---

SECTIONS (sections/*.jsx)

SKILLS (sections/Skills.jsx)
id="skills", bg var(--bg2), padding 5rem 2rem
border-top + border-bottom 1px var(--border)
<SectionHeader tag="Technical Stack" title="Skills & Technologies" />
Grid: auto-fit minmax(260px,1fr), gap 1.25rem
Each card: bg var(--bg3), border 1px var(--border), padding 1.4rem
  Hover: border-color var(--green)
  Header: icon (color var(--green), 17px) + category name (Syne bold 13px)
  Tags: flex-wrap, gap 6px, using <Tag> component

EXPERIENCE (sections/Experience.jsx)
id="experience", bg var(--bg), padding 5rem 2rem
<SectionHeader tag="Work History" title="Professional Experience" />
Timeline wrapper: position relative
  ::before: absolute left 0, top 0, bottom 0, width 1px, bg var(--border)
Each entry: padding-left 2rem, padding-bottom 2.75rem, position relative
  Dot: absolute, left -5px, top 5px, 11×11px, border-radius 50%
    current → bg var(--green)
    past → border 2px var(--green), bg var(--bg)
  Company row: flex, align-center, gap 10px
    Company name: Syne bold 17px, color var(--text)
    CURRENT badge (if current): 10px mono uppercase, bg rgba(0,255,157,0.1),
      color var(--green), border rgba(0,255,157,0.3), padding 2px 8px
  Role: color var(--blue), 13px mono
  Meta (loc · date): color var(--text3), 11px mono, letter-spacing 0.04em
  Tech tags: flex-wrap, gap 6px
    Each: 10px mono, color var(--amber), border rgba(255,209,102,0.25),
    bg rgba(255,209,102,0.05), padding 2px 8px
  Bullets: list-style none. Each li: 12px mono, color var(--text2), line-height 1.9,
    padding-left 1.2rem, position relative
    ::before content "›", absolute left 0, color var(--green)

PROJECTS (sections/Projects.jsx)
id="projects", bg var(--bg2), padding 5rem 2rem
border-top + border-bottom 1px var(--border)
<SectionHeader tag="Featured Work" title="Project Highlights" />
Grid: auto-fit minmax(270px,1fr), gap 1.25rem
Each card: bg var(--bg3), border 1px var(--border), padding 1.4rem
  position relative, overflow hidden, flex column, height 100%
  ::before: absolute top 0, left 0, right 0, height 2px, bg var(--green)
    transform scaleX(0), transform-origin left, transition 0.3s
  Hover: translateY(-2px), ::before scaleX(1)
  Category: 10px mono, color var(--text3)
  Name: Syne bold 15px, color var(--text)
  Desc: 12px mono, color var(--text2), line-height 1.8, flex:1, margin-bottom 1rem
  Bottom row: border-top 1px var(--border), padding-top 0.75rem, flex space-between
    Metric: green 11px mono
    Right links: "case study ↗" and/or "live ↗" — 10px muted mono
  Clicking card with caseStudy → opens <CaseStudyModal />

CASESTUDYMODAL (components/CaseStudyModal.jsx)
Props: project, onClose
position fixed, inset 0, z-index 200, bg rgba(0,0,0,0.75)
flex center, padding 2rem
Click backdrop → onClose(), Escape key → onClose()
Inner panel: bg var(--bg2), border 1px var(--border2), padding 2rem, max-width 540px, width 100%
  "Case Study" tag: 10px green caps, margin-bottom 6px
  Project name: Syne bold 20px, color var(--text)
  Close ✕ button: top-right absolute, border 1px var(--border2), 12px mono
  4 rows (Problem / Solution / Stack / Outcome):
    Label: 10px caps, color var(--text3), margin-bottom 4px
    Value: 12px mono, color var(--text2) (Outcome: color var(--green)), line-height 1.8
  "View Live →" anchor if project.link — border 1px var(--green), color var(--green),
    padding 8px 20px, 11px uppercase mono, margin-top 8px

FREELANCE (sections/Freelance.jsx)
id="freelance", bg var(--bg), padding 5rem 2rem
<SectionHeader tag="Global Clients" title="Freelance Engagements" />
Grid: auto-fit minmax(200px,1fr), gap 1rem
Each card: bg var(--bg2), border 1px var(--border), padding 1rem 1.2rem
  Hover: border-color var(--green)
  Name: Syne bold 13px, color var(--text)
  Country · Sector: 10px mono, color var(--text3), uppercase, letter-spacing 0.1em
  Stack: 11px mono, color var(--text2)

TESTIMONIALS (sections/Testimonials.jsx)
id="testimonials", bg var(--bg2), padding 5rem 2rem
border-top + border-bottom 1px var(--border)
<SectionHeader tag="Social Proof" title="What People Say" />
Grid: auto-fit minmax(260px,1fr), gap 1.25rem
Each card: bg var(--bg3), border 1px var(--border), padding 1.5rem, flex column, gap 1rem
  Quote mark: font-size 22px, color var(--green), font-family Georgia, line-height 1
  Quote text: 12px mono, color var(--text2), font-style italic, line-height 1.9, flex:1
  Footer: border-top 1px var(--border), padding-top 0.75rem
    Name: Syne bold 13px, color var(--text)
    Role: 10px mono, color var(--text3), margin-top 2px

WRITING (sections/Writing.jsx)
id="writing", bg var(--bg), padding 5rem 2rem
<SectionHeader tag="Tech Content" title="Articles & Writing" />
Articles container: flex column, border 1px var(--border)
Each article: <a> tag, flex space-between, align-center, gap 1.5rem,
  padding 1.1rem 1.4rem, bg var(--bg2), border-bottom 1px var(--border) (except last)
  Hover: bg var(--bg3)
  Left: tag pill (9px green mono, green border, faint green bg) + title (Syne 600 14px)
  Right: read time (11px muted) + "↗" arrow
Below: centered note "Also creating backend dev content on YouTube →"
  YouTube link: color var(--green), href="https://youtube.com"

CONTACT (sections/Contact.jsx)
id="contact", bg var(--bg2), padding 5rem 2rem
border-top 1px var(--border)
Inner: grid 1fr 1fr, gap 4rem (stacks on mobile)
Left: section tag + heading "Let's Build / Something." + subtitle + 5 contact links
  Contact links use <a> with icon + label, border hover transition
Right: form with name/email/message, submit → success panel swap
  useState for submitted state

---

BLOG INDEX PAGE (pages/Blog.jsx)
Route: /blog
bg var(--bg), min-height 100vh, padding-top 80px (nav height)

Header area (padding 4rem 2rem 2rem):
  Tag: "// Blog" — 11px green caps mono
  Title: "Writing & Notes" — Syne 800, clamp(28px,5vw,48px), letter-spacing -1.5px
  Subtitle: 13px mono, color var(--text2), line-height 1.9
  Accent line: 40×2px green

Post list (max-width 800px, margin 0 auto, padding 0 2rem 4rem):
  Each post card: <Link to={`/blog/${post.slug}`}
    display block, border 1px var(--border), padding 1.5rem,
    bg var(--bg2), margin-bottom 1px, transition bg 0.2s
    Hover: bg var(--bg3)
  Card content:
    Top row (flex space-between):
      Tag pill: 9px green mono, green border, faint green bg
      Date: 11px mono, color var(--text3)
    Title: Syne bold 18px, color var(--text), margin 0.5rem 0, line-height 1.3
    Excerpt: 12px mono, color var(--text2), line-height 1.8, margin-bottom 0.75rem
    Bottom row (flex space-between):
      Read time: 11px muted
      "Read post →" in green, 11px mono

Filter bar above post list:
  Show tag buttons: All | Architecture | Performance | API Design | DevOps
  Active tag: bg var(--green), color var(--bg)
  Inactive: border var(--border2), color var(--text2), hover green
  All: 11px mono uppercase, padding 5px 12px, gap 8px
  Clicking filters posts client-side via useState

---

BLOG POST PAGE (pages/BlogPost.jsx)
Route: /blog/:slug
Reads slug from useParams(), finds post in posts.js data
If not found → render <NotFound />

Layout: max-width 720px, margin 0 auto, padding 6rem 2rem 4rem

Header:
  <Link to="/blog"> "← Back to blog" — 11px mono, color var(--text3),
    hover color var(--green), margin-bottom 2rem, display inline-block
  Tag pill + date row (flex, gap 12px, align-center, margin-bottom 1rem)
  Title: Syne 800, clamp(26px,4vw,40px), letter-spacing -1px, line-height 1.15
    color var(--text), margin-bottom 0.5rem
  Meta row: read time + author "by Samuel Nwankwo" — 11px mono, color var(--text3)
  Divider: 1px solid var(--border), margin 2rem 0

Post body: render post.content via dangerouslySetInnerHTML
  .post-body styles in globals.css:
    p { font-size 14px, line-height 1.9, color var(--text2), margin-bottom 1.25rem }
    h2 { Syne bold, 22px, color var(--text), margin 2rem 0 0.75rem, letter-spacing -0.5px }
    h3 { Syne bold, 18px, color var(--text), margin 1.5rem 0 0.5rem }
    code { font-family var(--mono), font-size 13px, bg var(--bg3),
      color var(--green), padding 2px 6px, border-radius 2px }
    pre { bg var(--bg3), border 1px var(--border), padding 1.25rem,
      overflow-x auto, margin-bottom 1.25rem }
    pre code { bg transparent, padding 0, color var(--text) }
    strong { color var(--text), font-weight 600 }
    ul, ol { padding-left 1.5rem, margin-bottom 1.25rem }
    li { font-size 14px, line-height 1.9, color var(--text2) }
    blockquote { border-left 3px solid var(--green), padding-left 1rem,
      margin-bottom 1.25rem, color var(--text2), font-style italic }
    a { color var(--green), text-decoration underline }
    hr { border-color var(--border), margin 2rem 0 }

After post body: "More Posts" section
  Heading: 14px mono, color var(--text3), margin-bottom 1rem
  Show up to 2 other posts as compact cards:
    border 1px var(--border), padding 1rem, bg var(--bg2), flex column
    Title: Syne 600 14px, color var(--text)
    Tag + read time: 11px mono, color var(--text3)
    Hover: border var(--green)

---

404 PAGE (pages/NotFound.jsx)
Full viewport, flex center column, text-center
"404" — Syne 800, 80px, color var(--green), line-height 1
"Page not found." — Syne 600, 24px, color var(--text), margin 1rem 0
Subtitle: 13px mono, color var(--text2), margin-bottom 2rem
<Link to="/"> "← Back home" — filled green button style

---

RESPONSIVE BREAKPOINTS

@media (max-width: 1100px): hide hero terminal
@media (max-width: 768px):
  Nav: hide links + buttons, show ☰
  Hero: stats gap 2rem, summary font-size 12px
  Section padding: 4rem 1.25rem
  Contact grid: 1fr
  Hero inner: flex-direction column
  Blog post: padding 4rem 1.25rem
@media (max-width: 480px):
  Hero name font-size: clamp(38px,10vw,60px)
  Stats: flex-wrap, gap 1.5rem

---

SCROLL & ANIMATION NOTES
- Use FadeIn component wrapping cards and headers
- Stagger: pass delay={index * 60} to FadeIn for grid items
- useEffect scroll-to-top on route change:
    const { pathname } = useLocation();
    useEffect(() => window.scrollTo(0, 0), [pathname]);
- Hash links (/#experience etc.) should work from any page:
    If on /blog and clicking "Experience", navigate to /#experience
    Handle in Nav with useNavigate + useLocation

---

VITE CONFIG (vite.config.js)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()] })

PACKAGE.JSON (package.json)
{
  "name": "samuel-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
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

OUTPUT INSTRUCTIONS
Output every file in this exact format — filename as a comment on line 1,
then the complete file content, then a blank line before the next file:

// src/main.jsx
[file content]

// src/App.jsx
[file content]

... and so on for every file in the project structure.

Do not skip any file. Do not add explanations between files.
All data arrays must be fully populated — no placeholders like "// ... more items".
Blog post content strings must contain real, readable HTML content of
at least 400 words each (no lorem ipsum).