---
title: Modèles testés
description: Comment les IA s’en sortent sur six demandes d’auteur réelles dans Elabora, en combien de temps, et ce qu’elles coûtent.
slug: modeles-testes
group: more
order: 5
---

Nous essayons les IA sur un banc d’essai : six demandes d’auteur réelles, sur une copie du même module (retoucher une phrase, réorganiser un écran, ajouter une question prévue au plan, traduire un écran, ajouter des sons, trouver un défaut qui ne se voit qu’à l’écran). Chaque résultat est vérifié automatiquement, par des contrôles écrits à l’avance.

Dernier passage : 4 novembre 2026, avec la version en cours d’Elabora (après la 0.5.1) et OpenCode 2.2.5.

## Les modèles gratuits du chat

Ce sont ceux que propose le chat d’Elabora, avec OpenCode, sans compte ni clé. Deux passages chacun, dans les règles du chat.

| Modèle | Réussite | Temps typique | Coût |
|---|---|---|---|
| DeepSeek V4.1 Flash | 12 sur 12 | 1 min 30 | gratuit |
| GLM-5.3 Flash | 11 sur 12 | 2 min 20 | gratuit |

- **DeepSeek V4.1 Flash** : le plus sûr. Il lit la documentation d’Elabora, vérifie à l’écran et signale ce qu’il remarque en passant. Glisse rarement une phrase en anglais.
- **GLM-5.3 Flash** : économe et efficace ; a une fois retouché la mauvaise phrase. Passé le 1er novembre, avant que le chat demande des réponses finales plus courtes, donc sa ligne n’est pas tout à fait comparable à celle de DeepSeek.

## Pour comparaison

Mêmes demandes, le 1er novembre 2026, un seul passage chacun.

| Modèle | Réussite | Temps typique | Coût par demande |
|---|---|---|---|
| Claude Haiku 5.5 | 5 sur 6 | 30 s | environ 1 centime de dollar |
| Claude Sonnet 5.5 | 6 sur 6 | 45 s | environ 15 centimes de dollar |
| GPT 6 Luna | 5 sur 6 | 50 s | inclus dans l’abonnement ChatGPT |
| GPT 6.1 Terra | 6 sur 6 | 40 s | inclus dans l’abonnement ChatGPT |

- **Claude Haiku 5.5** : rapide et très bon marché ; n’a pas trouvé comment modifier un composant.
- **Claude Sonnet 5.5** : le plus régulier, et les explications les plus claires.
- **GPT 6 Luna** : rapide ; a retouché la mauvaise phrase.
- **GPT 6.1 Terra** : rapide et sûr.

Claude a tourné dans les règles du chat d’Elabora, par OpenCode, avec une clé d’API payée à l’usage. GPT a tourné dans Codex, avec son propre terminal : ce n’est pas tout à fait la même épreuve, car Codex peut modifier les fichiers lui-même, là où le chat oblige à passer par les outils d’Elabora.

## Les limites de ces chiffres

- **Peu de passages.** Deux par modèle gratuit, un pour les autres : un écart d’une demande ne prouve rien.
- **Les modèles gratuits changent sans prévenir.** Leur fournisseur peut les mettre à jour, les remplacer ou les retirer : un résultat vaut à sa date.
- **Une vérification automatique dit si la demande est faite**, pas si le texte est bien écrit. Nous relisons les réponses, mais ce jugement n’est pas dans le tableau.
- **Les temps dépendent de la charge** des serveurs et de l’ordinateur : ils donnent un ordre de grandeur.

Pour choisir votre IA, voir [Travailler avec votre IA](/fr/docs/travailler-avec-votre-ia/).
