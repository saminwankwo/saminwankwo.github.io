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
