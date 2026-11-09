---
title: Poids et énergie
description: Ce que coûte le chargement d’un module en énergie, comment Publier le calcule, et ce qui compte davantage que le poids.
slug: poids-et-energie
group: deliver
order: 4
---

Sous la **Qualité des médias**, **Publier** dit ce que coûte le chargement du module en un geste du quotidien : « À ce réglage, charger ce module consomme autant qu’une ampoule LED allumée 25 minutes. » La phrase suit le réglage choisi et le poids réel du module. Elle donne un ordre de grandeur.

## Le calcul

- **Le poids** : ce qu’un apprenant charge pour suivre tout le module dans sa langue, à la qualité choisie. Les médias comptent tels qu’Elabora les prépare pour ce réglage, avec la narration et le lecteur.
- **L’énergie d’un gigaoctet** : 0,03 kWh pour le réseau (fixe avec la box, ou mobile), le centre de données et le CDN. C’est la moyenne française la plus récente (Arcep, données 2024 : 0,02 kWh sur une ligne fixe, 0,14 sur mobile). Elle était de 0,08 kWh en 2020 (ADEME et Arcep) et de 0,065 en 2022 : elle continue de baisser, si bien que ce chiffre restera une bonne approximation sans devoir être mis à jour.
- **Le geste** : une ampoule LED de 8 W, l’équivalent de l’ancienne ampoule de 60 W. 100 Mo, c’est 3 Wh, soit une ampoule allumée 22 minutes et demie : Publier arrondit à 25 minutes.

Les deux côtés de la comparaison sont de l’électricité : elle vaut donc dans tous les pays.

L’ordinateur ou le téléphone de l’apprenant n’est pas compté : il consomme autant, quel que soit le poids du module. Sa part dépend du temps passé sur le module, et surtout de sa fabrication (voir plus bas).

## Pourquoi les chiffres varient tant

On lit pour un gigaoctet des valeurs qui vont de moins de 0,01 à près de 1 kWh. Les écarts tiennent surtout à trois choses.

- **Ce que l’on compte.** Un réseau consomme presque autant qu’il transporte peu ou beaucoup de données : entre 2015 et 2018, la consommation des opérateurs européens est restée stable alors que le trafic triplait. Ce qu’ajoute vraiment un gigaoctet de plus est donc faible, autour de 0,005 kWh sur une ligne fixe. Diviser toute l’énergie des réseaux par tout le trafic donne une moyenne plus haute ; c’est elle qu’Elabora utilise.
- **Le réseau.** Un gigaoctet sur un réseau mobile coûte de 3 à 7 fois plus que sur une ligne fixe : 0,14 kWh en France, si tous les apprenants suivaient le module sur mobile.
- **L’année.** Sur les réseaux fixes, l’énergie par gigaoctet a été divisée par deux environ tous les deux ans depuis 2000. Les chiffres très élevés qui ont circulé en 2019 reposaient sur des moyennes mondiales de 2017, et l’un d’eux confondait octets et bits : il a été corrigé depuis.

## Et le carbone ?

Le carbone dépend de l’électricité du pays. L’icône à la fin de la phrase le dit avec une voiture à essence compacte (170 g de CO₂ par kilomètre, fabrication comprise), selon le pays réglé sur votre ordinateur. Les pays sont rangés en quatre grandes bandes, qui bougent peu d’une année à l’autre :

| Électricité, par kWh | Exemples | Valeur comptée | 100 Mo chargés |
|---|---|---|---|
| moins de 100 g de CO₂ | France, Suisse, Suède, Norvège | 100 g | 0,3 g, une voiture sur 2 mètres |
| de 100 à 300 g | Belgique, Espagne, Canada, Royaume-Uni, Italie | 300 g | 0,9 g, 5 mètres |
| de 300 à 500 g | Allemagne, États-Unis, Japon, Côte d’Ivoire, moyenne mondiale | 500 g | 1,5 g, 9 mètres |
| plus de 500 g | Maroc, Tunisie, Algérie, Sénégal, Pologne, Chine, Inde, Australie | 700 g | 2,1 g, 10 mètres |

Chaque bande compte sa valeur haute, par prudence. Un pays que la table ne connaît pas prend la moyenne mondiale, et l’icône le dit. Ces chiffres ne comptent que l’électricité que consomme le réseau : avec la fabrication de ses équipements, l’ADEME compte en France environ 10 g de CO₂ par gigaoctet (données 2020).

## Ce qui compte davantage que le poids

En France, la fabrication des appareils et des serveurs pèse 60 % de l’empreinte du numérique, et les réseaux 4 % (ADEME et Arcep, données 2022). Un ordinateur portable gardé un an de plus épargne bien plus que tous les mégaoctets qu’on retire d’un module : sa fabrication pèse autant que charger un module de 100 Mo deux cent mille fois.

Le poids reste un levier utile, surtout pour la vidéo et le mobile. Une heure de vidéo en haute définition pèse 2 à 3 Go, autant que vingt modules ordinaires. Quelques gestes simples :

- choisir la qualité **Allégée** quand la vidéo n’a pas besoin de plus : elle pèse souvent deux à trois fois moins ;
- garder la vidéo pour ce qu’elle montre mieux qu’une image ou un texte ;
- faire des modules courts et utiles : le temps que l’apprenant passe devant son écran compte plus que les mégaoctets.

## Les sources

- ADEME et Arcep, *Évaluation de l’impact environnemental du numérique en France et analyse prospective*, volet 2, janvier 2022 (données 2020), et sa mise à jour de 2025 (données 2022).
- Arcep, *Enquête annuelle « Pour un numérique soutenable »*, éditions 2024 et 2026.
- Arcom, Arcep et ADEME, *Étude de l’impact environnemental des usages audiovisuels*, octobre 2024.
- Carbon Trust, *Carbon impact of video streaming*, juin 2021.
- G. Kamiya (Agence internationale de l’énergie), *The carbon footprint of streaming video: fact-checking the headlines*, 2020.
- J. Aslan, K. Mayers, J. Koomey et C. France, « Electricity intensity of Internet data transmission », *Journal of Industrial Ecology*, 2018.
- J. Lundén, J. Malmodin et al., « Electricity consumption and operational carbon emissions of European telecom network operators », *Sustainability*, 2022.
- The Shift Project, *Did The Shift Project really overestimate the carbon footprint of online video?*, juin 2020.
- Ember, données annuelles de l’électricité, version d’avril 2026 (données 2025), reprises par Our World in Data.
- ADEME, [impactco2.fr](https://impactco2.fr) : « Go de données », « Voiture compacte essence ».
