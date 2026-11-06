---
title: "Storyline audio out of sync: causes and fixes"
seo: "Storyline 360 audio out of sync or delayed: causes and fixes (2026)"
description: "Audio that starts late or drifts from animations in Storyline 360, in preview or in your LMS: the known causes, the fixes that work in 2026, and what Elabora does."
slug: storyline-audio-out-of-sync
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Since 2018, authors report Storyline audio that starts late or drifts from animations and captions, most often once the course is published. Update 118 (May 2026) fixed one cause. For the rest, update and republish, test the course outside your LMS, give the audio a head start or play it with a trigger. Elabora’s player times each narrated screen on its audio: when the audio waits, the screen waits."
published: 2026-11-06
updated: 2026-11-06
order: 20
faq:
  - q: Why is Storyline audio in time in preview but late in the LMS?
    a: "The published course loads its media over the network, and the LMS adds its own player. Test the same output in SCORM Cloud or Review 360: if the audio keeps time there, the delay comes from the LMS or the network, not from the slide."
  - q: Does Update 118 fix every audio sync problem?
    a: "It fixed slides with audio that didn’t always play as expected (build 3.118.37003.0, 27 May 2026), and authors confirmed it once they republished. Others still reported cases in June 2026, so keep the workarounds above at hand."
---

## The problem

On E-Learning Heroes, authors describe the same thing since 2018: “the audio takes a second to kick in”, animations and captions run ahead of the voice, and it gets worse in the published course or in the LMS ([Audio Desync / Loading](https://community.articulate.com/discussions/discuss/audio-desync--loading/1255508), 27 March 2026). In April 2026, [Major Storyline Audio Playback Issues](https://community.articulate.com/discussions/discuss/major-storyline-audio-playback-issues/1256157) gathered 61 replies: audio that didn’t start, played in part or overlapped, for some learners and not others. The oldest thread we read dates from [January 2018](https://community.articulate.com/discussions/discuss/storyline-360-courses---audio-not-playing-or-very-delayed-in-published-output/850843).

## The fixes in Storyline today

1. **Update Storyline, then republish.** Update 118 (build 3.118.37003.0, 27 May 2026) fixed slides with audio that didn’t always play as expected. A course published before keeps the old player until you publish it again. With Articulate Localization, its update of 9 June 2026, with Storyline Update 119, fixed a source-language audio timeline that changed once a multilingual course was in an LMS.
2. **Check the captions too.** Three 2025 builds fixed captions that loaded early, lagged or stacked (3.99.34516.0, 3.100.34725.0, 3.104.35448.0): an up-to-date Storyline matters here as well.
3. **Find out whether the LMS is the cause.** Upload the same output to SCORM Cloud, or share it in Review 360. If the audio keeps time there, look at the LMS: its player, its network, the learners’ connection.
4. **Give the audio a head start.** A workaround authors share: start the slide’s objects about 0.25 s after the audio on the timeline, so the sound has begun when they move.
5. **Play the audio with a trigger.** Instead of placing the audio on the timeline alone, a “Play media” trigger when the timeline starts lets the slide wait for the sound.
6. **Place cue points from the audio itself.** Find where the key words fall in an audio editor (Audacity, Descript), add cue points at those times, and align the animations to the cue points ([Audio/Animation Out of Sync When Published](https://community.articulate.com/discussions/discuss/audioanimation-out-of-sync-when-published-storyline-360/933518)).

As of 6 November 2026, we read no new report of drifting audio after June 2026, without searching every thread.

## What Elabora does differently

In Elabora, the clock of a narrated screen is its audio. The course’s player reads where the narration is at every frame: when the audio waits for the network, the screen waits; when the voice is slower or faster, the screen follows its pace. You anchor each block to a word, and Elabora times the words to the voice with a model on your computer, so a block comes in when the word is said ([Timing blocks to the voice](/en/docs/voices-and-narration/#timing-blocks-to-the-voice)). Events run when playback reaches them.

This is how the player is built, and its code is open: [the timeline of a narrated screen](https://github.com/aureliendossantos/elabora-core/blob/main/packages/player/src/timeline.ts). We have not yet published a measurement of it on a slow connection.
