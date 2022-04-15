# Todo App - Step 1

> _Notions: JSX, composants fonctionnels, props_

Pour le developpement de cette app nous allons baser toute la logique sur un objet JS correspondant à un todo.
Cet objet aura les propriétés suivantes: `id`, `name` et `isCompleted`.
Il faut garder à l'esprit que ce sera la représentation de nos données, et chaque fois que nos données changent, react réactualisera la vue.

### Créer les composants de base

- [ ] Créer un composant nommé `App`
- [ ] Créer un composant nommé `TodosList`
- [ ] Créer un composant nommé `TodoItem`

##### _Le composant `App` :_

- [ ] Créer une constante `TODOS` qui contient une liste d'objets (5 par exemple), chacun apparentés à un todo.
- [ ] Devra _return_ le composant `<TodosList />` qui aura un **attribut** `todos`, correspondant à la liste de tous les todos.

##### _Le composant `TodosList` :_

- [ ] Devra avoir une **props** nommée `todos` qui sera la liste de todos (tableau d'objet JS correspondant à un todo).
- [ ] Devra _return_ une balise `<ul className="todos"></ul>` qui affichera autant de composants `<TodoItem />` que d'éléments dans l'array `todos`

##### _Le composant `TodoItem` :_

- [ ] Devra avoir une **props** `name` correspondant au nom d'un todo, ce sera une string.
- [ ] Devra _return_ une balise `<li className='todo'></li>`.
- [ ] Dans cette balise, il y aura une balise `<span>` qui affichera la valeur de `name`
