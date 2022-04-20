# Todo App - Step 8

> _Notions: hooks, useEffect_

### Ajouter un filtrage

Le but est d'avoir un composant `TodosFilter` qui permettra de filtrer la liste des todos afin d'afficher soit tous les todos, soit uniquement ceux complétés, soit uniquement ceux non complétés.
Ce composant sera composé de trois boutons qui activeront le filtre voulu _(all, completed, uncompleted)_.

##### _Le composant `TodosFilter.jsx` :_

- [ ] Aura les **props** suivantes: `filter`, `click`.
- [ ] Retournera une `<div>` avec la class `mc.container`.
- [ ] Dans cette `<div>` il y aura trois `<button>`, chacun avec une class `mc.active`, si et uniquement si, `filter` vaut la valeur de filtre que le bouton doit activer.
- [ ] Chaque bouton doit porter l'événement `onClick`. Cet événement doit executer la fonction `click` avec en paramètre le filtre voulu.

##### _Dans `App.jsx` :_

- [ ] Créer un **state** qui conservera l'état du filtre séléctionné, avec comme valeur par défaut le filtre affichant tous les todos.
- [ ] Créer un **state** qui conservera l'état de la liste filtrée, avec comme valeur par défaut la liste `TODOS`.
- [ ] Ajouter `<TodosFilter />` en tant que premier enfant de la `<div>` ayant la class `mc.list`.
- [ ] Envoyer à ce composant le **state** du filtre, et la fonction permettant de mettre à jour le filtre séléctionné _(le **state** donc)_.
- [ ] Créer une fonction qui mettra à jour la liste des todos filtrés. Dans cette fonction on créé une nouvelle liste à partir de la liste `todos`, et en fonction du filtre séléctionné. Puis mettre à jour le **state** des todos filtrés avec cette nouvelle liste.
- [ ] Utiliser un effet de bord _(**useEffect**)_, qui executera la fonction qui vient d'être créée, à chaque fois que l'état du filtre change et que l'état de la liste `todos` change.
