export default [
  {
    num:"01", cat:"npm package", name:"Auth SDK for Express.js",
    desc:"TypeScript-first Express.js auth SDK on npm. Zero-config JWT with refresh tokens and role-based guards.",
    metric:"200+ app installs",
    link:"https://npmjs.com/~saminwankwo",
    github:"https://github.com/saminwankwo/express-auth-sdk",
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
    github:"https://github.com/saminwankwo/saminwankwo.github.io",
    techDetail:["React","Vite","React Router","GitHub API","Hashnode GraphQL","GitHub Actions","SEO","PWA"]
  },
]
