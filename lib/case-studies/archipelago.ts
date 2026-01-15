import type { CaseStudy } from "./types";

export const archipelago: CaseStudy = {
  slug: "archipelago",
  title: "Archipelago",
  tagline:
    "A cross-sectional market analysis tool built to replace spreadsheet-driven momentum research.",
  role: "Full-Stack Developer",
  timeline: "2024–Present",
  stack: ["Next.js", "TypeScript", "Python/FastAPI", "TimescaleDB"],
  problem: {
    context:
      "I was manually exporting stock screeners into spreadsheets to compare momentum across sectors. That workflow broke above ~150 tickers—too many rows to scan, too many metrics to hold in working memory, and no way to see structural relationships.",
    breakdown: [
      "Most screeners collapse cross-sectional data into rank tables, which destroys the shape of the distribution",
      "Comparing 4+ metrics simultaneously meant pivot tables and conditional formatting hacks",
      "Every analysis session started from scratch—no way to save a 'lens' and return to it",
    ],
  },
  decisions: [
    {
      title: "Visualization over ranking",
      choice: "Built four chart types instead of a sortable table",
      reasoning:
        "Rank tables answer 'what's #1' but hide distribution shape and cluster structure. Voronoi and parallel coordinates preserve relationships that ranking destroys. The tradeoff: steeper learning curve, but the initial target user was a power user comfortable with higher cognitive load.",
      media: {
        type: "video",
        src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/Archipelago/archipelago-5.mp4",
        caption:
          "Parallel coordinates view showing momentum dispersion across sectors",
      },
    },
    {
      title: "TimescaleDB over columnar stores",
      choice: "Hypertables with continuous aggregates",
      reasoning:
        "Considered ClickHouse and DuckDB. TimescaleDB won because I needed fast time-series reads and relational joins in the same system. Continuous aggregates handle the lookback windows without materialized view maintenance headaches.",
    },
    {
      title: "Client-side filtering with server state",
      choice: "TanStack Query + React Context hybrid",
      reasoning:
        "Initial version fetched filtered data from the server on every slider change—latency killed the exploration UX. Moved to fetching the full dataset (~500 rows, 17 metrics) once, then filtering client-side. The tradeoff is higher memory usage and careful cache invalidation, but at this scale the UX gain outweighed the cost. Sub-50ms interactions made the difference between 'tool' and 'instrument.'",
    },
  ],
  deepDive: {
    title: "The outlier problem",
    content: [
      "Voronoi diagrams with 500 points hit two walls: render performance and visual noise. A few extreme outliers (microcaps with 400% momentum) would compress the entire meaningful range into a corner.",
      "First attempt: log scales. Didn't work—investors think in linear percentage terms, and log distorts intuition about distance.",
      "Second attempt: winsorization at fixed percentiles. Better, but hid legitimately interesting outliers.",
      "Final solution: IQR-based detection with three display modes. Users can hide outliers (clean view), highlight them (flag for investigation), or show only outliers (find the weird ones). Sensitivity is adjustable per-metric because volatility outliers and value outliers have different distributions.",
      "The UX insight: outliers aren't noise to be removed—they're a separate analytical question. The interface should let you ask both questions without rebuilding the view.",
    ],
    media: {
      type: "image",
      src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/Archipelago/archipelago-3.webp",
      caption: "Voronoi bubble chart with outlier detection controls",
    },
  },
  outcomes: [
    "Query latency dropped from 2-3s to <150ms after moving to client-side filtering",
    "Can now scan 500+ stocks across 4 metrics in a single view—previously required multiple spreadsheet tabs",
    "Saved views eliminated the 15-minute 'reconstruction tax' at the start of each session",
    "Made sector rotation patterns visible that ranked tables consistently masked",
  ],
  heroMedia: {
    type: "video",
    src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/Archipelago/archipelago-1.mp4",
    caption: "Archipelago cross-sectional market analysis tool",
  },
  links: [
    { label: "Live Demo", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};
