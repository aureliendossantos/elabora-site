---
title: "Audio décalé dans Storyline : causes et solutions"
seo: "Audio décalé ou en retard dans Storyline 360 : causes et solutions (2026)"
description: "L’audio qui démarre en retard ou se décale des animations dans Storyline 360, en aperçu ou dans le LMS : les causes connues, ce qui marche en 2026, et Elabora."
slug: storyline-audio-decale
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Depuis 2018, des auteurs signalent un audio Storyline qui démarre en retard ou se décale des animations et des sous-titres, surtout une fois le cours publié. L’Update 118 (mai 2026) a corrigé une cause. Pour le reste : mettre à jour et republier, tester le cours hors de votre LMS, donner de l’avance à l’audio ou le lancer par un déclencheur. Le lecteur d’Elabora cale chaque écran narré sur son audio : quand l’audio attend, l’écran attend."
published: 2026-11-06
updated: 2026-11-06
order: 20
faq:
  - q: "Pourquoi l’audio Storyline est-il juste en aperçu mais en retard dans le LMS ?"
    a: "Le cours publié charge ses médias par le réseau, et le LMS ajoute son propre lecteur. Testez la même sortie dans SCORM Cloud ou Review 360 : si l’audio y reste juste, le retard vient du LMS ou du réseau, pas de la diapositive."
  - q: "L’Update 118 corrige-t-elle tous les décalages ?"
    a: "Elle a corrigé les diapositives dont l’audio ne se lisait pas toujours comme prévu (build 3.118.37003.0, 27 mai 2026), et des auteurs l’ont confirmé après avoir republié. D’autres signalaient encore des cas en juin 2026 : gardez les contournements ci-dessus sous la main."
---

## Le problème

Sur E-Learning Heroes, des auteurs décrivent la même chose depuis 2018 : l’audio met une seconde à démarrer, les animations et les sous-titres passent avant la voix, et c’est pire dans le cours publié ou dans le LMS ([Audio Desync / Loading](https://community.articulate.com/discussions/discuss/audio-desync--loading/1255508), 27 mars 2026). En avril 2026, [Major Storyline Audio Playback Issues](https://community.articulate.com/discussions/discuss/major-storyline-audio-playback-issues/1256157) a réuni 61 réponses : un audio qui ne démarrait pas, se lisait en partie ou se superposait, chez certains apprenants et pas chez d’autres. Le plus ancien fil que nous avons lu date de [janvier 2018](https://community.articulate.com/discussions/discuss/storyline-360-courses---audio-not-playing-or-very-delayed-in-published-output/850843).

## Les solutions dans Storyline aujourd’hui

1. **Mettez Storyline à jour, puis republiez.** L’Update 118 (build 3.118.37003.0, 27 mai 2026) a corrigé les diapositives dont l’audio ne se lisait pas toujours comme prévu. Un cours publié avant garde l’ancien lecteur jusqu’à ce que vous le publiiez à nouveau. Avec Articulate Localization, sa mise à jour du 9 juin 2026, avec l’Update 119 de Storyline, a corrigé la chronologie de l’audio de la langue source qui changeait une fois le cours multilingue dans un LMS.
2. **Vérifiez aussi les sous-titres.** Trois builds de 2025 ont corrigé des sous-titres chargés trop tôt, en retard ou empilés (3.99.34516.0, 3.100.34725.0, 3.104.35448.0) : un Storyline à jour compte ici aussi.
3. **Voyez si le LMS est en cause.** Déposez la même sortie dans SCORM Cloud, ou partagez-la dans Review 360. Si l’audio y reste juste, regardez du côté du LMS : son lecteur, son réseau, la connexion des apprenants.
4. **Donnez de l’avance à l’audio.** Un contournement que partagent des auteurs : faire démarrer les objets de la diapositive environ 0,25 s après l’audio dans la chronologie, pour que le son ait commencé quand ils bougent.
5. **Lancez l’audio par un déclencheur.** Plutôt que de laisser l’audio seul dans la chronologie, un déclencheur « Lire le média » au début de la chronologie laisse la diapositive attendre le son.
6. **Placez des points de repère d’après l’audio lui-même.** Repérez où tombent les mots clés dans un éditeur audio (Audacity, Descript), ajoutez des points de repère à ces moments, et calez les animations sur eux ([Audio/Animation Out of Sync When Published](https://community.articulate.com/discussions/discuss/audioanimation-out-of-sync-when-published-storyline-360/933518)).

Au 6 novembre 2026, nous n’avons lu aucun nouveau signalement d’audio décalé après juin 2026, sans avoir parcouru tous les fils.

## Ce qu’Elabora fait autrement

Dans Elabora, l’horloge d’un écran narré est son audio. Le lecteur du module lit où en est la narration à chaque image : quand l’audio attend le réseau, l’écran attend ; quand la voix est plus lente ou plus rapide, l’écran suit son rythme. Vous ancrez chaque bloc sur un mot, et Elabora cale les mots sur la voix avec un modèle sur votre ordinateur : un bloc arrive quand le mot est dit ([Caler les blocs sur la voix](/fr/docs/voix-et-narration/#caler-les-blocs-sur-la-voix)). Les événements partent quand la lecture les atteint.

C’est ainsi que le lecteur est construit, et son code est ouvert : [la chronologie d’un écran narré](https://github.com/aureliendossantos/elabora-core/blob/main/packages/player/src/timeline.ts). Nous n’en avons pas encore publié de mesure sur une connexion lente.
