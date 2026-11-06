---
title: "Parcourir la chronologie de Storyline : calques, déclencheurs et ce qu’on voit"
seo: "Chronologie de Storyline 360 sans calques ni déclencheurs : que faire (2026)"
description: "Storyline 360 parcourt la chronologie, mais calques, déclencheurs et animations complètes ne se voient qu’en aperçu. Ce que dit Articulate, vérifier vite, et Elabora."
slug: storyline-chronologie-calques-declencheurs
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Storyline 360 parcourt la chronologie depuis juillet 2022. Articulate en documente la limite : en la parcourant, ni les calques ni les déclencheurs ne s’affichent, et les animations d’entrée et de sortie se montrent en simple fondu. Pour vérifier un moment : parcourir pour le minutage, lire depuis la tête de lecture, et lancer l’aperçu de la diapositive pour le reste. Dans Elabora, la tête de lecture montre l’écran ou le calque à ce moment, avec ses vrais effets."
published: 2026-11-06
updated: 2026-11-06
order: 21
faq:
  - q: "Peut-on parcourir la chronologie dans Storyline 360 ?"
    a: "Oui, depuis l’Update 66 (juillet 2022). Faites glisser la tête de lecture : les objets apparaissent et disparaissent à leur moment. Les calques, les déclencheurs et les animations complètes demandent un aperçu de la diapositive."
  - q: "Existe-t-il un aperçu depuis la tête de lecture dans Storyline ?"
    a: "La chronologie se lit depuis la tête de lecture ou sur une plage choisie. Au 6 novembre 2026, l’historique des versions ne liste aucun aperçu de la diapositive entière depuis la tête de lecture ; Articulate a répondu le 15 octobre 2026, dans un fil d’idées, qu’il préviendrait les auteurs s’il en publiait un."
---

## Le problème

Vous voulez voir ce que voit l’apprenant à 12 secondes : la bulle est-elle déjà là, le calque s’est-il ouvert, le zoom tombe-t-il sur le mot ? Des auteurs le demandent depuis un [fil de 2014](https://community.articulate.com/discussions/discuss/scrubbing-the-timeline--actual-view-/834010) de 55 réponses. En octobre 2026, l’un d’eux décrivait sa routine dans un [fil d’idées](https://community.articulate.com/discussions/share-ideas/frame-by-frame-timeline-navigation-in-storyline-360/1244493) : placer la tête de lecture juste avant le moment, lire, regarder, recommencer.

## Ce que Storyline montre aujourd’hui

La page d’Articulate [Timeline Scrubbing and Animation Editing](https://www.articulatesupport.com/article/Storyline-360-Timeline-Scrubbing-and-Animation-Editing) (mise à jour le 16 janvier 2026) le dit clairement : « While scrubbing, you won’t see layers and triggers on the slide stage. » Les animations d’entrée et de sortie se montrent sous une forme simple, en fondu ; les animations complètes et les interactions demandent un aperçu de la diapositive.

## Vérifier vite un moment dans Storyline

1. **Parcourez pour le minutage.** Faites glisser la tête de lecture pour voir quand les objets du calque de base arrivent et partent. Ctrl+H n’affiche que les objets sous la tête de lecture, ce qui dégage une diapositive chargée.
2. **Lisez depuis la tête de lecture.** Lancez la lecture de la chronologie là où vous êtes pour voir le mouvement. Si elle s’arrête aussitôt, une plage minuscule de la chronologie est peut-être sélectionnée (le constat d’un auteur dans [BUG: Can’t ‘Preview’ Storyline Timeline](https://community.articulate.com/discussions/discuss/bug-cant-preview-storyline-timeline-/1198572)).
3. **Lancez l’aperçu de la diapositive pour les calques et les déclencheurs.** Prévisualisez cette diapositive seule, plutôt que tout le projet, pour voir les calques, les déclencheurs et les animations complètes. Depuis le build 3.124.37782.0 (18 août 2026), un aperçu de chronologie trop long peut être annulé.
4. **Vérifiez un calque sur sa propre chronologie.** Sélectionnez le calque pour travailler ses objets et leur minutage, puis prévisualisez la diapositive pour le voir s’ouvrir sur le calque de base.

## Ce qu’Elabora fait autrement

Sur un écran narré, l’onglet **Chronologie** d’Elabora a une tête de lecture que le canevas suit. Faites-la glisser, et l’écran montre ce moment comme le verra l’apprenant, effets compris : le canevas est dessiné par le lecteur du module lui-même, celui qui le joue dans le LMS. Affichez un calque, et sa chronologie commence à son ouverture, avec l’écran tenu en dessous ([Un calque qui parle](/fr/docs/voix-et-narration/#un-calque-qui-parle)).

Les événements restent pour la lecture, comme dans Storyline : faire glisser la tête de lecture montre le moment et ne lance aucun événement. Lisez la chronologie pour les voir se produire.
