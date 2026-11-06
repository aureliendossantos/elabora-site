---
title: The learning science behind Elabora
description: What research says about predicting, narration, charts, motion, steps, feedback, branching dialogues, flip cards, reveal blocks and drag and drop, and what Elabora does with it. With references.
slug: learning-science
group: more
order: 4
---

Elabora is not built around effects. A chart that animates, a voice that speaks, a screen that unfolds: each only earns its place if it helps someone understand or remember. This page says, for each of the features below, what the research found, how far it goes, and what Elabora does with it.

Most of these studies are laboratory experiments or meta-analyses of them. They tell you what tends to work, for whom and under which conditions. They do not promise that a given screen will teach better. That is why the effects are described here with their limits, and why you keep the last word on your course.

## Predict, then reveal

**What the research found.** Kim, Reinecke and Hullman (2017) asked people to draw their prediction of a data set, then showed them the gap between their guess and the real data. Participants who predicted, and explained their prediction, recalled and understood the data better than a control group. The effect held for people with moderate or little prior knowledge of the topic, and differed between text and visual presentations. It is the idea behind the New York Times’ “You Draw It” (Aisch et al., 2015), where readers draw a curve before seeing the real one.

Two older lines of work point the same way. A meta-analysis of 86 studies found that producing an answer yourself, rather than reading it, improves memory by about 0.4 standard deviations on average, nearly half (Bertsch et al., 2007). And trying to answer before being taught, even wrongly, improves what you learn afterwards compared with reading alone (Kornell et al., 2009; Richland et al., 2009).

**The limits.** In those experiments the correct answer came right after the attempt. An error that is never corrected teaches nothing good, so the reveal and its feedback are part of the technique. The pretesting studies mostly measured memory for specific facts and concepts, not the understanding of a whole course.

**What Elabora does.** The *trend* chart block has a predict mode: the end of the line is hidden, the learner draws what they expect, then the real line is drawn over their guess and the feedback names both values. It is not scored by default: it is a moment of engagement, not a test, and you can make it count if you want. Use it sparingly, where learners have something to guess and the gap is informative.

## The chart follows the voice

**What the research found.** Mayer’s temporal contiguity principle says that people learn better when corresponding words and pictures are presented together rather than one after the other (Mayer & Fiorella, 2014; see also the meta-analysis by Ginns, 2006). His signalling principle says that cues which show where to look help. Two meta-analyses of signalling found a benefit: one covered 103 studies (Schneider et al., 2018), the other 27 studies of signals linking text and pictures, with a small to medium positive effect that depended on what learners already knew (Richter et al., 2016).

**The limits.** These studies rarely used charts timed to a narration, so applying them here is an extension, not a replication. And for learners who already know the subject, signals may matter less.

**What Elabora does.** On a narrated slide, each part of a chart can appear when the voice names it, and the other parts step back while it speaks. You anchor the part to a word of the narration, as you do for any block (see [voices and narration](/en/docs/voices-and-narration/)). If you prefer everything visible from the start, only the emphasis moves with the voice.

## One chart, one idea

**What the research found.** How a graph is understood depends on its visual features, on what the viewer knows about graphs, and on what they know and expect about the subject (Shah & Hoeffner, 2002). Mayer’s coherence principle says that decoration unrelated to the lesson tends to hurt, and that labels placed near what they describe help (Mayer & Fiorella, 2014; Ginns, 2006). Knaflic (2015) turns this into data-storytelling advice: say what the chart shows in its title, and emphasise one thing. That book is practice, not research, and it is cited as such.

**The limits.** Nothing here tells you which single message a chart should carry. That is a choice about your course.

**What Elabora does.** The new chart blocks ask for a *takeaway*: the title is the sentence the chart proves (“Most incidents start with an email”, not “Incidents by origin”). One item is highlighted and the others fade back. Labels sit next to the data, and there is no decoration. Each chart also carries a data table for screen readers.

## “1 in 10”: icon arrays

**What the research found.** Galesic, Garcia-Retamero and Gigerenzer (2009) tested icon arrays (a grid of small figures, some filled) in two experiments with older adults and students. Icon arrays increased the accuracy of both low- and high-numeracy people, even when the numbers were shown clearly. Garcia-Retamero and Galesic (2009) studied denominator neglect, which is paying attention to the number of people who died and not to how many there were in all. National samples in the United States and Germany showed it, particularly people with low numeracy, and icon arrays removed it.

**The limits.** These are medical-risk problems. And the format is not neutral: in those experiments, risks shown as icon arrays were judged less serious than the same risks shown as numbers, and larger arrays (1,000 icons instead of 100) made the risk look more serious.

**What Elabora does.** The *proportion* block shows “1 in 10” as a grid of equal icons with the counted ones filled in. You choose the total and the part; choose a total that matches the real comparison, because the size of the array changes how it is read.

## Motion that teaches

**What the research found.** After reviewing studies of animated graphics, Tversky, Morrison and Bétrancourt (2002) concluded that the evidence for animation over static graphics was not encouraging. Animations are often too fast or too complex to be perceived, and where an animation seemed to win, it often carried more information or allowed more interaction than the static version. A later meta-analysis of 61 studies found a small overall advantage for animation (Hedges’s g = 0.23), larger with spoken narration (Berney & Bétrancourt, 2016).

**The limits.** The effects are small and vary a lot between studies. The reasoning of Tversky and colleagues is that animation suits what really changes over time, so that is where it is worth using.

**What Elabora does.** Charts move only to show order or change. Each one animates once, in reading order, in about a second, never in a loop. When a visitor’s system asks for less motion, charts appear at once with a short fade.

## Steps that pace a screen

**What the research found.** A meta-analysis of 56 studies found that cutting a lesson into segments helps, with small to medium effects on retention and transfer, and lowers cognitive load. Learners also spent more time on it (Rey et al., 2019).

**What Elabora does.** Steps reveal a screen piece by piece with **Continue** (see [events, layers and steps](/en/docs/interactions/)), and a narrated screen stops at the end of each step by default. The guidelines keep each step under about 90 seconds and make it end where an idea ends.

**The limits.** The effects are small to medium, and segmenting takes learners longer. Cut where an idea ends, not at a fixed length.

## Feedback that explains

**What the research found.** In a meta-analysis of 40 studies of computer-based feedback, an explanation gave larger effects (0.49) than telling learners whether they were right (0.05) or giving the correct answer (0.32), notably for higher-order outcomes. Delayed feedback reduced the effects, and they varied with the subject (Van der Kleij et al., 2015). Shute (2008) reviews what makes feedback formative: it is non-evaluative, supportive, timely and specific.

**The limits.** The effects depend on the task, the subject and the learners.

**What Elabora does.** Every option of a question has its own feedback, shown after the learner answers: why this option is right or wrong, and what to remember.

## Narration without reading the screen aloud

**What the research found.** Showing text on screen that duplicates the narration usually impairs learning, the redundancy principle (Kalyuga & Sweller, 2014). A nuance: in two experiments, text slightly different from the narration did better than identical text, while text too different did as badly. Learners still preferred identical text (Yue et al., 2013). Short labels on an animation can also help.

**What Elabora does.** The guidelines tell the agent to keep the words in the voice and show keywords, a figure or a diagram instead. The captions and the transcript already give the words to those who need them. The [checks](/en/docs/preview-and-checks/) flag on-screen text that repeats the narration; ignore the flag when learners should read along on purpose.

## Practising a decision in context

**What the research found.** A meta-analysis of 145 studies of simulation-based learning in higher education (medicine, teacher education, management…) found a large positive effect on complex skills (g = 0.85). Support added to the simulation strengthened it: learners who already knew the subject gained more from reflection phases, those who knew little from examples (Chernikova et al., 2020). Practitioners turn this into the mini-scenario: a situation that calls for a decision, options that are the mistakes learners really make, and a consequence for each (Quinn, 2022).

**The limits.** The simulations in that meta-analysis are very diverse (role plays, virtual patients, computer simulations), and often longer and richer than a dialogue of a few decisions. The effect does not carry over as it is to a screen: it says that practising decisions in context is a path that works, not that a given dialogue will teach better than a text. Quinn is a practitioner: his advice is practice, and it is cited as such.

**What Elabora does.** The [dialogue block](/en/docs/dialogues/) puts learners in a conversation: characters speak, learners choose their answer, and the conversation goes on from that choice, in the same thread. The most common case, a situation, one decision of three options, a consequence and a note for each, fits in a single passage of the dialogue, with nothing to wire. The agent’s guidelines tell it to write the best path first, then to check every path.

## The consequence first, the explanation after

**What the research found.** As seen above, [feedback that explains](#feedback-that-explains) does more than a plain “right” or “wrong” (Van der Kleij et al., 2015). A broader meta-analysis of 435 studies finds a medium effect of feedback (d = 0.48), highly variable, and larger the more information the feedback carries (Wisniewski et al., 2020). Scenario practitioners add an order: first the consequence in the story (the customer gets annoyed, the outage spreads), then the explanation (Quinn, 2022; Tucker, 2025). Moore (2016) warns against immediate corrective feedback, which interrupts the story and thinks for the learner; she prefers to show the consequence and offer an optional “Why?”. Tucker (2025) recommends immediate feedback for novices, who cannot yet read the cues of a situation, and always feedback before a new attempt.

**The limits.** Separating the consequence from the explanation, and never putting the explanation in a character’s mouth, are practitioners’ rules: we did not find them tested as such in the laboratory. Research on the timing of feedback is also divided: in the meta-analysis by Van der Kleij and colleagues, delayed feedback reduced the effects, while Tucker finds delayed feedback useful for experienced learners.

**What Elabora does.** In a dialogue, three kinds of text never look alike: a character’s line, the narration (a setting of the scene, without a bubble) and the trainer’s note. Each option carries its reaction (what the character answers) and its note (why this choice is good or not), shown after the reaction. The note is never a line. In Practice mode it shows at once and comes back in the debrief; in Assessment it waits for the debrief. When learners try a decision again, they have first seen the consequence and the note.

## Score the first run, then let learners explore

**What the research found.** A meta-analysis of 53 studies compared two orders: trying to solve a problem before being taught, or being taught before solving it. Trying first came out ahead, with a moderate effect (g = 0.36), larger when the design closely followed the principles of “productive failure”: you try, you get it wrong, then the explanation comes (Sinha & Kapur, 2021). Scenario practitioners say when to let learners go back on a choice. Moore (2018) lets learners explore freely, without penalty, when they learn something new; she removes any going back when a habit already formed has to be corrected, and when the scenario is an assessment. Tucker (2021) prefers, in a long scenario, taking learners back to the decision they got wrong rather than restarting everything. Moore (2025) even advises against scoring a practice scenario: “the feedback is the assessment”.

**The limits.** Productive failure studies are mostly about mathematics and science, at school and university, not about dialogues; the advantage reversed for the youngest pupils and for domain-general skills. The explanation must follow the mistake: exploring without feedback teaches little. Moore and Tucker are practitioners: their advice comes from their experience as designers.

**What Elabora does.** A dialogue has three modes. **Practice**, the default, is not scored: after each consequence, learners may choose differently; once they reach the end, they can resume from any of their choices, or start again. **Assessment** allows no going back and keeps the notes for the debrief. **Exploration** lets learners resume from any choice from the first one on. When the dialogue is scored, only the first run to an end counts, whatever the mode, and in each decision the first choice: it is the only attempt made without knowing the consequences, and it is what the LMS receives. The tries and returns that follow change neither the score nor the status. To make learners own their choices, as Moore advises for correcting a habit, choose Assessment, or mark a decision as a “Final decision”: learners go back neither to it nor before it. Once the dialogue has ended, “Start over” stays possible, as a new run that leaves the scored run as it was.

## Three plausible options, of similar length

**What the research found.** This advice comes from research on multiple-choice questions. The review by Haladyna, Downing and Rodriguez (2002), which combines 27 textbooks and 27 studies, recommends options that are all plausible, drawn from learners’ typical errors, and of about equal length. A meta-analysis of 80 years of research concludes that three options are enough: more questions fit in the same time, without losing measurement quality (Rodriguez, 2005). Item writers tend to make the right answer longer than the others: it was one of the most common flaws in 1,925 exam questions written by the faculty of a veterinary school (Rush et al., 2016); and in an experiment with medical students, questions whose right answer was the longest were answered correctly more often than the same questions without that flaw (Pham et al., 2018). On the practice side, Quinn (2022) asks, for a mini-scenario, for options that are the ways learners reliably go wrong, and Moore (2015) for a common mistake made tempting.

**The limits.** This work is about tests, not about learning through dialogue: we apply it to the choices of a conversation by analogy. The number three comes from the efficiency of a test, not from better understanding. In the experiment by Pham and colleagues, other flaws did not have the expected effect. Quinn and Moore are practitioners.

**What Elabora does.** Each option is marked Good, Fair or Poor, a mark learners never see before they choose. The agent’s guidelines ask for about three options, plausible, drawn from the mistakes real people make, and of similar length. The checks flag a decision with more than four options, and options whose longest is more than two and a half times the shortest: a shorter button label often settles the second case.

## Text that follows the voice

**What the research found.** Adults read English non-fiction silently at about 238 words per minute, and aloud at 183 (Brysbaert, 2019, from 190 studies): a voice saying the text goes slower than a reader reading it with their eyes. Preventing readers from going back over words already read harms their comprehension (Schotter et al., 2014). Written text together with the same narration can help some learners: in a meta-analysis of 57 studies, it did better than narration alone for those who knew little about the subject, when the pace was set by the system and when there was no picture; key terms taken from the narration did better still than the full text (Adesope & Nesbit, 2012). Accessible e-books can highlight the element being read in a fully displayed text (W3C, 2026).

**The limits.** They concern us directly. The redundancy principle (see [above](#narration-without-reading-the-screen-aloud)) says that on-screen text identical to the narration usually hurts, especially when there is a picture to look at; and a dialogue’s bubble says exactly what the voice says. And the study closest to what Elabora does is not favourable: Gerbier, Bailly and Bosse (2018) had 40 French children aged about 8 to 11 read stories while a narrator told them, the text in grey and each word turning black as it was said. This synchronisation made no difference to remembering the spelling of new words, and hurt remembering their meaning; the children preferred the static text, except the weakest readers. It held their gaze on the word being heard. It is an exploratory study, with children, but it is the closest we found.

**What Elabora does.** A bubble’s text is laid out in full as soon as it arrives, and can be read ahead: in “Word by word”, the default, the words not said yet stay visible, fainter, never hidden. A line without a voice appears whole, and the dialogue waits for learners to move on. Learners stay in control: they can mute the voices and read on their own, and their “Text: all at once” setting, like their system’s reduced motion, shows the whole text from the start. You can also set a dialogue so that a bubble’s whole text appears at once. Following the voice word by word is an aid Elabora offers, not a constraint.

## A debrief at the end

**What the research found.** A meta-analysis of 46 samples found that debriefs, or after-action reviews, improved performance by about 25% over a control group (d = 0.67), for teams as for individuals, in simulations as in real settings (Tannenbaum & Cerasoli, 2013). Moore (2016) advises debriefing at the end of a scenario: the ending first, then how the learner got there, the mistakes made and hints for the next attempt.

**The limits.** The debriefs studied are moments of reflection and discussion, often led by a person, where participants also set goals; debriefs that were structured and aligned with what was measured seemed to work better. A debrief card at the end of a dialogue is a much thinner form of it: it gives the material for reflection, it does not lead it.

**What Elabora does.** At the end of a dialogue, a debrief shows the ending reached, then each decision with its quality (an icon and a word, never colour alone) and its note, then the other possible outcomes. You write nothing more: it follows from the options’ quality and notes. If your course is followed in a class, in person or remotely, it is a good starting point for a real debrief.

## A layer that speaks

**What the research found.** These are the principles behind [the chart following the voice](#the-chart-follows-the-voice): present corresponding words and pictures together (temporal contiguity), and show where to look (signalling) (Mayer & Fiorella, 2014; Ginns, 2006; Schneider et al., 2018; Richter et al., 2016).

**The limits.** They are the same too: these studies did not use layers, and signals matter less for learners who already know the subject. Having only one voice speak at a time is a design choice, not a research finding we have checked.

**What Elabora does.** A layer can have its own narration: when it opens, its voice explains and its blocks come in on the word that names them, as on the screen. While it speaks, the screen’s voice waits. An event can close the layer once its voice has finished. See [a layer that speaks](/en/docs/voices-and-narration/#a-layer-that-speaks).

## Characters who speak

**What the research found.** Showing the speaker on screen does not necessarily help: that is Mayer’s image principle, drawn from 14 comparisons of which half gave no effect or a negative one (median effect d = 0.20). A character’s gestures, movement, gaze and facial expressions, on the other hand, help a little: that is the embodiment principle, seen in 11 comparisons out of 11 (median effect d = 0.36; Mayer, 2014). A meta-analysis of 20 experiments on pedagogical agents’ gestures finds small to medium effects on retention (g = 0.28) and transfer (g = 0.39) (Davis, 2018). Another, of 43 studies, finds a small effect of such characters in general, larger when they communicate through on-screen text than through narration (Schroeder et al., 2013). Finally, Mayer (2014) reports that a human voice did better than a machine voice (median effect d = 0.74).

**The limits.** These studies are about characters who teach. Those of a dialogue act out a situation (a customer, a colleague): what research says of the former applies to the latter only with caution. The effects are small, and the mere presence of a character guarantees none of them. The voice studies predate 2014, and so today’s synthetic voices; in a more recent study, the quality of a virtual character’s voice did not change what participants learned, but it did change how much they trusted it (Chiou et al., 2020).

**What Elabora does.** A drawn character is not required: the messaging style, the default, makes do with a small portrait next to the bubbles. When a character is drawn, what it does relates to what it says: its mouth follows its voice, its expression changes with the line, its gestures land on words (waving on the word “Hello”); otherwise it breathes and blinks, nothing more. Under reduced motion no animation plays, and the learner’s pause freezes everything. Its name is in the bubbles: for a screen reader, the drawing is decorative.

## Revealing is not practice

**What the research found.** As far as we know, no peer-reviewed study tests accordions, tabs, cards or picture hotspots as learning devices against the same content shown openly. What exists is indirect. Chi and Wylie’s ICAP framework (2014) sorts what learners do: clicking, pointing or manipulating is “active”; producing something new (an explanation, a concept map) is “constructive”, and learning should rise in that order. Mayer (2004) concludes, in another debate (learning by pure discovery), that what matters is cognitive activity rather than behavioural activity. And a meta-analysis of 18 studies on learner control in educational technology found an overall effect close to zero (g = 0.05; Karich et al., 2014).

**The limits.** ICAP is a framework that predicts, not a law: it rests on laboratory and classroom work. Learner control is not exactly “opening a panel”, and 18 studies is few. None of this proves that a panel is useless: it can lighten a dense page. It only says that opening it does not make anyone learn.

**What Elabora does.** Panels, cards and markers are there to cut up and tidy content, not to pretend that learners have practised. To turn a click into effort, see [think first](#think-first) and [flip cards as retrieval](#flip-cards-as-retrieval). **After exploring** checks that learners opened what is above, not that they understood it: put a question right after.

## Think first

**What the research found.** Asking a question before learners have been taught, even when they cannot answer it, can help what they retain afterwards, provided they get to see the right answers after (Pan & Carpenter, 2023). The effect has been seen with texts, videos and lectures. It fits older work: trying to answer before having learned, even wrongly, makes people remember more than simply reading (Kornell et al., 2009; Richland et al., 2009).

**The limits.** The authors of the review note that the size of the gain varies with how the procedure is run and how learning is measured. The right answer has to follow: a question with no follow-up is of no use. And these studies mostly measure what people recall, less the understanding of a whole course.

**What Elabora does.** **Think first**, on **Panels**, shows a prompt before the reveal (“Before you turn each card over, say what you think is on the back”); on **Interactive image**, it is the **Instruction**. The **Opening** layout has room for a question asked before the lesson, a question or a reflection, unscored. This moment is not an assessment: it is a primer, which what follows has to correct.

## Flip cards as retrieval

**What the research found.** Testing yourself helps more than rereading, provided time passes. In Roediger and Karpicke’s experiments (2006), restudying gave better recall after 5 minutes, but testing did better after two days and after a week, even though restudying made students more confident. Dunlosky et al. (2013) rated practice testing and distributed practice as the two high-utility techniques out of ten. For cards, one large stack worked better than four small ones for 90% of participants, while 72% thought the opposite after the first session (Kornell, 2009). Letting learners drop the cards they “know” had small but consistently negative effects (Kornell & Bjork, 2008). On accessibility, a flip card is a button whose name changes, with one face read at a time (Edwards, 2025).

**The limits.** These experiments mostly use words, word pairs and texts, with students. A card whose back is read without the learner having tried to find the answer is only a reread. And this work does not say which prompt makes people search.

**What Elabora does.** **Flip cards** (as a **Grid** or **One at a time**) turn a card over: the front is a title or an image, the back the text, and **Think first** is there so that learners commit before turning. The **Myth or fact?** recipe starts from this idea. The deck stays whole: no card is removed because it is “known”. The card is a button whose label changes, one face is read, and under reduced motion it changes without turning over.

## One at a time, or all at once

**What the research found.** The Nielsen Norman Group’s usability studies of carousels note that many visitors scroll past them, so later frames are often missed, and advise against putting essentials in them, keeping to five frames or fewer and avoiding automatic advance (Pernice, 2013). For accordions, they recommend not hiding crucial information, avoiding them for text read straight through, and letting several sections stay open at once (Wang, 2023). On the learning side, cutting a lesson into segments helps, but takes longer (Rey et al., 2019).

**The limits.** This advice comes from observing use on websites, not from measuring learning. And the segmenting studies are about lessons, not carousels.

**What Elabora does.** **Accordion** is the default presentation of **Panels**, and several sections can be open at once. The **One at a time** presentations never turn by themselves: they show their position (“2 / 5”), answer the arrow keys and swipes, and keep the room of their tallest item. The checks flag more than 7 steps in **One at a time**, more than 12 cards and more than 5 images in a **One at a time** gallery. Put what matters in the text, not only behind a click.

## Steps, or scrolling

**What the research found.** In a study of 180 participants, a slideshow layout gave better comprehension than vertical scrolling, and linking the text to the chart raised engagement (Zhi et al., 2019). In a study of 240 people, visuals and navigation feedback, such as animated transitions, mattered for engagement; the level of control (discrete or continuous) perhaps did not (McKenna et al., 2017). For medical stories (n = 85), participants preferred clicking, but stayed longer and went back more with scrolling (Mittenentzwei et al., 2023). When scrolling is taken over, a usability test found most participants at least mildly disoriented, especially with text to read during the animation (Paul, 2023).

**The limits.** This work comes from data visualisation, not training, and each study tests one implementation of scrolling. Mittenentzwei and colleagues themselves call their results of limited generalisability. The differences are mostly in engagement and preference; where comprehension was measured, stepped layouts did as well or better.

**What Elabora does.** **Steps** comes **One at a time**, as a **Timeline** or as **Scrolling**, and switches between them without touching the words. **Scrolling** keeps native scrolling: the wheel is never taken over, the current step is the one crossing the middle of the window, and without scrolling support or with reduced motion each image stays with its step. When comprehension is what matters, start from **One at a time**.

## Words next to their picture

**What the research found.** Mayer’s spatial contiguity principle says people learn better when corresponding words and picture are close together (Mayer & Fiorella, 2014), which Ginns’s meta-analysis (2006) bears out. A more recent meta-analysis finds a medium positive effect of text integrated into the picture rather than separate from it (Schroeder & Cenkci, 2018).

**The limits.** These experiments mostly use labelled diagrams and short texts. A marker that opens a bubble after a click has not been tested as such: placing the bubble nearby applies the principle, it does not replicate it.

**What Elabora does.** **Interactive image** puts the explanation **By the marker** by default, or **At the side**, or **Under the picture**. In a narrow window, the markers become a numbered list under the picture. **Image** with **Text beside** puts the text next to the picture it describes. Avoid putting a marker’s explanation far from it.

## Drag and drop: tap first

**What the research found.** This is a question of accessibility rather than learning. Success criterion 2.5.7 of WCAG 2.2 asks that anything done by dragging can be done with a single pointer without dragging, unless dragging is essential. Making dragging work from the keyboard is not enough, unless the keyboard route comes with controls that can be clicked or tapped. The criterion’s example: tap the item, then a button that moves it (W3C, n.d.).

**The limits.** It is a requirement, not a study: as far as we know, no work shows that people learn better by tapping than by dragging.

**What Elabora does.** In **Sort** and **Fill in the blanks** (**Word bank**), learners choose the item first, then where it goes. Dragging remains possible as an extra, with a mouse. In **Order**, buttons move an item up and down. Each item placed counts towards the score.

## Why tabs stay few

**What the research found.** For the Nielsen Norman Group, the fewer tabs the better: when they overflow they turn into a carousel that hides the last ones. Their labels fit in one or two words, tabs are avoided for what must be compared, and accordions often work better on mobile (Sunwall, 2024).

**The limits.** This is usability expertise, not a measure of learning, and the article gives no number. Elabora’s thresholds (more than 7 tabs, a label over 24 characters) are a design choice.

**What Elabora does.** With **Tabs**, the checks flag more than 7 tabs and a label that is too long, and in a narrow window tabs become an accordion. To compare, use **Columns** or a table.

## How Elabora uses this

The rules your agent follows come from these principles. It writes takeaway titles, anchors parts of charts to words, cuts narration into steps, writes feedback for each option, and proposes predict moments sparingly. In a dialogue, it writes short lines, puts the consequence before the note, offers three plausible options of similar length and checks every path. With the starter blocks, it keeps panels and tabs few, puts a prompt before a reveal, prefers steps one at a time to scrolling when comprehension matters, and does not hide essentials behind a click. You decide whether they fit your learners: change a title, remove a beat, make a prediction count, or drop it. Research gives defaults. Knowing your audience is your job.

## References

- Adesope, O. O., & Nesbit, J. C. (2012). Verbal redundancy in multimedia learning environments: A meta-analysis. *Journal of Educational Psychology, 104*(1), 250–263. https://doi.org/10.1037/a0026147
- Aisch, G., Cox, A., & Quealy, K. (2015, May 28). You draw it: How family income predicts children’s college chances. *The New York Times*. https://www.nytimes.com/interactive/2015/05/28/upshot/you-draw-it-how-family-income-affects-childrens-college-chances.html
- Berney, S., & Bétrancourt, M. (2016). Does animation enhance learning? A meta-analysis. *Computers & Education, 101*, 150–167. https://doi.org/10.1016/j.compedu.2016.06.005
- Bertsch, S., Pesta, B. J., Wiscott, R., & McDaniel, M. A. (2007). The generation effect: A meta-analytic review. *Memory & Cognition, 35*(2), 201–210. https://doi.org/10.3758/BF03193441
- Brysbaert, M. (2019). How many words do we read per minute? A review and meta-analysis of reading rate. *Journal of Memory and Language, 109*, 104047. https://doi.org/10.1016/j.jml.2019.104047
- Chernikova, O., Heitzmann, N., Stadler, M., Holzberger, D., Seidel, T., & Fischer, F. (2020). Simulation-based learning in higher education: A meta-analysis. *Review of Educational Research, 90*(4), 499–541. https://doi.org/10.3102/0034654320933544
- Chi, M. T. H., & Wylie, R. (2014). The ICAP framework: Linking cognitive engagement to active learning outcomes. *Educational Psychologist, 49*(4), 219–243. https://doi.org/10.1080/00461520.2014.965823
- Chiou, E. K., Schroeder, N. L., & Craig, S. D. (2020). How we trust, perceive, and learn from virtual humans: The influence of voice quality. *Computers & Education, 146*, 103756. https://doi.org/10.1016/j.compedu.2019.103756
- Davis, R. O. (2018). The impact of pedagogical agent gesturing in multimedia learning environments: A meta-analysis. *Educational Research Review, 24*, 193–209. https://doi.org/10.1016/j.edurev.2018.05.002
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students’ learning with effective learning techniques: Promising directions from cognitive and educational psychology. *Psychological Science in the Public Interest, 14*(1), 4–58. https://doi.org/10.1177/1529100612453266
- Edwards, J. (2025, September 24). Creating a truly accessible flip card. *Vispero*. https://vispero.com/resources/creating-a-truly-accessible-flip-card/
- Galesic, M., Garcia-Retamero, R., & Gigerenzer, G. (2009). Using icon arrays to communicate medical risks: Overcoming low numeracy. *Health Psychology, 28*(2), 210–216. https://doi.org/10.1037/a0014474
- Garcia-Retamero, R., & Galesic, M. (2009). Communicating treatment risk reduction to people with low numeracy skills: A cross-cultural comparison. *American Journal of Public Health, 99*(12), 2196–2202. https://doi.org/10.2105/AJPH.2009.160234 (open access: https://pmc.ncbi.nlm.nih.gov/articles/PMC2775772)
- Gerbier, E., Bailly, G., & Bosse, M.-L. (2018). Audio–visual synchronization in reading while listening to texts: Effects on visual behavior and verbal learning. *Computer Speech & Language, 47*, 74–92. https://doi.org/10.1016/j.csl.2017.07.003 (open access: https://hal.science/hal-01575227)
- Ginns, P. (2006). Integrating information: A meta-analysis of the spatial contiguity and temporal contiguity effects. *Learning and Instruction, 16*(6), 511–525. https://doi.org/10.1016/j.learninstruc.2006.10.001
- Haladyna, T. M., Downing, S. M., & Rodriguez, M. C. (2002). A review of multiple-choice item-writing guidelines for classroom assessment. *Applied Measurement in Education, 15*(3), 309–333. https://doi.org/10.1207/S15324818AME1503_5
- Kalyuga, S., & Sweller, J. (2014). The redundancy principle in multimedia learning. In R. E. Mayer (Ed.), *The Cambridge handbook of multimedia learning* (2nd ed., pp. 247–262). Cambridge University Press. https://doi.org/10.1017/CBO9781139547369.013
- Karich, A. C., Burns, M. K., & Maki, K. E. (2014). Updated meta-analysis of learner control within educational technology. *Review of Educational Research, 84*(3), 392–410. https://doi.org/10.3102/0034654314526064
- Kim, Y.-S., Reinecke, K., & Hullman, J. (2017). Explaining the gap: Visualizing one’s predictions improves recall and comprehension of data. *Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems*, 1375–1386. https://doi.org/10.1145/3025453.3025592 (paper page: https://idl.uw.edu/papers/explaining-the-gap)
- Knaflic, C. N. (2015). *Storytelling with data: A data visualization guide for business professionals*. Wiley. https://doi.org/10.1002/9781119055259
- Kornell, N. (2009). Optimising learning using flashcards: Spacing is more effective than cramming. *Applied Cognitive Psychology, 23*(9), 1297–1317. https://doi.org/10.1002/acp.1537
- Kornell, N., & Bjork, R. A. (2008). Optimising self-regulated study: The benefits—and costs—of dropping flashcards. *Memory, 16*(2), 125–136. https://doi.org/10.1080/09658210701763899
- Kornell, N., Hays, M. J., & Bjork, R. A. (2009). Unsuccessful retrieval attempts enhance subsequent learning. *Journal of Experimental Psychology: Learning, Memory, and Cognition, 35*(4), 989–998. https://doi.org/10.1037/a0015729
- Mayer, R. E. (2004). Should there be a three-strikes rule against pure discovery learning? *American Psychologist, 59*(1), 14–19. https://doi.org/10.1037/0003-066X.59.1.14
- Mayer, R. E. (2014). Principles based on social cues in multimedia learning: Personalization, voice, image, and embodiment principles. In R. E. Mayer (Ed.), *The Cambridge handbook of multimedia learning* (2nd ed., pp. 345–368). Cambridge University Press. https://doi.org/10.1017/CBO9781139547369.017
- Mayer, R. E., & Fiorella, L. (2014). Principles for reducing extraneous processing in multimedia learning: Coherence, signaling, redundancy, spatial contiguity, and temporal contiguity principles. In R. E. Mayer (Ed.), *The Cambridge handbook of multimedia learning* (2nd ed., pp. 279–315). Cambridge University Press. https://doi.org/10.1017/CBO9781139547369.015
- McKenna, S., Henry Riche, N., Lee, B., Boy, J., & Meyer, M. (2017). Visual narrative flow: Exploring factors shaping data visualization story reading experiences. *Computer Graphics Forum, 36*(3), 377–387. https://doi.org/10.1111/cgf.13195
- Mittenentzwei, S., Garrison, L. A., Mörth, E., Lawonn, K., Bruckner, S., Preim, B., & Meuschke, M. (2023). Investigating user behavior in slideshows and scrollytelling as narrative genres in medical visualization. *Computers & Graphics, 114*, 229–238. https://doi.org/10.1016/j.cag.2023.06.011
- Moore, C. (2015, September 28). 3 quick tips for strong scenarios. *Cathy Moore*. https://blog.cathy-moore.com/3-quick-tips-for-strong-scenarios/
- Moore, C. (2016, April 19). Scenario mistakes to avoid #1: Eager-beaver feedback. *Cathy Moore*. https://blog.cathy-moore.com/scenario-mistakes-to-avoid-1-eager-feedback/
- Moore, C. (2018, April 3). 3 ways to help people learn from mistakes in branching scenarios. *Cathy Moore*. https://blog.cathy-moore.com/3-ways-to-help-people-learn-from-mistakes-in-branching-scenarios/
- Moore, C. (2025). Build your first branching scenario with H5P (free). *Cathy Moore*. https://blog.cathy-moore.com/branching-scenario-h5p/
- Pan, S. C., & Carpenter, S. K. (2023). Prequestioning and pretesting effects: A review of empirical research, theoretical perspectives, and implications for educational practice. *Educational Psychology Review, 35*(4), Article 97. https://doi.org/10.1007/s10648-023-09814-5
- Paul, S. (2023, August 6). Scrolljacking 101. *Nielsen Norman Group*. https://www.nngroup.com/articles/scrolljacking-101/
- Pernice, K. (2013, September 14). Carousel usability: Designing an effective UI for websites with content overload. *Nielsen Norman Group*. https://www.nngroup.com/articles/designing-effective-carousels/
- Pham, H., Besanko, J., & Devitt, P. (2018). Examining the impact of specific types of item-writing flaws on student performance and psychometric properties of the multiple choice question. *MedEdPublish, 7*, 225. https://doi.org/10.15694/mep.2018.0000225.1
- Quinn, C. (2022, December 13). Information to miniscenarios. *Learnlets*. https://blog.learnlets.com/2022/12/information-to-miniscenarios
- Rey, G. D., Beege, M., Nebel, S., Wirzberger, M., Schmitt, T. H., & Schneider, S. (2019). A meta-analysis of the segmenting effect. *Educational Psychology Review, 31*(2), 389–419. https://doi.org/10.1007/s10648-018-9456-4
- Richland, L. E., Kornell, N., & Kao, L. S. (2009). The pretesting effect: Do unsuccessful retrieval attempts enhance learning? *Journal of Experimental Psychology: Applied, 15*(3), 243–257. https://doi.org/10.1037/a0016496
- Richter, J., Scheiter, K., & Eitel, A. (2016). Signaling text-picture relations in multimedia learning: A comprehensive meta-analysis. *Educational Research Review, 17*, 19–36. https://doi.org/10.1016/j.edurev.2015.12.003
- Rodriguez, M. C. (2005). Three options are optimal for multiple-choice items: A meta-analysis of 80 years of research. *Educational Measurement: Issues and Practice, 24*(2), 3–13. https://doi.org/10.1111/j.1745-3992.2005.00006.x
- Roediger, H. L., III, & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. *Psychological Science, 17*(3), 249–255. https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Rush, B. R., Rankin, D. C., & White, B. J. (2016). The impact of item-writing flaws and item complexity on examination item difficulty and discrimination value. *BMC Medical Education, 16*, 250. https://doi.org/10.1186/s12909-016-0773-3
- Schneider, S., Beege, M., Nebel, S., & Rey, G. D. (2018). A meta-analysis of how signaling affects learning with media. *Educational Research Review, 23*, 1–24. https://doi.org/10.1016/j.edurev.2017.11.001
- Schotter, E. R., Tran, R., & Rayner, K. (2014). Don’t believe what you read (only once): Comprehension is supported by regressions during reading. *Psychological Science, 25*(6), 1218–1226. https://doi.org/10.1177/0956797614531148
- Schroeder, N. L., Adesope, O. O., & Gilbert, R. B. (2013). How effective are pedagogical agents for learning? A meta-analytic review. *Journal of Educational Computing Research, 49*(1), 1–39. https://doi.org/10.2190/EC.49.1.a
- Schroeder, N. L., & Cenkci, A. T. (2018). Spatial contiguity and spatial split-attention effects in multimedia learning environments: A meta-analysis. *Educational Psychology Review, 30*(3), 679–701. https://doi.org/10.1007/s10648-018-9435-9
- Shah, P., & Hoeffner, J. (2002). Review of graph comprehension research: Implications for instruction. *Educational Psychology Review, 14*(1), 47–69. https://doi.org/10.1023/A:1013180410169
- Shute, V. J. (2008). Focus on formative feedback. *Review of Educational Research, 78*(1), 153–189. https://doi.org/10.3102/0034654307313795
- Sinha, T., & Kapur, M. (2021). When problem solving followed by instruction works: Evidence for productive failure. *Review of Educational Research, 91*(5), 761–798. https://doi.org/10.3102/00346543211019105
- Sunwall, E. (2024, August 2). Tabs, used right. *Nielsen Norman Group*. https://www.nngroup.com/articles/tabs-used-right/
- Tannenbaum, S. I., & Cerasoli, C. P. (2013). Do team and individual debriefs enhance performance? A meta-analysis. *Human Factors, 55*(1), 231–245. https://doi.org/10.1177/0018720812448394
- Tucker, C. (2021, July 27). Don’t restart scenario-based learning, go back. *Experiencing eLearning*. https://christytuckerlearning.com/dont-restart-scenario-based-learning-go-back/
- Tucker, C. (2025, May 6). Immediate and delayed consequences in branching scenarios. *Experiencing eLearning*. https://christytuckerlearning.com/immediate-and-delayed-consequences-in-branching-scenarios/
- Tversky, B., Morrison, J. B., & Bétrancourt, M. (2002). Animation: Can it facilitate? *International Journal of Human-Computer Studies, 57*(4), 247–262. https://doi.org/10.1006/ijhc.2002.1017
- Van der Kleij, F. M., Feskens, R. C. W., & Eggen, T. J. H. M. (2015). Effects of feedback in a computer-based learning environment on students’ learning outcomes: A meta-analysis. *Review of Educational Research, 85*(4), 475–511. https://doi.org/10.3102/0034654314564881
- W3C. (n.d.). *Understanding success criterion 2.5.7: Dragging movements* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html
- W3C. (2026, January 13). *EPUB 3.3* (W3C Recommendation), appendix D.8, Media overlays vocabulary. https://www.w3.org/TR/epub-33/
- Wang, H.-H. (2023, July 30). Accordions on desktop: When and how to use. *Nielsen Norman Group*. https://www.nngroup.com/articles/accordions-on-desktop/
- Wisniewski, B., Zierer, K., & Hattie, J. (2020). The power of feedback revisited: A meta-analysis of educational feedback research. *Frontiers in Psychology, 10*, 3087. https://doi.org/10.3389/fpsyg.2019.03087
- Yue, C. L., Bjork, E. L., & Bjork, R. A. (2013). Reducing verbal redundancy in multimedia learning: An undesired desirable difficulty? *Journal of Educational Psychology, 105*(2), 266–277. https://doi.org/10.1037/a0031971
- Zhi, Q., Ottley, A., & Metoyer, R. (2019). Linking and layout: Exploring the integration of text and visualization in storytelling. *Computer Graphics Forum, 38*(3), 675–685. https://doi.org/10.1111/cgf.13719
