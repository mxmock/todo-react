# Todo App - Step 6

> _Notions: props, states, lifting state up_

### Modifier un todo

##### _Dans `Input.jsx` :_

- [ ] Modifier le composant `Input` pour qu'il puisse maintenant écouter un évenement `keydown` et éxecuter une fonction provenant d'un parent lors de cet évenement (lifting state up)


##### _Dans `Todo.jsx` :_

- [ ] La balise `<li>` doit maintenant contenir deux `<span>`; le premier contenant le nom du todo, le deuxième sera l'icone de modification avec une classe `edit`
- [ ] L'évenement click doit être porté maintenant par le premier `<span>` et non plus par le `<li>`
- [ ] Faire en sorte que lors du click sur l'icone de modification, au lieu d'afficher simplement le nom du todo, c'est un `<input>` qui apparaîtra avec le nom du todo affiché dedans. Après ce click, le `<span>` contenant l'icone aura une class `cancel` au lieu de `edit`. (Gestion d'un mode lecture/édition)
- [ ] Faire en sorte de pouvoir modifier la valeur de l'input
- [ ] Lors du click sur l'icone d'annulation, réafficher la vue classique avec simplement le nom du todo et l'icone de modification (les deux `<span>` d'origine)
- [ ] En mode édition, lors de l'appuie sur la touche Entrée, executer une fonction d'update transmise par le composant parent (Todos). Cette fonction prendra en paramètre l'id et la nouvelle valeur du todo modifié, puis repasser en mode lecture


##### _Dans `Todos.jsx` :_

- [ ] Ajouter une __props__ d'update qui sera une fonction transmise par son parent (`App`)
- [ ] Créer une fonction qui créera une nouvelle liste de todos à partir des éléments de la liste d'origine mais avec le todo modifié. Cette fonction aura un paramètre `id` et un paramètre `value`, puis sera transmise au composant `Todo`
- [ ] Dans cette fonction, on executera également la fonction de mise à jour de la liste des todos transmise par `App`

##### _Dans `App.jsx` :_

- [ ] Envoyer la fonction d'update de liste au composant `Todos`.

##### _Bonus :_

- [ ] Permettre l'annulation d'une modification de todo avec la touche `Escape`
