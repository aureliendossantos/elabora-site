---
title: "Paquet SCORM trop lourd pour le LMS : comment l’alléger"
seo: "Paquet SCORM trop lourd pour la limite du LMS : comment l’alléger dans Storyline et Rise (2026)"
description: "Package SCORM au-dessus de la limite de votre LMS ? Trouvez les fichiers les plus lourds, compressez les médias, baissez la qualité de publication, hébergez les vidéos."
slug: package-scorm-trop-lourd
kind: fix
tools: [storyline, rise]
checked: 2026-11-08
summary: "Ouvrez le paquet comme un ZIP pour trouver ses fichiers les plus lourds, en général la vidéo, puis l’audio et les images. Compressez-les avant l’import, baissez la qualité de publication de Storyline, ou hébergez les longues vidéos sur une plateforme vidéo. Si le paquet reste trop lourd, découpez le module ou demandez à l’administrateur du LMS de relever la limite."
published: 2026-11-09
updated: 2026-11-09
order: 26
faq:
  - q: "Quelle est la taille maximale d’un paquet SCORM dans un LMS ?"
    a: "Elle dépend du LMS et de ses réglages. Dans la documentation lue en septembre et octobre 2026 : Teach Up 100 Mo, Docebo et Rise Up 1 Go, Cornerstone 2 Go, Workday 2 Go par défaut, 360Learning 4 Go une fois décompressé. SuccessFactors applique un maximum que fixe son administrateur."
  - q: "Pourquoi mon paquet Storyline est-il plus lourd que le projet ?"
    a: "Le paquet contient chaque média à la qualité de publication, plus le lecteur. Dans un fil de septembre 2026, un projet de 206 Mo a donné un paquet de 246 Mo, et une image de 104 Ko pesait environ 3 Mo une fois publiée. Les réglages Quality de la fenêtre Publish et des médias compressés avant l’import aident le plus."
  - q: "Pourquoi mon paquet Rise contient-il encore des médias que j’ai retirés ?"
    a: "Un auteur a signalé en octobre 2026 qu’un paquet SCORM Rise gardait des médias d’anciennes versions après plusieurs révisions. Le contournement donné : dupliquer le module et publier la copie."
---

## Le problème

Le LMS refuse le dépôt, ou les apprenants attendent que le module se charge. Les limites varient beaucoup : 100 Mo chez Teach Up, 1 Go chez Docebo et Rise Up, 2 Go chez Cornerstone et chez Workday par défaut, 4 Go une fois décompressé chez 360Learning ([nos profils de LMS, avec leurs sources](/en/docs/developers/lms-profiles/), en anglais). Demandez la sienne au client avant de commencer.

La vidéo fait en général l’essentiel du poids, puis l’audio et les grandes images. Deux étapes peuvent en ajouter plus que prévu :

- **La publication.** Storyline réencode les médias à sa qualité de publication. Le projet de 206 Mo d’un auteur a donné un paquet de 246 Mo, au-dessus de la limite de 230 Mo de son LMS, et une image de 104 Ko pesait environ 3 Mo une fois publiée ([septembre 2026](https://community.articulate.com/discussions/discuss/storyline-scorm-export-suddenly-much-larger-than-the-storyline-project/1270787)).
- **La traduction.** Un module Rise a atteint 741 Mo après traduction, et le LMS l’a refusé ([août 2026](https://community.articulate.com/discussions/discuss/scorm-file-upload---lms/1270122)).

## Ce qui aide, du plus rapide au plus complet

1. **Trouvez ce qui pèse.** Un paquet SCORM est un ZIP : ouvrez-le et triez ses fichiers par taille. La vidéo vient en général en tête, puis l’audio et les grandes images.
2. **Compressez les médias avant l’import.** Réencodez chaque vidéo à la taille où elle s’affiche dans la diapositive, enregistrez les photos en JPEG à la taille où elles apparaissent, et transformez les GIF animés en courtes vidéos. Les fichiers exportés de Canva ou d’Adobe, l’audio généré par IA et les fonds sont souvent en cause aussi ([Keeping SCORM package small](https://community.articulate.com/discussions/discuss/keeping-scorm-package-small-best-practices/1246142), décembre 2025).
3. **Baissez la qualité de publication de Storyline.** Dans la fenêtre Publish, cliquez sur **Quality**, puis baissez le curseur **Static** de la vidéo et le curseur **JPG Quality** : des valeurs plus basses donnent des fichiers plus légers ([Best Practices for High Quality Images and Videos](https://www.articulatesupport.com/article/Storyline-360-Best-Practices-for-High-Quality-Images-and-Videos), mis à jour le 16 janvier 2026). Vérifiez les vidéos dont la **Compression** est réglée sur **None** dans l’onglet Options : elles entrent telles quelles dans le paquet.
4. **Videz les anciens médias dans Rise.** Un paquet Rise peut garder des médias d’anciennes versions du module. Dupliquez le module et publiez la copie ([SCORM file contains media from snapshots](https://community.articulate.com/discussions/discuss/rise-courseware---lms-publishing---scorm-file-contains-media-from-snapshots/1274136), octobre 2026).
5. **Hébergez les longues vidéos sur une plateforme vidéo.** Placez-les sur Vimeo, YouTube ou la plateforme de votre entreprise, puis intégrez-les : le paquet garde un lien à la place de chaque fichier. Vérifiez que la plateforme s’ouvre sur le réseau de vos apprenants.
6. **Découpez le module.** Publiez deux ou trois modules, chacun sous la limite, et regroupez-les dans le LMS en un seul parcours.
7. **Demandez à l’administrateur du LMS.** Certaines limites sont des réglages : Workday relève sa limite de 2 Go par défaut avec **Increase Maximum Upload Size**, et SuccessFactors applique un maximum que fixe son administrateur ([profils de LMS](/en/docs/developers/lms-profiles/)).

## Ou laissez Elabora garder le paquet léger

Elabora a été conçu pour garder les paquets légers, et pour vous prévenir avant qu’un LMS en refuse un :

- **Le poids avant la publication.** Dans **Publier**, Elabora affiche le poids du module à la qualité de médias choisie : **Standard**, **Allégée** ou **Très allégée**. Un clic liste ses médias, les plus lourds d’abord, chacun avec son écran et son poids ([Publier](/fr/docs/publier/#le-poids-des-médias)).
- **La limite du LMS du client.** Une fois le LMS du client choisi, Elabora vérifie le paquet par rapport à la taille que ce LMS accepte. Quand le paquet est trop lourd, Elabora le dit avec les chiffres, par exemple « Le paquet pèse 130,2 Mo : trop pour Teach Up (100 Mo au plus) », puis donne la qualité qui tient, son poids estimé et les fichiers les plus lourds. Quand même la qualité la plus légère pèse trop, il propose de raccourcir la vidéo ou de l’héberger ailleurs. Sans LMS choisi, il nomme les LMS qui refuseraient le paquet.
- **Des copies légères, faites pour vous.** Pour une photo enregistrée en PNG, une vidéo exportée à un débit trop élevé, ou un fichier HEIC ou ProRes, le paquet reçoit une copie optimisée à toutes les qualités, et vos fichiers restent tels quels. Une image animée affiche son poids en orange, car en vidéo elle pèserait plusieurs fois moins.
- **Seulement les médias que le module utilise.** Le paquet contient les médias que le module montre ; les autres fichiers du dossier du module restent en dehors.
- **N’importe quel paquet, ouvert.** Votre IA peut ouvrir dans Elabora un paquet SCORM de Storyline ou de Rise et lister ses cinq fichiers les plus lourds ([Travailler avec votre IA](/fr/docs/travailler-avec-votre-ia/)).
