---
title: Voix et narration
description: Écrire la narration d’un écran, choisir les voix, les faire dire sur votre ordinateur ou avec ElevenLabs, et caler les blocs sur la voix.
slug: voix-et-narration
group: create
order: 9
---

La narration d’un écran, c’est ce que dit la voix, réplique par réplique. Chaque réplique est dite par un locuteur (« Voix off » par défaut), et chaque locuteur a sa voix dans tout le module. Trois sortes de voix :

- les voix locales : gratuites, faites sur votre ordinateur, sans connexion, en français et en anglais, sur Mac avec une puce Apple ou Windows 64 bits. Elles se téléchargent une fois par langue (354 Mo pour le français, 126 Mo pour l’anglais) ;
- les voix ElevenLabs : plus expressives, avec votre propre compte ElevenLabs (voir [les réglages](/fr/docs/reglages/)) ;
- vos enregistrements : une voix humaine, réplique par réplique.

Une voix générée est marquée comme telle et citée dans les crédits du module (AI Act, article 50). Les fichiers des voix vont dans le module, qui se lit sans clé ni connexion.

## Commencer la narration d’un écran

Sous le canevas, le tiroir **Script** montre la narration de l’écran. S’il n’y en a pas encore :

- **Ajouter une narration** crée une première réplique à taper ;
- **Reprendre la voix off du plan** apparaît à la place quand le plan donne une voix off validée à cet écran ;
- **Importer des enregistrements…** fait une réplique de chaque fichier audio, dans l’ordre de leurs noms ; Elabora peut transcrire ce qu’ils disent, sur votre ordinateur.

La voix explique et l’écran montre : les vérifications d’Elabora signalent le texte à l’écran qui répète la narration, pour les raisons données dans [ce que la recherche dit](/fr/docs/ce-que-dit-la-recherche/#une-narration-qui-ne-lit-pas-lécran-à-voix-haute).

Ou demandez à votre IA :

> Écris la narration de l’écran 3 : une voix off posée, trois répliques au plus, une par étape.

<!-- capture: le tiroir Script sous le canevas, avec trois répliques et le bouton Écouter -->

## Écrire les répliques

Chaque ligne du script montre le locuteur, le texte, la durée et un bouton pour écouter. **Ajouter une réplique** en ajoute une ; **Nouvelle réplique depuis un fichier audio…**, ou un fichier audio glissé sur le script, en crée une dont le texte est ce que dit l’enregistrement. Les répliques sont rangées par étape ; **Couper à une réplique…** commence une nouvelle étape. **Écouter**, en tête du tiroir, joue l’écran entier.

## Choisir les voix

La première fois qu’une réplique a besoin d’une voix, Elabora propose **Des voix pour vos répliques** : les voix ElevenLabs (avec votre compte) ou les voix locales (avec la taille à télécharger). **Plus tard** remet le choix à plus tard.

Pour changer la voix d’un locuteur, sélectionnez une de ses répliques : son menu de voix est dans **Propriétés**. **Distribution des voix…** ouvre la section **Voix** des **Réglages du module** : un locuteur par ligne, sa voix (par langue si le module est traduit), un bouton pour l’écouter, et **Ajouter un locuteur**.

## Faire dire les répliques

- Avec les voix locales, Elabora dit les répliques en arrière-plan, sur votre ordinateur, dès qu’un texte change. Une réplique prend quelques secondes.
- Avec ElevenLabs, rien n’est dépensé sans votre clic : les répliques attendent **Générer**. Sous 1 % de votre quota du mois, la génération part tout de suite ; à partir de 1 %, Elabora affiche la part du quota et attend votre accord. Quand plusieurs voix se répondent, **D’un bloc** fait dire l’échange en une fois (plus naturel), **Réplique par réplique** permet d’en refaire une seule.

Dans les **Propriétés** d’une réplique : l’écouter, **Régénérer**, la **Prise** (chaque génération en est une, gardez la meilleure), la **Vitesse**, la **Pause avant**, les **Didascalies** et la **Prononciation**. **Importer un enregistrement…** remplace la voix générée par une voix humaine ; **Revenir à la voix générée** fait l’inverse. Si Elabora soupçonne que la voix a avalé un mot, il le dit : **Nouvelle prise**, ou **Ignorer** si le mot est bien là.

Les didascalies (« [chuchote] », « [agacé] ») disent à une voix ElevenLabs comment jouer la réplique ; l’apprenant ne les voit jamais. Quand une voix ElevenLabs parle sur l’écran, l’outil **Jeu**, dans le tiroir, en propose ; il peut aussi demander à votre IA de mettre la réplique ou l’étape en scène. Les voix locales disent le texte seul, sans les didascalies.

Un sigle ou un nom propre mal dit ? Dans **Réglages du module**, section **Prononciation**, **Ajouter une prononciation** : « P-12 » se dit « pé douze ».

## Caler les blocs sur la voix

L’onglet **Chronologie** du tiroir montre les étapes, les mots là où la voix les dit, une rangée par bloc minuté, et la tête de lecture que suit le canevas. Dans les **Propriétés** d’un bloc d’un écran narré, **Apparition** et **Disparition** choisissent quand il arrive et quand il part : cliquez sur un mot du script ou de la chronologie, puis **Accrocher**. Réglez ensuite le **Décalage**, l’**Effet** (**Fondu**, **Monter**, **Glisser**, **Zoom**, **Balayage**, **Tracé**) et sa **Durée**. Il en va de même pour les parties d’un graphique : voir [le graphique suit la voix](/fr/docs/ce-que-dit-la-recherche/#le-graphique-suit-la-voix).

Pour que les mots tombent juste, Elabora les cale sur la voix avec un modèle à télécharger une fois (**Caler les mots sur la voix**). Sans lui, les mots sont placés à l’estime, d’après la longueur du texte.

## Un calque qui parle

Un calque peut avoir sa propre narration, comme un calque de Storyline : quand il s’ouvre, une voix explique, et ses blocs arrivent au mot qui les nomme. Par exemple, le calque « Rappel de la règle », dit par la guide, où le schéma paraît au mot « poste ».

- Affichez le calque (son onglet, au-dessus du canevas) : le tiroir passe à sa voix. **Script** s’ouvre sur *Voix du calque « Rappel de la règle »* et **Revenir à l’écran** ; ses répliques n’ont pas d’étapes, car un calque se joue d’une traite, et une phrase dit ce qui suit sa voix (« Puis le calque se ferme et l’écran reprend »). **Chronologie** part de l’ouverture du calque, avec au-dessus une rangée **L’écran**, en pause pendant qu’il parle.
- Ses répliques s’ajoutent et se disent comme celles de l’écran : mêmes voix, prises, didascalies et prononciations.
- Ses blocs se calent sur ses répliques avec **Apparition** et **Disparition**, comme sur l’écran ; ils proposent aussi « à l’ouverture du calque », « à la fin de la voix du calque » et **Jusqu’à la fermeture du calque**. Un calque sans voix peut faire venir ses blocs à un nombre de secondes après son ouverture. Un bloc du calque ne se cale jamais sur une réplique de l’écran, ni l’inverse : les vérifications le signalent.
- Deux voix ne parlent jamais en même temps. Tant que le calque parle, la narration de l’écran attend : elle reprend à la fermeture d’une fenêtre, ou à la fin de la voix d’un panneau.
- L’apprenant trouve dans le calque sa propre petite barre (lecture et pause, rejouer, déplacement selon le réglage du calque, sous-titres). Le calque repart du début à chaque ouverture. La pause fige tout, et la transcription de l’écran ajoute les répliques du calque sous son titre.
- **Fermer le calque quand sa voix a fini** : dans les **Propriétés** du calque, section **Chronologie du calque**, **À la fin de sa voix** propose **Fermer le calque à la fin de sa voix**, qui écrit l’événement en un clic. Dans l’éditeur d’événements, c’est le déclencheur **Quand la voix d’un calque a fini…** ; **Mettre la chronologie en pause** et **Reprendre la chronologie** demandent alors laquelle : celle de l’écran ou la voix du calque.

Ou demandez à votre IA :

> Sur l’écran 6, fais dire le calque « Rappel de la règle » par la guide, en deux répliques ; fais apparaître le schéma au mot « poste », et ferme le calque quand elle a fini.

Pourquoi faire venir les blocs avec la voix : voir [un calque qui parle](/fr/docs/ce-que-dit-la-recherche/#un-calque-qui-parle).

## Comment l’écran avance

Dans les **Propriétés** de l’écran, la section **Narration** règle l’**Avancement** : **Par l’apprenant** (la voix s’arrête à la fin de chaque étape et attend « Continuer »), **Automatique** (les étapes s’enchaînent, l’apprenant peut mettre en pause) ou **Jusqu’à l’écran suivant** (Elabora rappelle que cela impose un délai à l’apprenant). Le **Déplacement** dit jusqu’où l’apprenant peut se déplacer dans la narration : **Aucun**, **Dans ce qui a été vu** ou **Libre**. Les valeurs par défaut du module sont dans **Réglages du module**, section **Le lecteur**. Sur un téléphone, l’écran avance toujours étape par étape.

## Relire la narration

Dans la vue **Revue**, **Planche** montre chaque écran narré image par image, avec **Écouter l’écran**. Un repère ouvre l’écran à ce moment-là.
