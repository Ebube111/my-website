export const profile = {
  name: "Ebube Agwaze",
  role: "Lead Software Engineer",
  email: "ebubeagwaze@gmail.com",
  location: "Nigeria",
  availability: "Open to software engineer, frontend engineer, and product engineering roles",
  summary:
    "I build production software across web, mobile, APIs, and database-backed systems. My best work sits where product judgment meets strong frontend architecture: turning rough requirements into stable interfaces, reliable releases, and applications people can actually use.",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Ebube111",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ebube-agwaze-375a771b8/",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/Busko_57",
    },
  ],
};

export const proofPoints = [
  { value: "5+", label: "years building production software" },
  { value: "Web + mobile", label: "apps shipped across platforms" },
  { value: "Lead", label: "frontend architecture and delivery" },
  { value: "REST + DB", label: "backend integration and data flows" },
];

export const expertise = [
  {
    title: "Frontend systems",
    description:
      "I design React and Next.js interfaces that stay maintainable as teams, product surfaces, and user states grow. I care about component boundaries, performance, accessibility, and clear UI data flow.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Design systems"],
  },
  {
    title: "Mobile product delivery",
    description:
      "I work beyond browser-only experiences, building and shipping mobile apps through real release pipelines, store requirements, and production feedback loops.",
    skills: ["React Native", "App releases", "Cross-platform UX", "Store delivery"],
  },
  {
    title: "Backend integration",
    description:
      "I am comfortable shaping frontend work around REST APIs, GraphQL, authentication flows, database-backed features, and the tradeoffs that show up when systems meet real users.",
    skills: ["REST APIs", "GraphQL", "Node.js", "Databases", "Auth flows", "Blockchain"],
  },
  {
    title: "Engineering leadership",
    description:
      "I help teams move with less ambiguity: breaking work down, reviewing implementation quality, mentoring engineers, and keeping product decisions connected to technical reality.",
    skills: ["Technical planning", "Code review", "Mentorship", "Delivery ownership"],
  },
];

export const projects = [
  {
    name: "Bible Paddy",
    role: "Founding Full Stack Engineer",
    image: "/biblepaddy.png",
    href: "https://biblepaddy.com/",
    links: [
      { label: "Website", href: "https://biblepaddy.com/" },
      { label: "App Store", href: "https://apps.apple.com/ng/app/bible-paddy/id6759342046" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.biblepaddy" },
    ],
    description:
      "Founded and built Bible Paddy end to end, owning the product vision, technical architecture, backend foundations, mobile experience, and release lifecycle from idea to production.",
    impact:
      "Successfully launched the app on both iOS and Android, shipping a high-performance React Native and TypeScript experience with large Bible datasets, AI-driven chat features, Firebase-powered deep-linked notifications, and a branded content-sharing engine that generates social assets from app data.",
    stack: ["React Native", "TypeScript", "Firebase", "AI chat", "Mobile release", "iOS", "Android"],
  },
  {
    name: "Daba Finance",
    role: "Lead Frontend Engineer",
    image: "/daba.png",
    href: "https://dabafinance.com",
    description:
      "Led the web frontend architecture and delivery of internal admin products for a fintech platform focused on African startups, IPOs, and stock investing, built the app's news section, and resolved SEO challenges around page indexing while aligning GraphQL data models with scalable, maintainable interfaces.",
    impact:
      "Improved operational efficiency for investment teams by shipping reliable internal tools that reduced manual workflows, increased visibility across investment data, and supported faster decision-making.",
    stack: ["React", "GraphQL", "TypeScript", "Wordpress", "Next.js"],
  },
  {
    name: "Potlock",
    role: "Web3 Senior Frontend Engineer",
    image: "/potlock.svg",
    href: "https://app.potlock.org/",
    description:
      "Worked on Potlock's multi-chain donation and public-goods funding platform, building campaign experiences that help projects raise funds, receive direct donations, and participate in quadratic funding pots across NEAR, EVM-compatible chains, and Solana.",
    impact:
      "Built complex donation allocation flows with full, proportional-share, and group-distribution strategies, supporting fungible and native tokens, fee handling, multicall transaction batching, wallet integrations, real-time transaction status tracking, and DAO proposal workflows.",
    stack: ["React", "TypeScript", "NEAR", "EVM", "Solana", "Web3Modal", "Wagmi", "Blockchain"],
  },
  

];

export const principles = [
  "Build interfaces around clear data flow, API contracts, and long-term maintainability.",
  "Translate product ambiguity into scoped technical plans, release milestones, and measurable outcomes.",
  "Treat performance, accessibility, error states, and release quality as core parts of the user experience.",
];
