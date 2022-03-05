# Todo App - Step 1

- [ ] Créer une constante `TODOS` qui contient une liste d'objets, apparentés à un todo. Un todo est un objet JS qui contient les propriétés `id`, `name`, `isCompleted` et `isDeleted`
- [ ] Créer un composant nommé `App` qui _return_ "" pour le moment
- [ ] Créer un composant nommé `Todos` qui _return_ "" pour le moment
- [ ] Créer un composant nommé `Todo` qui _return_ "" pour le moment
- [ ] Le composant `Todo` doit avoir une variable nommée `name` associée au nom d'un todo, sous forme de string, et provenant de la __props__ du composant
- [ ] Le composant `Todo`doit maintenant _return_ une balise `<li class='todo'></li>` qui affiche la valeur de la variable `name`.
- [ ] Le composant `Todos` doit avoir une variable nommée `allTodos` qui est une liste de todos (liste d'objet JS correspondant à un todo), et provenant de la __props__ du composant
- [ ] Le composant `Todos` doit maintenant _return_ une balise `<ul class="todos"></ul>` qui affiche autant de composants `<Todo />` que contient l'array `allTodos`
- [ ] Le composant `App` doit maintenant _return_ le composant `<Todos />` avec comme __props__ la liste de tous les todos.