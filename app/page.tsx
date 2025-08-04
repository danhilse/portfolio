"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import GhostlikeText from "@/components/GhostlikeText";

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
                <GhostlikeText
                  variant="no-opacity"
                  className="hover:text-neutral-900"
                >
                  <a href="#services">Services</a>
                </GhostlikeText>
                <span className="mx-3 text-neutral-300">/</span>
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
              I&apos;m a full‑stack design engineer based in Boulder, CO focused
              on building{" "}
              <GhostlikeText variant="auto" delay={400}>
                <strong>calm, modern interfaces</strong>
              </GhostlikeText>{" "}
              and{" "}
              <GhostlikeText variant="auto" delay={1000}>
                reliable systems.
              </GhostlikeText>{" "}
              I&apos;m a 2x founder and full-stack developer with 9 years of
              experience delivering impactful solutions for startups and
              enterprise clients using{" "}
              <GhostlikeText variant="auto" delay={2000}>
                Python
              </GhostlikeText>{" "}
              and{" "}
              <GhostlikeText variant="auto" delay={2400}>
                React
              </GhostlikeText>
              .
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
            <GhostlikeText variant="auto" delay={300}>
              Services and Capabilities
            </GhostlikeText>
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">
                <GhostlikeText variant="no-bold">
                  Creative Development
                </GhostlikeText>
              </h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Combining thoughtful design with robust implementation in
                <GhostlikeText variant="no-bold"> Next.js</GhostlikeText>,
                <GhostlikeText variant="no-bold"> React</GhostlikeText>, and
                <GhostlikeText variant="no-bold"> TypeScript</GhostlikeText> to
                create engaging user experiences that solve real problems.
              </p>
              <p className="mt-3 text-xs text-neutral-500">$5,000+ · 2-4w</p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">
                <GhostlikeText variant="no-bold">
                  AI Integration & Automation
                </GhostlikeText>
              </h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Custom AI solutions using{" "}
                <GhostlikeText variant="no-bold">OpenAI</GhostlikeText> and{" "}
                <GhostlikeText variant="no-bold">Anthropic APIs</GhostlikeText>{" "}
                for intelligent automation and analysis. Specialized in prompt
                engineering and{" "}
                <GhostlikeText variant="no-bold">Python</GhostlikeText>-based
                data processing.
              </p>
              <p className="mt-3 text-xs text-neutral-500">$3,000+ · 1-3w</p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">
                <GhostlikeText variant="no-bold">Web Development</GhostlikeText>
              </h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Transforming underperforming websites into engaging digital
                experiences through strategic design, compelling copy, and
                smooth animations that drive conversions.
              </p>
              <p className="mt-3 text-xs text-neutral-500">$5,000+ · 3-5w</p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">
                <GhostlikeText variant="no-bold">
                  Technical SEO & Content
                </GhostlikeText>
              </h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Data-driven SEO strategy using{" "}
                <GhostlikeText variant="no-bold">SEMrush</GhostlikeText> to
                identify opportunities, combined with{" "}
                <GhostlikeText variant="no-bold">Python</GhostlikeText>{" "}
                automation for content auditing and performance optimization.
              </p>
              <p className="mt-3 text-xs text-neutral-500">$2,000+ · 1-2w</p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">
                <GhostlikeText variant="no-bold">
                  Design Systems & UI
                </GhostlikeText>
              </h4>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Building comprehensive design systems and component libraries in
                <GhostlikeText variant="no-bold"> Figma</GhostlikeText>,
                translated into production-ready frontend code for scalable
                products.
              </p>
              <p className="mt-3 text-xs text-neutral-500">$2,500+ · 1-3w</p>
            </li>
          </ul>
        </div>

        <div id="about" className="mt-16 max-w-3xl">
          <h3 className="text-xl font-medium tracking-tight">
            <GhostlikeText variant="auto" delay={300}>
              About
            </GhostlikeText>
          </h3>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            I&apos;m a 2x founder and full-stack design engineer with 9 years of
            experience delivering impactful solutions for startups and
            enterprise clients. I specialize in creative development, AI
            integration, and intuitive user experiences backed by scalable
            architecture. Based in Boulder, CO.
          </p>
          <div className="mt-6">
            <h4 className="text-sm font-medium text-neutral-900 mb-3">
              Experience
            </h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex justify-between">
                <span>
                  <GhostlikeText variant="no-bold">
                    <strong>Archipelago</strong>
                  </GhostlikeText>
                  {" · Full Stack Developer"}
                </span>
                <span className="text-neutral-500">2024 → Now</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <GhostlikeText variant="no-bold">
                    <strong>Act-On</strong>
                  </GhostlikeText>
                  {" · Freelance Developer"}
                </span>
                <span className="text-neutral-500">2024 → 2025</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <GhostlikeText variant="no-bold">
                    <strong>pATCHES</strong>
                  </GhostlikeText>
                  {" · Founder / Developer"}
                </span>
                <span className="text-neutral-500">2016 → Now</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <GhostlikeText variant="no-bold">
                    <strong>Veteran&apos;s United</strong>
                  </GhostlikeText>
                  {" · SEO / Python"}
                </span>
                <span className="text-neutral-500">2022</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <GhostlikeText variant="no-bold">
                    <strong>Marpipe</strong>
                  </GhostlikeText>
                  {" · Head of Product"}
                </span>
                <span className="text-neutral-500">2019 → 2020</span>
              </li>
              <li className="flex justify-between">
                <span>
                  <GhostlikeText variant="no-bold">
                    <strong>Ableton, AG</strong>
                  </GhostlikeText>
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
              <GhostlikeText variant="auto" delay={300}>
                Let&apos;s build something calm.
              </GhostlikeText>
            </h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              Available for select collaborations, contracts, and advising.
            </p>
            <div className="mt-5">
              <GhostlikeText variant="standard">
                <a
                  href="mailto:dan@danhilse.com?subject=Hello"
                  className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-800 transition"
                >
                  Email me
                </a>
              </GhostlikeText>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
