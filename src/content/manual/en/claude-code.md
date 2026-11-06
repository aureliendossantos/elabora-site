---
title: "Does Elabora work with Claude Code?"
description: "Yes, with nothing to install. Elabora opens Claude Code in your course’s folder, and Claude Code edits the course with Elabora’s own command."
slug: claude-code
group: start
order: 5
---

Yes. Elabora is made to work with Claude Code, and there is nothing to install for it: no plugin, no setting.

## How it works

- **From Elabora.** In a course, **Agent** › choose **Claude** › write your request. Elabora opens Claude Code in the Claude app, in the course’s folder, with your request already written. See [Working with your AI](/en/docs/working-with-your-ai/).
- **On its own.** You can also open Claude Code yourself in a course’s folder (its path is at the bottom of **Course settings**), in the Claude app or in a terminal.
- **What Claude Code reads.** Every course holds an `AGENTS.md` file, which Claude Code reads through the course’s `CLAUDE.md`: Elabora’s rules for agents, and how to load its guides for each task (writing the plan, the screens, the design, quizzes, dialogues, narration, translation).
- **What Claude Code runs.** The `elabora` command, which comes with the app: it reads and writes the plan, the screens and their blocks, checks the course, looks at a screen as a learner sees it and builds the SCORM package. Elabora shows what Claude Code changes as it happens, and undoes it in one step.

## What you need

- [Elabora](/en/docs/install/), installed and opened once.
- The [Claude](https://claude.com/download) app, with a plan that includes Claude Code, or [Claude Code](https://code.claude.com/docs/en/overview) in a terminal.
- To type `elabora` yourself in a terminal (optional: Elabora’s requests give Claude Code the command’s path): on a Mac, **You** › **Settings…** › **Tools for AI**, the **Command** row.

## Three requests to try

> Write the course plan from the client’s brief and the notes in the sources.

> On the screen on display, add a practice question about the three causes of failure, with feedback for each answer.

> Check the course on a phone, and fix what does not fit.

## Try it on a sample course

[Download the sample course](/downloads/coffee-in-brief.elabora) “From cherry to cup: coffee in brief”: a 15-minute course for the new baristas of a fictional café chain, which uses every starter block of Elabora. Double-click the file: Elabora adds it to your library. Open it, then send a request to Claude from the **Agent** panel.

Claude’s chat, without Claude Code, works with Elabora through an extension: see [Elabora in Claude](/en/docs/claude/).
