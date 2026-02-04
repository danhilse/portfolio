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
      "Cross-sectional market analysis platform with interactive charts comparing 500+ stocks across momentum metrics. Replaces spreadsheet-driven research with visual distribution analysis that surfaces market structure hidden in rank tables.",
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
      "Commercial real estate aggregator that scrapes regional broker sites and unifies search across 5,000+ listings. Eliminated a daily 5-site manual workflow while running under $30/month on AWS.",
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
      "Embeddable ROI calculator for nonprofit campaigns with real-time projections and branded PDF exports. Drop-in React component for Webflow and no-code platforms.",
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
      "Internal AI search tool that surfaces customer quotes from Salesforce using semantic search and confidence scoring. Eliminates the mid-pitch \"can you find me a quote?\" scramble.",
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
      "AI-assisted content audit that classified 500+ blog posts by strategic use case, revealing that 62% of content targeted acquisition over retention—a strategic gap invisible in the spreadsheet view.",
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
      "Shareable playlist generator built on Spotify's API. Analyzes recent listening activity and creates curated playlists in seconds.",
    tech: ["Next.js", "TypeScript", "OAuth"],
    image: "/projects/project-7.png",
    alt: "Spotify playlist generator",
    links: [
      { label: "Case Study", href: "/case-study/listen-too" },
      { label: "Live", href: "https://www.listen-too.app" },
    ],
  },
];
