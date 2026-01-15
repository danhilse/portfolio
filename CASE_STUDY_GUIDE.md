# Case Study Guidelines

A reference for writing portfolio case studies that demonstrate judgment, not just capability.

---

## Core Principle

**Lead with evidence, not abstraction.**

The reader should know what broke, who cared, and what changed before they learn your epistemology.

---

## Structure

### 1. Hero (2-3 lines max)

**Title**
One sentence: what it is + what problem it replaced.

```
Archipelago
A cross-sectional market analysis tool built to replace spreadsheet-driven momentum research.
```

Not:
```
A Financial Analytics & Market Data Platform
```

The first is falsifiable. The second is marketing.

### 2. The Problem

Start with your experience, not the industry's.

**Good:**
> I was manually exporting stock screeners into spreadsheets to compare momentum across sectors. That workflow broke above ~150 tickers.

**Bad:**
> Traditional stock screeners offer static tables and basic filtering.

The first shows you hit a real wall. The second is a thesis statement anyone could write.

Include:
- A specific threshold where things broke (~150 tickers, 15-minute reconstruction tax)
- What you were actually trying to do
- Why existing tools failed *for your use case*

### 3. Key Decisions (centerpiece)

This section differentiates you from CRUD developers.

For each decision:
- **Title**: The tradeoff framed as a choice
- **Choice**: What you built (one line)
- **Reasoning**: Why, including what you rejected

```
Visualization over ranking
Built four chart types instead of a sortable table

Rank tables answer 'what's #1' but hide distribution shape and cluster structure.
Voronoi and parallel coordinates preserve relationships that ranking destroys.
The tradeoff: steeper learning curve, but the initial target user was a power
user comfortable with higher cognitive load.
```

Always include:
- Alternatives you considered
- The tradeoff you accepted
- Why it was worth it

### 4. One Deep Dive

Pick the most interesting technical problem and go deep.

Show iteration:
```
First attempt: log scales. Didn't work—investors think in linear percentage terms.
Second attempt: winsorization at fixed percentiles. Better, but hid interesting outliers.
Final solution: IQR-based detection with three display modes.
```

End with the insight:
```
Outliers aren't noise to be removed—they're a separate analytical question.
```

This is where product thinking shows through.

### 5. Outcomes

**Outcomes are not features.**

Bad:
- 4 visualization types
- 17 calculated metrics
- Saved views

Good:
- Query latency dropped from 2-3s to <150ms
- Eliminated the 15-minute reconstruction tax at session start
- Made sector rotation patterns visible that ranked tables consistently masked

If you can't quantify, describe the behavioral change.

---

## Images

Anchor images to context. Never dump them in a generic grid.

Place each screenshot after its relevant section with a caption:

```
Parallel coordinates view showing momentum dispersion across sectors
```

Not:
```
Archipelago screenshot 2
```

---

## Tone

### Avoid
- "Multi-dimensional exploration problem" (abstraction before evidence)
- "the target user (me)" (self-owning)
- Over-parenthesized explanations
- Font name drops unless the design is exceptional
- User counts unless real
- Roadmaps (this is a portfolio artifact, not a launch page)

### Prefer
- Specific thresholds (150 tickers, 15 minutes, 500 rows)
- Named alternatives (ClickHouse, DuckDB, not "other options")
- Explicit tradeoffs ("steeper learning curve, but...")
- Firm phrasing ("made X visible" not "identified X")

---

## Technical Sections

Bias toward decisions, not tools.

Bad:
> Next.js 15 with App Router and Server Components

Good:
> Server Components kept large metric payloads off the client

One clause of *why* is worth more than the tool name.

---

## What Not to Add

- Marketing fluff
- Features you didn't mention in decisions
- "Future work" sections
- Generic industry problem statements
- Praise for your own work

---

## Final Check

Before publishing, ask:

1. Does the opening tell me what broke?
2. Does each decision name what I rejected?
3. Are my outcomes behavioral, not feature counts?
4. Are images anchored to their context?
5. Would a hiring manager keep reading after paragraph one?

If a sentence restates its heading, delete it.
