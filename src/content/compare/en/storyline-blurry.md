---
title: "Storyline 360 blurry on a high-DPI screen or at 150%: the fix"
seo: "Storyline 360 blurry or pixelated on a high-DPI screen, at 150% or in Parallels: the fix (2026)"
description: "Storyline 360 looks blurry on a 4K screen, at 125 or 150% scaling or in Parallels? The Windows setting that makes it sharp, what it costs, and Elabora at 150%."
slug: storyline-blurry-high-dpi
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Let Storyline draw its own interface: in the program’s Properties, Compatibility tab, click Change high DPI settings, tick Override high DPI scaling behavior and choose Application. The interface turns sharp, but smaller. Up to build 3.129 (28 October 2026), Articulate lists no fix for the editor."
published: 2026-11-06
updated: 2026-11-09
order: 23
faq:
  - q: Why does Storyline 360 look blurry at 150%?
    a: "When an app draws itself at 100%, Windows enlarges its picture to the screen’s scale, and the enlarged picture is blurry. The compatibility setting below lets Storyline draw at 100% on its own: sharp, but smaller."
  - q: Is Articulate fixing it?
    a: "A feature request for better high-resolution support has been logged since 2023, according to Articulate’s staff. As of 6 November 2026, no Storyline 360 build lists a fix, and the roadmap’s one high-DPI item concerns the screen recorder."
---

## The problem

On a 4K screen, or when Windows scales the display to 125, 150 or 200%, Storyline 360’s interface looks “blurry, like it’s out of focus” ([Storyline 360 app is blurry in Windows 10 on 4K monitor](https://community.articulate.com/discussions/discuss/storyline-360-app-is-blurry-in-windows-10-on-4k-monitor/968980)). The same happens in Parallels on a Mac’s Retina screen ([Mac M1 With Parallels: Articulate Storyline is Blurry](https://community.articulate.com/discussions/discuss/mac-m1-with-parallels-articulate-storyline-is-blurry/1012507)).

Windows enlarges the picture of an app that draws itself at 100%, and the enlarged picture is blurry. The fix below lets Storyline draw at the screen’s own size.

## The fix in Storyline today

1. Close Storyline 360.
2. Right-click its shortcut or its program file, and choose **Properties**.
3. In the **Compatibility** tab, click **Change high DPI settings**.
4. Tick **Override high DPI scaling behavior**, and set **Scaling performed by** to **Application**.
5. Open Storyline again: the interface is sharp.

The cost: Storyline then draws at 100%, so its text and buttons look smaller on a screen scaled to 150% or more, and some authors report other display issues with this setting. Setting Windows itself to 100% gives the same sharpness, with everything small. In Parallels on a Mac, apply the setting inside the Windows virtual machine.

## Will Articulate fix it?

In August 2023, Articulate’s staff answered that a feature request to improve support for high-resolution displays was logged, and suggested the setting above ([Pixelated User Interface in Storyline 360](https://community.articulate.com/discussions/discuss/pixelated-user-interface-in-storyline-360/831367)). Up to build 3.129 (28 October 2026), the version history lists no fix for the editor’s blur, and the Articulate 360 roadmap (updated 5 November 2026) mentions high-DPI displays only for the screen recorder.

## Or work in Elabora, sharp at every scale

Elabora was designed for today’s screens. Its interface is HTML and CSS drawn by Chromium, the engine of Chrome, so it follows the density of each screen, at 150% as at 100%. On a Mac, Elabora runs as a Mac app.

Below, Elabora’s editor under Windows at 150%, at its real size: the toolbar and the Properties panel, cut out of a [full capture](/media/compare/elabora-windows-150.webp) of the editor on the example course Phishing by numbers.

[![Elabora’s editor under Windows at 150%, at real size: the toolbar with Comments, Properties and Agent, and the Properties panel of a narration line, with sharp text and icons.](/media/compare/elabora-windows-150-detail.webp)](/media/compare/elabora-windows-150.webp)
