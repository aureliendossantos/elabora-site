# Maintaining the site

How the site is built, published and kept up to date. This page is for the people and agents who maintain
elabora.studio; [`README.md`](../README.md) is the short version for everyone, and
[`CONTRIBUTING.md`](../CONTRIBUTING.md) shows how to propose a change.

Some steps read the other Elabora checkouts beside this one (`../elabora-core`, `../elabora-app`,
`../elabora-notes`). `elabora-core` is public; the app and the notes are private, so the steps that need them
(the home's media, the identity, the bench) are done by the maintainers.

The site: Astro (static output), French (reference) and English, hosted on Cloudflare as a Worker with static
assets. No analytics, no cookie.

## Commands

```bash
pnpm install
pnpm run dev        # Astro dev server
pnpm run build      # dist/ (also writes dist/_headers and verifies the copied schemas)
pnpm run check      # astro check + tsc: a key missing from src/i18n/en.ts fails here
pnpm run links      # every internal link of dist/ resolves, in both languages (after a build)
pnpm test           # schema publication checks, version preservation, the docs snapshot
pnpm run shoot      # screenshots → ../reports/site-elabora/captures (set PLAYWRIGHT_CHROMIUM if needed)
pnpm run check:home # the home under its real headers, both languages, desktop and phone (after a build)
pnpm run deploy     # releases:sync + build + releases:guard + wrangler deploy + live schema verification
```

## Format schemas

`https://elabora.studio/schemas/<version>/<name>.schema.json` serves the normative JSON Schemas from
`elabora-core`, including `defs.schema.json` and the nested `blocks/` files. They are static assets,
with `application/schema+json`, public CORS access and Cloudflare's default ETag/revalidation caching.
The core and the app still validate with bundled schemas, without network access.

`public/schemas/` is a checked-in, byte-for-byte snapshot from an explicitly chosen core commit.
`manifest.json` records the source commit and SHA-256 of every file, including the Apache-2.0 licence
copied into each version directory. Never edit these copies by hand. A normal site build needs neither
a core checkout nor GitHub access, so the core repository can remain private.

To publish a new format version from a local core checkout:

```bash
pnpm run schemas:sync ../elabora-core <commit-or-tag> <format-version>
pnpm test
pnpm run check
pnpm run build
pnpm run links
# Review and commit the new snapshot and manifest with the site changes, then:
pnpm run deploy
```

The sync command reads committed files with Git; it ignores uncommitted working-tree changes. Select
the commit/tag of the intended core release. It adds new format versions, retains old ones and refuses
to replace a published version with different bytes. Repeating the same import is harmless. The initial
0.1 snapshot is pinned to `8eabde64df956c2e71339d0eb8cb571175b96c45` (before the core's public release).

Both `pnpm run check` and `pnpm run build` check file hashes, canonical `$id` URLs and the complete `$ref`
graph, including JSON Pointer fragments. The build also checks its copied `dist/schemas/` output, and
deployment automatically verifies the live files (a file Cloudflare does not serve yet is tried again every 10 seconds,
for two minutes at most). `pnpm run schemas:verify http://localhost:8787`
can check a local Wrangler preview; without an argument it checks production. It verifies every published file's
bytes, HTTP status, MIME type, CORS and caching headers, and that a missing schema returns 404.

## Documentation: the app manual and the developer docs

`/fr/docs/` and `/en/docs/` are the **app manual**, written for this site: `src/content/manual/{fr,en}/<id>.md`
(the same file name in both languages pairs the pages; front matter: `title`, `description`, `slug` in that
language, `''` for the docs' home, `group` among `start`, `create`, `deliver`, `more`, and `order` in its group).
`/docs/` redirects to the visitor's language (the Worker).

`/en/docs/developers/` is the **developer documentation** of `elabora-core`, under « For developers », in English
only (no French alternate). It is the core's own Markdown, never edited here: `docs/index.md` is the map the
sidebar, the home's cards and `/llms.txt` are made of, `docs/decisions/Dnn.md` one page each, and `SPEC.md`,
`CONTRIBUTING.md` and `CHANGELOG.md` beside them. Like the schemas, builds read a checked-in snapshot,
`src/content/core-docs/`, with a `manifest.json` of its core commit and the SHA-256 of every file
(`pnpm run docs:check`, run by `build` and `check`, refuses any other bytes):

```bash
pnpm run docs:sync ../elabora-core <commit-or-tag>   # the core's docs as of that commit (committed files only)
ELABORA_CORE_DIR=../elabora-core pnpm run dev           # preview a core checkout's working tree instead
```

`src/lib/core-docs-links.ts` (a Markdown plugin) turns the core's relative links into the site's pages, or into
GitHub links at the snapshot's commit for code, and links `D24` and `docs/….md` named in the text; so the same
files read right on GitHub and here (Astro keeps rendered Markdown between builds: after changing the plugin,
delete `node_modules/.astro/data-store.json`). Each developer page is also served as its Markdown
(`/en/docs/developers/<id>.md`), and `/llms.txt` lists them for agents.

**Search**: Pagefind, run by `postbuild` over the docs' articles (`data-pagefind-body`), one index per language
in `dist/pagefind/`. It is the site's only script: the docs' pages and `/pagefind/*` get a CSP with
`script-src 'self' 'wasm-unsafe-eval'; connect-src 'self'` (`src/lib/security-headers.ts`); every other page keeps
the strict one. Code is highlighted by Prism, whose classes `src/styles/docs.css` colours (Shiki's inline styles
would break `style-src 'self'`), and `vite.build.assetsInlineLimit: 0` keeps scripts and images in files.

## Indexing: one switch

`INDEXING` in [`src/site.config.ts`](../src/site.config.ts). It is `true` since 15 October 2026: search engines may
index the site. Set to `false`, every response carries `X-Robots-Tag: noindex` (`dist/_headers`, generated at build,
and the Worker's redirects), every page has `<meta name="robots" content="noindex">`, and `robots.txt` still allows
crawling so that crawlers see the noindex; change the line, then `pnpm run deploy`. The sitemap: « Sitemap » below.

## The chat's models

`/app/chat-models.json` (`public/app/chat-models.json`) is the list of the models the app's chat may use with
OpenCode, in the order of preference: free models of OpenCode Zen whose provider neither keeps the author's texts
nor trains its models with them (the « Privacy » section of https://opencode.ai/docs/zen/; Zen hosts its models in the
United States and in Europe). The app reads it when a conversation starts (a plain GET, a short delay, at most every ten minutes), keeps
the last valid list on disk and falls back to the list it was built with (`OPENCODE_MODELS` in elabora-app's
`src/main/agents/acp/opencode.ts`) when offline or on an invalid answer. It offers, in this order, the listed
models OpenCode still offers; the first is the default. So a model Zen withdraws, or a new one, needs no release.

```json
{ "format": 1, "checked": "2026-11-02", "opencode": [{ "id": "opencode/deepseek-v4.1-flash-free", "name": "DeepSeek V4.1 Flash" }] }
```

`format` stays 1 (the app ignores another, and keeps its own list); `checked` is the date of the last check below;
`opencode` holds 1 to 20 models, each the id OpenCode gives it (`opencode/…`) and the short name the chat shows;
`"images": true` when it sees images (the « Input » modalities of its page on https://models.dev, provider OpenCode Zen):
the app's ✨ beside an image's empty text alternative asks only such a model, and shows no ✨ when none is listed.
The app refuses the whole list if one entry breaks these rules; `pnpm test` (`scripts/chat-models.test.mjs`)
applies the same ones. `/app/chat-models.json` is cached five minutes (`src/integrations/headers.ts`).

**Before adding a model, or at least once a month:**

1. On https://opencode.ai/docs/zen/, « Privacy »: its first sentences say the providers keep nothing (zero
   retention) and do not train their models with the data, then list exceptions (on 2 Nov 2026: Big Pickle, Flint
   40B Free, MiMo-V2.6-Flash Free, the Nemotron trials, Beam Free, the OpenAI, Anthropic and Mistral APIs). A model
   is added only if it is not among these exceptions; « Free models » must not say otherwise for it.
2. On https://opencode.ai/zen/v1/models: its id is there, as written in the list.
3. A model already listed whose terms changed is removed at once.
4. Order: the one that did best at the bench (`elabora-notes/reports/banc-modeles/rapport.md`) first.
5. Set `checked` to the day, run `pnpm test`, commit, deploy (`pnpm run deploy`). When the change is lasting,
   change the app's built-in list the same way, for its next release.

## Keeping the privacy policy

`src/content/legal/{fr,en}/confidentialite.md` and `privacy.md` give general guarantees and the scope of what third parties
receive (what, what for, when), not each third party and its terms: what changes often (a model list, a provider's hosting,
its retention periods, its domain names) would make the policy unpredictable. What the law asks stays (article 13 GDPR:
controller, purposes, legal bases, recipients by category, transfers and their safeguards, retention of the data Elabora keeps
itself, rights). Only Cloudflare, the stable processor of the hosting, is named. Change both languages together, set `updated`,
and do not write a promise the app does not keep (check `elabora-app`: the policy says what the code does).

What the policy no longer names, and where to check it when it changes (on 2 Nov 2026):

| Detail | Where it is now | Check |
|---|---|---|
| E-mail sending: Resend (Plus Five Five, Inc., 2261 Market Street #5039, San Francisco, CA 94114, United States; also named in the legal notice until 2 Nov 2026, where only the host, Cloudflare, is now required by the LCEN), region eu-west-1 (Ireland), keeps address, subject, content (with the sign-in code) and delivery state 30 days on every plan (checked 4 Nov 2026 on resend.com/pricing and its quotas page), suppression list, tracking off | « E-mails, providers and transfers » says 30 days | If the provider or its retention changes, update the sentence and section 9; DPF/SCC and the data processing agreement go with the provider |
| The chat's AI service: OpenCode Zen (`opencode.ai`), no account or key, hosted in the US and Europe, `models.opencode.ai` for its model list | « The desktop app »: guarantees and the `Free AI service` row | « The chat's models » above (models, Zen's Privacy section). The policy's promise is the model rule: providers keep nothing, train nothing |
| The OpenCode program, downloaded from GitHub (`anomalyco/opencode`) at the first message, and again when a version of Elabora asks for another | « Public software and model repositories » row | Where `downloads.ts` fetches it from |
| Voice, alignment and transcription models, from Hugging Face; updates when automatic updates are on | Same row | Same |
| Updates: GitHub, public repository `elabora-releases`, every four hours | « The public repository of Elabora's versions » row | The updater's source in `elabora-app` |
| Mailbox of the publisher's e-mail: provider not named, « European » | Section 7 | Contract GDPR-compliant; identity on request |
| The database's backup copy: D1 Time Travel, 7 days on the Workers Free plan, 30 on Workers Paid (checked 4 Nov 2026, developers.cloudflare.com/d1/reference/time-travel/); elabora-cloud is on the free plan | Section 7 and section 9 say « 7 days », D1 not named | If the account moves to a paid plan, the period becomes 30 days: change both sections and both languages |
| Cloudflare's data processing agreement, DPF, SCC | Section 7 | Still true if the DPF is invalidated: SCC remain |

The app's real safeguards behind the guarantees of section 8, to check when the app changes: (1) nothing goes to OpenCode before the
author has picked it in « Votre IA préférée » (a row that says it keeps nothing) and sent a request, or clicked the ✨ beside an
empty field (a short task: `elabora-app` `src/main/agents/tasks.ts`) and, the first time when OpenCode is not their AI, said yes
to the line that says where it goes; (2) `opencodeConfig`
(`src/main/agents/acp/opencode.ts`): web search off, a read outside the module and Elabora's paid tools ask, web pages are
read with no question; (3) ElevenLabs only on a gesture, with a card showing the share of the quota for the agent's. There is
**no** confirmation at the first use of the chat or of web pages: the policy claims one only for a gesture that sends a text to
an AI the author has not chosen (the short tasks).

## Comparison pages

`/en/compare/` and `/fr/comparatif/` compare Elabora with other authoring tools: an overview, one page per tool
(« Elabora vs Storyline 360 »…) and « A Storyline alternative for Mac ». They are made for search engines and AI agents:
the sitemap, `/llms.txt` and their links to each other lead to them, and **no other page links to them** (the home, the
header, the footer: `pnpm run links` fails otherwise). They are signed by Aurélien Dos Santos, who reads each one.

- **The facts**: `src/data/comparisons/<tool>.json`, one file per tool (`elabora.json` for Elabora, with its **gaps**,
  shown on every page). Each fact: `en`, `fr`, its official `source`, the day it was `checked`. The tables are made
  of them; a page that names a missing tool or fact stops the build. `src/lib/comparisons-rules.ts` holds the rules and
  the validity: 60 days for a price, 120 for a platform or a feature, 180 for a format. `pnpm test`
  (`scripts/comparisons.test.mjs`) fails when a fact is past its validity, and lists those within 30 days of it.
  The release workflow runs it with `COMPARISONS_STALE=warn`: a release is never held back by a fact; the pages show
  each fact’s date.
- **The text**: `src/content/compare/{en,fr}/<page>.md`, the same file name in both languages. The front matter has the
  title, the short answer (`summary`), the tool (`tool`, one against Elabora) or the table (`table`: tools and facts),
  who should choose which (`chooseOther`, `chooseElabora`), the questions (`faq`, also as structured data) and the dates.
  The body is the page’s own text: « What X does better », « Where Elabora differs ». It never repeats a price.
  `src/components/compare/ComparePage.astro` adds the table, the limits, the corrections (PostHog’s way: write to us,
  or a pull request on the tool’s facts file) and the other comparisons. French follows French typography (no-break
  space before `? ! : ; » %`, `’`), as `typo.mjs` does for the app’s pages.
- **The monthly watch**: [`src/data/comparisons/WATCH.md`](../src/data/comparisons/WATCH.md) is the whole instruction, for
  any AI model: « Follow src/data/comparisons/WATCH.md ». It reads every source again and proposes a branch with the
  proof; a supervisor checks it, the founder reads the prose and merges. Nothing goes live on its own.
- **A new tool**: its facts file, its two pages (one text per page, with what it does better), then `pnpm test`,
  `pnpm run check`, `pnpm run build`, `pnpm run links`.

## Search Console

`pnpm run search-console` prints what people search before they reach the site: the top queries and pages of Google
Search Console, with clicks, impressions, click-through rate and average position over a period (28 days by default;
`--days 90`, `--start … --end …`, `--by query|page|country|device`, `--filter /compare/`, `--limit 50`, `--json`). It is
read-only and has no dependency: `scripts/search-console.mjs` signs a JWT with the key of a service account that has read
access to the property (`node:crypto`), then calls `searchAnalytics.query`.

- The key: `SEARCH_CONSOLE_KEY`, by default `~/.config/elabora/search-console.json` (0600). Never print it, copy it or
  commit it. The property: `SEARCH_CONSOLE_SITE`, by default `sc-domain:elabora.studio`.
- Once per Google Cloud project, the Google Search Console API must be enabled for the service account’s project; the
  service account’s e-mail must be a user of the property (Search Console › Settings › Users and permissions; « Restricted »
  is enough). The script says which one is missing; `--sites` prints that e-mail and the properties it can read; `--sitemaps`, the sitemaps Google read and when.
- `robots.txt` names the sitemap, so Google and Bing find it on their own; Search Console › Sitemaps shows what Google
  read of it.

What to do with it: look at the queries that bring impressions to `/en/compare/` and `/fr/comparatif/` once a month
(the watch, `src/data/comparisons/WATCH.md`), and write the comparison buyers search for when it is missing.

## Sitemap

`dist/sitemap.xml` is written at build (`src/integrations/sitemap.ts`) from the built pages: each page’s canonical
address with its language alternates, the 404 page, the demos and noindex pages left out. `robots.txt` names it, and
`pnpm run links` checks that it lists every page and only pages.

## Release notes

`/fr/changelog/` and `/en/changelog/` show announced stable releases. Each published version also has
`/<lang>/changelog/<version>/`, including minor releases omitted from the main feed. Feature text and
highlights are bilingual; French pages mark untranslated technical/fix entries as English. `/releases.json`
exposes the same published records.

`pnpm run releases:sync` reads completed releases from the public `aureliendossantos/elabora-releases`,
without a token (`GH_TOKEN` or `GITHUB_TOKEN`, when set, only raises GitHub's rate limit), verifies their
`release.json` checksums/schema, and replaces `src/data/releases.json` only when every record passes.
`pnpm run deploy` runs it first, so a local deploy never drops a changelog page the bot added.
`pnpm run releases:check` validates the committed snapshot. Never hand-edit it or import app drafts there.
For a local preview only, point `ELABORA_RELEASES_FILE` at an absolute fixture/history JSON file. Such a build
cannot be deployed: `pnpm run releases:guard` (run by `pnpm run deploy`, by the workflow, and by wrangler's
`build.command` before any `wrangler deploy`) refuses it while the variable is set or when `dist/releases.json`
is not the committed snapshot.

The home's download buttons (Windows x64, macOS Apple Silicon, macOS Intel) come from the newest public stable
record (`latestRelease`, `downloads` in `src/lib/releases.ts`): installer names hold the version, so there is no
stable « latest » address. A record's `signed` says which builds are unsigned; for those the home adds the steps
that open them (SmartScreen, « Ouvrir quand même »). Before the first release the home still says « Bientôt
disponible ». Highlights follow the app's rule, 1 to 5 bullets of a few words (`HIGHLIGHTS`), tested against the same
`scripts/fixtures/release-highlights.json` as the app: change both copies together.

`.github/workflows/releases.yml` runs on `workflow_dispatch`, started by the app's « Release app » workflow with
the published `version` (a token that has only Actions write on this repository) or by hand: sync, check that
the version is there, check, test, build, persist the snapshot, then deploy. The input cannot supply release
text or select another repository. Configure secret `CLOUDFLARE_API_TOKEN` and variable `CLOUDFLARE_ACCOUNT_ID`.
The workflow commits its generated snapshot to `main` with its own `GITHUB_TOKEN`.

## Structure

- `src/i18n/` : typed dictionaries (`fr.ts` is the reference, `en.ts` is typed against it) and the **slug table**
  `LEGAL_PAGES` (`mentions-legales`↔`legal-notice`, `confidentialite`↔`privacy`, `conditions`↔`terms`,
  `signalement`↔`reporting`), which keeps the language selector on the same page.
- `src/pages/[lang]/index.astro` (landing), `[lang]/[slug].astro` (legal pages from the `legal` content collection).
- `src/pages/[lang]/docs/` (the manual), `src/pages/en/docs/developers/` (the developer docs and their Markdown),
  `src/pages/llms.txt.ts`; `src/layouts/Docs.astro`, `src/components/docs/`, `src/lib/docs-nav.ts`, `src/lib/core-docs.ts`.
- `src/content/legal/{fr,en}/*.md` : the legal pages (schema: title, lang, slug, updated). Imported from
  `reports/pages-legales/` by `scripts/import-legal.mjs` (see it for what is stripped); edit the Markdown here from now on.
- The home: `src/pages/[lang]/index.astro` puts the sections of `src/components/home/` one under the other (the film,
  the samples, the lock, the dialogue, the templates, the four steps, the trust, the end); their behaviour is in
  `src/scripts/` (one file per section, `reveal.ts` for the appearances, `loop.ts` for the animations, `sheet.ts` for
  the sheets). The samples and their requests are in `src/data/exemples.ts`, the lock's settings in `src/data/ecluse.ts`,
  the templates in `src/data/modeles.json`. The samples open from `https://vitrine.elabora.page/<id>/`, a bilingual one
  with `?lang=` (the player's starting language).
- `src/demos/ecluse/` and `src/pages/demo/ecluse.astro` : the lock of the 3D section, a copy of the core's
  `canal-locks` free object with a small host (`hote.ts`); framed by the home at `/demo/ecluse/`.
  `public/demo/phishing/` : the dialogue, `phishing-by-numbers` built for the web in French and English, opened in
  the page's language (`?lang=`) and played full frame (`public/demo/plein-cadre.css`). Both are framed by the site only and never indexed.
- `scripts/home-media.mjs` : gathers the home's media from the core, the app and the captures (pictures of the
  samples, their recordings, the template previews, four screens of the app, the dialogue's build). Run it again
  when a sample, a template or an app screen changes; it writes `public/media/`, `public/demo/phishing/` and
  `src/data/modeles.json`.
- `src/lib/security-headers.ts`, `src/integrations/headers.ts` : the security headers and the `_headers` file. The
  default policy runs no script; the docs, the home and the demos each have their own (`DOCS_CSP`, `HOME_CSP`,
  `demoCsp`). The dialogue's player styles its scenes inline: `/demo/phishing/*` alone allows inline styles.
- `worker/index.ts` : answers `/` (302 to `/fr/` or `/en/` from `Accept-Language`, `Vary: Accept-Language`) and the
  unprefixed legal addresses the app and the review page already link to (`/confidentialite`, `/conditions`, …).
  Everything else is served from the assets. `worker/www.ts` : `www.elabora.studio` → apex, 301.
- `wrangler.jsonc` (`elabora-site`, route `elabora.studio/*`), `wrangler.www.jsonc` (`elabora-site-www`, route
  `www.elabora.studio/*`). Routes, not custom domains: the zone's proxied records already exist, no DNS change.
- `public/downloads/` : files the manual offers. `elabora.mcpb`, Elabora's extension for Claude (desktop), is built
  in elabora-core by `pnpm run mcpb` (`dist/elabora.mcpb`, from `plugins/claude-desktop/`): copy it here when its
  `version` changes. `coffee-in-brief.elabora` is that sample exported by `elabora export` from a copy of
  `examples/coffee-in-brief` (older formats are read migrated, so it needs refreshing only for a new sample).
- `public/.well-known/security.txt` : RFC 9116 file (renew `Expires` before 2027-10-13).
- `public/schemas/`, `scripts/schemas.mjs` : versioned public format schemas and their pinned source manifest.
- `public/app/chat-models.json` : the chat's models, read by the app (« The chat's models »).
- `src/data/comparisons/`, `src/content/compare/`, `src/components/compare/`, `src/pages/{en/compare,fr/comparatif}/` :
  the comparison pages (« Comparison pages »).

## Keeping the home up to date

The home shows real things from the other checkouts: the core's samples and templates, the app's screens and
template previews, the identity's recordings. Each change there has one way in:

| What changed | Where | Then |
| --- | --- | --- |
| A sample module (`elabora-core/examples/<id>`) | `SAMPLES` (its best screen), `BILINGUAL`, `VIDEOS` in `scripts/home-media.mjs`; its card and request in `src/data/exemples.ts` (`EXEMPLES`, order in `RAIL`) | delete its captures (`ex-<id>`, `ex-en-<id>` in the `--shots` folder) and run `home-media.mjs`; republish it on the vitrine (`elabora-cloud`: `pnpm run publish examples/<id> --space vitrine --name <id>`, every approved language goes with it) |
| A recording of the hero's film (a sample shown in motion) | `VIDEOS` in `scripts/home-media.mjs`, `video: true` in `src/data/exemples.ts` (the film's order is `EXEMPLES`'s) | film it with `elabora-notes/reports/accueil-retouches-6-nov/filmer-accueil.ts` (one image at a time on a held clock: no stutter, whatever the machine's load; check it with that folder's `saccades` measure), then `node scripts/home-media.mjs --videos` (the videos and their posters alone) |
| `phishing-by-numbers` (the dialogue) | the screen `practice`, named in `src/scripts/dialogue.ts` and `home-media.mjs` | run `home-media.mjs`: it rebuilds `public/demo/phishing/` and the two posters |
| A template (`elabora-core/templates/`) | `TEMPLATES` and its 14 `SCREENS` in `home-media.mjs`; names and texts come from the core's `templates/index.json` | the app's `pnpm run templates` first (the animated previews), then `home-media.mjs` |
| An app screen | `APP` in `home-media.mjs` (the Lin captures of `elabora-app/systeme-design/captures`, grown to 16:10) | run `home-media.mjs` |
| The lock (`canal-locks` free object) | `src/demos/ecluse/`: the object's files copied with two patches (`object.js` writes no style, `--cl-right`; `ui.js` places the pause button by it), `objet.css`, `textes.json`, `DEFAUTS` in `hote.ts`; the inspector's rows in `LockDemo.astro`, its starting settings in `src/data/ecluse.ts` | copy the new files over, keep the patches, `pnpm run check:home` |
| A release | nothing: the download links and the version come from `src/data/releases.json` | — |
| A text | `src/i18n/fr.ts` (the reference) and `en.ts` | — |
| What visitors search for (once a month) | `pnpm run search-console` (« Search Console ») | write the page or the words that answer it |
| A point of comparison (the trust section: free, your files in an open format, the AI of your choice, the beta line) | `home.trust` in `src/i18n/fr.ts` and `en.ts` | the same fact in `src/data/comparisons/elabora.json` (« Comparison pages »); the home never links to the comparisons |

Then `pnpm run check`, `pnpm test`, `pnpm run build`, `pnpm run links` and `pnpm run check:home`, and look at the captures
it writes (`../reports/site-elabora/accueil/`). `home-media.mjs` needs the sibling checkouts on the versions to show
(the core's player goes into `public/demo/phishing/`). It, `check:home` and `shoot` need the Chromium of the installed
Playwright: after Playwright moves, `pnpm exec playwright install chromium`, or `PLAYWRIGHT_CHROMIUM` set to a
`chrome-headless-shell` already in `~/Library/Caches/ms-playwright/`.

## Design

The brand of the identity sheets (`reports/elabora-identite/`): paper `#FBFAF7` and cream `#F3EEE4`, ink `#1E1D1B`,
violet `#5A43C9` for the actions. Titles in Newsreader (its italic for requests and quotations), text in Inter, both
self-hosted (`@fontsource-variable/*`, OFL) with metric-adjusted fallbacks. Light theme only.

- `src/styles/tokens.css` : every value (colours, type scale, spacing, radii, shadows, motion). Change a token here
  rather than a value in a component.
- `src/styles/base.css` (fonts, reset), `components.css` (button, header, footer, section, frame, appearance, sheet),
  `content.css` (legal pages, 404), `home.css` (the home's sections), `docs.css` and `changelog.css`.
- `src/components/brand/Logo.astro` : the written anchor and « elabora »; the anchor in three optical sizes
  (`src/assets/brand/ancre-{affiche,icone,favicon}.svg`, from `elabora-app/resources/icone`, in `currentColor`).
- `src/components/site/` : the header (also on the docs), the footer and the download button.
- `src/brand/presse.js` : the riso press and the agents' current, from the identity sheets; `src/brand/pas.ts` : the
  stepping agent of the film's relay and the steps.
