export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  blurb: string;
  tech: string[];
  image: string;
  alt: string;
  isVideo?: boolean;
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "archipelago",
    title: "Archipelago",
    year: "2025",
    blurb:
      "Cross-sectional market analysis tool with interactive charts for comparing 500+ stocks across multiple momentum metrics. Built to replace spreadsheet-driven research where rank tables obscure distribution and clustering.",
    tech: ["Python", "Next.js", "PostgreSQL"],
    image: "/test.mp4",
    alt: "Financial analytics platform",
    isVideo: true,
    links: [
      { label: "Case Study", href: "/case-study/archipelago" },
    ],
  },
  {
    id: "boulevard-quartz",
    title: "Boulevard Quartz",
    year: "2025",
    blurb:
      "Commercial real estate aggregator that scrapes regional broker sites and unifies search across 5,000+ listings. Replaced a client's daily 5-site workflow while running under $30/month.",
    tech: ["Python", "Next.js", "PostgreSQL"],
    image: "/projects/project-2.png",
    alt: "Commercial real estate platform",
    links: [
      { label: "Case Study", href: "/case-study/quartz" },
      { label: "Live", href: "https://quartz.blvdcommercial.com/" },
    ],
  },
  {
    id: "nonprofit-roi",
    title: "Nonprofit ROI Calculator",
    year: "2025",
    blurb:
      "Embeddable ROI calculator for nonprofit campaigns with real-time projections and branded PDF exports. Ships as a drop-in component for Webflow and similar platforms.",
    tech: ["Next.js", "TypeScript", "React"],
    image: "/projects/project-3.png",
    alt: "Nonprofit ROI calculator",
    links: [
      { label: "Case Study", href: "/case-study/share-calculator" },
      { label: "Live", href: "https://www.shareservices.co/digital-fundraising-calculator-for-nonprofits" },
    ],
  },
  {
    id: "customer-reference",
    title: "Customer Reference Agent",
    year: "2025",
    blurb:
      "Internal AI search tool that pulls customer quotes from Salesforce with semantic search and confidence scoring. Replaced the mid-pitch \"can you find me a quote?\" call.",
    tech: ["Claude", "Next.js", "Vercel AI SDK"],
    image: "/projects/project-4.png",
    alt: "AI-powered reference agent interface",
    links: [
      { label: "Case Study", href: "/case-study/reference-agent" },
      { label: "Demo", href: "https://reference-agent.vercel.app/" },
    ],
  },
  {
    id: "blog-analysis",
    title: "Blog Content Audit",
    year: "2024",
    blurb:
      "AI-assisted content audit that classified 500+ posts into strategic use cases and surfaced that 62% of content targeted acquisition over retention—a gap invisible in the spreadsheet.",
    tech: ["Python", "Claude", "Next.js"],
    image: "/projects/project-5.png",
    alt: "Blog content analysis dashboard",
    links: [
      { label: "Case Study", href: "/case-study/blog-audit" },
      { label: "Live", href: "https://blog-data-visualization.vercel.app/" },
    ],
  },
  {
    id: "patches",
    title: "pATCHES",
    year: "ongoing",
    blurb:
      "Music education platform and JavaScript plugin ecosystem reaching 2M+ visitors with $200k+ in plugin sales since 2016.",
    tech: ["JavaScript", "AWS", "Web Analytics"],
    image: "/projects/project-6.png",
    alt: "pATCHES music education platform",
    links: [{ label: "Website", href: "https://www.patches.zone" }],
  },
  {
    id: "listen-too",
    title: "Listen Too",
    year: "2024",
    blurb:
      "Generates a shareable playlist from recent Spotify activity in seconds.",
    tech: ["Next.js", "TypeScript", "OAuth"],
    image: "/projects/project-7.png",
    alt: "Spotify playlist generator",
    links: [
      { label: "Case Study", href: "/case-study/listen-too" },
      { label: "Live", href: "https://www.listen-too.app" },
    ],
  },
];
