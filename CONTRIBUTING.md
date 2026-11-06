# Contributing to elabora-site

Thank you for helping keep elabora.studio right. This page shows how to correct a fact, a page or a text, and
how to check your change before a pull request. [`README.md`](README.md) shows how to run the site.

Prefer e-mail? Write to [contact@elabora.studio](mailto:contact@elabora.studio) with the page's address and
what should change. For a security issue, write to security@elabora.studio.

## A fact on a comparison page

Each tool has one file in [`src/data/comparisons/`](src/data/comparisons/). Each fact holds:

```json
"price": {
  "en": "1,749 USD per seat per year for teams. 14-day trial.",
  "fr": "1 749 $ par poste et par an pour les équipes. Essai de 14 jours.",
  "source": "https://www.example.com/pricing/",
  "checked": "2026-11-05"
}
```

1. Read the value on the vendor's own site: its pricing page, help centre, system requirements or release notes.
   Review sites and resellers often show an older plan or another currency.
2. Write the value as a plain fact, with figures. Give a price as the page shows it, with its currency and its
   period.
3. Put that page in `source` and the day you read it in `checked`.
4. Write the fact in both languages. If you write only one, say so in the pull request: we write the other.

`elabora.json` holds Elabora's own facts and its gaps, which every page shows. Its sources are Elabora's public
pages: the release notes and the manual.

A fact stays valid 60 days for a price, 120 for a platform or a feature and 180 for a format.
`pnpm test` lists the facts close to their date. [`WATCH.md`](src/data/comparisons/WATCH.md) is the monthly
check of every source, which any person or AI model can follow.

## A page of the manual or a comparison page

- The manual: `src/content/manual/fr/<page>.md` and `src/content/manual/en/<page>.md`. The same file name pairs
  the two languages. The front matter gives the `title`, the `description`, the `slug` in that language, the
  `group` (`start`, `create`, `deliver` or `more`) and the `order` in the group.
- The comparisons: `src/content/compare/fr/` and `src/content/compare/en/`. Prices live in the facts files, so a
  page's text names features, platforms and formats. Set the page's `updated` to today when its text changes.
- The texts of the home and of every page's frame: `src/i18n/fr.ts`, the reference, and `src/i18n/en.ts`.

Write short sentences that say what the reader can do. Use the app's own names for its buttons and menus, in
bold, as the other pages do.

## French typography

French texts put a no-break space (U+00A0) before `? ! : ; » %` and after `«`, use the apostrophe `’`, and a
narrow no-break space (U+202F) between thousands: `1 749 $`. `pnpm test` checks the comparison facts.

## Check your change

```bash
pnpm run check   # types, and every English text beside its French one
pnpm test        # the comparison facts' dates, the schemas, the release notes
pnpm run build   # the site in dist/
pnpm run links   # every link of dist/ leads to a page
```

Then open a pull request against `main`, with what changed and the sources you read. Aurélien Dos Santos reads
every change of text before it goes live.

## Parts that come from elsewhere

Some folders are copies, refreshed by a script: edit them at their source.

- `src/content/core-docs/` and `public/schemas/` come from
  [elabora-core](https://github.com/aureliendossantos/elabora-core), pinned to a commit.
- `src/data/releases.json` comes from the published releases of
  [elabora-releases](https://github.com/aureliendossantos/elabora-releases).
- `public/media/`, `public/demo/` and `src/data/modeles.json` are made from the sample courses, the templates and
  the app by the maintainers.

[`docs/maintenance.md`](docs/maintenance.md) explains each of them.
