export const CONFIG = Object.freeze({
  // Identity
  name:            "Samuel Nwankwo",
  fullName:        "Nwankwo Samuel",
  title:           "Backend Engineer",
  shortTitle:      "Backend Engineer | Node.js · PHP · Cloud",
  tagline:         "Building scalable APIs, microservices, and cloud infrastructure.",
  initials:        "SN",

  // Location & availability
  location:        "Port Harcourt, Nigeria",
  country:         "NG",
  timezone:        "UTC+1 (WAT)",
  timezoneNote:    "Overlap with EU business hours · Partial US East overlap",
  availableFrom:   "Immediately",
  workPreference:  "Remote-first · Contract or Full-time · Async-friendly",
  noticeRequired:  "None",
  available:       true,

  // Contact
  email:           "nwankwosami@gmail.com",
  phone:           "+234 805 864 3829",

  // Social handles
  handle:          "saminwankwo",

  // Social URLs
  githubUrl:       "https://github.com/saminwankwo",
  linkedinUrl:     "https://linkedin.com/in/saminwankwo",
  twitterUrl:      "https://twitter.com/saminwankwo",
  instagramUrl:    "https://instagram.com/saminwankwo",
  telegramUrl:     "https://t.me/saminwankwo",
  npmUrl:          "https://npmjs.com/~saminwankwo",
  youtubeUrl:      "https://youtube.com/@saminwankwo",
  hashnodeUrl:     "https://saminwankwo.hashnode.dev",
  twitterHandle:   "@saminwankwo",

  // Environment-driven
  siteUrl:         import.meta.env.VITE_SITE_URL       || "https://saminwankwo.dev",
  hashnodeBlog:    import.meta.env.VITE_HASHNODE_BLOG   || "saminwankwo.hashnode.dev",
  hashnodeUser:    import.meta.env.VITE_HASHNODE_USERNAME || "saminwankwo",
  githubUser:      import.meta.env.VITE_GITHUB_USERNAME  || "saminwankwo",
  formspreeId:     import.meta.env.VITE_FORMSPREE_ID     || "",

  // Assets
  resumePath:      "/Samuel_Nwankwo_ATS_Resume_v2.pdf",
  resumeFilename:  "Samuel_Nwankwo_ATS_Resume_v2.pdf",
  ogImage:         "/og-image.jpg",

  // SEO keywords
  seoKeywords: [
    "backend engineer","Node.js developer","PHP Laravel developer","NestJS",
    "REST API","GraphQL","microservices","AWS","Docker","Nigeria developer",
    "remote backend engineer","Samuel Nwankwo","saminwankwo"
  ],

  // Skills meta keywords
  skillKeywords: [
    "Node.js","Expressjs","NestJS","PHP","Laravel","TypeScript","JavaScript",
    "MongoDB","MySQL","PostgreSQL","Redis","AWS","Docker","GraphQL",
    "REST APIs","Microservices","RabbitMQ","WebSockets","CI/CD"
  ],

  // Currently learning
  currentlyLearning: [
    "Apache Kafka",
    "Bun.js runtime",
    "TypeScript advanced patterns",
    "System design at scale"
  ],

  // Socials list
  socials: [
    { label: "GitHub",      url: "https://github.com/saminwankwo",          ariaLabel: "GitHub profile" },
    { label: "LinkedIn",    url: "https://linkedin.com/in/saminwankwo",      ariaLabel: "LinkedIn profile" },
    { label: "Twitter / X", url: "https://twitter.com/saminwankwo",          ariaLabel: "Twitter/X profile" },
    { label: "Instagram",   url: "https://instagram.com/saminwankwo",        ariaLabel: "Instagram profile" },
    { label: "Telegram",    url: "https://t.me/saminwankwo",                 ariaLabel: "Telegram profile" },
    { label: "npm",         url: "https://npmjs.com/~saminwankwo",           ariaLabel: "npm packages" },
    { label: "YouTube",     url: "https://youtube.com/@saminwankwo",         ariaLabel: "YouTube channel" },
    { label: "Hashnode",    url: "https://saminwankwo.hashnode.dev",         ariaLabel: "Hashnode blog" },
  ]
})

export default CONFIG
