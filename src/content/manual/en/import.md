---
title: Bringing in a Storyline or Rise course
description: Import a Storyline project, a published Storyline course or a Rise export, then make your choices in the import report.
slug: import-storyline-rise
group: create
order: 2
---

Coming with courses made in Storyline or Rise? Elabora can take them over as Elabora courses. This is a **Beta** feature: it improves over time, and the import report always tells you what was not brought over.

## What Elabora can read

- a Storyline project (`.story`);
- a published Storyline course (web or LMS), as a folder or a ZIP;
- a Rise export (ZIP).

Elabora recognises the file by its content, not its name. If it is none of these, it says so: “… is neither a Storyline project (.story), nor a published Storyline course, nor a Rise export.”

An Elabora archive attached the same way is not imported: it joins the new course’s sources, for your AI to use. To simply open an Elabora archive, use **Import…** on the home page (see [the library](/en/docs/library/)).

## Importing

1. On the home page, **New course**.
2. **Attach documents** › **Existing course**, then choose the file. Its tag says **Beta**.
3. Answer the questions you care about, as for a [new course](/en/docs/creating-a-course/): they are kept the same way.
4. The sentence next to the buttons says what will happen: Elabora imports the course, then your AI finishes what the report lists.
5. Click **Create with Claude** (or **Create manually**). The import takes a moment, then the course opens on its **Import report**.

<!-- capture: the import report of a Storyline project, with its summary sentence, the “Your choices” part and the grouped losses -->

## Reading the import report

- The sentence at the top sums up the import: how many slides became screens, how many elements were brought over, kept in a simpler form or not brought over.
- **Your choices**: the decisions that are yours, each with its count, the choice the import applied and the other possible ones. A button accepts the import’s choice; it then reads **Accepted**.
- Picking another option rebuilds the course from the original file. Elabora first asks **Import the module again?**: what was changed since the import, by you or your AI, is replaced, and the current state stays in the history. Confirm with **Import again**. Right after, **Go back to how it was** undoes that new import.
- Videos and sounds with **No captions or transcript** come first: complete them before delivering.
- Then the losses, grouped: **In a simple fallback** (kept in a simpler form), **Not taken yet** (Elabora cannot read it yet) and **Left out** (set aside on purpose). Each one opens the screen it is on.
- For a published Storyline course, a note says that media from Articulate’s Content Library could not be recognised: replace those that come from it, or import the `.story` instead if you have it.

When you are done, **Close the report** (⌘Z brings it back). While the report is in the course, the course title’s menu offers **Import report** to come back to it.

## What changes when moving to Elabora

Elabora reads each Storyline slide and makes blocks in reading order, so the screen adapts to the window and to phones, and stays readable by a screen reader. Storyline slides become slides, Rise lessons become scrolling pages. Layers stay layers, simple triggers become events, choice questions become questions.

What Elabora cannot do yet (drag and drop, hotspots, fill-in-the-blank…) becomes text, with a note for you. Fonts Elabora does not know are replaced by a similar font from its selection, and Content Library media are not copied from a `.story`.

Then it is your AI’s turn to finish the job: complete the course plan, take up what the report lists. The report’s choices (presentation, fonts, backgrounds, timing, media without captions) stay yours, and the request sent to the AI tells it so.

For the details of what is read and converted, see decision D47 in the developer section’s [decisions](/en/docs/developers/decisions/).
