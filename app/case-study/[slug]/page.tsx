import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs text-muted hover:text-foreground transition-colors duration-300 flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back
          </Link>
          <span className="text-xs tracking-wide">Echo Roberts</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <p className="text-xs text-muted uppercase tracking-widest mb-4 animate-fade-up">
            Case Study
          </p>
          <h1
            className="text-3xl md:text-4xl font-medium tracking-tight mb-3 animate-fade-up"
            style={{ animationDelay: "50ms" }}
          >
            {study.title}
          </h1>
          <p
            className="text-muted text-lg mb-8 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            {study.subtitle}
          </p>

          {/* Meta */}
          <div
            className="flex flex-wrap gap-x-8 gap-y-4 text-xs animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            <div>
              <span className="text-muted/50 uppercase tracking-wider">Role</span>
              <p className="mt-1">{study.role}</p>
            </div>
            <div>
              <span className="text-muted/50 uppercase tracking-wider">Timeline</span>
              <p className="mt-1">{study.timeline}</p>
            </div>
            <div>
              <span className="text-muted/50 uppercase tracking-wider">Stack</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-foreground/[0.03] border border-border/50 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        {study.images[0] && (
          <section
            className="mb-16 md:mb-20 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-foreground/[0.02]">
              <Image
                src={study.images[0]}
                alt={study.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </section>
        )}

        {/* Overview */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-xs text-muted uppercase tracking-widest mb-4">
            Overview
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl">{study.overview}</p>
        </section>

        {/* Problem */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-xs text-muted uppercase tracking-widest mb-4">
            The Problem
          </h2>
          <p className="text-sm text-muted leading-relaxed max-w-2xl">
            {study.problem}
          </p>
        </section>

        {/* Features */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-xs text-muted uppercase tracking-widest mb-8">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {study.features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-sm font-medium">{feature.title}</h3>
                <p className="text-xs text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Images */}
        {study.images.length > 1 && (
          <section className="mb-16 md:mb-20">
            <div className="grid md:grid-cols-2 gap-4">
              {study.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-lg overflow-hidden border border-border bg-foreground/[0.02]"
                >
                  <Image
                    src={image}
                    alt={`${study.title} screenshot ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technical */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-xs text-muted uppercase tracking-widest mb-8">
            Technical Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {study.technical.map((section, index) => (
              <div key={index}>
                <h3 className="text-xs text-muted/50 uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="text-xs leading-relaxed flex gap-2">
                      <span className="text-accent mt-0.5">-</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-xs text-muted uppercase tracking-widest mb-8">
            Results
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {study.results.map((result, index) => (
              <div
                key={index}
                className="bg-foreground/[0.02] border border-border rounded-lg p-4"
              >
                <p className="text-xs leading-relaxed">{result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        {study.links && study.links.length > 0 && (
          <section className="pb-24 md:pb-32">
            <div className="flex gap-4">
              {study.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs border border-border px-4 py-2.5 rounded-full hover:border-foreground hover:bg-foreground/[0.02] transition-all duration-300 flex items-center gap-2"
                >
                  {link.label}
                  <svg
                    className="w-3 h-3"
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
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <Link
              href="/#work"
              className="text-xs text-muted hover:text-foreground transition-colors duration-300 flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              All Projects
            </Link>
            <span className="text-xs text-muted/50">
              &copy; {new Date().getFullYear()} Echo Roberts
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
