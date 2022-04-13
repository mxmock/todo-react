# Todo App - Step 7

> _Notions: props, lifting state up_

### Supprimer les éléments complétés

##### _Dans `FloatingBtn.jsx` :_

- [ ] Créer un composant `FloatingBtn`, il retournera une balise `<button>` avec une class `container`
- [ ] Il aura les **props** suivantes: `src`, `color` et `click`
- [ ] Créer un objet js qui correspondera au style dynamique du composant; avec les propriétés `backgroundImage` et `backgroundColor`
- [ ] Associer cet objet à l'attribut `style` de la balise `<button>`
- [ ] Lors du click sur le bouton, executer la fonction `click` transmise par le parent _(lifting state up)_

##### _Dans `App.jsx` :_

- [ ] Importer l'icone de la corbeille _(trash-outline)_ depuis le dossier `img`
- [ ] Ajouter le composant `FloatingBtn` dans le _return_ de `App`
- [ ] Créer une fonction qui créera une nouvelle liste à partir des anciens éléments du tableau `todos` mais sans les éléments supprimés, et qui mettra à jour le state `todos` via cette nouvelle liste
- [ ] Transmettre cette fonction au composant `FloatingBtn`
- [ ] Transmettre également au composant l'icone importée et une couleur de fond _(via les **props**)_
