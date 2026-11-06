---
title: "Storyline 360 flou sur un écran haute résolution ou à 150 % : la solution"
seo: "Storyline 360 flou ou pixelisé sur un écran haute résolution, à 150 % ou dans Parallels : la solution (2026)"
description: "L’interface de Storyline 360 est floue sur un écran 4K, à 125 ou 150 % et dans Parallels. Le réglage de Windows qui la rend nette, ses limites, et Elabora à 150 %."
slug: storyline-flou-haute-resolution
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Depuis 2017, des auteurs signalent une interface de Storyline 360 floue et pixelisée sur les écrans haute résolution, à 125 ou 150 % dans Windows, et dans Parallels sur Mac. Articulate a noté une demande d’amélioration en 2023, et aucun correctif n’est listé jusqu’au build 3.129 (28 octobre 2026). Ce qui marche aujourd’hui : un réglage de compatibilité de Windows, qui rend l’interface nette, mais plus petite. L’interface d’Elabora suit la densité de l’écran : la voici sous Windows à 150 %."
published: 2026-11-06
updated: 2026-11-06
order: 23
faq:
  - q: "Pourquoi Storyline 360 est-il flou à 150 % ?"
    a: "Quand une app se dessine à 100 %, Windows agrandit son image à l’échelle de l’écran, et l’image agrandie est floue. Le réglage de compatibilité ci-dessous laisse Storyline se dessiner lui-même à 100 % : net, mais plus petit."
  - q: "Articulate va-t-il le corriger ?"
    a: "Une demande d’amélioration de la prise en charge des écrans haute résolution est notée depuis 2023, selon le personnel d’Articulate. Au 6 novembre 2026, aucun build de Storyline 360 ne liste de correctif, et le seul point de la feuille de route sur la haute résolution concerne l’enregistreur d’écran."
---

## Le problème

Des auteurs le décrivent de la même façon depuis 2017 : Storyline 360 est « blurry, like it’s out of focus » sur un écran 4K ([Storyline 360 app is blurry in Windows 10 on 4K monitor](https://community.articulate.com/discussions/discuss/storyline-360-app-is-blurry-in-windows-10-on-4k-monitor/968980), 19 réponses). Cela arrive quand Windows met l’affichage à l’échelle au-delà de 100 %, à 125, 150 ou 200 %, et dans Parallels sur l’écran Retina d’un Mac. En 2017, un auteur remarquait déjà que Storyline 2 restait net à 150 %, et Storyline 360 non ([Storyline 360 on a high DPI monitor](https://community.articulate.com/discussions/discuss/storyline-360-on-a-high-dpi-monitor/917065)). Le fil [Storyline 360 UI Still Pixelated on High-DPI Display – Any Updates?](https://community.articulate.com/discussions/discuss/storyline-360-ui-still-pixelated-on-high-dpi-display-%E2%80%93-any-updates/1226027) (mai 2025) reçoit encore des réponses en novembre 2025, depuis un écran 5K sous Parallels, et en mars 2026, à 125 % sur un écran de 3440 × 1440.

## Ce que dit Articulate

- En août 2023, le personnel d’Articulate a répondu qu’une demande d’amélioration était notée pour mieux prendre en charge les écrans haute résolution, et a proposé le réglage de compatibilité ci-dessous ([Pixelated User Interface in Storyline 360](https://community.articulate.com/discussions/discuss/pixelated-user-interface-in-storyline-360/831367)).
- Du build 3.98 (avril 2025) au build 3.129 (28 octobre 2026), aucune entrée de l’historique des versions de Storyline 360 ne parle du flou de l’éditeur ni de sa mise à l’échelle.
- La feuille de route d’Articulate 360 (mise à jour le 5 novembre 2026) parle une fois des écrans haute résolution, pour l’enregistreur d’écran, pas pour l’éditeur.

## La solution dans Storyline aujourd’hui

1. Fermez Storyline 360.
2. Faites un clic droit sur son raccourci ou sur son programme, puis **Propriétés**.
3. Dans l’onglet **Compatibilité**, cliquez sur **Modifier les paramètres de haute résolution**.
4. Cochez **Remplacer le comportement de mise à l’échelle de haute résolution**, et choisissez **Application** pour **Mise à l’échelle effectuée par**.
5. Rouvrez Storyline : l’interface est nette.

Le prix : Storyline se dessine alors à 100 %, donc ses textes et ses boutons paraissent plus petits sur un écran à 150 % ou plus, et des auteurs signalent d’autres soucis d’affichage avec ce réglage. Mettre Windows lui-même à 100 % donne la même netteté, avec tout en petit. Sur Mac, dans Parallels, des auteurs signalent le même flou ([Mac M1 With Parallels: Articulate Storyline is Blurry](https://community.articulate.com/discussions/discuss/mac-m1-with-parallels-articulate-storyline-is-blurry/1012507), 2022) : le réglage ci-dessus s’applique dans la machine virtuelle Windows.

## Ce qu’Elabora fait autrement

L’interface d’Elabora est faite de HTML et de CSS, dessinée par Chromium, le moteur de Chrome, sans réglage qui force une échelle : elle suit la densité de chaque écran. Sur Mac, Elabora est une app pour Mac, sans machine virtuelle.

Ci-dessous, l’éditeur d’Elabora sous Windows à 150 %, en taille réelle : la barre d’outils et le panneau Propriétés, découpés dans une [capture complète](/media/compare/elabora-windows-150.webp) de l’éditeur sur le module d’exemple Phishing by numbers.

[![L’éditeur d’Elabora sous Windows à 150 %, en taille réelle : la barre d’outils avec Comments, Properties et Agent, et le panneau Propriétés d’une réplique de narration, aux textes et icônes nets.](/media/compare/elabora-windows-150-detail.webp)](/media/compare/elabora-windows-150.webp)
