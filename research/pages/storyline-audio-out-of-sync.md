# Notes: Storyline audio out of sync

Pages: `src/content/compare/en/storyline-audio.md` and `src/content/compare/fr/storyline-audio.md` (`/fr/comparatif/storyline-audio-decale/`). Researched on 6 November 2026; aligned on 9 November 2026.

## Sources, with the day they were read (6 Nov 2026)

- Audio Desync / Loading (27 Mar 2026): https://community.articulate.com/discussions/discuss/audio-desync--loading/1255508
- Major Storyline Audio Playback Issues, 61 replies (April 2026): https://community.articulate.com/discussions/discuss/major-storyline-audio-playback-issues/1256157
- Storyline 360 courses: audio not playing or very delayed in published output (January 2018, the oldest thread read): https://community.articulate.com/discussions/discuss/storyline-360-courses---audio-not-playing-or-very-delayed-in-published-output/850843
- Audio/Animation Out of Sync When Published (cue points from an audio editor): https://community.articulate.com/discussions/discuss/audioanimation-out-of-sync-when-published-storyline-360/933518
- Storyline 360 version history: Update 118 (build 3.118.37003.0, 27 May 2026), caption fixes in 3.99.34516.0, 3.100.34725.0 and 3.104.35448.0 (2025): https://www.articulatesupport.com/article/Articulate-Storyline-360-Version-History
- Articulate Localization update of 9 June 2026, with Storyline Update 119 (source-language audio timeline in an LMS).

## Left out of the page, and why (9 Nov 2026)

- **How long and how often.** « Since 2018 », the 61 replies of the April 2026 thread, and the oldest thread (January 2018). They showed us the problem is old and common; the reader already has it.
- **« As of 6 November 2026, we read no new report of drifting audio after June 2026, without searching every thread. »** A statement about our reading, with no action for the reader. The FAQ keeps the useful part: reports went on into June 2026.
- **« We have not yet published a measurement of it on a slow connection. »** An absence the reader can do nothing with. It stays below, to check.

## Elabora facts, checked in the code

- The narrated screen's clock is its audio: `packages/player/src/timeline.ts` in elabora-core. Word timing with a local model: manual, « Timing blocks to the voice » (unavailable on Intel Macs, as the install page says).

## To check again

- Measure Elabora's narrated screens on a slow connection, and publish it in the speed study if it helps.
- New Storyline builds about audio or captions.
