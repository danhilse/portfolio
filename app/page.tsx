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
    id: "serene-analytics",
    title: "Serene Analytics",
    year: "2024",
    blurb:
      "A calm analytics suite with real‑time streams and frictionless navigation.",
    image: "/projects/project-1.png",
    alt: "Analytics dashboard with clean cards and charts",
    links: [
      { label: "Case study", href: "#" },
      { label: "Live demo", href: "#" },
    ],
  },
  {
    id: "minimal-publishing",
    title: "Minimal Publishing",
    year: "2023",
    blurb:
      "Zero‑noise authoring with MDX, role‑based access, and server actions.",
    image: "/projects/project-b.jpg",
    alt: "Minimal publishing UI",
    links: [{ label: "Repo", href: "#" }],
  },
  {
    id: "ops-toolkit",
    title: "Operational Toolkit",
    year: "2023",
    blurb: "Operational controls with instant search and granular permissions.",
    image: "/projects/project-c.jpg",
    alt: "Operational tooling interface",
    links: [{ label: "Case study", href: "#" }],
  },
];

export default function Page() {
  const [active, setActive] = useState(projects[0].id);
  const [hovered, setHovered] = useState<string | null>(null);

  const activeProject = useMemo(() => {
    const id = hovered ?? active;
    return projects.find((p) => p.id === id) ?? projects[0];
  }, [active, hovered]);

  return (
    <div className="py-6 sm:py-8">
      <section className="grid gap-8 sm:gap-10 sm:grid-cols-12">
        {/* Left: Full-height image + details */}
        <div className="sm:col-span-7">
          <div className="sticky top-6">
            <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <div
                className="relative w-full"
                style={{ height: "calc(100vh - 11rem)" }}
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
              <h2 className="text-xl font-medium tracking-tight">
                {activeProject.title}
                {activeProject.year ? ` · ${activeProject.year}` : ""}
              </h2>
              <p className="mt-2 text-neutral-600">{activeProject.blurb}</p>
              {activeProject.links && activeProject.links.length > 0 && (
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
              )}
            </figcaption>
          </div>
        </div>

        {/* Right: Inline header + simple projects list */}
        <div className="sm:col-span-5">
          {/* Header inside column */}
          <header className="mb-8">
            <div className="flex items-baseline justify-between">
              <a href="/" className="font-medium tracking-tight">
                Your Name
              </a>
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
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              Calm, modern web apps.
            </h1>
            <p className="mt-4 text-neutral-600">
              I’m Your Name, a full‑stack developer focused on clear interfaces
              and reliable systems. Below are selected projects—hover or click
              to preview on the left.
            </p>
          </div>

          {/* Plain text project list */}
          <ul className="text-neutral-800">
            {projects.map((p) => {
              const isActive = (hovered ?? active) === p.id;
              return (
                <li
                  key={p.id}
                  onMouseEnter={() => setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setActive(p.id)}
                  className={`cursor-pointer py-3 border-b border-neutral-200/70 last:border-b-0 transition-colors ${
                    isActive ? "text-neutral-900" : "hover:text-neutral-900"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-medium">{p.title}</span>
                    <span className="text-xs text-neutral-500">
                      {p.year ?? ""}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
                    {p.blurb}
                  </p>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-xs text-neutral-500">
            Hover to preview · Click to select
          </p>
        </div>
      </section>

      {/* Services / About / CTA */}
      <section id="services" className="mt-24 sm:mt-28">
        <div className="max-w-3xl">
          <h3 className="text-xl font-medium tracking-tight">Services</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">Product Engineering</h4>
              <p className="mt-2 text-sm text-neutral-600">
                End‑to‑end development of modern web apps with clear UX and
                durable systems.
              </p>
            </li>
            <li className="rounded-xl border border-neutral-200 p-5">
              <h4 className="font-medium">Architecture & DX</h4>
              <p className="mt-2 text-sm text-neutral-600">
                Type‑safe APIs, performance, testing, CI/CD, and maintainable
                foundations.
              </p>
            </li>
          </ul>
        </div>

        <div id="about" className="mt-16 max-w-3xl">
          <h3 className="text-xl font-medium tracking-tight">About</h3>
          <p className="mt-4 text-neutral-600">
            I design and build product‑ready web apps with intention—minimal
            interfaces paired with reliable infrastructure. Recent focus: React
            Server Components, edge rendering, and type‑safe full‑stack
            workflows.
          </p>
        </div>

        <div id="contact" className="mt-16 max-w-2xl">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h3 className="text-lg font-medium tracking-tight">
              Let’s build something calm.
            </h3>
            <p className="mt-2 text-neutral-600">
              Available for select collaborations, contracts, and advising.
            </p>
            <div className="mt-5">
              <a
                href="mailto:you@domain.com?subject=Hello"
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
