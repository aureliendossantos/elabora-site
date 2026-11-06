---
title: "Scrubbing the Storyline timeline: layers, triggers and what you see"
seo: "Storyline 360 timeline scrubbing without layers or triggers: what to do (2026)"
description: "Storyline 360 scrubs the timeline, but layers, triggers and full animations show only in preview. What Articulate documents, how to check a moment fast, and Elabora."
slug: storyline-timeline-scrubbing-layers-triggers
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Storyline 360 has scrubbed the timeline since July 2022. Articulate documents its limit: layers and triggers don’t show on the stage while you scrub, and entrance and exit animations show as simple fades. To check a moment, scrub for timing, play the timeline from the playhead, and preview the slide for the rest. In Elabora, the playhead shows the screen or the layer at that moment with its real effects."
published: 2026-11-06
updated: 2026-11-06
order: 21
faq:
  - q: Can you scrub the timeline in Storyline 360?
    a: "Yes, since Update 66 (July 2022). Drag the playhead and objects appear and disappear at their times. Layers, triggers and full animations need a preview of the slide."
  - q: Is there a preview from the playhead in Storyline?
    a: "The timeline plays from the playhead or over a selected range. As of 6 November 2026, the version history lists no preview of the whole slide from the playhead; Articulate answered an idea thread on 15 October 2026 that it would update authors if it released one."
---

## The problem

You want to see what learners see at 12 seconds: is the callout already there, has the layer opened, does the zoom land on the word? Authors have asked for this since a [2014 thread](https://community.articulate.com/discussions/discuss/scrubbing-the-timeline--actual-view-/834010) of 55 replies. In October 2026, one described the routine in an [idea thread](https://community.articulate.com/discussions/share-ideas/frame-by-frame-timeline-navigation-in-storyline-360/1244493): place the playhead just before the moment, play, watch, start again.

## What Storyline shows today

Articulate’s page [Timeline Scrubbing and Animation Editing](https://www.articulatesupport.com/article/Storyline-360-Timeline-Scrubbing-and-Animation-Editing) (updated 16 January 2026) says it plainly: “While scrubbing, you won’t see layers and triggers on the slide stage.” Entrance and exit animations show in a simple form, as fades; full animations and interactions need a preview of the slide.

## How to check a moment fast in Storyline

1. **Scrub for timing.** Drag the playhead to see when base-layer objects appear and leave. Ctrl+H shows only the objects at the playhead, which clears a busy slide.
2. **Play from the playhead.** Start timeline playback from where you are to see the motion. If it stops at once, a tiny range of the timeline may be selected (an author’s finding in [BUG: Can’t ‘Preview’ Storyline Timeline](https://community.articulate.com/discussions/discuss/bug-cant-preview-storyline-timeline-/1198572)).
3. **Preview the slide for layers and triggers.** Preview this slide only, rather than the whole project, to see layers, triggers and full animations. Since build 3.124.37782.0 (18 August 2026), a long timeline preview can be cancelled.
4. **Check a layer on its own timeline.** Select the layer to work on its objects and their timing, then preview the slide to see it open over the base layer.

## What Elabora does differently

On a narrated screen, Elabora’s **Timeline** tab has a playhead the canvas follows. Drag it, and the screen shows that moment as learners will see it, effects included: the canvas is drawn by the course’s own player, the one that plays it in the LMS. Show a layer, and its timeline starts at its opening, with the screen held under it ([A layer that speaks](/en/docs/voices-and-narration/#a-layer-that-speaks)).

Events stay for playback, as in Storyline: dragging the playhead shows the moment and runs no event. Play the timeline to see them happen.
