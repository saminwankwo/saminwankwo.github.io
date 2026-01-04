export type ProjectLink = {
  demo?: string | null
  repo?: string | null
  readme?: string | null
}

export type Project = {
  id: string
  slug?: string
  title: string
  tagline?: string
  description: string
  tech: string[]
  image?: string
  links: ProjectLink
}

export const projects: Project[] = [
  {
    id: "auth-sdk-express",
    slug: "auth-sdk-express",
    title: "Auth SDK for Express.js",
    tagline: "Authentication middleware for Express (JS/TS)",
    description:
      "Published an open-source SDK standardizing token validation, refresh flows, and role checks. Includes TypeScript typings, unit tests, and CI/CD pipeline. Gained 200+ installs on npm.",
    tech: ["Node.js", "Express", "TypeScript", "Jest", "GitHub Actions", "npm"],
    image: "/assets/projects/auth-sdk.png",
    links: {
      demo: "https://www.npmjs.com/package/@saminwankwo/auth-sdk",
      repo: "https://github.com/saminwankwo/auth-sdk",
      readme: "https://github.com/saminwankwo/auth-sdk#readme",
    },
  },
  {
    id: "ai-intrusion-detection",
    slug: "ai-intrusion-detection",
    title: "AI Intrusion Detection System",
    tagline: "Hybrid ML pipeline (PHP ingestion + TensorFlow inference)",
    description:
      "Built an AI-powered intrusion detection pipeline with PHP collectors for logs, feature extraction, and TensorFlow classification. Improved security response times by 40%.",
    tech: ["PHP", "Python", "TensorFlow"],
    image: "/assets/projects/ai-intrusion.png",
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "cbt-exam",
    slug: "cbt-exam",
    title: "Computer Based Test (CBT) Software",
    tagline: "Hybrid ML pipeline (PHP, MYSQL)",
    description: "Built a computer based test software.",
    tech: ["PHP"],
    image: "/assets/projects/cbt-exam.png",
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "parrot-backend",
    slug: "parrot-backend",
    title: "Parrot — Mobile Backend",
    tagline: "Realtime backend for social and payment app",
    description:
      "Designed and deployed REST + realtime API for a mobile app, featuring JWT auth, chat-style money transfer, split payments with Paystack, and AWS S3 uploads. Served 5k+ active users.",
    tech: ["Node.js", "Express.js", "MongoDB", "AWS S3", "Paystack"],
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "sweeftly-ecommerce-api",
    slug: "sweeftly-ecommerce-api",
    title: "Sweeftly E-commerce API",
    tagline: "Multi-version API for ordering, payments & delivery",
    description:
      "Developed scalable e-commerce backend integrating Stripe, Apple Pay, and multiple delivery services (Stuart, Shipday, Gophr). Migrated from Express.js to NestJS, reducing API latency by 33% and scaling uptime to 99.9% with AWS load balancers.",
    tech: ["NestJS", "Express.js", "AWS", "Docker", "Stripe", "MongoDB"],
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "schetia-lms",
    slug: "schetia-lms",
    title: "Schetia LMS",
    tagline: "Cohort-based learning platform",
    description:
      "Learning management system with role-based access, course management, assessments, and progress tracking. Built with Node.js/Express and AWS S3 for media storage.",
    tech: ["Node.js", "Express.js", "MongoDB", "AWS S3"],
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "movment-rideshare",
    slug: "movment-rideshare",
    title: "Movment — Ride Sharing API",
    tagline: "Dispatch and trip lifecycle management",
    description:
      "Built ride-sharing API with driver–rider matching, trip lifecycle management, trip status webhooks, and retry policies for reliability.",
    tech: ["Node.js", "Express.js", "Redis", "MongoDB"],
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "sparkxyfix",
    slug: "sparkxyfix",
    title: "SparkxyFix",
    tagline: "Maintenance services booking app",
    description:
      "Developed backend for booking and payments platform connecting users to service providers. Implemented checkout, Paystack integration, and booking lifecycle management.",
    tech: ["Node.js", "Express.js", "MongoDB", "Paystack"],
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "godgrace-healthcare",
    slug: "godgrace-healthcare",
    title: "GodgraceLab Healthcare Portal",
    tagline: "Admin & reporting platform for clinics",
    description:
      "Built a healthcare admin portal with patient records, diagnostics, and reporting tools. PHP/MySQL backend with APIs for mobile integration.",
    tech: ["PHP", "MySQL"],
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "kid-learning-platform",
    slug: "kid-learning-platform",
    title: "KID Learning Platform",
    tagline: "Interactive coding lessons for kids",
    description:
      "Educational platform teaching kids HTML & CSS in a scratch-like interface. React.js frontend with Node.js/Express backend.",
    tech: ["React.js", "Node.js", "Express.js"],
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "remote-access-terminal",
    slug: "remote-access-terminal",
    title: "Remote Access Terminal (RAT)",
    tagline: "Secure remote shell over WebSockets",
    description:
      "Built a secure remote access terminal enabling authenticated shell management over WebSockets, with role-based access and audit logging.",
    tech: ["Node.js", "WebSockets", "Docker"],
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "officepro",
    slug: "officepro",
    title: "OfficePro",
    tagline: "All-in-one office management system",
    description:
      "Built in PHP/MySQL with features for HR, payroll, petty cash, inventory, project/task management, invoicing, and leave tracking.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "hospital-management",
    slug: "hospital-management",
    title: "Hospital Management System",
    tagline: "Complete hospital workflow platform",
    description:
      "Comprehensive hospital system for patient management, pharmacy, appointments, prescriptions, HR, and financials. Built in PHP/MySQL with mobile APIs.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "myreminda",
    slug: "myreminda",
    title: "MyReminda",
    tagline: "Automated reminders for businesses",
    description:
      "Notification service for certificate/document expiry via SMS and email. Included large storage capacity and backup support.",
    tech: ["PHP", "MySQL", "Twilio API"],
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "pay-record-pro",
    slug: "pay-record-pro",
    title: "Pay Record Pro",
    tagline: "Payroll management system",
    description:
      "Legacy payroll software migrated to PHP/MySQL with modern features like tax/pension calculations, payslip dispatch, salary schedules, and PDF/Excel export.",
    tech: ["PHP", "MySQL"],
    links: { demo: null, repo: null, readme: null },
  },
  {
    id: "textbooksng",
    slug: "textbooksng",
    title: "Textbooks.ng",
    tagline: "E-commerce platform for books",
    description:
      "Developed an early online bookstore in PHP/MySQL with shopping cart, payments, and admin dashboards. Served student communities.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    links: { demo: null, repo: null, readme: null },
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find(p => (p.slug || p.id) === slug)
}