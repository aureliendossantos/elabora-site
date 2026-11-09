---
title: Événements, calques et étapes
description: Lire et retoucher ce qui se passe quand l’apprenant clique ou répond, ouvrir des calques, révéler un écran par étapes, retenir des valeurs.
slug: interactions
group: create
order: 6
---

Le plus souvent, c’est votre IA qui écrit les interactions d’un écran :

> Sur l’écran 5, si l’apprenant se trompe à la question, ouvre un panneau avec un indice ; s’il répond juste, passe à l’écran suivant.

Elabora vous les montre en phrases, que vous pouvez lire, corriger ou compléter à la main.

## Lire les événements

Un événement se lit comme une phrase : « Quand on clique sur le bouton Vérifier : afficher le calque Indice ». Vous les trouvez dans **Propriétés**, section **Événements**, pour un bloc, pour l’écran ou pour un calque. **Tout voir** ouvre la page des événements de l’écran à la place du canevas, groupés par ce qui les déclenche ; **Canevas**, dans la barre d’outils, ramène la diapositive.

Cliquez sur un mot souligné de pointillés pour ouvrir un menu : un autre bloc, un autre calque, un autre écran, une autre valeur. Les menus ne proposent que ce qui est possible à cet endroit.

<!-- capture: la page des événements d’un écran, avec un événement sélectionné et son menu ouvert -->

## Écrire un événement

1. **Ajouter un événement** demande ce qui le déclenche : **À l’ouverture de l’écran**, **Quand on clique sur…**, **Quand on valide une question…**, **Quand on fait un choix…**, **Quand un objet signale…**, **Quand on ferme un calque…**, **Quand une variable change…** (et, sur un écran narré, les moments de la voix).
2. L’événement s’écrit aussitôt, sans action. Son **+** demande ce qu’il fait : **Aller à un écran**, **Afficher un calque**, **Fermer un calque**, **Afficher un bloc**, **Masquer un bloc**, **Afficher une étape**, **Donner une valeur à une variable**, **Ajouter à une variable**, **Régler un objet**, **Marquer l’écran comme complété**, **Quitter le module**…
3. Le menu **…** de l’événement sélectionné (ou un clic droit à côté de ses mots) ajoute une condition (**Ajouter une condition supplémentaire…**), une alternative (**Ajouter « sinon »…**) ou une note pour les relecteurs (**Ajouter une note…**), et propose **Supprimer l’événement**.

Un événement laissé sans action le dit sur sa ligne. Raccourcis sur l’événement sélectionné : / ajoute une action, ⌘D le duplique, ⌫ le supprime.

## Les calques

Un calque s’affiche par-dessus l’écran : un retour, un indice, une fenêtre de détails.

- Les onglets au-dessus du canevas montrent **Base** et les calques de l’écran ; **+** en ajoute un, avec un premier texte prêt à être tapé.
- Un double clic sur un onglet le renomme. Le clic droit choisit **Fenêtre** (au-dessus de l’écran assombri ; l’apprenant la ferme pour continuer) ou **Panneau** (sur une partie de l’écran, qui reste utilisable), propose un événement qui l’affiche, ou le supprime avec ses blocs (⌘Z le ramène).
- Avec un calque affiché et rien de sélectionné, les **Propriétés** montrent les réglages du calque : son nom, **S’affiche en**, **Ouvert par** (les événements qui l’affichent ; sinon, Elabora prévient que l’apprenant ne le verra jamais) et **Ajouter un événement qui l’affiche**.
- Un bloc passe dans un calque, ou revient à la base, depuis son menu. Les blocs ajoutés pendant qu’un calque est affiché vont dans ce calque.
- Un calque peut parler : sa voix explique, ses blocs arrivent au mot qui les nomme, et il peut se fermer quand sa voix a fini. Voir [un calque qui parle](/fr/docs/voix-et-narration/#un-calque-qui-parle).

## Les étapes

Les étapes révèlent un écran par morceaux.

- Dans les **Propriétés** d’un bloc, **Étape** le place **Au départ**, dans une étape existante ou dans une nouvelle.
- Dans les **Propriétés** de l’écran, la section **Étapes** dit si le bouton **Continuer** dévoile l’étape suivante, et pour chaque étape comment elle **S’ouvre** : **Avec « Continuer »**, **Après les activités** (une fois les questions au-dessus répondues), **Après exploration** (une fois aussi les panneaux, cartes et étapes au-dessus ouverts : voir [les blocs de départ](/fr/docs/blocs-de-depart/#après-exploration-et-facultatif)) ou **Par un événement**.
- Les événements proposent alors **Afficher une étape**.

Sur un écran narré, la voix enchaîne aussi les étapes : voir [voix et narration](/fr/docs/voix-et-narration/). Pourquoi de courtes étapes aident, c’est dans [ce que la recherche dit](/fr/docs/ce-que-dit-la-recherche/#des-étapes-qui-rythment-un-écran).

## Les variables

Une variable retient quelque chose pendant que l’apprenant suit le module (un choix, un score, un indice déjà vu) pour que les événements s’en servent.

- **Variables**, dans la barre d’outils de la page des événements, ouvre la liste : nom, type, **Valeur initiale**, **Reprise** (retenue d’une session à l’autre).
- Sélectionnez-en une pour la renommer (les événements suivent), changer son type, sa valeur initiale, ses **Valeurs possibles** ou sa **Longueur max.**, et dire **À quoi elle sert**. En dessous, les événements qui la modifient (**Modifiée par**) et qui la lisent (**Lue par**), chacun ouvrant son événement.
- **Nouvelle variable** en crée une ; les menus des événements proposent aussi **Nouvelle variable…** là où l’on choisit une variable. Une variable « jamais lue » ne change rien pour l’apprenant ; une variable encore utilisée ne se supprime pas.

Les [vérifications](/fr/docs/apercu-et-verifications/) listent les problèmes d’interactions (un événement sans action, un calque jamais affiché).
