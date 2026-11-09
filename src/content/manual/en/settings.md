---
title: Elabora settings
description: Your preferred AI, your Elabora account, your ElevenLabs key and its quota, the chat’s agent and what Elabora downloaded on your computer.
slug: settings
group: more
order: 2
---

Elabora’s settings apply to all your courses. Open them from the **You** menu, bottom left of the home page, with **Settings…** (⌘, on a Mac, Ctrl+, on Windows). The **Settings** window has seven sections: **Account**, **Personalization**, **Usage**, **Voices**, **Downloaded items**, **Updates** and **Tools for AI**.

A course’s own settings (its title, presentation, LMS, voices) are elsewhere: in **Course settings**, from the course title’s menu.

## Your preferred AI

**You** › **Your preferred AI…** opens the same choices as at first launch:

- **Claude** and **ChatGPT**, each in its app. Once chosen, each says what Elabora found on your computer, with the button for what is missing (**Download**, **Sign in**, **Open**, **Update**). The arrow button, **Check again**, looks again; Elabora also looks again when you come back to the window.
- **I don’t have a subscription**: OpenCode and free models, in Elabora’s chat. Nothing to install beforehand: Elabora downloads OpenCode at your first message. The line gives the download’s size.

Pick one, then **Save**. Elabora uses this AI by default in new conversations; for a single request, choose another in the menu next to the send button. See [Working with your AI](/en/docs/working-with-your-ai/), and [Tested models](/en/docs/tested-models/) to compare.

## Account

Without an account, Elabora works entirely on your computer. An account lets you have your courses reviewed through a link and publish them on the web (see [online reviews](/en/docs/online-reviews/) to sign in).

Once you are signed in, **Account** shows:

- **Your space**: its address, with **Copy the address**, **Open in the browser** and **Change the address…** (once every 30 days: the old address stops at once, with no redirect);
- **Space used**, and what is **Online**: your courses on the web and your open reviews, each with its menu (**Remove from the web…**, **Copy the link**, **Close the review**…), then the **Closed reviews**;
- **Connected devices**, each with **Sign out**;
- **Your AI**: **Your AI can read your reviews**. Ticked (the default), your AI gets a key that only reads reviews and their comments, to fix your courses from them; it cannot reply or publish for you. Each key can be revoked in one click (**Revoke**);
- **Sign out** and **Delete my account…** (you type your space’s address, then a code received by email; everything online is deleted, your courses stay on your computer).

Your session is kept in your computer’s keychain, and Elabora only reads it when you do something that needs it.

## Voices: your ElevenLabs key

ElevenLabs voices are more expressive than local voices (emotions, laughter, whispers, dialogues). They need your own ElevenLabs account; a free account is enough to start.

1. In **Voices**, **Add a key…** opens **Use ElevenLabs voices**.
2. Create a key on elevenlabs.io (the link is in the window), ticking only **Text to Speech · Access**, **Voices · Read** and **User · Read**.
3. Paste it, then **Check**: Elabora tells you your plan and what a line costs, as a share of your monthly quota.
4. Leave **Your AI (Claude, ChatGPT…) may use it** ticked if your AI should be able to generate voices: it never sees the key, which is then kept in a file only you can read. Unticked, the key is kept in your computer’s keychain.
5. **Save the key**.

From then on, the **Voices** section shows the masked key, where it is kept, the share of the quota used **This month** (**Show the quota** when the key is in the keychain), the switch for your AI, **Change key…** and **Remove**.

Elabora always gives costs as a share of your monthly quota. Under 1%, a generation starts on your click; from 1%, Elabora (or your AI) asks for your approval first. Commercial use of the voices needs a paid ElevenLabs plan.

<!-- capture: the Voices section of the settings, with a masked key, the quota bar and the “Your AI” switch -->

## Downloaded items

What Elabora downloads once per computer, outside your courses, with what it is for and what happens without it:

- **Local voices**, one row per language, with the voices’ names;
- **Words timed to the voice**, for precise word timing;
- **Transcription**, to transcribe your recordings on your computer;
- **AI in Elabora**: OpenCode, the chat’s agent, downloaded at your first message. Uninstalling it keeps your conversations; it downloads again at your next message.

Each row gives its size. **Install** downloads it; the **…** menu offers **Reinstall** and **Uninstall**. Uninstalling takes effect at once and leaves every course as it is: what they contain stays, and the item downloads again the next time it is needed. Elabora refuses to uninstall an item while it is in use.

## Personalization, Usage and Updates

- **Personalization**: the **Appearance** (**Automatic**, **Light** or **Dark**), the interface **Language** (**Automatic**, **English** or **Français**: the change applies at once), and the key that sends a message to the agent (**Enter** or **⌘ Enter**, Ctrl+Enter on Windows).
- **Usage**: the share used of your ElevenLabs quota and, if you use ChatGPT, of its limits, with when they renew.
- **Updates**: **Update automatically**, for Elabora and what it downloaded, and **Check for updates** (see [installing Elabora](/en/docs/install/)).

## Tools for AI

- **Command**: the `elabora` command in the terminal, installed in one click on a Mac, included with Elabora on Windows. Your AI works faster, and developers can type it themselves.
- **Extension for Claude**: **Install in Claude**, so that Claude’s chat works on your courses (see [Elabora in Claude](/en/docs/claude/)).
- **Web pages the agent reads**: the sites the chat’s agent reads without asking you, or **Every site**. **Remove** takes one away, **Remove all** takes them all away.
