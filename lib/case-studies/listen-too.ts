import type { CaseStudy } from "./types";

export const listenToo: CaseStudy = {
  slug: "listen-too",
  title: "Listen Too",
  tagline:
    "A playlist generator that turns 'what are you listening to?' into a shareable link in under 10 seconds.",
  role: "Full-Stack Developer",
  timeline: "2024",
  stack: ["Next.js", "TypeScript", "Spotify Web API"],
  problem: {
    context:
      "Friends kept asking what I was listening to. My answer was always 'uh, a lot of stuff'—then I'd spend five minutes scrolling through Spotify trying to remember standout tracks. Even when I did share, sending individual songs felt disconnected from my actual listening patterns.",
    breakdown: [
      "Spotify's 'Top Tracks' feature exists but isn't shareable—it's buried in wrapped and profile stats",
      "Liked songs accumulate over years; the recent stuff drowns in 2,000+ tracks",
      "Creating a playlist manually meant 15+ minutes of curation every time someone asked",
    ],
  },
  decisions: [
    {
      title: "Merge sources instead of picking one",
      choice: "Interweaved top tracks with recently liked songs",
      reasoning:
        "Spotify's top tracks endpoint reflects algorithmic weighting—what you played most. Liked songs reflect explicit intent—what you chose to save. Neither alone captures 'what I'm into.' Built an interweaving function that alternates between sources, deduplicates overlaps, and falls back gracefully when one runs dry. The tradeoff: playlist order isn't strictly ranked, but it better represents actual listening behavior.",
    },
    {
      title: "Encrypt tokens at rest",
      choice: "AES-GCM encryption in HTTP-only cookies",
      reasoning:
        "Considered storing tokens in localStorage (simpler) or server-side sessions (more infra). HTTP-only cookies with encryption won because they're inaccessible to XSS, persist across browser sessions, and require no database. The 32-byte key and 12-byte IV add complexity, but tokens containing Spotify account access warrant the extra care.",
    },
    {
      title: "Filter liked songs by date client-side",
      choice: "Calculate cutoff date and iterate until timestamp exceeds it",
      reasoning:
        "Spotify's /me/tracks endpoint returns all liked songs with no time filter parameter. For 'last 4 weeks,' I had to fetch pages of liked songs and check added_at against a calculated cutoff. It's inefficient—sometimes fetching 100+ tracks to find 15—but Spotify's API offers no alternative. I fetch 2x the target count from each source to account for deduplication losses.",
    },
  ],
  deepDive: {
    title: "The propagation delay problem",
    content: [
      "After creating the playlist and adding tracks, I redirected users to a success page with a Spotify embed preview. The embed consistently showed an empty playlist.",
      "First assumption: my code was wrong. Logged every response—playlist created successfully, tracks added with 201 status, all URIs valid. The API was lying.",
      "Debugging revealed Spotify's API returns success before the playlist propagates through their system. The tracks exist in their database but aren't queryable yet. The embed iframe hits a different read replica that hasn't synced.",
      "Solution: a 2-second delay before redirect. Crude, but reliable. Considered polling the playlist endpoint until track count matched, but that adds 3-4 additional API calls and still occasionally races. The fixed delay handles 99% of cases with zero added complexity.",
      "The lesson: APIs that return success aren't always telling the truth. Eventual consistency is someone else's problem until it's your UX.",
    ],
  },
  outcomes: [
    "Playlist creation takes under 10 seconds from button click to shareable link",
    "Auto-copies to clipboard on success—sharing requires zero additional taps",
    "Eliminates the 'let me think about what I've been listening to' pause entirely",
    "Went from dodging the question to actually sharing playlists with friends",
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
