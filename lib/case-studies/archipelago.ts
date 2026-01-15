import type { CaseStudy } from "./types";

export const archipelago: CaseStudy = {
  slug: "archipelago",
  title: "Archipelago",
  tagline:
    "Cross-sectional market analysis tool for comparing 2000+ stocks across multiple metrics simultaneously.",
  role: "Full-Stack Developer",
  timeline: "2024–Present",
  stack: ["Next.js 15", "TypeScript", "Visx", "Python/FastAPI", "TimescaleDB"],
  problem: {
    context:
      "Momentum screening workflows broke above ~150 tickers when done in spreadsheets. Needed to compare stocks across multiple metrics at once while preserving distribution shape—something rank tables can't do.",
    breakdown: [
      "Render 2000+ data points across 4 metrics without lag",
      "Support multiple time scales per metric (1W, 1M, 3M, 6M, 1Y) in the same view",
      "Support time-series queries and relational joins without splitting systems",
    ],
  },
  decisions: [
    {
      title: "Four chart types instead of tables",
      choice:
        "Voronoi scatter, treemap, parallel coordinates, and deviation decomposition",
      reasoning:
        "Each chart answers a different analytical question—clustering, relative weight, multi-metric comparison, and contribution analysis. Target user: analyst running weekly screens.",
      media: {
        type: "video",
        src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/Archipelago/archipelago-5.mp4",
        caption:
          "Parallel coordinates view showing momentum dispersion across sectors",
      },
    },
    {
      title: "Composite metric IDs",
      choice: 'Encode time scale in metric identifier (e.g., "change_pct:1m")',
      reasoning:
        "Needed the same base metric on multiple axes with different lookback periods. Simplifies state management and allows saved views to persist cleanly.",
    },
    {
      title: "Pre-calculated time scale metrics",
      choice:
        "Dedicated time_scale_metrics table with LEFT JOIN, computed during daily collection",
      reasoning:
        "Avoided runtime calculations for 2000 tickers × 6 time scales on every request. Query returns all metrics instantly.",
    },
  ],
  deepDive: {
    title: "Outlier detection",
    content: [
      "Extreme values (microcaps with 400%+ momentum) compressed the useful range into a corner. Log scales broke intuition; fixed-percentile clipping hid real anomalies.",
      "Built IQR-based detection with three modes: hide (clean view), highlight (flag for review), or isolate (show only outliers). Sensitivity is per-metric, since volatility and value outliers follow different distributions. Configuration persists in saved views.",
    ],
    media: {
      type: "image",
      src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/Archipelago/archipelago-3.webp",
      caption: "Voronoi bubble chart with outlier detection controls",
    },
  },
  outcomes: [
    "2000 stocks render across 4 chart types with no visible lag",
    "Interaction latency: 2–3s → sub-50ms after moving filtering client-side",
    "Saved views eliminated ~15 minutes of session setup per analysis",
    "Dashboard codebase reduced 64% (4,587 → 1,643 lines) through component extraction",
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
