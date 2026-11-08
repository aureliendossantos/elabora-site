---
title: "How to test a SCORM package without an LMS"
seo: "How to test a SCORM package without an LMS: free ways, step by step (2026)"
description: "Check a SCORM package before it reaches the client’s LMS: SCORM Cloud and its debug log, a Moodle sandbox, the moments that break tracking, and Elabora’s emulator."
slug: test-scorm-package-without-lms
kind: fix
tools: [storyline, rise]
checked: 2026-11-08
summary: "The client’s LMS is often out of reach until delivery, so authors test somewhere else first. The usual path: SCORM Cloud’s free plan and its debug log, Moodle’s public sandbox for a real LMS, then the moments that break tracking, such as closing the tab in the middle of a screen. Elabora runs its packages, and those of other tools, in an emulator of 11 LMS profiles."
published: 2026-11-08
updated: 2026-11-08
order: 24
draft: true
faq:
  - q: Can I test a SCORM package for free?
    a: "Yes. SCORM Cloud’s Trial plan is free with no time limit: 3 courses, 5 GB and 10 active registrations you can reuse (Rustici’s plans page, read on 8 November 2026). Moodle’s public sandbox is free too, and goes back to blank every hour."
  - q: Is a test in SCORM Cloud enough?
    a: "It shows that the package follows the standard and tracks as it should. Each LMS then adds its own rules: a launch in a frame or a pop-up, a size limit, how much progress data it keeps. A last run in the client’s LMS, with a test learner, settles those."
  - q: Why do learners lose their progress when they close the tab?
    a: "Some courses save progress at the moment the page unloads. Chrome stopped running unload handlers on every site with Chrome 155 (6 October 2026), so such a course loses what came after its last save."
---

## The problem

You exported a SCORM package, and it plays in preview. Now it goes to the client’s LMS, which you often reach only at delivery, and you hope it reports completion, saves progress and resumes where the learner left off.

Authors keep asking how to check it first. In October 2026, one shared on E-Learning Heroes a test LMS they had built with Claude Code to check SCORM and xAPI packages on their own computer before uploading them ([SCORM/xAPI Test LMS](https://community.articulate.com/discussions/discuss/scormxapi-test-lms/1273551), 21 October 2026). Here are the ways to test, from the quickest to the most thorough.

## Ways to test a package today

1. **Upload it to SCORM Cloud.** Rustici’s SCORM Cloud plays a package as a strict LMS does. Its Trial plan is free with no time limit: 3 courses, 5 GB, and 10 active registrations you can reuse ([plans](https://rusticisoftware.com/products/scorm-cloud/pricing/), read on 8 November 2026). Upload the ZIP, launch it, then open its debug log: every call the course made to the LMS, in order. The log opens from the course’s sessions in the Library, or with **View Debug** once the course’s Navigation Bar is on ([Accessing Debug Logs](https://support.scorm.com/hc/en-us/articles/206163696-Accessing-Debug-Logs-in-SCORM-Cloud), February 2025). Delete old courses as you go to stay within the plan.
2. **Try it in a real LMS for an hour.** Moodle’s public sandbox runs the latest Moodle (5.3 on 8 November 2026) and goes back to blank every hour, on the hour ([sandbox.moodledemo.net](https://sandbox.moodledemo.net/)). Add the package as a SCORM activity with the teacher account, then take it with the student account. Use a package without client content: everyone shares these accounts until the reset.
3. **Read the calls.** Look for the status, the score and the bookmark the course sends (`LMSSetValue` in SCORM 1.2, `SetValue` in SCORM 2004), and for a commit as the learner moves on. SCORM Cloud shows them in its debug log. In your own Moodle, an administrator can turn on **Activate API debug and tracing** (Site administration › Plugins › Activity modules › SCORM package) to log them ([SCORM settings](https://docs.moodle.org/en/SCORM_settings), edited 14 August 2025).
4. **Test the hard moments.** Most problems appear after the happy path:
   - close the tab in the middle of a screen, then reopen the course: it should resume there;
   - finish the quiz, close, reopen: the status and the score should stay;
   - launch it as the client’s LMS does, in a frame or in a pop-up window;
   - finish it on a phone.

   Closing matters more since 6 October 2026: Chrome stopped running `unload` handlers on every site with Chrome 155, and advises saving when the page becomes hidden ([Deprecating the unload event](https://developer.chrome.com/docs/web-platform/deprecating-unload), updated 16 October 2026). A course that saves progress only as the page unloads loses what came after its last save.
5. **Finish in the client’s LMS.** Each LMS adds its own rules: how it launches courses, the size it accepts, how much progress data it keeps. Ask for a test learner account and run the hard moments there once, before learners arrive. Our [LMS profiles](/en/docs/developers/lms-profiles/) list these rules for ten LMSs, with their sources.

## What Elabora does

Elabora tests a course the way this page does, on your computer.

- **Preview** plays the course in a simulated LMS, as learners will see it once delivered ([Preview and checks](/en/docs/preview-and-checks/)).
- `elabora test` builds the package and runs it in Elabora’s LMS emulator, for the client’s LMS (or all of them with `--profile all`) and each launch mode (frame, pop-up…). Each run goes to the second screen, closes the window abruptly, relaunches the course and checks that it resumes on the same screen. It then checks the status and score the LMS keeps, the end of the session when the learner quits, and a review session that leaves the status as it was ([command line](/en/docs/developers/cli/)).
- The emulator knows 11 profiles: SuccessFactors, Workday, Cornerstone, Docebo, Moodle, Totara, 360Learning, Rise Up, SCORM Cloud, Teach Up, and an unknown LMS with the strictest documented rules ([LMS profiles](/en/docs/developers/lms-profiles/)).
- `elabora test --package course.zip` runs a package from another tool, Storyline or Rise for example, in the same emulator. It checks that the course finds the LMS and opens its session, lists the values the LMS refuses and the unload handlers that lose progress in Chrome and Edge, and checks that progress is saved before the window closes. For resume and completion inside that course, SCORM Cloud and the client’s LMS remain the reference.
- `elabora inspect course.zip` reads any SCORM package: its manifest, the SCORM version, the launch file, the mastery score, the file names some servers refuse, and its five largest files.

The `elabora` command comes with Elabora, and your AI runs it for you ([Working with your AI](/en/docs/working-with-your-ai/)). The emulator prepares the last run in the client’s LMS.
