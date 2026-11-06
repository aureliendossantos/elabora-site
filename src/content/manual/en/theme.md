---
title: 'Look: theme and player'
description: Set the course’s colours, fonts and styles, choose between slides and a scrolling page, and set up the player.
slug: look
group: create
order: 8
---

A course’s look is set in two places: the **Theme** (colours, fonts, styles) and **Course settings** (how screens are presented, and the player). Both open from the course title’s menu; the theme shows the screen on display beside it, so you see the effect of each change.

## Colours

Under **Colors**, each colour says its role: **Primary** (buttons, progress bar, heading accents), **On primary** (button text), **Accent**, **Background**, **Text**, **Secondary text**, the colours of correct and incorrect answer feedback, and **Focus** (the outline of the element chosen with the keyboard).

Click a colour to open the picker: a field, a hue, the hex value, and an eyedropper (**Pick a color from the screen**). Elabora checks contrast against WCAG 2.2 AA and says in words when a contrast is too low. Empty a field to go back to the default colour.

<!-- capture: the Theme with its list of colours, the picker open on the primary colour -->

## Fonts and shapes

Under **Fonts**, choose the heading font and the body font from a selection that is free for commercial use, each name drawn in its own face. Elabora embeds the font in the course with its licence. **System fonts** uses the ones on the learner’s computer. For another font, ask your AI.

Under **Shapes**, **Corner radius** goes from 0 to 32 pixels.

## Styles, background and layouts

The bottom of the theme lists what the course lets you choose, each with its description and the number of blocks or screens that use it:

- **Block styles**: how a type of block looks (larger text, a dark callout…);
- **Screen styles**: how a whole screen looks (a dark band, a narrower page…);
- **Background**: the screens’ background and its variants (a starry sky, old paper…);
- **Layouts**: blocks arranged in zones (an image beside text…).

Your AI creates them. When the course has none yet, Elabora explains what they are for and offers **Ask the agent**: describe **What you want**, then **Send to agent**. For instance:

> A dark band for the simulation screens.

You then pick them in **Properties**: **Style** for a block; **Style**, **Background** and **Layout** for a screen; or in **Which layout?** when you add a **New screen**. To go further, the theme is a real stylesheet: developers will find the details in [Design](/en/docs/developers/design/).

## Slides or a scrolling page

In **Course settings**, **Course** tab, **Presentation** section, **Screens** offers:

- **Scrolling page**: the screen scrolls like a page, steps appear below;
- **Slides**: the screen fits in the window, steps appear in place. The **Reference window** (1600 × 900 or 1280 × 720) is the size you design them for; they adapt to other window sizes.

On a phone, or in a window that is too small, a slide reads as a scrolling page; it is never scaled down like a picture. **Phone width**, in Slide’s zoom menu, shows you what that looks like.

## The player

**Player** section, in the same tab:

- **Navigation**: **In order** (learners move forward with “Next” and back with “Previous”) or **Free** (every screen is available from the menu);
- **“Next”**: whether it waits until the screen is completed;
- **Screen menu** and **Progress**: shown in the player or not;
- **“Previous” and “Next”**: **At the bottom of the window** or **At the end of the page**;
- and, for narrated screens, the default **Advance** and **Seek bar** (see [voices and narration](/en/docs/voices-and-narration/)).

What the course sends to the LMS (success, tracking) is set here too: see [publishing](/en/docs/publishing/).
