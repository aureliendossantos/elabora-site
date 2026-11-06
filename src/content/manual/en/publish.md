---
title: Publishing
description: Build the package for your client’s LMS, in the format it expects, choose its languages, set what the LMS receives, or publish the course on the web.
slug: publishing
group: deliver
order: 3
---

Everything starts in the **Publish** view, **Publishing** tab. The **Publish course** page lists the **Destinations**: **Review** (see [online reviews](/en/docs/online-reviews/)), **On the web** and the package for the LMS, named after its format (**SCORM 1.2 package**, **SCORM 2004 package**…). Tick what you want to send: the big blue button takes the name of what goes out (**Publish package**, **Publish on the web**, **Publish** for several destinations at once).

<!-- capture: the Publish page with its three destinations, the media quality and the Publish package button -->

## A package for your client’s LMS

1. Choose the LMS. Next to the package, **Choose LMS** opens **Course settings**, **Delivery** section, **Client’s LMS**. Elabora knows SuccessFactors, Workday, Cornerstone, Docebo, Moodle, Totara, 360Learning, Rise Up, SCORM Cloud and Teach Up: it then picks the format that LMS reads best, and checks the size it accepts. With no LMS chosen, it delivers SCORM 1.2, which every LMS reads, and points out the LMSs that would reject the package.
2. Choose the media quality: **Standard**, the normal choice, already optimized for the web; **Lighter**, for an LMS that limits package size; **Lightest**, for a slow connection. On the right, the course’s weight at that quality (see below).
3. Look at what is left to fix. Under **Before publishing**, the items under **Must fix: publishing stops** and **Needs attention**, with **Open checks** for the rest. See [checks](/en/docs/preview-and-checks/).
4. Publish: **Publish package** builds the ZIP. Elabora says “The package is ready”, with its size, and **Show in Finder** (on Windows, **Show in folder**). The package is in the course’s `dist` folder; then upload it to your client’s LMS.

**The format.** Under the LMS, **Format** says what Elabora picks, and why: “Automatic: SCORM 2004 for Docebo”, or “Automatic: SCORM 1.2, read by every LMS”. Choose another one when your client asks for it:

- **SCORM 1.2**: the most widespread, every LMS reads it;
- **SCORM 2004**: tracks completion and success apart, and keeps more progress;
- **cmi5**: the most recent, for LMSs that import it;
- **xAPI**: needs an LRS to keep learners’ tracking.

A format your client’s LMS refuses says so in the list: “SCORM 2004 (refused by Moodle)”. In **Publish**, the package takes the name of its format.

If the package is too heavy for the LMS, Elabora says so in one sentence, with the figures (“The package size is 130.2 MB, too large for Teach Up (up to 100 MB)”), then offers what to do: choose the LMS if it is not chosen, publish at the quality that fits (with its estimated size), see the **Largest files** (each opens the screen where it is shown) and, when no quality is enough, shorten the video or host it elsewhere.

Each published package leaves a named version in the [course history](/en/docs/library/); the left column of **Publish** lists them too.

## Several languages

When the course has a translation, **Publish** shows **Languages**: the course’s language, always in, then each translation. The package holds the languages you tick; at first, the course’s language alone. Each tick is one step ⌘Z undoes, and the choice is kept with the course, so that your AI builds the same package.

A translation you tick goes as it is. When it needs something, a line says so, with the way to settle it:

- “The French translation goes as it is: its translated plan awaits your approval.” **Approve** opens **Translation**, **Versions**, on that language.
- “3 texts stay in English.”, or “Some texts changed since the French translation: they stay in English.” **Translate** opens its table.

With two languages or more, choose how they leave:

- **One package**: learners switch languages in place, with **Language** in the player. The **Starting language** is the one they start in when their LMS gives none. When the player has no **Language**, a line offers to **Add** it.
- **One package per language**: for LMSs that manage language versions themselves, such as Docebo or SuccessFactors. Elabora then says “2 packages are ready, one per language.”

**On the web** publishes the same languages; online reviews stay in one language. In the **Player** tab, the **Language** row names the package’s languages, and offers **Choose the languages** when a translation is left out.

## The weight of media

On the right of the quality, Elabora gives the course’s weight at that quality, before anything is published. A click on it opens the list of its media: the heaviest first, each with its screen, its duration or size, and its weight; the others under a fold, then the player, fonts and texts. A click on a media file opens its screen; a right click also shows it in the Finder.

What Elabora can lighten on its own, it lightens, at every quality, Standard included. A photo saved as PNG, a video exported at too high a bitrate for its size, or a media file outside the web’s formats (a HEIC photo, a ProRes video) goes into the package as an optimized copy, made once; your files do not change. A screenshot or a diagram in PNG goes as it is: it is already light, and photo compression would blur its text.

The weight turns orange when a media file seems heavier than it needs to be for what it is and Elabora cannot lighten it on its own: an animated image, which would weigh several times less as a video. It comes first in the list, with the reason. Once the list has been opened, the weight is grey again; it turns orange again only for a new case. A long video is never at fault: twenty minutes of video naturally weigh hundreds of megabytes.

## What the LMS receives

These settings are in **Course settings**, **Course** tab:

- **Success**: **What the LMS receives** (**Completed or incomplete**, **Passed or incomplete**, **Passed or failed**, **Completed or failed**) and, except for the first, the **Passing score**, as a percentage.
- **Tracking**: **Once completed**, **Keep progress** or **Close the attempt** (the next time the course opens, it starts from the beginning); **Answers**: **Send answers to the LMS**, linked to objectives.
- At the top of the tab: the **Course title** and **Course description** for the LMS catalogue, the **Duration in minutes**, and the **Version** (three numbers, like 1.0.0): increase it with each delivery to signal the update to the LMS.

The technical details are in [Delivery formats](/en/docs/developers/delivery/) and [LMS profiles](/en/docs/developers/lms-profiles/).

## Publishing on the web

To show a course without an LMS (a demo course, an open training), publish it in your Elabora space. You need to be signed in (see [online reviews](/en/docs/online-reviews/)).

1. Tick **On the web**. The address shows: `your-space.elabora.page/course-name`, public but out of search engines.
2. **Settings**, next to it, offers:
   - **Address**: the course’s name in the address, fixed at the first publication;
   - **Progress**: **Kept in the browser** (learners resume where they left off, in that browser) or **None** (the course starts over at each visit);
   - **Navigation**: **As in the course**, or **Free**;
   - **Sharing image** (the first screen’s thumbnail) and **Search engines** (**Out of search engines** for now).
3. **Publish on the web**. Elabora builds, sends, then puts it online (only changed files are sent); you can keep working meanwhile. Each new publication replaces the previous one, at the same address.

Red checks stop the web publication, as they stop the package. Your account allows a limited number of courses on the web; **Settings** › **Account** shows where you stand and offers **Remove from the web…**: learners who started it will not be able to resume, and you can publish it again later at the same address. The technical details: [Web delivery](/en/docs/developers/delivery-web/).
