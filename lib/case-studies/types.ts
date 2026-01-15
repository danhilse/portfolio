export type MediaItem =
  | { type: "image"; src: string; caption: string }
  | { type: "video"; src: string; caption: string };

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  stack: string[];
  problem: {
    // New format
    summary?: string;
    // Old format (deprecated)
    context?: string;
    breakdown?: string[];
  };
  // New format fields
  constraints?: string[];
  solution?: string;
  decisions: {
    title: string;
    // Old format (deprecated)
    choice?: string;
    reasoning: string;
    media?: MediaItem;
  }[];
  deepDive: {
    title: string;
    // Supports both string (new) and string[] (old)
    content: string | string[];
    media?: MediaItem;
  };
  outcomes: string[];
  heroMedia: MediaItem;
  links?: {
    label: string;
    href: string;
  }[];
}
