---
title: Creating a course
description: Describe the course, attach your client’s documents, refine the request and let your AI write the first course plan.
slug: creating-a-course
group: create
order: 1
---

Everything starts on the home page, with **New course**. The page that opens asks **What do you want to create?**. Nothing is created until you click one of the buttons at the bottom, and what you write stays there as long as the app is open: you can go back to your courses and pick it up later.

<!-- capture: the New course page with a written request, two attached documents and the questions below -->

## Describing what you want

Write your request as you would to a colleague: the subject, who it is for, what learners will be able to do at the end.

> A course of about 15 minutes for support technicians: diagnose a network failure in three steps, with a case study at the end.

## Attaching your client’s documents

**Attach documents** opens the **Type of document** menu. The type you choose tells your AI what to do with it:

- **Storyboard or notes**: the AI follows its outline and keeps its texts.
- **PowerPoint mockup**: its slides become screens, its texts are kept.
- **Existing course** (**Beta**): a Storyline or Rise course, which Elabora imports. See [bringing in a Storyline or Rise course](/en/docs/import-storyline-rise/).
- **Video or recording**: a talk, an interview, transcribed on your computer.
- **Other documents**: the client’s brief, procedures, the expert’s notes. The AI draws the objectives from them and cites its sources.
- **Web page…**: paste its address, the AI reads and cites it.

You can also drop files on the page. Each document shows as a tag above the request; its cross removes it.

A mockup, a storyboard or a video adds a question of its own: for a mockup, **Follow it closely**, **Draw on it** or **Only its texts**; for a storyboard, **Approved by the client** (its texts are kept word for word) or **Still a draft**; for a video, **Transcribe it** or **Show it in the course**.

## Where your documents go

They are copied into the course’s `sources` folder. When the course opens, Elabora makes, in the background, a version of each that the agent reads easily: a Word document with its comments and tracked changes, a deck slide by slide with its notes, a recording transcribed on your computer. If a recording is waiting for the transcription model, a message says so, with **Download the model (…)** and **Later**.

Sources never go into a package or a publication, nor into an exported archive unless you tick **Include the sources** (a brief often holds personal data). Elabora does not change them and does not include them in its backups: keep your originals.

## Refining your request

Under **Refine your request**, a few questions, all optional:

- **Who is it for?** and **How long?**
- **In which language?** (the interface language by default)
- **Which format?**: **Slides** (one screen at a time, as in Storyline) or **A scrolling page** (each part reads as you scroll, as in Rise)
- **3D elements?**
- **Include voices?**: **Local voices** (free, made on your computer, in French and English), **ElevenLabs voices** (more expressive, with your own account) or **No**

**More choices** adds **Which business goal?**, **Quizzes?**, **A case to solve?**, **Which tone?**, **Accessibility?**, **For which LMS?** and **Which look?** (**Like another course…** from your library, or **From a document or a site…** of the client’s).

An unanswered question stays grey, “Claude decides”: the AI chooses, then tells you at the top of the course plan what it decided by itself. You can come back to it.

## Choosing the AI and seeing the request

In the corner of the request, a menu chooses the AI that will receive it (your preferred AI by default), or **Copy request**. **See the request** shows word for word what the AI will receive, with a **Copy** button.

## Creating the course

Next to the buttons, a sentence says what the AI will write first. Click its underlined words to choose: **a plan, for you to approve** (the AI waits for your approval before writing the screens) or **a plan, then every screen** (a complete first draft; the plan stays a draft until it is approved).

- **Create with Claude** (or with ChatGPT): the course is created, your documents copied, your answers kept in the course (the audience, business goal and duration in the course plan, the format and the LMS in the settings, the rest as notes for the agent). The course opens on its **Course plan** view, and your AI’s app opens with the request. This button turns on as soon as you have written a request or attached a document.
- **Create manually**: the same course, opened on **Slide**, with no request sent.
- With no AI installed, the page says so (with **Install…**) and offers **Create and copy the request**: paste it into the AI of your choice.

The course is first called “New course”; change its title in **Course settings**. Next: [the course plan](/en/docs/course-plan/).
