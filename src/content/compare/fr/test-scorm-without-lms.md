---
title: "Tester un paquet SCORM sans LMS"
seo: "Tester un paquet SCORM sans LMS : méthodes gratuites, pas à pas (2026)"
description: "Testez gratuitement un package SCORM avant le LMS du client : déposez-le dans SCORM Cloud, lisez son journal de débogage, vérifiez les moments qui cassent le suivi."
slug: tester-package-scorm-sans-lms
kind: fix
tools: [storyline, rise]
checked: 2026-11-08
summary: "Déposez le paquet dans l’offre gratuite de SCORM Cloud et lisez son journal de débogage. Fermez ensuite l’onglet au milieu d’un écran et rouvrez le module pour vérifier qu’il reprend, puis terminez par un passage dans le LMS du client."
published: 2026-11-09
updated: 2026-11-09
order: 24
faq:
  - q: "Peut-on tester un paquet SCORM gratuitement ?"
    a: "Oui. L’offre Trial de SCORM Cloud est gratuite et sans limite de durée : 3 cours, 5 Go et 10 inscriptions actives réutilisables (page des offres de Rustici, lue le 8 novembre 2026). Le bac à sable public de Moodle est gratuit aussi, et revient à zéro toutes les heures."
  - q: "Un test dans SCORM Cloud suffit-il ?"
    a: "Il montre que le paquet respecte la norme et transmet bien le suivi. Chaque LMS ajoute ses propres règles : sa façon de lancer les modules, la taille de paquet qu’il accepte, la quantité de progression qu’il garde. Un dernier passage dans le LMS du client, avec un apprenant de test, couvre ces règles."
  - q: "Pourquoi les apprenants perdent-ils leur progression en fermant l’onglet ?"
    a: "Certains modules enregistrent la progression seulement au moment où la page se décharge. Depuis Chrome 155 (6 octobre 2026), Chrome n’exécute plus les gestionnaires unload, sur aucun site : ces modules perdent tout ce qui suit leur dernier enregistrement."
---

## Le problème

Votre paquet SCORM fonctionne en aperçu. Le vrai test, c’est le LMS du client : il doit enregistrer l’achèvement, garder la progression et reprendre là où l’apprenant s’est arrêté. Vous n’avez souvent accès à ce LMS qu’à la livraison : il vous faut un autre endroit pour vérifier avant.

Les étapes ci-dessous vont de la plus rapide à la plus complète.

## Les façons de tester un paquet aujourd’hui

1. **Déposez-le dans SCORM Cloud.** SCORM Cloud, de Rustici, joue un paquet comme le ferait un LMS strict. Son offre Trial est gratuite et sans limite de durée : 3 cours, 5 Go et 10 inscriptions actives réutilisables ([offres](https://rusticisoftware.com/products/scorm-cloud/pricing/), lues le 8 novembre 2026). Déposez le ZIP et lancez le module. Ouvrez ensuite son journal de débogage (debug log), qui liste dans l’ordre chaque appel du module au LMS. Pour le trouver, ouvrez les sessions du cours dans la Library, ou activez la Navigation Bar du cours et cliquez sur **View Debug** ([Accessing Debug Logs](https://support.scorm.com/hc/en-us/articles/206163696-Accessing-Debug-Logs-in-SCORM-Cloud), février 2025). Supprimez les anciens cours au fur et à mesure pour rester dans les limites de l’offre.
2. **Essayez-le une heure dans un vrai LMS.** Le bac à sable public de Moodle fait tourner la dernière version (5.3 au 8 novembre 2026) et revient à zéro toutes les heures, à l’heure pile ([sandbox.moodledemo.net](https://sandbox.moodledemo.net/)). Ajoutez le paquet en activité SCORM avec le compte enseignant, puis suivez-le avec le compte étudiant. Tout le monde peut utiliser ces comptes jusqu’à la remise à zéro : testez avec un paquet sans contenu du client.
3. **Lisez les appels.** Vérifiez que le module envoie un statut, un score et un signet (`LMSSetValue` en SCORM 1.2, `SetValue` en SCORM 2004), et qu’il les valide (commit) au fil de la progression. SCORM Cloud liste ces appels dans son journal de débogage. Dans votre propre Moodle, un administrateur peut les journaliser avec le réglage **Activate API debug and tracing**, sous Site administration › Plugins › Activity modules › SCORM package dans l’interface anglaise ([SCORM settings](https://docs.moodle.org/en/SCORM_settings), modifiée le 14 août 2025).
4. **Testez les moments difficiles.** La plupart des problèmes apparaissent hors du parcours idéal :
   - fermez l’onglet au milieu d’un écran, puis rouvrez le module : il doit reprendre à cet endroit ;
   - terminez le quiz, fermez, rouvrez : le statut et le score doivent rester ;
   - lancez-le comme le fait le LMS du client, dans un cadre ou dans une fenêtre pop-up ;
   - terminez-le sur un téléphone.

   Fermer l’onglet compte davantage depuis Chrome 155 (6 octobre 2026). Chrome n’exécute plus les gestionnaires `unload`, sur aucun site, et conseille d’enregistrer quand la page devient masquée ([Deprecating the unload event](https://developer.chrome.com/docs/web-platform/deprecating-unload), mise à jour le 16 octobre 2026). Un module qui enregistre la progression seulement au déchargement perd désormais tout ce qui suit son dernier enregistrement.
5. **Terminez dans le LMS du client.** Chaque LMS ajoute ses propres règles : sa façon de lancer les modules, la taille de paquet qu’il accepte, la quantité de progression qu’il garde. Demandez un compte d’apprenant de test et refaites-y une fois les moments difficiles, avant l’arrivée des apprenants. Nos [profils de LMS](/en/docs/developers/lms-profiles/) (en anglais) listent ces règles pour dix LMS, avec leurs sources.

## Ou laissez Elabora le tester pour vous

Elabora a été conçu autour de ces problèmes, et peut faire ces vérifications pour vous :

- **Aperçu** joue le module dans un LMS simulé, comme l’apprenant le verra une fois livré ([Aperçu et vérifications](/fr/docs/apercu-et-verifications/)).
- **Elabora peut tester le paquet avant la livraison** dans son émulateur de LMS, avec le LMS du client ou tous à la fois, dans chaque mode de lancement, cadre ou pop-up. Chaque passage va au deuxième écran, ferme brusquement la fenêtre, puis relance le module pour vérifier qu’il reprend sur cet écran. Il vérifie aussi le statut et le score que garde le LMS, la fin de la session quand l’apprenant quitte, et qu’une session de révision laisse le statut tel quel.
- **L’émulateur connaît 11 LMS** : SuccessFactors, Workday, Cornerstone, Docebo, Moodle, Totara, 360Learning, Rise Up, SCORM Cloud, Teach Up, et un LMS inconnu aux règles documentées les plus strictes ([profils de LMS](/en/docs/developers/lms-profiles/)).
- **Il teste aussi les paquets d’autres outils.** Elabora peut lancer un paquet Storyline ou Rise dans le même émulateur. Il vérifie que le module trouve le LMS, ouvre une session et enregistre la progression avant la fermeture de la fenêtre. Il liste aussi les valeurs que le LMS refuse et les gestionnaires `unload` qui feraient perdre la progression dans Chrome et Edge. Pour vérifier la reprise et l’achèvement à l’intérieur de ce module, passez par SCORM Cloud et le LMS du client.
- **Il montre ce que contient un paquet** : sa version de SCORM, son fichier de lancement et son score de réussite, les noms de fichiers que certains serveurs refusent, et ses cinq fichiers les plus lourds.

Pour lancer ces vérifications, demandez à votre IA dans Elabora de tester le paquet ([Travailler avec votre IA](/fr/docs/travailler-avec-votre-ia/)).
