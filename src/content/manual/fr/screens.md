---
title: Écrans et blocs
description: Voir les écrans comme l’apprenant, retoucher les textes, ajouter et déplacer des blocs, remplacer images et vidéos.
slug: ecrans-et-blocs
group: create
order: 4
---

La vue **Diapositive** montre chaque écran exactement comme l’apprenant le verra : c’est le lecteur du module qui le dessine. Vous y retouchez à la main ce que votre IA a écrit, ou vous construisez vous-même. Le menu du zoom propose **Largeur d’un téléphone** pour voir l’écran sur mobile, et **Ajuster à la fenêtre** pour revenir.

## Les écrans et les chapitres

Dans la liste de gauche, un clic affiche un écran ; un double clic le renomme. Glissez un écran pour le déplacer, y compris dans un autre chapitre. Le clic droit propose **Ouvrir**, **Nouvel écran après**, **Dupliquer**, **Monter**, **Descendre** et **Supprimer** ; **Nouvel écran dans ce chapitre** en ajoute un à la fin d’un chapitre. Quand le module a des mises en page, un nouvel écran demande **Quelle mise en page ?** : **Écran simple** (les blocs les uns sous les autres) ou une mise en page du module.

Sans rien sélectionner sur le canevas, **Propriétés** montre l’écran : son **Titre** ; **Complété** (**dès qu’il est vu**, **après ses activités** ou **par un événement**) et **Compte dans la progression** ; à la ligne **Plan**, les points du plan qu’il couvre (au moins un) ; sa **Mise en page**, son **Style** et son **Décor** ; ses **Étapes** et ses **Événements**.

## Retoucher un texte

Double-cliquez sur un texte du canevas (ou appuyez sur Entrée quand son bloc est sélectionné) : un éditeur s’ouvre par-dessus. Vous avez le gras (⌘B), l’italique (⌘I), les liens (⌘K) et les listes ; ce que vous collez depuis un traitement de texte est nettoyé. Validez en cliquant ailleurs, ou avec Entrée (⌘Entrée dans un paragraphe) ; Échap ressort sans rien changer. Un texte qui contient un tableau ou une formule centrée se modifie en Markdown (**Modifier le Markdown**).

Certains textes viennent du plan validé : **Propriétés** le signale. Les reformuler change le plan, qui le marque jusqu’à sa prochaine version. Ceux que le client veut « à l’identique » se déverrouillent seulement dans [le plan](/fr/docs/plan/).

<!-- capture: un paragraphe en cours d’édition sur le canevas, avec la petite barre de mise en forme -->

## Les propriétés d’un bloc

Sélectionnez un bloc : **Propriétés** montre tout ce qui se règle, en mots : ses textes, ses choix, ses options, sa **Largeur** (**Standard**, **Large**, **Moitié**, et **Bord à bord** pour les blocs qui le permettent), son **Étape**, son **Style**, ses **Événements** et son **Accessibilité**. Un bloc qui a plusieurs présentations les propose en premier, sous **Présentation**. Pour une question : l’énoncé, les réponses et le retour de chacune (pourquoi [un retour par option](/fr/docs/ce-que-dit-la-recherche/#un-retour-qui-explique) vaut la peine d’être écrit).

## Ajouter un bloc

La barre d’outils ajoute un bloc après le bloc sélectionné (ou à la fin de l’écran, ou du calque affiché) :

- **Texte** : un paragraphe, un titre, une introduction de leçon, un encadré, un énoncé, un séparateur, une équation, une citation, un persona ;
- **Média** : une image, une galerie, deux images à comparer, une vidéo ou un son de votre ordinateur ;
- **Disposition** : une pile de contenus qui se succèdent au même endroit, des colonnes, un « À faire / À éviter » ;
- **Interaction** : un accordéon, des onglets, des cartes à retourner, des étapes, une frise, un défilé, une image interactive, une visite guidée, un personnage, un dialogue, une décision, un bouton ;
- **Questions** : une question (aussi en images ou sur une image), une question numérique, un texte à trous, un exercice pour associer, catégoriser ou remettre dans l’ordre, une réflexion, une échelle, les résultats ;
- **Graphiques** : des chiffres, un classement, une évolution, une répartition, un processus, un schéma (voir plus bas) ;
- **Blocs du module** : les blocs propres à ce module, quand il en a.

Chaque entrée est une chose précise que vous avez en tête, dans une liste à plat ; les variantes à côté de l’aperçu en sont des styles, et l’inspecteur offre ensuite toutes les présentations du bloc. Les entrées marquées d’une ellipse (**Image…**, **Galerie…**, **Défilé…**) demandent d’abord vos fichiers. Tout cela, avec **Transformer en…** et la mise en page **Ouverture**, est dans [les blocs de départ](/fr/docs/blocs-de-depart/).

Chaque outil ouvre sa famille, avec l’aperçu de chaque entrée telle qu’elle apparaîtra dans votre écran. Le **+** entre deux blocs, le clic droit sur un bloc ou sur l’écran, ou le menu **…** d’un bloc, proposent tous les blocs, avec un champ de recherche ; dans un paragraphe, tapez **/** puis son nom. Le premier texte du nouveau bloc est sélectionné : tapez directement par-dessus. Un dialogue à embranchements a sa propre page : [les dialogues](/fr/docs/dialogues/). Les rappels et le glisser-déposer des **Questions** sont dans [les blocs de départ](/fr/docs/blocs-de-depart/#questions).

## Graphiques et schémas

Un graphique d’Elabora dit une seule chose. Son titre est la phrase qu’il prouve, **À retenir** (« La plupart des incidents commencent par un e-mail », plutôt que « Incidents par origine ») ; **Mis en avant** choisit l’élément qui porte l’idée : il prend la couleur d’accent, les autres s’effacent. Voilà pourquoi : [un graphique, une idée](/fr/docs/ce-que-dit-la-recherche/#un-graphique-une-idée). Quand un graphique porte la diapositive, ce qu’il faut retenir en est le titre : désactivez **Afficher le titre** dans les réglages de l’écran (le menu et les lecteurs d’écran le gardent), et laissez **Contexte** vide sauf s’il dit ce que ni le titre ni le graphique ne disent, comme ce qui est compté.

- **Chiffres clés**, **Barres**, **Répartition**, **Évolution**, **Proportion** (« 1 sur 10 »), **Avant / après**, **Entonnoir** (ou pyramide), **Processus**, **Cycle**, **Matrice**, **Jalons** et **Schéma** (un logigramme, une carte d’idées, une séquence, écrits en Mermaid).
- Ils s’animent une fois, à leur arrivée à l’écran, et répondent au pointeur, au toucher et aux flèches du clavier ; un tableau de leurs données est lu par les lecteurs d’écran.
- Sur un écran narré, chaque élément peut arriver quand la voix le nomme, les autres s’effaçant le temps qu’elle en parle : demandez-le à votre IA (« fais apparaître chaque barre quand la voix la cite »), ou voyez [le graphique suit la voix](/fr/docs/ce-que-dit-la-recherche/#le-graphique-suit-la-voix).
- **Évolution** peut faire deviner la suite : l’apprenant trace la courbe qu’il imagine, puis découvre la vraie. Ce moment n’est noté que si vous le décidez ([prédire, puis découvrir](/fr/docs/ce-que-dit-la-recherche/#prédire-puis-découvrir)).
- Pour ce qu’aucun bloc ne dessine (deux séries, une carte, une échelle logarithmique), votre IA écrit un objet libre avec les mêmes règles.

## Déplacer, copier, supprimer

Une fois un bloc sélectionné : glissez-le sur le canevas (un trait montre où il ira), ou ⌥↑ et ⌥↓ ; ⌘D le duplique ; ⌘C puis ⌘V le collent après le bloc sélectionné, sur n’importe quel écran ; **Déplacer vers un autre écran…** l’envoie à la fin d’un autre écran ; ⌫ le supprime. Chaque geste est un pas que ⌘Z annule.

## Images, vidéos et sons

- Remplacer une image : dans **Propriétés**, **Remplacer…**, ou glissez le fichier sur le champ, ou directement sur l’image du canevas. Elabora vous demande ensuite de vérifier son texte alternatif : décrit-il encore ce que montre la nouvelle image ?
- Ajouter : glissez une image, une vidéo ou un son ailleurs sur le canevas ; il arrive en nouveau bloc après celui qui est sous le pointeur.
- Elabora convertit le fichier pour le web avec son propre ffmpeg.
- Une vidéo ou un son : l’inspecteur dit ce qui lui manque. Les **Sous-titres** viennent d’un fichier WebVTT (.vtt) ou SubRip (.srt) : choisissez-le, ou glissez-le sur le champ ou sur la vidéo. Ajoutez la **Transcription**. **En boucle** sert aux animations muettes ; **Décorative** pour ce qui n’apporte aucune information.

## Objets libres et blocs du module

Un objet libre (une simulation 3D, un petit jeu…) a ses **Réglages de l’objet**, choisis par son auteur, son **Accessibilité** (la **Description lue** par les lecteurs d’écran) et ses **Textes de l’objet**, que vous pouvez reformuler. Pour toucher à son code, demandez à votre IA. Un bloc propre au module se transforme en blocs ordinaires avec **Convertir en blocs simples**, dans son menu. Les développeurs trouveront le détail dans [Free objects](/en/docs/developers/free-object-contract/) et [Components](/en/docs/developers/components/).

## D’un écran à l’autre

Une scène 3D ou une image qui revient sur l’écran suivant peut continuer au lieu de réapparaître, comme une transition « morphose » entre deux diapositives. Sélectionnez-la sur le second écran et activez **Suite de l’écran précédent** dans **Propriétés** : un objet libre continue de tourner et passe à ses nouveaux réglages (une autre caméra, un autre mode), sans se recharger ; une image glisse depuis sa place. **Passage** en règle la durée : **Rapide**, **Normal** ou **Lent**. C’est un seul pas que ⌘Z annule. Le canevas et l’**Aperçu** montrent le passage comme l’apprenant le verra.

Le reste de l’écran change comme d’habitude, et quand l’apprenant demande moins d’animations, le passage devient une coupe nette. La scène garde un seul état d’un écran à l’autre : ce que l’apprenant y a fait est toujours là quand il revient. Ce que fait l’objet pendant le passage (la caméra qui pivote, les commandes qui changent), c’est son code qui le décide : demandez-le à votre IA, par exemple « pendant le passage vers l’explication, fais descendre la caméra en vue en coupe ».

## Rechercher et remplacer

⌘F (ou la loupe) ouvre **Chercher dans le module** : les résultats par écran, chacun avec ce qui l’entoure ; un clic ouvre l’endroit. **Remplacer par**, puis **Remplacer** pour un résultat ou **Tout remplacer**, en un seul pas que ⌘Z annule. **Aa** respecte les majuscules. Les textes validés du plan ne sont pas cherchés ici : ils se modifient dans Plan.
