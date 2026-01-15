import type { CaseStudy } from "./types";

export const referenceAgent: CaseStudy = {
  slug: "reference-agent",
  title: "Customer Reference Agent",
  tagline:
    "An AI-powered search tool that surfaces customer quotes from Salesforce in seconds—built to elevate the customer voice in sales conversations.",
  role: "Full-Stack Developer",
  timeline: "2025",
  stack: ["Next.js", "TypeScript", "Vercel AI SDK", "Claude/GPT-4o/Gemini"],
  problem: {
    context:
      "Act-On's sales reps were calling account managers mid-pitch asking for customer quotes. A Salesforce report with approved quotes existed, but nobody could find the right reference fast enough—too many columns, no semantic understanding, and searches that returned 50 results or zero.",
    breakdown: [
      "A rep asking for 'healthcare automation wins' had to manually scan 200+ rows and guess which columns mattered",
      "Keyword search failed on synonyms—'SMB' didn't match 'small business', 'SF' didn't match 'Salesforce'",
      "Filters existed for industry, segment, CRM type, and use case—but reps didn't know which combinations would yield results",
    ],
  },
  decisions: [
    {
      title: "Two-pass AI ranking over single-shot search",
      choice: "Separated initial ranking from highlight extraction",
      reasoning:
        "First attempt used one prompt to rank, score, and highlight. Results were noisy—the AI conflated 'matching keywords' with 'actually relevant.' Split into two stages: first pass ranks against an optimized query, second pass re-evaluates against the original request and extracts exact highlight spans. The tradeoff: ~2x latency and token cost, but confidence scores became trustworthy enough to show users.",
      media: {
        type: "video",
        src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/reference%20agent/reference-agent-2.mp4",
        caption: "Search results with confidence scores and AI-extracted highlights",
      },
    },
    {
      title: "Multi-provider fallback over vendor lock-in",
      choice: "Built adapters for Claude, GPT-4o, and Gemini with automatic failover",
      reasoning:
        "Considered betting on one provider. Rejected it because API outages during live sales calls would be unrecoverable. Each provider has a unified interface; if Claude fails, the request retries on GPT-4o, then Gemini. Final fallback is keyword matching—no AI, just substring counts. Tradeoff: maintaining three prompt variants, but the system has never fully failed in production.",
    },
    {
      title: "Conservative filter inference over aggressive matching",
      choice: "Only infer filters when explicitly stated in the request",
      reasoning:
        "Early version guessed 'healthcare' when a rep searched for 'Aetna.' Seemed clever until it filtered out a perfect Aetna quote tagged under 'Insurance.' Now the AI only applies industry/segment/CRM filters when the user explicitly mentions them. False negatives from missing a filter are recoverable; false positives from wrong filters are invisible.",
    },
    {
      title: "Abbreviation expansion at query time",
      choice: "Built a 24-entry abbreviation map with longest-first replacement",
      reasoning:
        "Sales teams speak in shorthand—'SF', 'SFMC', 'SMB', 'HubSpot' as 'HS.' The AI doesn't reliably understand these. Rather than fine-tune or add examples, I expand abbreviations before the prompt. Longest-first ordering prevents 'SF' from expanding before 'SFMC.' Deduplication prevents 'Salesforce Salesforce Marketing Cloud.'",
    },
  ],
  deepDive: {
    title: "The highlight extraction problem",
    content: [
      "Showing a 200-word quote doesn't help—reps need to see the three words that matter. But extracting exact substrings from freeform text is surprisingly hard.",
      "First attempt: asked the AI to summarize the relevant parts. Failed because summaries don't match the original text, so highlighting breaks.",
      "Second attempt: asked for sentence indices. Failed because sentence boundaries are ambiguous, and off-by-one errors compounded.",
      "Third attempt: asked for the verbatim substring. Better, but the AI would paraphrase slightly—'reduced costs' instead of 'reduced our costs'—and the highlight wouldn't match.",
      "Final solution: the prompt explicitly instructs 'extract the exact text as it appears, character-for-character.' Then I validate: if the returned highlight doesn't exist in the source quote, I drop it rather than show a broken highlight. Precision over recall.",
      "The insight: when you need exact extraction, you can't trust generation. Validation is mandatory, and graceful degradation (no highlight) beats visible errors.",
    ],
  },
  outcomes: [
    "Adopted by sales team with 5+ weekly searches—reps stopped calling account managers for quotes",
    "Searches that took 5+ minutes scanning Salesforce now complete in under 3 seconds",
    "Zero full outages in production due to multi-provider failover; keyword fallback has activated twice",
    "Usage analytics tracked in Google Sheets revealed which industries and segments reps search most",
  ],
  heroMedia: {
    type: "video",
    src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/reference%20agent/reference-agent-1.mp4",
    caption: "Customer Reference Agent search interface",
  },
  links: [
    { label: "Live Demo", href: "#" },
  ],
};
