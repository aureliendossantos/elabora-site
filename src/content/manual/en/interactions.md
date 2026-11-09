---
title: Events, layers and steps
description: Read and retouch what happens when learners click or answer, open layers, reveal a screen step by step, remember values.
slug: interactions
group: create
order: 6
---

Most of the time, your AI writes a screen’s interactions:

> On screen 5, if the learner gets the question wrong, open a panel with a hint; if they get it right, go to the next screen.

Elabora shows them to you as sentences, which you can read, correct or complete by hand.

## Reading events

An event reads like a sentence: “When clicking the Check button: show layer Hint”. You find them in **Properties**, in the **Events** section, for a block, for the screen or for a layer. **See all** opens the screen’s events page in place of the canvas, grouped by what triggers them; **Canvas**, in the toolbar, brings the slide back.

Click a word underlined with dots to open a menu: another block, another layer, another screen, another value. The menus only offer what is possible in that place.

<!-- capture: a screen’s events page, with one event selected and its menu open -->

## Writing an event

1. **Add event** asks what triggers it: **When the screen opens**, **When clicking…**, **When submitting a question…**, **When making a choice…**, **When an object signals…**, **When closing a layer…**, **When a variable changes…** (and, on a narrated screen, moments of the voice).
2. The event is written at once, with no action. Its **+** asks what it does: **Go to a screen**, **Show a layer**, **Close a layer**, **Show a block**, **Hide a block**, **Show a step**, **Set a variable’s value**, **Add to a variable**, **Set an object’s properties**, **Mark the screen as completed**, **Exit the course**…
3. The selected event’s **…** menu (or a right-click beside its words) adds a condition (**Add additional condition…**), an alternative (**Add “otherwise”…**) or a note for reviewers (**Add note…**), and offers **Delete event**.

An event left without an action says so on its line. Shortcuts on the selected event: / adds an action, ⌘D duplicates it, ⌫ deletes it.

## Layers

A layer shows over the screen: feedback, a hint, a window of details.

- The tabs above the canvas show **Base** and the screen’s layers; **+** adds one, with a first text ready to type over.
- Double-click a tab to rename it. Right-click to choose **Modal** (over the dimmed screen; learners close it to continue) or **Panel** (over part of the screen, which stays usable), to add an event that shows it, or to delete it with its blocks (⌘Z brings it back).
- With a layer shown and nothing selected, **Properties** shows the layer’s settings: its name, **Display as**, **Opened by** (the events that show it; if none, Elabora warns that learners will never see it) and **Add an event to show it**.
- A block moves into a layer, or back to the base, from its menu. Blocks added while a layer is shown go into that layer.
- A layer can speak: its voice explains, its blocks come in on the word that names them, and it can close once its voice has finished. See [a layer that speaks](/en/docs/voices-and-narration/#a-layer-that-speaks).

## Steps

Steps reveal a screen piece by piece.

- In a block’s **Properties**, **Step** puts it **Initially**, in an existing step or in a new one.
- In the screen’s **Properties**, the **Steps** section says whether the **Continue** button reveals the next step, and for each step how it **Opens**: **With “Continue”**, **After activities** (once the questions above are answered), **After exploring** (once the panels, cards and steps above have been opened too: see [starter blocks](/en/docs/starter-blocks/#after-exploring-and-optional)) or **By an event**.
- Events then offer **Show a step**.

On a narrated screen, the voice moves through the steps too: see [voices and narration](/en/docs/voices-and-narration/). Why short steps help is in [the learning science behind Elabora](/en/docs/learning-science/#steps-that-pace-a-screen).

## Variables

A variable remembers something while the learner goes through the course (a choice, a score, a hint already seen) so that events can use it.

- **Variables**, in the toolbar of the events page, opens the list: name, type, **Initial value**, **Resume** (kept between sessions).
- Select one to rename it (the events follow), change its type, its initial value, its **Possible values** or its **Max. length**, and say what it is for (**Purpose**). Below, the events that change it (**Changed by**) and read it (**Read by**), each opening its event.
- **New variable** creates one; event menus also offer **New variable…** wherever you choose a variable. A variable that is “never read” makes no difference to learners; a variable still in use cannot be deleted.

The [checks](/en/docs/preview-and-checks/) list interaction problems (an event without an action, a layer that is never shown).
