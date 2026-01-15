import type { CaseStudy } from "./types";

export const shareCalculator: CaseStudy = {
  slug: "share-calculator",
  title: "Share Fundraising Calculator",
  tagline:
    "An embeddable ROI calculator for nonprofit paid media campaigns with branded PDF reports.",
  role: "Full-Stack Developer",
  timeline: "2025",
  stack: ["Next.js", "TypeScript", "Puppeteer", "Vercel Blob"],
  problem: {
    context:
      "A nonprofit marketing agency needed a lead generation tool that clients could embed on their Webflow sites. The calculator estimates ROI for paid advertising across two funnel strategies and generates downloadable reports for lead capture.",
    breakdown: [
      "Must work embedded on third-party Webflow sites with unknown origins",
      "PDF reports need to match the branded web design exactly—custom fonts, layout, colors",
      "Slider interactions need to feel instant despite recalculating ROI across four time horizons",
    ],
  },
  decisions: [
    {
      title: "Client-side calculations",
      choice:
        "useMemo-based calculation engine instead of API calls for slider updates",
      reasoning:
        "11 interdependent variables recalculated on every slider move. Server roundtrips would add 200ms+ latency per interaction. All math runs client-side; API only handles file generation.",
      media: {
        type: "video",
        src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/calculator/calculator-2.mp4",
        caption: "Sticky results panel updates as users adjust sliders",
      },
    },
    {
      title: "Puppeteer for PDF generation",
      choice: "Browser automation over lightweight PDF libraries",
      reasoning:
        "Client required exact visual parity between web and PDF. Puppeteer renders actual HTML with embedded Base64 fonts (FuturaPT family), reusing the same styles. Trade-off: ~5s cold starts on serverless, but eliminates manual layout recreation.",
    },
    {
      title: "IIFE widget bundle",
      choice: "Self-contained esbuild bundle with absolute API URLs",
      reasoning:
        "Widget runs inside iframes on unknown Webflow domains. Relative URLs resolve to the wrong origin. Bundle is fully self-contained, uses absolute production URLs, and exposes a single global entry point. iframe-resizer handles dynamic height adjustment.",
    },
  ],
  deepDive: {
    title: "Embedding on third-party sites",
    content: [
      "Webflow embedding required CORS headers with wildcard origin (embedding domains are unknown at deploy time). Preflight OPTIONS requests required explicit handling in addition to POST routes.",
      "Rate limiting by IP broke when all requests came through Webflow's CDN. Fixed by checking x-forwarded-for, x-real-ip, and cf-connecting-ip headers in priority order.",
      "Lead data flows to Google Sheets (no database). If Sheets API fails, files still generate—graceful degradation keeps the lead capture working.",
    ],
    media: {
      type: "image",
      src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/calculator/calculator-3.webp",
      caption: "Download dialog with email capture for lead generation",
    },
  },
  outcomes: [
    "Slider interactions under 20ms with 11-variable calculation engine",
    "Works on any Webflow site—tested across three client domains",
    "PDF/CSV generation with 3 req/min rate limiting and automatic 14-day cleanup",
    "Lead data logged to Google Sheets with graceful fallback if API unavailable",
  ],
  heroMedia: {
    type: "video",
    src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/calculator/calculator-1.mp4",
    caption: "Share Fundraising Calculator",
  },
  links: [
    { label: "Live Demo", href: "https://share-calculator-delta.vercel.app" },
  ],
};
