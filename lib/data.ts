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
    description: "Technical strategy and development for a real-time financial analytics platform",
  },
  {
    company: "Act-On",
    role: "Freelance Developer",
    period: "2024 — 2025",
    description: "AI-powered sales enablement tools and automated content workflows",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2023 — 2024",
    description: "Data-heavy web applications for startups and small businesses",
  },
  {
    company: "Veteran's United",
    role: "SEO / Python",
    period: "2022",
    description: "Search optimization tooling and internal Python automation",
  },
  {
    company: "Marpipe",
    role: "Founding Engineer",
    period: "2019 — 2020",
    description: "Built multivariate ad testing platform from prototype through enterprise clients",
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
    description: "Built and operate a music education platform reaching 2M+ visitors",
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

export const about = `I've spent about a decade building product-focused software, often in roles where the problem is underspecified and the constraints are real. My work spans frontend, backend, and data, with a focus on AI-assisted workflows and analytics-heavy products.

I'm also a 3× founder. Building and operating pATCHES taught me the full lifecycle—unclear requirements, tradeoffs under pressure, and the unglamorous work of keeping systems stable once people depend on them.`;
