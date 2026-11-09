# Notes: How to test a SCORM package without an LMS

Page: `src/content/compare/en/test-scorm-without-lms.md`. Researched on 8 November 2026.

## Sources, with the day they were read

- SCORM Cloud plans (Trial: free, no time limit, 3 courses, 5 GB, 10 active registrations): https://rusticisoftware.com/products/scorm-cloud/pricing/ (8 Nov 2026)
- SCORM Cloud, Accessing Debug Logs: https://support.scorm.com/hc/en-us/articles/206163696-Accessing-Debug-Logs-in-SCORM-Cloud (article of February 2025, read 8 Nov 2026)
- Moodle public sandbox, Moodle 5.3, reset every hour: https://sandbox.moodledemo.net/ (8 Nov 2026)
- Moodle, SCORM settings, « Activate API debug and tracing »: https://docs.moodle.org/en/SCORM_settings (page edited 14 Aug 2025, read 8 Nov 2026)
- Chrome, Deprecating the unload event (unload handlers off on every site with Chrome 155, 6 Oct 2026): https://developer.chrome.com/docs/web-platform/deprecating-unload (updated 16 Oct 2026, read 8 Nov 2026)

## Left out of the page, and why

- **Demand.** Authors have asked how to test a package for years. On 21 October 2026, an author shared on E-Learning Heroes a test LMS built with Claude Code to check SCORM and xAPI packages locally ([SCORM/xAPI Test LMS](https://community.articulate.com/discussions/discuss/scormxapi-test-lms/1273551)). Removed on 9 Nov 2026: it proved the demand to us, and on the page it raised a question (should I build my own?) that the page never answered.

## Elabora facts, checked in the code

- `elabora test` and its 11 LMS profiles, launch modes and resume check; `elabora test --package` for other tools' packages (launch checks only); `elabora inspect`. Docs: `/en/docs/developers/cli/`, `/en/docs/developers/lms-profiles/`. The page names what Elabora does in plain words and leaves the commands to the developer docs.

## To check again

- The Trial plan's limits and the Moodle version.
- Whether Chrome's unload change reached Edge too.
