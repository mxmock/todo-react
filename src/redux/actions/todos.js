import { TODOS_ACTIONS } from "../constants/todos";

export const createTodo = (name) => {
  const todo = { id: Date.now(), name, isCompleted: false };
  return { type: TODOS_ACTIONS.CREATE, payload: { todo } };
};

export const readTodos = (todos) => ({
  type: TODOS_ACTIONS.READ,
  payload: { todos },
});

export const updateTodo = (id, name) => ({
  type: TODOS_ACTIONS.UPDATE,
  payload: { id, name },
});

export const deleteTodos = () => ({ type: TODOS_ACTIONS.DELETE });

export const completeTodo = (id) => ({
  type: TODOS_ACTIONS.COMPLETE,
  payload: { id },
});

export const setLoading = (isLoading) => ({
  type: TODOS_ACTIONS.SET_LOADING,
  payload: { isLoading },
});
