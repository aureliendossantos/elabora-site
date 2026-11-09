---
title: "Storyline audio out of sync: causes and fixes"
seo: "Storyline 360 audio out of sync or delayed: causes and fixes (2026)"
description: "Storyline 360 audio starts late or drifts from animations in the LMS? Update and republish, test outside the LMS, give the audio a head start or play it with a trigger."
slug: storyline-audio-out-of-sync
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Update Storyline and republish the course: Update 118 (May 2026) fixed slides whose audio didn’t always play as expected. Then test the same output in SCORM Cloud to see whether the LMS is the cause. If the audio still lags, start the slide’s objects a quarter of a second after the audio, play the audio with a trigger, or place cue points where the key words fall."
published: 2026-11-06
updated: 2026-11-09
order: 20
faq:
  - q: Why is Storyline audio in time in preview but late in the LMS?
    a: "The published course loads its media over the network, and the LMS adds its own player. Test the same output in SCORM Cloud or Review 360: if the audio keeps time there, the delay comes from the LMS or the network."
  - q: Does Update 118 fix every audio sync problem?
    a: "It fixed slides with audio that didn’t always play as expected (build 3.118.37003.0, 27 May 2026), and authors confirmed it once they republished. Others still reported cases in June 2026, so keep the workarounds above at hand."
---

## The problem

The voice starts a beat late, and animations and captions run ahead of it. It often looks fine in preview and gets worse once the course is published or in the LMS ([Audio Desync / Loading](https://community.articulate.com/discussions/discuss/audio-desync--loading/1255508), March 2026). Some learners hear audio that doesn’t start, plays in part or overlaps, while others hear it fine ([Major Storyline Audio Playback Issues](https://community.articulate.com/discussions/discuss/major-storyline-audio-playback-issues/1256157), April 2026).

## The fixes in Storyline today

1. **Update Storyline, then republish.** Update 118 (build 3.118.37003.0, 27 May 2026) fixed slides whose audio didn’t always play as expected. A course published before keeps the old player until you publish it again. If you use Articulate Localization, its update of 9 June 2026 (with Storyline Update 119) fixed a source-language audio timeline that changed once a multilingual course reached the LMS.
2. **Check the captions too.** Three 2025 builds fixed captions that loaded early, lagged or stacked (3.99.34516.0, 3.100.34725.0, 3.104.35448.0), so an up-to-date Storyline helps here as well.
3. **Find out whether the LMS is the cause.** Upload the same output to SCORM Cloud, or share it in Review 360. If the audio keeps time there, look at the LMS: its player, its network, the learners’ connection.
4. **Give the audio a head start.** Authors share this workaround: on the timeline, start the slide’s objects about 0.25 s after the audio, so the sound has begun when they move.
5. **Play the audio with a trigger.** Add a **Play media** trigger when the timeline starts: the slide then waits for the sound.
6. **Place cue points from the audio itself.** Find where the key words fall in an audio editor (Audacity, Descript), add cue points at those times, and align the animations to the cue points ([Audio/Animation Out of Sync When Published](https://community.articulate.com/discussions/discuss/audioanimation-out-of-sync-when-published-storyline-360/933518)).

## Or let Elabora keep the screen on the voice

Elabora was designed around this problem: on a narrated screen, the audio is the clock.

- **The screen follows the voice.** The course’s player reads where the narration is at every frame. When the audio waits for the network, the screen waits; when the voice is slower or faster, the screen follows its pace.
- **Blocks come in on a word.** You anchor each block to a word, and Elabora times the words to the voice with a model on your computer, so a block comes in when the word is said ([Timing blocks to the voice](/en/docs/voices-and-narration/#timing-blocks-to-the-voice)).
- **Events run when playback reaches them.**

The player’s code is open: [the timeline of a narrated screen](https://github.com/aureliendossantos/elabora-core/blob/main/packages/player/src/timeline.ts).
