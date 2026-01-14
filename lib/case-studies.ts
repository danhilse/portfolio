export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  stack: string[];
  overview: string;
  problem: string;
  features: {
    title: string;
    description: string;
  }[];
  technical: {
    title: string;
    points: string[];
  }[];
  images: string[];
  results: string[];
  links?: {
    label: string;
    href: string;
  }[];
}

export const caseStudies: Record<string, CaseStudy> = {
  archipelago: {
    slug: "archipelago",
    title: "Archipelago",
    subtitle: "A Financial Analytics & Market Data Platform",
    role: "Full-Stack Developer",
    timeline: "2024–Present",
    stack: ["Next.js 15", "React 19", "TypeScript", "Python/FastAPI", "PostgreSQL", "TimescaleDB"],
    overview:
      "A financial analytics platform for data-driven investors. Real-time market analysis with advanced momentum metrics, multi-dimensional data visualization, and customizable watchlists—enabling analysis of 500+ stocks simultaneously through interactive charts.",
    problem:
      "Traditional stock screeners offer static tables and basic filtering. Investors analyzing cross-sectional market data face information overload, limited visualization options, and fragmented workflows. I built a platform that treats market data as a multi-dimensional exploration problem.",
    features: [
      {
        title: "Multi-Metric Visualization",
        description:
          "Four chart types: Voronoi bubble charts for 4-metric comparison, treemaps for market cap visualization, parallel coordinates for 5+ metric comparison, and deviation decomposition for factor analysis.",
      },
      {
        title: "Interactive Filtering",
        description:
          "Real-time metric sliders with histogram previews, IQR-based outlier detection, category filtering with include/exclude logic, and persistent multi-select.",
      },
      {
        title: "Momentum Analytics",
        description:
          "Custom quantitative metrics: MTMS (Multi-Timeframe Momentum Score), Mom12-1 momentum factor, and CANSLIM scoring across 8 fundamental factors.",
      },
      {
        title: "Watchlist Management",
        description:
          "Custom categories with color-coding, grid/table views, favorites with cross-page persistence, and saved analysis configurations.",
      },
    ],
    technical: [
      {
        title: "Frontend",
        points: [
          "Next.js 15 with App Router and Server Components",
          "Visx for D3-based visualizations (Voronoi, treemaps)",
          "TanStack Query for server state with optimistic updates",
          "shadcn/ui and Radix primitives",
        ],
      },
      {
        title: "Backend",
        points: [
          "FastAPI with async/await patterns",
          "TimescaleDB hypertables for time-series queries",
          "Polygon.io integration for real-time market data",
          "17 calculated financial metrics with automated daily refresh",
        ],
      },
    ],
    images: [
      "/case-studies/archipelago/screen-1.png",
      "/case-studies/archipelago/screen-2.png",
      "/case-studies/archipelago/screen-3.png",
    ],
    results: [
      "Interactive analysis of 500+ stocks with sub-second filtering",
      "4 visualization types for different analytical perspectives",
      "17 calculated metrics with automated daily refresh",
      "Saved views enabling reproducible analysis workflows",
    ],
    links: [
      { label: "Live Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
};
