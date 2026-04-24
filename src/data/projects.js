const projects = [
  {
    num: "01",
    cat: "API & Infrastructure",
    name: "Auth SDK for Express.js",
    desc: "Published an open-source authentication SDK that standardizes token validation, refresh flows, and role-based access checks for Express applications.",
    metric: "200+ npm installs",
    link: "https://www.npmjs.com/package/@saminwankwo/auth-sdk",
    caseStudy: {
      problem: "Across multiple client projects, implementing secure JWT authentication, refresh flows, and role-based access control was causing significant boilerplate and inconsistent security patterns.",
      solution: "I built and published an NPM package that provides standardized, unit-tested authentication middleware for Express.js. It handles token validation, cookie management, and RBAC out of the box.",
      stack: "TypeScript, Express, JWT, Jest, GitHub Actions",
      outcome: "Reduced auth setup time by 80% for new APIs. Adopted across 4+ production systems and downloaded over 200 times."
    }
  },
  {
    num: "02",
    cat: "Fintech & Social",
    name: "Parrot Mobile Backend",
    desc: "REST + realtime backend for a social payments application serving over 5,000 users with split transactions and instant transfers.",
    metric: "$1M+ Processed",
    caseStudy: {
      problem: "The client needed a scalable backend capable of handling high-concurrency peer-to-peer transfers and social interactions (feeds, likes) simultaneously.",
      solution: "Architected a Node.js API with MongoDB, utilizing transactions for ledger safety. Integrated Paystack for funding and WebSockets for real-time notification delivery.",
      stack: "Node.js, Express, MongoDB, WebSockets, Paystack",
      outcome: "Successfully scaled to support 5,000+ active users processing hundreds of thousands of dollars in transaction volume."
    }
  },
  {
    num: "03",
    cat: "SaaS Platform",
    name: "Local Services Marketplace",
    desc: "Full marketplace platform connecting users to local service providers, with booking, escrow-style payments, and reviews.",
    metric: "High availability design",
    caseStudy: {
      problem: "Local artisans needed a reliable platform to receive bookings, while users needed a secure way to pay without risking incomplete jobs.",
      solution: "Built a NestJS microservice-style architecture handling booking state machines. Implemented an escrow payment flow where funds are held until job completion confirmation.",
      stack: "NestJS, PostgreSQL, Redis, Paystack",
      outcome: "Created a robust, fault-tolerant platform ready to scale to 10k+ concurrent users with automated dispute handling."
    }
  },
  {
    num: "04",
    cat: "Security & Tools",
    name: "Remote Access Terminal",
    desc: "Secure remote shell over WebSockets enabling authenticated users to execute server shell sessions safely.",
    metric: "Internal Operations",
    link: "https://github.com/saminwankwo"
  },
  {
    num: "05",
    cat: "AI & Machine Learning",
    name: "Intrusion Detection System",
    desc: "Hybrid ML pipeline using PHP for log ingestion and TensorFlow for traffic classification and anomaly detection.",
    metric: "40% faster response",
  },
  {
    num: "06",
    cat: "Marketplace",
    name: "Ride & Logistics Backend",
    desc: "Modular backend supporting ride-hailing, parcel delivery, and fleet management using a microservice-inspired architecture.",
    metric: "Complex Dispatch Logic",
  },
  {
    num: "07",
    cat: "Enterprise Software",
    name: "OfficePro",
    desc: "Comprehensive office management system covering HR, payroll, inventory, and accounting built on PHP.",
    metric: "Centralized Operations",
  },
  {
    num: "08",
    cat: "Content",
    name: "Social Blog Platform",
    desc: "Complete blogging backend with nested comments, reactions, private messaging, and notification feeds.",
    metric: "Rich relational data",
    link: "https://github.com/saminwankwo"
  }
];

export default projects;
