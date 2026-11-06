---
title: "Does Elabora work with Codex?"
description: "Yes, with nothing to install, in the ChatGPT app or in a terminal. Elabora opens Codex in your course’s folder, and Codex edits the course with Elabora’s own command."
slug: codex
group: start
order: 6
---

Yes. Elabora is made to work with Codex, in the ChatGPT desktop app or in a terminal, and there is nothing to install for it: no plugin, no setting.

## How it works

- **From Elabora.** In a course, **Agent** › choose **ChatGPT** › write your request. Elabora opens Codex in the ChatGPT app, in the course’s folder, with your request already written. See [Working with your AI](/en/docs/working-with-your-ai/).
- **On its own.** You can also start Codex yourself in a course’s folder (its path is at the bottom of **Course settings**): in the ChatGPT app, start a Codex conversation on that folder; in a terminal, run `codex` there.
- **What Codex reads.** Every course holds an `AGENTS.md` file, which Codex reads by itself: Elabora’s rules for agents, and how to load its guides for each task (writing the plan, the screens, the design, quizzes, dialogues, narration, translation).
- **What Codex runs.** The `elabora` command, which comes with the app: it reads and writes the plan, the screens and their blocks, checks the course, looks at a screen as a learner sees it and builds the SCORM package. Elabora shows what Codex changes as it happens, and undoes it in one step.

## What you need

- [Elabora](/en/docs/install/), installed and opened once.
- The [ChatGPT](https://chatgpt.com/download) desktop app, with Codex, or [Codex](https://developers.openai.com/codex/cli) in a terminal. An older ChatGPT app without Codex cannot take Elabora’s requests.
- To type `elabora` yourself in a terminal (optional: Elabora’s requests give Codex the command’s path): on a Mac, **You** › **Settings…** › **Tools for AI**, the **Command** row.

## Three requests to try

> Write the course plan from the client’s brief and the notes in the sources.

> On the screen on display, add a practice question about the three causes of failure, with feedback for each answer.

> Check the course on a phone, and fix what does not fit.

## Try it on a sample course

[Download the sample course](/downloads/coffee-in-brief.elabora) “From cherry to cup: coffee in brief”: a 15-minute course for the new baristas of a fictional café chain, which uses every starter block of Elabora. Double-click the file: Elabora adds it to your library. Open it, then send a request to ChatGPT from the **Agent** panel.

ChatGPT’s chat, without Codex, cannot work on your courses: it has no access to your computer’s files.
