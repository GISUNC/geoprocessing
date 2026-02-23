# Geoprocessing Techniques: Suggested Organization

This repository uses two entry points:

- `index.html`: student-friendly catalog (grouped by category and searchable).
- `presentation.html`: classroom presentation mode (starts with an intro slide, then ordered techniques with prev/next, swipe, keyboard arrows, fullscreen).

## Recommended structure for growth

1. Keep each technique as one standalone HTML (`*.html`) so students can open examples directly.
2. Register every technique once in `techniques.js` (title, file, category).
3. Use `presentation.html#technique-id` links to jump directly to a slide/technique.
4. If lessons are grouped by week/unit, add a `unit` field in `techniques.js` and render filters.

## Typical flow

- **In class:** open `presentation.html`, navigate with Next/Prev, arrows, or swipe on mobile, and use **Show application** to reveal a real-world use case for each technique.
- **For students:** share `index.html` so they can search and open specific techniques.


## PR creation troubleshooting

If creating a Pull Request fails, the most common cause is that no Git remote is configured in the local clone.

1. Check remotes:
   ```bash
   git remote -v
   ```
2. If empty, add your GitHub repository as `origin`:
   ```bash
   git remote add origin git@github.com:<your-user>/<your-repo>.git
   ```
   or
   ```bash
   git remote add origin https://github.com/<your-user>/<your-repo>.git
   ```
3. Push the current branch:
   ```bash
   git push -u origin work
   ```
4. Open/create the PR from that pushed branch on GitHub.

Tip: if your default branch is `main`, open PR `work -> main`.


## Technique grouping in the presentation

- **One-layer techniques:** Buffer Point, Buffer Line, Buffer Polygon, Buffer Multi-size, Dissolve, Dissolve Buffer, Convex Hull, Random Points.
- **Multi-layer techniques:** Intersect, Union, Difference, Symetric Difference.
