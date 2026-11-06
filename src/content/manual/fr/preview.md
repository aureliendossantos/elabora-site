---
title: Aperçu et vérifications
description: Jouer le module comme un apprenant, simuler un lecteur d’écran ou le clavier seul, et traiter ce que signalent les vérifications.
slug: apercu-et-verifications
group: deliver
order: 1
---

## L’aperçu

**Aperçu**, en haut à droite de la fenêtre du module, joue le module dans sa propre fenêtre, comme dans un LMS : Elabora le fait tourner dans un LMS simulé, pour que vous le voyiez comme l’apprenant le verra une fois livré. L’aperçu se reconstruit quand le module change. **Recommencer** repart du début, comme un nouvel apprenant.

<!-- capture: la fenêtre Aperçu, avec le menu Simuler ouvert -->

## Simuler certains apprenants

**Simuler**, dans la fenêtre d’aperçu, joue le module comme le vivent certains apprenants :

- **Lecteur d’écran** : un panneau, **Ce que dit le lecteur d’écran**, écrit chaque phrase lue, avec la touche qui l’a fait dire. Appuyez sur Tab pour passer d’un élément à l’autre, ou sur ↓ pour lire la suite ;
- **Clavier seul** : la souris ne fait plus rien (Tab, Maj+Tab, Espace, Entrée et les flèches) ;
- **Zoom 200 %** ;
- **Mouvement réduit** ;
- **Vision des couleurs** : **Sans distinguer le rouge du vert**, ou **Sans les couleurs**.

**Quitter la simulation** revient à la normale. Une simulation ne remplace pas un essai avec un vrai lecteur d’écran (NVDA, VoiceOver).

## L’ordre de lecture

Un lecteur d’écran lit les blocs dans l’ordre où ils sont rangés, pas dans celui où on les voit. Dans **Diapositive**, le menu du zoom propose **Ordre de lecture** (sur Mac, aussi dans le menu Affichage) : chaque bloc reçoit son numéro sur le canevas. Un calque affiché est lu seul. L’étiquette dans le coin du canevas enlève les numéros.

Les **Propriétés** de l’écran listent aussi cet ordre, avec le nom que lit le lecteur d’écran ; un texte alternatif manquant y est en rouge, et les médias décoratifs sont mis à part. Dans les **Propriétés** d’un bloc, **Accessibilité** dit le **Nom lu** et ses alternatives (texte alternatif, décoratif, sous-titres, transcription).

## Les vérifications

Elabora vérifie le module en continu : le format, le respect du plan, l’écriture des questions et de leurs retours, l’accessibilité, les événements, le poids du paquet pour le LMS… Une carte de l’accueil dit déjà « 2 points à corriger » quand il y a du rouge.

Ouvrez **Publier**, puis **Vérifications**. Tout y est en mots, rangé par gravité :

- **À corriger : la publication s’arrête** ;
- **À regarder** ;
- **Pour information**.

Les filtres en haut (**Tout**, **À corriger**, **À regarder**, **Pour information**, **Accessibilité**) resserrent la liste.

Choisissez un point : le panneau de droite dit ce que c’est, où, et ce qu’il faut faire.

- **Ouvrir l’écran** vous emmène au bloc concerné (pour un point d’accessibilité, **Afficher sur l’écran, avec l’ordre de lecture**).
- **Corriger** envoie le point à votre IA, avec ce qu’Elabora lui en dit (**Ce que dit Elabora à l’agent**).
- **Ignorer** écarte un avertissement qui ne s’applique pas ici (une négation dans une citation, par exemple). Il revient si le contenu change. Les points ignorés restent au bas de la liste, sous **Ignorés par vous**, avec **Rétablir**.

<!-- capture: Vérifications avec un point sélectionné et ses boutons Ouvrir l’écran, Corriger, Ignorer -->

Vous pouvez aussi tout confier à votre IA d’un coup :

> Corrige tous les points rouges des vérifications, puis dis-moi ce que tu as changé.

La page **Publier** reprend les premiers points à corriger et à regarder sous **Avant de publier**, avec **Ouvrir les vérifications** pour le reste. Les points rouges arrêtent le paquet SCORM et la publication sur le web, pas l’envoi à vos relecteurs : voir [publier](/fr/docs/publier/) et [les relectures en ligne](/fr/docs/relectures-en-ligne/).
