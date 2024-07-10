```markdown
# Jeu Connect 4

Ceci est un jeu Connect 4 développé en utilisant Vite, TypeScript, et déployé sur GitHub Pages. Le jeu permet à deux joueurs de choisir la couleur de leurs pièces et de jouer une partie traditionnelle de Connect 4 dans le navigateur.

## Table des matières

- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Exécution du jeu en local](#exécution-du-jeu-en-local)
- [Déploiement](#déploiement)
- [Jouer au jeu](#jouer-au-jeu)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Structure du projet

```
Intermediate_JavaScript/
└── Classe_ES6/
    └── connect_four_OO/
        └── connect4_oo/
            ├── dist/
            ├── node_modules/
            ├── public/
            ├── src/
            │   ├── connect4.css
            │   ├── main.ts
            │   └── index.html
            ├── .gitignore
            ├── package.json
            ├── README.md
            └── vite.config.ts
```

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/<votre-utilisateur>/<votre-repo>.git
   cd Intermediate_JavaScript/Classe_ES6/connect_four_OO/connect4_oo
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

## Exécution du jeu en local

Pour exécuter le jeu en local, utilisez la commande suivante :
```bash
npm run dev
```

Ouvrez votre navigateur et accédez à l'adresse `http://localhost:3000` pour jouer au jeu.

## Déploiement

Pour déployer le jeu sur GitHub Pages, suivez les étapes suivantes :

1. Configurez les chemins de base dans le fichier `vite.config.ts` :
   ```typescript
   import { defineConfig } from 'vite';

   export default defineConfig({
     base: '',
     build: {
       outDir: 'dist',
     },
   });
   ```

2. Ajoutez le script de déploiement dans `package.json` :
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "serve": "vite preview",
       "deploy": "gh-pages -d dist"
     },
     "devDependencies": {
       "vite": "^2.4.4",
       "gh-pages": "^3.2.3"
     }
   }
   ```

3. Installez `gh-pages` :
   ```bash
   npm install --save-dev gh-pages
   ```

4. Construisez et déployez le projet :
   ```bash
   npm run build
   npm run deploy
   ```

5. Activez GitHub Pages dans les paramètres de votre dépôt sur GitHub en sélectionnant la branche `gh-pages` comme source.

## Jouer au jeu

Pour jouer au jeu en ligne, accédez à l'URL `https://github.com/Escanor1986/Intermediate_JavaScript/tree/main/Classe_ES6/connect_four_OO/connect4_oo`.

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre des problèmes et des demandes de tirage pour améliorer le projet.

## Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.
```
