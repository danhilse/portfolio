"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
import { experience, skills, about, status } from "@/lib/data";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored) {
      setIsDark(stored === "dark");
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(stored);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    const newTheme = newIsDark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  if (!mounted) return <div className="w-6 h-6" />;

  return (
    <button
      onClick={toggleTheme}
      className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors duration-300"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center transition-all duration-300 hover:bg-accent z-40 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const items = container.querySelectorAll('[data-experience-item]');
      const lastItem = items[items.length - 1];

      if (!lastItem) return;

      const viewportTrigger = window.innerHeight * 0.85;
      const containerRect = container.getBoundingClientRect();
      const lastItemRect = lastItem.getBoundingClientRect();

      // Calculate line height to reach from first to last dot
      const firstDotTop = 8; // top-2 = 8px
      const lastDotPosition = lastItemRect.top - containerRect.top + 10; // +10 for dot center
      const totalLineDistance = lastDotPosition - firstDotTop;

      // Progress based on how much we've scrolled
      const scrollProgress = Math.max(0, Math.min(1, (viewportTrigger - containerRect.top) / (lastDotPosition + 100)));
      setLineHeight(scrollProgress * totalLineDistance);

      // Check which items have passed the trigger point
      const newActiveIndices: number[] = [];
      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemTop = itemRect.top;
        if (itemTop < viewportTrigger) {
          newActiveIndices.push(index);
        }
      });
      setActiveIndices(newActiveIndices);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Background line (unfilled) */}
      <div className="absolute left-[182px] top-2 bottom-2 w-px bg-border/30 hidden md:block" />

      {/* Filled line (scroll-driven) */}
      <div
        ref={lineRef}
        className="absolute left-[182px] top-2 w-px bg-accent hidden md:block transition-all duration-150 ease-out"
        style={{ height: `${lineHeight}px` }}
      />

      <div className="space-y-16 md:space-y-20">
        {experience.map((exp, index) => {
          const isActive = activeIndices.includes(index);
          return (
            <div
              key={index}
              data-experience-item
              className="grid md:grid-cols-[150px_64px_1fr] gap-0 relative items-start"
            >
              <p className={`text-xs md:text-right leading-5 transition-colors duration-300 ${isActive ? 'text-muted' : 'text-muted/50'}`}>
                {exp.period}
              </p>

              {/* Dot column */}
              <div className="hidden md:flex justify-center">
                <div
                  className={`w-[9px] h-[9px] mt-[5px] rounded-full ring-[3px] ring-background relative z-10 transition-all duration-300 ${
                    isActive ? 'bg-accent scale-110' : 'bg-border'
                  }`}
                />
              </div>

              <div>
                <h3 className={`text-sm font-medium mb-1 leading-5 transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-foreground/70'}`}>
                  {exp.company}
                </h3>
                <p className="text-xs text-muted mb-3">{exp.role}</p>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-muted' : 'text-muted/50'}`}>
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

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
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
                <div>
                  <p className="text-muted text-sm leading-relaxed max-w-2xl mb-6">
                    {project.blurb}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-muted/80 bg-foreground/[0.03] border border-border px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="flex gap-6 shrink-0">
                    {project.links.map((link) => {
                      const isInternal = link.href.startsWith("/");
                      const linkClass = "text-xs text-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group/link";
                      const content = (
                        <>
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
                        </>
                      );
                      return isInternal ? (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={(e) => e.stopPropagation()}
                          className={linkClass}
                        >
                          {content}
                        </Link>
                      ) : (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={linkClass}
                        >
                          {content}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Year + Toggle */}
        <div className="flex items-center gap-4">
          <span className="text-muted/50 text-xs hidden sm:block">
            {project.year}
          </span>
          <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/5">
            <svg
              className="w-2.5 h-2.5 text-muted transition-all duration-300 group-hover:text-accent"
              style={{
                transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
              }}
              fill="none"
              viewBox="0 0 12 12"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M6 1v10M1 6h10" />
            </svg>
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
            Daniel Hilse
          </span>
          <nav
            className="flex items-center gap-6 animate-fade-in"
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
              href="mailto:danhilse@gmail.com"
              className="text-xs text-muted hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-32 pb-24 md:pt-44 md:pb-32">
          <div className="animate-fade-up flex items-center gap-4 mb-6" style={{ animationDelay: "0ms" }}>
            <Image
              src="/headshot.jpg"
              alt="Daniel Hilse"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
              <span className="uppercase tracking-widest">Full-stack Developer</span>
              <span className="text-border hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Available starting {new Date(new Date().getFullYear(), new Date().getMonth() + 1).toLocaleString('en-US', { month: 'long' })}
              </span>
              <span className="text-border hidden sm:inline">|</span>
              <span>{status.location} · {status.timezone}</span>
            </div>
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] mb-8 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Building software that's
            <br />
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              practical, calm,
            </span>{" "}
            
            <br />
            and solves real problems.
          </h1>
          <p
            className="text-sm text-muted max-w-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            I'm a senior generalist with strong product judgment working across frontend, backend, and data to ship reliable systems with clean interfaces.
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
              href="mailto:danhilse@gmail.com"
              className="text-xs border border-border px-4 py-2.5 rounded-full hover:border-foreground transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="pb-24 md:pb-32 scroll-mt-24">
          <div
            className="flex items-center justify-between mb-8 border-b border-border pb-4 animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            <h2 className="text-xs text-muted uppercase tracking-widest">
              Selected Work
            </h2>
            <span className="text-xs text-muted/50">
              Click to expand
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
            <div>
              <p className="text-sm text-muted leading-relaxed whitespace-pre-line mb-8">
                {about}
              </p>
              <div className="flex gap-6">
                <a
                  href="https://github.com/danhilse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  GitHub
                  <svg
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
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
                <a
                  href="https://www.linkedin.com/in/daniel-hilse-116107106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  LinkedIn
                  <svg
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
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
            </div>
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
        <section className="pt-24 md:pt-32 pb-48 md:pb-64">
          <h2 className="text-xs text-muted uppercase tracking-widest mb-20">
            Experience
          </h2>
          <ExperienceTimeline />
        </section>
      </main>

      <BackToTop />

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <h2 className="text-lg font-medium mb-2">Let's work together</h2>
              <p className="text-sm text-muted mb-6">
                Open to full-time roles and select freelance projects.
              </p>
              <div className="flex flex-wrap gap-8">
                <a
                  href="https://calendly.com/danhilse/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                >
                  Book a call
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:danhilse@gmail.com"
                  className="text-sm text-muted hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                >
                  danhilse@gmail.com
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
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/danhilse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-foreground transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-hilse-116107106"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-foreground transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://d1lbnboj0lfh6w.cloudfront.net/portfolio/Resume+-+Hilse.pdf"
                className="text-xs text-muted hover:text-foreground transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
