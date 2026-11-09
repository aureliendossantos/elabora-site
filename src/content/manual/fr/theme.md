---
title: 'Apparence : charte et lecteur'
description: Régler les couleurs, les polices et les styles du module, choisir entre diapositives et page qui défile, et régler le lecteur.
slug: apparence
group: create
order: 8
---

L’apparence d’un module se règle à deux endroits : la **Charte** (couleurs, polices, styles) et les **Réglages du module** (la présentation des écrans et le lecteur). Les deux s’ouvrent depuis le menu du titre du module ; la charte montre l’écran affiché à côté, pour voir l’effet de chaque changement.

## Les couleurs

Sous **Couleurs**, chaque couleur dit son rôle : **Principale** (boutons, barre de progression, accents des titres), **Sur la principale** (le texte des boutons), **Accent**, **Fond**, **Texte**, **Texte secondaire**, les couleurs des retours de bonne et de mauvaise réponse, et **Focus** (le contour de l’élément choisi au clavier).

Cliquez sur une couleur pour ouvrir le sélecteur : un champ, une teinte, la valeur hexadécimale, et une pipette (**Prendre une couleur à l’écran**). Elabora vérifie les contrastes selon WCAG 2.2 AA et dit en mots quand un contraste est insuffisant. Videz un champ pour revenir à la couleur par défaut.

<!-- capture: la Charte avec la liste des couleurs, le sélecteur ouvert sur la couleur principale -->

## Les polices et les formes

Sous **Polices**, choisissez la police des titres et celle du texte parmi une sélection gratuite pour un usage commercial, chaque nom dessiné dans sa propre police. Elabora l’intègre au module avec sa licence. **Polices du système** utilise celles de l’ordinateur de l’apprenant. Pour une autre police, demandez à votre IA.

Sous **Formes**, **Arrondi des angles** va de 0 à 32 pixels.

## Styles, décor et mises en page

Le bas de la charte liste ce que le module vous laisse choisir, chaque élément avec sa description et le nombre de blocs ou d’écrans qui s’en servent :

- **Styles des blocs** : l’apparence d’un type de bloc (un texte plus grand, un encadré sombre…) ;
- **Styles des écrans** : l’apparence d’un écran entier (une bande sombre, une page plus étroite…) ;
- **Décor** : le fond des écrans et ses variantes (un ciel étoilé, un papier ancien…) ;
- **Mises en page** : des blocs organisés en zones (une image à côté d’un texte…).

C’est votre IA qui les crée. Quand le module n’en a pas encore, Elabora explique à quoi ils servent et propose **Demander à l’agent** : décrivez **Ce que vous voulez**, puis **Envoyer à l’agent**. Par exemple :

> Une bande sombre pour les écrans de mise en situation.

Ensuite, vous les choisissez dans les **Propriétés** : **Style** pour un bloc ; **Style**, **Décor** et **Mise en page** pour un écran ; ou dans **Quelle mise en page ?** quand vous ajoutez un **Nouvel écran**. Pour aller plus loin, la charte est une vraie feuille de style : les développeurs trouveront le détail dans [Design](/en/docs/developers/design/).

## Diapositives ou page qui défile

Dans **Réglages du module**, onglet **Module**, section **Présentation**, **Les écrans** propose :

- **Une page qui défile** : l’écran défile comme une page, les étapes s’ajoutent en dessous ;
- **Des diapositives** : l’écran tient dans la fenêtre, les étapes s’affichent sur place. La **Fenêtre de référence** (1600 × 900 ou 1280 × 720) est la taille pour laquelle vous les concevez ; elles s’adaptent aux autres fenêtres.

Sur un téléphone, ou dans une fenêtre trop petite, une diapositive se lit comme une page qui défile ; elle n’est jamais réduite comme une image. **Largeur d’un téléphone**, dans le menu du zoom de Diapositive, vous montre ce que ça donne.

## Le lecteur

Section **Le lecteur**, dans le même onglet :

- **Navigation** : **Dans l’ordre** (l’apprenant avance avec « Suivant » et revient avec « Précédent ») ou **Libre** (tous les écrans sont accessibles depuis le menu) ;
- **« Suivant »** : attendre ou non que l’écran soit terminé ;
- **Menu des écrans** et **Progression** : affichés ou non dans le lecteur ;
- **« Précédent » et « Suivant »** : **En bas de la fenêtre** ou **En fin de page** ;
- et, pour les écrans narrés, l’**Avancement** et la **Barre de lecture** par défaut (voir [voix et narration](/fr/docs/voix-et-narration/)).

Ce que le module envoie au LMS (réussite, suivi) se règle aussi ici : voir [publier](/fr/docs/publier/).
