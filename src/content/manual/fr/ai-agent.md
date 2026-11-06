---
title: Travailler avec votre IA
description: "Le chat d’Elabora et ses modèles gratuits, ou votre IA dans son app : envoyer une demande, suivre et annuler ce que fait l’agent, et savoir ce qui reste entre vos mains."
slug: travailler-avec-votre-ia
group: start
order: 4
---

## Comment ça marche

Elabora travaille avec une IA de deux façons :

- **Dans Elabora.** L’IA vous répond dans le panneau **Agent**, comme dans un chat. C’est OpenCode, avec des modèles gratuits : ni compte, ni clé, ni abonnement.
- **Dans l’app de votre IA.** Claude Code dans l’app Claude, Codex dans l’app ChatGPT, avec votre offre. Elabora ouvre l’app sur le dossier du module, avec votre demande déjà écrite. L’agent modifie le module avec la commande `elabora`, qu’Elabora apporte : rien à installer.

Dans les deux cas, Elabora suit ce que l’agent écrit et vous le montre à mesure.

## Choisir votre IA

Au premier lancement, Elabora vous demande quelle IA utiliser : **Claude**, **ChatGPT** ou **Je n’ai pas d’abonnement** (OpenCode et des modèles gratuits, dans Elabora). Rien n’est choisi d’avance. Vous en changez à tout moment, sur l’accueil avec **Vous** › **Votre IA préférée…** (voir [les réglages](/fr/docs/reglages/)).

Les modèles gratuits suffisent pour retoucher un écran, ajouter une question ou traduire un texte. Pour créer un module de toutes pièces ou d’autres tâches complexes, un abonnement Claude ou ChatGPT est fortement recommandé : les résultats sont bien meilleurs. Comment chaque IA s’en sort avec Elabora : voir [Modèles testés](/fr/docs/modeles-testes/).

## Envoyer une demande

1. Dans un module, cliquez sur **Agent**, en haut à droite.
2. Écrivez votre demande dans le champ **Demander à l’agent…**. Une étiquette montre l’écran affiché : l’agent saura ce que vous regardez (l’écran et, s’il y en a un, le bloc sélectionné), et dans quelle langue est le module.
3. Le menu à côté du bouton d’envoi montre l’IA qui recevra la demande, votre IA préférée au départ. Chaque ligne dit où elle travaille : **OpenCode** « Dans Elabora · gratuit », **Claude** et **ChatGPT** « Dans l’app Claude » ou « Dans l’app ChatGPT », avec votre offre. Viennent ensuite **Copier la demande**, pour la coller dans une autre IA, et **Votre IA préférée…**.
4. Envoyez avec la flèche, ou Entrée (Maj+Entrée va à la ligne ; pour envoyer avec ⌘Entrée, voir [les réglages](/fr/docs/reglages/)).
5. Avec OpenCode, la réponse s’écrit dans le panneau. Avec Claude ou ChatGPT, l’app de votre IA s’ouvre sur le module : votre agent vous demandera sans doute la permission de lancer la commande `elabora`, acceptez.

Quelques exemples de demandes :

> Écris le plan à partir du brief du client et des notes de l’expert, dans les sources.

> Sur l’écran affiché, ajoute une question d’entraînement sur les trois causes de panne, avec un retour pour chaque réponse.

> Les textes du chapitre 2 sont trop scolaires : rends-les plus directs, sans toucher aux textes validés par le client.

D’autres boutons envoient aussi une demande à votre agent, déjà rédigée : **Créer avec** (et le nom de votre IA) sur la page [Nouveau module](/fr/docs/creer-un-module/), **Corriger** dans les [vérifications](/fr/docs/apercu-et-verifications/), **Demander à l’agent** dans la [charte](/fr/docs/apparence/), **Raccourcir** dans la [traduction](/fr/docs/traduire/), et **Confier à l’agent** pour les [commentaires des relecteurs](/fr/docs/relectures-en-ligne/).

## Le chat dans Elabora

### À la première demande

Elabora télécharge OpenCode une seule fois par ordinateur, un peu plus de 100 Mo, et affiche « Elabora prépare OpenCode… » avec sa progression. Hors ligne, le téléchargement reprend de lui-même à la reconnexion. OpenCode est ensuite dans **Réglages** › **Éléments téléchargés**, sous **IA dans Elabora**, et se met à jour avec Elabora.

L’OpenCode d’Elabora a ses propres dossiers : si vous utilisez déjà OpenCode, Elabora ne voit ni ne change ses réglages, ses clés ou ses sessions.

### La conversation

- Chaque demande et sa réponse s’écrivent dans le panneau. Pendant que l’agent travaille, une ligne dit ce qu’il fait ; ensuite, elle se replie en une phrase qu’un clic déplie.
- Le travail de l’agent devient une carte, avec **Revoir** et **Annuler**, comme pour les autres IA.
- Le bouton carré, ou Échap, arrête l’agent. Ce qu’il a déjà changé reste dans le module, et s’annule comme le reste.
- Les conversations sont gardées dans le module. En haut du panneau, **Conversations précédentes** les rouvre et **Nouvelle conversation** repart de zéro.
- Si quelque chose bloque, Elabora le dit en une phrase, avec un seul bouton : **Réessayer**, **Reprendre**, **Nouvelle conversation** ou **Télécharger**.

### Ce que l’agent demande d’abord

L’agent du chat écrit seulement par les outils d’Elabora : il ne modifie lui-même aucun fichier et ne lance aucune commande. Il lit librement les fichiers du module. Une carte vous demande votre accord avant de :

- lire un fichier hors du module (**Lire ce fichier** ou **Refuser**) ;
- lire une page web (**Autoriser les recherches**, pour tous les sites, **Autoriser ce site uniquement**, ou **Refuser**). Les sites autorisés sont dans **Réglages** › **Outils pour les IA**, où vous les retirez ;
- enregistrer une voix ou créer un son avec ElevenLabs, dès 1 % de votre quota du mois.

Si vous refusez une lecture de page, l’agent continue sans elle. Pour le reste, il s’arrête, et rien n’est dépensé.

### Les modèles gratuits

Elabora choisit le modèle pour vous, parmi les modèles gratuits qui ne gardent pas vos textes et ne s’en servent pas pour s’entraîner : aujourd’hui DeepSeek V4.1 Flash, puis GLM-5.3 Flash. Leurs résultats sont sur la page [Modèles testés](/fr/docs/modeles-testes/).

Ces modèles ont une limite d’usage, fixée par OpenCode. Le chat de tous vos modules et les boutons ✨ la partagent. Quand elle est atteinte, ou que le modèle est très demandé, Elabora dit « Le modèle gratuit est très demandé. Réessayez dans une minute. ». Après un long usage, il faut parfois attendre plus longtemps. Pour travailler beaucoup, prenez un abonnement Claude ou ChatGPT.

### Les boutons ✨

À côté d’un champ vide qu’une IA sait remplir, le texte alternatif d’une image ou une traduction manquante, un ✨ demande à OpenCode de l’écrire (**Décrire l’image avec OpenCode**, **Traduire avec OpenCode**), quelle que soit votre IA préférée. Vous continuez à travailler pendant ce temps. La première fois, si vous n’avez pas choisi OpenCode, Elabora vous demande votre accord. Le texte s’écrit dans le champ comme un travail de l’IA : ⌘Z l’annule.

## Suivre ce que fait l’agent

- Ce que l’agent écrit est tracé en violet sur le canevas, et la liste des écrans marque ceux qu’il a modifiés.
- Un bandeau dit quand l’agent modifie un écran ; **Suivre** emmène le canevas là où il travaille, **Arrêter** vous rend la main.
- Dans le panneau **Agent**, chaque lot de travail de l’agent devient une carte : ce qu’il a changé, et où. Un clic sur une ligne ouvre l’écran ; **Revoir** passe d’un écran modifié au suivant. Un point violet sur **Agent** signale du nouveau.

<!-- capture: le panneau Agent avec une carte « 3 écrans modifiés », ses lignes et les boutons Revoir et Annuler -->

## Annuler ce que l’agent a fait

- ⌘Z annule le dernier lot de l’agent en entier, comme un seul pas. Le bouton **Annuler** de sa carte fait de même, tant que c’est le dernier pas.
- Si vous avez retouché quelque chose entre-temps, Elabora annule le travail de l’agent et garde vos retouches (« Annulé, sauf ce que vous avez modifié depuis. »).
- Pour un travail plus ancien, ouvrez l’**Historique du module** (la coche à côté du titre) : choisissez le lot, puis **Annuler ce changement** ou **Revenir à ce point**. Voir [l’historique](/fr/docs/bibliotheque/).

## Ce que fait l’agent, et ce qui reste à vous

L’agent peut écrire et réécrire le plan (même après une validation : ses changements apparaissent alors comme des modifications depuis la version validée), les écrans, les blocs, les événements, les styles de la charte, les traductions et la narration. Il lit les documents joints au module, il vérifie et regarde les écrans qu’il fait. Si vous l’y autorisez, il peut aussi lire les commentaires de vos relecteurs.

Certaines décisions restent les vôtres, et Elabora ne les laisse pas à l’agent :

- créer une version du plan et noter la validation du client ;
- changer un texte que le client a validé « à l’identique » ;
- enregistrer l’approbation d’un plan traduit ;
- publier, partager un lien de relecture, répondre aux relecteurs ou résoudre leurs commentaires.

Et pour l’argent : dès qu’une génération de voix ElevenLabs coûte 1 % de votre quota du mois ou plus, l’agent doit d’abord vous demander votre accord.

## Ouvrir votre agent vous-même

Claude Code, Codex et l’extension Claude restent possibles à tout moment, avec ou sans le chat. Vous pouvez aussi ouvrir votre agent sans passer par Elabora : Claude Code et Codex n’ont rien à installer pour cela ([Claude Code](/fr/docs/claude-code/), [Codex](/fr/docs/codex/)) ; la conversation de Claude marche avec Elabora par une extension ([Claude](/fr/docs/claude/)). Deux choses à savoir :

- Travaillez dans la bibliothèque. Elabora travaille sur sa propre copie de chaque module. Le chemin du dossier est écrit en bas des **Réglages du module**.
- Donnez à l’agent le chemin de la commande `elabora` :
  - Mac : `/Applications/Elabora.app/Contents/Resources/bin/elabora` (Elabora doit être dans le dossier Applications, et avoir été ouvert au moins une fois) ;
  - Windows : `%LOCALAPPDATA%\Programs\elabora\resources\bin\elabora.cmd`.

Chaque module contient un fichier `AGENTS.md` qui explique à l’agent comment travailler avec Elabora. Pour les détails techniques (commande, serveur MCP), voyez la page [Agents](/en/docs/developers/agents/) de la section développeurs, en anglais.
