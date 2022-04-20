# Todo App - Step 5

> _Notions: state update_

### Actualiser la liste

Désormais, au lieu de simplement afficher un `console.log` lors du submit, nous allons créer un nouveau todo à partir du nom de la tâche renseignée dans le formulaire.
Le todo ainsi créé va être remonté jusqu'au composant `App`, puis la liste des todos déjà existants va être actualisée avec ce nouveau todo.

##### _Lors du submit dans `TodoAddForm` :_

- [ ] Récuperer dans une const `now` l'instant présent grâce à `Date.now()`.
- [ ] Créer un objet js avec les propriétés suivantes: `id` qui aura pour valeur l'instant présent, `name` qui aura la valeur de l'input rempli par l'utilisateur, et `isCompleted` qui sera `false`.
- [ ] Via une fonction transmise par le parent _(**props**)_, transmettre ce nouveau todo à `App`.
- [ ] Penser à ne pas ajouter de todo si l'input est vide lors du submit, et à réinitialiser l'input après l'ajout.

##### _Dans `App` :_

- [ ] Créer une fonction assurant la gestion de l'ajout d'un todo _(elle sera transmise à `TodoAddForm`)_.
- [ ] Dans cette fonction, créer une nouvelle liste avec les todos de l'ancienne liste + le nouveau à insérer.
- [ ] Mettre à jour l'ancienne liste avec cette nouvelle liste.
