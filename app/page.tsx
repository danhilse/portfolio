"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/projects";
import { experience, skills, about } from "@/lib/data";

function ProjectRow({
  project,
  index,
  isExpanded,
  onToggle,
  isHovered,
  isNextHovered,
  onHover,
  onLeave,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  isHovered: boolean;
  isNextHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const hideBorder = isHovered || isNextHovered;

  return (
    <div
      className="group animate-fade-up"
      style={{ animationDelay: `${400 + index * 80}ms` }}
    >
      <div
        className={`grid grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-baseline py-6 md:py-8 -mx-4 px-4 rounded-lg transition-all duration-300 cursor-pointer border-b ${
          isHovered ? "bg-foreground/[0.03]" : ""
        } ${hideBorder ? "border-transparent" : "border-border"}`}
        onClick={onToggle}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {/* Index */}
        <span className="text-muted/50 text-xs tabular-nums w-6 transition-colors duration-300 group-hover:text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title + Expanded Content */}
        <div className="min-w-0">
          <h2 className="text-base md:text-lg font-medium tracking-tight truncate transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h2>

          <div
            className="overflow-hidden transition-all duration-500 ease-out"
            style={{
              maxHeight: isExpanded ? "600px" : "0",
              opacity: isExpanded ? 1 : 0,
            }}
          >
            <div className="pt-6">
              <p className="text-muted text-sm leading-relaxed max-w-2xl mb-6">
                {project.blurb}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted/80 bg-foreground/[0.03] border border-border px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.links && project.links.length > 0 && (
                <div className="flex gap-6">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group/link"
                    >
                      {link.label}
                      <svg
                        className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Year + Toggle */}
        <div className="flex items-center gap-4">
          <span className="text-muted/50 text-xs hidden sm:block">
            {project.year}
          </span>
          <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/5">
            <span
              className="text-muted text-xs transition-all duration-300 group-hover:text-accent"
              style={{
                transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleProject = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span
            className="text-xs tracking-wide animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            Echo Roberts
          </span>
          <nav
            className="flex gap-6 animate-fade-in"
            style={{ animationDelay: "150ms" }}
          >
            <a
              href="#work"
              className="text-xs text-muted hover:text-foreground transition-colors duration-300"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-xs text-muted hover:text-foreground transition-colors duration-300"
            >
              About
            </a>
            <a
              href="mailto:hello@echoroberts.com"
              className="text-xs text-muted hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-32 pb-24 md:pt-44 md:pb-32">
          <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
            <p className="text-xs text-muted uppercase tracking-widest mb-6">
              Full-stack Developer
            </p>
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] mb-8 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Building thoughtful
            <br />
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              digital products
            </span>{" "}
            that
            <br />
            solve real problems.
          </h1>
          <p
            className="text-sm text-muted max-w-md leading-relaxed animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Specializing in Python, TypeScript, and AI-powered applications.
            <br />
            Currently open to new opportunities.
          </p>
          <div
            className="flex gap-4 mt-8 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#work"
              className="text-xs bg-foreground text-background px-4 py-2.5 rounded-full hover:bg-accent transition-colors duration-300"
            >
              View Work
            </a>
            <a
              href="mailto:hello@echoroberts.com"
              className="text-xs border border-border px-4 py-2.5 rounded-full hover:border-foreground transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="pb-24 md:pb-32">
          <div
            className="flex items-center justify-between mb-8 border-b border-border pb-4 animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            <h2 className="text-xs text-muted uppercase tracking-widest">
              Selected Work
            </h2>
            <span className="text-xs text-muted/50 tabular-nums">
              {projects.length} projects
            </span>
          </div>

          <div>
            {projects.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={index}
                isExpanded={expandedId === project.id}
                onToggle={() => toggleProject(project.id)}
                isHovered={hoveredIndex === index}
                isNextHovered={hoveredIndex === index + 1}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        </section>

        {/* About & Skills */}
        <section id="about" className="py-24 md:py-32">
          <h2 className="text-xs text-muted uppercase tracking-widest mb-12">
            About
          </h2>
          <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16">
            <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
              {about}
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs text-muted/50 uppercase tracking-widest mb-4">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-foreground bg-foreground/[0.03] border border-border px-2.5 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs text-muted/50 uppercase tracking-widest mb-4">
                  Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-foreground bg-foreground/[0.03] border border-border px-2.5 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs text-muted/50 uppercase tracking-widest mb-4">
                  Data & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[...skills.data, ...skills.tools].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-foreground bg-foreground/[0.03] border border-border px-2.5 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-24 md:py-32">
          <h2 className="text-xs text-muted uppercase tracking-widest mb-12">
            Experience
          </h2>
          <div>
            {experience.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_auto] md:grid-cols-[140px_1fr_auto] gap-2 md:gap-8 py-5 border-b border-border"
              >
                <span className="text-xs text-muted/50 order-2 md:order-1">
                  {exp.period}
                </span>
                <div className="order-1 md:order-2">
                  <h3 className="text-sm font-medium">{exp.company}</h3>
                  <p className="text-xs text-muted">{exp.role}</p>
                </div>
                <p className="text-xs text-muted/50 hidden md:block order-3 text-right max-w-[240px]">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <h2 className="text-lg font-medium mb-2">Let's work together</h2>
              <p className="text-sm text-muted mb-6">
                Open to full-time roles and select freelance projects.
              </p>
              <a
                href="mailto:hello@echoroberts.com"
                className="text-sm text-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
              >
                hello@echoroberts.com
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-foreground transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-foreground transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                className="text-xs text-muted hover:text-foreground transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-xs text-muted/50">
            &copy; {new Date().getFullYear()} Echo Roberts
          </div>
        </div>
      </footer>
    </div>
  );
}
