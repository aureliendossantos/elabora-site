---
title: "Elabora marche-t-il avec Claude Code ?"
description: "Oui, sans rien installer. Elabora ouvre Claude Code dans le dossier de votre module, et Claude Code modifie le module avec la commande d’Elabora."
slug: claude-code
group: start
order: 5
---

Oui. Elabora est fait pour marcher avec Claude Code, et il n’y a rien à installer pour cela : ni plugin, ni réglage.

## Comment ça marche

- **Depuis Elabora.** Dans un module, **Agent** › choisissez **Claude** › écrivez votre demande. Elabora ouvre Claude Code dans l’app Claude, dans le dossier du module, avec votre demande déjà écrite. Voyez [Travailler avec votre IA](/fr/docs/travailler-avec-votre-ia/).
- **Seul.** Vous pouvez aussi ouvrir Claude Code vous-même dans le dossier d’un module (son chemin est en bas des **Réglages du module**), dans l’app Claude ou dans un terminal.
- **Ce que lit Claude Code.** Chaque module contient un fichier `AGENTS.md`, que Claude Code lit par le `CLAUDE.md` du module : les règles d’Elabora pour les agents, et comment charger ses guides pour chaque tâche (écrire le plan, les écrans, le design, les quiz, les dialogues, la narration, la traduction).
- **Ce que lance Claude Code.** La commande `elabora`, qui vient avec l’app : elle lit et écrit le plan, les écrans et leurs blocs, vérifie le module, regarde un écran comme l’apprenant le voit et construit le paquet SCORM. Elabora montre à mesure ce que Claude Code change, et l’annule en une fois.

## Ce qu’il vous faut

- [Elabora](/fr/docs/installer/), installé et ouvert une fois.
- L’app [Claude](https://claude.com/download), avec une offre qui comprend Claude Code, ou [Claude Code](https://code.claude.com/docs/fr/overview) dans un terminal.
- Pour taper `elabora` vous-même dans un terminal (facultatif : les demandes d’Elabora donnent à Claude Code le chemin de la commande) : sur Mac, **Vous** › **Réglages…** › **Outils pour les IA**, la ligne **Commande**.

## Trois demandes à essayer

> Écris le plan du module à partir du brief du client et des notes dans les sources.

> Sur l’écran affiché, ajoute une question d’entraînement sur les trois causes de panne, avec un retour pour chaque réponse.

> Vérifie le module sur un téléphone, et corrige ce qui ne tient pas.

## Essayer sur un module d’exemple

[Téléchargez le module d’exemple](/downloads/coffee-in-brief.elabora) « From cherry to cup: coffee in brief », en anglais : un module de 15 minutes pour les nouveaux baristas d’une chaîne de cafés fictive, qui se sert de tous les blocs de départ d’Elabora. Double-cliquez sur le fichier : Elabora l’ajoute à votre bibliothèque. Ouvrez-le, puis envoyez une demande à Claude depuis le panneau **Agent**.

La conversation de Claude, sans Claude Code, marche avec Elabora par une extension : voyez [Elabora dans Claude](/fr/docs/claude/).
