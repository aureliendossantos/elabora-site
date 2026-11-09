---
title: Working with your AI
description: "Elabora’s chat and its free models, or your AI in its app: send a request, follow and undo what the agent does, and know what stays in your hands."
slug: working-with-your-ai
group: start
order: 4
---

## How it works

Elabora works with an AI in two ways:

- **Inside Elabora.** The AI answers you in the **Agent** panel, as in a chat. It is OpenCode, with free models: no account, no key, no subscription.
- **In your AI’s app.** Claude Code in the Claude app, Codex in the ChatGPT app, with your plan. Elabora opens the app on the course’s folder, with your request already written. The agent edits the course with the `elabora` command, which Elabora brings: nothing to install.

Either way, Elabora follows what the agent writes and shows it to you as it happens.

## Choosing your AI

At first launch, Elabora asks which AI to use: **Claude**, **ChatGPT** or **I don’t have a subscription** (OpenCode and free models, inside Elabora). Nothing is chosen in advance. You can change it at any time, on the home page with **You** › **Your preferred AI…** (see [settings](/en/docs/settings/)).

The free models are enough to retouch a screen, add a question or translate a text. To create a course from scratch or for other complex tasks, a Claude or ChatGPT subscription is strongly recommended: the results are much better. How each AI does with Elabora: see [Tested models](/en/docs/tested-models/).

## Sending a request

1. In a course, click **Agent**, top right.
2. Write your request in the **Ask the agent…** field. A tag shows the screen on display: the agent will know what you are looking at (the screen and, if there is one, the selected block), and which language the course is in.
3. The menu next to the send button shows the AI that will get the request, your preferred AI to begin with. Each line says where it works: **OpenCode** “In Elabora · free”, **Claude** and **ChatGPT** “In the Claude app” or “In the ChatGPT app”, with your plan. Then come **Copy request**, to paste it into another AI, and **Your preferred AI…**.
4. Send with the arrow, or Enter (Shift+Enter starts a new line; to send with ⌘Enter, see [settings](/en/docs/settings/)).
5. With OpenCode, the answer is written in the panel. With Claude or ChatGPT, your AI’s app opens on the course: your agent will probably ask permission to run the `elabora` command: allow it.

A few example requests:

> Write the course plan from the client’s brief and the expert’s notes in the sources.

> On the screen on display, add a practice question about the three causes of failure, with feedback for each answer.

> The text in chapter 2 sounds too academic: make it more direct, without touching the text the client approved.

Other buttons also send a ready-made request to your agent: **Create with** (and your AI’s name) on the [New course](/en/docs/creating-a-course/) page, **Fix** in the [checks](/en/docs/preview-and-checks/), **Ask the agent** in the [theme](/en/docs/look/), **Shorten** in [translation](/en/docs/translating/), and **Hand to the agent** for [reviewers’ comments](/en/docs/online-reviews/).

## The chat inside Elabora

### At the first request

Elabora downloads OpenCode once per computer, a little over 100 MB, and shows “Elabora is preparing OpenCode…” with its progress. Offline, the download resumes by itself when you are back online. OpenCode is then in **Settings** › **Downloaded items**, under **AI in Elabora**, and updates with Elabora.

Elabora’s OpenCode has folders of its own: if you already use OpenCode, Elabora does not see or change its settings, keys or sessions.

### The conversation

- Each request and its answer are written in the panel. While the agent works, a line says what it is doing; afterwards, it folds into one sentence that a click unfolds.
- The agent’s work becomes a card, with **Review** and **Undo**, as with the other AIs.
- The square button, or Esc, stops the agent. What it already changed stays in the course, and can be undone like the rest.
- Conversations are kept in the course. At the top of the panel, **Previous conversations** reopens them and **New conversation** starts afresh.
- If something gets in the way, Elabora says so in one sentence, with a single button: **Try again**, **Resume**, **New conversation** or **Download**.

### What the agent asks first

The chat’s agent writes only through Elabora’s tools: it changes no file itself and runs no command. It reads the course’s files freely. A card asks for your approval before it:

- reads a file outside the course (**Read this file** or **Refuse**);
- reads a web page (**Allow searches**, for every site, **Allow this site only**, or **Refuse**). The sites allowed are in **Settings** › **Tools for AI**, where you remove them;
- records a voice or creates a sound with ElevenLabs, from 1% of your monthly quota.

If you refuse a page, the agent goes on without it. For the rest, it stops, and nothing is spent.

### The free models

Elabora picks the model for you, among the free models that don’t keep your texts or train on them: today DeepSeek V4.1 Flash, then GLM-5.3 Flash. Their results are on the [Tested models](/en/docs/tested-models/) page.

These models have a usage limit, set by OpenCode. The chat of all your courses and the ✨ buttons share it. When it is reached, or the model is in high demand, Elabora says “The free model is in high demand. Try again in a minute.”. After heavy use, you sometimes have to wait longer. To work a lot, take a Claude or ChatGPT subscription.

### The ✨ buttons

Some empty fields an AI can fill, such as an image’s text alternative or a missing translation, have a ✨ next to them. It asks OpenCode to write the text (**Describe the image with OpenCode**, **Translate with OpenCode**), whatever your preferred AI. You keep working meanwhile. The first time, if you haven’t chosen OpenCode, Elabora asks for your approval. The text is written in the field as the AI’s work: ⌘Z undoes it.

## Following what the agent does

- What the agent writes is traced in violet on the canvas, and the list of screens marks the ones it changed.
- A banner says when the agent is changing a screen; **Follow** takes the canvas where it works, **Stop** gives you back control.
- In the **Agent** panel, each batch of the agent’s work becomes a card: what it changed, and where. Clicking a line opens the screen; **Review** steps from one changed screen to the next. A violet dot on **Agent** means something new.

<!-- capture: the Agent panel with a “3 screens modified” card, its lines and the Review and Undo buttons -->

## Undoing what the agent did

- ⌘Z undoes the agent’s last batch as a whole, as one step. The card’s **Undo** button does the same, as long as it is the last step.
- If you retouched something in the meantime, Elabora undoes the agent’s work and keeps your edits (“Undone, except for your subsequent edits.”).
- For older work, open the **Course history** (the check mark next to the title): choose the batch, then **Undo this change** or **Revert to this point**. See [history](/en/docs/library/).

## What the agent does, and what stays with you

The agent can write and rewrite the course plan (even after an approval: its changes then show as changes since the approved version), the screens, blocks, events, theme styles, translations and narration. It reads the documents attached to the course, and it checks and looks at the screens it makes. If you allow it, it can also read your reviewers’ comments.

Some decisions stay yours, and Elabora does not leave them to the agent:

- creating a version of the course plan and recording your client’s approval;
- changing a text the client approved verbatim;
- recording the approval of a translated course plan;
- publishing, sharing a review link, replying to reviewers or resolving their comments.

And for money: as soon as an ElevenLabs voice generation costs 1% of your monthly quota or more, the agent must ask for your approval first.

## Opening your agent yourself

Claude Code, Codex and the Claude extension remain available at any time, with or without the chat. You can also open your agent without going through Elabora: Claude Code and Codex need nothing installed for it ([Claude Code](/en/docs/claude-code/), [Codex](/en/docs/codex/)); Claude’s chat works with Elabora through an extension ([Claude](/en/docs/claude/)). Two things to know:

- Work in the library. Elabora works on its own copy of each course. The folder’s path is written at the bottom of **Course settings**.
- Give the agent the path of the `elabora` command:
  - Mac: `/Applications/Elabora.app/Contents/Resources/bin/elabora` (Elabora must be in the Applications folder, and have been opened at least once);
  - Windows: `%LOCALAPPDATA%\Programs\elabora\resources\bin\elabora.cmd`.

Each course contains an `AGENTS.md` file that tells the agent how to work with Elabora. For the technical details (the command, the MCP server), see [Agents](/en/docs/developers/agents/) in the developer section.
