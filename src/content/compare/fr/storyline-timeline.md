---
title: "Parcourir la chronologie de Storyline : calques, déclencheurs et ce qu’on voit"
seo: "Chronologie de Storyline 360 sans calques ni déclencheurs : que faire (2026)"
description: "Storyline 360 parcourt la chronologie, mais calques, déclencheurs et animations complètes se voient seulement en aperçu. Vérifier vite un moment, et la façon d’Elabora."
slug: storyline-chronologie-calques-declencheurs
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Faites glisser la tête de lecture pour vérifier le minutage du calque de base, lisez la chronologie depuis la tête de lecture pour voir le mouvement, et prévisualisez la diapositive seule pour voir les calques, les déclencheurs et les animations complètes. Articulate documente que les calques et les déclencheurs restent hors de la scène pendant qu’on parcourt."
published: 2026-11-06
updated: 2026-11-09
order: 21
faq:
  - q: "Peut-on parcourir la chronologie dans Storyline 360 ?"
    a: "Oui, depuis l’Update 66 (juillet 2022). Faites glisser la tête de lecture : les objets apparaissent et disparaissent à leur moment. Les calques, les déclencheurs et les animations complètes demandent un aperçu de la diapositive."
  - q: "Existe-t-il un aperçu depuis la tête de lecture dans Storyline ?"
    a: "La chronologie se lit depuis la tête de lecture ou sur une plage choisie. Au 6 novembre 2026, l’historique des versions ne liste aucun aperçu de la diapositive entière depuis la tête de lecture ; Articulate a répondu le 15 octobre 2026, dans un fil d’idées, qu’il préviendrait les auteurs s’il en publiait un."
---

## Le problème

Vous voulez voir ce que voit l’apprenant à 12 secondes : la bulle est-elle déjà là, le calque s’est-il ouvert, le zoom tombe-t-il sur le mot ? Storyline 360 permet de parcourir la chronologie, mais pendant ce temps les calques et les déclencheurs restent hors de la scène, et les animations d’entrée et de sortie se montrent en simple fondu. Les animations complètes et les interactions apparaissent dans un aperçu de la diapositive ([Timeline Scrubbing and Animation Editing](https://www.articulatesupport.com/article/Storyline-360-Timeline-Scrubbing-and-Animation-Editing), mise à jour le 16 janvier 2026).

## Vérifier vite un moment dans Storyline

1. **Parcourez pour le minutage.** Faites glisser la tête de lecture pour voir quand les objets du calque de base arrivent et partent. Ctrl+H n’affiche que les objets sous la tête de lecture, ce qui dégage une diapositive chargée.
2. **Lisez depuis la tête de lecture.** Lancez la lecture de la chronologie là où vous êtes pour voir le mouvement. Si elle s’arrête aussitôt, une plage minuscule de la chronologie est peut-être sélectionnée ([BUG: Can’t ‘Preview’ Storyline Timeline](https://community.articulate.com/discussions/discuss/bug-cant-preview-storyline-timeline-/1198572)).
3. **Prévisualisez la diapositive pour les calques et les déclencheurs.** Prévisualisez cette diapositive seule pour voir les calques, les déclencheurs et les animations complètes. Depuis le build 3.124.37782.0 (18 août 2026), vous pouvez annuler un aperçu de chronologie trop long.
4. **Vérifiez un calque sur sa propre chronologie.** Sélectionnez le calque pour travailler ses objets et leur minutage, puis prévisualisez la diapositive pour le voir s’ouvrir sur le calque de base.

## Ou laissez Elabora vous montrer le moment

Elabora a été conçu pour que l’écran que vous modifiez soit celui que voit l’apprenant.

- **Le canevas suit la tête de lecture.** Sur un écran narré, faites glisser la tête de lecture de l’onglet **Chronologie** : l’écran montre ce moment comme le verra l’apprenant, effets compris. Le lecteur du module dessine lui-même le canevas, celui qui le joue dans le LMS.
- **Les calques ont leur propre chronologie.** Affichez un calque, et sa chronologie commence à son ouverture, avec l’écran tenu en dessous ([Un calque qui parle](/fr/docs/voix-et-narration/#un-calque-qui-parle)).
- **Les événements partent à la lecture.** Faire glisser la tête de lecture montre le moment sans lancer d’événement ; lisez la chronologie pour les voir se produire.
