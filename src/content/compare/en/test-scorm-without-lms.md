---
title: "How to test a SCORM package without an LMS"
seo: "How to test a SCORM package without an LMS: free ways, step by step (2026)"
description: "Test a SCORM package for free before it reaches the client’s LMS: upload it to SCORM Cloud, read its debug log, and check the moments that break tracking."
slug: test-scorm-package-without-lms
kind: fix
tools: [storyline, rise]
checked: 2026-11-08
summary: "Upload the package to SCORM Cloud’s free plan and read its debug log. Then close the tab mid-screen and reopen the course to check that it resumes, and finish with one run in the client’s LMS."
published: 2026-11-08
updated: 2026-11-09
order: 24
draft: true
faq:
  - q: Can I test a SCORM package for free?
    a: "Yes. SCORM Cloud’s Trial plan is free with no time limit: 3 courses, 5 GB and 10 active registrations you can reuse (Rustici’s plans page, read on 8 November 2026). Moodle’s public sandbox is free too, and resets every hour."
  - q: Is a test in SCORM Cloud enough?
    a: "It shows that the package follows the standard and tracks correctly. Each LMS adds its own rules, such as how it launches courses, the package size it accepts and how much progress data it keeps. One last run in the client’s LMS, with a test learner, covers those."
  - q: Why do learners lose their progress when they close the tab?
    a: "Some courses save progress only when the page unloads. Since Chrome 155 (6 October 2026), Chrome no longer runs unload handlers on any site, so these courses lose everything after their last save."
---

## The problem

Your SCORM package plays in preview. The real test is the client’s LMS: it has to record completion, save progress, and resume where the learner left off. You often get access to that LMS only at delivery, so you need somewhere else to check first.

The steps below go from the quickest to the most thorough.

## Ways to test a package today

1. **Upload it to SCORM Cloud.** Rustici’s SCORM Cloud plays a package the way a strict LMS does. Its Trial plan is free with no time limit: 3 courses, 5 GB, and 10 active registrations you can reuse ([plans](https://rusticisoftware.com/products/scorm-cloud/pricing/), read on 8 November 2026). Upload the ZIP and launch the course. Then open its debug log, which lists every call the course made to the LMS, in order. To find the log, open the course’s sessions in the Library, or turn on the course’s Navigation Bar and click **View Debug** ([Accessing Debug Logs](https://support.scorm.com/hc/en-us/articles/206163696-Accessing-Debug-Logs-in-SCORM-Cloud), February 2025). Delete old courses as you go to stay within the plan.
2. **Try it in a real LMS for an hour.** Moodle’s public sandbox runs the latest Moodle (5.3 on 8 November 2026) and resets every hour, on the hour ([sandbox.moodledemo.net](https://sandbox.moodledemo.net/)). Add the package as a SCORM activity with the teacher account, then take it with the student account. Anyone can use these accounts until the reset, so test with a package that holds no client content.
3. **Read the calls.** Check that the course sends a status, a score and a bookmark (`LMSSetValue` in SCORM 1.2, `SetValue` in SCORM 2004), and commits them as the learner moves on. SCORM Cloud lists these calls in its debug log. In your own Moodle, an administrator can log them by turning on **Activate API debug and tracing** (Site administration › Plugins › Activity modules › SCORM package) ([SCORM settings](https://docs.moodle.org/en/SCORM_settings), edited 14 August 2025).
4. **Test the hard moments.** Most problems show up away from the happy path:
   - close the tab in the middle of a screen, then reopen the course: it should resume there;
   - finish the quiz, close, reopen: the status and the score should stay;
   - launch it the way the client’s LMS does, in a frame or in a pop-up window;
   - finish it on a phone.

   Closing the tab matters more since Chrome 155 (6 October 2026). Chrome no longer runs `unload` handlers on any site, and recommends saving when the page becomes hidden ([Deprecating the unload event](https://developer.chrome.com/docs/web-platform/deprecating-unload), updated 16 October 2026). A course that saves progress only on unload now loses everything after its last save.
5. **Finish in the client’s LMS.** Each LMS adds its own rules: how it launches courses, the package size it accepts, how much progress data it keeps. Ask for a test learner account and run the hard moments there once, before learners arrive. Our [LMS profiles](/en/docs/developers/lms-profiles/) list these rules for ten LMSs, with their sources.

## What Elabora does

Elabora runs the same kind of checks on your computer.

- **Preview** plays the course in a simulated LMS, as learners will see it once delivered ([Preview and checks](/en/docs/preview-and-checks/)).
- `elabora test` builds the package and plays it in Elabora’s LMS emulator, with the client’s LMS profile (or every profile with `--profile all`) and each launch mode, frame or pop-up. Each run moves to the second screen, closes the window abruptly, and relaunches the course to check that it resumes on that screen. It also checks the status and score the LMS keeps, the end of the session when the learner quits, and that a review session leaves the status unchanged ([command line](/en/docs/developers/cli/)).
- The emulator has 11 profiles: SuccessFactors, Workday, Cornerstone, Docebo, Moodle, Totara, 360Learning, Rise Up, SCORM Cloud, Teach Up, and an unknown LMS with the strictest documented rules ([LMS profiles](/en/docs/developers/lms-profiles/)).
- `elabora test --package course.zip` plays a package from another tool, such as Storyline or Rise, in the same emulator. It checks that the course finds the LMS, opens a session, and saves progress before the window closes. It also lists the values the LMS refuses and any `unload` handlers that would lose progress in Chrome and Edge. To check resume and completion inside that course, use SCORM Cloud and the client’s LMS.
- `elabora inspect course.zip` reads any SCORM package and reports its manifest, SCORM version, launch file, mastery score, the file names some servers refuse, and its five largest files.

The `elabora` command comes with Elabora, and your AI can run it for you ([Working with your AI](/en/docs/working-with-your-ai/)).
