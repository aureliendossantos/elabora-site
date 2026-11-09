---
title: "Scrubbing the Storyline timeline: layers, triggers and what you see"
seo: "Storyline 360 timeline scrubbing without layers or triggers: what to do (2026)"
description: "Storyline 360 scrubs the timeline, but layers, triggers and full animations show only in preview. How to check a moment fast in Storyline, and how Elabora shows it."
slug: storyline-timeline-scrubbing-layers-triggers
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Drag the playhead to check timing on the base layer, play the timeline from the playhead to see the motion, and preview the slide alone to see layers, triggers and full animations. Articulate documents that layers and triggers stay off the stage while you scrub."
published: 2026-11-06
updated: 2026-11-09
order: 21
faq:
  - q: Can you scrub the timeline in Storyline 360?
    a: "Yes, since Update 66 (July 2022). Drag the playhead and objects appear and disappear at their times. Layers, triggers and full animations need a preview of the slide."
  - q: Is there a preview from the playhead in Storyline?
    a: "The timeline plays from the playhead or over a selected range. As of 6 November 2026, the version history lists no preview of the whole slide from the playhead; Articulate answered an idea thread on 15 October 2026 that it would update authors if it released one."
---

## The problem

You want to see what learners see at 12 seconds: is the callout already there, has the layer opened, does the zoom land on the word? Storyline 360 lets you scrub the timeline, but while you scrub, layers and triggers stay off the stage, and entrance and exit animations show as simple fades. Full animations and interactions appear in a preview of the slide ([Timeline Scrubbing and Animation Editing](https://www.articulatesupport.com/article/Storyline-360-Timeline-Scrubbing-and-Animation-Editing), updated 16 January 2026).

## How to check a moment fast in Storyline

1. **Scrub for timing.** Drag the playhead to see when base-layer objects appear and leave. Ctrl+H shows only the objects at the playhead, which clears a busy slide.
2. **Play from the playhead.** Start timeline playback from where you are to see the motion. If it stops at once, a tiny range of the timeline may be selected ([BUG: Can’t ‘Preview’ Storyline Timeline](https://community.articulate.com/discussions/discuss/bug-cant-preview-storyline-timeline-/1198572)).
3. **Preview the slide for layers and triggers.** Preview this slide alone to see layers, triggers and full animations. Since build 3.124.37782.0 (18 August 2026), you can cancel a long timeline preview.
4. **Check a layer on its own timeline.** Select the layer to work on its objects and their timing, then preview the slide to see it open over the base layer.

## Or let Elabora show you the moment

Elabora was designed so that the screen you edit is the screen learners see.

- **The canvas follows the playhead.** On a narrated screen, drag the playhead of the **Timeline** tab: the screen shows that moment as learners will see it, effects included. The course’s own player draws the canvas, the one that plays it in the LMS.
- **Layers have their own timeline.** Show a layer, and its timeline starts at its opening, with the screen held under it ([A layer that speaks](/en/docs/voices-and-narration/#a-layer-that-speaks)).
- **Events run when you play.** Dragging the playhead shows the moment and runs no event; play the timeline to see them happen.
