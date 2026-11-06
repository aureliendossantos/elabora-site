---
title: "Storyline lent à ouvrir ou à enregistrer un projet : ce qui aide"
seo: "Storyline 360 lent à ouvrir, qui gèle ou enregistre lentement : ce qui aide (2026)"
description: "Des projets Storyline 360 qui mettent des minutes à s’ouvrir, gèlent ou s’enregistrent lentement : ce que conseille Articulate, la mise à jour de mars 2026, et Elabora."
slug: storyline-lent-a-ouvrir
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "L’ouverture lente, les gels et l’enregistrement lent reviennent régulièrement sur E-Learning Heroes, avec des causes aussi variées qu’un lecteur réseau, OneDrive ou des médias lourds. Ce qui aide : un disque local, l’Update 114 ou plus récente, une installation réparée, les diapositives importées dans un nouveau projet, des médias allégés. Elabora garde un module en dossier de fichiers simples, enregistre au fil de l’eau, et signale les copies que laisse un service de synchronisation."
published: 2026-11-06
updated: 2026-11-06
order: 22
faq:
  - q: "Pourquoi mon projet Storyline s’ouvre-t-il si lentement ?"
    a: "Les causes les plus citées sont un projet sur un lecteur réseau ou dans un dossier synchronisé (OneDrive, Dropbox), des médias très lourds, et un projet ou une installation abîmés. Le personnel d’Articulate ne reproduit pas toujours le problème, et demande le fichier .story quand les étapes habituelles n’aident pas."
  - q: "Articulate a-t-il rendu Storyline plus rapide à ouvrir ?"
    a: "L’Update 114 (build 3.114.36609.0, 31 mars 2026) a annoncé un chargement, un enregistrement et une publication plus rapides grâce à une mise à jour de la plateforme .NET, sans chiffres. Des auteurs signalaient encore des ouvertures lentes en juillet 2026."
---

## Le problème

Des auteurs le signalent sur E-Learning Heroes année après année : 14 fils de mai 2017 à septembre 2026, dont 7 en 2025 et 2026. Un projet qui s’ouvrait en une minute environ met désormais 5 à 10 minutes ([My Storyline is taking forever to open](https://community.articulate.com/discussions/discuss/my-storyline-is-taking-forever-to-open-is-there-a-fix/1256124), avril 2026). Un projet de 92 Mo mettait environ 43 secondes à s’enregistrer ([Storyline very slow to save](https://community.articulate.com/discussions/discuss/storyline-very-slow-to-save/1249222), février 2026). Après une mise à jour de Windows, Storyline restait environ 5 minutes sur « Reading Preferences » chez plusieurs auteurs ([32 réponses](https://community.articulate.com/discussions/discuss/is-articulate-extremely-slow-after-the-latest-windows-update/1250709), février et mars 2026).

Les causes varient, et le personnel d’Articulate ne les reproduit pas toujours : suivez les étapes ci-dessous dans l’ordre.

## Ce qui aide dans Storyline

1. **Travaillez sur un disque local.** Le personnel d’Articulate le conseille de fil en fil : jamais un projet ouvert depuis un lecteur réseau ou un dossier synchronisé ([réponse de 2023](https://community.articulate.com/discussions/discuss/storyline-file-loading-too-long-and-cannot-open/872775)). Copiez le projet sur votre ordinateur, travaillez dessus, puis recopiez-le. En septembre 2026, l’éditeur d’images 360° d’un auteur s’est rouvert une fois les images sorties de OneDrive.
2. **Mettez Storyline à jour.** L’Update 114 (build 3.114.36609.0, 31 mars 2026) a apporté un chargement, un enregistrement et une publication plus rapides avec une mise à jour de la plateforme .NET, selon Articulate. Storyline 360 est en 64 bits depuis la version 3.82 (fin 2023), pour les gros projets riches en médias.
3. **Réparez l’installation.** Réparez Storyline depuis l’app de bureau d’Articulate 360, puis rouvrez le projet.
4. **Importez les diapositives dans un nouveau projet.** Quand un projet se comporte mal, le personnel conseille d’importer ses diapositives dans un projet neuf et vide.
5. **Allégez les médias.** Retirez les médias inutilisés et remplacez les images très lourdes. Dans un fil, un fond fait de nombreuses images superposées faisait suivre le curseur aux objets avec 3 à 5 secondes de retard ([Experiencing Lag time issues](https://community.articulate.com/discussions/discuss/experiencing-lag-time-issues-with-storyline-360/850757)).
6. **Demandez au support d’Articulate.** Quand rien de cela n’aide, le personnel demande le fichier .story ou ouvre un dossier de support.

## Comment Elabora garde un module

Un module Elabora est un dossier de fichiers simples sur votre ordinateur : `course.json`, un fichier par écran, et ses médias. Elabora enregistre au fil de l’eau, fichier par fichier, et garde un historique du module : il n’y a ni bouton d’enregistrement ni fichier de projet unique à réécrire ([Visite de l’app](/fr/docs/visite/)).

Quand le dossier est dans OneDrive, Dropbox, iCloud ou Google Drive, Elabora signale les copies de conflit qu’un service de synchronisation laisse à côté d’un fichier, et les fichiers restés dans le nuage qu’il faut télécharger ([les contrôles](/en/docs/developers/diagnostics/)). Nous n’avons pas encore mesuré le temps qu’Elabora met à ouvrir un module.
