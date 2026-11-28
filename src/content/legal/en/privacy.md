---
title: "Privacy policy"
lang: en
slug: privacy
updated: 2026-11-28
---

This page says what data Elabora processes, why, on what basis, for how long, and how to exercise your rights. It covers the `elabora.studio` site, author accounts, publishing and reviewing courses, team projects, the online editor, the connector for AI, the courses published on `<handle>.elabora.page` and the desktop app.

**In short:**

- The service's data is stored in the European Union.
- Elabora runs no advertising and no audience measurement, and keeps no log of visits to courses.
- Only a team's members read its projects. Elabora does not read their content (section 3).
- Published courses set a single technical cookie, which identifies nobody (section 5).
- In a browser, signing out erases from the device the copy of your projects and your ElevenLabs key (section 5).
- The desktop app and the online editor send no usage statistics. A text of your course goes to an AI or voice service only if you ask for it (section 8).
- An AI such as Claude or ChatGPT reads your team projects only if you allow it, on an Elabora page (section 8).
- The app's chat only uses models whose providers do not keep your texts and do not use them to train their models (section 8).

## 1. Who is responsible

**Aurélien Dos Santos**, publisher of Elabora in a non-professional capacity, 9 rue des Sabots, 31400 Toulouse, France, is the controller for processing related to accounts, the security of the service, messages received and his legal obligations. Contact: **contact@elabora.studio**. Elabora has not appointed a data protection officer.

**The data in courses and reviews** belongs to their author. When an author processes personal data in a course or a review, the author is the controller; Elabora hosts it for them as a processor (section 4 of the [terms of use](/en/terms/)). For a question about a course or a review, contact its author. You can also write to us: we pass your request on to them.

**Team projects** belong to the team's organisation. It is the controller for the personal data it puts in them; Elabora hosts that data for it as a processor. For a question about a team project, contact the team, or write to us: we pass your request on to its organisation.

## 2. Author accounts

An author signs in with their e-mail address and a code received by e-mail. Sign-up is by invitation for now.

| Data | Why | Legal basis | How long |
|---|---|---|---|
| E-mail address, language, dates (creation, update, last sign-in), account state, quotas | Running the account, writing to you about the service | Performance of the contract | As long as the account exists. After **24 months** without a sign-in or use, we write to you; without a sign-in within **30 days**, the account is deleted. The account of the only owner of a team or an organisation where other people work is not deleted this way |
| Handle (your space's address) and display name | Naming your space and signing your replies to reviewers | Performance of the contract | As long as the account exists. For a former handle, see section 4 |
| Invited address and the publisher's note | Opening the service gradually | Legitimate interest | Until sign-up or removal; an unused invitation is erased after **6 months** |
| Sign-in codes (as a hash) | Checking the code, limiting attempts | Performance of the contract; legitimate interest (security) | About **24 hours** |
| Sessions: a hash of the token, the device's name, dates. For a connected AI: its name and the rights you gave it | Keeping you signed in and letting you sign out your devices | Performance of the contract | At most **90 days** after last use, or until signed out |

Codes, tokens and secret links are kept only as hashes. The service answers every e-mail address the same way, so as not to reveal who has an account: an address that is not invited receives no e-mail.

## 3. Publications, reviews and team projects

**Publications.** An author publishes courses on their space, publicly or privately (visible only through a review). We host the course's files and metadata (title, description, languages, version). Legal basis: the one the author determines for the data they entrust to us, and performance of the contract for running the hosting. How long: until the author takes the publication down or deletes their account. A public course can be read by anyone who knows its address.

**Reviews.** An author can open a review on a private publication and share its secret link. Anyone with the link can read the course; to comment you must be at least **15**, with no account. The author runs the review and is responsible for it; Elabora processes the data for them.

| Data | Why | How long |
|---|---|---|
| The name or pseudonym given with the first comment, a hash of the reviewer token | Signing your comments, letting you edit or delete your own | Until the review or the author's account is deleted, and at most **12 months** after the review is closed |
| Comments: text, the place in the course, version, dates, state, replies | Showing your remarks to the author and reviewers, in the right place | The same; a deleted comment loses its text at once |
| The review: title, state, versions sent | Running the review | Until it is deleted, or **12 months** after it is closed |

Your comments are seen by the author and by the people who have the link. The author may give them to their AI assistant: they must then tell you so. Do not write sensitive information in a comment. You can edit or delete your own while the review is open; after that, ask the author or us.

**Organisations and teams.** An organisation groups teams. We keep their names, their members and roles, their seats and their invitations. An invitation does not keep the invited address, only its hash, and expires after **14 days**.

**Team projects.** A project shared with a team is stored on our servers, in the European Union: its files, its media and the history of its changes, which says who made each change and when, an AI included. While you work in a project, the other members see that you are there and where you are working. Of your presence, we keep only the fact that you are online.

**Who sees what.**

- A team's members see its projects and the other members' names, never their e-mail address.
- An organisation's owner and administrators manage its teams and their members. They do not read the projects of a team they are not a member of.
- Elabora does not read the projects' content. To run the service, we see only their title, their size, who changes them and when, and who is online. To help you in a project, we ask to be invited into the team: you then see our account among its members.

**How long.** A project stays until its team deletes it, a team as long as it has a member, an organisation until its owner deletes it. When you leave a team, your changes stay under your name in its projects until your account is deleted. Deleting a project or a team erases its content; the backup copies may keep it for another **30 days** (section 7). **Legal basis:** the one the organisation determines for the projects' content; performance of the contract for organisations, teams, their members and the history.

## 4. A space's address

A space's address, `<handle>.elabora.page`, can change **once every 30 days**, with no redirect: the old address stops serving the courses at once.

A handle that is left, by a change or by deleting the account, is **reserved for a year**, then someone else may take it. The names of the publications shown under a handle can never be used there again by anyone else: an old link (in an LMS, an e-mail, a document) then leads to a page not found, not to someone else's course.

For this we keep a hash of the handle during its year of reservation, and a hash of each pair of handle and publication name, with no time limit. These hashes are not linked to the account, but they can be matched with a known handle: they are therefore personal data. **Legal basis:** our legitimate interest in protecting learners and authors' links.

## 5. What is stored in your browser

**On published courses (`<handle>.elabora.page`).**

- **If the author turned on resuming**, the course keeps your progress in your browser, including what you write in its activities. Nothing is sent to Elabora or tied to an account. The course tells you so and lets you erase it. This progress is **erased a year after your last visit**.
- **Elabora sets one technical cookie**, which does not identify you and cannot track you; courses' scripts cannot read it. It lasts **a year**, renewed at each visit. It is used to erase what the address kept in your browser a year after your last visit, or when the address changes hands: a new owner cannot read anything their former learners left.
- **A course may contain its author's scripts.** What they store is the author's responsibility (section 1). That data is erased in the same cases.

**On the review page**, the browser keeps what it needs to open the review again and sign your comments, and your display preferences, until you erase them.

**In the online editor.**

- **Technical cookies** keep you signed in, here as on the organisations' dashboard and on the connector's consent page.
- **To work offline**, the browser keeps a copy of the projects you open, your preferences and your previews' progress. A copy opens only for your account.
- **Your ElevenLabs key**, if you give one, is kept by a page of its own, which the editor cannot read. You choose whether to keep it in this browser, encrypted, or only for your visit. It is forgotten when you sign out.
- **The editor's files and the voice models** it downloads also stay in the browser. They hold nothing of yours.

**Signing out erases what comes from you**: the copies of the projects, your preferences and your ElevenLabs key. If your session ends without you signing out, the copies stay, and do not open for another account. On a shared computer, remember to sign out.

**No consent banner.** The law (article 82 of the French Data Protection Act, implementing article 5(3) of the ePrivacy directive) exempts from consent what is strictly necessary for the service you ask for. That is the case here: resuming a course, reaching a review by its link, signing in to your account, the copy of your projects for working offline, and the published courses' cookie, which protects what the course keeps on your device and limits how long. None of them is used for advertising or audience measurement. You can erase all of it in your browser's settings.

## 6. Legal obligations and preventing abuse

**Identifying the authors of content.** French law (the LCEN and [decree no. 2021-1362](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000044228912)) requires keeping certain data that identifies who created content, to the extent the service collects it. Legal basis: legal obligation.

| Category | At Elabora | Legal period |
|---|---|---|
| Identity provided | E-mail address | 5 years after the contract ends |
| Other account information | Handle, display name | 1 year after the account is closed |
| Technical data of a contribution | Whatever the service collects | 1 year after the operation |

This data serves that purpose only and is disclosed only to authorised authorities. Deleting an account does not erase it before its due date.

**Limits against abuse.** To limit code guessing and mass comments, the service counts requests per IP address, turned into a hash. The counter stays about a minute in memory at our host (section 7), then disappears. Code requests are also counted per e-mail address, over 24 hours. Legal basis: legitimate interest (security).

## 7. E-mails, providers and transfers

**The e-mails we send** (sign-in and account deletion codes, the warning before an inactive account is deleted) go through an e-mail sending service, from the European Union. It keeps each message (address, subject, content with the sign-in code, delivery state) for **30 days**, then erases it. It may keep an address that rejects e-mails in a suppression list. Open and click tracking is off.

**The e-mails you send us** (contact@, abuse@, security@, postmaster@) go through Cloudflare to the publisher's mailbox, with a European mail provider. We keep them **3 years** after the last exchange, **5 years** for a report and the decision taken. Legal basis: legitimate interest in answering you; legal obligation for reports and requests from authorities.

| Provider | Role | Where | Safeguards |
|---|---|---|---|
| Cloudflare (a US company) | Hosting and storing the service: the site, accounts, publications, reviews, team projects, the online editor, the connector; receiving e-mail | Storage in the EU; requests go through the data centre nearest the visitor, worldwide | Data processing agreement; Data Privacy Framework; standard contractual clauses |
| E-mail sending service (a US company) | Sending sign-in codes and warnings | Sent from the EU; company and tools in the United States | Data processing agreement; Data Privacy Framework; standard contractual clauses |
| The publisher's e-mail provider | Mailbox | Europe | GDPR-compliant contract |

We only entrust data to providers bound to us by a data processing agreement and, outside the European Union, by one of these safeguards. Cloudflare also processes some data on its own account, to protect its network. The backup copies keep erased data for **30 days**. The Data Privacy Framework is the European Commission's adequacy decision of 10 July 2023 for certified US companies.

## 8. The desktop app, the online editor and the connector

Your courses stay on your computer, except the projects you share with a team (section 3). The app sends no usage statistics and no crash reports.

**Our guarantees.**

- A text of your course goes to an AI or voice service only when you ask for it. The first time a gesture sends a text to an AI you have not chosen, Elabora asks for your consent first.
- When the chat's agent wants to spend your voice or sound quota, read a file outside the course or read a page of a website, it asks you first. You can remove these permissions in the settings.
- The chat and its short tasks (describing an image, translating a text) only use models whose providers do not keep your texts and do not use them to train their models. Elabora checks this before adding a model, and removes a model whose terms change.
- Elabora receives neither your requests to the chat nor its answers: they go from your computer to the AI service.

**What goes over the network.**

| What | To | When |
|---|---|---|
| ElevenLabs voices and sounds: your key, the texts to say, the settings | ElevenLabs, under your account and its terms | Only on a gesture (yours, or your AI assistant's if you allow it) |
| The request given to your outside AI assistant (such as Claude or Codex) | Its app, then its provider, under your subscription | When you hand it a task |
| The chat: your request and what the agent reads of the course to answer it. A short task: the text to translate, or the image to describe | A free AI service, with no account or key | At each request or task you start |
| Web pages the agent reads for your request | Each page's site, from your computer | When the agent needs them and you have allowed that site |
| The programs and models the app downloads (voice, alignment, transcription, the chat's agent) | Public software and model repositories | When you download them or first use them; to update them, if automatic updates are on |
| Publishing, review and team projects (sections 2 to 4) | Elabora | When you sign in, publish, manage a review or work in a team project |
| Checking for and downloading updates | The public repository of Elabora's versions | At launch, then regularly; the download, if automatic updates are on |
| The list of models the chat offers | `elabora.studio` | When a conversation or a task starts |

These services may be outside the European Union. The chat's AI service processes your requests, with your IP address, on its own account and under its own terms. File requests carry only the IP address and the software, and Elabora's version for downloads; those who host them process them on their own account. Elabora keeps no log of the requests for the models list. **Legal basis for version checks:** our legitimate interest in telling you about new versions and in the app's security. You can stop automatic downloads in the settings, not the checks.

On your computer stay your projects (and the copy of the team projects you open there), their history and backups, your ElevenLabs key and your Elabora session (readable by you only), generated voices, downloaded models, the chat's conversations (in the course's folder), the chat agent's data and an app log. The log may contain file paths and course titles; it is never sent automatically.

**The online editor.** In a browser, the editor talks to Elabora only: for your account, your projects and the voice models, which Elabora serves itself and keeps no log of. It sends no usage statistics and no crash reports. ElevenLabs voices go through the page of its own that keeps your key: only that page talks to ElevenLabs, and only when you use its voices or sounds.

**The connector for Claude and ChatGPT.** The connector lets an AI on the web, such as Claude or ChatGPT, read and change your teams' projects.

- **Nothing happens without your consent.** The first time, the AI sends you to an Elabora page, where you see what it will be able to do. You let it read only, or also change the projects where you have the right to.
- **It can neither publish, share, invite nor delete a project.** Each change carries its name and yours, and can be undone.
- **What it reads goes to the provider of that AI**, under your account and its terms: the projects' content, your teams' names and the names of who made each change. You choose that service. Elabora does not receive your conversations with it.
- **When a member connects their AI**, it reads their teams' projects, including what the other members wrote there.
- **You can revoke its access** at any time, from your account.

**What the connector keeps.** Your consent (your account, the AI's name, the rights given), for at most **30 days** without use, or until you revoke it. For **7 days**, what it needs so that an AI does not overwrite a change made after its last read, and its refused writes, never the projects' text. Your e-mail address is not there. **Legal basis:** performance of the contract; our legitimate interest for the refused writes, which serve to fix the connector.

## 9. Your rights

You can ask for access to your data, its rectification, its erasure, the restriction of a processing, its portability, and object to processing based on our legitimate interest (sections 2, 4, 6, 7 and 8). You can also give instructions about your data after your death.

Write to **contact@elabora.studio**, from your account's address if you have one; a reviewer gives the review and the name used. We answer within a month, which may be extended by two months if the request warrants it. For data in a review or a course, we pass the request on to the author; for data in a team project, to its organisation.

**Deleting your account**: from your account's settings, with a code sent to your address; or write to us. Your space, its publications, your reviews and their comments, your sessions and your invitation are deleted, and so are the teams and the organisation you are the only member of. If other people work in a team you are the only owner of, or in your organisation, first hand it over or delete it. In team projects, your changes stay, under an identifier that no longer carries your name. What remains, for the periods given above: identification data the law requires, the backup copies (30 days), the e-mails kept by the sending service (30 days), your handle's reservation for a year and the hashes of your publications' names. The courses on your computer stay there.

**Complaints**: you can contact the CNIL (https://www.cnil.fr/fr/plaintes; 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, France) or your own data protection authority.

## 10. Minors

An account and review comments are for people aged **15 or over**. A person with parental authority can write to us about their child's data; we check their identity and capacity proportionately.

**If you are 15 to 17:** a public course can be seen by everyone, so do not put your full name, your address or photos in it; in a review, a first name or a nickname is enough; if something bothers you, talk to an adult or write to **abuse@elabora.studio**.

## 11. Security and changes

Exchanges are encrypted (HTTPS), secrets are kept only as hashes, and the courses' domain holds no secret. To report a vulnerability: **security@elabora.studio**.

Each version of this page is dated. If an important change affects account holders, we tell them by e-mail before it applies.
