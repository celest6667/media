# Mediapp - MOVIX

## Installation et lancement

```bash
# Cloner le projet
git clone <url_du_projet>
cd mediapp

# Installer les dépendances
npm install

# Lancer le serveur de dev
npm run dev

# Générer la build
npm run build

## Arborescence

mediapp/
├─ index.html                 # Page principale avec la grille de films
├─ films/                     # Pages de détail des films
│  ├─ Interstellar.html
│  ├─ Superman.html
│  ├─ Conjuring - L'Heure du Jugement.html
│  ├─ Le Parrain.html
│  ├─ Fight Club.html
│  ├─ Les Évadés.html
│  └─ The Dark Knight.html
├─ public/                     # Assets (images, icônes)
│  └─ assets/
├─ src/
│  └─ sass/
│     ├─ components/           # SCSS des composants (header, fiche-film, badges, ...)
│     └─ main.scss             # SCSS global
├─ package.json
└─ vite.config.js