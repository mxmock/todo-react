# Todo App - Step 7

### Modifier un todo

Le but est d'afficher une icone de modification à côté de chaque todo; lors du click sur cette icone, le todo associé doit passer en **mode** édition.
Ce **mode** affichera le todo dans un `<Input />` modifiable et non plus dans un simple `<span>`.
Une fois le todo modifié via l'input et lors de l'appuie sur la touche `Entrée`, la modification s'enregistre _(mise à jour de la liste des todos avec le todo modifié)_.
Lors de l'appuie sur la touche `Echap`, la modification est annulée.

##### _Dans `Input.jsx` :_

- [ ] Modifier le composant `Input` pour qu'il puisse maintenant écouter un évenement `keydown` et éxecuter une fonction provenant d'un parent lors de cet événement _(**lifting state up**)_

##### _Dans `TodoItem.jsx` :_

- [ ] Ajouter une **props** `onUpdate` qui sera une fonction transmise par un parent.
- [ ] Mettre en place un systeme de **mode** à l'aide d'un **state**. Le mode sera soit en lecture, soit en édition.
- [ ] Le contenu de la balise `<li>` dependra maintenant du **mode** activé: dans le mode lecture il y aura le `<span>` actuel contenant le nom du todo. A côté de ce premier `<span>`, il y en aura un deuxieme ayant les class `mc.icon` et `mc.edit` ainsi qu'un événement `onClick`. En mode édition, nous verrons dans le `<li>` un composant `<Input />` et à côté un `<span>` avec les class `mc.icon` et `mc.cancel` ainsi qu'un événement `onClick`.
- [ ] Lors du click sur ces icones, changer le **mode** en conséquence _(modification du **state**)_.
- [ ] Ne pas oublier de gérer un **state** pour la valeur de l'input _(lors du `onChange`)_.
- [ ] En mode édition, lors de l'appuie sur la touche Entrée, executer la fonction `onUpdate` transmise par le composant parent _(`TodosList`)_. Cette fonction prendra en paramètre l'id et la nouvelle valeur du todo modifié, puis repasser en mode lecture.

##### _Dans `TodosList.jsx` :_

- [ ] Ajouter une **props** `onUpdateTodo` qui sera une fonction transmise par son parent _(`App`)_.
- [ ] Créer une fonction qui executera `onUpdateTodo` _(toujours avec les paramètres `id` et `value`)_.
- [ ] Transmettre cette fonction au composant `TodoItem` via son attribut `onUpdate`.

##### _Dans `App.jsx` :_

- [ ] Créer une fonction qui créera une nouvelle liste de todos à partir des éléments de la liste d'origine mais avec le todo modifié. Cette fonction aura un paramètre `id` et un paramètre `name`.
- [ ] Transmettre cette fonction au composant `TodosList`.
