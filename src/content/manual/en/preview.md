---
title: Preview and checks
description: Play the course as a learner, simulate a screen reader or keyboard-only use, and deal with what the checks point out.
slug: preview-and-checks
group: deliver
order: 1
---

## Preview

**Preview**, top right of the course window, plays the course in its own window, as in an LMS: Elabora runs it in a simulated LMS, so that you see it as learners will once it is delivered. The preview rebuilds itself as the course changes. **Restart** starts over, as a new learner.

<!-- capture: the Preview window, with the Simulate menu open -->

## Simulating some learners

**Simulate**, in the preview window, plays the course as some learners experience it:

- **Screen reader**: a panel, **What the screen reader says**, writes each sentence read aloud, with the key that triggered it. Press Tab to go from one element to the next, or ↓ to read on;
- **Keyboard only**: the mouse does nothing (Tab, Shift+Tab, Space, Enter and the arrows);
- **Zoom 200%**;
- **Reduced motion**;
- **Color vision**: **Without telling red from green**, or **Without colors**.

**Stop simulating** goes back to normal. A simulation does not replace a test with a real screen reader (NVDA, VoiceOver).

## Reading order

A screen reader reads blocks in the order they are arranged, not the order in which you see them. In **Slide**, the zoom menu offers **Reading order** (on a Mac, also in the View menu): each block gets its number on the canvas. A layer on display is read on its own. The label in the canvas corner removes the numbers.

The screen’s **Properties** list this order too, with the name the screen reader reads; a missing alternative text shows in red there, and decorative media are set apart. In a block’s **Properties**, **Accessibility** gives the name it is **Read as** and its alternatives (alternative text, decorative, captions, transcript).

## Checks

Elabora checks the course continuously: the format, how it follows the course plan, how questions and their feedback are written, accessibility, events, package size for the LMS… A card on the home page already says “2 issues to fix” when something is red.

Open **Publish**, then **Checks**. Everything is in words, sorted by severity:

- **Must fix: publishing stops**;
- **Needs attention**;
- **For information**.

The filters at the top (**All**, **Needs fixing**, **Needs attention**, **For information**, **Accessibility**) narrow the list.

Choose an item: the right panel says what it is, where, and what to do.

- **Open screen** takes you to the block concerned (for an accessibility item, **Show on the screen, with the reading order**).
- **Fix** sends the item to your AI, with what Elabora tells it about it (**What Elabora tells the agent**).
- **Ignore** dismisses a warning that does not apply here (a negation in a quotation, for instance). It comes back if the content changes. Ignored items stay at the bottom of the list, under **Ignored by you**, with **Bring back**.

<!-- capture: Checks with an item selected and its Open screen, Fix and Ignore buttons -->

You can also hand everything to your AI at once:

> Fix every red item in the checks, then tell me what you changed.

The **Publish** page repeats the first items to fix and to look at under **Before publishing**, with **Open checks** for the rest. Red items stop the SCORM package and the web publication, not sending to your reviewers: see [publishing](/en/docs/publishing/) and [online reviews](/en/docs/online-reviews/).
