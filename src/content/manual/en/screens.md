---
title: Screens and blocks
description: See screens as learners do, retouch text, add and move blocks, replace images and videos.
slug: screens-and-blocks
group: create
order: 4
---

The **Slide** view shows each screen exactly as learners will see it: the course’s own player draws it. There you retouch by hand what your AI wrote, or build things yourself. The zoom menu offers **Phone width** to see the screen on a phone, and **Fit to window** to come back.

## Screens and chapters

In the list on the left, a click shows a screen; a double-click renames it. Drag a screen to move it, into another chapter too. Right-click offers **Open**, **New screen after**, **Duplicate**, **Move up**, **Move down** and **Delete**; **New screen in this chapter** adds one at the end of a chapter. When the course has layouts, a new screen asks **Which layout?**: **Simple screen** (blocks stacked vertically) or one of the course’s layouts.

With nothing selected on the canvas, **Properties** shows the screen: its **Title**; **Completed** (**as soon as it is viewed**, **after its activities** or **by an event**) and **Counts towards progress**; on the **Course plan** row, the plan items it covers (at least one); its **Layout**, **Style** and **Background**; its **Steps** and **Events**.

## Retouching text

Double-click a text on the canvas (or press Enter when its block is selected): an editor opens over it. You have bold (⌘B), italic (⌘I), links (⌘K) and lists; what you paste from a word processor is cleaned up. Confirm by clicking elsewhere, or with Enter (⌘Enter in a paragraph); Escape leaves without changing anything. Text that holds a table or a centred formula is edited in Markdown (**Edit Markdown**).

Some text comes from the approved course plan: **Properties** says so. Rewording it changes the plan, which marks it until its next version. Text the client wants verbatim can only be unlocked in [the course plan](/en/docs/course-plan/).

<!-- capture: a paragraph being edited on the canvas, with the small formatting bar -->

## A block’s properties

Select a block: **Properties** shows everything you can set, in words: its texts, its choices, its options, its **Width** (**Standard**, **Wide**, **Half**, and **Edge to edge** for the blocks that allow it), its **Step**, its **Style**, its **Events** and its **Accessibility**. A block that has several presentations offers them first, under **Presentation**. For a question: the question text, the answers and the feedback for each (why [a feedback per option](/en/docs/learning-science/#feedback-that-explains) is worth writing).

## Adding a block

The toolbar adds a block after the selected block (or at the end of the screen, or of the layer on display):

- **Text**: a paragraph, a title, a lesson introduction, a callout, a statement, a divider, an equation, a quote, a persona;
- **Media**: an image, a gallery, two images to compare, a video or an audio file from your computer;
- **Layout**: a stack of contents that follow each other in the same place, columns, a “Do / Don’t”;
- **Interaction**: an accordion, tabs, flip cards, steps, a timeline, a scrolling figure, an interactive image, a guided tour, a character, a dialogue, a decision, a button;
- **Questions**: a question (also with picture answers or on a picture), a numeric question, a fill-in-the-blanks text, an exercise to match, categorize or put in order, a reflection, a scale, the results;
- **Charts**: figures, a ranking, a trend, a share, a process, a diagram (see below);
- **Course blocks**: blocks specific to this course, when it has some.

Each entry is one specific thing you have in mind, in a flat list; the variants beside the preview are styles of it, and the inspector then offers every presentation of the block. Entries marked with an ellipsis (**Image…**, **Gallery…**, **Scrolling…**) ask for your files first. All of it, with **Transform into…** and the **Opening** screen layout, is in [starter blocks](/en/docs/starter-blocks/).

Each tool opens its family, with a preview of each entry as it will appear on your screen. The **+** between two blocks, right-clicking a block or the screen, or a block’s **…** menu offer every block, with a search field; in a paragraph, type **/** and its name. The new block’s first text is selected: just type over it. A branching dialogue has its own page: [dialogues](/en/docs/dialogues/). Recall and drag-and-drop **Questions** are in [starter blocks](/en/docs/starter-blocks/#questions).

## Charts and diagrams

An Elabora chart says one thing. Its title is the sentence it proves, the **Takeaway** (“Most incidents start with an email” rather than “Incidents by origin”); **Highlighted** picks the item that carries the idea: it takes the accent colour and the others fade back. Here is why: [one chart, one idea](/en/docs/learning-science/#one-chart-one-idea). When a chart carries the slide, its takeaway is the slide’s title: turn off **Show the title** in the screen’s settings (the menu and screen readers keep it), and leave **Context** empty unless it says what neither the title nor the chart does, such as what is counted.

- **Key figures**, **Bars**, **Part of a whole**, **Trend**, **Proportion** (“1 in 10”), **Before and after**, **Funnel** (or pyramid), **Process**, **Cycle**, **Matrix**, **Milestones** and **Diagram** (a flowchart, a mind map, a sequence, written in Mermaid).
- They animate once, when they come on screen, and answer the pointer, touch and the arrow keys; a table of their data is read by screen readers.
- On a narrated screen, each item can come when the voice names it, the others fading back while it speaks: ask your AI (“bring each bar in when the voice mentions it”), or see [the chart follows the voice](/en/docs/learning-science/#the-chart-follows-the-voice).
- **Trend** can let learners predict: they draw the line they expect, then see the real one. It is scored only if you decide so ([predict, then reveal](/en/docs/learning-science/#predict-then-reveal)).
- For what no block draws (two series, a map, a log scale), your AI writes a custom object following the same rules.

## Moving, copying, deleting

Once a block is selected: drag it on the canvas (a line shows where it will go), or use ⌥↑ and ⌥↓; ⌘D duplicates it; ⌘C then ⌘V paste it after the selected block, on any screen; **Move to another screen…** sends it to the end of another screen; ⌫ deletes it. Each gesture is one step that ⌘Z undoes.

## Images, video and audio

- Replacing an image: in **Properties**, **Replace…**, or drop the file on the field, or straight onto the image on the canvas. Elabora then asks you to check its alternative text: does it still describe what the new image shows?
- Adding: drop an image, a video or an audio file elsewhere on the canvas; it comes in as a new block after the one under the pointer.
- Elabora converts the file for the web with its own ffmpeg.
- A video or audio file: the inspector says what it lacks. **Captions** come from a WebVTT (.vtt) or SubRip (.srt) file: choose it, or drop it on the field or on the video. Add the **Transcript**. **Loop** is for silent animations; **Decorative** for what carries no information.

## Custom objects and course blocks

A custom object (a 3D simulation, a small game…) has its **Object settings**, chosen by its author, its **Accessibility** (the **Spoken description** screen readers read) and its **Object text**, which you can reword. To change its code, ask your AI. A block specific to the course turns into ordinary blocks with **Convert to simple blocks**, in its menu. Developers will find the details in [Free-object contract](/en/docs/developers/free-object-contract/) and [Components](/en/docs/developers/components/).

## From one screen to the next

A 3D scene or an image that comes back on the next screen can carry on instead of appearing again, as a morph transition between two slides does. Select it on the second screen and turn on **Continues from the previous screen** in **Properties**: a custom object keeps running and moves to its new settings (another camera, another mode) without loading again; an image glides from its place. **Transition** sets how long it takes: **Quick**, **Normal** or **Slow**. It is one step that ⌘Z undoes. The canvas and **Preview** show the transition as learners will see it.

The rest of the screen changes as usual, and when learners ask for less motion the transition becomes a clean cut. The scene keeps one state from one screen to the next: what learners did in it is still there when they come back. What the object does during the transition (the camera turning, its controls changing) is up to its code: ask your AI, for example “during the transition to the explanation, bring the camera down to the cut-away view”.

## Search and replace

⌘F (or the magnifier) opens **Search the course**: results by screen, each with what surrounds it; a click opens the place. **Replace with**, then **Replace** for one result or **Replace all**, in one step that ⌘Z undoes. **Aa** matches case. Approved course plan text is not searched here: edit it in the course plan.
