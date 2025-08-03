"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  blurb: string;
  image: string;
  alt: string;
  year?: string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    id: "archipelago",
    title: "Archipelago - Stock Market Analysis",
    year: "2025",
    blurb:
      "Full-stack biotech market analysis dashboard built with Next.js and FastAPI, featuring real-time price tracking, interactive visualizations, and comprehensive financial metrics.",
    image: "/projects/project-1.png",
    alt: "Stock market analysis dashboard",
    links: [
      { label: "Live Demo", href: "https://archipelago.example.com" },
      { label: "GitHub", href: "https://github.com/yourusername/archipelago" },
    ],
  },
  {
    id: "customer-reference",
    title: "Customer Reference Agent",
    year: "2025",
    blurb:
      "AI-powered Customer Reference Agent using Anthropic's Claude for Act-On's sales team, instantly surfacing relevant customer quotes and testimonials, streamlining personalized sales pitches.",
    image: "/projects/project-2.png",
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
      "Python-based content audit system using Anthropic's Claude API for Act-On's marketing team, analyzing 2000+ blog posts for brand alignment and SEO, saving content team months of planned work.",
    image: "/projects/project-3.png",
    alt: "Blog content analysis dashboard",
    links: [{ label: "Case Study", href: "https://acton.com/blog-analysis" }],
  },
  {
    id: "listen-too",
    title: "Listen Too",
    year: "2023",
    blurb:
      "Next.js web application using TypeScript and Tailwind that generates shareable Spotify playlists from users' top tracks, featuring OAuth integration and a responsive interface.",
    image: "/projects/project-4.png",
    alt: "Spotify playlist generator",
    links: [
      { label: "Live Demo", href: "https://listentoo.app" },
      { label: "GitHub", href: "https://github.com/yourusername/listen-too" },
    ],
  },
  {
    id: "brand-coach",
    title: "Brand Coach",
    year: "2024",
    blurb:
      "AI-powered content evaluation tool that helps marketing teams align their writing with brand guidelines. Built with Next.js, TypeScript, and the Claude API for real-time analysis.",
    image: "/projects/project-5.png",
    alt: "Brand content evaluation tool",
    links: [
      { label: "GitHub", href: "https://github.com/yourusername/brand-coach" },
    ],
  },
  {
    id: "patches",
    title: "pATCHES",
    year: "ongoing",
    blurb:
      "Educational music platform and JavaScript plugin ecosystem serving 2M+ users, featuring optimized AWS infrastructure and generating over $200k software sales.",
    image: "/projects/project-6.png",
    alt: "pATCHES music education platform",
    links: [{ label: "Website", href: "https://patches.com" }],
  },
  {
    id: "url-reader",
    title: "URL Reader",
    year: "2024",
    blurb:
      "Get an audio version of a web page in a podcast feed. Utilizing OpenAI's Text-to-Speech API, featuring automated article scraping, AWS hosting, and custom RSS feed generation.",
    image: "/projects/project-7.png",
    alt: "URL to audio conversion tool",
    links: [
      { label: "GitHub", href: "https://github.com/yourusername/url-reader" },
    ],
  },
];

export default function Page() {
  const [active, setActive] = useState(projects[0].id);

  const activeProject = useMemo(() => {
    return projects.find((p) => p.id === active) ?? projects[0];
  }, [active]);

  return (
    <div className="py-6 sm:py-8">
      <section className="grid gap-8 sm:gap-10 sm:grid-cols-12">
        {/* Left: Full-height image + details */}
        <div className="sm:col-span-7">
          <div className="sticky top-6">
            <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <div
                className="relative w-full"
                style={{ height: "calc(100vh - 7rem)" }}
              >
                <Image
                  key={activeProject.image}
                  src={activeProject.image}
                  alt={activeProject.alt}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover transition-opacity duration-300"
                  priority
                />
              </div>
            </figure>
            <figcaption className="mt-4">
              {/* <h2 className="text-xl font-medium tracking-tight">
                {activeProject.title}
                {activeProject.year ? ` · ${activeProject.year}` : ""}
              </h2> */}
              <p className="mt-2 text-sm text-neutral-600 leading-snug">
                {activeProject.blurb}
              </p>
              {/* {activeProject.links && activeProject.links.length > 0 && (
                <div className="mt-4 flex gap-4">
                  {activeProject.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-sm text-neutral-900 hover:opacity-80"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              )} */}
            </figcaption>
          </div>
        </div>

        {/* Right: Inline header + simple projects list */}
        <div className="sm:col-span-5">
          {/* Header inside column */}
          <header className="mb-8">
            <div className="flex items-baseline justify-between">
              <span className="font-semibold tracking-tight">Daniel Hilse</span>
              <nav className="text-sm text-neutral-600">
                <a href="#services" className="hover:text-neutral-900">
                  Services
                </a>
                <span className="mx-3 text-neutral-300">/</span>
                <a href="#about" className="hover:text-neutral-900">
                  About
                </a>
                <span className="mx-3 text-neutral-300">/</span>
                <a href="#contact" className="hover:text-neutral-900">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          {/* Intro/About brief */}
          <div className="mb-10">
            {/* <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              Calm, modern web apps.
            </h1> */}
            <p className="mt-4 text-neutral-600 leading-relaxed">
              I&apos;m a full‑stack design engineer focused on{" "}
              <strong>calm, modern interfaces</strong> and reliable systems.
              I&apos;m a 2x founder and full-stack developer with 9 years of
              experience delivering impactful solutions for startups and
              enterprise clients using Python and React.
            </p>
          </div>

          {/* Plain text project list */}
          <p className="mt-3 text-xs text-neutral-500">
            Hover a project to view
          </p>
          <ul className="text-neutral-800">
            {projects.map((p) => {
              const isActive = active === p.id;
              return (
                <li
                  key={p.id}
                  onMouseEnter={() => setActive(p.id)}
                  className={`cursor-pointer py-3 border-b border-neutral-200/70 last:border-b-0 transition-colors ${
                    isActive
                      ? "text-neutral-900 font-semibold"
                      : "text-neutral-800 opacity-60 hover:opacity-100 hover:text-neutral-900"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-medium">{p.title}</span>
                    <span className="text-xs text-neutral-500">
                      {p.year ?? ""}
                    </span>
                  </div>
                  {p.links && p.links.length > 0 && (
                    <div
                      className="mt-1 flex gap-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {p.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Services / About / CTA */}
      <section id="services" className="mt-24 sm:mt-28">
        <div className="max-w-5xl">
          <h3 className="text-xl font-medium tracking-tight">
            Services and Capabilities
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">Creative Development</h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Combining thoughtful design with robust implementation in
                Next.js, React, and TypeScript to create engaging user
                experiences that solve real problems.
              </p>
              <p className="mt-3 text-xs text-neutral-500">$5,000+ · 2-4w</p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">AI Integration & Automation</h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Custom AI solutions using OpenAI and Anthropic APIs for
                intelligent automation and analysis. Specialized in prompt
                engineering and Python-based data processing.
              </p>
              <p className="mt-3 text-xs text-neutral-500">$3,000+ · 1-3w</p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">Web Development</h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Transforming underperforming websites into engaging digital
                experiences through strategic design, compelling copy, and
                smooth animations that drive conversions.
              </p>
              <p className="mt-3 text-xs text-neutral-500">$5,000+ · 3-5w</p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">Technical SEO & Content</h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Data-driven SEO strategy using SEMrush to identify
                opportunities, combined with Python automation for content
                auditing and performance optimization.
              </p>
              <p className="mt-3 text-xs text-neutral-500">$2,000+ · 1-2w</p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">Design Systems & UI</h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Building comprehensive design systems and component libraries in
                Figma, translated into production-ready frontend code for
                scalable products.
              </p>
              <p className="mt-3 text-xs text-neutral-500">$2,500+ · 1-3w</p>
            </li>
          </ul>
        </div>

        <div id="about" className="mt-16 max-w-3xl">
          <h3 className="text-xl font-medium tracking-tight">About</h3>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            I&apos;m a 2x founder and full-stack developer with 9 years of
            experience delivering impactful solutions for startups and
            enterprise clients. I specialize in creative development, AI
            integration, and intuitive user experiences backed by scalable
            architecture. Based in Denver, CO.
          </p>
          <div className="mt-6">
            <h4 className="text-sm font-medium text-neutral-900 mb-3">
              Experience
            </h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex justify-between">
                <span>
                  <strong>Archipelago</strong> · Full Stack Developer
                </span>
                <span className="text-neutral-500">2024 → Now</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <strong>Act-On</strong> · Freelance Developer
                </span>
                <span className="text-neutral-500">2024 → 2025</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <strong>pATCHES</strong> · Founder / Developer
                </span>
                <span className="text-neutral-500">2016 → Now</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <strong>Veteran&apos;s United</strong> · SEO / Python
                </span>
                <span className="text-neutral-500">2022</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <strong>Marpipe</strong> · Head of Product
                </span>
                <span className="text-neutral-500">2019 → 2020</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <strong>Ableton, AG</strong> · Learning Resources
                </span>
                <span className="text-neutral-500">2018</span>
              </li>
            </ul>
          </div>
        </div>

        <div id="contact" className="mt-16 max-w-2xl">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h3 className="text-lg font-medium tracking-tight">
              Let’s build something calm.
            </h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              Available for select collaborations, contracts, and advising.
            </p>
            <div className="mt-5">
              <a
                href="mailto:dan@danhilse.com?subject=Hello"
                className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-800 transition"
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
