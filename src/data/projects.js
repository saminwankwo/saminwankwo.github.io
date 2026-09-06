/** @type {import('../types').Project[]} */
export default [
  {
    num: "01",
    cat: "npm package",
    name: "Auth SDK for Express.js",
    desc: "TypeScript-first Express.js auth SDK on npm. Zero-config JWT with refresh tokens and role-based guards.",
    metric: "200+ app installs",
    link: "https://npmjs.com/~saminwankwo",
    github: "https://github.com/saminwankwo/express-auth-sdk",
    techDetail: ["Node.js", "TypeScript", "Express.js", "JWT", "Refresh Tokens", "npm Registry", "Semantic Versioning"],
    featured: true,
    caseStudy: {
      problem: "Every project copy-pasted the same JWT middleware, creating inconsistent security implementations across codebases.",
      solution: "Extracted auth logic into a configurable npm package with multiple strategies, automatic refresh token rotation, role-based route guards, and full TypeScript types.",
      stack: "Node.js · TypeScript · Express.js · JWT · npm Registry",
      outcome: "Adopted by 200+ applications. Auth integration reduced from ~2 hours to under 10 minutes per project. Zero reported security regressions."
    }
  },

  {
    num: "02",
    cat: "SaaS platform",
    name: "Family Tree Platform — Private Genealogy Web App",
    desc: "Private genealogy web app with role-based access, tree-level sharing, and safe admin tooling for secure collaborative family trees.",
    metric: "Secure collaboration · Zero integrity errors",
    link: "https://umuoparauhadynasty.com/",
    caseStudyUrl: "https://ads.saminwankwo.dev/case-studies/family-tree-platform",
    techDetail: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "RBAC", "XAMPP"],
    featured: true,
    caseStudy: {
      problem: "A private client needed relatives to collaborate on a shared family tree without giving everyone the same level of control. Sharing had to be scoped to specific trees/branches, admin workflows (grant/remove/reinstate access) had to be reliable, and user removal had to avoid orphaned records and foreign-key errors.",
      solution: "Implemented a permission model combining: (1) RBAC — owner/editor/viewer roles with consistent read-only enforcement, (2) tree-level sharing — viewer per tree via share table (not all-or-nothing), (3) admin-safe POST handling for access changes, and (4) safe hard-deletion with dependency cleanup and reference nulling. Centralized permission checks reduced logic duplication.",
      stack: "PHP · MySQL · HTML/CSS + JavaScript · XAMPP",
      outcome: "Stronger security (read-only users cannot modify data), cleaner collaboration (invite more viewers without privacy compromise), more maintainable backend, and operational confidence — admins can manage access and remove users without DB integrity errors. Pattern is reusable for any collaboration product needing clear, safe, maintainable access control. Live at umuoparauhadynasty.com. Full case study: ads.saminwankwo.dev/case-studies/family-tree-platform"
    }
  },

  {
    num: "03",
    cat: "SaaS platform",
    name: "Multitenant SaaS Platform",
    desc: "Database-per-tenant Laravel SaaS for 50+ clients with automated provisioning triggered on signup.",
    metric: "3 days → 30 min onboarding",
    techDetail: ["Laravel", "MySQL", "Docker", "GitHub Actions", "Tenant Isolation", "Auto-provisioning", "DB Seeding"],
    featured: true,
    caseStudy: {
      problem: "Every new client required 3 days of manual DB creation, config changes, and server work blocking the engineering team.",
      solution: "Multi-tenant Laravel platform with automatic DB creation, seed data injection, environment config generation, and a CI/CD pipeline triggered on client signup.",
      stack: "Laravel · MySQL · Docker · GitHub Actions",
      outcome: "Onboarding from 3 days to 30 minutes. Scaled to 50+ tenants with zero additional ops overhead. Team reclaimed ~6 hours per week."
    }
  },
  {
    num: "04",
    cat: "e-commerce API",
    name: "E-Commerce API",
    desc: "Production RESTful API for product, cart, checkout, and vendor split payouts with Stripe and idempotency.",
    metric: "$1M+ processed, zero downtime",
    techDetail: ["Laravel", "MySQL", "Stripe", "AWS EC2", "Docker", "Idempotency Keys", "Webhook Reconciliation", "Queue Workers"],
    featured: true,
    caseStudy: {
      problem: "Client needed reliable split-payout infrastructure handling high transaction volume with full audit trails.",
      solution: "Laravel REST API with Stripe split payments, idempotency keys for retry safety, webhook signature verification, automated reconciliation reports, and queue-backed order processing.",
      stack: "Laravel · MySQL · Stripe · AWS EC2 · Docker · Laravel Queues",
      outcome: "$1M+ processed in first 6 months. Zero payment failures or unplanned downtime. 3 hours/week of manual reconciliation work eliminated."
    }
  },
  {
    num: "05",
    cat: "developer tools",
    name: "DevXP.dev",
    desc: "Developer upskilling platform simulating real-world Git workflows, code reviews, and TDD exercises.",
    metric: "500+ users · 80% WAU",
    techDetail: ["Node.js", "Express", "MongoDB", "AWS", "Redis", "WebSockets", "GitHub API"]
  },
  {
    num: "06",
    cat: "ML + serverless",
    name: "Sports Prediction API",
    desc: "AWS Lambda serverless API wrapping a pre-trained ML model delivering real-time win probabilities.",
    metric: "<100ms cold start · 99.7% uptime",
    techDetail: ["Node.js", "AWS Lambda", "API Gateway", "ML Integration", "Serverless Framework", "CloudWatch"]
  },
  {
    num: "07",
    cat: "security",
    name: "AI Intrusion Detection System",
    desc: "Network intrusion detection using PHP for data ingestion and TensorFlow for real-time anomaly alerting.",
    metric: "92% detection accuracy",
    techDetail: ["PHP", "TensorFlow", "Python", "Real-time Alerting", "Network Monitoring", "Anomaly Detection"],
    featured: true
  },
  {
    num: "08",
    cat: "websockets",
    name: "Remote Access Terminal",
    desc: "Secure authenticated shell management over WebSockets for remote support. Encrypted, session-scoped.",
    metric: "60% less troubleshooting time",
    techDetail: ["Node.js", "WebSockets", "SSH", "Encryption", "Session Management", "Authentication"]
  },
  {
    num: "09",
    cat: "portfolio",
    name: "Interactive Dev Portfolio",
    desc: "This portfolio — live GitHub feed, Hashnode blog integration, case studies, GitHub Actions CI/CD.",
    metric: "95+ Lighthouse score",
    link: "https://github.com/saminwankwo",
    github: "https://github.com/saminwankwo/saminwankwo.github.io",
    techDetail: ["React", "Vite", "React Router", "GitHub API", "Hashnode GraphQL", "GitHub Actions", "SEO"]
  },
  {
    num: "10",
    cat: "education",
    name: "Computer Based Test (CBT) Software",
    desc: "Robust examination platform with real-time timers, automated grading, and secure department/course management.",
    metric: "Used for academic assessments",
    techDetail: ["PHP", "MySQL", "Bootstrap", "PDO", "jQuery"]
  },
  {
    num: "11",
    cat: "mobile backend",
    name: "Parrot — Mobile Backend",
    desc: "Real-time social and payment API featuring JWT auth, chat-style money transfers, and Paystack integration.",
    metric: "5k+ active users",
    techDetail: ["Node.js", "Express.js", "MongoDB", "AWS S3", "Paystack", "WebSockets"]
  },
  {
    num: "12",
    cat: "e-commerce API",
    name: "Sweeftly E-commerce API",
    desc: "Scalable backend integrating Stripe, Apple Pay, and multiple delivery services (Stuart, Shipday).",
    metric: "33% latency reduction",
    techDetail: ["NestJS", "Express.js", "AWS", "Docker", "Stripe", "MongoDB", "Shipday API"]
  },
  {
    num: "13",
    cat: "LMS",
    name: "Schetia LMS",
    desc: "Cohort-based learning management system with role-based access, course tracking, and assessments.",
    metric: "Production-ready learning",
    techDetail: ["Node.js", "Express.js", "MongoDB", "AWS S3", "Role-based Access"]
  },
  {
    num: "14",
    cat: "logistics",
    name: "Movment — Ride Sharing API",
    desc: "Dispatch system with driver-rider matching, trip lifecycle management, and status webhooks.",
    metric: "High-reliability dispatching",
    techDetail: ["Node.js", "Express.js", "Redis", "MongoDB", "Webhook Lifecycle"]
  },
  {
    num: "15",
    cat: "service booking",
    name: "SparkxyFix",
    desc: "Maintenance services platform connecting users to providers with Paystack payments and booking flows.",
    metric: "Seamless service checkout",
    techDetail: ["Node.js", "Express.js", "MongoDB", "Paystack", "Booking Lifecycle"]
  },
  {
    num: "16",
    cat: "healthcare",
    name: "GodgraceLab Healthcare Portal",
    desc: "Admin and reporting platform for clinics with patient records, diagnostics, and mobile API support.",
    metric: "Clinical data management",
    techDetail: ["PHP", "MySQL", "Reporting Tools", "Mobile API"]
  },
  {
    num: "17",
    cat: "education",
    name: "KID Learning Platform",
    desc: "Interactive educational platform teaching kids HTML & CSS via a visual interface.",
    metric: "Gamified learning",
    techDetail: ["React.js", "Node.js", "Express.js", "Visual Editor"]
  },
  {
    num: "18",
    cat: "ERP",
    name: "OfficePro",
    desc: "All-in-one management system for HR, payroll, inventory, invoicing, and project tracking.",
    metric: "Complete business operations",
    techDetail: ["PHP", "MySQL", "Bootstrap", "Payroll Engine"]
  },
  {
    num: "19",
    cat: "healthcare",
    name: "Hospital Management System",
    desc: "Comprehensive hospital workflow platform covering pharmacy, appointments, and financials.",
    metric: "End-to-end hospital management",
    techDetail: ["PHP", "MySQL", "Bootstrap", "Financial Tracking"]
  },
  {
    num: "20",
    cat: "notifications",
    name: "MyReminda",
    desc: "Automated notification service for document expiry via SMS and email with large-scale storage.",
    metric: "Zero missed expiries",
    techDetail: ["PHP", "MySQL", "Twilio API", "Cron Jobs"]
  },
  {
    num: "21",
    cat: "fintech/payroll",
    name: "Pay Record Pro",
    desc: "Payroll software with tax/pension calculations, payslip dispatch, and financial reporting exports.",
    metric: "Automated salary scheduling",
    techDetail: ["PHP", "MySQL", "PDF Export", "Tax Calculations"]
  },
  {
    num: "22",
    cat: "e-commerce",
    name: "Textbooks.ng",
    desc: "Online bookstore with shopping cart, student-focused payments, and admin dashboard.",
    metric: "Academic community commerce",
    techDetail: ["PHP", "MySQL", "Bootstrap", "Payment Integration"]
  },
  {
    num: "23",
    cat: "developer tools",
    name: "Realms Projects",
    desc: "Backend architecture and NPM package publishing for high-performance developer tooling and CLI systems.",
    metric: "Open-source developer utility",
    techDetail: ["Node.js", "TypeScript", "WebSockets", "NPM Ecosystem", "CLI Tooling"],
    featured: true
  },
  {
    num: "24",
    cat: "social API",
    name: "Complete Blog API",
    desc: "Full-featured social blogging backend with nested replies, followers, and real-time private messaging.",
    metric: "Complex relational modeling",
    techDetail: ["Node.js", "Express", "MongoDB", "Mongoose", "Socket.io"]
  },
  {
    num: "25",
    cat: "analytics",
    name: "DNS Analytics Dashboard",
    desc: "Real-time DNS lookup analysis with visual charts for traffic volume, bandwidth, and response times.",
    metric: "Infrastructure monitoring",
    techDetail: ["JavaScript", "React", "Chart.js", "Node.js", "DNS APIs"]
  },
  {
    num: "26",
    cat: "microservices",
    name: "Employee Access System",
    desc: "Admin-driven microservices for managing complex business permissions and cross-unit employee access.",
    metric: "Enterprise access control",
    techDetail: ["PHP", "Laravel", "MySQL", "Microservices", "RBAC"],
    featured: true
  },
  {
    num: "27",
    cat: "automation bots",
    name: "Crypto & Forex Trading Bots",
    desc: "Automated Telegram trading bots with EJS-based admin dashboards for real-time monitoring and config.",
    metric: "Algorithmic trading oversight",
    techDetail: ["Node.js", "TypeScript", "Telegram API", "EJS", "Redis"]
  },
  {
    num: "28",
    cat: "search engine",
    name: "Cross-Collection Search",
    desc: "Unified search engine querying across products, vendors, and categories with MongoDB aggregation.",
    metric: "High-relevance unified results",
    techDetail: ["Node.js", "MongoDB", "Aggregation Pipelines", "Search Optimization"]
  },
  {
    num: "29",
    cat: "booking system",
    name: "Advanced Appointment System",
    desc: "Scheduling platform with recurring availability, cancellation limits, and multi-sector booking logic.",
    metric: "Strict business rule enforcement",
    techDetail: ["Node.js", "Express", "Mongoose", "Availability Modeling"]
  },
  {
    num: "30",
    cat: "mobile API",
    name: "Dashboard & Order API",
    desc: "Specialized backend powering mobile home dashboards, order lifecycles, and secure validation flows.",
    metric: "Mobile-first performance",
    techDetail: ["Node.js", "Express", "MongoDB", "express-validator"]
  },
  {
    num: "31",
    cat: "DevOps",
    name: "CI/CD Infrastructure",
    desc: "Automated GitHub Actions pipelines and self-hosted Linux runners for production-grade deployments.",
    metric: "Automated delivery pipelines",
    techDetail: ["GitHub Actions", "Linux", "systemd", "Shell Scripting", "Automation"]
  },
  {
    num: "32",
    cat: "marketing tech",
    name: "Newsletter Automation",
    desc: "Mailchimp-integrated system for managing automated marketing campaigns and subscriber triggers.",
    metric: "Automated audience growth",
    techDetail: ["PHP", "Laravel", "Mailchimp API", "Email Automation"]
  }
];
