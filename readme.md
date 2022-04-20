# Todo App - Step 6

### Supprimer les éléments complétés

Le but est de créer un bouton qui supprimera tous les todos complétés de la liste.
Pour cela on va créer un composant `FloatingBtn`, puis actualiser la liste des todos lors du click sur ce bouton.

##### _Le composant `FloatingBtn.jsx` :_

- [ ] Retournera une balise `<button>` avec une class `mc.container`
- [ ] Il aura les **props** suivantes: `src`, `color` et `click`
- [ ] Créer un objet js qui correspondera au style dynamique du composant; avec les propriétés `backgroundImage` et `backgroundColor`
- [ ] Associer cet objet à l'attribut `style` de la balise `<button>`
- [ ] Lors du click sur le bouton, executer la fonction `click` transmise par le parent _(**lifting state up**)_

##### _Dans `App.jsx` :_

- [ ] Importer l'icone de la corbeille _(trash-outline)_ depuis le dossier `img`
- [ ] Créer une fonction qui créera une nouvelle liste à partir des anciens éléments du tableau `todos` mais sans les éléments complétés, et qui mettra à jour le state `todos` via cette nouvelle liste.
- [ ] Ajouter le composant `FloatingBtn` dans le _return_ de `App`, en tant que dernier enfant de la `<div>` ayant la class `mc.container`.
- [ ] Transmettre la fonction créée juste avant au composant `FloatingBtn`
- [ ] Transmettre également au composant l'icone importée et une couleur de fond _(via les **props**)_
