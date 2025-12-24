# Générateur de Citations Inspirantes

Un web app simple et élégant pour générer des citations inspirantes en français.

## Fonctionnalités

- **Générateur de citations** - Affiche des citations aléatoires d'auteurs inspirants
- **Copier** - Copie la citation au presse-papiers avec un clic
- **Design moderne** - Interface épurée avec dégradé et animations fluides
- **Responsive** - Fonctionne parfaitement sur tous les appareils

## Fichiers

- `index.html` - Structure HTML de l'application
- `style.css` - Styles CSS avec design moderne
- `script.js` - Logique JavaScript pour les fonctionnalités

## Comment utiliser

1. Ouvrez `index.html` dans votre navigateur
2. Cliquez sur "Nouvelle citation" pour afficher une citation aléatoire
3. Cliquez sur "Copier" pour copier la citation dans le presse-papiers


## Personnalisation

Pour ajouter vos propres citations, modifiez l'array `quotes` dans `script.js`:

```javascript
const quotes = [
  {
    text: "Votre citation ici",
    author: "Nom de l'auteur"
  }
];
```

## Technologies utilisées

- HTML5
- CSS3 (Flexbox, Gradients)
- JavaScript ES6+
