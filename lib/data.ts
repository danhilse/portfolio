export interface Experience {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export const experience: Experience[] = [
  {
    company: "Archipelago",
    role: "Lead Engineer",
    period: "2024 — Present",
    description: "Technical strategy and development for a real-time financial analytics platform with cross-sectional market visualization",
  },
  {
    company: "Act-On",
    role: "Freelance Developer",
    period: "2024 — 2025",
    description: "AI-powered sales enablement tools and content workflow automation for B2B marketing platform",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2023 — 2024",
    description: "Data-intensive web applications for startups and small businesses, focusing on real estate and nonprofit sectors",
  },
  {
    company: "Veteran's United",
    role: "SEO / Python",
    period: "2022",
    description: "Built search optimization tooling and Python automation for internal content operations",
  },
  {
    company: "Marpipe",
    role: "Founding Engineer",
    period: "2019 — 2020",
    description: "Developed multivariate ad testing platform from early prototype through enterprise client acquisition",
  },
  {
    company: "Ableton, AG",
    role: "Learning Resources",
    period: "2018",
    description: "Educational content and documentation for music production software",
  },
  {
    company: "pATCHES",
    role: "Founder / Developer",
    period: "2016 — Present",
    description: "Built and operate music education platform with JavaScript plugin ecosystem, reaching 2M+ visitors and $200k+ in sales",
  },
  {
    company: "Trulaske College of Business",
    role: "MBA Program",
    period: "2016 — 2017",
    description: "University of Missouri",
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "SQL"],
  frameworks: ["React", "Next.js", "Node.js", "Django", "FastAPI"],
  data: ["PostgreSQL", "TimescaleDB", "DynamoDB"],
  tools: ["AWS (EC2, RDS, S3)", "GCP", "GitHub Actions", "Jest"],
};

export const status = {
  current: "Lead Engineer at Archipelago",
  location: "Boulder, CO",
  timezone: "MST (UTC-7)",
};

export const about = `I've spent a decade building product-focused software in early-stage environments where requirements emerge through iteration and constraints are real. My work spans frontend, backend, and data infrastructure, with recent focus on AI-assisted workflows and analytics platforms.

I'm also a 3× founder. Building and operating pATCHES taught me the full product lifecycle—from early user testing through scaling to 2M+ visitors, balancing new features against operational stability.`;
