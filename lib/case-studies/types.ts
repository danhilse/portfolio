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
    context: string;
    breakdown: string[];
  };
  decisions: {
    title: string;
    choice: string;
    reasoning: string;
    media?: MediaItem;
  }[];
  deepDive: {
    title: string;
    content: string[];
    media?: MediaItem;
  };
  outcomes: string[];
  heroMedia: MediaItem;
  links?: {
    label: string;
    href: string;
  }[];
}
