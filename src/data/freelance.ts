export type FreelanceClient = {
  name: string
  flag: string
  country: string
  sector: string
  stack: string
  description: string
}

export const freelanceClients: FreelanceClient[] = [
  {
    name: 'DigiBank',
    flag: '🇳🇬',
    country: 'Nigeria',
    sector: 'Fintech',
    stack: 'PHP / Laravel',
    description: 'Loan scheduling & disbursement automation',
  },
  {
    name: 'VendoHub',
    flag: '🇺🇸',
    country: 'United States',
    sector: 'Marketplace',
    stack: 'Node.js, MongoDB',
    description: 'Vendor onboarding & catalogue APIs',
  },
  {
    name: 'EduCrest LMS',
    flag: '🇬🇧',
    country: 'United Kingdom',
    sector: 'EdTech',
    stack: 'NestJS',
    description: 'Role-based LMS with content gating',
  },
  {
    name: 'Schetia',
    flag: '🇳🇬',
    country: 'Nigeria',
    sector: 'EdTech',
    stack: 'Node.js, Express, MongoDB',
    description: 'Scheduling & curriculum management APIs',
  },
  {
    name: 'Movment',
    flag: '🇳🇬',
    country: 'Nigeria',
    sector: 'Transport',
    stack: 'Node.js',
    description: 'Ride-sharing dispatch & real-time tracking',
  },
  {
    name: 'GodgraceLab',
    flag: '🇳🇬',
    country: 'Nigeria',
    sector: 'HealthTech',
    stack: 'PHP, MySQL',
    description: 'Healthcare admin & patient management',
  },
  {
    name: 'SparkxyFix',
    flag: '🇳🇬',
    country: 'Nigeria',
    sector: 'Services',
    stack: 'Node.js',
    description: 'Maintenance booking & service provider matching',
  },
  {
    name: 'KID Platform',
    flag: '🇳🇬',
    country: 'Nigeria',
    sector: 'EdTech',
    stack: 'React.js, Node.js',
    description: "Kids' interactive learning portal",
  },
]
