# Todo App - Step 9

> _Notions: Redux, React-Redux_

### Installation

Installer **redux** et **react-redux** avec les commandes suivantes:

```
npm install redux
npm install react-redux
```

### Le reducer

- [ ] Créer un dossier `reducers` dans le dossier `src`.
- [ ] Dans `reducers`, créer un fichier `todos-reducer`.
- [ ] Dans ce fichier, créer un **state** initial qui sera un objet js avec une propriété `todos` qui aura comme valeur la liste `TODOS` _(depuis le dossier `constants`)_.
- [ ] Toujours dans `todos-reducer`, créer une fonction qui aura en paramètre un **state** avec comme valeur défaut le **state** initial, et une action avec comme valeur par défaut un objet vide. Cette fonction ne fera pour le moment que retourner le **state**.

### Le store

> _Les étapes suivantes se déroulent dans `index.js`_

- [ ] Créer un **store** via la fonction `createStore` de **redux**, et le stocker dans une variable. _(transmettre à la fonction `createStore` le reducer créé précédemment)_
- [ ] Englober le composant `App` du `Provider` fourni par **react-redux**, en n'oubliant pas l'attribut `store` qui recevra le **store** créé juste avant.
