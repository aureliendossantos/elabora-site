---
title: Dépannage
description: Les problèmes connus et leurs solutions, et quoi nous envoyer quand quelque chose ne va pas.
slug: depannage
group: more
order: 3
---

## À l’installation

### macOS refuse d’ouvrir Elabora la première fois

C’est attendu tant qu’Elabora n’est pas signé par un éditeur reconnu par Apple : passez par « Réglages Système » › « Confidentialité et sécurité » › « Ouvrir quand même » (voir [installer Elabora](/fr/docs/installer/)). Le clic droit › « Ouvrir » ne suffit plus sur les versions récentes de macOS.

### macOS dit qu’Elabora est « endommagé »

C’est aussi le cas si l’import d’une vidéo dit que ffmpeg « ne démarre pas sur cet ordinateur ». Ouvrez l’app Terminal (Applications › Utilitaires), collez cette ligne et appuyez sur Entrée :

```
xattr -dr com.apple.quarantine /Applications/Elabora.app
```

Elle retire la mise en quarantaine que macOS pose sur les fichiers téléchargés. Dites-le-nous aussi.

### Windows a bloqué l’installeur

Sur l’écran « Windows a protégé votre ordinateur » : « Informations complémentaires », puis « Exécuter quand même ». Si c’est le « Contrôle intelligent des applications » qui bloque, il n’y a pas de bouton pour passer outre : ne le désactivez pas (on ne peut pas toujours le réactiver), écrivez-nous.

### L’installation du composant Microsoft Visual C++ échoue

Ou vous avez refusé l’autorisation : l’installeur s’arrête. Relancez-le et autorisez Microsoft Visual C++. Si ça persiste, envoyez-nous le code affiché et le fichier `%TEMP%\Elabora-vc-redist.log`.

### Votre antivirus bloque Elabora

Ou un de ses fichiers (`ffmpeg.exe`, `ffprobe.exe`, `esbuild.exe`) : ce sont des programmes connus, pas encore signés. Dites-nous le nom que l’antivirus donne à la menace.

## Avec votre IA

### L’agent n’arrive pas à lancer `elabora`

Il vous demande sans doute la permission : acceptez. Sur Mac, si macOS refuse de le lancer, la ligne `xattr` ci-dessus règle le problème. Si vous avez ouvert l’agent vous-même, donnez-lui le chemin de la commande (voir [travailler avec votre IA](/fr/docs/travailler-avec-votre-ia/)).

### L’agent modifie un autre dossier que celui qu’Elabora affiche

Après un import, Elabora travaille sur sa propre copie, dans sa bibliothèque. Envoyez vos demandes depuis le panneau **Agent** : elles ouvrent l’agent sur la bonne copie.

## Dans un module

### « Elabora a dû fermer … : son moteur s’est arrêté »

Ce qui était enregistré est conservé : rouvrez le module pour continuer. Si ça se répète, envoyez-nous le journal.

### Un import est refusé

Le message dit pourquoi. Les cas les plus courants : le module vient d’une version plus récente d’Elabora (mettez Elabora à jour) ; c’est un dossier compressé et pas une archive Elabora (décompressez-le, puis importez le dossier) ; le fichier n’est que dans iCloud (téléchargez-le d’abord) ; le disque manque de place.

### Une image, une vidéo ou un son ne s’importe pas

Elabora le dit s’il ne sait pas lire le fichier. S’il dit que ffmpeg manque ou ne démarre pas, réinstallez Elabora (sur Mac, essayez d’abord la ligne `xattr`).

## Voix

### « Les voix locales ne fonctionnent pas sur cet ordinateur »

Le message ajoute « ONNX Runtime ne se charge pas ». Sur Windows, les voix locales ont besoin du composant Microsoft Visual C++ que l’installeur installe : relancez l’installeur d’Elabora et autorisez-le.

### Le téléchargement des voix a échoué

Vérifiez la connexion, puis réessayez : un téléchargement interrompu reprend où il s’était arrêté.

### ElevenLabs refuse votre clé

Ou il dit qu’il manque une permission : vérifiez la clé sur elevenlabs.io, et cochez **Text to Speech · Access**, **Voices · Read** et **User · Read**. Pour transcrire avec ElevenLabs, la clé a aussi besoin de la permission Speech to Text.

### Votre quota ElevenLabs du mois est épuisé

Il revient à son renouvellement, ou avec une offre plus grande. Les voix locales, elles, restent gratuites.

## Relectures en ligne

### « Votre session Elabora a pris fin sur cet appareil »

Vous avez été déconnecté d’ailleurs, ou la session n’a pas servi depuis 90 jours. Rien n’a bougé dans vos modules : **Se reconnecter**.

### Pas de connexion

Rien n’est envoyé, ni maintenant ni plus tard : une réponse en cours reste dans son champ ; relancez l’envoi une fois en ligne.

## Quoi nous envoyer

Écrivez-nous à contact@elabora.studio (le lien de la note bêta, sur l’accueil, ouvre un e-mail tout prêt), avec :

1. Ce que vous faisiez et ce qui s’est passé, en quelques mots, avec une capture d’écran si possible.
2. Le journal d’Elabora, `elabora.log` (et `elabora.old.log` s’il existe). Sur Mac : menu **Aide** › **Afficher le journal d’Elabora**, ou le dossier `~/Library/Logs/Elabora`. Sur Windows : le dossier `%LOCALAPPDATA%\Elabora\logs`. Sa première ligne dit votre version d’Elabora et votre système ; il contient des messages techniques, pas le contenu de vos modules.
3. Si Elabora ne s’ouvre pas du tout : une capture du message et, sur Mac, les rapports de plantage dont le nom commence par `Elabora`, dans `~/Library/Logs/DiagnosticReports`.
4. Le fichier que vous importiez, si le problème vient d’une image, d’une vidéo ou d’un son (ou au moins son format et sa taille).

N’envoyez un module entier que si nous vous le demandons, et seulement s’il ne contient rien de confidentiel pour vos clients.
