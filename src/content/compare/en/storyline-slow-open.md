---
title: "Storyline slow to open or save a project: what helps"
seo: "Storyline 360 slow to open, freezing or slow to save: what helps (2026)"
description: "Storyline 360 takes minutes to open a project, freezes or saves slowly? Work from a local disk, update to Update 114 or later, repair the installation, lighten the media."
slug: storyline-slow-to-open
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Copy the project to a local disk, outside OneDrive, Dropbox and network drives, and update Storyline: Articulate announced faster loading and saving with Update 114 (March 2026). If the project is still slow, repair the installation, import its slides into a new project, and lighten its heaviest media."
published: 2026-11-06
updated: 2026-11-09
order: 22
faq:
  - q: Why does my Storyline project open so slowly?
    a: "The causes reported most often are a project on a network drive or in a synced folder (OneDrive, Dropbox), very heavy media, and a damaged project or installation. Articulate’s staff can’t always reproduce it, and ask for the .story file when the usual steps don’t help."
  - q: Did Articulate make Storyline faster to open?
    a: "Update 114 (build 3.114.36609.0, 31 March 2026) announced faster loading, saving and publishing thanks to a .NET platform update, without figures. Authors still reported slow opening in July 2026."
---

## The problem

A project that opened in about a minute now takes 5 to 10 minutes ([My Storyline is taking forever to open](https://community.articulate.com/discussions/discuss/my-storyline-is-taking-forever-to-open-is-there-a-fix/1256124), April 2026). A 92 MB project takes about 43 seconds to save ([Storyline very slow to save](https://community.articulate.com/discussions/discuss/storyline-very-slow-to-save/1249222), February 2026). After a Windows update, Storyline can stay about 5 minutes on “Reading Preferences” ([Is Articulate extremely slow after the latest Windows update?](https://community.articulate.com/discussions/discuss/is-articulate-extremely-slow-after-the-latest-windows-update/1250709), February and March 2026).

The causes vary, and Articulate’s staff can’t always reproduce them: try the steps below in order.

## What helps in Storyline

1. **Work on a local disk.** Articulate’s staff advise it in thread after thread: open projects from your computer’s disk, outside network drives and synced folders ([2023 answer](https://community.articulate.com/discussions/discuss/storyline-file-loading-too-long-and-cannot-open/872775)). Copy the project to your computer, work on it, then copy it back.
2. **Update Storyline.** Update 114 (build 3.114.36609.0, 31 March 2026) brought faster loading, saving and publishing with a .NET platform update, according to Articulate.
3. **Repair the installation.** Repair Storyline from the Articulate 360 desktop app, then open the project again.
4. **Import the slides into a new project.** When a project misbehaves, Articulate’s staff suggest importing its slides into a new, empty project.
5. **Lighten the media.** Remove unused media and replace very large images. In one thread, a background built from many stacked images made objects lag 3 to 5 seconds behind the cursor ([Experiencing Lag time issues](https://community.articulate.com/discussions/discuss/experiencing-lag-time-issues-with-storyline-360/850757)).
6. **Ask Articulate’s support.** When none of this helps, the staff ask for the .story file or open a support case.

## Or keep your courses in Elabora

Elabora was designed so that opening and saving a course stays light:

- **A course is a folder of plain files**: `course.json`, one file per screen, and its media. Elabora saves as you go, file by file, so there is no save button and no single project file to rewrite ([A tour of the app](/en/docs/tour/)).
- **The library stays out of sync services.** Elabora keeps your courses in a folder that OneDrive, Dropbox and iCloud leave alone ([Library, archives and history](/en/docs/library/)).
- **Elabora points out what a sync service leaves behind.** When a course folder sits in OneDrive, Dropbox, iCloud or Google Drive, Elabora points out the conflict copies next to a file, and the files still in the cloud that need downloading ([the checks](/en/docs/developers/diagnostics/)).
