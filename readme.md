# Todo App - Step 2

> _Notions: events, states, hooks, lifting state up_

### Marquer un todo comme étant "complété"

Le but est de faire remonter un événement click depuis le composant `TodoItem` jusqu'au composant `App`
Lorsque `App` reçoit cet événement, il mettra à jour la liste de tous les todos en modifiant la propriété `isCompleted` du todo qui a été cliqué, à l'aide de l'id de celui-ci qui aura été transmis depuis `TodoItem`.

##### _Dans le composant `TodoItem` :_

- [ ] Ajouter les **props** `id`, `isCompleted` et `onComplete`. La **props** `id` sera l'id du todo, `isCompleted` son état, et `onComplete` la fonction transmise par le parent.
- [ ] Ajouter sur la balise `<li>` la class `todo--completed` si le todo est complété _(props `isCompleted` égale `true` ?)_.
- [ ] Créer une fonction qui executera la fonction `onComplete` passée en tant que **props** _(cette fonction aura un paramètre `id`)_.
- [ ] Ajouter un événement `onClick` sur le `<span>`, cet événement doit executer la fonction créée précédemment.

##### _Dans le composant `TodosList` :_

- [ ] Ajouter la **props** `onCompleteTodo`. Ce sera la fonction transmise par `App`.
- [ ] Créer une fonction qui executera la fonction `onCompleteTodo` passée en tant que **props** _(cette fonction aura un paramètre `id`)_.
- [ ] Transmettre désormais les attributs `id`, `isCompleted` et `onComplete` au composant `TodoItem`.

##### _Dans le composant `App` :_

- [ ] Créer un **state** de la liste de tous les todos ayant comme valeur par défaut `TODOS` _(`[todos, setTodos]`)_.
- [ ] Créer une fonction qui met à jour le **state** avec la valeur modifiée du todo qui a été cliqué _(l'id du todo cliqué sera en paramètre de cette fonction)_.
- [ ] Transmettre cette fonction au composant `TodosList`.
