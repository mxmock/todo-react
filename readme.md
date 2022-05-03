# Todo App - Step 11

### Ajouter un systeme de log

Le but est d'ajouter un message de log (dans un composant dédié) lors de l'ajout d'un todo.
Un log est un objet js composé d'une propriété `date` _(heure de l'ajout)_ et une propriété `name`.

##### Le reducer

- [ ] Créer un reducer permettant d'initialiser un state _(qui comportera la liste de logs)_.
- [ ] Traiter l'action d'ajout d'un log.
- [ ] Créer un fichier `index.js` dans le dossier `reducers`; dans ce fichier, importer les deux reducers _(todos et logs)_ puis exploiter le `combineReducers`.

##### Dans `index.js` _(bootstrap du projet)_

- [ ] Importer désormais le reducer combiné et créer un store avec celui-ci

##### Le composant `LogsList`

- [ ] Créer un composant `LogsList` qui prend en **props** une liste `logs` et retourne la structure html suivante :

```html
<div className="{mc.container}">
  <pre>
    <ul>
      <!-- ici des <li> représentant un log -->
    </ul>
  </pre>
</div>
```

##### Dans `App.jsx`

- [ ] Récupérer la liste des **logs** via `useSelector` _(en plus de la liste des todos)_.
- [ ] Ajouter le composant `LogsList` juste après le composant `TodoAddForm` _(sans oublier de transmettre la liste de logs)_.

##### Dans `TodoAddForm.jsx`

- [ ] Lors de l'ajout d'un todo, créer un `log` avec son heure et son nom puis l'ajouter à la liste du state global via `useDispatch`.
