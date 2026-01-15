import type { CaseStudy } from "./types";

export const quartz: CaseStudy = {
  slug: "quartz",
  title: "Boulevard Quartz",
  tagline:
    "A commercial real estate aggregator that scrapes regional brokers without APIs—and runs for under $30/month.",
  role: "Full-Stack Developer",
  timeline: "2024–2025",
  stack: ["Next.js", "TypeScript", "Python/FastAPI", "PostgreSQL", "Claude API"],
  problem: {
    context:
      "A local commercial real estate broker was checking 5+ websites daily to track listings in Missouri. No unified search existed because small regional brokers don't publish to national platforms—and they certainly don't have APIs.",
    breakdown: [
      "Small brokers serve static HTML with inconsistent structures—tables, DIV grids, listings spread across category pages",
      "Data quality varies wildly: 'Prime Location!' vs. three-paragraph specs, prices in different formats",
      "Aggressive scraping gets blocked. These aren't enterprise sites with rate-limit headers—they're small businesses that might just blacklist your IP",
    ],
  },
  decisions: [
    {
      title: "Index-based change detection over full scrapes",
      choice: "Built two-phase scraping—fast index scan, then targeted detail fetch",
      reasoning:
        "The first version scraped everything on every run—15+ minutes for 5,000 properties. The fix: separate 'what exists' from 'what changed.' Phase one fetches lightweight index data (IDs, URLs, prices). Phase two compares against the database and only scrapes details for new or changed listings. Runtime dropped to 3-5 minutes; API calls reduced 70%. Tradeoff: more complex state management and a two-method contract for every scraper.",
      media: {
        type: "video",
        src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/quartz/quartz-2.mp4",
        caption:
          "Incremental scraping: index comparison filters 5,000 listings down to ~100 detail fetches",
      },
    },
    {
      title: "AI description standardization at $0.01/listing",
      choice: "Claude generates headlines, summaries, and key features for every listing",
      reasoning:
        "Broker descriptions ranged from 'Great opportunity!' to dense technical specs. Inconsistency made search results feel like five sites merged badly. Considered manual copywriting (expensive, doesn't scale) and template generation (reads like spam). Claude with structured output and a brand-voice system prompt hits the middle ground. Pydantic validates output schema. Cost: ~$4 for 400 listings.",
    },
    {
      title: "Plugin architecture over monolithic scraper",
      choice: "Each data source is a Python entry point implementing scrape_index() and scrape_detail()",
      reasoning:
        "Different sources need different parsers—static HTML tables, DIV grids, RESO OData APIs. A common interface via Python entry points meant adding new sources without touching orchestration. The orchestrator discovers scrapers dynamically and runs them concurrently with asyncio.gather(). Individual failures don't crash the run. Tradeoff: boilerplate per scraper, but isolation means any source can be tested independently.",
    },
    {
      title: "Local brokers first, national platforms deferred",
      choice: "Built scrapers for 5 regional Missouri brokers instead of LoopNet/Crexi",
      reasoning:
        "National platforms have legal teams and sophisticated bot detection. Local broker sites are static HTML with no anti-bot measures. Five regional brokers covered 80% of the client's daily workflow with 10% of the legal risk. National data will come via third-party APIs ($25-30/month) rather than direct scraping—same data, legitimate access.",
    },
  ],
  deepDive: {
    title: "The A-2 zoning classification problem",
    content: [
      "Missouri's A-2 (Agricultural-Residential) zoning creates an ambiguity problem. The category includes both single-home residential lots (irrelevant) and commercial development land (exactly what we want). The difference isn't in the zoning code—it's in how the property is marketed.",
      "First attempt: keyword filtering for 'commercial,' 'development,' 'investment.' Problem: false negatives. Listings saying 'great for future development' might not use exact keywords.",
      "Second attempt: pure AI classification for every A-2 listing. Problem: expensive at scale. 2,000 properties × $0.002 = $4/run, repeated nightly.",
      "Final solution: rule-based pre-filter + AI classification with caching. Layer one checks MLS 'Suitable For' fields—if marked for residential foundation types, exclude immediately without AI cost. Layer two sends ambiguous cases to Claude with structured context. Layer three caches the decision in the database.",
      "The insight: classification cost isn't per-property-per-run—it's per-property-ever. First run: 2,000 evaluations (~$4). Subsequent runs: only new listings (20-50 properties, ~$0.10). Manual override handles edge cases.",
    ],
    media: {
      type: "image",
      src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/quartz/quartz-3.webp",
      caption: "Three-layer A-2 classification: rule filter → AI evaluation → cached decisions",
    },
  },
  outcomes: [
    "Replaced daily manual checks across 5+ broker websites with a single unified search",
    "Scrape runtime dropped from 15 minutes to 3-5 minutes after incremental detection (70% fewer API calls)",
    "AI enhancement runs at ~$0.01/listing; full catalog refresh costs ~$4",
    "Total operating cost under $30/month: Railway ($5) + Neon ($5) + S3/CloudFront (~$5) + Claude (~$10)",
  ],
  heroMedia: {
    type: "video",
    src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/quartz/quartz-1.mp4",
    caption: "Boulevard Quartz property search interface",
  },
  links: [
    { label: "Live Demo", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};
