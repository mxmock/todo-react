import { TODOS_ACTIONS } from "../constants/utils";

export const createTodo = (p) => ({ type: TODOS_ACTIONS.CREATE, todo: p });
export const readTodos = (p) => ({ type: TODOS_ACTIONS.READ, todos: p });
export const updateTodo = (p) => ({
  type: TODOS_ACTIONS.UPDATE,
  id: p.id,
  name: p.name,
});
export const deleteTodos = () => ({ type: TODOS_ACTIONS.DELETE });
export const completeTodos = (p) => ({ type: TODOS_ACTIONS.COMPLETE, id: p });
