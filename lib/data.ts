export interface Experience {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export const experience: Experience[] = [
  {
    company: "Archipelago",
    role: "Chief Technology Officer",
    period: "2024 — Present",
    description: "Leading technical strategy and product development",
  },
  {
    company: "Act-On",
    role: "Freelance Developer",
    period: "2024 — 2025",
    description: "AI-powered sales tools and content automation",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2023 — 2024",
    description: "Web applications for startups and small businesses",
  },
  {
    company: "Veteran's United",
    role: "SEO / Python",
    period: "2022",
    description: "Search optimization and Python tooling",
  },
  {
    company: "Marpipe",
    role: "Head of Product",
    period: "2021 — 2022",
    description: "Product strategy for creative testing platform",
  },
  {
    company: "Ableton, AG",
    role: "Learning Resources",
    period: "2018",
    description: "Educational content for music production software",
  },
  {
    company: "pATCHES",
    role: "Founder / Developer",
    period: "2016 — Present",
    description: "Music education platform, 2M+ visitors, $200k+ revenue",
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
  current: "CTO at Archipelago",
  location: "Boulder, CO",
  timezone: "MST (UTC-7)",
};

export const about = `I’m a full-stack developer with about a decade of experience building and operating production software. The work has mostly involved AI tools, data-heavy systems, and internal or customer-facing products where reliability matters as much as usability.

I’ve founded and run products end-to-end, including pATCHES, a music education platform used by more than 2M people. Most of my day-to-day work is taking unclear problems, shipping something concrete, and improving it based on how people actually use it.`;
