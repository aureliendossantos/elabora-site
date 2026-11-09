---
title: Traduire un module
description: Ajouter une langue, traduire avec votre IA, un traducteur ou vous-même, relire à l’écran, l’essayer dans l’aperçu et choisir les langues du paquet.
slug: traduire
group: create
order: 10
---

Un module traduit reste un seul module : la langue d’origine est la source, et chaque langue ajoutée est une traduction de cette source. Quand la source change, Elabora vous dit quelles traductions sont à revoir.

Ouvrez **Traduction** depuis le menu du titre du module. La barre d’outils propose un bouton **Diapositive** pour revenir aux écrans, trois vues (**Tableau**, **En contexte**, **Versions**) et le menu des langues.

## Ajouter une langue

**Ajouter une langue** (ou, quand le module en a déjà une, **Ajouter une langue…** dans le menu des langues) demande **Quelle langue ?** : choisissez dans la liste, ou **Une autre langue…** pour taper son code (pt-BR, uk, ko…).

## Traduire

Trois façons, que vous pouvez mélanger :

- Avec votre IA. C’est le plus rapide :

  > Traduis le module en anglais, en gardant le ton et les termes du métier.

- Avec un traducteur : **Fichier pour un traducteur**, dans le menu des langues, vous donne le fichier de la langue au format XLIFF (.xlf), que lisent les outils de traduction.
- Vous-même, dans le **Tableau** : le module, son plan validé et chaque écran, la source à gauche et la traduction à droite, écrite sur place. ⌘Z annule chaque traduction.

## Ce que le tableau vous signale

Le tableau ne met en couleur que ce qui demande votre attention :

- **À relire** : une traduction écrite ailleurs (par un traducteur ou par votre IA). **C’est bon** la confirme.
- **Modifié depuis** : la source a changé depuis la traduction. Ses anciens mots s’affichent au survol ; **Garder cette traduction** la confirme telle quelle.
- **Déborde à l’écran** : avec cette traduction, la diapositive dépasse la fenêtre. **Voir en contexte** vous y emmène.
- Ce qui casse le texte : un lien, une formule ou une valeur entre accolades de la source qui manque, ou un texte trop long pour sa place.

**À faire** ne garde que ces lignes-là.

<!-- capture: le Tableau de traduction avec une ligne « À relire » et une ligne « Modifié depuis » -->

## Relire en contexte

**En contexte** montre l’écran tel que le verront les apprenants de cette langue ; choisissez l’écran dans la barre d’outils. Les textes à relire, modifiés ou cassés sont entourés. Un clic sur un texte l’ouvre à côté de la diapositive : la source, la traduction à corriger sur place, **C’est bon** et **Garder cette traduction**.

Quand une traduction fait déborder la diapositive, Elabora le dit au-dessus et entoure les textes devenus plus longs. **Raccourcir** demande à votre IA une traduction plus courte, qui garde le sens et le ton.

## L’essayer dans l’aperçu

L’**Aperçu** affiche le menu **Langue** dès que le module a une traduction, approuvée ou non, même quand **Langue** est retiré du lecteur : c’est votre banc d’essai. Chaque langue s’y voit telle qu’elle est : un texte pas encore traduit reste dans la langue du module. Une traduction modifiée relance l’Aperçu.

## Versions, plan traduit et paquets

**Versions** montre les langues côte à côte et où en est chacune. Choisissez-en une : le panneau de droite dit son avancement, avec **Ouvrir le tableau** et **Voir en contexte**, puis :

- Le plan traduit : faites-le relire, puis **Enregistrer l’approbation…** pour noter qui l’a approuvé et quand. Cette approbation va dans le paquet, et reste valable tant que le plan ne change pas. Comme pour le plan d’origine, c’est à vous de l’enregistrer, pas à votre IA.
- Le paquet de cette langue seule, pour le LMS et la qualité de médias du module. Quand tout est traduit et relu, le bouton **Construire le paquet …** (suivi de la langue) le construit ; en attendant, **Construire une version de travail** : ce qui n’est pas encore traduit reste dans la langue source. Si le paquet est trop lourd pour le LMS, Elabora le dit comme dans [Publier](/fr/docs/publier/).

Pour livrer plusieurs langues à la fois, dans un paquet ou un paquet par langue, cochez-les dans **Publier** : voir [plusieurs langues](/fr/docs/publier/#plusieurs-langues).

## La narration traduite

Les répliques se traduisent comme les autres textes. Chaque locuteur peut avoir une voix par langue (**Distribution des voix…**) ; une réplique attend sa traduction pour avoir sa voix dans cette langue. Voir [voix et narration](/fr/docs/voix-et-narration/).

Vous pouvez éditer un module en anglais dans une interface en français : la langue de l’interface ne change jamais vos modules.
