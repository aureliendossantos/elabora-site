---
title: "Storyline “This project is invalid or corrupt”: how to recover it"
seo: "Storyline 360 “This project is invalid or corrupt and cannot be opened”: how to recover your project (2026)"
description: "Storyline 360 says a project is invalid or corrupt: AutoRecovery, the temporary files, Cloud Backup, earlier versions, the media inside, and how Elabora keeps a course."
slug: storyline-project-invalid-or-corrupt
kind: fix
tools: [storyline]
checked: 2026-11-08
summary: "“This project is invalid or corrupt and cannot be opened” has filled E-Learning Heroes threads since 2013, and new ones came in 2026, after a crash, a restart during a save or an update. What helps, in order: AutoRecovery, Storyline’s temporary files, Cloud Backup in Review 360, an earlier version of the file, the media inside the .story, then Articulate’s support. Elabora keeps a course as a folder of plain files, with a history of backups."
published: 2026-11-08
updated: 2026-11-08
order: 25
draft: true
faq:
  - q: Where are Storyline’s temporary files?
    a: "On Windows, in %appdata%\\Articulate\\Storyline (paste it into File Explorer’s address bar). Copy the newest file whose name starts with the project’s name to the desktop, then change its .tmp extension to .story and open it. Storyline leaves these files there after a crash."
  - q: Can I get my media back from a corrupt .story file?
    a: "Often, yes. A .story file is a ZIP archive: rename a copy to .zip and open it to find the project’s images, audio and video, under new file names. The slides themselves have to be rebuilt."
  - q: How do I protect a Storyline project?
    a: "Work on a local disk, outside OneDrive, Dropbox and network drives; save a numbered copy with Save As at each milestone; and tick “Upload project file to Review 360” when you publish, so that each version keeps a backup of the whole project."
---

## The problem

Storyline 360 starts to open a project, then stops on “This project is invalid or corrupt and cannot be opened.” A thread with that title started in November 2013 and has 138 replies ([This project is invalid or corrupt](https://community.articulate.com/discussions/discuss/this-project-is-invalid-or-corrupt-/818358)). In 2026, new reports came in:

- a 98.6 MB project, after the computer restarted during a save ([Storyline file will not open](https://community.articulate.com/discussions/discuss/storyline-file-will-not-open/1255686), 30 March 2026);
- a project its author had worked on “for the past six months” ([Help needed to recover corrupt file](https://community.articulate.com/discussions/discuss/help-needed-to-recover-corrupt-file/1256942), 16 April 2026);
- projects that broke on closing after updates ([13 replies](https://community.articulate.com/discussions/discuss/storyline-is-overwriting-and-corrupting-projects-when-closing-after-recent-updat/1258558), April 2026), and a file published for review that stopped opening after an update ([1 September 2026](https://community.articulate.com/discussions/discuss/this-project-is-invalid-or-corrupt-and-/1270195));
- assets reported as corrupt, whose recovery removed the AI-generated audio and captions from the slides ([Storyline File Assets Corrupted](https://community.articulate.com/discussions/discuss/storyline-file-assets-corrupted/1270675), 9 September 2026).

Articulate fixed precise causes in 2026: projects with zoom regions marked as corrupt (build 3.108.36078.0, 12 January 2026) and projects with a zoom region that would not open (build 3.122.37526.0, 23 July 2026), according to the [version history](https://www.articulatesupport.com/article/Articulate-Storyline-360-Version-History). Update Storyline first, then try the steps below in order, always on a copy of the file.

## What helps in Storyline

1. **Let AutoRecovery offer its versions.** After a crash, open the project again: Storyline lists the temporary versions it kept. Choose the one with the most recent time from the drop-down, then **Open** or **Save as** ([Recover a Corrupt Project](https://www.articulatesupport.com/article/Storyline-360-Recover-a-Corrupt-Project), updated 16 January 2026).
2. **Open the temporary file yourself.** On Windows, open `%appdata%\Articulate\Storyline`. Copy the newest file whose name starts with the project’s name to the desktop, change its `.tmp` extension to `.story`, then open it ([IconLogic, Rescue Corrupt Projects](https://blog.iconlogic.com/2024/08/articulate-storyline-360-rescue-corrupt-projeccts.html), August 2024). Turn on file name extensions in File Explorer first, so that the rename takes.
3. **Download the Cloud Backup.** When you publish to Review 360 with **Upload project file to Review 360** ticked, Review 360 keeps the whole project with that version. In Review 360, the versions with a cloud icon in the **Version** drop-down hold one: download it ([Cloud Backup](https://www.articulatesupport.com/article/Storyline-360-Cloud-Backup), updated 23 October 2026). Download it and open the copy: the **Restore** option permanently deletes the newer versions.
4. **Go back to an earlier copy of the file.** OneDrive, SharePoint and Dropbox keep earlier versions of a file (**Version history**), and so does File History on Windows. Your numbered copies count too.
5. **Take the media out of the .story file.** A `.story` file is a ZIP archive. Rename a copy to `.zip` and open it: the images, audio and video are inside, under new names ([forum tip](https://community.articulate.com/discussions/discuss/this-project-is-invalid-or-corrupt-/818358/replies/818493), September 2023). The slides remain to rebuild.
6. **Send the file to Articulate’s support.** When these steps fail, the staff ask for the `.story` file and open a support case. Keep working on a copy meanwhile.

To protect the next project: work on a local disk, outside OneDrive, Dropbox and network drives, as Articulate’s staff advise ([2023 answer](https://community.articulate.com/discussions/discuss/storyline-file-loading-too-long-and-cannot-open/872775)); save a numbered copy with **Save As** at each milestone; and publish to Review 360 with the project file.

## How Elabora keeps a course

An Elabora course is a folder of plain files: `course.json`, one file per screen, and its media. It lives in Elabora’s library, a folder that no sync service touches ([Library, archives and history](/en/docs/library/)).

- Elabora saves as you go and keeps backups: each one for 24 hours, then one per hour up to 7 days, one per day up to 30 days, then one per week. Each published package leaves a named version.
- In the **Course history**, **Undo this change** undoes one change, and **Revert to this point** puts the whole course back as it was then. Going back is itself a change, which you can undo.
- To send a course to someone, Elabora writes a `.elabora` archive.

Coming from Storyline? The import, in Beta, takes a Storyline project (`.story`) or a published Storyline course, as a folder or a ZIP, and its report lists what it could not bring over ([Bringing in a Storyline or Rise course](/en/docs/import-storyline-rise/)).
