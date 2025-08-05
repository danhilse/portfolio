"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";

import GhostlikeText from "@/components/GhostlikeText";

type Project = {
  id: string;
  title: string;
  blurb: string;
  image: string;
  alt: string;
  year?: string;
  tech?: string[];
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    id: "archipelago",
    title: "Archipelago - Financial Analytics Platform",
    year: "2025",
    blurb:
      "Financial analytics platform with real-time and historical market data and 40+ normalized metrics stored in Postgres and delivered via FastAPI. Bespoke, interactive d3.js charts that reveal market relationships and investors depend on.",
    tech: ["Python", "Next.js", "PostgreSQL"],
    image: "/projects/project-1.png",
    alt: "Financial analytics platform",
    links: [
      { label: "Live Demo", href: "https://archipelago.example.com" },
      { label: "GitHub", href: "https://github.com/yourusername/archipelago" },
    ],
  },
  {
    id: "boulevard-quartz",
    title: "Boulevard Quartz - Commercial Real Estate Platform",
    year: "2025",
    blurb:
      "Commercial real estate aggregation platform that scrapes local Missouri broker websites. Property search with interactive Mapbox maps, turning scattered listings into a unified database for easier property discovery.",
    tech: ["Python", "Next.js", "PostgreSQL"],
    image: "/projects/project-2.png",
    alt: "Commercial real estate platform",
  },
  {
    id: "nonprofit-roi",
    title: "Nonprofit Fundraising ROI Calculator",
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
    tech: ["Python", "AI/Claude", "Data Analysis"],
    image: "/projects/project-5.png",
    alt: "Blog content analysis dashboard",
    links: [{ label: "Case Study", href: "https://acton.com/blog-analysis" }],
  },
  {
    id: "patches",
    title: "pATCHES - Music Education Platform",
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
      { label: "Live Demo", href: "https://listentoo.app" },
      { label: "GitHub", href: "https://github.com/yourusername/listen-too" },
    ],
  },
];

export default function Page() {
  const [active, setActive] = useState(projects[0].id);
  const [imageStates, setImageStates] = useState<Record<string, boolean>>({});
  const [displayedProject, setDisplayedProject] = useState(projects[0]);

  const activeProject = useMemo(() => {
    return projects.find((p) => p.id === active) ?? projects[0];
  }, [active]);

  // Preload images
  useEffect(() => {
    projects.forEach((project) => {
      const img = new window.Image();
      img.src = project.image;
      img.onload = () => {
        setImageStates((prev) => ({ ...prev, [project.id]: true }));
      };
    });
  }, []);

  // Handle smooth transition between projects
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedProject(activeProject);
    }, 150); // Half of transition duration

    return () => clearTimeout(timer);
  }, [activeProject]);

  return (
    <div className="py-6 sm:py-8">
      <section className="grid gap-8 sm:gap-10 sm:grid-cols-12">
        {/* Left: Full-height image + details */}
        <div className="sm:col-span-7">
          <div className="sticky top-6">
            <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <div
                className="relative w-full"
                style={{ height: "calc(100vh - 4rem)" }}
              >
                {/* Background layer - previous image */}
                <Image
                  src={displayedProject.image}
                  alt={displayedProject.alt}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover"
                  priority
                />

                {/* Foreground layer - active image with fade */}
                {activeProject.id !== displayedProject.id && (
                  <div className="absolute inset-0">
                    <Image
                      key={activeProject.id}
                      src={activeProject.image}
                      alt={activeProject.alt}
                      fill
                      sizes="(min-width: 1024px) 56vw, 100vw"
                      className="object-cover animate-scaleIn"
                      priority
                    />
                  </div>
                )}
              </div>
            </figure>
          </div>
        </div>

        {/* Right: Inline header + simple projects list */}
        <div className="sm:col-span-5">
          {/* Header inside column */}
          <header className="mb-8">
            <div className="flex items-baseline justify-between">
              <span className="font-semibold tracking-tight">Daniel Hilse</span>
              <nav className="text-sm text-neutral-600">
                {/* <GhostlikeText
                  variant="no-opacity"
                  className="hover:text-neutral-900"
                >
                  <a href="#services">Services</a>
                </GhostlikeText>
                <span className="mx-3 text-neutral-300">/</span> */}
                <GhostlikeText
                  variant="no-opacity"
                  className="hover:text-neutral-900"
                >
                  <a href="#about">About</a>
                </GhostlikeText>
                <span className="mx-3 text-neutral-300">/</span>
                <GhostlikeText
                  variant="no-opacity"
                  className="hover:text-neutral-900"
                >
                  <a href="#contact">Contact</a>
                </GhostlikeText>
              </nav>
            </div>
          </header>

          {/* Intro/About brief */}
          <div className="mb-10">
            {/* <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              Calm, modern web apps.
            </h1> */}
            <p className="mt-4 text-neutral-600 leading-relaxed">
              I&apos;m an MBA-turned-full‑stack developer based in Boulder, CO
              building{" "}
              <GhostlikeText variant="auto" delay={400}>
                <strong>calm, modern interfaces</strong>
              </GhostlikeText>{" "}
              and{" "}
              <GhostlikeText variant="auto" delay={1000}>
                reliable systems
              </GhostlikeText>{" "}
              using{" "}
              <GhostlikeText variant="auto" delay={1600}>
                <strong>Python</strong>
              </GhostlikeText>
              ,{" "}
              <GhostlikeText variant="auto" delay={2000}>
                <strong>React</strong>
              </GhostlikeText>
              , and{" "}
              <GhostlikeText variant="auto" delay={2400}>
                <strong>Next.js</strong>
              </GhostlikeText>
            </p>
          </div>

          {/* Expanding project list */}
          <p className="mt-3 text-xs text-neutral-500">
            Hover a project to expand details
          </p>
          <ul className="text-neutral-800">
            {projects.map((p) => {
              const isActive = active === p.id;
              return (
                <li
                  key={p.id}
                  onMouseEnter={() => setActive(p.id)}
                  className={`cursor-pointer border-b border-neutral-200/70 last:border-b-0 transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "text-neutral-900"
                      : "text-neutral-800 opacity-60 hover:opacity-100 hover:text-neutral-900"
                  }`}
                  style={{
                    paddingTop: "12px",
                    paddingBottom: isActive ? "20px" : "12px",
                  }}
                >
                  {/* Title and Year - Always visible */}
                  <div
                    className={`flex items-baseline justify-between gap-4 transition-all duration-300 ${
                      isActive ? "font-semibold pl-2 mb-3" : "font-medium"
                    }`}
                  >
                    <span>{p.title}</span>
                    <span className="text-xs text-neutral-500 shrink-0">
                      {p.year ?? ""}
                    </span>
                  </div>

                  {/* Expanded content */}
                  <div
                    className={`transition-all duration-300 ease-out ${
                      isActive
                        ? "max-h-96 opacity-100 pl-2"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {/* Description */}
                    <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                      {p.blurb}
                    </p>

                    {/* Links */}
                    {p.links && p.links.length > 0 && (
                      <div
                        className="flex gap-3"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {p.links.map((link) => (
                          <GhostlikeText
                            key={link.href}
                            variant="no-bold"
                            className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
                          >
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.label} ↗
                            </a>
                          </GhostlikeText>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Services / About / CTA */}
      <section id="services" className="mt-24 sm:mt-28">
        {/* <div className="max-w-5xl">
          <h3 className="text-xl font-medium tracking-tight">
            Services and Capabilities
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">AI & Automation</h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Custom AI tools with Claude and OpenAI APIs for content analysis
                and workflow automation, incorporated into Python scripts. Turn
                overwhelming datasets into actionable insights.
              </p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">Full-Stack Development</h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Scalable web applications with Next.js, React, and Python. Clean
                code, fast deployment, modern interfaces that handle real user
                needs and complex workflows.
              </p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">Data Analytics & Visualization</h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Real-time dashboards and financial models that make complex data
                understandable. Interactive charts and advanced metrics that
                help analysts spot patterns and save research time.
              </p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">Web Scraping & Data Collection</h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Robust Python pipelines that turn scattered data into unified
                databases. Handle complex websites and APIs at scale while
                staying reliable and undetected.
              </p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">UI/UX & Interactive Tools</h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Intuitive interfaces that replace spreadsheets with something
                more powerful. Responsive designs and reusable component
                libraries that actually make workflows simpler.
              </p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">Technical Strategy & Scaling</h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Architecture and infrastructure planning for growing platforms.
                Drawing from experience scaling pATCHES to 2M+ monthly visitors
                with cost-effective solutions.
              </p>
            </li>
          </ul>
        </div> */}

        <div id="about" className="mt-16 max-w-3xl">
          <h3 className="text-xl font-medium tracking-tight">
            <GhostlikeText variant="auto" delay={300}>
              About
            </GhostlikeText>
          </h3>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            I learned to code scaling a music education platform that outgrew
            every tool I could buy. That led to building audio software,
            co-founding an adtech startup in NYC, and eventually picked up all
            the pieces to be an effective full-stack design engineer. Now I
            build tools that cut research time and automate tedious work for
            startups and enterprise clients. My business background means I
            focus on what actually moves the needle, not just what&apos;s
            technically interesting.
          </p>
          <div className="mt-6">
            <h4 className="text-sm font-medium text-neutral-900 mb-3">
              Experience
            </h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex justify-between">
                <span>
                  <strong>Archipelago</strong>
                  {" · Full Stack Developer"}
                </span>
                <span className="text-neutral-500">2024 → Now</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <strong>Act-On</strong>
                  {" · Freelance Developer"}
                </span>
                <span className="text-neutral-500">2024 → 2025</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <strong>pATCHES</strong>
                  {" · Founder / Developer"}
                </span>
                <span className="text-neutral-500">2016 → Now</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <strong>Veteran&apos;s United</strong>
                  {" · SEO / Python"}
                </span>
                <span className="text-neutral-500">2022</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <strong>Marpipe</strong>
                  {" · Head of Product"}
                </span>
                <span className="text-neutral-500">2019 → 2020</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <strong>Ableton, AG</strong>
                  {" · Learning Resources"}
                </span>
                <span className="text-neutral-500">2018</span>
              </li>
            </ul>
          </div>
        </div>

        <div id="contact" className="mt-16 max-w-2xl">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h3 className="text-lg font-medium tracking-tight">
              Let&apos;s build something calm.
            </h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              Available for select collaborations, contracts, and advising.
            </p>
            <div className="mt-5">
              <a
                href="mailto:dan@danhilse.com?subject=Hello"
                className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
