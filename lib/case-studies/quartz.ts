import type { CaseStudy } from "./types";

export const quartz: CaseStudy = {
  slug: "quartz",
  title: "Boulevard Quartz",
  tagline:
    "Commercial real estate aggregator scraping 5 regional sources into unified search—running for under $30/month.",
  role: "Full-Stack Developer",
  timeline: "2024–2025",
  stack: [
    "Next.js 15",
    "TypeScript",
    "Python/FastAPI",
    "PostgreSQL",
    "Claude API",
    "Mapbox GL",
  ],

  problem: {
    summary:
      "A local CRE broker was manually checking 5+ websites daily to track Missouri commercial listings. Regional brokers don't publish to national platforms and don't have APIs—static HTML sites with inconsistent structures.",
  },

  constraints: [
    "No APIs: HTML tables, DIV grids, paginated pages, plus one RESO OData feed",
    "Scale vs. speed: 500+ IDX/MLS listings; full scrapes took 15+ minutes",
    "Budget: Target operating cost under $30/month",
  ],

  solution:
    "A scraping pipeline with 5 data sources, incremental change detection, AI-generated descriptions, and a Next.js search interface with map clustering.",

  decisions: [
    {
      title: "Two-phase incremental scraping",
      reasoning:
        "Index scan detects new/changed listings; detail fetch runs only for updates. Reduced runtime from 15+ min to 3-5 min.",
    },
    {
      title: "Plugin architecture",
      reasoning:
        "Each scraper implements scrape_index() + scrape_detail() via Python entry points. Orchestrator discovers scrapers dynamically and runs them concurrently. Individual failures don't crash the pipeline.",
    },
    {
      title: "AI description standardization",
      reasoning:
        "Claude generates headline, summary, key points, and description for each listing. Pydantic validates output schema. ~$0.01/listing.",
    },
    {
      title: "Three-layer A-2 filter",
      reasoning:
        "Missouri's A-2 zoning includes both residential lots and commercial land. Rule-based pre-filter checks MLS fields → ambiguous cases go to Claude → decisions cached per-property. First run ~$4; subsequent runs ~$0.10.",
    },
    {
      title: "Lightweight map markers",
      reasoning:
        "Separate /markers endpoint returns only coordinates and price for clustering. Full listing data loads on click. Keeps initial map render fast with 900+ points.",
    },
  ],

  outcomes: [
    "924 active listings from 5 sources (IDX/MLS, Maly, Plaza, Maher, LoopNet)",
    "59 cities and 13 property types indexed",
    "70% fewer API calls after incremental detection (15 min → 3-5 min)",
    "$0.01/listing for AI descriptions",
    "<$30/month total: Railway ($5) + Neon ($5) + S3/CloudFront (~$5) + Claude (~$10)",
  ],

  deepDive: {
    title: "IDX/MLS Integration",
    content:
      "The largest data source (508 listings, 55% of total) required a 1,100-line scraper for Spark RESO OData API. Handles bearer token auth, pagination, MLS field mapping, coordinate extraction, and A-2 zoning evaluation. Properties without coordinates get geocoded. Change detection compares basic_price field to catch price updates without re-fetching unchanged listings.",
  },

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
