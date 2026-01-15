import type { CaseStudy } from "./types";

export const blogAudit: CaseStudy = {
  slug: "blog-audit",
  title: "Blog Content Audit",
  tagline:
    "An AI-powered content audit pipeline that classified 500+ archived blog posts against a strategic use case framework—replacing weeks of manual spreadsheet review.",
  role: "Full-Stack Developer",
  timeline: "2024",
  stack: ["Python", "Claude API", "Next.js", "visx", "TypeScript"],
  problem: {
    context:
      "Act-On's marketing team had 500+ blog posts from 2021 and earlier sitting in an archive. The content strategy had evolved—they now organized around 18 specific use cases mapped to GET/KEEP/GROW/OPTIMIZE funnel stages—but nobody knew which archived posts supported which strategies. The existing audit approach was manual: open post, read it, guess the category, update a spreadsheet.",
    breakdown: [
      "A content strategist reviewing 20 posts per day would take 5+ weeks to audit the backlog—and categorization was inconsistent between reviewers",
      "No way to see the shape of the content portfolio: which use cases were over-served, which had gaps, which posts drove engagement",
      "Red flags like outdated phrases ('growth marketing platform', 'Rethink Marketing podcast') were buried in body text—impossible to find without reading every post",
    ],
  },
  decisions: [
    {
      title: "Multi-label classification over single-label",
      choice: "AI classifier returns primary + secondary use cases with confidence scores",
      reasoning:
        "First attempt assigned each post exactly one use case. Problem: a post about 'nurture campaigns for new customers' legitimately spans both GET and KEEP stages. Single-label forced a false choice. Switched to multi-label with a 0.5 confidence threshold for secondary use cases. The tradeoff: more complex data model and visualization logic, but the relationships between use cases became visible in chord diagrams.",
      media: {
        type: "video",
        src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/blog%20analysis/blog-analysis-2.mp4",
        caption: "Chord diagram showing content overlap between use cases",
      },
    },
    {
      title: "Strategic hierarchy over flat categories",
      choice: "Mapped 18 use cases → 6 CMO priorities → 4 funnel stages",
      reasoning:
        "The client already had 31 topic categories ('Email Marketing', 'Lead Scoring', etc.) but these didn't answer strategic questions like 'do we have enough content supporting customer retention?' Built a three-level hierarchy: use cases roll up to CMO priorities which roll up to funnel stages. This made the sunburst and treemap visualizations immediately actionable—you can see at a glance that 60% of content targets GET while KEEP is underserved.",
    },
    {
      title: "Prompt caching over repeated API calls",
      choice: "Anthropic's ephemeral cache for the 18 use case definitions",
      reasoning:
        "Each classification request needed the full use case taxonomy (2,000+ tokens) as context. At 500 posts × 3 analysis types, that's 1.5M tokens just for context repetition. Anthropic's prompt caching marks content as 'ephemeral'—cached for 5 minutes and reused across requests. Batch processing in 50-post chunks kept the cache warm. Reduced API costs by roughly 40%.",
    },
    {
      title: "Dual-mode scraping over universal approach",
      choice: "Standard requests for blog posts, Selenium for help center",
      reasoning:
        "The help center (connect.act-on.com) renders content client-side—requests returned empty containers. Could have used Selenium everywhere, but it's 10x slower and requires ChromeDriver management. Solution: URL-based routing. If the URL contains 'connect.act-on.com', spin up headless Chrome; otherwise, use requests. The 95% of posts that don't need JavaScript finish in <500ms.",
    },
    {
      title: "Distance-based animation over sequential rendering",
      choice: "Treemap nodes animate based on distance from center",
      reasoning:
        "Initial treemap animated nodes by index—creating a 'typewriter' effect that didn't match the visual hierarchy. Switched to calculating each node's distance from the chart center: `delay = (distance / maxDistance) * 800ms`. The result is a radial burst where nodes closest to the center appear first. More expensive (sqrt per node), but the animation now communicates the hierarchical structure.",
      media: {
        type: "video",
        src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/blog%20analysis/blog-analysis-3.mp4",
        caption: "Treemap with distance-based animation showing use case distribution",
      },
    },
  ],
  deepDive: {
    title: "The confidence calibration problem",
    content: [
      "The multi-label classifier needed to surface secondary use cases without flooding the data with false positives. But what threshold should trigger inclusion?",
      "First attempt: include everything above 0.3 confidence. Result: nearly every post had 4-5 use cases, and the chord diagram became an unreadable hairball. The model was hedging.",
      "Second attempt: 0.7 threshold. Result: most posts had only their primary use case. The relationships we wanted to see disappeared.",
      "Third attempt: analyzed the distribution of secondary use case confidence scores across a 50-post sample. Found a natural gap: scores clustered either above 0.55 or below 0.35, with few in between. Set threshold at 0.5.",
      "But that wasn't enough. The prompt also needed to change. Added explicit instructions: 'Assess confidence based on direct mention and focus, not just topical adjacency.' A post mentioning 'email' shouldn't automatically get 'Email Deliverability' as a secondary use case.",
      "Final insight: confidence calibration isn't a parameter you tune—it's a combination of threshold selection and prompt engineering. The model's confidence is only meaningful if the prompt defines what confidence means.",
    ],
  },
  outcomes: [
    "Audit timeline dropped from 5+ weeks of manual review to 3 hours of batch processing plus spot-checking",
    "Identified that 62% of content targeted acquisition (GET) while customer retention (KEEP) had only 12%—a strategic gap invisible in the spreadsheet",
    "Red flag detection surfaced 47 posts with outdated brand language that would have required reading every post to find manually",
    "Chord diagram revealed 'Nurture prospects' and 'Personalize outreach' content overlapped 80%—suggesting consolidation opportunities",
  ],
  heroMedia: {
    type: "video",
    src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/blog%20analysis/blog-analysis-1.mp4",
    caption: "Blog Content Audit dashboard",
  },
  links: [
    { label: "Live Demo", href: "#" },
  ],
};
