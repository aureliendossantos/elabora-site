---
title: "Why are Rise and Storyline courses slow to load?"
seo: "Why are Rise and Storyline courses slow to load? 10 courses measured (2026)"
description: "We measured 10 published courses on slow 4G: Rise and Storyline took 14.5 to 24.3 s to show their content. Why, how to make a course lighter, our method and raw data."
slug: rise-storyline-slow-to-load
kind: study
tools: [rise, storyline]
checked: 2026-11-06
summary: "On a slow 4G connection, three public Storyline courses showed their main content after 14.6 to 24.3 s, three public Rise courses after 14.5 to 23.6 s, and four Elabora examples after 2.8 to 3.8 s. Most of the gap is a fixed cost of each tool: before the first picture, Rise loads 10 font files and 1.5 to 1.7 MB of JavaScript, Storyline 0.8 to 1.2 MB of JavaScript, Elabora 0.13 to 0.37 MB. On fast fibre, every course showed within 5 s."
published: 2026-11-06
updated: 2026-11-06
order: 10
faq:
  - q: How heavy is a Rise course?
    a: "The three Rise courses we measured transferred 3.8 to 4.2 MB before the learner could use them, of which 3.4 to 3.9 MB were JavaScript and fonts: almost the same for 58 blocks as for 84. On disk, the library of a Rise web export weighs about 11 MB, 8.5 MB of it JavaScript, even for a course of three blocks."
  - q: Is my LMS the cause, or the course?
    a: "Both can add time. We measured web exports opened directly, without an LMS. To tell them apart, upload the same package to SCORM Cloud: if it is slow there too, the course is the cause."
  - q: Are Elabora courses always lighter?
    a: "No. One of our four examples transferred 6.9 MB, more than the Rise courses, because it loads the pictures of its four screens at once. Its content still showed in 3.8 s on slow 4G."
---

## The short answer

We opened 10 public courses as a learner opens them, with an empty cache, on a slow 4G connection (Lighthouse’s profile) and a processor slowed 4 times: the situation of a learner on the move, in the countryside, or on a busy work laptop.

| Slow 4G, processor ×4 | Storyline (3 courses) | Rise (3 courses) | Elabora (4 examples) |
|---|---|---|---|
| Main content shown (LCP) | 14.6 to 24.3 s | 14.5 to 23.6 s | 2.8 to 3.8 s |
| JavaScript transferred | 0.84 to 1.21 MB | 1.45 to 1.67 MB | 0.13 to 0.37 MB |
| Everything transferred until the page is quiet | 2.8 to 10.7 MB | 3.8 to 4.2 MB | 0.3 to 6.9 MB |

Medians of 3 runs per course, measured from France on 6 November 2026. Served from one same computer, the same packages kept the same order.

## What the learner sees

[![What the learner sees at 0.5, 1, 2, 3, 5, 8, 13 and 20 s on slow 4G: the Storyline courses stay dark and the Rise courses white for 13 s or more, while the Elabora examples show their first screen at 3 s.](/media/compare/film-slow-4g-en.png)](/media/compare/film-slow-4g-en.png)

One row per course, named by its id in the raw data, one column per moment, on slow 4G; open the image to see it full size. The Storyline courses stay on a dark screen, then three dots, until 13 s or later; one is still dark at 20 s. The Rise courses stay on a white page, then show “Your content is loading” at 13 s and their first screen by 20 s. The Elabora examples show their first screen at 3 s. (Screenshots slow a page down a little: the figures come from runs without them.)

## Why: a fixed cost in each tool

Before the first picture, each tool loads its own player. That cost barely depends on the course.

| Course | JavaScript | Fonts | Stylesheets | Pictures and media |
|---|---|---|---|---|
| Storyline · [Phishing attempts](https://annaasedovskaya.github.io/Recognizing-phishing-attempts-Articulate-Storyline-360/story.html) | 841 KB | 63 KB | 326 KB | 663 KB |
| Storyline · [Career profile](https://id1smq.github.io/storyline-career-profile/story.html) | 1,045 KB | 63 KB | 852 KB | 8,643 KB |
| Storyline · [BCS cyber](https://adp3504.github.io/BCS-cyber/story.html) | 1,212 KB | 63 KB | 1,995 KB | 3,520 KB |
| Rise · [RTK GPS](https://ucdrones.github.io/library/trainings/RTK_GPS/index.html) | 1,668 KB | 1,945 KB | 133 KB | 76 KB |
| Rise · [Micro-purchases](https://www.section508.gov/assets/online-training/micro-purchases-and-section-508-requirements/index.html) | 1,453 KB | 2,301 KB | 119 KB | 119 KB |
| Rise · [Accessible meetings](https://www.section508.gov/assets/online-training/accessible-meetings/index.html) | 1,637 KB | 2,301 KB | 119 KB | 129 KB |
| Elabora · [Phishing by numbers](https://vitrine.elabora.page/phishing-by-numbers/) | 161 KB | 79 KB | 59 KB | 207 KB |
| Elabora · [Clockwork](https://vitrine.elabora.page/clockwork/) | 375 KB | 72 KB | 61 KB | — |
| Elabora · [Coffee in brief](https://vitrine.elabora.page/coffee-in-brief/) | 140 KB | 97 KB | 55 KB | 10 KB |
| Elabora · [Medieval charts](https://vitrine.elabora.page/medieval-charts/) | 132 KB | 93 KB | 70 KB | 6,625 KB |

Bytes transferred without throttling, compressed as the servers send them.

- **Rise** loads 10 font files (1.9 to 2.3 MB) and 1.5 to 1.7 MB of compressed JavaScript, 5 MB once decompressed, before it shows anything. On disk, the library of a Rise web export weighs about 11 MB, 8.5 MB of it JavaScript, even for a course of three blocks (seven exports of 2025 and 2026). Articulate’s staff acknowledge that “Rise 360 courses can take a few seconds to initialize” ([E-Learning Heroes, 6 November 2025](https://community.articulate.com/discussions/discuss/rise-loading-state-and-loading-time/1242543)).
- **Storyline** loads 0.8 to 1.2 MB of JavaScript (3 to 5 MB decompressed) and its stylesheets, then preloads the next slides’ pictures and media: its weight depends on the course. The library of a Storyline export weighs about 3 MB.
- **Elabora**’s player weighs 0.39 MB on disk; the examples load 0.13 to 0.37 MB of JavaScript.

## On a fast connection

Without throttling, on fibre, the gap narrows: every course showed its content within 5 s.

| Unthrottled | Storyline | Rise | Elabora |
|---|---|---|---|
| Main content shown (LCP) | 0.6 to 1.7 s | 1.1 to 4.4 s | 0.6 to 0.8 s |

The difference shows with a slow network or a modest processor, which is where many learners are.

## How to make a Rise course lighter

1. **Break long lessons with Continue blocks.** Authors report that Rise loads a whole lesson at once, and that a Continue block splits what loads first ([Optimize Rise 360 lesson size](https://community.articulate.com/discussions/discuss/optimize-rise-360-lesson-size/1240235), October 2025; an author’s finding, not Articulate’s documentation).
2. **Compress pictures and videos before you add them.** Export photos as JPEG or WebP at the size they show, and videos at a bitrate made for the web.
3. **Duplicate the course to drop old media.** A SCORM package can keep the media of earlier versions of a course; duplicating the course leaves them behind ([October 2026 thread](https://community.articulate.com/discussions/discuss/rise-courseware---lms-publishing---scorm-file-contains-media-from-snapshots/1274136)).
4. **Check the package after a translation.** One author’s package reached 741 MB after translating the course, and the LMS refused it ([August 2026 thread](https://community.articulate.com/discussions/discuss/scorm-file-upload---lms/1270122)).
5. **Test outside your LMS.** Upload the package to SCORM Cloud: if it loads quickly there, look at the LMS and its player.

The fonts and the JavaScript of Rise’s player stay: they are its fixed cost.

## How to make a Storyline course lighter

1. **Lighten the first slides’ media.** Storyline preloads the next slides: the Career profile course transferred 8.4 MB of pictures before the page was quiet.
2. **Lower the publishing quality.** In the publish settings, choose the video quality, the audio bitrate and the JPEG quality that fit your learners’ connection.
3. **Test outside your LMS**, in SCORM Cloud or Review 360, to see what comes from the LMS.

## Elabora’s limits in this study

- **Elabora is not always lighter in bytes.** Medieval charts transferred 6.9 MB, more than each Rise course, because it loads the pictures of its four screens at once. Its content still showed in 3.8 s.
- **One example keeps the processor busy.** Clockwork’s animated clock produced 1.5 s of long tasks on the slowed processor.
- **The Elabora examples are ours**, made to show what Elabora does, and the showcase was built a few days before the measurements.

## How we measured

- **The courses.** 10 public courses, open without an account: three Storyline 360 courses (versions 3.102 and 3.105, published between August 2025 and September 2026) and three Rise 360 courses (2026), published by their authors on GitHub Pages and section508.gov, and four Elabora examples on its showcase. Each is linked in the table above.
- **The browser.** Chromium 151 without a GPU, a 1,366 × 768 window, the user agent of desktop Chrome.
- **Throttled.** Lighthouse’s slow 4G profile, applied by Chrome to every request (562.5 ms round trip, 1,474.56 kbit/s down, 675 kbit/s up), and the processor slowed 4 times. **Unthrottled**: the computer’s fibre.
- **An empty cache** on every run, after one uncounted load that wakes each CDN up. Three runs per course and condition, course after course; we keep the median.
- **The end of a run**: 5 s without a long task and at most 2 requests in flight, as Lighthouse does, then 1 s more; at most 60 s unthrottled, 180 s throttled. The bytes count until then: the first screen and what the tool loads ahead, not the whole course.
- **The figures**: bytes transferred by type (Chrome’s DevTools protocol), FCP and LCP (the browser’s API), when the page can be used (TTI, as Lighthouse computes it), the total blocking time, the main thread’s busy time.
- **The computer**: an Apple M5 Mac with 10 cores and 16 GB, busy with other work during the runs (its load is noted on each run). Throttled times varied by 0.4 s at most from one run to the next: the network dominates.
- **A second series** served the same packages from that one computer (HTTP/1.1), to set the hosts aside. The order stayed the same and the bytes matched to 1%; Rise took longer there (22.7 to 27.7 s), because its 34 to 39 requests queue on HTTP/1.1.

What this study leaves out:

- **The courses differ in size**: 6 to 63 slides for Storyline, 58 to 84 blocks for Rise, 4 to 13 screens for Elabora. The first screen depends little on it, the total weight a lot. The same small course made in all three tools would settle it.
- **The media** follow each author’s choices.
- **The hosts differ** (GitHub Pages, section508.gov, Cloudflare); the local series removes that difference.
- **Throttling is simulated** by Chrome, not a real mobile network.
- **Web exports, not an LMS**: an LMS adds its own player to all three.

## The script and the raw numbers

The script, the list of courses and every run are public, in [research/load-speed](https://github.com/aureliendossantos/elabora-site/tree/main/research/load-speed) of this site’s repository. Run them again, on your courses too:

```bash
node research/load-speed/measure.ts --mode live --runs 3
```
