---
title: Installing Elabora
description: What you need, how to install Elabora on Mac or Windows, and what happens the first time you open it.
slug: install
group: start
order: 2
---

## What you need

- A Mac with Apple silicon (M1, M2, M3, M4…) or an Intel processor, or a PC running Windows 10 or 11, 64-bit.
- An AI, ideally. With a subscription, Elabora works with the agent you already use: the Claude app (with Claude Code) or the ChatGPT app (with Codex). Without one, Elabora’s chat works with OpenCode and free models, downloaded at your first message. For any other AI, Elabora copies the request and you paste it. Without an AI, you can still create and retouch a course by hand.

Local voices, word alignment and local transcription are unavailable on Intel Macs. You can still edit courses, use recordings and online services, and play narration already created.

Nothing else to install. Elabora brings what it needs: ffmpeg for video and audio, the `elabora` command your agent uses, and the browser used for captures and tests. Not even Node.

## Which file to download

| Your computer | File |
|---|---|
| Mac with Apple silicon | `Elabora-…-mac-arm64.dmg` |
| Mac with an Intel processor | `Elabora-…-mac-x64.dmg` |
| PC with Windows 10 or 11 (64-bit) | `Elabora-…-win-x64-installer.exe` |

On a Mac, Apple menu › “About This Mac” tells you: the “Chip” line (Apple M…) or “Processor” (Intel).

## On a Mac

1. Open the `.dmg` file, drag Elabora onto the Applications folder, then eject the “Elabora” disk.
2. Open Elabora from the Applications folder.

As long as Elabora is not signed by a developer Apple recognises, macOS refuses the first launch: it says it could not verify that Elabora is free of malware. Click “Done” (not “Move to Trash”), then open “System Settings” › “Privacy & Security”. In the “Security” part, a line says Elabora was blocked: click “Open Anyway”, then “Open Anyway” again in the window that follows, and confirm with your password (or Touch ID). The button stays there for about an hour: if it is gone, open Elabora from the Applications folder again. After that, Elabora opens normally.

If macOS says Elabora “is damaged”, see [troubleshooting](/en/docs/troubleshooting/).

## On Windows

1. If your browser is wary of the download, keep the file anyway (in Edge: the download’s “…” menu, “Keep”, “Show more”, “Keep anyway”).
2. Double-click the installer. If Windows shows “Windows protected your PC”, click “More info”, then “Run anyway”.
3. Accept the terms of the Microsoft Visual C++ component that comes with Elabora. If your PC lacks it, the installer installs it (the local voices need it): Windows may then ask for your consent or an administrator password. This step needs no connection.
4. Elabora installs for your user account only, with a shortcut on the Desktop and in the Start menu. If the installer asks you to restart, restart, then open Elabora from its shortcut.

## First launch: your preferred AI

The first time, five short pages introduce Elabora and what an agent can do for you. **Next** (or Enter) turns the page, **Back** goes back. The last one asks **Which AI do you want to use?**:

- **Claude** or **ChatGPT**, each in its app. Once chosen, each says what Elabora found on your computer: installed and signed in (with your plan), not signed in yet (**Sign in**), to be opened once first (**Open**), too old (**Update**) or missing (**Download**). Install or sign in to what is missing, then come back to the window: Elabora checks again by itself.
- **I don’t have a subscription**: OpenCode and free models, in Elabora’s chat. Nothing to install: Elabora downloads it at your first message.

Nothing is chosen in advance. Pick one, then **Get started**. You can change your mind at any time: on the home page, **You** menu › **Your preferred AI…**. What comes next: see [Working with your AI](/en/docs/working-with-your-ai/).

<!-- capture: the last page of the first launch, “Which AI do you want to use?”, with Claude, ChatGPT and “I don’t have a subscription” -->

## What Elabora downloads, and when

The installer holds the essentials. A few large items, useful only for some courses, are downloaded once per computer, the first time you need them. Elabora first offers each with a button:

- **Local voices**, to have narration spoken for free on your computer: per language, 354 MB for French, 126 MB for English.
- **Words timed to the voice**, to know exactly when each word is said.
- **Transcription**, to transcribe recordings and videos on your computer.
- **AI in Elabora**: OpenCode, the chat’s agent, a little over 100 MB. This one downloads by itself, at your first message in the chat.

These items stay out of your courses. You find them, with their size, in [Elabora settings](/en/docs/settings/), under **Downloaded items**, where you can uninstall them to get the space back.

## Language and appearance

The interface is in English or French, following your system’s language preferences (English for any other language). There is no language switch: change your system’s language, then restart Elabora. A new course takes the interface language; an existing course keeps its own. The light or dark theme follows your system too, unless you choose it in Settings › Personalization › Appearance (Automatic, Light or Dark).

## Updating, uninstalling

On Windows, Elabora updates itself: on an unmetered connection, the new version downloads in the background, then installs when you quit Elabora, or right away with “Restart now”. If you turn off “Update automatically” (Settings › Updates), Elabora only lets you know. On a Mac, the beta is not signed and cannot install an update itself: Elabora says that a new version exists and opens its download page; then replace Elabora in the Applications folder.

To uninstall: on a Mac, drag Elabora from the Applications folder to the Trash; on Windows, Settings › Apps › Installed apps › Elabora › Uninstall.

Either way, your courses stay: they live in [the library](/en/docs/library/), not in the app.
