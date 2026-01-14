export interface Experience {
  company: string;
  role: string;
  period: string;
  description?: string;
}

export const experience: Experience[] = [
  {
    company: "Act-On Software",
    role: "Software Engineer",
    period: "2023 — Present",
    description: "AI-powered sales tools and content automation",
  },
  {
    company: "pATCHES",
    role: "Founder & Developer",
    period: "2016 — Present",
    description: "Music education platform, 2M+ visitors, $200k+ revenue",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2020 — 2023",
    description: "Web applications for startups and small businesses",
  },
];

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "SQL"],
  frameworks: ["Next.js", "React", "FastAPI", "Node.js"],
  data: ["PostgreSQL", "Redis", "Pandas", "D3.js"],
  tools: ["AWS", "Docker", "Git", "Claude API"],
};

export const status = {
  current: "Building AI-powered tools at Act-On",
  availability: "Open to new opportunities",
};

export const about = `I'm a full-stack developer who enjoys building products that
solve real problems. I've spent the last few years focused on AI applications,
data platforms, and developer tools — work that sits at the intersection of
complex systems and clean user experiences.

Previously, I built pATCHES into a music education platform reaching millions
of visitors. I like shipping things that people actually use.`;
