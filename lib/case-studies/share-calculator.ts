import type { CaseStudy } from "./types";

export const shareCalculator: CaseStudy = {
  slug: "share-calculator",
  title: "Share Fundraising Calculator",
  tagline:
    "An embeddable ROI calculator for nonprofit paid media campaigns, built to work on sites I don't control.",
  role: "Full-Stack Developer",
  timeline: "2025",
  stack: ["Next.js", "TypeScript", "Puppeteer", "Vercel Blob"],
  problem: {
    context:
      "A nonprofit marketing agency needed a calculator that clients could embed on their Webflow sites. The brief seemed simple—sliders, real-time results, downloadable reports. The complexity hid in 'embeddable on sites I don't control.'",
    breakdown: [
      "Third-party embedding means unknown CORS origins and no control over parent page CSS",
      "Lead capture requires file generation (PDF/CSV) with email delivery—cold starts on serverless",
      "Real-time feedback demands sub-100ms interactions, not server roundtrips for every slider move",
    ],
  },
  decisions: [
    {
      title: "Client-side calculation engine",
      choice: "Single useMemo with 11 dependencies instead of API calls",
      reasoning:
        "Considered a /calculate endpoint but latency killed the exploration UX. Moved all math client-side—totals, projections, ROI across four time horizons. The tradeoff: a fragile dependency array (add a slider, forget a dep, get stale results). But 16ms re-renders vs. 200ms roundtrips made the maintenance cost worth it.",
      media: {
        type: "video",
        src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/calculator/calculator-2.mp4",
        caption: "Sticky results panel updates as users adjust sliders",
      },
    },
    {
      title: "Dual embedding strategy",
      choice: "Both standalone widget and iframe embed, user picks",
      reasoning:
        "Started with a UMD widget bundle (webpack, optional Shadow DOM for CSS isolation). Worked on clean pages, broke on Webflow sites with aggressive global styles. Added an iframe-based embed with iframe-resizer for auto-height. iframe costs performance overhead but guarantees isolation. When CSS conflicts are unpredictable, isolation wins over elegance.",
    },
    {
      title: "Absolute URLs over relative paths",
      choice: "Hardcoded production API URLs in the client bundle",
      reasoning:
        "When your React app runs inside an iframe on webflow-client-xyz.com, relative URLs like /api/generate-files resolve to the wrong origin. Tried environment variables and proxy approaches—all broke in some embedding edge case. Absolute URLs are the only thing that works reliably across unknown host domains. Sometimes the pragmatic answer is the right one.",
    },
    {
      title: "Server-side PDF with puppeteer-core",
      choice: "Browser automation over lightweight PDF libraries",
      reasoning:
        "Could have used jsPDF or pdfmake for faster cold starts. Chose puppeteer because the client wanted the PDF to match the branded web design exactly—custom fonts, layout, colors. Puppeteer renders actual HTML, so I could reuse styles. The cost: ~5s cold starts, 15+ Chrome flags tuned for serverless. Worth it for design parity.",
    },
  ],
  deepDive: {
    title: "The CORS education",
    content: [
      "Embedding on third-party sites exposed gaps in my understanding of browser security. The first version worked locally, failed silently in production embeds.",
      "Problem 1: The widget's fetch calls to /api/generate-files were being blocked. Fix: CORS headers with Access-Control-Allow-Origin: '*'. I'd avoided wildcard origins before, but when the embedding domain is unknown, it's the only option.",
      "Problem 2: Preflight OPTIONS requests weren't being handled. The API route only had POST logic. Fix: explicit OPTIONS handler returning 204 with the CORS headers.",
      "Problem 3: Rate limiting was IP-based, but proxied requests all came from the same IP (Webflow's CDN). Fix: check x-forwarded-for, x-real-ip, and cf-connecting-ip headers in priority order.",
      "The lesson wasn't technical—it was that 'embeddable' is a requirements category that sounds simple and isn't. Every assumption about same-origin behavior needs to be questioned.",
    ],
    media: {
      type: "image",
      src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/calculator/calculator-3.webp",
      caption: "Download dialog with email capture for lead generation",
    },
  },
  outcomes: [
    "Calculator works on Webflow sites without same-origin constraints—tested on three client domains",
    "Slider interactions stay under 20ms despite 11-variable calculation engine",
    "File generation handles bursts via IP-aware rate limiting (3 req/min with retry-after headers)",
    "Expired files auto-cleaned to prevent unbounded storage growth",
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
