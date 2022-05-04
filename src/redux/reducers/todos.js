import { TODOS_ACTIONS } from "../constants/todos";

const initialState = {
  todos: [],
  isLoading: false,
};

const reducer = (state = initialState, action = {}) => {
  let newList = null;
  const oldList = state.todos;
  const { type, payload } = action;

  switch (type) {
    case TODOS_ACTIONS.CREATE: {
      const newTodo = payload.todo;
      // copie profonde (nested) d'objet
      newList = oldList.map((todo) => ({ ...todo }));
      newList.push({ ...newTodo });
      break;
    }
    case TODOS_ACTIONS.READ: {
      const { todos } = payload;
      newList = todos.map((t) => ({ ...t }));
      break;
    }
    case TODOS_ACTIONS.UPDATE: {
      const { id, name } = payload;
      newList = oldList.map((t) => (t.id === id ? { ...t, name } : { ...t }));
      break;
    }
    case TODOS_ACTIONS.DELETE: {
      const filtered = oldList.filter((todo) => !todo.isCompleted);
      newList = filtered.map((todo) => ({ ...todo }));
      break;
    }
    case TODOS_ACTIONS.COMPLETE: {
      const { id } = payload;
      newList = oldList.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : { ...t }
      );
      break;
    }
    case TODOS_ACTIONS.SET_LOADING: {
      const { isLoading } = payload;
      return { ...state, isLoading };
    }
    default: {
      break;
    }
  }

  return newList ? { ...state, todos: newList } : state;
};

export default reducer;
