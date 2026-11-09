---
title: Branching dialogues
description: Add a dialogue, write it in Script, see it as a Map and a Table, set its characters, modes and voices, play it and send it to your client.
slug: dialogues
group: create
order: 7
---

A dialogue puts learners in a conversation. Characters speak, learners choose their answer, the conversation goes on from that choice, and everything stays in the same thread, like a messaging app. It is a block among others: it can follow a text, come before a question and, once finished, send learners to another screen.

Why dialogues work this way (the consequence before the note, three options of similar length, only the first run scored): see [the learning science behind Elabora](/en/docs/learning-science/#practising-a-decision-in-context).

<!-- capture: a dialogue in messaging style in Slide, with three options under the thread -->

## Adding a dialogue

The simplest way is to ask your AI, giving it the situation and the mistakes to bring into play:

> On screen 4, write a dialogue: Leïla, a support technician, takes a call from Marc, whose floor has lost the network. Three decisions: the first question to ask, what she writes in the ticket, whether to escalate. For each, a good option, a fair one and a poor one, with their consequence and a note.

You can also add it yourself: **Interaction › Dialogue** in the toolbar (see [screens and blocks](/en/docs/screens-and-blocks/#adding-a-block)). The block starts from a small template to replace: two lines from a character, then a decision of three options, a good one, a fair one and a poor one, each with its reaction or its note; the poor one makes learners try again.

The dialogue editor opens at once. It takes the canvas’s place in **Slide**, and **← Canvas** brings the slide back. To return to it, double-click the block, press Enter when it is selected, or click **Open the dialogue** in its **Properties**.

A dialogue is made of **passages**. A passage is a moment of the conversation: a few lines, then a decision by the learner, the next passage, or an ending. In the editor, the list on the left becomes the dialogue’s outline: its passages, numbered (“4 Write the ticket”), its endings, **Add a passage** and **Add an ending**. The most common case, a situation, one decision of three options, a consequence and a note for each, fits in a single passage.

## Writing in Script, seeing the Map and the Table

The editor shows the same dialogue in three ways; a change made in one shows in the others.

- **Script**, the default view: the dialogue written as a screenplay, at the keyboard. **Add a line** opens a line to type: ⇥ and ⇧⇥ change the character, Enter writes the line and opens another, Escape gives up. Options are written the same way: Enter opens the next option, ⇥ its reaction. Under each option come its quality (an icon and a word), its reaction, its feedback as a note, and what follows in one sentence: “then 4 Write the ticket”, “then the end”, “then the same options, C greyed out”. What the checks flag shows under what it concerns. ⌫ deletes; ⌥↑ and ⌥↓ move a passage, an option or a line.
- **Map**: the passages and their links, laid out automatically from the start. Going back (try again, a loop) is dashed. An option’s quality fits in its icon, and the legend gives the words. There is no position to keep up to date.
- **Table**: one row per option, grouped by passage, with the columns **Option**, **Reaction**, **Feedback**, **Quality** and **Points**. You type in the cells; quality is picked from a menu. It is the view for the subject-matter expert, and for proofreading in bulk.

The right-hand panel follows what you select: an option (its quality, text, **Button** if it should be shorter, reaction, feedback, what follows, points, **Once only**), a line (its character, expression, text and voice), a passage or an ending.

A few rules worth knowing:

- **An option without its own way goes on with the passage**: after its reaction and note, the conversation carries on where it was going anyway. A decision that joins back at once needs no wiring. An option can also open a short branch (another passage), which then comes back to the trunk.
- **The same options again**, as what follows an option: after its reaction and note, the same options come back, this one greyed out. The first choice counts.
- **Once only**: the option disappears (or greys out) once taken. That is what an interview needs, where learners pick their questions, with a “Move on” option always there.
- **Final decision**, on a passage: announced to learners before they choose (“Final choice”); they cannot go back to this choice, nor before it. Once the dialogue has ended, **Start over** stays possible: it is a new run, which leaves the scored run as it was.
- **Endings** have a title and a text. They can depend on the score: “Mastered” from 80%, “To review” otherwise.
- A line without a character (**Narration**, by changing the character with ⇥) sets the scene, “Later, in Marc’s office”, and shows without a bubble.

## Characters and how they look

Characters are the course’s speakers, the same as the narration’s. In **Course settings**, **Voices** section, clicking a speaker’s face opens “Marc in dialogues”:

- **Look**: **Their initial**, **An animated SVG…** (its mouth follows its voice, it changes expression and makes gestures) or **Pictures…** (a portrait, and one picture per expression, with **Add an expression…**);
- **Colour**: the colour of its name and bubbles, among the theme’s colours;
- **Narrator**: its lines are said in its voice, without a bubble or a portrait.

Ask your AI for an SVG character, which it draws following Elabora’s convention: “Draw Marc, in his forties, checked shirt, with the expressions neutral, smiling, worried, relieved and annoyed, and a gesture to wave”.

A character has a closed list of expressions and gestures: a line’s **Expression** is picked among those of its look, and the checks flag an expression it does not have. The expression says which face to show; the stage direction (“[worried]”) tells the voice how to play the line: they are two separate settings.

A gesture is timed to a word of the line, as a block is to the narration: Leïla waves on the word “Hello”. A word can also make a block of the screen appear: the photo of the printer when Marc says “printer”. Ask your AI for these cues.

In the dialogue’s **Properties** (with nothing selected in the editor), **Learner plays** names the learner’s character (Leïla); without one, their bubbles say “You”. **Answers said aloud** has their answers said in that character’s voice.

## Option quality and modes

Each option is marked **Good**, **Fair** or **Poor**. Learners never see this mark before they choose. It colours the editor, and it is enough for the score, the debrief and tracking in the LMS, with no number to write. The checks flag a decision with more than four options, and options of very different lengths, because learners spot the longest one without thinking.

The dialogue’s **Mode**, in its **Properties**, sets going back, the timing of notes and the score at once. The buttons named are those learners see:

| Mode | Going back | Notes | Score |
|---|---|---|---|
| **Practice** (default) | **Choose differently** right after a consequence; once the end is reached, **Change this choice** under each decision of the debrief (or **Resume from here** on their past answers) and **Start over** | in the thread, and at the debrief | not scored |
| **Assessment** | none | at the debrief only | quality of choices |
| **Exploration** | **Resume from here** from the first choice | in the thread | not scored |

Under the mode, a sentence says what it implies, then come **Score** (**Not scored**, **Quality of choices**, **Points**, **By the ending**), **Feedback** (**In the thread**, **At the debrief**, **Thread and debrief**) and **Going back** (**Never**, **Choose differently**, **Then from the end**, **At any time**): each setting stays changeable. **Only the first run to an end counts**, whatever the mode, and in each decision the first choice. Tries and returns after that change neither the score, nor the status, nor what the LMS receives: one answer per decision of the first run.

## The debrief

At the end, learners see the **Debrief**: the ending reached (its title and text), the score, each decision with its first choice, its quality in words (“Good choice”, “Fair choice”, “Choice to avoid”) and its note, then the other outcomes, found or not. On a slide or in a scene, it opens over the thread, the rest of the dialogue dimmed: a click beside it, its cross or Escape closes it, and **See the debrief** opens it again. It builds itself from the options; **Debrief at the end**, in the dialogue’s **Properties**, removes it.

The debrief is also where learners act, without closing it first: **Change this choice**, under each decision, takes them back to it; **Start over**, at its foot, plays the whole dialogue again from its first line. After going back, what came after fades away, the thread shows “You pick up here” and the option taken back says “your previous choice”. Without a debrief, the end offers **Back to a choice** and **Start over**.

## The lines’ voices

A character’s lines are voice lines like the narration’s (see [voices and narration](/en/docs/voices-and-narration/)). Select one: its **Voice** section gives listening, **Generate** (or **Regenerate**), **Import a recording…**, the character’s voice and its takes. With ElevenLabs, nothing is spent without your agreement, as for the narration. With **Answers said aloud**, an option has the same section.

The checks flag once, for the whole dialogue, the lines that do not have their voice yet. While a line speaks, the screen’s narration and the layers’ voices wait.

## What learners see: messaging and scene

**Display**, in the dialogue’s **Properties**:

- **Messaging** (default): characters on the left, with a round portrait, the learner on the right, the name above the first bubble of a series. On a slide, the thread scrolls inside a box of fixed size, and **New message** appears if learners have scrolled up; on a scrolling page, the block grows. Nothing moves in the layout: the options have their room reserved under the thread.
- **Scene**: a backdrop, the characters drawn large, bubbles near them, then the page turns; **History** opens the whole thread over the scene, the rest dimmed; a click beside it, its cross or Escape closes it. On a narrow screen, the thread comes back, with portraits, under a strip of the backdrop.

In both styles, the narration is centred, without a bubble, and the trainer’s note stands outside the conversation: its quality (“Good choice”, “Fair choice”, “Choice to avoid”), then its text. It never resembles a character’s bubble. When learners choose, their option goes into the thread as their bubble.

**Starts** says when the dialogue begins: **When the screen opens**, **On a click** (a start card) or **By an event**. The **Pacing** section sets the **Lines** (**One after another** or **One per click**) and the **Text**: **Word by word** (the default, words not said yet fainter, visible ahead), **Fades in** or **At once**. These follow the voice: a line without a voice appears whole.

Learners stay in control with **Next**. While a voice speaks, the button stays quiet, but a click ends the line and moves on: those who read faster never wait for the voice. After a line without a voice (a dialogue without audio, a silent narrator between voiced lines) and after a note, the dialogue waits for **Next**: learners say when they have finished reading. They can also pause and **Mute voices**. The **Text: all at once** setting, in **Display**, like their system’s reduced motion, always shows the whole text.

## Playing a path

**Play a path**, in the editor’s toolbar, opens its panel on the right, without starting the preview. Choose an answer at each decision met (A, B, C…); those not offered are greyed out. The panel gives the score, the ending reached, the decisions with their quality and the duration (“About 25 s, estimated from the text”); the option played is tinted in the script and the map. **Start over** clears the choices; **See on the slide** closes the editor and shows the dialogue on the slide after those answers, with a tag whose × puts it back at its start.

The checks also flag a passage no path reaches, a dead end, a loop with no way out, endings that do not cover every score, and a tree that branches without ever joining back (a fourth decision of three options would add 81 passages to write). To know every path at once, with the best and worst scores, ask your AI.

To play the dialogue as learners do, with its voices and characters, open **Preview**.

## Sending the script and the map to your client

Your client approves a dialogue in two ways: they play it in the course, through a [review link](/en/docs/online-reviews/), and they read its export. **Export the script**, in the editor’s toolbar, saves a PDF: the map first, then the script, in the course’s language. Your AI can also make it an HTML page. The dialogue is not part of the plan.

## The dialogue and the rest of the screen

Events have a **Dialogues** group (see [events](/en/docs/interactions/)); in the block’s **Properties**, **Add an event** offers these moments directly.

- Triggers: **When a dialogue begins…**, **When a dialogue reaches a passage…**, **When a dialogue line starts…**, **When answering in a dialogue…** and **When a dialogue ends…** (any ending, or a named one, for instance to go to another screen).
- Conditions read what the first run of a dialogue gave, on this screen or another: **A dialogue…** **Is finished**, **Is not finished yet**, **Ended on…**, **Got the answer…**, **Has a score…**.
- Actions: **Start a dialogue…**, **Take a dialogue to a passage…**, **Start a dialogue over…**.
- From inside the dialogue, an option or a word can only change what the screen shows: show or hide a block or a layer, play a media, set a free object. **A dialogue never changes the course’s variables and never sends learners to another screen**: do that in an event of the screen, when the dialogue ends. That is what lets learners go back on a choice without skewing the rest.

## What to ask the agent

Your AI writes the dialogue, reads it back as a screenplay, plays its paths and checks that they all lead to an ending, without opening the preview. Its guidelines ask for short lines, the consequence before the note, three plausible options of similar length, and the best path written first. Some requests:

> Add an option “Ask for the desk number” to the first decision, fair, with Marc’s reaction and a note.

> The dialogue on screen 4 is too long: keep three decisions and make the branches join back.

> Switch screen 5 to Assessment, scored on the quality of choices, and send learners to screen 7 when the ending is “To review”.

> Draw a character for the customer, Ms Duval, and give her the expressions the dialogue needs.

An imported Rise course keeps its scenarios as dialogues: scenes become passages, answers become options, feedback becomes a note; the import report says what is not kept, such as the characters’ poses (see [bringing in a Storyline or Rise course](/en/docs/import-storyline-rise/)).
