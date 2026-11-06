# Monthly watch of the comparison facts

You are keeping the facts of Elabora’s comparison pages true. Someone asked you to follow this file; do all of it,
then report. You may be any AI model: everything you need is here and in the repository.

**What this is.** `src/data/comparisons/<tool>.json` holds one file per tool: each fact has a value in English and
French, the official page that says it (`source`) and the day it was read there (`checked`). The pages
`/en/compare/` and `/fr/comparatif/` show them. A fact is valid 60 days for a price, 120 for a platform or a feature,
180 for a format (`src/lib/comparisons-rules.ts`); after that `pnpm test` fails. Your job is to read the sources
again, before that happens, and to propose the changes on a branch, with the proof.

## 1. Prepare

1. Work in a fresh branch from `main`: `git switch -c watch/YYYY-MM main` (the year and month of today).
2. `pnpm install`, then `pnpm test`. Note the facts it lists as past their validity or within 30 days of it.

## 2. Read every source again

For each file in `src/data/comparisons/` except `elabora.json`, and for each fact in it:

1. Open its `source` and find the value. Read the page yourself.
2. **Official pages only**: the vendor’s site, pricing page, help centre, system requirements, release notes or official
   blog. Never a comparison site, a review site, a reseller or a forum, even when it is easier to read: they often
   disagree with the vendor (a price in another currency, an old plan).
3. If the page moved, find the vendor’s new official page that says the same, and replace `source`.
4. If no official page can be read (403, a page built by script, a login), try the vendor’s help centre for the same
   fact. If that fails too, leave the fact unchanged and list it in your report as **not verified**. Never guess a
   value, and never move `checked` for a fact you did not read.
5. Then:
   - **Same value**: set `checked` to today.
   - **New value**: rewrite `en` and `fr` (plain facts, figures, no adjectives; prices exactly as shown, with the
     currency and the period), set `checked` to today, and keep a short excerpt of the page (25 words at most) for
     your report.
   - **Gone** (a plan or a feature the vendor no longer offers): remove the fact, and say so in your report.

Prices change most: read every price at every run. For the other facts, read at least those that `pnpm test` listed.

French values follow French typography: a no-break space (U+00A0) before `? ! : ; » %` and after `«`, the apostrophe
`’`, a narrow no-break space in thousands (`1 749 $`). `pnpm test` checks it.

## 3. Elabora’s own facts

`elabora.json` describes Elabora: its facts and its **gaps** (what it does not do yet, said on every page). Its
sources are Elabora’s public pages. Look for what Elabora shipped since the last run:

- the release notes, https://elabora.studio/en/changelog/;
- the developer docs’ « Getting started » (its line on delivery formats, and what it says comes later: LTI, dispatch),
  https://elabora.studio/en/docs/developers/getting-started/;
- the manual’s import page (the **Beta** tag), https://elabora.studio/en/docs/import-storyline-rise/;
- the manual’s pages on publishing, online reviews and working with your AI.

Update a fact that changed. When a gap is closed (a new delivery format, the import out of beta, co-authoring),
remove or rewrite that gap: every page shows the gaps from this file. Also list what Elabora now does better than a
fact on the pages suggests, so that the pages do not undersell it. A tool’s « strengths » on its page are only what it
does better than Elabora; what it does differently goes under « Where Elabora differs », with what Elabora does
instead.

## 3b. What people search for

If the key of the Search Console service account is on this computer (docs/maintenance.md, « Search Console »), run
`pnpm run search-console -- --days 30 --filter compare` and `pnpm run search-console -- --days 30 --by query`. In your
report, list the queries that bring impressions to the comparison pages, and the queries about a tool or a need that
no page answers yet (« storyline alternative for teams », « rise vs … »). Propose a page only in your report: the
founder decides. Never print or copy the key.

## 4. The pages’ text

The pages’ own text is in `src/content/compare/en/` and `src/content/compare/fr/`. It never repeats a price; it does
mention platforms, formats and features. For each fact you changed, search both folders for the tool’s name and the
old value. Propose the sentence that should change, in both languages, in the same branch. The founder reads every
change of prose before it goes live.

Set a page’s `updated` (in its front matter) to today when its text or its table changed.

## 5. Check and propose

1. Run `pnpm test`, `pnpm run check`, `pnpm run build` and `pnpm run links`. All must pass.
2. Commit on your branch, one commit: « Comparison facts, watch of YYYY-MM ».
3. Push the branch and open a pull request against `main` when you can; otherwise leave the branch and say so. Its
   description, or your report, lists:
   - each change: the fact (`storyline.price`), old value → new value, the source, the excerpt, the day;
   - the facts read with no change (a count per tool is enough);
   - the facts **not verified**, and why;
   - the prose changes you propose, and the pages they touch;
   - what Elabora shipped that changes its facts or its gaps.

## What never goes live on its own

- Never merge into `main`, never deploy (`pnpm run deploy`), never push to `main`.
- A supervisor agent checks your branch (the excerpts against the sources, the tests). The founder reads the prose
  and merges. A release of the app deploys `main`; until then, nothing you did is online.
- Add no tool and no page on your own. If a tool buyers compare appears, or one stops being sold, say so in your
  report.

## Corrections from vendors

Each page invites vendors to correct their facts, by e-mail or by a pull request on their file. When one arrives, check
it at the official source like any other fact. A sourced correction goes in, in the same way, through a branch.
