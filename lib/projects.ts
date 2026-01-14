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
      "Financial analytics platform with real-time and historical market data and 40+ normalized metrics stored in Postgres and delivered via FastAPI. Bespoke, interactive d3.js charts that reveal market relationships and investors depend on.",
    tech: ["Python", "Next.js", "PostgreSQL"],
    image: "/test.mp4",
    alt: "Financial analytics platform",
    isVideo: true,
    links: [
      { label: "Live", href: "https://archipelago.example.com" },
      { label: "GitHub", href: "https://github.com/yourusername/archipelago" },
    ],
  },
  {
    id: "boulevard-quartz",
    title: "Boulevard Quartz",
    year: "2025",
    blurb:
      "Commercial real estate aggregation platform that scrapes local Missouri broker websites. Property search with interactive Mapbox maps, turning scattered listings into a unified database for easier property discovery.",
    tech: ["Python", "Next.js", "PostgreSQL"],
    image: "/projects/project-2.png",
    alt: "Commercial real estate platform",
  },
  {
    id: "nonprofit-roi",
    title: "Nonprofit ROI Calculator",
    year: "2025",
    blurb:
      "Web calculator helping nonprofits model paid advertising ROI across lead-generation and direct-appeal strategies. Real-time projections with industry-benchmarked conversion rates for data-driven budget decisions.",
    tech: ["Next.js", "TypeScript", "React"],
    image: "/projects/project-3.png",
    alt: "Nonprofit ROI calculator",
  },
  {
    id: "customer-reference",
    title: "Customer Reference Agent",
    year: "2025",
    blurb:
      "AI-powered sales tool for Act-On's sales team, instantly surfacing relevant customer quotes and testimonials from their Salesforce database to streamline personalized sales pitches.",
    tech: ["Claude", "Next.js", "FastAPI"],
    image: "/projects/project-4.png",
    alt: "AI-powered reference agent interface",
    links: [
      { label: "Case Study", href: "https://acton.com/customer-reference" },
    ],
  },
  {
    id: "blog-analysis",
    title: "Blog Analysis",
    year: "2025",
    blurb:
      "Python-based content audit system using Anthropic's Claude API for Act-On's marketing team, analyzing 2000+ blog posts for brand alignment and SEO in hours instead of months.",
    tech: ["Python", "Claude", "Data Analysis"],
    image: "/projects/project-5.png",
    alt: "Blog content analysis dashboard",
    links: [{ label: "Case Study", href: "https://acton.com/blog-analysis" }],
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
    links: [{ label: "Website", href: "https://patches.com" }],
  },
  {
    id: "listen-too",
    title: "Listen Too",
    year: "2023",
    blurb:
      "Next.js web application that generates shareable Spotify playlists from users' top tracks with a responsive interface built with TypeScript and Tailwind.",
    tech: ["Next.js", "TypeScript", "OAuth"],
    image: "/projects/project-7.png",
    alt: "Spotify playlist generator",
    links: [
      { label: "Live", href: "https://listentoo.app" },
      { label: "GitHub", href: "https://github.com/yourusername/listen-too" },
    ],
  },
];
