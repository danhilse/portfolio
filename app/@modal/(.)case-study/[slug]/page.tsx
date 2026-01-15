"use client";

import { useRouter } from "next/navigation";
import { useEffect, useCallback, use } from "react";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies/index";

import type { MediaItem } from "@/lib/case-studies/types";

function CaptionedMedia({
  media,
  alt,
  priority = false,
}: {
  media: MediaItem;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="mt-6">
      <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
        {media.type === "video" ? (
          <video
            src={media.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={media.src}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
          />
        )}
      </div>
      <figcaption className="mt-2 text-xs text-muted/60 italic">
        {media.caption}
      </figcaption>
    </figure>
  );
}

export default function CaseStudyModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const { slug } = use(params);
  const study = caseStudies[slug];

  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [handleClose]);

  if (!study) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-lg shadow-2xl mt-[5vh] mx-4 animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="sticky top-4 float-right mr-4 mt-4 z-10 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-colors"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="px-8 py-8 md:px-16 md:py-12">
          {/* Hero */}
          <section className="pb-8">
            <h1 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">
              {study.title}
            </h1>
            <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
              {study.tagline}
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs">
              <div>
                <span className="text-muted/50">Role</span>
                <p className="mt-0.5">{study.role}</p>
              </div>
              <div>
                <span className="text-muted/50">Timeline</span>
                <p className="mt-0.5">{study.timeline}</p>
              </div>
              <div>
                <span className="text-muted/50">Stack</span>
                <p className="mt-0.5">{study.stack.join(" · ")}</p>
              </div>
            </div>
          </section>

          {/* Hero Media */}
          <section className="mb-12">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
              {study.heroMedia.type === "video" ? (
                <video
                  src={study.heroMedia.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={study.heroMedia.src}
                  alt={study.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </section>

          {/* Problem */}
          <section className="mb-12">
            <h2 className="text-xs text-muted/50 uppercase tracking-widest mb-4">
              Problem
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              {study.problem.summary || study.problem.context}
            </p>
            {study.problem.breakdown && (
              <ul className="space-y-3">
                {study.problem.breakdown.map((point, i) => (
                  <li key={i} className="text-sm text-muted leading-relaxed flex gap-3">
                    <span className="text-accent/60 shrink-0">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Constraints (new format only) */}
          {study.constraints && study.constraints.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xs text-muted/50 uppercase tracking-widest mb-4">
                Constraints
              </h2>
              <ul className="space-y-3">
                {study.constraints.map((constraint, i) => (
                  <li key={i} className="text-sm text-muted leading-relaxed flex gap-3">
                    <span className="text-accent/60 shrink-0">—</span>
                    <span>{constraint}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Solution (new format only) */}
          {study.solution && (
            <section className="mb-12">
              <h2 className="text-xs text-muted/50 uppercase tracking-widest mb-4">
                What I Built
              </h2>
              <p className="text-sm leading-relaxed">{study.solution}</p>
            </section>
          )}

          {/* Key Decisions */}
          <section className="mb-12">
            <h2 className="text-xs text-muted/50 uppercase tracking-widest mb-8">
              Key Decisions
            </h2>
            <div className="space-y-10">
              {study.decisions.map((decision, i) => (
                <div key={i}>
                  <h3 className="text-sm font-medium mb-1">{decision.title}</h3>
                  {decision.choice && (
                    <p className="text-xs text-accent/80 mb-3">{decision.choice}</p>
                  )}
                  <p className="text-sm text-muted leading-relaxed">
                    {decision.reasoning}
                  </p>
                  {decision.media && (
                    <CaptionedMedia media={decision.media} alt={decision.title} />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Deep Dive */}
          <section className="mb-12">
            <h2 className="text-xs text-muted/50 uppercase tracking-widest mb-4">
              {study.deepDive.title}
            </h2>
            {Array.isArray(study.deepDive.content) ? (
              <div className="space-y-4">
                {study.deepDive.content.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-sm leading-relaxed text-muted">
                {study.deepDive.content}
              </p>
            )}
            {study.deepDive.media && (
              <CaptionedMedia
                media={study.deepDive.media}
                alt={study.deepDive.title}
              />
            )}
          </section>

          {/* Outcomes */}
          <section className="mb-12">
            <h2 className="text-xs text-muted/50 uppercase tracking-widest mb-6">
              Outcomes
            </h2>
            <ul className="space-y-3">
              {study.outcomes.map((outcome, i) => (
                <li key={i} className="text-sm leading-relaxed flex gap-3">
                  <span className="text-accent/60 shrink-0">—</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Links */}
          {study.links && study.links.length > 0 && (
            <section className="pb-4">
              <div className="flex gap-4">
                {study.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border border-border px-4 py-2.5 rounded-full hover:border-foreground transition-colors duration-300 flex items-center gap-2"
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
        </div>
      </div>
    </div>
  );
}
