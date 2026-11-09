---
title: "Elabora marche-t-il avec Codex ?"
description: "Oui, sans rien installer, dans l’app ChatGPT ou dans un terminal. Elabora ouvre Codex dans le dossier de votre module, et Codex modifie le module avec la commande d’Elabora."
slug: codex
group: start
order: 6
---

Oui. Elabora est fait pour marcher avec Codex, dans l’app de bureau ChatGPT ou dans un terminal, et il n’y a rien à installer pour cela : ni plugin, ni réglage.

## Comment ça marche

- **Depuis Elabora.** Dans un module, **Agent** › choisissez **ChatGPT** › écrivez votre demande. Elabora ouvre Codex dans l’app ChatGPT, dans le dossier du module, avec votre demande déjà écrite. Voyez [Travailler avec votre IA](/fr/docs/travailler-avec-votre-ia/).
- **Seul.** Vous pouvez aussi lancer Codex vous-même dans le dossier d’un module (son chemin est en bas des **Réglages du module**) : dans l’app ChatGPT, ouvrez une conversation Codex sur ce dossier ; dans un terminal, lancez Codex dans ce dossier.
- **Ce que lit Codex.** Chaque module contient un fichier `AGENTS.md`, que Codex lit de lui-même : les règles d’Elabora pour les agents, et comment charger ses guides pour chaque tâche (écrire le plan, les écrans, le design, les quiz, les dialogues, la narration, la traduction).
- **Ce que lance Codex.** La commande `elabora`, qui vient avec l’app : elle lit et écrit le plan, les écrans et leurs blocs, vérifie le module, regarde un écran comme l’apprenant le voit et construit le paquet SCORM. Elabora montre à mesure ce que Codex change, et l’annule en une fois.

## Ce qu’il vous faut

- [Elabora](/fr/docs/installer/), installé et ouvert une fois.
- L’app de bureau [ChatGPT](https://chatgpt.com/download), avec Codex, ou [Codex](https://developers.openai.com/codex/cli) dans un terminal. Une ancienne app ChatGPT, sans Codex, ne peut pas recevoir les demandes d’Elabora.
- Pour taper `elabora` vous-même dans un terminal (facultatif : les demandes d’Elabora donnent à Codex le chemin de la commande) : sur Mac, **Vous** › **Réglages…** › **Outils pour les IA**, la ligne **Commande**.

## Trois demandes à essayer

> Écris le plan du module à partir du brief du client et des notes dans les sources.

> Sur l’écran affiché, ajoute une question d’entraînement sur les trois causes de panne, avec un retour pour chaque réponse.

> Vérifie le module sur un téléphone, et corrige ce qui ne tient pas.

## Essayer sur un module d’exemple

[Téléchargez le module d’exemple](/downloads/coffee-in-brief.elabora) « From cherry to cup: coffee in brief », en anglais : un module de 15 minutes pour les nouveaux baristas d’une chaîne de cafés fictive, qui se sert de tous les blocs de départ d’Elabora. Double-cliquez sur le fichier : Elabora l’ajoute à votre bibliothèque. Ouvrez-le, puis envoyez une demande à ChatGPT depuis le panneau **Agent**.

La conversation de ChatGPT, sans Codex, ne peut pas travailler sur vos modules : elle n’a pas accès aux fichiers de votre ordinateur.
