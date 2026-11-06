# elabora-site

**The source of [elabora.studio](https://elabora.studio), the website of Elabora**, an e-learning authoring tool
where AI agents are co-authors. The site is in French and English. It holds the home page, the app's manual,
the developer docs of [elabora-core](https://github.com/aureliendossantos/elabora-core), the release notes, the
comparison pages and the legal pages.

## Correct a fact or a page

Spotted something wrong or out of date? A short pull request is the quickest fix, and an e-mail to
[contact@elabora.studio](mailto:contact@elabora.studio) works just as well.

- **A fact on a comparison page** (a price, a platform, a format): each tool has its file in
  [`src/data/comparisons/`](src/data/comparisons/), for example `storyline.json`. Change the value in `en` and
  `fr`, put the vendor's official page in `source` and today's date in `checked`.
- **A page of the manual**: [`src/content/manual/fr/`](src/content/manual/fr/) and
  [`src/content/manual/en/`](src/content/manual/en/). The same file name holds the page in each language. One
  language is enough: we write the other.
- **The text of a comparison page**: [`src/content/compare/`](src/content/compare/).
- **A text of the home page**: [`src/i18n/fr.ts`](src/i18n/fr.ts) and [`src/i18n/en.ts`](src/i18n/en.ts).
- **The developer docs** come from elabora-core: propose the change
  [there](https://github.com/aureliendossantos/elabora-core).

[`CONTRIBUTING.md`](CONTRIBUTING.md) has the details, with the French typography the pages follow.

## Run the site

You need Node 24 and pnpm 11 (`npm install -g pnpm`).

```bash
git clone https://github.com/aureliendossantos/elabora-site.git
cd elabora-site
pnpm install
pnpm run dev
```

Then open http://localhost:4321/fr/ or http://localhost:4321/en/.

Before a pull request, run the four checks:

```bash
pnpm run check   # types, and every English text beside its French one
pnpm test        # the comparison facts' dates, the schemas, the release notes
pnpm run build   # the site in dist/
pnpm run links   # every link of dist/ leads to a page
```

## Inside

| Folder | What it holds |
| --- | --- |
| `src/pages/`, `src/components/`, `src/layouts/` | the pages and their parts (Astro) |
| `src/content/manual/` | the app's manual, in French and English |
| `src/content/compare/`, `src/data/comparisons/` | the comparison pages and the facts they show |
| `src/content/legal/` | the legal notice, the privacy policy, the terms |
| `src/content/core-docs/`, `public/schemas/` | copies of elabora-core's docs and format schemas, pinned to a commit |
| `src/i18n/` | the texts of the pages, French first |
| `src/styles/` | the design tokens and the styles |
| `worker/` | the small Cloudflare Worker that picks the visitor's language |

[`docs/maintenance.md`](docs/maintenance.md) explains how the site is published and kept up to date: the
schemas, the docs, the release notes, the home's media, the comparison watch.

## Licences

- **The code** is under the [Apache License 2.0](LICENSE), like elabora-core.
- **The format schemas and the developer docs** are copies of elabora-core, also under Apache-2.0.
- **The sample courses** shown on the home (pictures, videos, the dialogue, the canal lock) come from
  elabora-core's samples, whose original content is CC0 1.0.
- **Fonts, voices and sounds** keep their own licences, listed in [`NOTICE`](NOTICE).
- **The site's texts and its own pictures** (the manual, the comparisons, the home, the app's screenshots)
  are under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/): reuse them, and name Elabora with a link
  to the page.
- **The name Elabora, the anchor and the logotype** belong to Elabora. Use them to name Elabora and link to it.
