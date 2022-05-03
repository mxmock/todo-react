# Todo App - Step 12

### Ajout d'un middleware

Le but est d'ajouter un middleware dédié à la gestion des logs, plutôt que de passer par un dispatch systematique lors de la moindre modification de la liste de todos.
On va donc intercepter les actions des todos, et logger l'action en conséquence.

##### Dans `TodoAddForm.jsx`

- [ ] On commence par supprimer le `dispatch()` concernant l'ajout d'un **log**.

##### Création du middleware

- [ ] Créer un fichier nommé `logMiddleware.js`.
- [ ] Créer une fonction middleware _(respecter la signature d'une fonction middleware)_.
- [ ] Dans cette fonction, intercepter l'action concernant la création d'un nouveau **todo** et **dispatcher** l'action de création d'un **log** pour ce cas précis _(store.dispatch())_.

##### Intégration du middleware dans `index.js` _(bootstrap)_

- [ ] Importer la fonction `applyMiddleware` de redux, ainsi que le `logMiddleware`.
- [ ] Ajouter le `logMiddleware` dans le store _(dans `createStore` et via `applyMiddleware`)_.
