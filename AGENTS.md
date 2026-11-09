# Working on the Elabora site

Read `docs/maintenance.md` for Astro, Cloudflare, language routing, schema snapshots, documentation snapshots, the home's media and the comparison pages. `README.md` and `CONTRIBUTING.md` are written for visitors and contributors: keep them short, and put what maintainers need in `docs/maintenance.md`. Run `pnpm run check`, `pnpm test`, `pnpm run build` and `pnpm run links` for changes.

In code (`src/`, `scripts/`), reuse a function that already does the job before writing one, and remove the code a change leaves dead. Guard at the trust boundaries only: what the build reads from the network (the public releases feed), content files, the environment; inside, trust the types. A test fails when the behavior it covers breaks: write none that repeats another test's case or pins the implementation.

This repository is meant to be public. Commit no key, token, account ID or personal e-mail address, and name a key only by its variable or its path (`~/.config/elabora/…`).

Release notes are generated from the public assets repository by `pnpm run releases:sync`. Never edit `src/data/releases.json` by hand or copy drafts from the private app into it. `pnpm run releases:check` validates the committed snapshot. The workflow's `version` input (a `workflow_dispatch` from the app's release) only names what to expect; the workflow reads the known public repository itself. `pnpm run deploy` syncs first; a build made with `ELABORA_RELEASES_FILE` is refused by `releases:guard`. Highlights: 1 to 5 bullets of a few words (60 characters, no final period), the app's rule, with the shared fixtures in `scripts/fixtures/release-highlights.json`.

The product release is prepared in the app checkout. Features and highlights have English and French text; technical details and fixes can fall back to English, with `lang="en"`. Small releases marked `announce=false` and pre-releases have detailed version pages but stay out of the main stable feed. Keep the language selector on the same release page.

For local preview before publication, `ELABORA_RELEASES_FILE` can name an absolute fixture/history file. Never deploy that preview data or call it a published release. Site release deployment requires its Cloudflare secret and account variable; report missing names without printing values. Do not silently drop old published releases on sync failures.

A comparison or fix page can have research notes in `research/pages/<slug>.md` (see `docs/maintenance.md` › Comparison pages). Sources with the day you read them, and facts that serve no reader on the page, go there.
