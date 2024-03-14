# Build a Library

Build a Library est un projet visant à moderniser le système d'organisation de Books-‘N-Stuff, une bibliothèque locale. Actuellement, la bibliothèque utilise encore des fiches index pour gérer sa collection, ce qui n'est pas efficace.

## Aperçu

Dans ce projet, nous créons une application JavaScript qui gère trois types de médias : les livres, les CD et les films. Chaque type de média possède son propre ensemble de propriétés et de méthodes, et ils sont organisés en classes et sous-classes.

## Fonctionnalités

- **Classe Media** : La classe `Media` sert de classe parente pour tous les types de médias. Elle contient les propriétés et les méthodes communes partagées par les livres, les CD et les films.
- **Classe Book** : La classe `Book` représente un livre et inclut des propriétés telles que l'auteur, le titre et le nombre de pages. Elle dispose également de méthodes pour calculer la note moyenne et basculer le statut de prêt.
- **Classe Movie** : La classe `Movie` représente un film et inclut des propriétés telles que le réalisateur, le titre et la durée. Tout comme la classe `Book`, elle dispose de méthodes pour calculer la note moyenne et basculer le statut de prêt.
- **Classe CD** : La classe `CD` représente un CD et inclut des propriétés telles que l'artiste, le titre et la liste des chansons. Elle fournit également des méthodes pour calculer la note moyenne et basculer le statut de prêt.

## Utilisation

Pour utiliser l'application, suivez simplement ces étapes :

1. Clonez le dépôt sur votre machine locale.
2. Ouvrez le répertoire du projet dans votre éditeur de code.
3. Accédez au répertoire `src`.
4. Utilisez les classes `Media`, `Book`, `Movie` et `CD` pour gérer la collection de votre bibliothèque.
