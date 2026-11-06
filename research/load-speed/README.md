# How fast do Storyline, Rise and Elabora courses load?

The script and the raw numbers behind the study [Why are Rise and Storyline courses slow to load?](https://elabora.studio/en/compare/rise-storyline-slow-to-load/) (in French: [Pourquoi les cours Rise et Storyline sont-ils lents à charger ?](https://elabora.studio/fr/comparatif/rise-storyline-lents-a-charger/)). The page gives the method, the results and what they leave out; this folder lets you check them and run them again.

## What is here

- `measure.ts`: opens each course in Chromium as a learner would, with an empty cache, and records what it transfers and when it shows. Two conditions: **throttled** (Lighthouse’s slow 4G profile and a processor slowed 4 times) and **unthrottled**.
- `courses.json`: the 10 courses measured on 6 November 2026, with their public addresses. The Storyline and Rise courses are published by their authors; we link to them and copy none of their files.
- `filmstrip.ts`: assembles the screenshots of `measure.ts --film` into one image, a row per course and a column per moment.
- `results/`: the raw data of 6 November 2026.
  - `live-2026-11-06.jsonl`: one line per run, the public addresses (3 runs per course and condition, after one uncounted load that wakes each CDN up).
  - `local-2026-11-06.jsonl`: the same packages served from one computer by `measure.ts`, to set the hosts aside (9 courses: one Storyline course was too large to copy).
  - `*-medians.json`: the median of the 3 runs for each course and condition.

The first line of each `.jsonl` file describes the series: Chromium’s version, the computer, the window, the throttling. The runs of 6 November were made by the first version of this script, written in French; their field names are translated here, their values are unchanged, and the path of the browser on that computer is left out.

## Running it

From the repository’s root, after `pnpm install`:

```bash
node research/load-speed/measure.ts --mode live --runs 3
```

- `--only sl-phishing,elb-coffee` measures some courses only.
- `--conditions throttled` keeps one condition.
- `--film` adds an uncounted run per course with a screenshot at 0.5, 1, 2, 3, 5, 8, 13 and 20 s; `node research/load-speed/filmstrip.ts <film folder> throttled film.png` assembles them.
- `--mode local --packages <dir>` serves the packages from `<dir>`, one folder per course id, its entry file named by `entry` in `courses.json`. Download the Storyline and Rise packages from their authors’ repositories; build an Elabora example from [elabora-core](https://github.com/aureliendossantos/elabora-core) with `elabora build examples/<example> --target web --progress none --navigation free --noindex --dir`.

Chromium is the one in `PLAYWRIGHT_CHROMIUM` if you set it, else Playwright’s own (`pnpm exec playwright install chromium`). Node.js 24 runs the TypeScript files as they are.

## Reading the numbers

- **Transferred**: the bytes received until the page is quiet (5 s without a long task and at most 2 requests in flight). It is the weight of the first screen and of what the tool loads ahead, not of the whole course.
- **FCP** and **LCP**: the first paint and the largest one, from the browser’s own API. LCP is the moment the main content shows.
- **Interactive** (TTI): as Lighthouse computes it, the start of the first quiet window of 5 s after the first paint.
- **TBT**: the sum of the long tasks beyond 50 ms between the first paint and TTI.
- **Main thread**: the time the page kept Chrome’s main thread busy (`TaskDuration`), until the end of the run.

On 6 November 2026 the computer was busy with other work (its load is noted on every run): read the main thread and TBT as orders of magnitude. The throttled times depend mostly on the network, and moved by 0.4 s at most from one run to the next.

## Licence

The code is under the repository’s Apache-2.0 licence, the data and this text under CC BY 4.0. To correct or add a measurement, open an issue or a pull request.
