import { LOGS_ACTIONS, TODOS_ACTIONS } from "../constants/utils";

const logMiddleware = (store) => (next) => (action) => {
  let log = null;

  if (action.type === TODOS_ACTIONS.CREATE) {
    log = {
      date: new Date().getHours() + "h" + new Date().getMinutes(),
      name: `Tâche ajoutée => ${action.todo.name}`,
    };
  }

  if (log) store.dispatch({ type: LOGS_ACTIONS.CREATE, log });

  const returnAction = next(action); // dispatch l'action
  return returnAction; // les autres middlewares...
};

export default logMiddleware;
