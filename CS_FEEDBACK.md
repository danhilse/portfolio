# Case Study Rewrite Guide

Use this document to rewrite the case study content for this project. The goal is to shift from "founder diary" voice to "evidence for a hiring loop."

---

## What's Wrong with the Current Case Studies

1. **Written for yourself, not for recruiters**
   - Too much "first attempt / second attempt / final solution" — reads like therapy journaling
   - Makes you sound uncertain even when outcomes are strong

2. **Too many "cute" metaphors and hot takes**
   - "Rank tables destroy the shape," "tool vs instrument," "Sometimes the pragmatic answer…"
   - Fine sparingly, but they're stacked

3. **Over-justifying normal decisions**
   - "TanStack Query + Context hybrid" and "absolute URLs" are implementation details, not design decisions
   - Keep 1–2 interesting ones; move the rest to bullets or cut entirely

4. **Self-referential design language**
   - "Working memory," "power user comfortable with higher cognitive load"
   - Better: "target user: analyst/investor; priority: fast exploration"

5. **Outcomes are buried under narrative**
   - The metrics are the best part — they should be impossible to miss

6. **Deep dives read like Medium posts**
   - Long, sequential, moralizing ("The lesson wasn't technical…")
   - Should be: one hard constraint, one approach, why it worked

---

## The Fix: Tighter Template

For each project, structure it as:

### Problem (2–3 sentences)
What was broken or missing? Why did this need to exist?

### Constraints (3 bullets)
- What made this hard?
- What couldn't you do?
- What had to be true?

### What I Built (1 sentence)
Single sentence describing the solution.

### Key Decisions (3 bullets)
Format: **Decision** → Why

Example:
- **Charts over rank tables**: preserve distribution and cluster structure instead of collapsing to "#1"
- **Client-side filtering**: fetch once, keep interactions sub-50ms

### Results (3–4 bullets with numbers)
- Concrete metrics
- Before/after comparisons
- Cost, speed, scale numbers

### Deep Dive (optional, 4–6 sentences max)
One hard constraint → one approach → why it worked.
No "first/second/final" narrative. No moralizing conclusions.

---

## Voice Guidelines

| Instead of... | Write... |
|---------------|----------|
| "I struggled with X, then learned Y" | "X required Y" |
| "The real lesson was..." | (cut entirely) |
| "First attempt / second attempt / final" | Just describe what you built |
| "Power user comfortable with cognitive load" | "Target user: analyst; priority: fast exploration" |
| "Sometimes the pragmatic answer is..." | (cut the philosophizing) |

**One-liner story is fine:**
> "I built this because I was doing it manually every day."

That's relatable without becoming a diary.

---

## What to Prioritize

Focus on **engineering signal**:
- Features that shipped
- Performance numbers (latency, cost, scale)
- Stack choices that mattered
- Constraints you navigated
- Wins with concrete metrics

**Cut:**
- Process narrative
- Emotional journey
- Hot takes and metaphors
- Over-explained implementation details

---

## Example Rewrite (Archipelago)

### Problem
Manual spreadsheet workflows made it hard to compare momentum across sectors once the universe got large (~150+ tickers). I needed cross-sectional views that preserved distribution and clustering across multiple metrics.

### Constraints
- Compare hundreds of tickers across multiple metrics in one view
- Keep interactions fast enough for exploratory analysis
- Support time-series reads + relational joins in one datastore

### What I Built
A cross-sectional market analysis tool with four interactive visualizations and saved "lenses" for repeatable analysis.

### Key Decisions
- **Charts over rank tables**: preserve distribution and cluster structure instead of collapsing everything into "#1"
- **TimescaleDB + continuous aggregates**: time-series performance without giving up relational joins
- **Client-side filtering**: fetch the dataset once (~500 × 17 metrics) and keep UI interactions sub-50ms

### Results
- Reduced interaction latency from 2–3s to <150ms (sub-50ms for local filtering)
- Compare 500+ stocks across 4 metrics in a single view
- Saved views removed ~15 min session setup overhead
- Made sector rotation patterns easier to spot than rank-based workflows

### Deep Dive
Outliers (e.g., extreme microcap moves) compressed the meaningful range in scatter views. Added IQR-based outlier detection with display modes (hide / highlight / outliers-only) so users can switch between "read the distribution" and "hunt anomalies" without rebuilding the view.

---

## Instructions for Claude Code

1. Read the current case study content in this project
2. Extract the facts: features, constraints, stack, metrics, decisions
3. Rewrite using the template above
4. Cut all diary narrative, hot takes, and over-justification
5. Make results impossible to miss
6. Keep deep dive to 4–6 sentences if included
