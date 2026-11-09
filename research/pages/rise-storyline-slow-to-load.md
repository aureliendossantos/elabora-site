# Notes: Why are Rise and Storyline courses slow to load?

Pages: `src/content/compare/en/rise-storyline-speed.md` and `src/content/compare/fr/rise-storyline-speed.md` (`/fr/comparatif/rise-storyline-lents-a-charger/`). Measured on 6 November 2026; aligned on 9 November 2026. The method, the script and every run are in `research/load-speed/` (its README).

## Left out of the page, and why (9 Nov 2026)

- **The questions of the shared module.** « In Storyline and Rise, the first answer was marked correct in questions 2 and 3, which changes nothing in the weight. » A difference with no effect on what the page measures; it raised a question (does it matter?) for nothing.
- **The command to run the script again** (`node research/load-speed/measure.ts --mode live --runs 3`). The page points to the README, which gives it with its options: commands stay in the developer documentation.

## Changed on 9 Nov 2026

- The summary now opens on the answer to its title (a fixed cost of each tool), then gives the times.
- Rise's Continue-block tip keeps its source and says it is an author's finding.
- Storyline's publishing quality links to Articulate's article on publish quality (updated 16 Jan 2026).

## To check again

- New Rise or Storyline releases that change the player's weight (Rise's history, 27 Oct 2026, improved the compression of learner progress data, not the player's weight).
