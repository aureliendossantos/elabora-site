---
title: Tested models
description: How AI models do on six real author requests in Elabora, how long they take, and what they cost.
slug: tested-models
group: more
order: 5
---

We try AI models on a test bench: six real author requests, on a copy of the same course (tighten a sentence, reorder a screen, add a question the plan calls for, translate a screen, add sounds, find a flaw that only shows on screen). Each result is checked automatically, by checks written in advance.

Latest run: 4 November 2026, with the current version of Elabora (after 0.5.1) and OpenCode 2.2.5.

## The chat’s free models

These are the models Elabora’s chat offers, with OpenCode, with no account or key. Two runs each, under the chat’s rules.

| Model | Success | Typical time | Cost |
|---|---|---|---|
| DeepSeek V4.1 Flash | 12 of 12 | 1 min 30 | free |
| GLM-5.3 Flash | 11 of 12 | 2 min 20 | free |

- **DeepSeek V4.1 Flash**: the most reliable. It reads Elabora’s documentation, checks on screen and points out what it notices on the way. Rarely slips in a sentence in English.
- **GLM-5.3 Flash**: economical and effective; once edited the wrong sentence. Ran on 1 November, before the chat asked for shorter final answers, so its line is not quite comparable with DeepSeek’s.

## For comparison

The same requests, on 1 November 2026, one run each.

| Model | Success | Typical time | Cost per request |
|---|---|---|---|
| Claude Haiku 5.5 | 5 of 6 | 30 s | about 1 US cent |
| Claude Sonnet 5.5 | 6 of 6 | 45 s | about 15 US cents |
| GPT 6 Luna | 5 of 6 | 50 s | included in the ChatGPT subscription |
| GPT 6.1 Terra | 6 of 6 | 40 s | included in the ChatGPT subscription |

- **Claude Haiku 5.5**: fast and very cheap; did not find how to change a component.
- **Claude Sonnet 5.5**: the steadiest, with the clearest explanations.
- **GPT 6 Luna**: fast; edited the wrong sentence.
- **GPT 6.1 Terra**: fast and reliable.

Claude ran under the rules of Elabora’s chat, through OpenCode, with a pay-as-you-go API key. GPT ran in Codex, with its own terminal: not quite the same test, since Codex can change the files itself, where the chat requires Elabora’s tools.

## The limits of these figures

- **Few runs.** Two per free model, one for the others: a difference of one request proves nothing.
- **Free models change without notice.** Their provider can update, replace or withdraw them: a result holds at its date.
- **An automatic check says whether the request was done**, not whether the text is well written. We read the answers, but that judgement is not in the table.
- **Times depend on the load** of the servers and the computer: they give an order of magnitude.

To choose your AI, see [Working with your AI](/en/docs/working-with-your-ai/).
