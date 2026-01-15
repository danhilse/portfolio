import type { CaseStudy } from "./types";

export const blogAudit: CaseStudy = {
  slug: "blog-audit",
  title: "Blog Content Audit",
  tagline:
    "AI-powered content audit that classified 500+ blog posts into a strategic use case framework in hours instead of weeks.",
  role: "Full-Stack Developer",
  timeline: "2024",
  stack: ["Python", "Claude API", "Next.js", "visx", "TypeScript"],
  problem: {
    context:
      "A marketing team had 500+ archived blog posts with no mapping to their current strategy—18 use cases organized into funnel stages. Manual classification at 20 posts/day meant 5+ weeks of work, and categorization varied between reviewers.",
    breakdown: [
      "No automated way to classify content against the 18-use-case taxonomy",
      "Couldn't see portfolio shape: which use cases were over-served, which had gaps",
      "Outdated brand language buried in body text, impossible to find without reading every post",
    ],
  },
  decisions: [
    {
      title: "Multi-label classification with confidence threshold",
      choice: "Return primary + secondary use cases above 0.5 confidence",
      reasoning:
        "Single-label classification forced false choices—a post about 'nurture campaigns for new customers' legitimately spans GET and KEEP. Multi-label classification preserved legitimate overlap without flooding the data with false positives.",
      media: {
        type: "video",
        src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/blog%20analysis/blog-analysis-2.mp4",
        caption: "Chord diagram showing content overlap between use cases",
      },
    },
    {
      title: "Three-level hierarchy over flat categories",
      choice: "Use cases → CMO priorities → funnel stages",
      reasoning:
        "Flat topic categories ('Email Marketing', 'Lead Scoring') didn't answer strategic questions. The hierarchy made visualizations immediately actionable—sunburst and treemap show at a glance that 62% of content targets GET while KEEP has 12%.",
    },
    {
      title: "Cached taxonomy context for batch processing",
      choice: "Anthropic's ephemeral cache for the 2,000-token taxonomy",
      reasoning:
        "Each request needed the full use case definitions as context. At 500 posts × 3 analysis types, that's 1.5M tokens of context repetition. Batch processing in 50-post chunks kept the cache warm, reducing API costs ~40%.",
    },
  ],
  deepDive: {
    title: "Confidence calibration",
    content: [
      "Analyzed confidence score distribution across a 50-post sample: scores clustered above 0.55 or below 0.35, with a natural gap between. Set threshold at 0.5.",
      "Confidence thresholds were paired with explicit prompt constraints to prevent topical adjacency from inflating secondary labels.",
    ],
  },
  outcomes: [
    "Classification time: 5+ weeks manual → 3 hours batch processing",
    "Identified strategic gap: 62% of content targeted GET, only 12% targeted KEEP",
    "Surfaced 47 posts with outdated brand language via automated analysis",
    "Chord diagram revealed 80% content overlap between 'Nurture prospects' and 'Personalize outreach'—consolidation opportunity",
    "40% reduction in API costs via prompt caching",
  ],
  heroMedia: {
    type: "video",
    src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/blog%20analysis/blog-analysis-1.mp4",
    caption: "Blog Content Audit dashboard",
  },
  links: [{ label: "Live Demo", href: "#" }],
};
