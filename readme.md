# Todo App - Step 5

> _Notions: props, states, lifting state up_

### Actualiser la liste

- [ ] Envoyer la liste de tous les todos au composant `AddTodoForm`
- [ ] Envoyer la fonction `updateList` au composant `AddTodoForm`

##### _Lors du submit dans `AddTodoForm` :_

- [ ] Récuperer dans une const `now` l'instant présent grâce à `Date.now()`.
- [ ] Créer un objet `todo` avec les propriétés suivantes: `id: now, name: inputValue, isCompleted: false`
- [ ] Créer une nouvelle liste avec les todos de l'ancienne liste + le nouveau à insérer
- [ ] Mettre à jour l'ancienne liste avec cette nouvelle liste via `updateList` qui a été transmise