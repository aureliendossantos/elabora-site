---
title: "Pourquoi les cours Rise et Storyline sont-ils lents à charger ?"
seo: "Pourquoi les cours Rise et Storyline sont-ils lents à charger ? 10 cours mesurés (2026)"
description: "10 cours publiés mesurés en 4G lente : Rise et Storyline mettent 14,5 à 24,3 s à montrer leur contenu. Pourquoi, comment alléger un cours, méthode et chiffres bruts."
slug: rise-storyline-lents-a-charger
kind: study
tools: [rise, storyline]
checked: 2026-11-06
summary: "En 4G lente, trois cours Storyline publics affichent leur contenu principal en 14,6 à 24,3 s, trois cours Rise publics en 14,5 à 23,6 s, et quatre exemples d’Elabora en 2,8 à 3,6 s. L’essentiel de l’écart est un coût fixe de chaque outil : avant la première image, Rise charge 10 fichiers de polices et 1,5 à 1,7 Mo de JavaScript, Storyline 0,8 à 1,2 Mo de JavaScript, Elabora 0,14 à 0,38 Mo. Sur une fibre rapide, chaque cours s’affiche en moins de 5 s."
published: 2026-11-06
updated: 2026-11-06
order: 10
faq:
  - q: "Combien pèse un cours Rise ?"
    a: "Les trois cours Rise mesurés transfèrent 3,8 à 4,2 Mo avant que l’apprenant puisse s’en servir, dont 3,4 à 3,9 Mo de JavaScript et de polices : presque autant pour 58 blocs que pour 84. Sur le disque, la bibliothèque d’un export web Rise pèse environ 11 Mo, dont 8,5 Mo de JavaScript, même pour un cours de trois blocs."
  - q: "Mon LMS est-il en cause, ou le cours ?"
    a: "Les deux peuvent ajouter du temps. Nous avons mesuré des exports web ouverts directement, sans LMS. Pour les départager, déposez le même paquet dans SCORM Cloud : s’il y est lent aussi, le cours est en cause."
  - q: "Les modules Elabora sont-ils toujours plus légers ?"
    a: "Pas toujours : un module pèse ce que pèsent ses médias. Medieval charts transférait d’abord 6,9 Mo, plus que les cours Rise, parce que le lecteur d’Elabora chargeait d’un coup les images de ses quatre écrans. Depuis le 6 novembre 2026, le lecteur les charge à mesure que l’apprenant y arrive, et le même module transfère 0,35 Mo. Un premier écran aux images lourdes pèse toujours ce qu’elles pèsent."
---

## La réponse courte

Nous avons ouvert 10 cours publics comme un apprenant les ouvre, avec un cache vide, en 4G lente (le profil de Lighthouse) et avec un processeur ralenti 4 fois : la situation d’un apprenant en déplacement, à la campagne, ou sur un ordinateur de travail chargé.

| 4G lente, processeur ×4 | Storyline (3 cours) | Rise (3 cours) | Elabora (4 exemples) |
|---|---|---|---|
| Contenu principal affiché (LCP) | 14,6 à 24,3 s | 14,5 à 23,6 s | 2,8 à 3,6 s |
| JavaScript transféré | 0,84 à 1,21 Mo | 1,45 à 1,67 Mo | 0,14 à 0,38 Mo |
| Tout ce qui est transféré jusqu’au calme | 2,8 à 10,7 Mo | 3,8 à 4,2 Mo | 0,3 à 0,7 Mo |

Médianes de 3 passages par cours, mesurées depuis la France le 6 novembre 2026. Deux exemples d’Elabora, Clockwork et Medieval charts, ont été mesurés à nouveau l’après-midi, une fois la vitrine dotée d’un lecteur allégé. Servis depuis un même ordinateur, les mêmes paquets gardent le même ordre.

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

## Sur une connexion rapide

Sans bridage, sur la fibre, l’écart se resserre : chaque cours affiche son contenu en moins de 5 s.

| Sans bridage | Storyline | Rise | Elabora |
|---|---|---|---|
| Contenu principal affiché (LCP) | 0,6 à 1,7 s | 1,1 à 4,4 s | 0,6 à 1,0 s |

Sans bridage, le premier affichage bouge de 0,1 à 0,3 s d’une série à l’autre, avec le réseau du moment. La différence se voit avec un réseau lent ou un processeur modeste, là où sont beaucoup d’apprenants.

## Alléger un cours Rise

1. **Coupez les longues leçons avec des blocs Continuer.** Des auteurs constatent que Rise charge une leçon entière d’un coup, et qu’un bloc Continuer coupe ce qui se charge d’abord ([Optimize Rise 360 lesson size](https://community.articulate.com/discussions/discuss/optimize-rise-360-lesson-size/1240235), octobre 2025 ; le constat d’un auteur, pas une documentation d’Articulate).
2. **Compressez les images et les vidéos avant de les ajouter.** Exportez les photos en JPEG ou en WebP à la taille où elles s’affichent, et les vidéos à un débit fait pour le web.
3. **Dupliquez le cours pour laisser les anciens médias.** Un paquet SCORM peut garder les médias des versions précédentes d’un cours ; dupliquer le cours les laisse de côté ([fil d’octobre 2026](https://community.articulate.com/discussions/discuss/rise-courseware---lms-publishing---scorm-file-contains-media-from-snapshots/1274136)).
4. **Vérifiez le paquet après une traduction.** Le paquet d’un auteur a atteint 741 Mo après la traduction du cours, et le LMS l’a refusé ([fil d’août 2026](https://community.articulate.com/discussions/discuss/scorm-file-upload---lms/1270122)).
5. **Testez hors de votre LMS.** Déposez le paquet dans SCORM Cloud : s’il s’y charge vite, regardez du côté du LMS et de son lecteur.

Les polices et le JavaScript du lecteur de Rise restent : c’est son coût fixe.

## Alléger un cours Storyline

1. **Allégez les médias des premières diapositives.** Storyline précharge les diapositives suivantes : le cours Career profile transfère 8,4 Mo d’images avant que la page soit calme.
2. **Baissez la qualité de publication.** Dans les réglages de publication, choisissez la qualité vidéo, le débit audio et la qualité JPEG qui conviennent à la connexion de vos apprenants.
3. **Testez hors de votre LMS**, dans SCORM Cloud ou Review 360, pour voir ce qui vient du LMS.

## Les limites d’Elabora dans cette étude

- **Elabora n’est pas toujours plus léger en octets** : un module pèse ce que pèsent ses médias. Dans la première série, Medieval charts transférait 6,9 Mo, plus que chaque cours Rise, parce que le lecteur d’Elabora chargeait d’un coup les images de ses quatre écrans. Depuis le 6 novembre 2026, le lecteur charge les images à mesure que l’apprenant y arrive : le même module transfère 0,35 Mo, et son contenu s’affiche en 3,6 s. Un premier écran aux images lourdes ou avec une vidéo pèse toujours ce qu’elles pèsent.
- **Un exemple occupe le processeur dans cette mesure.** L’horloge animée de Clockwork, dessinée en WebGL, bloque la page 295 ms sur le processeur ralenti (1 533 ms dans la première série, sur un ordinateur plus chargé ; servi depuis un même ordinateur calme, le lecteur d’avant et celui d’après donnent tous deux 295 ms). La cause est le banc : Chrome sans GPU relit chaque image WebGL vers le processeur. Avec le GPU d’un Mac, plus aucune tâche longue après 1,3 s.
- **Les exemples d’Elabora sont les nôtres**, faits pour montrer ce que fait Elabora. La vitrine a été republiée le 6 novembre 2026 avec le lecteur allégé (elabora-core c6088bcb).

## Comment nous avons mesuré

- **Les cours.** 10 cours publics, ouverts sans compte : trois cours Storyline 360 (versions 3.102 et 3.105, publiés entre août 2025 et septembre 2026) et trois cours Rise 360 (2026), publiés par leurs auteurs sur GitHub Pages et section508.gov, et quatre exemples d’Elabora sur sa vitrine. Chacun est lié dans le tableau ci-dessus.
- **Deux séries pour Elabora.** Phishing by numbers et Coffee in brief viennent de la première série (12 h 49 UTC). Clockwork et Medieval charts ont été mesurés à nouveau à 14 h 45 UTC, une fois la vitrine dotée du lecteur allégé ; les cours Storyline et Rise n’ont pas été mesurés à nouveau. Un passage des deux exemples avant et après le changement, depuis un même ordinateur calme, est dans les chiffres bruts.
- **Le navigateur.** Chromium 151 sans GPU, une fenêtre de 1 366 × 768, l’agent utilisateur d’un Chrome de bureau.
- **Bridé.** Le profil « 4G lente » de Lighthouse, appliqué par Chrome à chaque requête (aller-retour de 562,5 ms, 1 474,56 kbit/s descendant, 675 kbit/s montant), et le processeur ralenti 4 fois. **Sans bridage** : la fibre de l’ordinateur.
- **Un cache vide** à chaque passage, après un chargement non compté qui réveille chaque CDN. Trois passages par cours et par condition, cours après cours ; nous gardons la médiane.
- **La fin d’un passage** : 5 s sans tâche longue et au plus 2 requêtes en cours, comme Lighthouse, puis 1 s de plus ; au plus 60 s sans bridage, 180 s bridé. Les octets comptent jusque-là : le premier écran et ce que l’outil charge d’avance, pas le cours entier.
- **Les mesures** : les octets transférés par type (protocole DevTools de Chrome), FCP et LCP (l’API du navigateur), le moment où la page est utilisable (TTI, calculé comme Lighthouse), le temps de blocage total, le temps du thread principal.
- **L’ordinateur** : un Mac Apple M5 de 10 cœurs et 16 Go, occupé par d’autres travaux pendant les passages (sa charge est notée à chaque passage). Les temps bridés varient de 0,4 s au plus d’un passage à l’autre : le réseau domine.
- **Une seconde série** a servi les mêmes paquets depuis cet ordinateur (HTTP/1.1), pour écarter les hébergeurs. L’ordre reste le même et les octets concordent à 1 % près ; Rise y est plus long (22,7 à 27,7 s), parce que ses 34 à 39 requêtes font la queue en HTTP/1.1.

Ce que l’étude laisse de côté :

- **Les cours n’ont pas la même taille** : 6 à 63 diapositives pour Storyline, 58 à 84 blocs pour Rise, 4 à 13 écrans pour Elabora. Le premier écran en dépend peu, le poids total beaucoup. Nous mesurerons le même petit cours fait dans les trois outils une fois qu’il existera ; d’ici là, l’étude compare des cours réels, tels que leurs auteurs les ont publiés.
- **Les médias** suivent les choix de chaque auteur.
- **Les hébergeurs diffèrent** (GitHub Pages, section508.gov, Cloudflare) ; la série locale retire cette différence.
- **Le bridage est simulé** par Chrome, ce n’est pas un vrai réseau mobile.
- **Des exports web, pas un LMS** : un LMS ajoute son propre lecteur aux trois.

## Le script et les chiffres bruts

Le script, la liste des cours et chaque passage sont publics, dans [research/load-speed](https://github.com/aureliendossantos/elabora-site/tree/main/research/load-speed) du dépôt de ce site. Relancez-les, sur vos cours aussi :

```bash
node research/load-speed/measure.ts --mode live --runs 3
```
