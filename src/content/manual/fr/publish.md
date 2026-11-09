---
title: Publier
description: Construire le paquet pour le LMS du client, dans le format qu’il attend, choisir ses langues, régler ce que reçoit le LMS, ou publier le module sur le web.
slug: publier
group: deliver
order: 3
---

Tout part de la vue **Publier**, onglet **Publication**. La page **Publier le module** liste les **Destinations** : **Relecture** (voir [les relectures en ligne](/fr/docs/relectures-en-ligne/)), **Sur le web** et le paquet pour le LMS, nommé d’après son format (**Paquet SCORM 1.2**, **Paquet SCORM 2004**…). Cochez ce que vous voulez envoyer : le grand bouton bleu prend le nom de ce qui part (**Publier le paquet**, **Publier sur le web**, **Publier** pour plusieurs destinations à la fois).

<!-- capture: la page Publier avec ses trois destinations, la qualité des médias et le bouton Publier le paquet -->

## Un paquet pour le LMS du client

1. Choisissez le LMS. À côté du paquet, **Choisir le LMS** ouvre les **Réglages du module**, section **Diffusion**, **LMS du client**. Elabora connaît SuccessFactors, Workday, Cornerstone, Docebo, Moodle, Totara, 360Learning, Rise Up, SCORM Cloud et Teach Up : il choisit alors le format que ce LMS lit le mieux, et vérifie la taille qu’il accepte. Sans LMS choisi, il livre en SCORM 1.2, que tous les LMS lisent, et signale les LMS qui refuseraient le paquet.
2. Choisissez la qualité des médias : **Standard**, le choix normal, déjà optimisé pour le web ; **Allégée**, pour un LMS qui limite la taille des paquets ; **Très allégée**, pour une connexion lente. À droite, le poids du module à cette qualité (voir plus bas).
3. Regardez ce qu’il reste à corriger. Sous **Avant de publier**, les points **À corriger : la publication s’arrête** et **À regarder**, avec **Ouvrir les vérifications** pour le reste. Voir [les vérifications](/fr/docs/apercu-et-verifications/).
4. Publiez : **Publier le paquet** construit le ZIP. Elabora dit « Le paquet est prêt », avec son poids, et propose **Afficher dans le Finder** (sur Windows, **Afficher dans le dossier**). Le paquet est dans le dossier `dist` du module. Déposez-le dans le LMS du client.

**Le format.** Sous le LMS, **Format** dit ce qu’Elabora choisit, et pourquoi : « Automatique : SCORM 2004 pour Docebo », ou « Automatique : SCORM 1.2, lu par tous les LMS ». Choisissez-en un autre quand votre client le demande :

- **SCORM 1.2** : le plus répandu, tous les LMS le lisent ;
- **SCORM 2004** : suit l’achèvement et la réussite à part, et garde plus de progression ;
- **cmi5** : le plus récent, pour les LMS qui l’importent ;
- **xAPI** : demande un LRS pour garder le suivi des apprenants.

Un format que refuse le LMS du client le dit dans la liste : « SCORM 2004 (refusé par Moodle) ». Dans **Publier**, le paquet prend le nom de son format.

Si le paquet est trop lourd pour le LMS, Elabora le dit en une phrase, avec les chiffres (« Le paquet pèse 130,2 Mo : trop pour Teach Up (100 Mo au plus) »), puis propose la suite : choisir le LMS s’il ne l’est pas, publier dans la qualité qui tient (avec le poids estimé), voir les **Fichiers les plus lourds** (chacun ouvre l’écran où il est montré) et, si aucune qualité ne suffit, raccourcir la vidéo ou l’héberger ailleurs.

Chaque paquet publié laisse une version nommée dans l’[historique du module](/fr/docs/bibliotheque/) ; la colonne de gauche de **Publier** les liste aussi.

## Plusieurs langues

Quand le module a une traduction, **Publier** affiche **Langues** : la langue du module, toujours incluse, puis chaque traduction. Le paquet contient les langues que vous cochez ; au départ, la langue du module seule. ⌘Z annule chaque case cochée. Le choix est gardé avec le module, pour que votre IA construise le même paquet.

Une traduction cochée part telle quelle. Quand il lui manque quelque chose, une ligne le dit, avec le moyen d’y remédier :

- « La traduction française est publiée telle quelle : son plan traduit attend votre approbation. » **Approuver** ouvre **Traduction**, **Versions**, sur cette langue.
- « 3 textes restent en anglais. », ou « Des textes ont changé depuis la traduction française : ils restent en anglais. » **Traduire** ouvre son tableau.

Avec deux langues ou plus, choisissez comment elles partent :

- **Un paquet** : l’apprenant passe d’une langue à l’autre sur place, avec **Langue** dans le lecteur. La **Langue de départ** est celle où il commence quand son LMS n’en donne pas. Quand le lecteur n’a pas **Langue**, une ligne propose de l’**Ajouter**.
- **Un paquet par langue** : pour les LMS qui gèrent eux-mêmes les versions de langue, comme Docebo ou SuccessFactors. Elabora annonce alors « 2 paquets sont prêts, un par langue. »

**Sur le web** publie les mêmes langues ; la relecture en ligne reste dans une seule langue. Dans l’onglet **Lecteur**, la ligne **Langue** nomme les langues du paquet, et propose **Choisir les langues** quand une traduction n’y est pas.

## Le poids des médias

À droite du choix de qualité, Elabora donne le poids du module à cette qualité, avant toute publication. Cliquez dessus pour ouvrir la liste de ses médias : les plus lourds d’abord, chacun avec son écran, sa durée ou sa taille, et son poids ; les autres sous un pli, puis le lecteur, les polices et les textes. Cliquez sur un média pour ouvrir son écran ; le clic droit l’affiche aussi dans le Finder.

Elabora allège seul tout ce qu’il peut, à toutes les qualités, Standard comprise. Une photo enregistrée en PNG, une vidéo exportée à un débit trop élevé pour sa taille ou un média hors des formats du web (une photo HEIC, une vidéo ProRes) partent dans le paquet en copie optimisée, faite une fois ; vos fichiers ne changent pas. Une capture d’écran ou un schéma en PNG part tel quel : il est déjà léger, et une compression de photo brouillerait son texte.

Le poids passe à l’orange quand un média semble plus lourd que nécessaire pour ce qu’il est et qu’Elabora ne peut pas l’alléger seul, par exemple une image animée, qui pèserait plusieurs fois moins en vidéo. Elle vient en tête de la liste, avec la raison. Une fois la liste ouverte, le poids redevient gris ; il ne repasse à l’orange que pour un nouveau cas. Une longue vidéo n’est jamais signalée : vingt minutes de vidéo pèsent naturellement des centaines de mégaoctets.

## Ce que reçoit le LMS

Ces réglages sont dans **Réglages du module**, onglet **Module** :

- **Réussite** : **Ce que reçoit le LMS** (**Terminé ou non terminé**, **Réussi ou non terminé**, **Réussi ou échoué**, **Terminé ou échoué**) et, sauf pour le premier, le **Seuil de réussite**, en pourcentage.
- **Suivi** : **Une fois terminé**, **Garder sa progression** ou **Fermer la tentative** (à la prochaine ouverture, le module repart du début) ; **Réponses** : **Envoyer les réponses au LMS**, liées aux objectifs.
- En haut de l’onglet : le **Titre du module** et la **Description du module** pour le catalogue du LMS, la **Durée en minutes**, et la **Version** (trois nombres, comme 1.0.0) : augmentez-la à chaque livraison pour signaler la mise à jour au LMS.

Les détails techniques sont dans [Delivery formats](/en/docs/developers/delivery/) et [LMS profiles](/en/docs/developers/lms-profiles/), en anglais.

## Publier sur le web

Pour montrer un module sans LMS (un module de démonstration, une formation ouverte), publiez-le dans votre espace Elabora. Il faut être connecté (voir [les relectures en ligne](/fr/docs/relectures-en-ligne/)).

1. Cochez **Sur le web**. L’adresse s’affiche : `votre-espace.elabora.page/nom-du-module`, publique mais hors des moteurs de recherche.
2. **Réglages**, à côté, propose :
   - **Adresse** : le nom du module dans l’adresse, fixé à la première publication ;
   - **Progression** : **Gardée dans le navigateur** (l’apprenant reprend où il s’était arrêté, sur ce navigateur) ou **Aucune** (le module repart du début à chaque visite) ;
   - **Navigation** : **Comme dans le module**, ou **Libre** ;
   - **Image de partage** (la vignette du premier écran) et **Moteurs de recherche** (**Hors des moteurs de recherche** pour l’instant).
3. **Publier sur le web**. Elabora construit, envoie puis met en ligne (seuls les fichiers modifiés sont envoyés) ; vous pouvez continuer à travailler pendant ce temps. Chaque nouvelle publication remplace la précédente, à la même adresse.

Les points rouges des vérifications arrêtent la publication sur le web, comme le paquet. Votre compte permet un nombre limité de modules sur le web ; **Réglages** › **Compte** dit où vous en êtes et propose **Retirer du web…** : les apprenants qui l’avaient commencé ne pourront plus le reprendre, et vous pourrez le republier plus tard à la même adresse. Le détail technique : [Web delivery](/en/docs/developers/delivery-web/).
