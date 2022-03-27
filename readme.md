# Todo App - Step 4

> _Notions: formulaires_

### Créer un formulaire d'ajout de todo

- [ ] Créer un composant `Input` qui aura comme __props__ `id`, `label`, `value`, `type` et `onChange`
- [ ] Importer le fichier scss correspondant au module
- [ ] Le composant doit retourner une `<div>` avec la class `mc.container`, et avec comme enfant direct un `<label>` et un `<input />`. Ajouter les attributs nécessaire à ces balises
- [ ] Créer un composant `Button` qui aura comme __props__ `text`, `type` et `onClick`
- [ ] Importer le fichier scss correspondant au module
- [ ] Le composant doit retourner une `<div>` avec la class `mc.container`, et avec comme enfant direct un `<button>`. Ne pas oublier le texte du bouton et les attributs nécessaires
- [ ] Créer un composant `AddTodoForm` qui aura un __state__ dédié à la valeur de l'input qu'il contiendra
- [ ] Le composant doit retourner une balise `<form>` avec la class `mc.container`. Cette balise a comme enfant direct le composant `Input` et le composant `Button`. Envoyer toutes les __props__ nécessaires à ces deux composants.
- [ ] Penser à bien récupérer et actualiser la valeur du composant `Input` à travers sa __props__ `onChange`
- [ ] Au moment du `submit` du formulaire, afficher un `console.log` de la valeur de l'input
- [ ] Ne pas oublier d'ajouter le composant `AddTodoForm` dans le _return_ du composant `App`, à côté du composant `Todos`