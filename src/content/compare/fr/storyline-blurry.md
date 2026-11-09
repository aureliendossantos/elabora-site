---
title: "Storyline 360 flou sur un écran haute résolution ou à 150 % : la solution"
seo: "Storyline 360 flou ou pixelisé sur un écran haute résolution, à 150 % ou dans Parallels : la solution (2026)"
description: "Storyline 360 flou sur un écran 4K, à 125 ou 150 % ou dans Parallels ? Le réglage de Windows qui rend l’interface nette, ce qu’il coûte, et Elabora à 150 %."
slug: storyline-flou-haute-resolution
kind: fix
tools: [storyline]
checked: 2026-11-06
summary: "Laissez Storyline dessiner lui-même son interface : dans les Propriétés du programme, onglet Compatibilité, cliquez sur Modifier les paramètres de haute résolution, cochez Remplacer le comportement de mise à l’échelle de haute résolution et choisissez Application. L’interface devient nette, mais plus petite. Jusqu’au build 3.129 (28 octobre 2026), Articulate ne liste aucun correctif pour l’éditeur."
published: 2026-11-06
updated: 2026-11-09
order: 23
faq:
  - q: "Pourquoi Storyline 360 est-il flou à 150 % ?"
    a: "Quand une app se dessine à 100 %, Windows agrandit son image à l’échelle de l’écran, et l’image agrandie est floue. Le réglage de compatibilité ci-dessous laisse Storyline se dessiner lui-même à 100 % : net, mais plus petit."
  - q: "Articulate va-t-il le corriger ?"
    a: "Une demande d’amélioration de la prise en charge des écrans haute résolution est notée depuis 2023, selon le personnel d’Articulate. Au 6 novembre 2026, aucun build de Storyline 360 ne liste de correctif, et le seul point de la feuille de route sur la haute résolution concerne l’enregistreur d’écran."
---

## Le problème

Sur un écran 4K, ou quand Windows met l’affichage à l’échelle à 125, 150 ou 200 %, l’interface de Storyline 360 est floue, « like it’s out of focus » ([Storyline 360 app is blurry in Windows 10 on 4K monitor](https://community.articulate.com/discussions/discuss/storyline-360-app-is-blurry-in-windows-10-on-4k-monitor/968980)). Il en va de même dans Parallels sur l’écran Retina d’un Mac ([Mac M1 With Parallels: Articulate Storyline is Blurry](https://community.articulate.com/discussions/discuss/mac-m1-with-parallels-articulate-storyline-is-blurry/1012507)).

Windows agrandit l’image d’une app qui se dessine à 100 %, et l’image agrandie est floue. La solution ci-dessous laisse Storyline se dessiner à la taille de l’écran.

## La solution dans Storyline aujourd’hui

1. Fermez Storyline 360.
2. Faites un clic droit sur son raccourci ou sur son programme, puis **Propriétés**.
3. Dans l’onglet **Compatibilité**, cliquez sur **Modifier les paramètres de haute résolution**.
4. Cochez **Remplacer le comportement de mise à l’échelle de haute résolution**, et choisissez **Application** pour **Mise à l’échelle effectuée par**.
5. Rouvrez Storyline : l’interface est nette.

Le prix : Storyline se dessine alors à 100 %, donc ses textes et ses boutons paraissent plus petits sur un écran à 150 % ou plus, et des auteurs signalent d’autres soucis d’affichage avec ce réglage. Mettre Windows lui-même à 100 % donne la même netteté, avec tout en petit. Dans Parallels sur Mac, appliquez le réglage dans la machine virtuelle Windows.

## Articulate va-t-il le corriger ?

En août 2023, le personnel d’Articulate a répondu qu’une demande d’amélioration de la prise en charge des écrans haute résolution était notée, et a proposé le réglage ci-dessus ([Pixelated User Interface in Storyline 360](https://community.articulate.com/discussions/discuss/pixelated-user-interface-in-storyline-360/831367)). Jusqu’au build 3.129 (28 octobre 2026), l’historique des versions ne liste aucun correctif du flou de l’éditeur, et la feuille de route d’Articulate 360 (mise à jour le 5 novembre 2026) parle des écrans haute résolution seulement pour l’enregistreur d’écran.

## Ou travaillez dans Elabora, net à toutes les échelles

Elabora a été conçu pour les écrans d’aujourd’hui. Son interface est faite de HTML et de CSS, dessinée par Chromium, le moteur de Chrome : elle suit la densité de chaque écran, à 150 % comme à 100 %. Sur Mac, Elabora tourne comme une app Mac.

Ci-dessous, l’éditeur d’Elabora sous Windows à 150 %, en taille réelle : la barre d’outils et le panneau Propriétés, découpés dans une [capture complète](/media/compare/elabora-windows-150.webp) de l’éditeur sur le module d’exemple Phishing by numbers.

[![L’éditeur d’Elabora sous Windows à 150 %, en taille réelle : la barre d’outils avec Comments, Properties et Agent, et le panneau Propriétés d’une réplique de narration, aux textes et icônes nets.](/media/compare/elabora-windows-150-detail.webp)](/media/compare/elabora-windows-150.webp)
