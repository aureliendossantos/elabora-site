---
title: "Storyline slow to open or save a project: what helps"
seo: "Storyline 360 slow to open, freezing or slow to save: what helps (2026)"
description: "Storyline 360 projects that take minutes to open, freeze or save slowly: what Articulate recommends, the March 2026 update, and how Elabora keeps a course."
slug: storyline-slow-to-open
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Slow opening, freezes and slow saving come up regularly on E-Learning Heroes, with causes as varied as network drives, OneDrive and heavy media. What helps: a local disk, Update 114 or later, a repaired installation, the slides imported into a new project, lighter media. Elabora keeps a course as a folder of plain files, saves as you go, and points out the copies a sync service leaves."
published: 2026-11-06
updated: 2026-11-06
order: 22
faq:
  - q: Why does my Storyline project open so slowly?
    a: "The causes reported most often are a project on a network drive or in a synced folder (OneDrive, Dropbox), very heavy media, and a damaged project or installation. Articulate’s staff can’t always reproduce it, and ask for the .story file when the usual steps don’t help."
  - q: Did Articulate make Storyline faster to open?
    a: "Update 114 (build 3.114.36609.0, 31 March 2026) announced faster loading, saving and publishing thanks to a .NET platform update, without figures. Authors still reported slow opening in July 2026."
---

## The problem

Authors report it on E-Learning Heroes year after year: 14 threads from May 2017 to September 2026, 7 of them in 2025 and 2026. A project that took about a minute to open “now it takes upwards of 5-10 minutes” ([My Storyline is taking forever to open](https://community.articulate.com/discussions/discuss/my-storyline-is-taking-forever-to-open-is-there-a-fix/1256124), April 2026). A 92 MB project took about 43 seconds to save ([Storyline very slow to save](https://community.articulate.com/discussions/discuss/storyline-very-slow-to-save/1249222), February 2026). After a Windows update, Storyline stayed about 5 minutes on “Reading Preferences” for several authors ([32 replies](https://community.articulate.com/discussions/discuss/is-articulate-extremely-slow-after-the-latest-windows-update/1250709), February and March 2026).

The causes vary, and Articulate’s staff can’t always reproduce them: read the steps below in order.

## What helps in Storyline

1. **Work on a local disk.** Articulate’s staff advise it in thread after thread: never open a project from a network drive or a synced folder ([2023 answer](https://community.articulate.com/discussions/discuss/storyline-file-loading-too-long-and-cannot-open/872775)). Copy the project to your computer, work on it, then copy it back. In September 2026, an author’s 360° image editor opened again once the images left OneDrive.
2. **Update Storyline.** Update 114 (build 3.114.36609.0, 31 March 2026) brought faster loading, saving and publishing with a .NET platform update, according to Articulate. Storyline 360 has been 64-bit since version 3.82 (late 2023), for large, media-rich projects.
3. **Repair the installation.** Repair Storyline from the Articulate 360 desktop app, then open the project again.
4. **Import the slides into a new project.** When a project misbehaves, the staff suggest importing its slides into a new, empty project.
5. **Lighten the media.** Remove unused media and replace very large images. In one thread, a background built from many stacked images made objects lag 3 to 5 seconds behind the cursor ([Experiencing Lag time issues](https://community.articulate.com/discussions/discuss/experiencing-lag-time-issues-with-storyline-360/850757)).
6. **Ask Articulate’s support.** When none of this helps, the staff ask for the .story file or open a support case.

## How Elabora keeps a course

An Elabora course is a folder of plain files on your computer: `course.json`, one file per screen, and its media. Elabora saves as you go, file by file, and keeps a history of the course: there is no save button and no single project file to rewrite ([Tour of the app](/en/docs/tour/)).

When the folder is in OneDrive, Dropbox, iCloud or Google Drive, Elabora points out the conflict copies a sync service leaves next to a file, and the files still in the cloud that need downloading ([the checks](/en/docs/developers/diagnostics/)). We have not yet measured how long Elabora takes to open a course.
