---
title: Bibliothèque, archives et historique
description: Où sont vos modules, comment les importer, les exporter, les supprimer, et revenir à une version antérieure.
slug: bibliotheque
group: more
order: 1
---

## Où sont vos modules

Elabora range vos modules dans sa bibliothèque, un dossier de votre ordinateur qu’aucun service de synchronisation (iCloud, OneDrive, Dropbox) ne touche :

- Mac : `~/Library/Application Support/Elabora/Library` (dans le Finder : menu Aller › Aller au dossier…, puis collez ce chemin) ;
- Windows : `%LOCALAPPDATA%\Elabora\Library` (collez-le dans la barre d’adresse de l’Explorateur).

Chaque module y est un dossier ordinaire, que votre IA modifie. Pour échanger un module, envoyez une archive `.elabora`.

## Importer un module

- Sur l’accueil, **Importer…** › **Une archive Elabora…** ou **Le dossier d’un module…** ;
- ou glissez l’archive ou le dossier sur l’accueil ;
- ou double-cliquez sur un fichier `.elabora` dans le Finder ou l’Explorateur (sur Mac, vous pouvez aussi le déposer sur l’icône d’Elabora dans le Dock).

Elabora copie le module dans sa bibliothèque, puis l’ouvre. Un dossier importé reste où il était, intact : Elabora travaille sur sa propre copie, et le dit (« Copie importée dans Elabora »). Pour que votre IA travaille sur cette copie, envoyez-lui vos demandes depuis le panneau **Agent**.

Si la bibliothèque a déjà ce module, Elabora demande : **Remplacer** (l’ancien part à la corbeille) ou **Garder les deux**.

## Exporter un module

Dans le menu **…** d’une carte de l’accueil, ou dans le menu du titre du module : **Exporter…**. La fenêtre **Exporter le module** fait un fichier `.elabora` là où vous le dites.

- **Avec l’historique** ajoute toutes les versions antérieures, les médias remplacés et ce qu’ont fait les agents. C’est pour reprendre le travail sur un autre ordinateur, pas pour un client.
- **Inclure les sources** ajoute les documents joints au module (le brief, les enregistrements…). Décoché par défaut : ces documents contiennent souvent des données personnelles, et pèsent lourd.

Une archive sans historique, c’est ce que vous envoyez à un collègue, ou à votre client comme sources de son module, dans un format ouvert.

<!-- capture: la fenêtre Exporter le module avec ses deux interrupteurs -->

## Les exemples

Sous **Exemples**, sur l’accueil, des modules livrés avec Elabora. Un clic en ouvre votre copie (faite la première fois, rouverte ensuite). **Repartir de l’exemple**, dans son menu **…**, en fait une copie neuve ; la précédente reste dans la bibliothèque.

## Supprimer, restaurer

**Supprimer**, dans le menu **…** d’une carte, demande confirmation puis place le module et son historique dans la **Corbeille** d’Elabora (colonne de gauche de l’accueil). Chaque module y dit le jour où il sera supprimé définitivement : 30 jours après, au lancement suivant d’Elabora. D’ici là, **Restaurer** le remet dans la bibliothèque, et **Supprimer définitivement** le supprime tout de suite (cela ne s’annule pas).

## L’historique et les sauvegardes

Elabora enregistre au fur et à mesure et garde des sauvegardes de vos modules, régulièrement et autour du travail de votre IA. Vous n’avez rien à faire.

La coche à côté du titre du module ouvre l’**Historique du module** :

- en haut, les **Sauvegardes** nommées, par exemple celle de chaque paquet publié ;
- puis le travail jour par jour : vos sessions et les lots de chaque agent.

Choisissez une ligne : elle dit ce qui a changé, et où. **Annuler ce changement** annule ce changement-là ; **Revenir à ce point** remet tout le module dans l’état d’alors. Revenir en arrière est lui-même un changement, que vous pouvez annuler.

Elabora garde toutes les sauvegardes pendant 24 heures, puis une par heure jusqu’à 7 jours, une par jour jusqu’à 30 jours, puis une par semaine. Les versions nommées restent jusqu’à ce que vous les supprimiez. Après 30 jours, un média retiré du module peut disparaître des anciennes sauvegardes, sauf s’il figure dans une version nommée. Les documents joints au module (ses sources) ne sont pas sauvegardés : gardez vos originaux.
