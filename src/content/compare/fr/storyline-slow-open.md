---
title: "Storyline lent à ouvrir ou à enregistrer un projet : ce qui aide"
seo: "Storyline 360 lent à ouvrir, qui gèle ou enregistre lentement : ce qui aide (2026)"
description: "Storyline 360 met des minutes à ouvrir un projet, gèle ou enregistre lentement ? Passez sur un disque local, mettez à jour, réparez l’installation, allégez les médias."
slug: storyline-lent-a-ouvrir
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Copiez le projet sur un disque local, hors de OneDrive, Dropbox et des lecteurs réseau, et mettez Storyline à jour : Articulate a annoncé un chargement et un enregistrement plus rapides avec l’Update 114 (mars 2026). Si le projet reste lent, réparez l’installation, importez ses diapositives dans un nouveau projet, et allégez ses médias les plus lourds."
published: 2026-11-06
updated: 2026-11-09
order: 22
faq:
  - q: "Pourquoi mon projet Storyline s’ouvre-t-il si lentement ?"
    a: "Les causes les plus citées sont un projet sur un lecteur réseau ou dans un dossier synchronisé (OneDrive, Dropbox), des médias très lourds, et un projet ou une installation abîmés. Le personnel d’Articulate ne reproduit pas toujours le problème, et demande le fichier .story quand les étapes habituelles n’aident pas."
  - q: "Articulate a-t-il rendu Storyline plus rapide à ouvrir ?"
    a: "L’Update 114 (build 3.114.36609.0, 31 mars 2026) a annoncé un chargement, un enregistrement et une publication plus rapides grâce à une mise à jour de la plateforme .NET, sans chiffres. Des auteurs signalaient encore des ouvertures lentes en juillet 2026."
---

## Le problème

Un projet qui s’ouvrait en une minute environ met désormais 5 à 10 minutes ([My Storyline is taking forever to open](https://community.articulate.com/discussions/discuss/my-storyline-is-taking-forever-to-open-is-there-a-fix/1256124), avril 2026). Un projet de 92 Mo met environ 43 secondes à s’enregistrer ([Storyline very slow to save](https://community.articulate.com/discussions/discuss/storyline-very-slow-to-save/1249222), février 2026). Après une mise à jour de Windows, Storyline peut rester environ 5 minutes sur « Reading Preferences » ([Is Articulate extremely slow after the latest Windows update?](https://community.articulate.com/discussions/discuss/is-articulate-extremely-slow-after-the-latest-windows-update/1250709), février et mars 2026).

Les causes varient, et le personnel d’Articulate ne les reproduit pas toujours : suivez les étapes ci-dessous dans l’ordre.

## Ce qui aide dans Storyline

1. **Travaillez sur un disque local.** Le personnel d’Articulate le conseille de fil en fil : ouvrez les projets depuis le disque de votre ordinateur, hors des lecteurs réseau et des dossiers synchronisés ([réponse de 2023](https://community.articulate.com/discussions/discuss/storyline-file-loading-too-long-and-cannot-open/872775)). Copiez le projet sur votre ordinateur, travaillez dessus, puis recopiez-le.
2. **Mettez Storyline à jour.** L’Update 114 (build 3.114.36609.0, 31 mars 2026) a apporté un chargement, un enregistrement et une publication plus rapides avec une mise à jour de la plateforme .NET, selon Articulate.
3. **Réparez l’installation.** Réparez Storyline depuis l’app de bureau d’Articulate 360, puis rouvrez le projet.
4. **Importez les diapositives dans un nouveau projet.** Quand un projet se comporte mal, le personnel d’Articulate conseille d’importer ses diapositives dans un projet neuf et vide.
5. **Allégez les médias.** Retirez les médias inutilisés et remplacez les images très lourdes. Dans un fil, un fond fait de nombreuses images superposées faisait suivre le curseur aux objets avec 3 à 5 secondes de retard ([Experiencing Lag time issues](https://community.articulate.com/discussions/discuss/experiencing-lag-time-issues-with-storyline-360/850757)).
6. **Demandez au support d’Articulate.** Quand rien de cela n’aide, le personnel demande le fichier .story ou ouvre un dossier de support.

## Ou gardez vos modules dans Elabora

Elabora a été conçu pour qu’ouvrir et enregistrer un module reste léger :

- **Un module est un dossier de fichiers simples** : `course.json`, un fichier par écran, et ses médias. Elabora enregistre au fur et à mesure, fichier par fichier : il n’y a ni bouton d’enregistrement ni fichier de projet unique à réécrire ([Visite de l’app](/fr/docs/visite/)).
- **La bibliothèque reste hors des services de synchronisation.** Elabora range vos modules dans un dossier que OneDrive, Dropbox et iCloud laissent tranquille ([Bibliothèque, archives et historique](/fr/docs/bibliotheque/)).
- **Elabora signale ce que laisse un service de synchronisation.** Quand le dossier d’un module est dans OneDrive, Dropbox, iCloud ou Google Drive, Elabora signale les copies de conflit à côté d’un fichier, et les fichiers restés dans le nuage qu’il faut télécharger ([les contrôles](/en/docs/developers/diagnostics/)).
