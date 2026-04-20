export type Job = {
  company: string
  role: string
  type: string
  start: string
  end: string
  location: string
  current?: boolean
  tech: string[]
  bullets: string[]
}

export const experience: Job[] = [
  {
    company: 'Sweeftly',
    role: 'Backend Engineer',
    type: 'Full-Time',
    start: 'May 2024',
    end: 'Aug 2025',
    location: 'Scotland, UK',
    current: true,
    tech: ['NestJS', 'Express.js', 'MongoDB', 'AWS EC2', 'ELB', 'S3', 'Docker'],
    bullets: [
      'Led e-commerce API migration from v1 to v2 architecture, improving scalability and maintainability across the platform.',
      'Integrated delivery-partner APIs (Stuart, Shipday, Gophr) and implemented Stripe + Apple Pay split-payment flows.',
      'Configured AWS EC2 autoscaling groups behind an Elastic Load Balancer for zero-downtime deployments under peak traffic.',
      'Built a WhatsApp notification bot for real-time order status updates, reducing support tickets significantly.',
    ],
  },
  {
    company: 'Olotu Square',
    role: 'Backend Engineer',
    type: 'Contract',
    start: 'May 2024',
    end: 'Present',
    location: 'Port Harcourt, NG',
    current: true,
    tech: ['Node.js', 'Express', 'Laravel', 'MongoDB', 'MySQL', 'Docker', 'GitHub Actions'],
    bullets: [
      'Executed a full PHP → Laravel migration, modernizing the codebase and reducing technical debt substantially.',
      'Architected a multi-tenant SaaS platform with per-tenant database isolation, supporting 50+ active tenants.',
      'Implemented CI/CD pipelines via GitHub Actions with zero-downtime rolling deployments using Docker Compose.',
      'Led and mentored a 4-month internal backend engineering training program for junior developers.',
    ],
  },
  {
    company: 'Webxiel',
    role: 'Laravel Developer',
    type: 'Contract',
    start: 'Jan 2024',
    end: 'Oct 2024',
    location: 'Enugu, NG',
    tech: ['PHP', 'Laravel', 'MySQL'],
    bullets: [
      'Built a Laravel microservice powering the landlord-tenant mobile app\'s core property management API.',
      'Implemented JWT authentication workflows and webhook event delivery for third-party integrations.',
      'Optimized critical database queries, achieving measurable reductions in response latency for key endpoints.',
    ],
  },
  {
    company: 'iGiet Ltd',
    role: 'Software Engineer',
    type: 'Contract',
    start: 'Nov 2023',
    end: 'Sep 2024',
    location: 'Port Harcourt, NG',
    tech: ['Node.js', 'Express.js', 'Laravel', 'React.js', 'GraphQL'],
    bullets: [
      'Designed a hybrid REST + GraphQL API layer, reducing average response payload by ~30% for mobile clients.',
      'Built the backend infrastructure for Parrot app, including real-time feeds and user graph management.',
      'Achieved ~50% load time improvement on web products by introducing server-side rendering techniques.',
    ],
  },
  {
    company: 'Credib',
    role: 'Backend Developer',
    type: 'Full-Time',
    start: 'Aug 2022',
    end: 'Feb 2024',
    location: 'Port Harcourt, NG',
    tech: ['Node.js', 'GraphQL', 'MySQL', 'AWS', 'Docker', 'Redis', 'RabbitMQ'],
    bullets: [
      'Developed a GraphQL API gateway orchestrating requests across multiple internal microservices.',
      'Integrated Paystack split-payment system alongside AWS S3 for secure document and media storage.',
      'Implemented Redis caching layers and RabbitMQ job queues to handle asynchronous processing at scale.',
    ],
  },
  {
    company: 'Emblic Technologies',
    role: 'Software Developer',
    type: 'On-site',
    start: 'Mar 2020',
    end: 'Jul 2022',
    location: 'Port Harcourt, NG',
    tech: ['PHP', 'MySQL', 'Java / Kotlin Android', 'AWS'],
    bullets: [
      'Built OfficePro — a comprehensive HR, payroll, inventory, and invoicing enterprise application.',
      'Developed a full Hospital Management System covering patient records, billing, and appointment scheduling.',
      'Published MyReminda to Google Play Store; built a POS hardware integration solution for retail clients.',
    ],
  },
]
