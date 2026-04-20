export type Skill = {
  icon: string
  category: string
  primary: string[]
  normal: string[]
}

export const skills: Skill[] = [
  {
    icon: '⚡',
    category: 'Languages & Frameworks',
    primary: ['Node.js', 'NestJS', 'PHP', 'Laravel'],
    normal: ['Express.js', 'TypeScript', 'JavaScript', 'React.js'],
  },
  {
    icon: '🗄️',
    category: 'Databases',
    primary: ['MongoDB', 'MySQL'],
    normal: ['PostgreSQL', 'Redis', 'Mongoose'],
  },
  {
    icon: '☁️',
    category: 'Cloud & DevOps',
    primary: ['AWS EC2', 'Docker'],
    normal: ['AWS S3', 'Lambda', 'Nginx', 'GitHub Actions', 'CI/CD'],
  },
  {
    icon: '🔗',
    category: 'API & Architecture',
    primary: ['REST APIs', 'GraphQL'],
    normal: ['Microservices', 'WebSockets', 'RabbitMQ', 'Webhooks'],
  },
  {
    icon: '💳',
    category: 'Payments & Integrations',
    primary: ['Stripe', 'Paystack'],
    normal: ['Apple Pay', 'Split Payments', 'Mailchimp', 'WhatsApp API'],
  },
  {
    icon: '🔐',
    category: 'Testing & Security',
    primary: ['Jest', 'PHPUnit'],
    normal: ['OWASP', 'JWT / OAuth', 'Rate Limiting'],
  },
]
