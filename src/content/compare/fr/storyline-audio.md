---
title: "Audio décalé dans Storyline : causes et solutions"
seo: "Audio décalé ou en retard dans Storyline 360 : causes et solutions (2026)"
description: "L’audio de Storyline 360 démarre en retard ou se décale des animations dans le LMS ? Mettez à jour et republiez, testez hors du LMS, donnez de l’avance à l’audio."
slug: storyline-audio-decale
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Mettez Storyline à jour et republiez le module : l’Update 118 (mai 2026) a corrigé les diapositives dont l’audio ne se lisait pas toujours comme prévu. Testez ensuite la même sortie dans SCORM Cloud pour voir si le LMS est en cause. Si l’audio traîne encore, faites démarrer les objets de la diapositive un quart de seconde après l’audio, lancez l’audio par un déclencheur, ou placez des points de repère là où tombent les mots clés."
published: 2026-11-06
updated: 2026-11-09
order: 20
faq:
  - q: "Pourquoi l’audio Storyline est-il juste en aperçu mais en retard dans le LMS ?"
    a: "Le cours publié charge ses médias par le réseau, et le LMS ajoute son propre lecteur. Testez la même sortie dans SCORM Cloud ou Review 360 : si l’audio y reste juste, le retard vient du LMS ou du réseau."
  - q: "L’Update 118 corrige-t-elle tous les décalages ?"
    a: "Elle a corrigé les diapositives dont l’audio ne se lisait pas toujours comme prévu (build 3.118.37003.0, 27 mai 2026), et des auteurs l’ont confirmé après avoir republié. D’autres signalaient encore des cas en juin 2026 : gardez les contournements ci-dessus sous la main."
---

## Le problème

La voix démarre avec un temps de retard, et les animations et les sous-titres passent avant elle. Tout semble juste en aperçu, puis c’est pire une fois le module publié ou dans le LMS ([Audio Desync / Loading](https://community.articulate.com/discussions/discuss/audio-desync--loading/1255508), mars 2026). Certains apprenants entendent un audio qui ne démarre pas, se lit en partie ou se superpose, quand d’autres l’entendent bien ([Major Storyline Audio Playback Issues](https://community.articulate.com/discussions/discuss/major-storyline-audio-playback-issues/1256157), avril 2026).

## Les solutions dans Storyline aujourd’hui

1. **Mettez Storyline à jour, puis republiez.** L’Update 118 (build 3.118.37003.0, 27 mai 2026) a corrigé les diapositives dont l’audio ne se lisait pas toujours comme prévu. Un module publié avant garde l’ancien lecteur jusqu’à ce que vous le publiiez à nouveau. Si vous utilisez Articulate Localization, sa mise à jour du 9 juin 2026 (avec l’Update 119 de Storyline) a corrigé la chronologie de l’audio de la langue source, qui changeait une fois le module multilingue dans le LMS.
2. **Vérifiez aussi les sous-titres.** Trois builds de 2025 ont corrigé des sous-titres chargés trop tôt, en retard ou empilés (3.99.34516.0, 3.100.34725.0, 3.104.35448.0) : un Storyline à jour aide ici aussi.
3. **Voyez si le LMS est en cause.** Déposez la même sortie dans SCORM Cloud, ou partagez-la dans Review 360. Si l’audio y reste juste, regardez du côté du LMS : son lecteur, son réseau, la connexion des apprenants.
4. **Donnez de l’avance à l’audio.** Des auteurs partagent ce contournement : dans la chronologie, faites démarrer les objets de la diapositive environ 0,25 s après l’audio, pour que le son ait commencé quand ils bougent.
5. **Lancez l’audio par un déclencheur.** Ajoutez un déclencheur « Lire le média » au début de la chronologie : la diapositive attend alors le son.
6. **Placez des points de repère d’après l’audio lui-même.** Repérez où tombent les mots clés dans un éditeur audio (Audacity, Descript), ajoutez des points de repère à ces moments, et calez les animations sur eux ([Audio/Animation Out of Sync When Published](https://community.articulate.com/discussions/discuss/audioanimation-out-of-sync-when-published-storyline-360/933518)).

## Ou laissez Elabora caler l’écran sur la voix

Elabora a été conçu autour de ce problème : sur un écran narré, l’audio donne l’heure.

- **L’écran suit la voix.** Le lecteur du module lit où en est la narration à chaque image. Quand l’audio attend le réseau, l’écran attend ; quand la voix est plus lente ou plus rapide, l’écran suit son rythme.
- **Les blocs arrivent sur un mot.** Vous ancrez chaque bloc sur un mot, et Elabora cale les mots sur la voix avec un modèle sur votre ordinateur : un bloc arrive quand le mot est dit ([Caler les blocs sur la voix](/fr/docs/voix-et-narration/#caler-les-blocs-sur-la-voix)).
- **Les événements partent quand la lecture les atteint.**

Le code du lecteur est ouvert : [la chronologie d’un écran narré](https://github.com/aureliendossantos/elabora-core/blob/main/packages/player/src/timeline.ts).
