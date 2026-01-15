import type { CaseStudy } from "./types";

export const listenToo: CaseStudy = {
  slug: "listen-too",
  title: "Listen Too",
  tagline:
    "One-click playlist generator that turns recent Spotify activity into a shareable playlist.",
  role: "Full-Stack Developer",
  timeline: "2024",
  stack: ["Next.js", "TypeScript", "Spotify Web API"],
  problem: {
    context:
      "Sharing current listening habits in Spotify requires manual playlist curation. Existing features (Top Tracks, Liked Songs) either aren't shareable or bury recent activity in long histories.",
    breakdown: [
      "Spotify's Liked Tracks API has no date filter—returns all tracks regardless of time period",
      "Playlist creation is eventually consistent; API returns success before data propagates",
      "Track additions capped at 100 per request, requiring chunked uploads",
    ],
  },
  decisions: [
    {
      title: "Two-source interweaving",
      choice: "Combine top tracks + liked songs with deduplication",
      reasoning:
        "Top tracks reflect algorithmic weighting; liked songs reflect explicit saves. Interweaving both with 2x overfetch (to account for deduplication) produces a more representative snapshot than either source alone.",
    },
    {
      title: "Encrypted cookie sessions",
      choice: "AES-GCM encryption with httpOnly cookies",
      reasoning:
        "No database required, resistant to XSS, and persists across browser sessions using native Web Crypto APIs.",
    },
    {
      title: "Deterministic handling of eventual consistency",
      choice: "2-second wait before redirect to success page",
      reasoning:
        "Spotify's API returns 201 before playlist syncs to read replicas. Polling adds 3-4 API calls and still races. Fixed delay handles 99% of cases with zero added complexity.",
    },
  ],
  deepDive: {
    title: "Client-side date filtering",
    content: [
      "Spotify's /me/tracks endpoint returns all liked songs with no time filter parameter. For 'last 4 weeks,' the app fetches pages of liked songs chronologically and compares added_at against a calculated cutoff date.",
      "Requires fetching additional pages to find recent tracks, since the API provides no date filtering. The 2x overfetch from each source ensures enough tracks survive deduplication to hit the target count.",
    ],
  },
  outcomes: [
    "Under 10 seconds from button click to shareable playlist",
    "Handles Spotify OAuth with automatic token refresh before expiration",
    "Deterministic playlist creation despite eventual consistency",
    "Auto-copies playlist URL to clipboard for frictionless sharing",
  ],
  heroMedia: {
    type: "video",
    src: "https://d1lbnboj0lfh6w.cloudfront.net/portfolio/listen-too-1.mp4",
    caption: "Listen Too playlist generator",
  },
  links: [
    { label: "Live Demo", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};
