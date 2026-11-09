---
title: "Pourquoi les cours Rise et Storyline sont-ils lents à charger ?"
seo: "Pourquoi les cours Rise et Storyline sont-ils lents à charger ? 10 cours mesurés (2026)"
description: "10 cours publiés mesurés en 4G lente : Rise et Storyline mettent 14,5 à 24,3 s à montrer leur contenu. Pourquoi, comment alléger un cours, méthode et chiffres bruts."
slug: rise-storyline-lents-a-charger
kind: study
tools: [rise, storyline]
checked: 2026-11-06
summary: "Surtout à cause d’un coût fixe de chaque outil : avant la première image, Rise charge 10 fichiers de polices et 1,5 à 1,7 Mo de JavaScript, Storyline 0,8 à 1,2 Mo de JavaScript, Elabora 0,14 à 0,38 Mo. En 4G lente, trois cours Storyline publics affichent leur contenu principal en 14,6 à 24,3 s, trois cours Rise publics en 14,5 à 23,6 s, et quatre exemples d’Elabora en 2,8 à 3,6 s. Le même petit module fait dans les trois outils le confirme : Elabora affiche son premier écran en 2,3 à 2,4 s, Storyline en 9,8 s, et Rise son premier texte en 9,9 s. Sur une fibre rapide, chaque cours s’affiche en moins de 5 s."
published: 2026-11-06
updated: 2026-11-09
order: 10
faq:
  - q: "Combien pèse un cours Rise ?"
    a: "Les trois cours Rise mesurés transfèrent 3,8 à 4,2 Mo avant que l’apprenant puisse s’en servir, dont 3,4 à 3,9 Mo de JavaScript et de polices : presque autant pour 58 blocs que pour 84. Un cours Rise presque vide, fait par nous, charge 3,55 Mo avant son propre contenu, dont 1,9 Mo de polices. Sur le disque, la bibliothèque d’un export web Rise pèse environ 11 Mo, dont 8,5 Mo de JavaScript, même pour un cours de trois blocs."
  - q: "Mon LMS est-il en cause, ou le cours ?"
    a: "Les deux peuvent ajouter du temps. Nous avons mesuré des exports web ouverts directement, sans LMS. Pour les départager, déposez le même paquet dans SCORM Cloud : s’il y est lent aussi, le cours est en cause."
  - q: "Des médias lourds ralentissent-ils un module Elabora ?"
    a: "Un module pèse ce que pèsent ses médias. Elabora le charge progressivement : le premier écran d’abord, puis les images et la narration de la suite au fil de la lecture. L’apprenant voit donc vite son contenu, même avec des médias lourds : Medieval charts, un module de grandes cartes, affiche son contenu en 3,6 s en 4G lente."
---

## La réponse courte

Nous avons ouvert 10 cours publics comme un apprenant les ouvre, avec un cache vide, en 4G lente (le profil de Lighthouse) et avec un processeur ralenti 4 fois : la situation d’un apprenant en déplacement, à la campagne, ou sur un ordinateur de travail chargé.

| 4G lente, processeur ×4 | Storyline (3 cours) | Rise (3 cours) | Elabora (4 exemples) |
|---|---|---|---|
| Contenu principal affiché (LCP) | 14,6 à 24,3 s | 14,5 à 23,6 s | 2,8 à 3,6 s |
| JavaScript transféré | 0,84 à 1,21 Mo | 1,45 à 1,67 Mo | 0,14 à 0,38 Mo |
| Tout ce qui est transféré jusqu’au calme | 2,8 à 10,7 Mo | 3,8 à 4,2 Mo | 0,3 à 0,7 Mo |

<div data-chart="load-time"></div>

Médianes de 3 passages par cours, mesurées depuis la France le 6 novembre 2026.

## Ce que voit l’apprenant

[![Ce que voit l’apprenant à 0,5, 1, 2, 3, 5, 8, 13 et 20 s en 4G lente : les cours Storyline restent sombres et les cours Rise blancs pendant 13 s ou plus, quand les exemples d’Elabora montrent leur premier écran à 3 s.](/media/compare/film-slow-4g-fr.png)](/media/compare/film-slow-4g-fr.png)

Une ligne par cours, nommée par son identifiant dans les chiffres bruts, une colonne par instant, en 4G lente ; ouvrez l’image pour la voir en grand. Les cours Storyline restent sur un écran sombre, puis trois points, jusqu’à 13 s ou plus ; l’un est encore sombre à 20 s. Les cours Rise restent sur une page blanche, puis affichent « Your content is loading » à 13 s et leur premier écran vers 20 s. Les exemples d’Elabora montrent leur premier écran à 3 s ; Medieval charts n’a pas d’image à 0,5 s, où sa page était encore blanche. (Les captures ralentissent un peu la page : les chiffres viennent des passages sans capture.)

## Pourquoi : un coût fixe dans chaque outil

Avant la première image, chaque outil charge son propre lecteur. Ce coût dépend à peine du cours.

| Cours | JavaScript | Polices | Feuilles de style | Images et médias |
|---|---|---|---|---|
| Storyline · [Phishing attempts](https://annaasedovskaya.github.io/Recognizing-phishing-attempts-Articulate-Storyline-360/story.html) | 841 Ko | 63 Ko | 326 Ko | 663 Ko |
| Storyline · [Career profile](https://id1smq.github.io/storyline-career-profile/story.html) | 1 045 Ko | 63 Ko | 852 Ko | 8 643 Ko |
| Storyline · [BCS cyber](https://adp3504.github.io/BCS-cyber/story.html) | 1 212 Ko | 63 Ko | 1 995 Ko | 3 520 Ko |
| Rise · [RTK GPS](https://ucdrones.github.io/library/trainings/RTK_GPS/index.html) | 1 668 Ko | 1 945 Ko | 133 Ko | 76 Ko |
| Rise · [Micro-purchases](https://www.section508.gov/assets/online-training/micro-purchases-and-section-508-requirements/index.html) | 1 453 Ko | 2 301 Ko | 119 Ko | 119 Ko |
| Rise · [Accessible meetings](https://www.section508.gov/assets/online-training/accessible-meetings/index.html) | 1 637 Ko | 2 301 Ko | 119 Ko | 129 Ko |
| Elabora · [Phishing by numbers](https://vitrine.elabora.page/phishing-by-numbers/) | 161 Ko | 79 Ko | 59 Ko | 207 Ko |
| Elabora · [Clockwork](https://vitrine.elabora.page/clockwork/) | 381 Ko | 71 Ko | 61 Ko | — |
| Elabora · [Coffee in brief](https://vitrine.elabora.page/coffee-in-brief/) | 140 Ko | 97 Ko | 55 Ko | 10 Ko |
| Elabora · [Medieval charts](https://vitrine.elabora.page/medieval-charts/) | 151 Ko | 93 Ko | 73 Ko | 32 Ko |

Octets transférés sans bridage, compressés comme les serveurs les envoient.

- **Rise** charge 10 fichiers de polices (1,9 à 2,3 Mo) et 1,5 à 1,7 Mo de JavaScript compressé, 5 Mo une fois décompressé, avant d’afficher quoi que ce soit. Sur le disque, la bibliothèque d’un export web Rise pèse environ 11 Mo, dont 8,5 Mo de JavaScript, même pour un cours de trois blocs (sept exports de 2025 et 2026). Le personnel d’Articulate reconnaît que « Rise 360 courses can take a few seconds to initialize » ([E-Learning Heroes, 6 novembre 2025](https://community.articulate.com/discussions/discuss/rise-loading-state-and-loading-time/1242543)).
- **Storyline** charge 0,8 à 1,2 Mo de JavaScript (3 à 5 Mo décompressé) et ses feuilles de style, puis précharge les images et les médias des diapositives suivantes : son poids dépend du cours. La bibliothèque d’un export Storyline pèse environ 3 Mo.
- **Le lecteur d’Elabora** pèse environ 0,4 Mo sur le disque ; les exemples chargent 0,14 à 0,38 Mo de JavaScript.

## Le même module dans les trois outils

Les cours ci-dessus n’ont ni la même taille ni les mêmes médias. Nous avons donc aussi fait le même petit module dans les trois outils : un titre, un texte de 70 mots, une image, 30 secondes de narration et trois questions, avec les mêmes fichiers et les réglages par défaut de chaque outil, servis par le même serveur local. Storyline 360 3.129 et Rise 360 l’ont publié le 6 novembre 2026, avec un essai d’Articulate 360 ; Elabora l’a construit deux fois, en diapositives face à Storyline et en page qui défile face à Rise.

| 4G lente, processeur ×4 | Storyline | Elabora, diapositives | Rise | Elabora, page qui défile |
|---|---|---|---|---|
| Premier texte affiché (FCP) | 9,8 s | 2,4 s | 9,9 s | 2,3 s |
| Premier écran complet (LCP) | 9,8 s | 2,4 s | 25,0 s | 2,3 s |
| Coût fixe, avant le contenu du module | 0,78 Mo | 0,19 Mo | 3,55 Mo | 0,19 Mo |
| Tout ce qui est transféré | 1,12 Mo | 0,53 Mo | 3,95 Mo | 0,29 Mo |

Médianes de 3 passages. Le premier écran complet de Rise attend l’image de couverture qu’il ajoute par défaut ; servies en HTTP/1.1, ses 39 requêtes font aussi la queue.

[![Le module commun en 4G lente à 0,5, 1, 2, 3, 5, 8, 13 et 20 s : les deux versions d’Elabora montrent leur premier écran à 3 s, Storyline à 13 s, et Rise sa page de titre à 20 s, avant son image de couverture.](/media/compare/film-shared-module-slow-4g-fr.png)](/media/compare/film-shared-module-slow-4g-fr.png)

Les deux versions d’Elabora montrent leur premier écran à 3 s. Storyline affiche trois points dès 5 s et sa première diapositive à 13 s. Rise affiche un indicateur de chargement à 13 s et sa page de titre à 20 s, son image de couverture encore en route.

Avant le moindre contenu du module, Rise charge 3,55 Mo (dont 1,9 Mo en 10 fichiers de polices), Storyline 0,78 Mo et Elabora 0,19 Mo. Ce coût fixe accompagne chaque cours que l’outil publie, même le plus petit.

<div data-chart="fixed-cost"></div>

| Outil | Coût fixe | JavaScript | Polices | Feuilles de style |
|---|---|---|---|---|
| Storyline | 0,78 Mo | 624 Ko | 63 Ko | 89 Ko |
| Rise | 3,55 Mo | 1 468 Ko | 1 944 Ko | 133 Ko |
| Elabora | 0,19 Mo | 136 Ko | polices du système | 52 Ko |

Sur le disque, les exports web pèsent 3,7 Mo pour Storyline (28 fichiers), 12,8 Mo pour Rise (62 fichiers) et 1,1 Mo pour Elabora (17 fichiers).

Sans bridage, les trois s’ouvrent en moins d’une seconde sur le même ordinateur : Elabora en 0,1 s, Rise en 0,6 à 0,9 s, Storyline en 0,8 s.

Ce qui diffère entre les trois modules, et pèse peu :

- **L’essai gratuit de Rise** met un filigrane sur la page de titre, visible sur la pellicule.
- **L’image de couverture de Rise**, ajoutée par défaut (1 920 × 1 080, 407 Ko), est le plus grand élément de sa page de titre, donc son LCP ; elle est comptée hors du coût fixe.
- **Les sous-titres** : Storyline en ajoute à la narration (2 Ko) ; Elabora fait les siens (0,8 Ko).
- **Les médias** : chaque outil les réencode à sa façon. Rise fait de la narration un MP3 stéréo à 160 kb/s (607 Ko), Storyline un MP3 à 56 kb/s (213 Ko) ; Elabora garde la piste à 64 kb/s. Storyline garde l’image telle quelle (102 Ko), Rise la recompresse (37 Ko).
- **Les polices** : le thème par défaut d’Elabora utilise les polices du système ; un module avec ses propres polices les ajoute, 70 à 100 Ko dans nos exemples. Son lecteur emporte aussi ses sons d’interface (69 Ko).

Cette mesure complète celle des cours réels publiés, et les deux vont dans le même sens.

## Sur une connexion rapide

Sans bridage, sur la fibre, l’écart se resserre : chaque cours affiche son contenu en moins de 5 s.

| Sans bridage | Storyline | Rise | Elabora |
|---|---|---|---|
| Contenu principal affiché (LCP) | 0,6 à 1,7 s | 1,1 à 4,4 s | 0,6 à 1,0 s |

Sans bridage, le premier affichage varie de 0,1 à 0,3 s selon le réseau du moment. La différence se voit avec un réseau lent ou un processeur modeste, là où sont beaucoup d’apprenants.

## Alléger un cours Rise

1. **Coupez les longues leçons avec des blocs Continuer.** Des auteurs constatent que Rise charge une leçon entière d’un coup, et qu’un bloc Continuer coupe ce qui se charge d’abord ([Optimize Rise 360 lesson size](https://community.articulate.com/discussions/discuss/optimize-rise-360-lesson-size/1240235), octobre 2025, le constat d’un auteur).
2. **Compressez les images et les vidéos avant de les ajouter.** Exportez les photos en JPEG ou en WebP à la taille où elles s’affichent, et les vidéos à un débit fait pour le web.
3. **Dupliquez le cours pour laisser les anciens médias.** Un paquet SCORM peut garder les médias des versions précédentes d’un cours ; dupliquer le cours les laisse de côté ([fil d’octobre 2026](https://community.articulate.com/discussions/discuss/rise-courseware---lms-publishing---scorm-file-contains-media-from-snapshots/1274136)).
4. **Vérifiez le paquet après une traduction.** Le paquet d’un auteur a atteint 741 Mo après la traduction du cours, et le LMS l’a refusé ([fil d’août 2026](https://community.articulate.com/discussions/discuss/scorm-file-upload---lms/1270122)).
5. **Testez hors de votre LMS.** Déposez le paquet dans SCORM Cloud : s’il s’y charge vite, regardez du côté du LMS et de son lecteur.

Les polices et le JavaScript du lecteur de Rise restent : c’est son coût fixe.

## Alléger un cours Storyline

1. **Allégez les médias des premières diapositives.** Storyline précharge les diapositives suivantes : le cours Career profile transfère 8,4 Mo d’images avant que la page soit calme.
2. **Baissez la qualité de publication.** Dans les réglages de publication, choisissez la qualité vidéo, le débit audio et la qualité JPEG qui conviennent à la connexion de vos apprenants ([Best Practices for High Quality Images and Videos](https://www.articulatesupport.com/article/Storyline-360-Best-Practices-for-High-Quality-Images-and-Videos)).
3. **Testez hors de votre LMS**, dans SCORM Cloud ou Review 360, pour voir ce qui vient du LMS.

## Ce qu’il faut savoir des chiffres d’Elabora

Elabora a été pensé dès le départ pour un premier écran rapide : son lecteur est léger, et il charge le module au fil de la lecture.

- **Un module pèse ce que pèsent ses médias.** Elabora le charge progressivement : le premier écran d’abord, puis les images et la narration de la suite au fil de la lecture. L’apprenant voit donc vite son contenu, même avec des médias lourds.
- **Un exemple occupe le processeur dans cette mesure.** L’horloge animée de Clockwork, dessinée en WebGL, bloque la page 295 ms sur le processeur ralenti : Chrome sans GPU relit chaque image WebGL vers le processeur. Avec le GPU d’un Mac, plus aucune tâche longue après 1,3 s.
- **Les exemples d’Elabora sont les nôtres**, faits pour montrer ce que fait Elabora, et mesurés tels que publiés sur sa vitrine.

## Comment nous avons mesuré

- **Les cours.** 10 cours publics, ouverts sans compte : trois cours Storyline 360 (versions 3.102 et 3.105, publiés entre août 2025 et septembre 2026) et trois cours Rise 360 (2026), publiés par leurs auteurs sur GitHub Pages et section508.gov, et quatre exemples d’Elabora sur sa vitrine. Chacun est lié dans le tableau ci-dessus.
- **Quand.** Le 6 novembre 2026 : les cours Storyline et Rise, Phishing by numbers et Coffee in brief à 12 h 49 UTC ; Clockwork et Medieval charts à 14 h 45 UTC.
- **Le navigateur.** Chromium 151 sans GPU, une fenêtre de 1 366 × 768, l’agent utilisateur d’un Chrome de bureau.
- **Bridé.** Le profil « 4G lente » de Lighthouse, appliqué par Chrome à chaque requête (aller-retour de 562,5 ms, 1 474,56 kbit/s descendant, 675 kbit/s montant), et le processeur ralenti 4 fois. **Sans bridage** : la fibre de l’ordinateur.
- **Un cache vide** à chaque passage, après un chargement non compté qui réveille chaque CDN. Trois passages par cours et par condition, cours après cours ; nous gardons la médiane.
- **La fin d’un passage** : 5 s sans tâche longue et au plus 2 requêtes en cours, comme Lighthouse, puis 1 s de plus ; au plus 60 s sans bridage, 180 s bridé. Les octets comptent jusque-là : le premier écran et ce que l’outil charge d’avance, pas le cours entier.
- **Les mesures** : les octets transférés par type (protocole DevTools de Chrome), FCP et LCP (l’API du navigateur), le moment où la page est utilisable (TTI, calculé comme Lighthouse), le temps de blocage total, le temps du thread principal.
- **L’ordinateur** : un Mac Apple M5 de 10 cœurs et 16 Go, occupé par d’autres travaux pendant les passages (sa charge est notée à chaque passage). Les temps bridés varient de 0,4 s au plus d’un passage à l’autre : le réseau domine.
- **Le même module dans les trois outils** a été servi par le script depuis ce même ordinateur, en HTTP/1.1 avec gzip (sa charge allait de 8 à 16), le 6 novembre 2026 à 14 h 56 UTC : les exports web de Storyline 360 3.129.38633.0 et de Rise 360 avec leurs réglages proposés, et Elabora construit depuis elabora-core bb4ce638.

Ce que l’étude laisse de côté :

- **Les cours n’ont pas la même taille** : 6 à 63 diapositives pour Storyline, 58 à 84 blocs pour Rise, 4 à 13 écrans pour Elabora. Le premier écran en dépend peu, le poids total beaucoup. Le même module fait dans les trois outils (plus haut) lève cette réserve pour le premier écran, et garde le même ordre.
- **Les médias** suivent les choix de chaque auteur.
- **Les hébergeurs diffèrent** (GitHub Pages, section508.gov, Cloudflare) ; le même module, servi depuis un seul ordinateur, retire cette différence.
- **Le bridage est simulé** par Chrome, ce n’est pas un vrai réseau mobile.
- **Des exports web, pas un LMS** : un LMS ajoute son propre lecteur aux trois.

## Le script et les chiffres bruts

Le script, la liste des cours et chaque passage sont publics, dans [research/load-speed](https://github.com/aureliendossantos/elabora-site/tree/main/research/load-speed) du dépôt de ce site. Les passages et les pellicules du module commun y sont aussi ; ses exports Storyline et Rise restent non publiés, car ils portent le code d’Articulate et des détails du compte de l’auteur. Son README explique comment relancer le script, sur vos cours aussi.
