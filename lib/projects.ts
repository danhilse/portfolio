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
      "Cross-sectional market analysis tool that replaced my spreadsheet-driven momentum research. Four interactive visualization types for comparing 500+ stocks across multiple metrics simultaneously—built because rank tables destroy the structure I needed to see.",
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
      "Commercial real estate aggregator that scrapes regional Missouri brokers without APIs. Replaced a client's daily routine of checking 5+ websites with unified search across 5,000+ listings—running for under $30/month.",
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
      "Embeddable ROI calculator for nonprofit paid media campaigns, built to work on Webflow sites I don't control. Real-time projections with sub-20ms slider interactions and branded PDF exports for lead capture.",
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
      "AI-powered search tool that surfaces customer quotes from Salesforce for Act-On's sales team. Replaced the mid-pitch 'can you find me a quote?' call with 3-second semantic search, confidence scoring, and multi-provider failover.",
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
      "AI-powered content audit that classified 500+ archived blog posts against Act-On's strategic use case framework. Replaced 5+ weeks of manual review with 3 hours of batch processing—and revealed a 62% acquisition skew that was invisible in the spreadsheet.",
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
      "Music education platform and JavaScript plugin ecosystem reaching 2M+ visitors, combining educational content with professional audio software, generating over $200k in plugin sales since 2016.",
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
      "Playlist generator that turns 'what are you listening to?' into a shareable link in under 10 seconds. Merges Spotify's top tracks with recently liked songs to capture what you're actually into right now.",
    tech: ["Next.js", "TypeScript", "OAuth"],
    image: "/projects/project-7.png",
    alt: "Spotify playlist generator",
    links: [
      { label: "Case Study", href: "/case-study/listen-too" },
      { label: "Live", href: "https://www.listen-too.app" },
    ],
  },
];
