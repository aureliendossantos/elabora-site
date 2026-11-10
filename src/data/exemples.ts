/* The sample modules the home shows: all real, made with Elabora (elabora-core's examples/), published on
   vitrine.elabora.page. A card says what one learns there (phrase); the hero's film shows each one after the
   request that could have started it (demande), in this order (the coffee last: its picture says the least).
   Pictures: public/media/exemples/{fr,en}/<id>.webp, the film's videos public/media/exemples/videos/{fr,en}/<id>.mp4
   (scripts/home-media.mjs). */
import type { Lang } from '../i18n';

type Text = Record<Lang, string>;
export interface Exemple {
  id: string;
  /** The languages the module exists in. */
  langs: Lang[];
  /** The module's title in the visitor's language when it has one, else in its own. */
  title: Text;
  kind: Text;
  phrase: Text;
  demande: Text;
  /** A short recording of the module, shown in the film in place of its picture. */
  video?: true;
}

export const EXEMPLES: Exemple[] = [
  {
    id: 'phishing-by-numbers', langs: ['fr', 'en'], video: true,
    title: { fr: 'L’hameçonnage en chiffres', en: 'Phishing by numbers' },
    kind: { fr: 'Dialogue et graphiques', en: 'Dialogue and charts' },
    phrase: { fr: 'S’entraîner à déjouer l’hameçonnage, jusqu’au faux appel.', en: 'Practise spotting phishing, right up to the fake phone call.' },
    demande: { fr: 'Un module de dix minutes sur l’hameçonnage, pour nos 1200 salariés.', en: 'A ten-minute course on phishing for our 1,200 employees.' },
  },
  {
    id: 'canal-locks', langs: ['fr', 'en'], video: true,
    title: { fr: 'Comment fonctionne une écluse ?', en: 'How do canal locks work?' },
    kind: { fr: '3D à manœuvrer', en: '3D to operate' },
    phrase: { fr: 'Manœuvrer une écluse en 3D pour voir comment l’eau fait monter un bateau.', en: 'Operate a 3D canal lock and see how water lifts a boat.' },
    demande: { fr: 'Expliquer aux enfants comment une écluse fait monter un bateau, en 3D.', en: 'Show children how a canal lock lifts a boat, in 3D.' },
  },
  {
    id: 'orbital-rendezvous', langs: ['fr', 'en'], video: true,
    title: { fr: 'Ralentir pour rattraper', en: 'Slow down to catch up' },
    kind: { fr: 'Laboratoire 3D', en: '3D lab' },
    phrase: { fr: 'Rattraper un satellite en orbite… en freinant.', en: 'Catch a satellite in orbit… by slowing down.' },
    demande: { fr: 'Le rendez-vous orbital en quelques mots, avec un exercice interactif.', en: 'Orbital rendezvous in a few words, with an interactive exercise.' },
  },
  {
    id: 'medieval-charts', langs: ['en'], video: true,
    title: { fr: 'Drawing the sea', en: 'Drawing the sea' },
    kind: { fr: 'Récit illustré', en: 'Illustrated story' },
    phrase: { fr: 'Lire une carte marine du XIVᵉ siècle comme un beau livre.', en: 'Read a fourteenth-century sea chart like a fine book.' },
    demande: { fr: 'Raconter comment on dessinait les cartes marines au Moyen Âge, comme un beau livre.', en: 'Tell how medieval sea charts were drawn, like a beautiful book.' },
  },
  {
    id: 'clockwork', langs: ['fr', 'en'], video: true,
    title: { fr: 'Pourquoi l’aiguille des heures va-t-elle 12 fois moins vite ?', en: 'Why is the hour hand 12 times slower?' },
    kind: { fr: 'Explication interactive', en: 'Interactive explanation' },
    phrase: { fr: 'Ouvrir une horloge et comprendre ses engrenages, un à un.', en: 'Open a clock and understand its gears, one at a time.' },
    demande: { fr: 'Expliquer comment l’aiguille des heures fonctionne, avec un mécanisme qu’on manipule.', en: 'Explain how the hour hand works, with a mechanism people can handle.' },
  },
  {
    id: 'diagnostic-reseau', langs: ['fr', 'en'], video: true,
    title: { fr: 'Diagnostiquer une panne d’impression', en: 'Troubleshooting a network printing failure' },
    kind: { fr: 'Mise en situation', en: 'Scenario' },
    phrase: { fr: 'Trouver ce qui bloque une impression, appareil par appareil.', en: 'Find what blocks a print job, one device at a time.' },
    demande: { fr: 'Apprendre au support de niveau 1 à trouver ce qui bloque une impression réseau.', en: 'Teach first-line support to find what blocks a network print job.' },
  },
  {
    id: 'coffee-in-brief', langs: ['en'],
    title: { fr: 'From cherry to cup', en: 'From cherry to cup' },
    kind: { fr: 'Page à faire défiler', en: 'A page to scroll' },
    phrase: { fr: 'Accueillir les nouveaux baristas, du fruit du caféier à la tasse.', en: 'Welcome new baristas, from the coffee cherry to the cup.' },
    demande: { fr: 'Former nos nouveaux baristas, du fruit à la tasse, en un quart d’heure.', en: 'Train our new baristas, from the fruit to the cup, in fifteen minutes.' },
  },
];

/** The rail's order: workplace subjects first. */
export const RAIL = ['phishing-by-numbers', 'diagnostic-reseau', 'canal-locks', 'coffee-in-brief', 'clockwork', 'orbital-rendezvous', 'medieval-charts'];
