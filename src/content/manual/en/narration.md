---
title: Voices and narration
description: Write a screen’s narration, choose the voices, have them spoken on your computer or with ElevenLabs, and time blocks to the voice.
slug: voices-and-narration
group: create
order: 9
---

A screen’s narration is what the voice says, line by line. Each line is said by a speaker (“Voice-over” by default), and each speaker has its voice throughout the course. Three kinds of voices:

- local voices: free, made on your computer, offline, in French and English, on Apple silicon Macs or 64-bit Windows. They download once per language (354 MB for French, 126 MB for English);
- ElevenLabs voices: more expressive, with your own ElevenLabs account (see [settings](/en/docs/settings/));
- your recordings: a human voice, line by line.

A generated voice is marked as such and credited in the course’s credits (AI Act, article 50). The voice files go into the course, which plays without a key or a connection.

## Starting a screen’s narration

Under the canvas, the **Script** drawer shows the screen’s narration. If there is none yet:

- **Add narration** creates a first line to type;
- **Use the plan’s voice-over** shows instead when the course plan gives this screen an approved voice-over;
- **Import recordings…** turns each audio file into a line, in the order of their names; Elabora can transcribe what they say, on your computer.

The voice explains and the screen shows: Elabora’s checks flag on-screen text that repeats the narration, for the reasons given in [the learning science behind Elabora](/en/docs/learning-science/#narration-without-reading-the-screen-aloud).

Or ask your AI:

> Write the narration for screen 3: a calm voice-over, three lines at most, one per step.

<!-- capture: the Script drawer under the canvas, with three lines and the Listen button -->

## Writing lines

Each row of the script shows the speaker, the text, the length and a button to listen. **Add a line** adds one; **New line from an audio file…**, or an audio file dropped on the script, creates one whose text is what the recording says. Lines are grouped by step; **Split at a line…** starts a new step. **Listen**, at the top of the drawer, plays the whole screen.

## Choosing voices

The first time a line needs a voice, Elabora offers **Voices for your lines**: ElevenLabs voices (with your account) or local voices (with the size to download). **Later** puts the choice off.

To change a speaker’s voice, select one of their lines: its voice menu is in **Properties**. **Voice cast…** opens the **Voices** section of **Course settings**: one speaker per row, their voice (per language if the course is translated), a button to hear it, and **Add a speaker**.

## Having lines spoken

- With local voices, Elabora speaks the lines in the background, on your computer, as soon as a text changes. A line takes a few seconds.
- With ElevenLabs, nothing is spent without your click: lines wait for **Generate**. Under 1% of your monthly quota, generation starts right away; from 1%, Elabora shows the share of your quota and waits for your approval. When several voices answer each other, **In one block** has the exchange said in one go (more natural), **Line by line** lets you redo just one.

In a line’s **Properties**: listen to it, **Regenerate**, the **Take** (each generation is one, keep the best), the **Speed**, the **Pause before**, the **Stage directions** and the **Pronunciation**. **Import a recording…** replaces the generated voice with a human one; **Back to the generated voice** does the reverse. If Elabora suspects the voice swallowed a word, it says so: **Another take**, or **Ignore** if the word is there.

Stage directions (“[whispers]”, “[annoyed]”) tell an ElevenLabs voice how to act the line; learners never see them. When an ElevenLabs voice speaks on the screen, the **Acting** tool in the drawer suggests some and can ask your AI to stage the line or the step. Local voices say the text alone, without the directions.

An acronym or a name said wrong? In **Course settings**, **Pronunciation** section, **Add a pronunciation**: “P-12” is said “pee twelve”.

## Timing blocks to the voice

The drawer’s **Timeline** tab shows the steps, the words where the voice says them, a row per timed block, and the playhead the canvas follows. In the **Properties** of a block on a narrated screen, **Entrance** and **Exit** choose when it comes and when it goes: click a word in the script or the timeline, then **Anchor**. Then set the **Offset**, the **Effect** (**Fade**, **Rise**, **Slide**, **Zoom**, **Wipe**, **Draw**) and its **Duration**. The same idea applies to the parts of a chart: see [the chart follows the voice](/en/docs/learning-science/#the-chart-follows-the-voice).

For words to land exactly, Elabora times them to the voice with a model downloaded once (**Time the words to the voice**). Without it, words are placed by estimate, from the length of the text.

## A layer that speaks

A layer can have its own narration, like a Storyline layer: when it opens, a voice explains, and its blocks come in on the word that names them. For instance, the layer “Rule reminder”, said by the guide, where the diagram appears on the word “desk”.

- Show the layer (its tab, above the canvas): the drawer switches to its voice. **Script** opens on *Voice of layer “Rule reminder”* and **Back to the screen**; its lines have no steps, since a layer plays through in one go, and a sentence says what follows its voice (“Then the layer closes and the screen resumes”). **Timeline** starts at the layer’s opening, with a row **The screen** above it, paused while the layer speaks.
- Its lines are added and said as the screen’s are: the same voices, takes, stage directions and pronunciations.
- Its blocks are timed to its lines with **Entrance** and **Exit**, as on the screen; they also offer “when the layer opens”, “when the layer’s voice ends” and **Until the layer closes**. A layer without a voice can bring its blocks in a number of seconds after it opens. A block of the layer is never timed to a line of the screen, nor the other way round: the checks flag it.
- Two voices never speak at once. While the layer speaks, the screen’s narration waits: it resumes when a window closes, or when a panel’s voice ends.
- Learners find a small bar of its own in the layer (play and pause, replay, seeking as the layer allows, captions). The layer starts again from the beginning each time it opens. Pause freezes everything, and the screen’s transcript adds the layer’s lines under its title.
- **Closing the layer when its voice has finished**: in the layer’s **Properties**, **Layer timeline** section, **When its voice has finished** offers **Close the layer when its voice has finished**, which writes the event in one click. In the events editor, it is the trigger **When a layer’s voice has finished…**; **Pause the timeline** and **Resume the timeline** then ask which one: the screen’s, or the layer’s voice.

Or ask your AI:

> On screen 6, have the guide say the “Rule reminder” layer in two lines; make the diagram appear on the word “desk”, and close the layer when she has finished.

Why blocks come in with the voice: see [a layer that speaks](/en/docs/learning-science/#a-layer-that-speaks).

## How the screen advances

In the screen’s **Properties**, the **Narration** section sets the **Advance**: **By the learner** (the voice stops at the end of each step and waits for “Continue”), **Automatic** (steps follow one another, learners can pause) or **Up to the next screen** (Elabora reminds you this imposes a time limit on learners). **Seeking** says how far learners may move along the narration: **None**, **Within what was seen** or **Free**. The course’s defaults are in **Course settings**, **Player** section. On a phone, the screen always advances step by step.

## Reviewing the narration

In the **Review** view, **Contact sheet** shows each narrated screen frame by frame, with **Listen to the screen**. A cue opens the screen at that moment.
