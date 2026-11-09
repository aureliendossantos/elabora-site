---
title: Dialogues à embranchements
description: Ajouter un dialogue, l’écrire en Script, le voir en Carte et en Tableau, régler ses personnages, ses modes et ses voix, le jouer et l’envoyer au client.
slug: dialogues
group: create
order: 7
---

Un dialogue met l’apprenant dans une conversation. Des personnages parlent, il choisit sa réponse, la conversation continue selon son choix, et tout reste dans le même fil, comme une messagerie. C’est un bloc parmi les autres : il peut suivre un texte, précéder une question et, une fois fini, envoyer vers un autre écran.

Pourquoi les dialogues sont faits ainsi (la conséquence avant la note, trois options de longueurs proches, le premier parcours seul noté) : voir [ce que la recherche dit](/fr/docs/ce-que-dit-la-recherche/#pratiquer-une-décision-en-situation).

<!-- capture: un dialogue en style messagerie dans Diapositive, avec trois options sous le fil -->

## Ajouter un dialogue

Le plus simple est de le demander à votre IA, en lui donnant la situation et les erreurs à mettre en jeu :

> Sur l’écran 4, écris un dialogue : Leïla, technicienne du support, prend l’appel de Marc, dont l’étage n’a plus de réseau. Trois décisions : la première question à poser, ce qu’elle note dans le ticket, escalader ou non. Pour chacune, une bonne option, une moyenne et une mauvaise, avec leur conséquence et une note.

Vous pouvez aussi l’ajouter vous-même : **Interaction › Dialogue** dans la barre d’outils (voir [écrans et blocs](/fr/docs/ecrans-et-blocs/#ajouter-un-bloc)). Le bloc part d’un petit modèle à remplacer : deux répliques d’un personnage, puis une décision à trois options, une bonne, une moyenne et une mauvaise, chacune avec sa réaction ou sa note ; la mauvaise fait réessayer.

L’éditeur du dialogue s’ouvre aussitôt. Il prend la place du canevas dans **Diapositive**, et **← Canevas** ramène la diapositive. Pour y revenir, double-cliquez sur le bloc, appuyez sur Entrée quand il est sélectionné, ou cliquez sur **Ouvrir le dialogue** dans ses **Propriétés**.

Un dialogue se compose de **passages**. Un passage est un temps de la conversation : quelques répliques, puis une décision de l’apprenant, le passage suivant, ou une fin. Dans l’éditeur, la liste de gauche devient le plan du dialogue : ses passages, numérotés (« 4 Rédiger le ticket »), ses fins, **Ajouter un passage** et **Ajouter une fin**. Le cas le plus courant, une mise en situation, une décision à trois options, une conséquence et une note pour chacune, tient en un seul passage.

## Écrire en Script, voir la Carte et le Tableau

L’éditeur montre le même dialogue de trois façons ; un changement fait dans l’une se voit dans les autres.

- **Script**, la vue par défaut : le dialogue écrit comme un scénario, au clavier. **Ajouter une réplique** ouvre une ligne à taper : ⇥ et ⇧⇥ changent de personnage, Entrée écrit la réplique et en ouvre une autre, Échap abandonne. Les options s’écrivent de même : Entrée ouvre l’option suivante, ⇥ sa réaction. Sous chaque option, sa qualité (une icône et un mot), sa réaction, son feedback en note, et sa suite en une phrase : « puis 4 Rédiger le ticket », « puis la fin », « puis les mêmes options, C grisée ». Ce que signalent les vérifications s’affiche sous ce qu’il concerne. ⌫ supprime ; ⌥↑ et ⌥↓ déplacent un passage, une option ou une réplique.
- **Carte** : les passages et leurs liens, disposés automatiquement à partir du début. Les retours en arrière (réessayer, une boucle) sont en pointillés. La qualité d’une option tient dans son icône, la légende dit les mots. Il n’y a aucune position à tenir à jour.
- **Tableau** : une ligne par option, regroupées par passage, avec les colonnes **Option**, **Réaction**, **Feedback**, **Qualité** et **Points**. On écrit dans les cellules, la qualité se choisit dans un menu. C’est la vue de l’expert métier, et celle d’une relecture en masse.

Le panneau de droite suit ce que vous sélectionnez : une option (sa qualité, son texte, son **Bouton** s’il doit être plus court, sa réaction, son feedback, sa suite, ses points, **Une seule fois**), une réplique (son personnage, son expression, son texte, sa voix), un passage ou une fin.

Quelques règles à connaître :

- **Une option sans suite propre continue avec le passage** : après sa réaction et sa note, la conversation reprend là où elle allait de toute façon. Une décision qui rejoint aussitôt le passage n’a pas besoin d’être câblée. Une option peut aussi ouvrir une petite branche (un autre passage), qui revient ensuite au tronc.
- **Les mêmes options à nouveau**, comme suite d’une option : après sa réaction et sa note, les mêmes options reviennent, celle-ci grisée. Le premier choix compte.
- **Une seule fois** : l’option disparaît (ou se grise) une fois prise. C’est ce qu’il faut pour un entretien où l’apprenant choisit ses questions, avec une option « Passer à la suite » toujours là.
- **Choix définitif**, sur un passage : annoncé à l’apprenant avant qu’il choisisse ; il ne pourra revenir ni sur ce choix, ni avant. Une fois le dialogue fini, **Recommencer** reste possible : c’est une nouvelle partie, qui ne change pas le parcours noté.
- **Les fins** ont un titre et un texte. Elles peuvent dépendre du score : « Maîtrisé » à partir de 80 %, « À revoir » sinon.
- Une réplique sans personnage (**Narration**, en changeant de personnage avec ⇥) est une mise en situation, « Plus tard, au bureau de Marc », affichée sans bulle.

## Les personnages et leur apparence

Les personnages sont les locuteurs du module, les mêmes que ceux de la narration. Dans les **Réglages du module**, section **Voix**, un clic sur le visage d’un locuteur ouvre « Marc dans les dialogues » :

- **Apparence** : **Son initiale**, **Un SVG animé…** (sa bouche suit sa voix, il change d’expression et fait des gestes) ou **Des images…** (un portrait, et une image par expression, avec **Ajouter une expression…**) ;
- **Couleur** : celle de son nom et de ses bulles, parmi les couleurs de la charte ;
- **Narrateur** : ses répliques sont dites par sa voix, sans bulle ni portrait.

Un personnage en SVG se demande à votre IA, qui le dessine en suivant la convention d’Elabora : « Dessine Marc, la quarantaine, chemise à carreaux, avec les expressions neutre, souriant, inquiet, soulagé et agacé, et un geste pour saluer ».

Un personnage a une liste fermée d’expressions et de gestes : l’**Expression** d’une réplique se choisit parmi celles de son apparence, et les vérifications signalent une expression qu’il n’a pas. L’expression dit quel visage montrer ; la didascalie (« [inquiet] ») dit à la voix comment jouer la réplique : ce sont deux réglages distincts.

Un geste se cale sur un mot de la réplique, comme un bloc sur la narration : Leïla salue au mot « Bonjour ». Un mot peut aussi faire apparaître un bloc de l’écran : la photo de l’imprimante quand Marc dit « imprimante ». Ces repères se demandent à votre IA.

Dans les **Propriétés** du dialogue (rien n’étant sélectionné dans l’éditeur), **L’apprenant joue** désigne le personnage de l’apprenant (Leïla) ; sans lui, ses bulles disent « Vous ». **Réponses à voix haute** fait dire ses réponses par la voix de ce personnage.

## La qualité des options et les modes

Chaque option est marquée **Bonne**, **Moyenne** ou **Mauvaise**. L’apprenant ne voit jamais cette marque avant son choix. Elle colore l’éditeur, et elle suffit au score, au bilan et au suivi dans le LMS, sans aucun nombre à écrire. Les vérifications signalent une décision de plus de quatre options et des options de longueurs très inégales, car l’apprenant repère sans réfléchir la plus longue.

Le **Mode** du dialogue, dans ses **Propriétés**, règle d’un coup le retour en arrière, le moment des notes et le score. Les boutons cités sont ceux que voit l’apprenant :

| Mode | Retour en arrière | Notes | Score |
|---|---|---|---|
| **Pratique** (par défaut) | **Choisir autrement** juste après une conséquence ; une fois la fin atteinte, **Changer ce choix** sous chaque décision du bilan (ou **Reprendre d’ici** sur ses réponses passées) et **Recommencer** | dans le fil, et au bilan | non noté |
| **Évaluation** | aucun | au bilan seulement | qualité des choix |
| **Exploration** | **Reprendre d’ici** dès le premier choix | dans le fil | non noté |

Sous le mode, une phrase dit ce qu’il implique, puis **Score** (**Non noté**, **Qualité des choix**, **Points**, **Selon la fin**), **Feedback** (**Dans le fil**, **Au bilan**, **Fil et bilan**) et **Retour** (**Jamais**, **Choisir autrement**, **Puis depuis la fin**, **À tout moment**) : chaque réglage reste modifiable. **Seul le premier parcours jusqu’à une fin compte**, quel que soit le mode, et dans chaque décision le premier choix. Les essais et les retours qui suivent ne changent ni le score, ni le statut, ni ce que reçoit le LMS : une réponse par décision du premier parcours.

## Le bilan

À la fin, l’apprenant voit le **Bilan** : la fin atteinte (son titre et son texte), le score, chaque décision avec son premier choix, sa qualité dite en mots (« Bon choix », « Choix moyen », « Choix à éviter ») et sa note, puis les autres issues, découvertes ou non. Sur une diapositive ou en scène, il s’ouvre par-dessus le fil, le reste du dialogue assombri : un clic à côté, sa croix ou Échap le referme, et **Voir le bilan** le rouvre. Il se construit tout seul à partir des options ; **Bilan à la fin**, dans les **Propriétés** du dialogue, le retire.

Le bilan est aussi l’endroit où l’apprenant agit, sans avoir à le fermer : **Changer ce choix**, sous chaque décision, l’y ramène ; **Recommencer**, au pied du bilan, reprend tout le dialogue depuis sa première réplique. Après un retour, ce qui suivait s’efface, le fil marque « Vous reprenez ici » et l’option reprise dit « votre choix précédent ». Sans bilan, la fin propose **Revenir à un choix** et **Recommencer**.

## Les voix des répliques

Les répliques d’un personnage sont des répliques de voix comme celles de la narration (voir [voix et narration](/fr/docs/voix-et-narration/)). Sélectionnez-en une : sa section **Voix** donne l’écoute, **Générer** (ou **Régénérer**), **Importer un enregistrement…**, la voix du personnage et ses prises. Avec ElevenLabs, rien n’est dépensé sans votre accord, comme pour la narration. Avec **Réponses à voix haute**, une option a la même section.

Les vérifications signalent une seule fois, pour tout le dialogue, les répliques qui n’ont pas encore leur voix. Pendant qu’une réplique parle, la narration de l’écran et la voix des calques attendent.

## Ce que voit l’apprenant : messagerie et scène

**Présentation**, dans les **Propriétés** du dialogue :

- **Messagerie** (par défaut) : les personnages à gauche, avec un portrait rond, l’apprenant à droite, le nom au-dessus de la première bulle d’une série. Sur une diapositive, le fil défile dans une boîte de taille fixe, et **Nouveau message** apparaît si l’apprenant est remonté ; sur une page qui défile, le bloc grandit. Rien ne bouge dans la mise en page : les options ont leur place réservée sous le fil.
- **Scène** : un décor, les personnages en grand, des bulles près d’eux, puis la page tourne ; **Historique** ouvre tout le fil par-dessus la scène, le reste assombri ; un clic à côté, sa croix ou Échap le referme. Sur un écran étroit, le fil reprend, avec les portraits, sous une bande du décor.

Dans les deux styles, la narration est centrée, sans bulle, et la note du formateur se tient hors de la conversation : sa qualité (« Bon choix », « Choix moyen », « Choix à éviter »), puis son texte. Elle ne ressemble jamais à la bulle d’un personnage. Quand l’apprenant choisit, son option part dans le fil comme sa bulle.

**Commence** dit quand le dialogue démarre : **À l’arrivée sur l’écran**, **Au clic** (une carte de départ) ou **Par un événement**. La section **Rythme** règle les **Répliques** (**Enchaînées** ou **Une par clic**) et le **Texte** : **Mot par mot** (par défaut, les mots pas encore dits plus pâles, visibles en avance), **En fondu** ou **D’un coup**. Ces effets suivent la voix : une réplique sans voix paraît entière.

L’apprenant garde la main avec **Suite**. Pendant qu’une voix parle, le bouton reste discret, mais un clic termine la réplique et passe à la suivante : qui lit plus vite n’attend jamais la voix. Après une réplique sans voix (un dialogue sans audio, un narrateur muet entre deux répliques voisées) et après une note, le dialogue attend **Suite** : c’est l’apprenant qui dit quand il a fini de lire. Il peut aussi mettre en pause et **Couper les voix**. Le réglage **Texte : tout de suite**, dans **Présentation**, comme le mouvement réduit de son système, montre toujours le texte entier.

## Jouer un chemin

**Jouer un chemin**, dans la barre d’outils de l’éditeur, ouvre son panneau à droite, sans lancer l’aperçu. Choisissez une réponse à chaque décision rencontrée (A, B, C…) ; celles qui ne sont pas proposées sont grisées. Le panneau donne le score, la fin atteinte, les décisions avec leur qualité et la durée (« Environ 25 s, estimée d’après le texte ») ; l’option jouée est teintée dans le script et la carte. **Recommencer** vide les choix ; **Voir sur la diapositive** ferme l’éditeur et montre le dialogue sur la diapositive après ces réponses, avec une étiquette dont le × le remet au début.

Les vérifications signalent aussi un passage qu’aucun chemin n’atteint, une impasse, une boucle sans sortie, des fins qui ne couvrent pas tous les scores, et un arbre qui se divise sans jamais se rejoindre (une quatrième décision à trois options ajouterait 81 passages à écrire). Pour connaître tous les chemins d’un coup, le meilleur et le pire score, demandez-le à votre IA.

Pour jouer le dialogue comme l’apprenant, avec ses voix et ses personnages, ouvrez l’**Aperçu**.

## Envoyer le script et la carte au client

Votre client valide un dialogue de deux façons : il le joue dans le module, par un [lien de relecture](/fr/docs/relectures-en-ligne/), et il lit son export. **Exporter le script**, dans la barre d’outils de l’éditeur, enregistre un PDF : la carte d’abord, puis le script, dans la langue du module. Votre IA sait aussi en faire une page HTML. Le dialogue n’entre pas dans le plan.

## Le dialogue et le reste de l’écran

Les événements ont un groupe **Dialogues** (voir [les événements](/fr/docs/interactions/)) ; dans les **Propriétés** du bloc, **Ajouter un événement** propose ces moments directement.

- Ce qui déclenche : **Quand un dialogue commence…**, **Quand un dialogue arrive à un passage…**, **Quand une réplique du dialogue commence…**, **Quand on répond dans un dialogue…** et **Quand un dialogue se termine…** (n’importe quelle fin, ou une fin nommée, par exemple pour aller à un autre écran).
- Les conditions lisent ce qu’a donné la première partie d’un dialogue, de cet écran ou d’un autre : **Un dialogue…** **Est terminé**, **N’est pas encore terminé**, **S’est terminé sur…**, **A reçu la réponse…**, **A un score…**.
- Les actions : **Commencer un dialogue…**, **Amener un dialogue à un passage…**, **Recommencer un dialogue…**.
- Depuis le dialogue, une option ou un mot peut seulement changer ce que montre l’écran : afficher ou masquer un bloc ou un calque, lancer un média, régler un objet libre. **Un dialogue ne modifie jamais les variables du module et n’envoie pas vers un autre écran** : faites-le dans un événement de l’écran, quand le dialogue se termine. C’est ce qui permet de revenir sur un choix sans fausser le reste.

## Ce qu’on demande à l’agent

Votre IA écrit le dialogue, le relit sous forme de scénario, joue ses chemins et vérifie qu’ils mènent tous à une fin, sans ouvrir l’aperçu. Ses consignes lui demandent des répliques courtes, la conséquence avant la note, trois options plausibles de longueurs proches, et le meilleur chemin écrit d’abord. Quelques demandes :

> Ajoute une option « Demander le numéro du poste » à la première décision, moyenne, avec la réaction de Marc et une note.

> Le dialogue de l’écran 4 est trop long : garde trois décisions et fais rejoindre les branches.

> Fais passer l’écran 5 en Évaluation, noté sur la qualité des choix, et envoie vers l’écran 7 quand la fin est « À revoir ».

> Dessine un personnage pour la cliente, Mme Duval, et donne-lui les expressions dont le dialogue a besoin.

Un module Rise importé garde ses scénarios en dialogues : les scènes deviennent des passages, les réponses des options, le feedback une note ; le rapport d’import dit ce qui n’est pas repris, comme les poses des personnages (voir [reprendre un module Storyline ou Rise](/fr/docs/importer-storyline-rise/)).
