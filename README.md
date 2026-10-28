# Réviser la Terminale — Histoire-Géographie

Un site de révision pour l'histoire-géographie de Terminale générale (tronc commun, programme de 2019) :
fiches de cours, cartes mémoire, quiz, frises, cartes à compléter, mode aventure et méthode du bac.
Il marche sur téléphone, sans compte ni inscription ; après une première visite, il marche aussi sans connexion.

## Contenu

- **15 fiches** : les 11 chapitres d'histoire et leurs 30 points de passage et d'ouverture, les 4 thèmes de géographie
  avec une ou deux études de cas et la question spécifique sur la France.
- **Pour chaque chapitre** : l'essentiel, les notions, les repères, les personnages, les lieux à placer sur une carte,
  des textes à trous, des intrus, et en géographie des graphiques et un croquis dont on complète la légende.
- **Mode aventure** : un chemin de niveaux par chapitre, un parcours de l'année et un parcours de repères fondamentaux
  (grandes dates, présidents de la Vᵉ République, organisations internationales, détroits, ports, États de l'UE, France).
- **La méthode du bac** : 4 fiches méthode (composition, analyse de document, croquis, bien réviser)
  et 12 ateliers pas à pas : 6 sujets de composition, 5 documents à analyser (appel du 18 juin, Fulton, Schuman, Veil, Badinter)
  et un atelier sur les figurés et la légende du croquis.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | La page (généré, voir plus bas) |
| `cours.js` | Les fiches des chapitres : c'est ici qu'on corrige ou complète le contenu |
| `methode.js` | Les fiches méthode et les ateliers |
| `reperes.js` | Les repères fondamentaux du mode aventure |
| `cartes.js` | Les fonds de carte (généré par `outils/fonds-de-carte.js`, données Natural Earth) |
| `sw.js` | Le fonctionnement hors connexion |

La progression reste sur le téléphone (stockage local, clés `terminale-…`) : rien n'est envoyé nulle part.

## Mettre à jour la page

`index.html` reprend le moteur de la boîte à outils du lycée (`rituels/reviser.html` du dépôt Cahier-de-progression),
sans l'espace professeur ni le défi de classe. Quand ce moteur évolue :

```sh
python3 outils/terminale/fork-terminale.py ../Cahier-de-progression/rituels/reviser.html
```

Si le script s'arrête sur une erreur, c'est qu'un passage du moteur qu'il modifie a changé : il faut adapter le script.
Après une mise à jour de `cours.js` ou de la page, changer le nom du cache dans `sw.js` (`terminale-hg-v2`…)
pour que les téléphones récupèrent la nouvelle version.

## Mise en ligne

Le site est publié par GitHub Pages depuis la branche `main` (Settings → Pages → Deploy from a branch → `main`, dossier `/`).

## Sources

Programme : BO spécial n° 8 du 25 juillet 2019. Graphiques : Lebergott, Kindleberger, BP, SIPRI, CNUCED, Lloyd's List,
Eurostat, Insee, DEPP, OMC, ONU Tourisme (valeurs arrondies, sources indiquées sous chaque graphique).
Fonds de carte : Natural Earth (domaine public). QR codes : qrcode-generator (licence MIT, `vendor/`).
