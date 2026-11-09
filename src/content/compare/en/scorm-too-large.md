---
title: "SCORM package too large for your LMS: how to make it smaller"
seo: "SCORM package too large for the LMS upload limit: how to reduce it in Storyline and Rise (2026)"
description: "SCORM package over your LMS upload limit? Find the largest files, compress media, lower Storyline’s publish quality, host long videos, or split the course."
slug: scorm-package-too-large
kind: fix
tools: [storyline, rise]
checked: 2026-11-08
summary: "Open the package as a ZIP to find its largest files, usually video, then audio and images. Compress them before import, lower Storyline’s publish quality, or host long videos on a video platform. If the package is still too large, split the course or ask the LMS administrator to raise the limit."
published: 2026-11-09
updated: 2026-11-09
order: 26
faq:
  - q: What is the maximum SCORM package size in an LMS?
    a: "It depends on the LMS and its settings. In the documentation we read in September and October 2026: Teach Up 100 MB, Docebo and Rise Up 1 GB, Cornerstone 2 GB, Workday 2 GB by default, 360Learning 4 GB once extracted. SuccessFactors uses a maximum its administrator sets."
  - q: Why is my Storyline package larger than the project?
    a: "The package holds each media file at the publish quality, plus the player. In a September 2026 thread, a 206 MB project gave a 246 MB package, and a 104 KB image weighed about 3 MB once published. The Quality settings in the Publish window and media compressed before import help most."
  - q: Why does my Rise package still contain media I removed?
    a: "An author reported in October 2026 that a Rise SCORM package kept media from earlier snapshots after several revisions. The workaround given: duplicate the course and publish the copy."
---

## The problem

The LMS refuses the upload, or learners wait for the course to load. Upload limits vary widely: 100 MB at Teach Up, 1 GB at Docebo and Rise Up, 2 GB at Cornerstone and at Workday by default, 4 GB once extracted at 360Learning ([our LMS profiles, with their sources](/en/docs/developers/lms-profiles/)). Ask the client for theirs before you start.

Video usually makes most of the weight, then audio and large images. Two things can add more than expected:

- **Publishing.** Storyline re-encodes media at its publish quality. One author’s 206 MB project gave a 246 MB package, over their LMS’s 230 MB limit, and a 104 KB image weighed about 3 MB once published ([September 2026](https://community.articulate.com/discussions/discuss/storyline-scorm-export-suddenly-much-larger-than-the-storyline-project/1270787)).
- **Translation.** A Rise course reached 741 MB after translation, and the LMS refused it ([August 2026](https://community.articulate.com/discussions/discuss/scorm-file-upload---lms/1270122)).

## What helps, from quickest to most thorough

1. **Find what weighs.** A SCORM package is a ZIP: open it and sort its files by size. Video usually comes first, then audio and large images.
2. **Compress media before import.** Re-encode each video at the size it plays in the slide, save photos as JPEG at the size they show, and turn animated GIFs into short videos. Files exported from Canva or Adobe, AI-generated audio and backgrounds are frequent culprits too ([Keeping SCORM package small](https://community.articulate.com/discussions/discuss/keeping-scorm-package-small-best-practices/1246142), December 2025).
3. **Lower Storyline’s publish quality.** In the Publish window, click **Quality**, then drag the **Static** video slider and the **JPG Quality** slider down: lower values make smaller files ([Best Practices for High Quality Images and Videos](https://www.articulatesupport.com/article/Storyline-360-Best-Practices-for-High-Quality-Images-and-Videos), updated 16 January 2026). Check the videos whose **Compression** is set to **None** on the Options tab: they go into the package as they are.
4. **Clear out old media in Rise.** A Rise package can keep media from earlier versions of the course. Duplicate the course and publish the copy ([SCORM file contains media from snapshots](https://community.articulate.com/discussions/discuss/rise-courseware---lms-publishing---scorm-file-contains-media-from-snapshots/1274136), October 2026).
5. **Host long videos on a video platform.** Put them on Vimeo, YouTube or your company’s platform, then embed them: the package holds a link in place of each file. Check that the platform opens on your learners’ network.
6. **Split the course.** Publish two or three modules, each under the limit, and group them in the LMS as one program.
7. **Ask the LMS administrator.** Some limits are settings: Workday raises its 2 GB default with **Increase Maximum Upload Size**, and SuccessFactors uses a maximum its administrator sets ([LMS profiles](/en/docs/developers/lms-profiles/)).

## Or let Elabora keep the package light

Elabora was designed to keep packages small, and to warn you before the LMS refuses one:

- **The weight before publishing.** In **Publish**, Elabora shows the course’s weight at the chosen media quality: **Standard**, **Lighter** or **Lightest**. A click lists its media, the heaviest first, each with its screen and its weight ([Publishing](/en/docs/publishing/#the-weight-of-media)).
- **The limit of the client’s LMS.** Once you choose the client’s LMS, Elabora checks the package against the size that LMS accepts. When the package is too heavy, Elabora says so with the figures, such as “The package size is 130.2 MB, too large for Teach Up (up to 100 MB)”, then gives the quality that fits, its estimated size, and the largest files. When even the lightest quality is too heavy, it suggests shortening the video or hosting it elsewhere. With no LMS chosen, it names the LMSs that would refuse the package.
- **Light copies, made for you.** For a photo saved as PNG, a video exported at too high a bitrate, or a HEIC or ProRes file, the package gets an optimized copy at every quality, and your files stay as they are. An animated image shows its weight in orange, because as a video it would weigh several times less.
- **Only the media the course uses.** The package holds the media the course shows; other files in the course folder stay out of it.
- **Any package, opened.** Your AI can open a SCORM package from Storyline or Rise in Elabora and list its five largest files ([Working with your AI](/en/docs/working-with-your-ai/)).
