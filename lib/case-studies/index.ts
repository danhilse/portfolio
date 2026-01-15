import type { CaseStudy } from "./types";

export type { CaseStudy } from "./types";

import { archipelago } from "./archipelago";
import { listenToo } from "./listen-too";
import { shareCalculator } from "./share-calculator";
import { quartz } from "./quartz";
import { referenceAgent } from "./reference-agent";
import { blogAudit } from "./blog-audit";

export const caseStudies: Record<string, CaseStudy> = {
  archipelago,
  "listen-too": listenToo,
  "share-calculator": shareCalculator,
  quartz,
  "reference-agent": referenceAgent,
  "blog-audit": blogAudit,
};

export { archipelago, listenToo, shareCalculator, quartz, referenceAgent, blogAudit };
