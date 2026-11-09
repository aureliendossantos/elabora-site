---
title: "Projet Storyline corrompu ou qui refuse de s’ouvrir : comment le récupérer"
seo: "Projet Storyline 360 « invalid or corrupt » qui refuse de s’ouvrir : comment le récupérer (2026)"
description: "Storyline 360 dit votre projet non valide ou corrompu ? Récupérez-le par AutoRecovery, les fichiers temporaires, la Cloud Backup ou une copie, et sauvez ses médias."
slug: storyline-projet-corrompu
kind: fix
tools: [storyline]
checked: 2026-11-08
summary: "Travaillez sur une copie du fichier. Rouvrez le projet pour qu’AutoRecovery propose ses versions. Sinon, ouvrez le fichier temporaire le plus récent de Storyline, téléchargez la Cloud Backup depuis Review 360, ou revenez à une copie antérieure. Les médias du fichier .story se récupèrent même quand les diapositives sont perdues."
published: 2026-11-09
updated: 2026-11-09
order: 25
faq:
  - q: "Où sont les fichiers temporaires de Storyline ?"
    a: "Sur Windows, dans %appdata%\\Articulate\\Storyline (collez ce chemin dans la barre d’adresse de l’Explorateur). Copiez sur le bureau le fichier le plus récent dont le nom commence par celui du projet, changez son extension .tmp en .story, puis ouvrez-le. Storyline laisse ces fichiers après un plantage."
  - q: "Peut-on récupérer les médias d’un fichier .story corrompu ?"
    a: "Souvent, oui. Un fichier .story est une archive ZIP : renommez une copie en .zip et ouvrez-la pour trouver les images, l’audio et la vidéo du projet, sous de nouveaux noms. Les diapositives sont à reconstruire."
  - q: "Comment protéger un projet Storyline ?"
    a: "Travaillez sur un disque local, hors de OneDrive, Dropbox et des lecteurs réseau ; enregistrez une copie numérotée avec Save As à chaque étape ; et cochez « Upload project file to Review 360 » quand vous publiez, pour que chaque version garde une sauvegarde du projet entier."
---

## Le problème

Storyline 360 commence à ouvrir votre projet, puis s’arrête sur « This project is invalid or corrupt and cannot be opened » : le projet serait non valide ou corrompu. Cela suit en général un plantage, un redémarrage pendant un enregistrement ([mars 2026](https://community.articulate.com/discussions/discuss/storyline-file-will-not-open/1255686)) ou une mise à jour ([avril 2026](https://community.articulate.com/discussions/discuss/storyline-is-overwriting-and-corrupting-projects-when-closing-after-recent-updat/1258558)).

Articulate a corrigé deux causes en 2026, toutes deux dans des projets avec des zones de zoom (builds 3.108.36078.0 et 3.122.37526.0, [historique des versions](https://www.articulatesupport.com/article/Articulate-Storyline-360-Version-History)). Mettez d’abord Storyline à jour, puis suivez les étapes ci-dessous dans l’ordre, toujours sur une copie du fichier. Les noms des boutons sont ceux de l’interface anglaise.

## Ce qui aide dans Storyline

1. **Laissez AutoRecovery proposer ses versions.** Après un plantage, rouvrez le projet : Storyline liste les versions temporaires qu’il a gardées. Choisissez la plus récente dans la liste déroulante, puis **Open** ou **Save as** ([Recover a Corrupt Project](https://www.articulatesupport.com/article/Storyline-360-Recover-a-Corrupt-Project), mis à jour le 16 janvier 2026).
2. **Ouvrez vous-même le fichier temporaire.** Sur Windows, affichez les extensions de fichiers dans l’Explorateur, puis ouvrez `%appdata%\Articulate\Storyline`. Copiez sur le bureau le fichier le plus récent dont le nom commence par celui du projet, changez son extension `.tmp` en `.story`, et ouvrez-le ([IconLogic, Rescue Corrupt Projects](https://blog.iconlogic.com/2024/08/articulate-storyline-360-rescue-corrupt-projeccts.html), août 2024).
3. **Téléchargez la Cloud Backup.** Si vous avez publié dans Review 360 avec **Upload project file to Review 360** coché, Review 360 a gardé le projet entier avec cette version. Dans la liste **Version**, les versions marquées d’une icône de nuage contiennent une sauvegarde : téléchargez-la et ouvrez le fichier téléchargé ([Cloud Backup](https://www.articulatesupport.com/article/Storyline-360-Cloud-Backup), mis à jour le 23 octobre 2026). Évitez **Restore**, qui supprime définitivement les versions plus récentes.
4. **Revenez à une copie antérieure du fichier.** OneDrive, SharePoint et Dropbox gardent les versions antérieures d’un fichier (**Historique des versions**), tout comme l’Historique des fichiers de Windows. Vos copies numérotées comptent aussi.
5. **Sortez les médias du fichier .story.** Un fichier `.story` est une archive ZIP. Renommez une copie en `.zip` et ouvrez-la : les images, l’audio et la vidéo sont dedans, sous de nouveaux noms ([astuce du forum](https://community.articulate.com/discussions/discuss/this-project-is-invalid-or-corrupt-/818358/replies/818493), septembre 2023). Il faudra reconstruire les diapositives.
6. **Envoyez le fichier au support d’Articulate.** Si aucune de ces étapes ne marche, le personnel d’Articulate demande le fichier `.story` et ouvre un dossier de support. Continuez à travailler sur une copie en attendant.

Après une récupération, vérifiez l’audio et les sous-titres de chaque diapositive : un auteur a constaté que la récupération de médias corrompus avait retiré l’audio et les sous-titres générés par l’IA ([septembre 2026](https://community.articulate.com/discussions/discuss/storyline-file-assets-corrupted/1270675)).

Pour protéger le prochain projet : travaillez sur un disque local, hors de OneDrive, Dropbox et des lecteurs réseau, comme le conseille le personnel d’Articulate ([réponse de 2023](https://community.articulate.com/discussions/discuss/storyline-file-loading-too-long-and-cannot-open/872775)) ; enregistrez une copie numérotée avec **Save As** à chaque étape ; et publiez dans Review 360 avec le fichier du projet.

## Ou gardez vos modules dans Elabora

Elabora a été conçu pour qu’un plantage ou un enregistrement raté vous coûte peu :

- **Un module est un dossier de fichiers simples**, un par écran, avec ses médias. Il est rangé dans la bibliothèque d’Elabora, un dossier qu’aucun service de synchronisation ne touche ([Bibliothèque, archives et historique](/fr/docs/bibliotheque/)).
- **Elabora enregistre au fur et à mesure et garde des sauvegardes** : toutes pendant 24 heures, puis une par heure jusqu’à 7 jours, une par jour jusqu’à 30 jours, puis une par semaine. Chaque paquet publié laisse une version nommée.
- **L’Historique du module vous ramène en arrière.** **Annuler ce changement** annule un changement, et **Revenir à ce point** remet tout le module dans l’état d’alors. Revenir en arrière est lui-même un changement, que vous pouvez annuler.
- **Pour envoyer un module à quelqu’un**, Elabora écrit une seule archive `.elabora`.

Vous venez de Storyline ? L’import, en bêta, reprend un projet Storyline (`.story`) ou une publication Storyline, en dossier ou en ZIP, et son rapport liste ce qu’il n’a pas pu reprendre ([Reprendre un module Storyline ou Rise](/fr/docs/importer-storyline-rise/)).
