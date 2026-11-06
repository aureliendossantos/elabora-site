---
title: "Privacy policy"
lang: en
slug: privacy
updated: 2026-11-03
---

This page says what data Elabora processes, why, on what basis, for how long, and how to exercise your rights. It covers the `elabora.studio` site, author accounts, publishing and review (`api.elabora.studio`, `revue.elabora.studio`), the courses published on `<handle>.elabora.page` and the desktop app.

**In short:**

- The service's data is stored in the European Union.
- Elabora runs no advertising and no audience measurement, and keeps no log of visits to courses.
- Published courses set a single technical cookie, which identifies nobody: it is used to clear what a course kept in your browser after a year, or when the address changes hands (section 5).
- The desktop app sends no usage statistics. A text of your course goes to an AI or voice service only if you ask for it (section 8).
- The app's chat and its short tasks only use models whose providers do not keep your texts and do not use them to train their models (section 8).

## 1. Who is responsible

**Aurélien Dos Santos**, publisher of Elabora in a non-professional capacity, 9 rue des Sabots, 31400 Toulouse, France, is the controller for processing related to accounts, the security of the service, messages received and his legal obligations. Contact: **contact@elabora.studio**. Elabora has not appointed a data protection officer.

**The data in courses and reviews** belongs to their author. When an author processes personal data in a course or a review, the author is the controller; Elabora hosts it for them as a processor (section 4 of the [terms of use](/en/terms/)). For a question about a course or a review, contact its author. You can also write to us: we pass your request on to them.

## 2. Author accounts

An author signs in with their e-mail address and an 8-digit code received by e-mail. Sign-up is by invitation for now.

| Data | Why | Legal basis | How long |
|---|---|---|---|
| E-mail address, language, dates (creation, update, last sign-in), account state, quotas | Running the account, writing to you about the service | Performance of the contract | As long as the account exists. After **24 months** without a sign-in or use (the app and the command line count), we write to you; without a sign-in within **30 days**, the account is deleted |
| Handle (your space's address) and display name | Naming your space and signing your replies to reviewers | Performance of the contract | As long as the account exists. For a former handle, see section 4 |
| Invited address and the publisher's note | Opening the service gradually | Legitimate interest | Until sign-up or removal; an unused invitation is erased after **6 months** |
| Sign-in codes (as a hash) | Checking the code, limiting attempts | Performance of the contract; legitimate interest (security) | About **24 hours** |
| Sessions: a hash of the token, a device name given by the app, dates | Keeping you signed in and letting you sign out your devices | Performance of the contract | **90 days** after last use, or until signed out |

Codes, tokens and secret links are kept only as hashes. The service answers every e-mail address the same way, so as not to reveal who has an account: an address that is not invited receives no e-mail.

## 3. Publications and reviews

**Publications.** An author publishes courses on their space, publicly or privately (visible only through a review). We host the course's files and metadata (title, description, languages, version) and measure the space used. Legal basis: the one the author determines for the data they entrust to us, and performance of the contract for running the hosting. How long: until the author takes the publication down or deletes their account; an unfinished upload expires after 24 hours. A public course can be read by anyone who knows its address.

**Reviews.** An author can open a review on a private publication and share its secret link. Anyone with the link can read the course; to comment you must be at least **15**, with no account. The author runs the review and is responsible for it; Elabora processes the data for them.

| Data | Why | How long |
|---|---|---|
| The name or pseudonym given with the first comment, a hash of the reviewer token | Signing your comments, letting you edit or delete your own | Until the review or the author's account is deleted, and at most **12 months** after the review is closed |
| Comments: text, the place in the course, version, dates, state, replies | Showing your remarks to the author and reviewers, in the right place | The same; a deleted comment loses its text at once |
| The review: title, state, versions sent | Running the review | Until it is deleted, or **12 months** after it is closed |

Your comments are seen by the author and by the people who have the link. The author may give them to their AI assistant: they must then tell you so. Do not write sensitive information in a comment. You can edit or delete your own while the review is open; after that, ask the author or us.

## 4. A space's address

A space's address, `<handle>.elabora.page`, can change **once every 30 days**, with no redirect: the old address stops serving the courses at once.

A handle that is left, by a change or by deleting the account, is **reserved for a year**, then someone else may take it. The names of the publications shown under a handle can never be used there again by anyone else: an old link (in an LMS, an e-mail, a document) then leads to a page not found, not to someone else's course.

For this we keep a hash of the handle during its year of reservation, and a hash of each pair of handle and publication name, with no time limit. These hashes are not linked to the account, but they can be matched with a known handle: they are therefore personal data. **Legal basis:** our legitimate interest in protecting learners and authors' links.

## 5. What is stored in your browser

**On published courses (`<handle>.elabora.page`).**

- **If the author turned on resuming**, the course keeps in your browser (`localStorage`) the screen reached, the status, the score and the state of activities, including what you write in them. Nothing is sent to Elabora or tied to an account. The course tells you so and lets you « Clear my progress ». This progress is **erased a year after your last visit**.
- **Elabora sets one cookie, `__Host-elabora-i`**, when a page opens. It holds a random number, the same for every visitor of that address: it does not identify you and cannot track you. Courses' scripts cannot read it. It lasts **a year**, renewed at each visit. When your browser comes without it, or with the one of a former owner of the address, Elabora asks it to erase everything that address kept there, before the page shows. This is what guarantees the year of retention, and that a new owner of the address cannot read anything their former learners left. An address with no space (reserved or free) erases in the same way.
- **A course may contain its author's scripts.** What they store is the author's responsibility (section 1). That data is erased in the same cases.

**On the review page (`revue.elabora.studio`)**, the browser keeps the review link's token, your reviewer token and two display preferences. They stay until you erase them (« Forget this review on this device », or the browser's settings); the token of a link that is no longer valid is forgotten.

**No consent banner.** The law (article 82 of the French Data Protection Act, implementing article 5(3) of the ePrivacy directive) exempts from consent what is strictly necessary for the service you ask for. That is the case here: resuming a course where you left it, reaching a review by its link, and Elabora's cookie, which protects what the course keeps on your device and limits how long. None of them is used for advertising or audience measurement. You can erase all of it in your browser's settings.

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
| Cloudflare (a US company) | Hosting the site, the API, the review page and the courses; storage; receiving e-mail | Storage in the EU; requests go through the data centre nearest the visitor, worldwide | Data processing agreement; Data Privacy Framework; standard contractual clauses |
| E-mail sending service (a US company) | Sending sign-in codes and warnings | Sent from the EU; company and tools in the United States | Data processing agreement; Data Privacy Framework; standard contractual clauses |
| The publisher's e-mail provider | Mailbox | Europe | GDPR-compliant contract |

We only entrust data to providers bound to us by a data processing agreement and, outside the European Union, by one of these safeguards. Cloudflare also processes some data on its own account, to protect its network. A backup copy of the database keeps erased data for **7 days**. The Data Privacy Framework is the European Commission's adequacy decision of 10 July 2023 for certified US companies.

## 8. The desktop app

Your projects stay on your computer. The app sends no usage statistics and no crash reports.

**Our guarantees.**

- A text of your course goes to an AI or voice service only when you ask for it: by choosing that AI and writing to it, or by a gesture of yours. The first gesture that sends a text to an AI you have not chosen asks for your consent first.
- When the chat's agent wants to spend your voice or sound quota, read a file outside the course or read a page of a website, it asks you first. For websites, you can allow that site only, or every site, once and for all; Settings › Tools for AI removes these permissions.
- The chat and its short tasks (the ✨ button beside an empty field, which describes an image or translates a text) only use models whose providers do not keep your texts and do not use them to train their models. Elabora checks this before adding a model, and removes a model whose terms change.
- Elabora receives neither your requests to the chat or its tasks nor the answers: they go from your computer to the AI service.

**What goes over the network.**

| What | To | When |
|---|---|---|
| ElevenLabs voices and sounds: your key, the texts to say, the settings | ElevenLabs, under your account and its terms | Only on a gesture (yours, or your AI assistant's if you allow it) |
| The request given to your outside AI assistant (Claude, Codex) | Its app, then its provider, under your subscription | When you hand it a task |
| The chat: your request, the course's texts and files the agent reads, the results of Elabora's tools and its instructions to the agent. A short task: the text to translate, or the image to describe and the words of its screen | A free AI service, with no account or key | At each request, while the agent works on it; at each task you start |
| Web pages the agent reads for your request | Each page's site, from your computer | When the agent needs them and you have allowed that site. The chat does no web search |
| The programs and models the app downloads (the chat's agent, voice, alignment, transcription) | Public software and model repositories | When you download them, write to the chat or start a short task for the first time; to update them, if automatic updates are on |
| Publishing and review (sections 2 to 4) | `api.elabora.studio` | When you sign in, publish or manage a review |
| Checking for and downloading updates | The public repository of Elabora's versions | At launch, then every four hours; the download, if automatic updates are on |
| The list of models the chat offers | `elabora.studio` | When a conversation or a task starts, at most once every ten minutes |

These services may be outside the European Union. The AI service of the chat and its tasks processes your requests, with your IP address, on its own account and under its own terms. File requests carry only the IP address and the software, and Elabora's version for downloads; those who host them process them on their own account. The models list is asked for with no parameter and no cookie, and Elabora keeps no log of it. **Legal basis for version checks:** our legitimate interest in telling you about new versions and in the app's security. Settings › Updates stops automatic downloads, not the checks.

On your computer stay your projects, their history and backups, your ElevenLabs key and your Elabora session (in a file readable by you only, or in the system keychain), generated voices, downloaded models, the chat's conversations (in the course's folder, `.elabora/chats/`), the chat agent's data and an app log. The log may contain file paths and course titles; it is never sent automatically.

## 9. Your rights

You can ask for access to your data, its rectification, its erasure, the restriction of a processing, its portability, and object to processing based on our legitimate interest (sections 2, 4, 6, 7 and 8). You can also give instructions about your data after your death.

Write to **contact@elabora.studio**, from your account's address if you have one; a reviewer gives the review and the name used. We answer within a month, which may be extended by two months if the request warrants it. For data in a review or a course, we pass the request on to the author.

**Deleting your account**: Settings › Account › Delete my account…, with a code sent to your address; or write to us. Your space, its publications, your reviews and their comments, your sessions and your invitation are deleted. What remains, for the periods given above: identification data the law requires, the database's backup copy (7 days), the e-mails kept by the sending service (30 days), your handle's reservation for a year and the hashes of your publications' names. Your projects stay on your computer.

**Complaints**: you can contact the CNIL (https://www.cnil.fr/fr/plaintes; 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, France) or your own data protection authority.

## 10. Minors

An account and review comments are for people aged **15 or over**. A person with parental authority can write to us about their child's data; we check their identity and capacity proportionately.

**If you are 15 to 17:** a public course can be seen by everyone, so do not put your full name, your address or photos in it; in a review, a first name or a nickname is enough; if something bothers you, talk to an adult or write to **abuse@elabora.studio**.

## 11. Security and changes

Exchanges are encrypted (HTTPS), secrets are kept only as hashes, and the courses' domain holds no secret. To report a vulnerability: **security@elabora.studio**.

Each version of this page is dated. If an important change affects account holders, we tell them by e-mail before it applies.
