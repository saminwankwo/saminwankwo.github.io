export type ProjectLink = {
  demo?: string | null
  repo?: string | null
  readme?: string | null
}

export type Project = {
  id: string
  slug?: string
  cat: string
  title: string
  tagline?: string
  description: string
  metric: string
  tech: string[]
  image?: string
  links: ProjectLink
}

export const projects: Project[] = [
  {
    id: 'auth-sdk-express',
    slug: 'auth-sdk-express',
    cat: '01 / npm',
    title: 'Auth SDK for Express.js',
    tagline: 'Authentication middleware for Express (JS/TS)',
    description:
      'Published an open-source SDK standardizing token validation, refresh flows, and role checks. Includes TypeScript typings, unit tests, and CI/CD pipeline.',
    metric: '200+ app installs on npmjs.com',
    tech: ['Node.js', 'Express', 'TypeScript', 'Jest', 'GitHub Actions', 'npm'],
    links: {
      demo: 'https://www.npmjs.com/package/@saminwankwo/auth-sdk',
      repo: 'https://github.com/saminwankwo/auth-sdk',
      readme: 'https://github.com/saminwankwo/auth-sdk#readme',
    },
  },
  {
    id: 'multitenant-saas',
    slug: 'multitenant-saas',
    cat: '02 / SaaS',
    title: 'Multitenant SaaS Platform',
    tagline: 'White-label SaaS engine with per-tenant DB isolation',
    description:
      'SaaS engine with per-tenant database isolation, subscription billing, and a self-serve onboarding portal. Powers 50+ active tenants.',
    metric: 'Setup time: 3 days → 30 minutes',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Docker', 'GitHub Actions'],
    links: { demo: null, repo: null },
  },
  {
    id: 'sweeftly-ecommerce-api',
    slug: 'sweeftly-ecommerce-api',
    cat: '03 / Commerce',
    title: 'E-Commerce API',
    tagline: 'Multi-version API for ordering, payments & delivery',
    description:
      'High-throughput commerce backend with split payment processing, multi-vendor inventory management, and real-time order tracking via WebSockets.',
    metric: '$1M+ processed in first 6 months',
    tech: ['NestJS', 'Express.js', 'AWS', 'Docker', 'Stripe', 'MongoDB'],
    links: { demo: null, repo: null },
  },
  {
    id: 'devxp-dev',
    slug: 'devxp-dev',
    cat: '04 / DevTools',
    title: 'DevXP.dev',
    tagline: 'Developer experience platform',
    description:
      'Developer experience platform with API mocking, request introspection, schema visualization, and collaborative workspace features.',
    metric: '500+ users · 80% weekly active rate',
    tech: ['Node.js', 'React.js', 'TypeScript', 'MongoDB'],
    links: { demo: null, repo: null },
  },
  {
    id: 'sports-prediction-api',
    slug: 'sports-prediction-api',
    cat: '05 / ML',
    title: 'Sports Prediction API',
    tagline: 'ML-backed sports outcome prediction service',
    description:
      'Machine-learning-backed sports outcome prediction service with sub-100ms cold starts, containerized Lambda deployments, and live data ingestion pipelines.',
    metric: '<100ms cold start · 99.7% uptime',
    tech: ['Node.js', 'AWS Lambda', 'Docker', 'Python', 'TensorFlow'],
    links: { demo: null, repo: null },
  },
  {
    id: 'ai-intrusion-detection',
    slug: 'ai-intrusion-detection',
    cat: '06 / Security',
    title: 'AI Intrusion Detection System',
    tagline: 'Hybrid ML pipeline (PHP ingestion + TensorFlow inference)',
    description:
      'AI-powered network intrusion detection engine that analyzes traffic patterns in real time, flags anomalies, and generates actionable security reports.',
    metric: '92% detection accuracy',
    tech: ['PHP', 'Python', 'TensorFlow'],
    links: { demo: null, repo: null },
  },
  {
    id: 'remote-access-terminal',
    slug: 'remote-access-terminal',
    cat: '07 / WS',
    title: 'Remote Access Terminal',
    tagline: 'Secure remote shell over WebSockets',
    description:
      'Browser-based remote shell terminal over WebSockets, enabling secure server management, file operations, and process monitoring from any device.',
    metric: '60% reduction in troubleshooting time',
    tech: ['Node.js', 'WebSockets', 'Docker'],
    links: { demo: null, repo: null },
  },
  {
    id: 'portfolio',
    slug: 'portfolio',
    cat: '08 / Portfolio',
    title: 'Interactive Developer Portfolio',
    tagline: 'Terminal-themed Next.js portfolio',
    description:
      'This portfolio — a terminal-themed Next.js multi-page portfolio with scroll-reveal animations, a contact form, and live Hashnode blog integration.',
    metric: '95+ Lighthouse performance score',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: {
      repo: 'https://github.com/saminwankwo/saminwankwo.github.io',
    },
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => (p.slug || p.id) === slug)
}