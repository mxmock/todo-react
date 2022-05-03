# Todo App - Step 12

### Ajout d'un middleware

Le but est d'ajouter un middleware dédié à la gestion des logs, plutôt que de passer par un dispatch systematique lors de la moindre modification de la liste de todos.
On va donc intercepter les actions des todos, et loger l'action en conséquence.
