# Todo App - Step 13

### Ajout du thunk middleware

Le but est d'utiliser le thunk middleware afin de récupérer une liste de todos depuis un serveur web distant.
On utilisera donc une fonction asynchrone _(call d'api via `fetch`)_.
Une fois la liste récupérée, on pourra mettre à jour le state des todos afin d'actualiser la liste de base avec cette nouvelle liste.

##### Dans `todos-reducers.js`

- [ ] Créer un nouveau cas via un nouveau type d'action `READ`, qui s'occupera d'actualiser la liste des **todos** par une nouvelle liste _(nouvelle liste transmise par l'action)_.

##### Création d'un service _(dédié à l'exploitation de données externes)_

- [ ] Créer un dossier `services`.
- [ ] Dans ce dossier, créer un fichier `read-todos.service.js`.
- [ ] Dans ce fichier, créer une fonction qui s'occupera de récupérer une liste de todos via `fetch`, en utilisant l'url suivante: _https://jsonplaceholder.typicode.com/todos?userId=1_; puis retourner le resultat.
- [ ] Créer une _fonction thunk_ _(voir la signature d'une fonction thunk)_ qui exploitera les données récupérées par la fonction précédente, et mettra à jour le **state** des todos via son `dispatch()`.

##### Dans `App.jsx`

- [ ] Utiliser le hook `useEffect` pour récupérer la liste des **todos** à chaque chargement du composant.
- [ ] Dans la fonction du `useEffect`, il faudra executer le `dispatch()` en lui transmettant la _fonction thunk_ créée dans le service dédié.

##### Dans `index.js` _(index.js)_

- [ ] Pour que tout cela fonctionne correctement et que le _thunk middleware_ s'execute, il ne faut pas oublier d'importer celui-ci.
- [ ] Puis de l'ajouter parmis les middlewares existant _(toujours en premier de la liste)_.

##### Bonus 1

- [ ] Implémenter un état de chargement lors de la récupération de la liste des todos

##### Bonus 2

- [ ] Utiliser des fonctions qui renvoies les actions de chacun des reducers
