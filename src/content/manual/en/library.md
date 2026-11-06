---
title: Library, archives and history
description: Where your courses live, how to import, export and delete them, and how to go back to an earlier version.
slug: library
group: more
order: 1
---

## Where your courses live

Elabora keeps your courses in its library, a folder on your computer that no sync service (iCloud, OneDrive, Dropbox) touches:

- Mac: `~/Library/Application Support/Elabora/Library` (in the Finder: Go menu › Go to Folder…, then paste this path);
- Windows: `%LOCALAPPDATA%\Elabora\Library` (paste it into File Explorer’s address bar).

Each course is a plain folder there, which your AI edits with the `elabora` command. To exchange a course, you do not copy that folder: you send each other a `.elabora` archive.

## Importing a course

- On the home page, **Import…** › **An Elabora archive…** or **A course folder…**;
- or drop the archive or the folder on the home page;
- or double-click a `.elabora` file in the Finder or File Explorer (on a Mac, you can also drop it on Elabora’s icon in the Dock).

Elabora copies the course into its library, then opens it. An imported folder stays where it was, untouched: Elabora works on its own copy, and says so (“Copy imported into Elabora”). For your AI to work on that copy, send it your requests from the **Agent** panel.

If the library already holds this course, Elabora asks: **Replace** (the old one goes to the trash) or **Keep both**.

## Exporting a course

In a home page card’s **…** menu, or in the course title’s menu: **Export…**. The **Export course** window makes a `.elabora` file wherever you say.

- **Include history** adds every earlier version, replaced media and what agents did. It is for carrying on the work on another computer, not for a client.
- **Include the sources** adds the documents attached to the course (the brief, recordings…). Off by default: these documents often hold personal data, and they are heavy.

An archive without history is what you send to a colleague, or to your client as the sources of their course, in an open format.

<!-- capture: the Export course window with its two switches -->

## Examples

Under **Examples**, on the home page, courses that come with Elabora. A click opens your copy (made the first time, then reopened the next times). **Start again from the example**, in its **…** menu, makes a fresh copy; the previous one stays in the library.

## Deleting, restoring

**Delete**, in a card’s **…** menu, asks for confirmation, then moves the course and its history to Elabora’s **Trash** (left column of the home page). Each course there says the day it will be deleted for good: 30 days later, the next time Elabora starts. Until then, **Restore** puts it back in the library, and **Delete for good** deletes it right away (this cannot be undone).

## History and backups

Elabora saves as you go and keeps backups of your courses, regularly and around your AI’s work. There is nothing for you to do.

The check mark next to the course title opens the **Course history**:

- at the top, named **Backups**, such as the one for each published package;
- then the work day by day: your sessions and each agent’s batches.

Choose a row: it says what changed, and where. **Undo this change** undoes that change; **Revert to this point** puts the whole course back as it was then. Going back is itself a change, which you can undo.

Elabora keeps every backup for 24 hours, then one per hour up to 7 days, one per day up to 30 days, then one per week. Named versions stay until you delete them. After 30 days, media removed from the course may disappear from older backups unless a named version contains them. The documents attached to the course (its sources) are not backed up: keep your originals.
