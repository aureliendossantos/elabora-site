---
title: Créer un module
description: Décrire le module, joindre les documents du client, préciser la demande et laisser votre IA écrire le premier plan.
slug: creer-un-module
group: create
order: 1
---

Tout commence sur l’accueil, avec **Nouveau module**. La page qui s’ouvre demande **Que voulez-vous créer ?**. Rien n’est créé tant que vous n’avez pas cliqué sur un des boutons du bas, et ce que vous écrivez reste là tant que l’app est ouverte : vous pouvez revenir à vos modules et reprendre plus tard.

<!-- capture: la page Nouveau module avec une demande écrite, deux documents joints et les questions dessous -->

## Décrire ce que vous voulez

Écrivez votre demande comme à un collègue : le sujet, pour qui, ce que les apprenants sauront faire à la fin.

> Un module d’environ 15 minutes pour les techniciens du support : diagnostiquer une panne réseau en trois étapes, avec un cas pratique à la fin.

## Joindre les documents du client

**Joindre des documents** ouvre le menu **Type de document**. Le type que vous choisissez dit à votre IA quoi en faire :

- **Storyboard ou notes** : l’IA suit son découpage et reprend ses textes.
- **Maquette PowerPoint** : ses diapositives deviennent des écrans, ses textes sont repris.
- **Module existant** (**Bêta**) : un module Storyline ou Rise, qu’Elabora importe. Voir [reprendre un module Storyline ou Rise](/fr/docs/importer-storyline-rise/).
- **Vidéo ou enregistrement** : une conférence, un entretien, transcrits sur votre ordinateur.
- **Autres documents** : le brief du client, des procédures, les notes de l’expert. L’IA en tire les objectifs et cite ses sources.
- **Page web…** : collez son adresse, l’IA la lit et la cite.

Vous pouvez aussi glisser des fichiers sur la page. Chaque document apparaît comme une étiquette au-dessus de la demande ; sa croix le retire.

Une maquette, un storyboard ou une vidéo ajoute sa propre question : pour une maquette, **La suivre de près**, **S’en inspirer** ou **Seulement ses textes** ; pour un storyboard, **Validé par le client** (ses textes sont repris à l’identique) ou **Encore un brouillon** ; pour une vidéo, **En tirer la transcription** ou **La montrer dans le module**.

## Où vont vos documents

Ils sont copiés dans le dossier `sources` du module. À l’ouverture du module, Elabora en fait, en arrière-plan, une version que l’agent lit facilement : un document Word avec ses commentaires et ses modifications suivies, une présentation diapositive par diapositive avec ses notes, un enregistrement transcrit sur votre ordinateur. Si un enregistrement attend le modèle de transcription, un message le dit, avec **Télécharger le modèle (…)** et **Plus tard**.

Les sources ne vont jamais dans un paquet ni dans une publication. Elles ne vont dans une archive exportée que si vous cochez **Inclure les sources** (un brief contient souvent des données personnelles). Elabora ne les modifie pas et ne les met pas dans ses sauvegardes : gardez vos originaux.

## Préciser votre demande

Sous **Précisez votre demande**, des questions, toutes facultatives :

- **Pour qui ?** et **Combien de temps ?**
- **En quelle langue ?** (par défaut, celle de l’interface)
- **Quel format ?** : **Des diapositives** (un écran à la fois, comme Storyline) ou **Une page qui défile** (chaque partie se lit en défilant, comme Rise)
- **Des éléments 3D ?**
- **Inclure des voix ?** : **Des voix locales** (gratuites, faites sur votre ordinateur, en français et en anglais), **Des voix ElevenLabs** (plus expressives, avec votre compte) ou **Non**

**Plus de choix** ajoute **Quel objectif métier ?**, **Des quiz ?**, **Un cas à résoudre ?**, **Quel ton ?**, **Accessibilité ?**, **Pour quel LMS ?** et **Quelle charte ?** (**Comme un autre module…** de votre bibliothèque, ou **D’après un document ou un site…** du client).

Une question sans réponse reste en gris, « Claude décide » : l’IA choisit, puis vous dit en tête du plan ce qu’elle a décidé seule. Vous pourrez y revenir.

## Choisir l’IA et voir la demande

Dans le coin de la demande, un menu choisit l’IA qui la recevra (votre IA préférée par défaut), ou **Copier la demande**. **Voir la demande** montre mot pour mot ce que l’IA recevra, avec un bouton **Copier**.

## Créer le module

Près des boutons, une phrase dit ce que l’IA fera d’abord. Cliquez sur ses mots soulignés pour choisir : **un plan, que vous validez** (l’IA attend votre accord avant d’écrire les écrans) ou **un plan, puis tous les écrans** (un premier jet complet ; le plan reste un brouillon tant qu’il n’est pas validé).

- **Créer avec Claude** (ou avec ChatGPT) : le module est créé, vos documents sont copiés, vos réponses gardées dans le module (le public, l’objectif métier et la durée dans le plan, le format et le LMS dans les réglages, le reste en notes pour l’agent). Le module s’ouvre sur sa vue **Plan**, et l’app de votre IA s’ouvre avec la demande. Ce bouton s’active dès que vous avez écrit une demande ou joint un document.
- **Créer manuellement** : le même module, ouvert sur **Diapositive**, sans demande envoyée.
- Sans IA installée, la page le dit (avec **Installer…**) et propose **Créer et copier la demande** : collez-la dans l’IA de votre choix.

Le module s’appelle d’abord « Nouveau module » ; son titre se change dans **Réglages du module**. La suite : [le plan](/fr/docs/plan/).
