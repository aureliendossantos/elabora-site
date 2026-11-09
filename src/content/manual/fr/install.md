---
title: Installer Elabora
description: Ce qu’il vous faut, comment installer Elabora sur Mac ou Windows, et ce qui se passe au premier lancement.
slug: installer
group: start
order: 2
---

## Ce qu’il vous faut

- Un Mac avec une puce Apple (M1, M2, M3, M4…) ou un processeur Intel, ou un PC sous Windows 10 ou 11 en 64 bits.
- Une IA, de préférence. Avec un abonnement, Elabora travaille avec l’agent que vous utilisez déjà : l’app Claude (avec Claude Code) ou l’app ChatGPT (avec Codex). Sans abonnement, le chat d’Elabora travaille avec OpenCode et des modèles gratuits, téléchargés à votre premier message. Pour toute autre IA, Elabora copie la demande et vous la collez. Sans IA, vous pouvez quand même créer et retoucher un module à la main.

Sur Mac Intel, les voix locales, le calage des mots et la transcription locale ne sont pas disponibles. Vous pouvez toujours modifier vos modules, utiliser vos enregistrements et les services en ligne, et lire les narrations déjà créées.

Rien d’autre à installer. Elabora apporte ce dont il a besoin : ffmpeg pour les vidéos et les sons, la commande `elabora` dont se sert votre agent, et le navigateur qui sert aux captures et aux tests. Pas même Node.

## Quel fichier prendre

| Votre ordinateur | Fichier |
|---|---|
| Mac avec une puce Apple | `Elabora-…-mac-arm64.dmg` |
| Mac avec un processeur Intel | `Elabora-…-mac-x64.dmg` |
| PC sous Windows 10 ou 11 (64 bits) | `Elabora-…-win-x64-installer.exe` |

Sur un Mac, le menu Pomme › « À propos de ce Mac » vous le dit : la ligne « Puce » (Apple M…) ou « Processeur » (Intel).

## Sur Mac

1. Ouvrez le fichier `.dmg`, glissez Elabora sur le dossier Applications, puis éjectez le disque « Elabora ».
2. Ouvrez Elabora depuis le dossier Applications.

Tant qu’Elabora n’est pas signé par un éditeur reconnu par Apple, macOS refuse la première ouverture : il dit qu’il n’a pas pu vérifier qu’Elabora ne contient pas de logiciel malveillant. Cliquez sur « Terminé » (pas sur « Placer dans la corbeille »), puis ouvrez « Réglages Système » › « Confidentialité et sécurité ». Dans la partie « Sécurité », une ligne dit qu’Elabora a été bloqué : cliquez sur « Ouvrir quand même », puis de nouveau sur « Ouvrir quand même » dans la fenêtre qui suit, et confirmez avec votre mot de passe (ou Touch ID). Le bouton reste là environ une heure : s’il a disparu, rouvrez Elabora depuis le dossier Applications. Les fois suivantes, Elabora s’ouvre normalement.

Si macOS dit qu’Elabora est « endommagé », voyez le [dépannage](/fr/docs/depannage/).

## Sur Windows

1. Si votre navigateur se méfie du téléchargement, gardez le fichier quand même (dans Edge : le menu « … » du téléchargement, « Conserver », « Afficher plus », « Conserver quand même »).
2. Double-cliquez sur l’installeur. Si Windows affiche « Windows a protégé votre ordinateur », cliquez sur « Informations complémentaires », puis sur « Exécuter quand même ».
3. Acceptez les conditions du composant Microsoft Visual C++ fourni avec Elabora. S’il manque à votre PC, l’installeur l’installe (il sert aux voix locales) : Windows peut alors demander votre accord ou un mot de passe d’administrateur. Cette étape ne demande pas de connexion.
4. Elabora s’installe pour votre compte seulement, avec un raccourci sur le Bureau et dans le menu Démarrer. Si l’installeur demande de redémarrer, redémarrez, puis ouvrez Elabora depuis son raccourci.

## Premier lancement : votre IA préférée

Au premier lancement, cinq courtes pages présentent Elabora et ce qu’un agent peut faire pour vous. **Suivant** (ou Entrée) tourne la page, **Retour** revient en arrière. La dernière demande **Quelle IA voulez-vous utiliser ?** :

- **Claude** ou **ChatGPT**, chacun dans son app. Choisi, chacun dit ce qu’Elabora a trouvé sur votre ordinateur : installé et connecté (avec votre offre), pas encore connecté (**Se connecter**), à ouvrir une première fois (**Ouvrir**), trop ancien (**Mettre à jour**) ou absent (**Télécharger**). Installez ou connectez ce qui manque, puis revenez à la fenêtre : Elabora vérifie de nouveau tout seul.
- **Je n’ai pas d’abonnement** : OpenCode et des modèles gratuits, dans le chat d’Elabora. Rien à installer : Elabora le télécharge à votre premier message.

Rien n’est choisi d’avance. Choisissez, puis **Commencer**. Vous pourrez changer d’avis à tout moment : sur l’accueil, menu **Vous** › **Votre IA préférée…**. Pour la suite, voir [Travailler avec votre IA](/fr/docs/travailler-avec-votre-ia/).

<!-- capture: la dernière page du premier lancement, « Quelle IA voulez-vous utiliser ? », avec Claude, ChatGPT et « Je n’ai pas d’abonnement » -->

## Ce qu’Elabora télécharge, et quand

L’installeur contient l’essentiel. Certains éléments, gros et utiles seulement pour certains modules, se téléchargent une seule fois par ordinateur, la première fois que vous en avez besoin. Elabora vous le propose d’abord avec un bouton :

- **Voix locales**, pour faire dire la narration gratuitement sur votre ordinateur : par langue, 354 Mo pour le français, 126 Mo pour l’anglais.
- **Mots calés sur la voix**, pour savoir précisément quand chaque mot est dit.
- **Transcription**, pour transcrire des enregistrements et des vidéos sur votre ordinateur.
- **IA dans Elabora** : OpenCode, l’agent du chat, un peu plus de 100 Mo. Lui se télécharge de lui-même, à votre premier message dans le chat.

Ces éléments restent hors de vos modules. Vous les retrouvez, avec leur taille, dans [les réglages d’Elabora](/fr/docs/reglages/), sous **Éléments téléchargés**, où vous pouvez les désinstaller pour récupérer de la place.

## Langue et apparence

L’interface est en français ou en anglais, selon les préférences de langue de votre système (en anglais pour toute autre langue). Il n’y a pas de sélecteur : changez la langue du système, puis relancez Elabora. Un nouveau module prend la langue de l’interface ; un module existant garde la sienne. Le thème clair ou sombre suit aussi le système, sauf si vous le choisissez dans Réglages › Personnalisation › Apparence (Automatique, Clair ou Sombre).

## Mettre à jour, désinstaller

Sur Windows, Elabora se met à jour seul : sur une connexion non limitée, la nouvelle version se télécharge en arrière-plan, puis s’installe quand vous quittez Elabora, ou tout de suite avec « Redémarrer maintenant ». Si vous décochez « Mettre à jour automatiquement » (Réglages › Mises à jour), Elabora vous prévient seulement. Sur Mac, la bêta n’est pas signée et ne peut pas s’installer seule : Elabora signale la nouvelle version et ouvre sa page de téléchargement ; remplacez alors Elabora dans le dossier Applications.

Pour désinstaller : sur Mac, glissez Elabora du dossier Applications à la corbeille ; sur Windows, Paramètres › Applications › Applications installées › Elabora › Désinstaller.

Dans tous les cas, vos modules restent : ils sont dans [la bibliothèque](/fr/docs/bibliotheque/), pas dans l’application.
