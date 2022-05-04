import { createLog } from "../actions/logs";
import { TODOS_ACTIONS } from "../constants/todos";

const logsMiddleware = (store) => (next) => (action) => {
  if (action.type === TODOS_ACTIONS.CREATE) {
    const name = action.payload.todo.name;
    if (name && name.length > 0) {
      const message = `Tâche ajoutée: ${name}`;
      store.dispatch(createLog(message));
    }
  }
  return next(action);
};

export default logsMiddleware;
