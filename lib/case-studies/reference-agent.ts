import type { CaseStudy } from "./types";

export const referenceAgent: CaseStudy = {
  slug: "reference-agent",
  title: "Customer Reference Agent",
  tagline:
    "AI-powered search that surfaces customer quotes from Salesforce in under 3 seconds.",
  role: "Full-Stack Developer",
  timeline: "2025",
  stack: ["Next.js", "TypeScript", "Vercel AI SDK", "Claude/GPT-4o/Gemini"],

  problem: {
    summary:
      "Sales reps frequently interrupted account managers mid-pitch to ask for customer quotes. Although Salesforce contained 200+ approved quotes, keyword search failed on synonyms and shorthand, returning either dozens of irrelevant results or none at all.",
  },

  constraints: [
    "Semantic understanding needed—synonyms and sales shorthand ('SF', 'SFMC', 'SMB') had to resolve correctly",
    "Zero downtime during live sales calls",
    "Highlights had to reference exact source text, not AI-generated summaries",
  ],

  solution:
    "An internal search tool that surfaces customer quotes from Salesforce with confidence scores and exact-match highlights.",

  decisions: [
    {
      title: "Two-pass ranking (relevance → highlighting)",
      reasoning:
        "Separate initial ranking from highlight extraction—single-shot conflated keyword matches with actual relevance",
    },
    {
      title: "Multi-provider failover",
      reasoning:
        "Claude → GPT-4o → Gemini → keyword matching. API outages during live sales calls would be unrecoverable",
    },
    {
      title: "Conservative filter inference for segmentation",
      reasoning:
        "Only apply industry/segment filters when explicitly mentioned—wrong filters hide results invisibly",
    },
  ],

  outcomes: [
    "Searches dropped from 5+ minutes (manual Salesforce scanning) to under 3 seconds",
    "Reps stopped calling account managers mid-pitch (5+ weekly searches)",
    "Zero full outages in production; keyword fallback activated twice",
    "24-entry abbreviation map resolves sales shorthand without model tuning",
  ],

  deepDive: {
    title: "Exact substring extraction",
    content:
      "AI tends to paraphrase when extracting highlights ('reduced costs' instead of 'reduced our costs'), breaking the highlight match. The prompt explicitly instructs 'extract the exact text as it appears, character-for-character.' Validation step: if the returned highlight doesn't exist in the source quote, drop it. Incorrect highlights were dropped rather than risk misleading output.",
  },

  heroMedia: {
    type: "video",
    src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/reference%20agent/reference-agent-1.mp4",
    caption: "Customer Reference Agent search interface",
  },

  links: [{ label: "Live Demo", href: "#" }],
};
