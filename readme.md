# Todo App - Step 4

> _Notions: formulaires_

### Créer un formulaire d'ajout de todo

Le but est de créer un formulaire permettant d'ajouter un todo à notre liste.
Il faudra pour cela créer les composants `Input`, `Button` et `TodoAddForm`.
Lors de la validation du formulaire, on remonttra la valeur de l'input _(le nom d'un todo)_ jusqu'au composant `App`.

##### _Le composant `Input` :_

- [ ] Aura comme **props** `id`, `label`, `value`, `type` et `onChange`.
- [ ] Importer le fichier scss fourni correspondant au composant.
- [ ] Le composant doit retourner une `<div>` avec la class `mc.container`, et avec comme enfants directs un `<label>` et un `<input />`. Ajouter les attributs nécessaire à ces balises.

##### _Le composant `Button` :_

- [ ] Aura comme **props** `text`, `type` et `onClick`.
- [ ] Importer le fichier scss fourni correspondant au composant.
- [ ] Le composant doit retourner une `<div>` avec la class `mc.container`, et avec comme enfant direct un `<button>`. Ne pas oublier le texte du bouton et les attributs nécessaires.
- [ ] Lors de l'évenement click, executer la fonction `onClick` _(provenant d'un parent via les **props**)_ seulement si le bouton est de type `button`.

##### _Le composant `TodoAddForm` :_

- [ ] Aura un **state** dédié à la valeur de l'input qu'il contiendra
- [ ] Le composant doit retourner une balise `<form>` avec la class `mc.container`. Cette balise a comme enfants directs le composant `Input` et le composant `Button`. Envoyer toutes les **props** nécessaires à ces deux composants.
- [ ] Penser à bien récupérer et actualiser la valeur du composant `Input` à travers sa **props** `onChange`
- [ ] Au moment du `submit` du formulaire, afficher un `console.log` de la valeur de l'input
- [ ] Ajouter le composant `TodoAddForm` dans le _return_ du composant `App`, en tant que premier enfant de la `<div>` ayant la class `mc.container`
