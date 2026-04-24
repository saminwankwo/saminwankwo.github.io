const experience = [
  {
    company: "Sweeftly",
    role: "Backend Engineer",
    date: "May 2024 – Present",
    loc: "Scotland, UK (Remote)",
    current: true,
    tech: ["NestJS", "Express.js", "MongoDB", "AWS EC2", "Docker", "Stripe"],
    bullets: [
      "Led e-commerce API migration from v1 to v2 architecture, improving scalability and maintainability across the platform.",
      "Integrated delivery-partner APIs (Stuart, Shipday, Gophr) and implemented Stripe + Apple Pay split-payment flows.",
      "Configured AWS EC2 autoscaling groups behind an Elastic Load Balancer for zero-downtime deployments under peak traffic.",
      "Built a WhatsApp notification bot for real-time order status updates, reducing support tickets significantly."
    ]
  },
  {
    company: "Olotu Square",
    role: "Backend Engineer",
    date: "May 2024 – Present",
    loc: "Port Harcourt, NG",
    current: true,
    tech: ["PHP", "Laravel", "Node.js", "Docker", "CI/CD"],
    bullets: [
      "Migrate legacy PHP systems to modern Laravel architectures and build multi-tenant SaaS platforms.",
      "Implement CI/CD with GitHub Actions and Docker to ensure zero-downtime releases.",
      "Lead a hands-on backend training program, mentoring developers on Node.js, Express, testing, and API design."
    ]
  },
  {
    company: "Webxiel",
    role: "Laravel Developer",
    date: "Jan 2024 – Oct 2024",
    loc: "Enugu State, NG (Remote)",
    current: false,
    tech: ["PHP", "Laravel", "MySQL", "REST APIs"],
    bullets: [
      "Delivered a Laravel microservice as part of a landlord-to-tenant mobile API architecture.",
      "Wrote secure REST endpoints, authentication flows, and webhook integrations to support complex mobile workflows.",
      "Optimized service endpoints to significantly improve response times for mobile consumers."
    ]
  },
  {
    company: "iGiet Ltd",
    role: "Software Engineer",
    date: "Nov 2023 – Sep 2024",
    loc: "Port Harcourt, NG (Remote)",
    current: false,
    tech: ["Node.js", "Express.js", "GraphQL", "React.js"],
    bullets: [
      "Designed and implemented the Parrot mobile app backend with real-time webhooks.",
      "Built a vehicle-registration app integrating both frontend and backend systems.",
      "Delivered e-commerce modules and a REST+GraphQL hybrid API to improve client data fetching performance."
    ]
  },
  {
    company: "Credib",
    role: "Backend Developer",
    date: "Aug 2022 – Feb 2024",
    loc: "Lagos, NG (Remote)",
    current: false,
    tech: ["Node.js", "GraphQL", "Redis", "RabbitMQ", "Paystack"],
    bullets: [
      "Designed a GraphQL API and gateway to unify access across microservices for a chat-style e-commerce flow.",
      "Built order workflows with split payments via Paystack and managed file uploads via AWS S3.",
      "Used Redis and RabbitMQ for caching and background processing to improve latency under high loads."
    ]
  },
  {
    company: "Emblic Technologies",
    role: "Software Developer",
    date: "Mar 2020 – Jul 2022",
    loc: "Port Harcourt, NG",
    current: false,
    tech: ["PHP", "MySQL", "Java", "Android"],
    bullets: [
      "Built multiple enterprise web applications including OfficePro and a Hospital Management system.",
      "Implemented backend APIs and developed Android applications (Java/Kotlin) to consume them.",
      "Maintained nightly backups and AWS monitoring for production systems."
    ]
  }
];

export default experience;
