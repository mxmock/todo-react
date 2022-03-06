# Todo App - Step 2

### Marquer un todo comme "complété"

- [ ] Ajouter une variable `isCompleted` dans le composant `Todo` (transmise par le parent direct, via __props__)
- [ ] Faire en sorte que lorsqu'un todo est complété, la class `todo--completed` est ajouté au todo. Puis cette class est retirée si le todo n'est pas complété.
- [ ] Implémenter un event `onClick` sur un todo: lors du click, afficher une `alert` avec le nom du todo qui a été clické
- [ ] Le composant `Todo` a désormais une variable `id` (provenant de son parent direct, via les __props__)
- [ ] Lors du click sur un todo, le composant `Todo` qui a été clické doit maintenant transmettre son `id` à son parent direct (annuler l'`alert` lors du click)
- [ ] Afficher, depuis `Todos`, l'`id` du `Todo` qui a été clické
- [ ] Dans le composant `App`, créer un __state__ `todos` de la liste de tous les todos; avec un état initial qui vaut `TODOS`
- [ ] Toujours dans `App`, créer une fonction `updateList` qui aura pour but de mettre à jour le __state__ (liste `todos`), et qui sera transmise à son enfant direct `Todos`
- [ ] Dans `Todos`, au lieu de simplement afficher l'`id` du todo clické, maintenant modifier la liste `allTodos` en indiquant que le todo clické a désormais une propriété `isCompleted` qui vaut `true`
- [ ] Maintenant renvoyer cette nouvelle liste de todos depuis `Todos` vers `App`, mettre à jour le __state__ avec la nouvelle liste