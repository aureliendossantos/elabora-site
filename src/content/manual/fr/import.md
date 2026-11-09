---
title: Reprendre un module Storyline ou Rise
description: Importer un projet Storyline, une publication Storyline ou un export Rise, puis faire vos choix dans le rapport d’import.
slug: importer-storyline-rise
group: create
order: 2
---

Vous arrivez avec des modules faits dans Storyline ou Rise ? Elabora peut les reprendre comme modules Elabora. C’est une fonction **Bêta** : elle progresse avec le temps, et le rapport d’import vous dit toujours ce qui n’a pas été repris.

## Ce qu’Elabora sait lire

- un projet Storyline (`.story`) ;
- une publication Storyline (web ou LMS), en dossier ou en ZIP ;
- un export Rise (ZIP).

Elabora reconnaît le fichier à son contenu, pas à son nom. Si ce n’est rien de tout ça, il le dit : « … n’est ni un projet Storyline (.story), ni une publication Storyline, ni un export Rise. »

Une archive Elabora jointe de la même façon n’est pas importée : elle rejoint les sources du nouveau module, pour que votre IA s’en serve. Pour simplement ouvrir une archive Elabora, passez par **Importer…** sur l’accueil (voir [la bibliothèque](/fr/docs/bibliotheque/)).

## Importer

1. Sur l’accueil, **Nouveau module**.
2. **Joindre des documents** › **Module existant**, puis choisissez le fichier. Son étiquette porte la mention **Bêta**.
3. Répondez aux questions qui vous intéressent, comme pour un [nouveau module](/fr/docs/creer-un-module/) : elles sont gardées de la même façon.
4. La phrase près des boutons dit ce qui va se passer : Elabora importe le module, puis votre IA finit ce que liste le rapport.
5. Cliquez sur **Créer avec Claude** (ou **Créer manuellement**). L’import prend quelques instants, puis le module s’ouvre sur son **Rapport d’import**.

<!-- capture: le rapport d’import d’un projet Storyline, avec sa phrase de résumé, la partie « Vos choix » et les pertes groupées -->

## Lire le rapport d’import

- La phrase du haut résume l’import : combien de diapositives sont devenues des écrans, combien d’éléments sont repris, en repli simple ou pas repris.
- **Vos choix** : les décisions qui vous reviennent, chacune avec son nombre, le choix appliqué par l’import et les autres possibles. Un bouton accepte le choix de l’import ; il devient **Accepté**.
- Choisir une autre option refait le module depuis le fichier d’origine. Elabora demande d’abord **Réimporter le module ?** : ce qui a été modifié depuis l’import, par vous ou par votre IA, est remplacé, et l’état actuel reste dans l’historique. Confirmez avec **Réimporter**. Juste après, **Revenir à l’état d’avant** annule ce réimport.
- Les vidéos et les sons **Sans sous-titres ni transcription** viennent en premier : à compléter avant de livrer.
- Puis les pertes, groupées : **En repli simple** (repris sous une forme plus simple), **Pas encore repris** (Elabora ne sait pas encore le lire) et **Laissés de côté** (écartés exprès). Chacune ouvre l’écran où elle se trouve.
- Pour une publication Storyline, une note rappelle que les médias de la Content Library d’Articulate n’ont pas pu être reconnus : remplacez ceux qui en viennent, ou importez plutôt le `.story` si vous l’avez.

Quand vous avez fini, **Fermer le rapport** (⌘Z le rouvre). Tant que le rapport est dans le module, le menu du titre du module propose **Rapport d’import** pour y revenir.

## Ce qui change en passant à Elabora

Elabora lit chaque diapositive Storyline et en fait des blocs dans l’ordre de lecture, pour que l’écran s’adapte à la fenêtre et au téléphone, et reste lisible par un lecteur d’écran. Les diapositives Storyline deviennent des diapositives, les leçons Rise des pages qui défilent. Les calques restent des calques, les déclencheurs simples deviennent des événements, les questions à choix des questions.

Ce qu’Elabora ne sait pas encore faire (glisser-déposer, zones cliquables, textes à trous…) devient un texte, avec une note pour vous. Les polices qu’Elabora ne connaît pas sont remplacées par une police proche de sa sélection, et les médias de la Content Library ne sont pas copiés depuis un `.story`.

Ensuite, c’est à votre IA de finir le travail : compléter le plan, reprendre ce que le rapport liste. Les choix du rapport (présentation, polices, fonds, minutage, médias sans sous-titres) restent les vôtres, et la demande envoyée à l’IA le lui dit.

Pour le détail de ce qui est lu et converti, voyez la décision D47 dans les [décisions](/en/docs/developers/decisions/) de la section développeurs, en anglais.
