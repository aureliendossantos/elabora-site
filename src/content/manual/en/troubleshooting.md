---
title: Troubleshooting
description: Known problems and their fixes, and what to send us when something goes wrong.
slug: troubleshooting
group: more
order: 3
---

## Installing

### macOS refuses to open Elabora the first time

That is expected as long as Elabora is not signed by a developer Apple recognises: go through “System Settings” › “Privacy & Security” › “Open Anyway” (see [installing Elabora](/en/docs/install/)). Right-click › “Open” is no longer enough on recent versions of macOS.

### macOS says Elabora “is damaged”

The same goes if importing a video says ffmpeg “cannot start on this computer”. Open the Terminal app (Applications › Utilities), paste this line and press Return:

```
xattr -dr com.apple.quarantine /Applications/Elabora.app
```

It removes the quarantine macOS puts on downloaded files. Please tell us too.

### Windows blocked the installer

On the “Windows protected your PC” screen: “More info”, then “Run anyway”. If “Smart App Control” is what blocks it, there is no button to get past it: do not turn it off (it cannot always be turned back on), write to us.

### Installing the Microsoft Visual C++ component fails

Or you declined the permission: the installer stops. Run it again and allow Microsoft Visual C++. If the problem persists, send us the code shown and the file `%TEMP%\Elabora-vc-redist.log`.

### Your antivirus blocks Elabora

Or one of its files (`ffmpeg.exe`, `ffprobe.exe`, `esbuild.exe`): these are well-known programs, not signed yet. Tell us the name your antivirus gives the threat.

## With your AI

### The agent cannot run `elabora`

It probably asks for your permission: allow it. On a Mac, if macOS refuses to run it, the `xattr` line above fixes it. If you opened the agent yourself, give it the command’s path (see [working with your AI](/en/docs/working-with-your-ai/)).

### The agent edits a different folder from the one Elabora shows

After an import, Elabora works on its own copy, in its library. Send your requests from the **Agent** panel: they open the agent on the right copy.

## In a course

### “Elabora had to close …: its engine stopped”

What was saved is kept: open the course again to carry on. If it happens again, send us the log.

### An import is refused

The message says why. The most common cases: the course comes from a newer version of Elabora (update Elabora); it is a compressed folder, not an Elabora archive (extract it, then import the folder); the file is only in iCloud (download it first); the disk is short of space.

### An image, a video or an audio file does not import

Elabora says so if it cannot read the file. If it says ffmpeg is missing or cannot start, reinstall Elabora (on a Mac, try the `xattr` line first).

## Voices

### “The local voices do not work on this computer”

The message adds “ONNX Runtime does not load”. On Windows, the local voices need the Microsoft Visual C++ component the installer sets up: run Elabora’s installer again and allow it.

### The voices could not be downloaded

Check the connection, then try again: an interrupted download resumes where it stopped.

### ElevenLabs refuses your key

Or it says a permission is missing: check the key on elevenlabs.io, and tick **Text to Speech · Access**, **Voices · Read** and **User · Read**. To transcribe with ElevenLabs, the key also needs the Speech to Text permission.

### Your ElevenLabs quota for the month is used up

It comes back when it renews, or with a larger plan. Local voices stay free.

## Online reviews

### “Your Elabora session ended on this device”

You were signed out from elsewhere, or the session had not been used for 90 days. Nothing changed in your courses: **Sign in again**.

### No connection

Nothing is sent, and nothing will go out later on its own: a reply you were writing stays in its field; send it again once you are online.

## What to send us

Write to contact@elabora.studio (the link in the beta note, on the home page, opens a ready-made email), with:

1. What you were doing and what happened, in a few words, with a screenshot if you can.
2. Elabora’s log, `elabora.log` (and `elabora.old.log` if there is one). On a Mac: **Help** menu › **Show Elabora log**, or the folder `~/Library/Logs/Elabora`. On Windows: the folder `%LOCALAPPDATA%\Elabora\logs`. Its first line gives your Elabora version and your system; it holds technical messages, not the content of your courses.
3. If Elabora does not open at all: a screenshot of the message and, on a Mac, the crash reports whose name starts with `Elabora`, in `~/Library/Logs/DiagnosticReports`.
4. The file you were importing, if the problem comes from an image, a video or an audio file (or at least its format and size).

Only send a whole course if we ask for it, and only if it holds nothing confidential for your clients.
